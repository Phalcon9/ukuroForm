"use client";
import { useAppContext, useFormContext } from "@/context/AppContext";

const Form = () => {
    const { formData, updateQuestionText, addOption, addQuestion, toggleForm } =
    useFormContext();

  return (
    <form>
      {formData.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <div>
            <label>Question Text:</label>
            <input
              type="text"
              value={question.questionText}
              onChange={(e) =>
                updateQuestionText(e.target.value, questionIndex)
              }
            />
          </div>

          <div>
            <label>Options:</label>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option.optionText}</li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => addOption("New Option", questionIndex)}
            >
              Add Option
            </button>
          </div>

          <div>
            <label>Form Open:</label>
            <input
              type="checkbox"
              checked={question.open}
              onChange={() => toggleForm(questionIndex)}
            />
          </div>
        </div>
      ))}

      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
    </form>
  );
}

export default Form;
