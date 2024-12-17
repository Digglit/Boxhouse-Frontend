"use client";
import styles from "../../styles/ScheduleConsultation.module.css";
import industries from "../../utils/industries";

const Phase2 = ({ formState, setFormStateValue, changePage }) => {
  return (
    <form
      className={styles.pageContentWrapper}
      onSubmit={(e) => changePage(e, "Phase 3")}
      key="consultation scheduler page 2"
    >
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="name">
          Name
        </label>
        <input
          className={styles.textInput}
          type="text"
          maxLength={128}
          id="name"
          autoFocus
          required
          value={formState.name}
          onChange={(e) => setFormStateValue({ name: e.target.value })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="company">
          Company
        </label>
        <input
          className={styles.textInput}
          type="text"
          maxLength={256}
          id="company"
          required
          value={formState.company}
          onChange={(e) => setFormStateValue({ company: e.target.value })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label
          className={`text-[14px] ${
            formState.industryError ? "text-red-700" : ""
          }`}
          htmlFor="industry"
        >
          Industry
        </label>
        <select
          className={styles.selectDropdown}
          value={formState.industry}
          id="industry"
          onChange={(e) =>
            setFormStateValue({
              industry: e.target.value,
              industryError: null,
            })
          }
          style={{
            color: formState.industryError ? "rgb(185, 28, 28)" : "black",
          }}
        >
          <option hidden>Select An Industry</option>
          {industries.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
          <option value={"Other"} key={"Other"}>
            Other
          </option>
        </select>
        {/* {formState.industryError && (
                    <p className="mb-[20px] mt-[0px] text-[14px] text-red-700">
                      {formState.industryError}
                    </p>
                  )} */}
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="email">
          Email
        </label>
        <input
          className={styles.textInput}
          type="email"
          id="email"
          maxLength={256}
          required
          value={formState.email}
          onChange={(e) => setFormStateValue({ email: e.target.value })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="confirmEmail">
          Confirm Email
        </label>
        <input
          className={styles.textInput}
          type="email"
          maxLength={256}
          id="confirmEmail"
          required
          value={formState.confirmEmail}
          onChange={(e) => setFormStateValue({ confirmEmail: e.target.value })}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.backButton}
          type="button"
          onClick={(e) => changePage(e, "Phase 1")}
        >
          Back
        </button>
        <button className={styles.continueButton} type="submit">
          Continue
        </button>
      </div>
    </form>
  );
};

export default Phase2;
