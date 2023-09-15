"use client";
import React, { createContext, useContext, useReducer, useState } from "react";

// Define the initial state
// const initialState = {
//   questionText: "Question",
//   options: [{ optionText: "Option 1" }],
//   open: false,
// };
// Create a new context for the form
const FormContext = createContext();

// Custom hook to use the form context
export function useFormContext() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
    // State for form data
    const [formData, setFormData] = useState({
      questions: [
        {
          questionText: "Question",
          options: [{ optionText: "Option 1" }],
          open: false,
        },
      ],
    });
  
    // Function to update the question text of a specific question
    const updateQuestionText = (text, questionIndex) => {
      const updatedQuestions = [...formData.questions];
      updatedQuestions[questionIndex].questionText = text;
      setFormData({ ...formData, questions: updatedQuestions });
    };
  
    // Function to add an option to a specific question
    const addOption = (optionText, questionIndex) => {
      const updatedQuestions = [...formData.questions];
      updatedQuestions[questionIndex].options.push({ optionText });
      setFormData({ ...formData, questions: updatedQuestions });
    };
  
    // Function to add a new question
    const addQuestion = () => {
      const updatedQuestions = [...formData.questions];
      updatedQuestions.push({
        questionText: "New Question",
        options: [{ optionText: "Option 1" }],
        open: false,
      });
      setFormData({ ...formData, questions: updatedQuestions });
    };
  
    // Function to toggle the open state of a question
    const toggleForm = (questionIndex) => {
      const updatedQuestions = [...formData.questions];
      updatedQuestions[questionIndex].open = !updatedQuestions[questionIndex].open;
      setFormData({ ...formData, questions: updatedQuestions });
    };
  
    return (
      <FormContext.Provider
        value={{
          formData,
          updateQuestionText,
          addOption,
          addQuestion,
          toggleForm,
        }}
      >
        {children}
      </FormContext.Provider>
    );
  }