import { FormResultProps } from "../../types/type";

export const FormResult = ({
  monthlyPayment,
  totalPayment,
}: FormResultProps) => {
  return (
    <section className="bg-payBg text-white px-6 pt-7 pb-10 md:rounded-es-scale_lg md:px-10 md:pt-9">
      <article>
        <h3 className="text-2xl font-semibold mb-3 md:mb-5">Your results</h3>
        <p className="text-slate300 mb-4 md:mb-9">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
        <div className="px-4 py-6 border-t-4 border-lime bg-slate900 rounded-lg md:px-8">
          <div>
            <p className="text-slate300 mb-3 md:mb-4">
              Your monthly repayments
            </p>
            <p className="text-4xl font-bold text-lime md:text-5xl md:mt-4 overflow-hidden">
              £
              {new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(monthlyPayment)}
            </p>
          </div>
          <hr className="my-4 bg-slate-600 border-0 h-[1px] md:my-10" />
          <div>
            <p className="text-slate300 mb-2">
              Total you'll repay over the term
            </p>
            <p className="text-2xl font-bold text-white md:mb-5 overflow-hidden">
              £
              {new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(totalPayment)}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
