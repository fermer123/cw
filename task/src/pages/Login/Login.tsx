import React, {FC, lazy, useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {z} from 'zod';

import InputForm from '@features/InputForm/InputForm';
import NavigateLabel from '@features/NavigateLabel/NavigateLabel';
import PostButton from '@features/PostButton/PostButton';
import {zodResolver} from '@hookform/resolvers/zod';
import {defaultAuthValues, validationAuthSchema} from '@shared/consants';
import useAppDispatch from '@shared/hooks/redux/useAppDispatch';
import {useLoginMutation} from '@store/api/authApi';
import {IAuthState, setCredentials} from '@store/slice/authSlice';

import {Auth, ErrorAlert} from './Login.styled';

const loadSnackbarComponent = async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const module = await import('snackbar/SnackbarComponent');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    return {default: module.default};
  } catch (error) {
    return {default: () => <div>Альтернативный JSX элемент</div>};
  }
};
// Загрузка компонента SnackbarComponent с обработкой ошибки

const SnackbarComponent = lazy(() => loadSnackbarComponent());

// const dynamicFederation = async (scope: string, module: string) => {
//   const container = window[scope]; // or get the container somewhere else
//   // Initialize the container, it may provide shared modules
//   await container.init(__webpack_share_scopes__.default);
//   return container.get(module).then((factory) => {
//     const Module = factory();
//     return Module;
//   });
// };
const Login: FC = () => {
  const push = useNavigate();
  const [login, {isError, error: isErrorResonse}] = useLoginMutation();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isSubmitting, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: defaultAuthValues,
    resolver: zodResolver(validationAuthSchema),
  });
  // попробовать использовать динамический префетч (Dynamic Prefetch)
  const onSubmit = useCallback(
    async (data: z.infer<typeof validationAuthSchema>): Promise<void> => {
      try {
        const user: IAuthState = await login({
          email: data.email,
          password: data.password,
          id: uuidv4(),
        }).unwrap();
        if (user) {
          dispatch(setCredentials({name: user.name, token: user.token}));
        }

        reset();
        push('/');
      } catch (error: unknown) {
        setOpen(true);
      }
    },
    [login, dispatch, reset, push],
  );

  const switchAuthForm = useCallback(() => {
    push('/register');
  }, [push]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Auth>
          <Controller
            name='email'
            control={control}
            rules={{
              required: true,
            }}
            render={({field, fieldState}) => (
              <InputForm
                {...field}
                touchedFields={fieldState.isTouched}
                error={fieldState.error?.message}
                label='Введите email'
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{
              required: true,
            }}
            render={({field, fieldState}) => (
              <InputForm
                {...field}
                touchedFields={fieldState.isTouched}
                error={fieldState.error?.message}
                label='Введите пароль'
              />
            )}
          />
          <PostButton
            disabled={!isValid || isSubmitting}
            onSubmit={() => handleSubmit(onSubmit)}
            label='LOG IN'
          />
          {isError && 'data' in isErrorResonse && (
            <ErrorAlert label={isErrorResonse.data as string} color='error' />
          )}
          <NavigateLabel
            label='don`t have an account?'
            switchAuth={switchAuthForm}
          />
        </Auth>
      </form>
      <SnackbarComponent
        error
        message='Something goes wrong'
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Login;
