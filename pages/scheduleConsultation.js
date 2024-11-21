import { Component, createRef } from "react";
import styles from "../styles/ScheduleConsultation.module.css";
import Head from "next/head";
import PageTransition from "../components/PageTransition";
import { industries } from "../public/industries.json";
import DatePicker from "react-datepicker";
import ReCAPTCHA from "react-google-recaptcha";

import "react-datepicker/dist/react-datepicker.css";

class ConsultationScheduler extends Component {
  constructor() {
    super();
    this.state = {
      pageDisplayed: 1,
      timeZone: "Eastern Standard Time",
      preferredConsultationDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      )
        .toISOString()
        .split("T")[0],
      preferredConsultationTime: "09:00:00.000",
      name: "",
      company: "",
      industry: "",
      email: "",
      confirmEmail: "",
      currentProjectStage: "Just Getting Started",
      idealCompletionDate: "",
      projectDescription: "",
      referrer: "Google",
      industryError: null,
    };

    this.recaptchaRef = createRef();
  }

  handleDateChange = (e) => {
    this.setState({ preferredConsultationDate: e.target.value });
  };

  changePage = (e, newPage) => {
    e.preventDefault();
    if (this.state.pageDisplayed === 2 && newPage === 3) {
      // Validate that an industry has been selected
      if (this.state.industry === "")
        return this.setState({ industryError: "Please select an industry" });
      // Validate that the email matches the confirm email
      else if (this.state.email !== this.state.confirmEmail)
        return window.alert("Emails do not match");
    }

    if (newPage === 4) {
      this.submitConsultationHandler();
    } else {
      this.setState({ pageDisplayed: newPage });
    }
  };

  submitConsultationHandler = async () => {
    const captchaToken = await this.recaptchaRef.current.executeAsync();
    const route =
      process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
        ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
        : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT;
    fetch(`route/api/consultations`, {
      body: JSON.stringify({
        data: {
          TimeZone: this.state.timeZone,
          PreferredConsultationDate: this.state.preferredConsultationDate,
          PreferredConsultationTime: this.state.preferredConsultationTime,
          Name: this.state.name,
          Company: this.state.company,
          Industry: this.state.industry,
          Email: this.state.email,
          CurrentStage: this.state.currentProjectStage,
          IdealCompletionDate: this.state.idealCompletionDate,
          ProjectDescription: this.state.projectDescription,
          Referrer: this.state.referrer,
          ReCaptcha: captchaToken,
        },
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(async (res) => {
        if (res.ok) window.alert("Consultation scheduled!");
        else {
          const responseMessage = await res.json();
          throw new Error(responseMessage.message);
        }
      })
      .catch((error) => {
        window.alert(`Failed to schedule consultation: ${error}`);
        console.error(error);
      });
  };

  handleReCAPTCHAChange = (e) => {};

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
                  required
                  value={this.state.preferredConsultationDate}
                  onChange={this.handleDateChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Time</label>
                <select
                  className={styles.selectDropdown}
                  value={this.state.preferredConsultationTime}
                  onChange={(e) =>
                    this.setState({ preferredConsultationTime: e.target.value })
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
                  maxLength={128}
                  autoFocus
                  required
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Company</label>
                <input
                  className={styles.textInput}
                  type="text"
                  maxLength={256}
                  required
                  value={this.state.company}
                  onChange={(e) => this.setState({ company: e.target.value })}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label
                  className={`text-[14px] ${
                    this.state.industryError ? "text-red-700" : ""
                  }`}
                >
                  Industry
                </label>
                <select
                  className={styles.selectDropdown}
                  value={this.state.industry}
                  onChange={(e) =>
                    this.setState({
                      industry: e.target.value,
                      industryError: null,
                    })
                  }
                  style={{
                    color: this.state.industryError
                      ? "rgb(185, 28, 28)"
                      : "black",
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
                {/* {this.state.industryError && (
                  <p className="mb-[20px] mt-[0px] text-[14px] text-red-700">
                    {this.state.industryError}
                  </p>
                )} */}
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Email</label>
                <input
                  className={styles.textInput}
                  type="email"
                  maxLength={256}
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
                  maxLength={256}
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
                    new Date(this.state.preferredConsultationDate)
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
                  A brief description of your project (
                  {this.state.projectDescription.length} / 2,048 characters)
                </label>
                <textarea
                  maxLength={2048}
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
          <ReCAPTCHA
            ref={this.recaptchaRef}
            size="invisible"
            sitekey="6LfaJgMqAAAAANyWndVdVYRluGbn4jE3taJSdYko"
            onChange={this.handleReCAPTCHAChange}
          />
        </div>
      </>
    );
  }
}

export default ConsultationScheduler;
