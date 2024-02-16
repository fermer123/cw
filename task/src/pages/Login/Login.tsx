import {FC, useCallback, useState} from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import * as Yup from 'yup';

import {IAuthData} from '@app/types';
import InputForm from '@features/InputForm/InputForm';
import NavigateLabel from '@features/NavigateLabel/NavigateLabel';
import PostButton from '@features/PostButton/PostButton';
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

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, 'Слишком короткий пароль')
      .max(20, 'Слишком длинный пароль')
      .required('Поле не должо быть пустым'),
    email: Yup.string()
      .email('Неверный email')
      .required('Поле не должо быть пустым'),
  });

  const onSubmit = useCallback(
    async (
      values: IAuthData,
      actions: FormikHelpers<IAuthData>,
    ): Promise<void> => {
      try {
        const user: IAuthState = (await login({
          email: values.email,
          password: values.password,
          id: uuidv4(),
        }).unwrap()) as IAuthState;
        dispatch(setCredentials({name: user.name, token: user.token}));
        actions.resetForm();
        actions.setSubmitting(false);
        push('/');
      } catch (error: unknown) {
        setOpen(true);
      }
    },
    [login, push, dispatch],
  );

  const switchAuthForm = useCallback(() => {
    push('/register');
  }, [push]);

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={{password: '', email: '', id: ''}}>
        {({errors, touched, isSubmitting, dirty, handleSubmit}) => (
          <Form>
            <Auth>
              <Field
                error={errors.email}
                touched={touched.email}
                label='Введите email'
                name='email'
                component={InputForm}
              />
              <Field
                error={errors.password}
                touched={touched.password}
                label='Введите пароль'
                name='password'
                component={InputForm}
              />

              <PostButton
                disabled={
                  !dirty ||
                  isSubmitting ||
                  !!(errors.email && touched.email) ||
                  !!(errors.password && touched.password)
                }
                onSubmit={handleSubmit}
                label='LOG IN'
              />
              {isError && <ErrorAlert label={isError} color='error' />}
              <NavigateLabel
                label='don`t have an account?'
                switchAuth={switchAuthForm}
              />
            </Auth>
          </Form>
        )}
      </Formik>
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
