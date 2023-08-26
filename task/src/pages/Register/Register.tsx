import {FC, useCallback, useState} from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

import {IAuthData} from '@src/app/types';
import useLocalStorage from '@src/components/component/Hook/UseLocalStorage/useLocalStorage';
import InputForm from '@src/components/component/InputForm/InputForm';
import NavigateLabel from '@src/components/component/NavigateLabel/NavigateLabel';
import PostButton from '@src/components/component/PostButton/PostButton';

import register from '../../components/api/register/register';

import {Auth, ErrorAlert} from './Register.styled';

const Register: FC = () => {
  const [, setUser] = useLocalStorage('user', '');
  const [errorRegister, setErrorRegister] = useState<string>('');
  const push = useNavigate();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(3, 'Слишком короткий пароль')
      .max(20, 'Слишком длинный пароль')
      .required('Поле не должо быть пустым'),
    email: Yup.string()
      .email('Неверный email')
      .required('Поле не должо быть пустым'),
  });

  const onSubmit = (values: IAuthData, actions: FormikHelpers<IAuthData>) => {
    register({
      email: values.email,
      password: values.password,
      setError: setErrorRegister,
      push,
      setUser,
    });
    actions.resetForm();
    actions.setSubmitting(false);
  };

  const switchAuthForm = useCallback(() => {
    setErrorRegister('');
    push('/login');
  }, [push]);

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={{password: '', email: ''}}>
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
              label='SIGN IN'
            />
            {!!errorRegister && (
              <ErrorAlert label={errorRegister} color='error' />
            )}
            <NavigateLabel
              label='already have an account?'
              switchAuth={switchAuthForm}
            />
          </Auth>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
