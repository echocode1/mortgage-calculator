// hooks/useForm.ts
import { useState } from "react";
import { UseFormProps } from "./../types/type";

const useForm = (): UseFormProps => {
  const [submitted, setSubmitted] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [calculatorForm, setCalculatorForm] = useState({
    amount: "",
    term: "",
    interest: "",
    mortgageType: "",
  });
  const [error, setError] = useState<{ [key: string]: string }>({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = event.target;
    setCalculatorForm((prevForm) => ({
      ...prevForm,
      [name]: type === "radio" ? value : value,
    }));
    setError({});
  }

  function handleSubmitInput() {
    const errorResponse: { [key: string]: string } = {};

    if (!calculatorForm.amount) errorResponse.amount = "This field is required";
    if (!calculatorForm.term) errorResponse.term = "This field is required";
    if (!calculatorForm.interest)
      errorResponse.interest = "This field is required";
    if (!calculatorForm.mortgageType)
      errorResponse.mortgageType = "Please select a mortgage type";

    setError(errorResponse);
    return Object.keys(errorResponse).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (handleSubmitInput()) {
      handleCalculation();
    }
  }

  function ClearAll() {
    setCalculatorForm({
      amount: "",
      term: "",
      interest: "",
      mortgageType: "",
    });
    setTotalPayment(0);
    setMonthlyPayment(0);
    setError({});
    setSubmitted(false);
  }

  function handleCalculation() {
    const principal = parseFloat(calculatorForm.amount) || 0;
    const termYears = parseFloat(calculatorForm.term) || 0;
    const annualRate = parseFloat(calculatorForm.interest) / 100 || 0;
    const monthlyRate = annualRate / 12;
    const totalMonths = termYears * 12;

    if (calculatorForm.mortgageType === "repayment") {
      const factor = Math.pow(1 + monthlyRate, totalMonths);
      const payment = (principal * (monthlyRate * factor)) / (factor - 1);
      setMonthlyPayment(isNaN(payment) ? 0 : parseFloat(payment.toFixed(2)));
      setTotalPayment(isNaN(payment * totalMonths) ? 0 : payment * totalMonths);
    } else if (calculatorForm.mortgageType === "interestOnly") {
      const payment = principal * monthlyRate;
      setMonthlyPayment(isNaN(payment) ? 0 : parseFloat(payment.toFixed(2)));
      setTotalPayment(isNaN(payment * totalMonths) ? 0 : payment * totalMonths);
    }
    setSubmitted(true);
  }

  return {
    ClearAll,
    handleSubmit,
    handleChange,
    error,
    calculatorForm,
    handleCalculation,
    monthlyPayment,
    totalPayment,
    submitted,
  };
};

export default useForm;
