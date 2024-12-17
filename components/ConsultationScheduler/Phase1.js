"use client";
import styles from "../../styles/ScheduleConsultation.module.css";

const Phase1 = ({ formState, setFormStateValue, changePage }) => {
  return (
    <form
      className={styles.pageContentWrapper}
      onSubmit={(e) => changePage(e, "Phase 2")}
      key="consultation scheduler page 1"
    >
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="timeZone">
          Time Zone
        </label>
        <select
          autoFocus
          className={styles.selectDropdown}
          value={formState.timeZone}
          id="timeZone"
          onChange={(e) => setFormStateValue({ timeZone: e.target.value })}
        >
          <option value="Eastern Standard Time">
            GMT -5 Eastern Standard Time
          </option>
          <option value="Central Standard Time">
            GMT -6 Central Standard Time
          </option>
          <option value="Mountain Standard Time">
            GMT -7 Mountain Standard Time
          </option>
          <option value="Pacific Standard Time">
            GMT -8 Pacific Standard Time
          </option>
          <option value="Alaska Standard Time">
            GMT -9 Alaska Standard Time
          </option>
          <option value="Hawaii Standard Time">
            GMT -10 Hawaii Standard Time
          </option>
        </select>
      </div>
      <div className={styles.inputWrapper}>
        <label
          className={styles.inputLabel}
          htmlFor="preferredConsultationDate"
        >
          Preferred Consultation Date
        </label>
        <input
          className={styles.dateInput}
          type="date"
          id="preferredConsultationDate"
          min={
            new Date(new Date().setDate(new Date().getDate() + 1))
              .toISOString()
              .split("T")[0]
          }
          max={
            new Date(new Date().setDate(new Date().getDate() + 60))
              .toISOString()
              .split("T")[0]
          }
          required
          value={formState.preferredConsultationDate}
          onChange={(e) =>
            setFormStateValue({ preferredConsultationDate: e.target.value })
          }
        />
      </div>
      <div className={styles.inputWrapper}>
        <label
          className={styles.inputLabel}
          htmlFor="preferredConsultationTime"
        >
          Time
        </label>
        <select
          className={styles.selectDropdown}
          value={formState.preferredConsultationTime}
          id="preferredConsultationTime"
          onChange={(e) =>
            setFormStateValue({ preferredConsultationTime: e.target.value })
          }
        >
          <option value="09:00:00.000">9:00 AM</option>
          <option value="10:00:00.000">10:00 AM</option>
          <option value="11:00:00.000">11:00 AM</option>
          <option value="12:00:00.000">12:00 PM</option>
          <option value="13:00:00.000">1:00 PM</option>
          <option value="14:00:00.000">2:00 PM</option>
          <option value="15:00:00.000">3:00 PM</option>
          <option value="16:00:00.000">4:00 PM</option>
          <option value="17:00:00.000">5:00 PM</option>
        </select>
      </div>
      <button className={styles.continueButton} type="submit">
        Continue
      </button>
    </form>
  );
};

export default Phase1;
