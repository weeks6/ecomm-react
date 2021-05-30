import "../blocks/letter.css";

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Letter({
  handleSubmit,
}: {
  handleSubmit: (v: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    email: {
      value: "",
      valid: false,
      validityMessage: "",
    },
  });

  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscirbe = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("subbed", "true");
      handleSubmit(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleFormChange = (evt: ChangeEvent<HTMLFormElement>) => {
    setIsValid(formData.email.valid);
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsValid(!!emailRef.current?.validity.valid);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubscirbe}
      onChange={handleFormChange}
      className="form letter"
    >
      <div className="form__container">
        <h3 className="form__title">Подписаться на рассылку</h3>
        {/* TODO: Вынести инпут в компонент */}
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
            Почта
          </label>
          <span className="form__field-bar"></span>
          <span
            className="form__field-notice"
            title={formData.email.validityMessage}
          >
            {formData.email.validityMessage}
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
          Подписаться
        </button>
      </div>
    </form>
  );
}
