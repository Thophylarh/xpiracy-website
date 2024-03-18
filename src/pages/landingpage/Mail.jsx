import { zig } from "../../assets/png";
import { useFormik } from "formik";
import * as Yup from "yup";
import useCreateNewsLetter from "../../hooks/useCreateNewsLetter";
import { useContext } from "react";
import { AppDataContext } from "../../context/AppContext";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Mail = () => {
  const { makePostRequest, loading } = useCreateNewsLetter();
  const { error, setError, successMessage, setSuccessMessage } =
    useContext(AppDataContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values, "emaill...");
      const response = await makePostRequest({
        email: values.email,
      });
    },
  });

  return (
    <div className="w-11/12 pb-8 mx-auto md:w-9/12 cp-container">
      <div className="items-center justify-between block md:flex ">
        <div className="w-6/12 space-y-6 ">
          <div>
            <h3 className=" text-2xl md:text-6xl font-normal text-white md:w-[400px] w-[350px]">
              JOIN THE MAILING LIST
            </h3>
            <img src={zig} className="w-8 h-8 md:w-14 md:h-14" alt="" />
          </div>
        </div>
        <div className="w-11/12 my-4 md:w-6/12 md:my-0">
          <form
            onSubmit={formik.handleSubmit}
            className="p-8 space-y-4 form-bg"
          >
            <p className="text-[16px] color-[#5cb85c] font-normal">
              {successMessage}
            </p>
            <div className="">
              <label htmlFor="email" className="text-[16px] font-normal">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border-2 rounded-md outline-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 error">{formik.errors.email}</div>
              ) : null}
            </div>

            {loading ? (
              <button
                type="submit"
                className="bg-[#808080] rounded  p-2 text-white text-sm"
                disabled={true}
              >
                Submitting...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-[#E93C24] hover:bg-[#f86d5a] rounded  p-2 text-white text-sm font-ppeiko "
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mail;
