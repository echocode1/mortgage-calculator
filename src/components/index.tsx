import { FormSection } from "./FormSection/FormSection";
import { FormResult } from "./FormResult/FormResult";
import { FormResultEmpty } from "./formResultEmpty/formResultEmpty";
import useForm from "../hooks/useForm";

export const FormLayout = () => {
  // Move hooks to the parent to share state
  const {
    error,
    calculatorForm,
    handleChange,
    handleSubmit,
    ClearAll,
    monthlyPayment,
    handleCalculation,
    totalPayment,
    submitted,
  } = useForm();

  return (
    <main
      className="grid bg-white cols-1 min-w-[325px] md:overflow-hidden
        md:grid-cols-2 md:max-w-[1000px] md:rounded-scale_sm"
    >
      <FormSection
        error={error}
        calculatorForm={calculatorForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        ClearAll={ClearAll}
        handleCalculation={handleCalculation}
      />

      {submitted && monthlyPayment && totalPayment ? (
        <FormResult
          monthlyPayment={monthlyPayment}
          totalPayment={totalPayment}
        />
      ) : (
        <FormResultEmpty />
      )}
    </main>
  );
};
