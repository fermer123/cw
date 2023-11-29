import {FC, useCallback} from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import * as Yup from 'yup';

import {IAuthData} from '@app/types';
import {useRegisterMutation} from '@src/store/api/authApi';
import InputForm from '@widgets/InputForm/InputForm';
import NavigateLabel from '@widgets/NavigateLabel/NavigateLabel';
import PostButton from '@widgets/PostButton/PostButton';

import {Auth, ErrorAlert} from './Register.styled';

const Register: FC = () => {
  const [register, {isError}] = useRegisterMutation();
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

  const onSubmit = useCallback(
    async (values: IAuthData, actions: FormikHelpers<IAuthData>) => {
      await register({
        email: values.email,
        password: values.password,
        id: uuidv4(),
      });
      push('/');
      actions.resetForm();
      actions.setSubmitting(false);
    },
    [push, register],
  );

  const switchAuthForm = useCallback(() => {
    push('/login');
  }, [push]);

  return (
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
              label='SIGN IN'
            />
            {!!isError && <ErrorAlert label={isError} color='error' />}
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
