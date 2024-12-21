"use client";
import { useState } from "react";
import { useForm } from "@/context/FormContext";
import styles from "@/styles/form.module.scss";

export default function FormComponent() {
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { saveFormData } = useForm();

  const submit = (e) => {
    e.preventDefault();
    saveFormData(localForm);
    console.log("data saved: ", localForm);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={submit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={localForm.name}
            onChange={(e) => {
              setLocalForm({ ...localForm, name: e.target.value });
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={localForm.email}
            onChange={(e) => {
              setLocalForm({ ...localForm, email: e.target.value });
            }}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={localForm.message}
            onChange={(e) => {
              setLocalForm({ ...localForm, message: e.target.value });
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
