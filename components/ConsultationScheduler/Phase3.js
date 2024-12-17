"use client";
import styles from "../../styles/ScheduleConsultation.module.css";

const Phase3 = ({ formState, setFormStateValue, changePage }) => {
  return (
    <form
      className={styles.pageContentWrapper}
      onSubmit={(e) => changePage(e, "Loading")}
      key="consultation scheduler page 3"
    >
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="currentProjectStage">
          Current Project Stage
        </label>
        <select
          className={styles.selectDropdown}
          autoFocus
          id="currentProjectStage"
          value={formState.currentProjectStage}
          onChange={(e) =>
            setFormStateValue({ currentProjectStage: e.target.value })
          }
        >
          <option value="Just Getting Started">Just getting started</option>
          <option value="Partial Design Completion">
            Partial design completion
          </option>
          <option value="Partial Development Completion">
            Partial development completion
          </option>
          <option value="In Production, Need Feature Expansion">
            In production, need feature expansion
          </option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="idealCompletionDate">
          Ideal Completion Date
        </label>
        <input
          className={styles.dateInput}
          type="date"
          id="idealCompletionDate"
          min={
            new Date(formState.preferredConsultationDate)
              .toISOString()
              .split("T")[0]
          }
          value={formState.idealCompletionDate}
          onChange={(e) =>
            setFormStateValue({ idealCompletionDate: e.target.value })
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="projectDescription">
          A brief description of your project (
          {formState.projectDescription.length} / 2,048 characters)
        </label>
        <textarea
          maxLength={2048}
          className={styles.textArea}
          id="projectDescription"
          type="text"
          value={formState.projectDescription}
          onChange={(e) =>
            setFormStateValue({ projectDescription: e.target.value })
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="referrer">
          Where did you hear about us?
        </label>
        <select
          className={styles.selectDropdown}
          value={formState.referrer}
          id="referrer"
          onChange={(e) => setFormStateValue({ referrer: e.target.value })}
        >
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.backButton}
          type="button"
          onClick={(e) => changePage(e, "Phase 2")}
        >
          Back
        </button>
        <button className={styles.continueButton} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Phase3;
