import {FC, useCallback, useState} from 'react';
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

const {default: SnackbarComponent} = await import(
  '@features/Snackbar/SnackbarComponent'
);
const Login: FC = () => {
  const push = useNavigate();
  const [login, {isError}] = useLoginMutation();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isSubmitting, isValid},
  } = useForm({
    mode: 'onChange', // req
    defaultValues: defaultAuthValues,
    resolver: zodResolver(validationAuthSchema),
  });

  const onSubmit = useCallback(
    async (data: z.infer<typeof validationAuthSchema>): Promise<void> => {
      try {
        const user: IAuthState = (await login({
          email: data.email,
          password: data.password,
          id: uuidv4(),
        }).unwrap()) as IAuthState;
        dispatch(setCredentials({name: user.name, token: user.token}));
        reset();
        push('/');
      } catch (error: unknown) {
        console.log(error);
        setOpen(true);
      }
    },
    [login, dispatch, reset, push],
  );

  const switchAuthForm = useCallback(() => {
    push('/register');
  }, [push]);

  return (
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
        {isError && <ErrorAlert label={isError} color='error' />}
        <NavigateLabel
          label='don`t have an account?'
          switchAuth={switchAuthForm}
        />
      </Auth>
      <SnackbarComponent
        error
        message='Something goes wrong'
        open={open}
        setOpen={setOpen}
      />
    </form>
  );
};

export default Login;
