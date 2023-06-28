import Button from "../components/Button";
import IconSuccess from "../components/svg/IconSuccess";

const SuccessPage = ({ email, handleClick }) => {
  return (
    <div className="flex justify-center items-center md:h-screen md:p-5 md:bg-slate-900">
      <div className="p-8 py-10 font-roboto bg-white flex flex-col h-screen md:h-[25rem] md:w-[25rem] rounded-3xl md:px-12">
        <section className="flex flex-col flex-1 gap-10 md:gap-5">
          <span className="mt-24 md:mt-0">
            <IconSuccess />
          </span>
          <h1 className="text-4xl font-bold text-slate-900">
            Thanks for subscribing!
          </h1>
          <p className="text-slate-800 sm:text-lg md:text-sm">
            A confirmation email has been sent to{" "}
            <span className="font-bold text-slate-900">{email}</span>. Please
            open it and click the button inside to confirm your subscription
          </p>
        </section>
        <Button text="Dismiss message" onClick={handleClick} className="mt-6" />
      </div>
    </div>
  );
};

export default SuccessPage;
