import { zig } from "../../assets/png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .max(250, "Message must be 250 characters or less"),
});
const Mail = () => {
  const initialValues = {
    email: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission here
    console.log(values);
    // Reset form fields after submission
    resetForm();
  };
  return (
    <div className="w-11/12 pb-8 mx-auto md:w-9/12 cp-container">
      <div className="items-center justify-between block md:flex ">
        <div className="w-6/12 space-y-6 ">
          <div>
            <h3 className=" text-4xl md:text-6xl font-normal text-white md:w-[400px] w-[350px]">
              JOIN THE MAILING LIST
            </h3>
            <img src={zig} className="w-8 h-8 md:w-14 md:h-14" alt="" />
          </div>
        </div>
        <div className="w-11/12 my-4 md:w-6/12 md:my-0">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="p-8 space-y-4 form-bg">
                <div className="">
                  <div htmlFor="email" className="text-[16px] font-normal">
                    Email
                  </div>
                  <Field
                    type="email"
                    name="email"
                    className="w-full p-2 border-2 rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 error"
                  />
                </div>

                

                <button
                  type="submit"
                  className="bg-[#E93C24] rounded  p-2 text-white text-sm"
                  disabled={isSubmitting}
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Mail;
