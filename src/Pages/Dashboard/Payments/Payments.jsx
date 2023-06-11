import { Elements } from "@stripe/react-stripe-js";
import useCourses from "../../../hooks/useCourses/useCourses";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const stripePayments = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payments = () => {
    const [course]=useCourses()
    // const total = course.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    return (
        <div>
        <Elements stripe={stripePayments}>
                <PaymentForm course={course}></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payments;