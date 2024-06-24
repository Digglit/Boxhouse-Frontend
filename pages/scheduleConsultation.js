import { Component } from "react";
import styles from "../styles/ScheduleConsultation.module.css";
import Head from "next/head";
import PageTransition from "../components/PageTransition";
import { industries } from "../public/industries.json";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class ConsultationScheduler extends Component {
  constructor() {
    super();
    this.state = {
      pageDisplayed: 1,
      timeZone: "-5",
      preferredConsultationDate: "",
      time: "",
      name: "",
      company: "",
      industry: "",
      email: "",
      confirmEmail: "",
      currentProjectStage: "Just Getting Started",
      idealCompletionDate: "",
      projectDescription: "",
      referrer: "Google",
    };
  }

  handleDateChange = (e) => {
    this.setState({ preferredConsultationDate: e.target.value });
  };

  changePage = (e, newPage) => {
    if (this.state.pageDisplayed === 1) {
    }

    e.preventDefault();
    if (newPage === 4) {
      this.submitConsultationHandler();
    } else {
      this.setState({ pageDisplayed: newPage });
    }
  };

  submitConsultationHandler = () => {
    console.log(this.state);
    window.alert("Consultation scheduled!");
  };

  render(props, ref) {
    return (
      <>
        <Head>
          <title>Schedule a Consultation</title>
          <meta
            name="description"
            content="Boxhouse Consulting is a for-hire software team specializing in web-based application development"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#FFFFFE" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="pageHeaderContainer">
          <h1>Schedule a Consultation</h1>
        </div>
        <div className={styles.pageContainer}>
          {this.state.pageDisplayed === 1 ? (
            <form
              className={styles.pageContentWrapper}
              onSubmit={(e) => this.changePage(e, 2)}
              key="consultation scheduler page 1"
            >
              <h2 className={styles.title}>Let us know when works for you.</h2>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Time Zone</label>
                <select
                  autoFocus
                  className={styles.selectDropdown}
                  value={this.state.timeZone}
                  onChange={(e) => this.setState({ timeZone: e.target.value })}
                >
                  <option value="-5">GMT -5 Eastern Standard Time</option>
                  <option value="-6">GMT -6 Central Standard Time</option>
                  <option value="-7">GMT -7 Mountain Standard Time</option>
                  <option value="-8">GMT -8 Pacific Standard Time</option>
                  <option value="-9">GMT -9 Alaska Standard Time</option>
                  <option value="-10">GMT -10 Hawaii Standard Time</option>
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>
                  Preferred Consultation Date
                </label>
                <input
                  className={styles.dateInput}
                  type="date"
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
                  value={this.state.preferredConsultationDate}
                  onChange={this.handleDateChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Time</label>
                <select
                  className={styles.selectDropdown}
                  value={this.state.time}
                  onChange={(e) => this.setState({ time: e.target.value })}
                >
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
              <button className={styles.continueButton} type="submit">
                Continue
              </button>
            </form>
          ) : this.state.pageDisplayed === 2 ? (
            <form
              className={styles.pageContentWrapper}
              onSubmit={(e) => this.changePage(e, 3)}
              key="consultation scheduler page 2"
            >
              <h2 className={styles.title}>Tell us a bit about you.</h2>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Name</label>
                <input
                  className={styles.textInput}
                  type="text"
                  autoFocus
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Company</label>
                <input
                  className={styles.textInput}
                  type="text"
                  value={this.state.company}
                  onChange={(e) => this.setState({ company: e.target.value })}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Industry</label>
                <select
                  className={styles.selectDropdown}
                  value={this.state.industry}
                  onChange={(e) => this.setState({ industry: e.target.value })}
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
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Email</label>
                <input
                  className={styles.textInput}
                  type="email"
                  required
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Confirm Email</label>
                <input
                  className={styles.textInput}
                  type="email"
                  required
                  value={this.state.confirmEmail}
                  onChange={(e) =>
                    this.setState({ confirmEmail: e.target.value })
                  }
                />
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  className={styles.backButton}
                  type="button"
                  onClick={(e) => this.changePage(e, 1)}
                >
                  Back
                </button>
                <button className={styles.continueButton} type="submit">
                  Continue
                </button>
              </div>
            </form>
          ) : (
            <form
              className={styles.pageContentWrapper}
              onSubmit={(e) => this.changePage(e, 4)}
              key="consultation scheduler page 3"
            >
              <h2 className={styles.title}>How can we help?</h2>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>
                  Current Project Stage
                </label>
                <select
                  className={styles.selectDropdown}
                  autoFocus
                  value={this.state.currentProjectStage}
                  onChange={(e) =>
                    this.setState({ currentProjectStage: e.target.value })
                  }
                >
                  <option value="Just Getting Started">
                    Just getting started
                  </option>
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
                <label className={styles.inputLabel}>
                  Ideal Completion Date
                </label>
                <input
                  className={styles.dateInput}
                  type="date"
                  min={
                    new Date(new Date().setDate(new Date().getDate() + 1))
                      .toISOString()
                      .split("T")[0]
                  }
                  value={this.state.idealCompletionDate}
                  onChange={(e) =>
                    this.setState({ idealCompletionDate: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>
                  A brief description of your project
                </label>
                <textarea
                  className={styles.textArea}
                  type="text"
                  value={this.state.projectDescription}
                  onChange={(e) =>
                    this.setState({ projectDescription: e.target.value })
                  }
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>
                  Where did you hear about us?
                </label>
                <select
                  className={styles.selectDropdown}
                  value={this.state.referrer}
                  onChange={(e) => this.setState({ referrer: e.target.value })}
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
                  onClick={(e) => this.changePage(e, 2)}
                >
                  Back
                </button>
                <button className={styles.continueButton} type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </>
    );
  }
}

export default ConsultationScheduler;
