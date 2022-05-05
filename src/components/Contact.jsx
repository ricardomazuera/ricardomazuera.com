import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post('https://formspree.io/f/xwkyrjby', formData, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          message: "",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full pb-8 pt-[90px] form "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#19CFF7]">
            Contacto
          </p>
          <p className="py-4">
            Diligencia este formulario o envíame un email a
            <a href="mailto:rm@ricardomazuera.com"> rm@ricardomazuera.com</a>
          </p>
        </div>
        <div className=" form-group flex flex-col max-w-[600px] w-full form text-gray-700">
            <label htmlFor="name"></label>
            <input
              type="text"
              className="form-control bg-[#ccd6f6] p-2"
              id="name"
              placeholder="Tu nombre"
              required="required"
              name="name"
              value={query.name}
              onChange={handleChange()}
            />
          <label htmlFor="email" required="required"></label>
          <input
            type="email"
            className="form-control bg-[#ccd6f6] p-2 my-4"
            id="email"
            required="required"
            placeholder="Tu email"
            name="email"
            value={query.email}
            onChange={handleChange()}
          />
          <label htmlFor="message"></label>
          <textarea
            type="text"
            className="form-control bg-[#ccd6f6] p-2"
            id="message"
            placeholder="Tu mensaje"
            required="required"
            name="message"
            value={query.message}
            rows="10"
            onChange={handleChange()}
          />
        </div>

        <div className="form-group w-full flex flex-col">
          {formStatus ? (
            <div className="text-center pt-3">
              Tu mensaje ha sido enviado
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="mx-auto text-white border-2 px-4 py-3 my-4 hover:bg-[#19CFF7] hover:border-[#19CFF7] hover:text-gray-800"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
}
