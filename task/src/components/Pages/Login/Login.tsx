import {FC, useState} from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

import useLocalStorage from '@src/components/component/Hook/UseLocalStorage/useLocalStorage';
import InputForm from '@src/components/component/InputForm/InputForm';
import {IAuthData} from '@src/types';

import login from '../../api/login/login';

import {Auth, ErrorAlert} from './Login_style';

const Login: FC = () => {
  const [, setUser] = useLocalStorage('user', '');
  const [errorLogin, setErrorLogin] = useState<string>('');
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
    login({
      email: values.email,
      password: values.password,
      setError: setErrorLogin,
      push,
      setUser,
    });
    actions.resetForm();
    actions.setSubmitting(false);
  };

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
            {!!errorLogin && <ErrorAlert label={errorLogin} color='error' />}
          </Auth>
        </Form>
      )}
    </Formik>
  );
};

export default Login;