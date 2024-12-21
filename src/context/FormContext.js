"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [contextState, setContextState] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        setContextState({ formData: JSON.parse(savedData) });
      }
    }
  }, []);

  function saveFormData(data) {
    const newState = { ...contextState, formData: data };
    setContextState(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(data));
    }
  }

  const contextValues = { ...contextState, saveFormData };

  return (
    <FormContext.Provider value={contextValues}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
