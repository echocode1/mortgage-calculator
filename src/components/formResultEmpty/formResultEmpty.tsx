import resultImg from "../../assets/images/illustration-empty.svg";

export const FormResultEmpty = () => {
  return (
    <section
      className="bg-slate900 text-white px-6 pt-7 pb-10 md:rounded-es-scale_lg 
      md:px-10 md:pt-9 md:flex md:items-center md:justify-center md:flex-col"
    >
      <img className="mx-auto mt-8 mb-6" src={resultImg} alt="resultEmptyImg" />
      <h3 className="text-white text-center text-2xl font-bold mb-6">
        Results shown here
      </h3>
      <p className="text-center text-slate300">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
};
