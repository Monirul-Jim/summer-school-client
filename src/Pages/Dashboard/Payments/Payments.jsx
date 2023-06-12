import { Elements } from "@stripe/react-stripe-js";
import useCourses from "../../../hooks/useCourses/useCourses";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router-dom";
const stripePayments = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payments = () => {
  const [course] = useCourses()
  // const total = course.reduce((sum, item) => sum + item.price, 0);
  // const price = parseFloat(total.toFixed(2))
  const {id}=useParams()
  const specificCourse = course.find(item => item._id === id);
  console.log(specificCourse);
  return (
    <div>
      <Elements stripe={stripePayments}>
        <PaymentForm course={specificCourse}></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payments;