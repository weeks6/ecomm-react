import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import "../../blocks/form.css";

import { signIn } from "../../utils/Auth";
import { useAuth, useCart } from "../../store/store";

type SignInForm = {
  email: {
    value: string;
    valid: boolean;
    validityMessage: string;
  };
  password: {
    value: string;
    valid: boolean;
    validityMessage: string;
  };
};

interface Props {
  handleSubmit: () => void;
}

function SignIn({ handleSubmit }: Props) {
  const [formData, setFormData] = useState<SignInForm>({
    email: {
      value: "",
      valid: false,
      validityMessage: "",
    },
    password: {
      value: "",
      valid: false,
      validityMessage: "",
    },
  });

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser, user } = useAuth();
  const { addItem } = useCart();

  const handleSignInSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setIsLoading(true);
    signIn({
      email: formData.email.value,
      password: formData.password.value,
    })
      .then((res) => {
        if (res) {
          setUser({
            id: 1,
            email: res.email,
            orders: res.orders,
            avatar: res.avatar,
            cart: res.cart,
            name: res.name,
            favourites: res.favourites,
            reviews: res.reviews,
          });
          res.cart.content.forEach((v) => addItem(v.book, v.amount));

          handleSubmit();
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));

    console.log(formData);
  };

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    setIsValid(formData.email.valid && formData.password.valid);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: {
        value: evt.target.value,
        valid: evt.target.validity.valid,
        validityMessage: evt.target.validationMessage,
      },
    });
  };

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsValid(
        !!(
          emailRef.current?.validity.valid &&
          passwordRef.current?.validity.valid
        )
      );
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <form
      onSubmit={handleSignInSubmit}
      onChange={handleFormChange}
      className="form"
    >
      <div className="form__container">
        <h3 className="form__title">?????????? ?? ??????????????</h3>
        {/* TODO: ?????????????? ?????????? ?? ?????????????????? */}
        <div className="form__field">
          <input
            type="email"
            className="form__field-input"
            name="email"
            value={formData.email.value}
            onChange={handleInputChange}
            autoComplete="off"
            required
            ref={emailRef}
          />
          <label
            className={
              formData.email.value
                ? "form__label form__label_raised"
                : "form__label"
            }
            htmlFor="email"
          >
            ??????????
          </label>
          <span className="form__field-bar"></span>
          <span
            className="form__field-notice"
            title={formData.email.validityMessage}
          >
            {formData.email.validityMessage}
          </span>
        </div>
        <div className="form__field">
          <input
            type="password"
            className="form__field-input"
            name="password"
            value={formData.password.value}
            onChange={handleInputChange}
            autoComplete="off"
            required
            ref={passwordRef}
          />
          <label
            className={
              formData.password.value
                ? "form__label form__label_raised"
                : "form__label"
            }
            htmlFor="password"
          >
            ????????????
          </label>
          <span className="form__field-bar"></span>
          <span
            className="form__field-notice"
            title={formData.password.validityMessage}
          >
            {formData.password.validityMessage}
          </span>
        </div>
        <button
          className={`
            btn button__main
            ${!isValid && "button__main_disabled"}
            ${isLoading && "loading"}
          `}
          disabled={!isValid || isLoading}
          type="submit"
        >
          ??????????
        </button>
      </div>
    </form>
  );
}

export default SignIn;
