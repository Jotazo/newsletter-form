import DesktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import MobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import ListItem from "../components/ListItem";
import Button from "../components/Button";

import "./FormPage.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

const texts = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const FormPage = ({ handleSubmit, validEmail, handleChange, email }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="flex justify-center items-center md:h-screen md:p-5 md:bg-slate-900">
      <div className="bg-white flex flex-col rounded-3xl md:flex-row md:h-[35rem] md:p-4">
        <img
          src={width > 765 ? DesktopImage : MobileImage}
          alt="mobile-image"
          className="md:order-2 md:object-cover md:rounded-3xl"
        />
        <section className="font-roboto text-slate-800 p-6 py-8 flex flex-col gap-5 md:justify-center">
          <h1 className="text-5xl font-bold text-slate-900">Stay Updated!</h1>
          <h3 className="">
            Join 60,000+ product managers receiving monthly updates on:
          </h3>
          <ul className="flex flex-col gap-2">
            {texts.map((text, i) => (
              <ListItem key={i} text={text} />
            ))}
          </ul>
          <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <label
                htmlFor="email"
                className="text-xs font-bold text-slate-800"
              >
                Email address
              </label>
              {!validEmail && (
                <span className="email-error">Valid email required</span>
              )}
            </div>
            <input
              type="text"
              value={email}
              onChange={handleChange}
              className={`email-input ${!validEmail && "error"}`}
              placeholder="email@company.com"
            />
            <Button text="Subscribe to monthly newsletter" className="mt-4" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default FormPage;
