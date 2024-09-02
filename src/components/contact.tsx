import React, { ChangeEvent, FC, useState } from "react";
import "./layout.css";
import Input from "./input";
import Button from "./button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import BookingCalendar from "./calendar";
import Resume from "./resume";

const Contact: FC = () => {
  const [formDataName, setFormDataName] = useState<string>("");
  const [formDataEmail, setFormDataEmail] = useState<string>("");
  const [formDataMessage, setFormDataMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChangeName = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDataName(event.target.value);
  };

  const handleChangeEmail = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDataEmail(event.target.value);
  };

  const handleChangeMessage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDataMessage(event.target.value);
  };

  const validateFields = () => {
    const emptyFields: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formDataName) emptyFields.push("Name");
    if (!formDataEmail) emptyFields.push("Email");
    else if (!emailRegex.test(formDataEmail))
      emptyFields.push("Email (invalid format)");
    if (!formDataMessage) emptyFields.push("Message");

    return emptyFields;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const emptyFields = validateFields();
    if (emptyFields.length > 0) {
      alert(
        `Please fill up empty fields or correct invalid fields: ${emptyFields.join(
          ", "
        )}`
      );
      return;
    }

    const data = {
      full_name: formDataName,
      email_address: formDataEmail,
      message: formDataMessage,
    };

    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/e2UUyfFHWbV41PXCduWivU",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        setIsSubmitted(true);
        alert("Your form is submitted!");
      } else {
        alert("There was a problem with your submission.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was a problem with your submission.");
    }
  };

  return (
    <>
      <section
        className="grid md:grid-cols-2 md:mt-12 py-20 gap-4 bg-pink-200 border rounded p-12 mt-10"
        style={{ backgroundImage: "linear-gradient(pink, white, pink)" }}
      >
        <div>
          <h5 className="text-xl font-bold text-black my-2">Let's Connect.</h5>
          <div>
            <BookingCalendar />
          </div>
          <div className="max-w-20 flex flex-row justify-between md:flex-col align-center">
            <a
              href="https://github.com/Mndraca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaGithub className="md:mb-3 md:mt-3 h-5 w-5" />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/milena-komnenic-75835051/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaLinkedin className="md:mb-3 md:mt-3 h-5 w-5" />
              </i>
            </a>
            <a href="#">
              <i>
                <FaTwitter className="md:mb-3 md:mt-3 h-5 w-5" />
              </i>
            </a>
          </div>
          <div>
            <Resume />
          </div>
        </div>
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-xl font-bold">Thank you for your message!</h3>
            <p>I will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div id="contact">
              <Input
                name="name"
                placeholder="Enter your name"
                handleChange={handleChangeName}
              />
              <Input
                name="email"
                placeholder="Enter your email"
                handleChange={handleChangeEmail}
              />
              <Input
                name="message"
                placeholder="Enter your message"
                handleChange={handleChangeMessage}
              />
              <Button name="Submit" handleClick={handleSubmit} />
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default Contact;
