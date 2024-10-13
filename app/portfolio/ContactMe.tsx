"use client";
import React, { useState } from "react";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission logic here

    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-center items-center p-10 md:p-52 gap-10 bg-gray"
    >
      <h1 className="text-4xl underline font-bold">Contact Me</h1>
      <div className="w-full p-4">
        <form
          action="mailto:dongluudev@gmail.com"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 "
        >
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={message}
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="p-2 border bg-white hover:cursor-pointer hover:bg-gray/50 "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
