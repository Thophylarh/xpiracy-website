import { zig } from '../../assets/png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useCreateNewsLetter from '../../hooks/useCreateNewsLetter';
import { useContext, useEffect } from 'react';
import { AppDataContext } from '../../context/AppContext';
import { Alert } from '@mui/material';
import AppBtn from '../../components/AppBtn/AppBtn';
import AppBigHeader from '../../components/AppBigHeader/AppBigHeader';
import AppSubText from '../../components/AppSubText/AppSubText';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const Mail = () => {
  const { makePostRequest, loading, setShowSuccessDiv, showSuccessDiv } =
    useCreateNewsLetter();
  const {
    error,
    setError,
    successMessage,
    setSuccessMessage,
    showDiv,
    setShowDiv,
  } = useContext(AppDataContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSuccessDiv(false);
    }, 9000); // 2 seconds

    return () => clearTimeout(timeout);
  }, [showSuccessDiv]);

  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values, 'emaill...');
      await makePostRequest({
        email: values.email,
      });
      formik.resetForm();
    },
  });

  return (
    <div className="">
      <div className="items-center w-[100%] px-14 mt-40 mb-20 justify-between block md:flex ">
        <div className="w-6/12 space-y-6 ">
          <div>
            <AppBigHeader
              customClass="md:w-[330px] w-[350px] mb-4"
              title="STAY IN THE KNOW."
            />
            <AppSubText title="Receive extra content, community, resources, and more." />
          </div>
        </div>
        <div className="w-full my-4 md:w-6/12 md:my-0">
          <form
            onSubmit={formik.handleSubmit}
            className="p-8 space-y-4 form-bg"
          >
            {showSuccessDiv && (
              <Alert severity="success">{successMessage}</Alert>
            )}

            <div className="">
              <label
                htmlFor="email"
                className="text-[15px] font-normal text-[#838485] font-ppeiko"
              >
                Enter Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border-[1px] border-[#b5b8c1] rounded-md outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 error">{formik.errors.email}</div>
              ) : null}
            </div>

            {loading ? (
              <AppBtn title="Submitting..." customClass="bg-[#808080]" />
            ) : (
              // <A
              //   type="submit"
              //   className="bg-[#808080]  hover:bg-[#f86d5a] rounded-[40px]  p-4 text-white  font-ppeiko  text-sm"
              //   disabled={true}
              // >
              //   Submitting...
              // </A>
              <AppBtn title="SignUp For More" />
              // <button
              //   type="submit"
              //   className="bg-[#E93C24] hover:bg-[#f86d5a] rounded-[40px]  p-4 text-white text-sm font-ppeiko "
              // >
              //   SignUp For More
              // </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mail;
