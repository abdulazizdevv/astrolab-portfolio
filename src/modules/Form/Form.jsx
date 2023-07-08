import { Title } from "src/components/UI/Title";
import "./form.scss";

export const Form = () => {
  return (
    <div className="all_form">
      <Title title={"Form"} />
      <form autoComplete="off">
        <input placeholder="Full Name" type="text" name="fullname" />
        <input placeholder="Phone number" type="tel" name="phonenumber" />
        <input placeholder="Email" type="email" name="email" />
        <textarea placeholder="Your text" name="text"></textarea>
        <button className="btn_send">Send</button>
      </form>
    </div>
  );
};
