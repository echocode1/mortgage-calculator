import calculatorImg from "../../assets/images/icon-calculator.svg";
import { FormSectionProps } from "../../types/type";

export const FormSection = ({
  error,
  calculatorForm,
  handleChange,
  handleSubmit,
  ClearAll,
}: FormSectionProps) => {
  return (
    <section className="px-6 py-6 bg-white md:px-10">
      <div className="flex flex-col md:flex-row md:justify-between md:mb-6">
        <h2 className="text-2xl text-slate900 mb-2 font-bold">
          Mortgage Calculator
        </h2>
        <button
          className="underline underline-offset-1 text-slate700 font-medium hover:cursor-pointer"
          onClick={ClearAll}
          type="button"
        >
          Clear All
        </button>
      </div>

      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="amount" className="text-slate700 text-lg">
          Mortgage Amount
        </label>
        <br />
        <div
          className={`relative inputs flex items-center overflow-hidden hover:cursor-pointer
          ${
            error.amount
              ? "border-red"
              : calculatorForm.amount
              ? "border-lime"
              : "border-slate500"
          }`}
        >
          <span
            className={`input--num absolute px-5 py-4 
              ${
                error.amount
                  ? "bg-red text-white"
                  : calculatorForm.amount
                  ? "bg-lime text-slate900"
                  : "bg-slate100 text-slate500"
              }
            `}
          >
            £
          </span>

          <input
            className="pl-16 pr-4 outline-none border-none py-4 flex-1 cursor-pointer"
            onChange={handleChange}
            type="number"
            name="amount"
            id="amount"
            value={calculatorForm.amount}
          />
        </div>
        {error.amount && <span className="text-red">{error.amount}</span>}

        <div className="flex flex-col md:flex-row md:gap-4 md:justify-between md:mt-6">
          <div>
            <label htmlFor="mortgage--term" className="text-slate700 text-lg">
              Mortgage Term
            </label>
            <br />
            <div
              className={`relative inputs flex items-center overflow-hidden
              ${
                error.term
                  ? "border-red"
                  : calculatorForm.term
                  ? "border-lime"
                  : "border-slate500"
              }`}
            >
              <input
                className="pl-4 pr-24 outline-none border-none py-4 flex-1 md:w-[50%] cursor-pointer" // added cursor-pointer here
                onChange={handleChange}
                id="mortgage--term"
                type="number"
                name="term"
                value={calculatorForm.term}
              />
              <span
                className={`input--num absolute px-5 py-4 right-0 md:px-3 
                ${
                  error.term
                    ? "bg-red text-white"
                    : calculatorForm.term
                    ? "bg-lime text-slate900"
                    : "bg-slate100 text-slate500"
                }`}
              >
                years
              </span>
            </div>
            {error.term && <span className="text-red">{error.term}</span>}
          </div>

          <div>
            <label htmlFor="interest" className="text-slate700 text-lg">
              Interest Rate
            </label>
            <br />
            <div
              className={`relative inputs flex items-center overflow-hidden
              ${
                error.interest
                  ? "border-red"
                  : calculatorForm.interest
                  ? "border-lime"
                  : "border-slate500"
              }`}
            >
              <input
                className="pl-4 pr-16 outline-none border-none py-4 flex-1 md:w-[50%] cursor-pointer" // added cursor-pointer here
                onChange={handleChange}
                type="number"
                id="interest"
                name="interest"
                value={calculatorForm.interest}
              />
              <span
                className={`input--num absolute px-5 py-4 right-0 md:px-3 
                  ${
                    error.interest
                      ? "bg-red text-white"
                      : calculatorForm.interest
                      ? "bg-lime text-slate900"
                      : "bg-slate100 text-slate500"
                  } `}
              >
                %
              </span>
            </div>
            {error.interest && (
              <span className="text-red">{error.interest}</span>
            )}
          </div>
        </div>

        <div className="mt-6 mb-2 md:mt-0">
          <p className="mb-2 text-slate700">Mortgage Type</p>
          <div
            className={`radio--input
            ${
              calculatorForm.mortgageType === "repayment"
                ? "bg-limeActive border-lime"
                : "bg-transparent border-slate500"
            }`}
          >
            <input
              className={`
                cursor-pointer mr-6 scale-150
                ${
                  calculatorForm.mortgageType === "repayment"
                    ? "accent-lime"
                    : "accent-slate700"
                } `}
              onChange={handleChange}
              id="radioBox1"
              type="radio"
              name="mortgageType"
              value="repayment"
              checked={calculatorForm.mortgageType === "repayment"}
            />
            <label htmlFor="radioBox1">Repayment</label>
          </div>

          <div
            className={`radio--input
            ${
              calculatorForm.mortgageType === "interestOnly"
                ? "bg-limeActive border-lime"
                : "bg-transparent border-slate500"
            }`}
          >
            <input
              className={`
                mr-6 scale-150 hover:cursor-pointer
                ${
                  calculatorForm.mortgageType === "interestOnly"
                    ? "accent-lime"
                    : "accent-slate700"
                }`}
              onChange={handleChange}
              id="radioBox2"
              type="radio"
              name="mortgageType"
              value="interestOnly"
              checked={calculatorForm.mortgageType === "interestOnly"}
            />
            <label htmlFor="radioBox2">Interest Only</label>
          </div>
          {error.mortgageType && (
            <span className="text-red">{error.mortgageType}</span>
          )}
        </div>

        <button
          className="flex gap-4 w-full bg-lime py-4 justify-center rounded-scale_md mt-7 
            hover:bg-btnHover text-lg items-center font-bold text-slate900 md:mb-4 md:mt-10"
          type="submit"
        >
          <img src={calculatorImg} alt="calculator-icon" />
          Calculate Repayments
        </button>
      </form>
    </section>
  );
};
