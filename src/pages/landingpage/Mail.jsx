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
    <div className="w-9/12 mx-auto cp-container">
      <div className="flex items-center justify-between ">
        <div className="w-6/12 space-y-6 ">
          <div>
            <h3 className="text-6xl font-normal text-white w-[400px]">
              JOIN THE MAILING LIST
            </h3>
            <img src={zig} className="w-14 h-14 " alt="" />
          </div>
        </div>
        <div className="w-4/12 ">
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

                <div className="">
                  <div htmlFor="message" className="text-[16px] font-normal">
                    Message
                  </div>
                  <Field
                    as="textarea"
                    name="message"
                    className="w-full border-2 rounded-md resize-none textarea-class "
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#E93C24] rounded-lg  p-4 text-white"
                  disabled={isSubmitting}
                >
                  Submit
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
