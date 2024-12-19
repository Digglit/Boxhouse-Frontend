"use client";
import { Component, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import GridLoader from "react-spinners/GridLoader";
import SuccessFormState from "./Success";
import ErrorFormState from "./Error";

class ScheduleConsultationForm extends Component {
  constructor() {
    super();
    this.state = {
      pageDisplayed: "Phase 1",
      timeZone: "Eastern Standard Time",
      preferredConsultationDate: new Date(
        new Date().setDate(new Date().getDate() + 1),
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
    if (this.state.pageDisplayed === "Phase 2" && newPage === "Phase 3") {
      // Validate that an industry has been selected
      if (this.state.industry === "")
        return this.setState({ industryError: "Please select an industry" });
      // Validate that the email matches the confirm email
      else if (this.state.email !== this.state.confirmEmail)
        return window.alert("Emails do not match");
    }

    if (newPage === "Loading") {
      this.submitConsultationHandler();
    } else {
      this.setState({ pageDisplayed: newPage });
    }
  };

  formatDate = (dateInput) => {
    const date = new Date(
      `${dateInput}T${this.state.preferredConsultationTime}`,
    );
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  getFormattedConsultationTime = () => {
    const date = new Date(
      `${this.state.preferredConsultationDate}T${this.state.preferredConsultationTime}`,
    );
    const options = { hour: "numeric", minute: "numeric" };
    const time = date.toLocaleTimeString("en-US", options);
    switch (this.state.timeZone) {
      case "Eastern Standard Time":
        return `${time} EST`;
      case "Central Standard Time":
        return `${time} CST`;
      case "Mountain Standard Time":
        return `${time} MST`;
      case "Pacific Standard Time":
        return `${time} PST`;
      case "Alaska Standard Time":
        return `${time} AKST`;
      case "Hawaii Standard Time":
        return `${time} HST`;
      default:
        return `${time}`;
    }
  };

  submitConsultationHandler = async () => {
    this.setState({ pageDisplayed: "Loading" });
    const captchaToken = await this.recaptchaRef.current.executeAsync();
    const route =
      process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
        ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
        : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT;
    await fetch(`${route}/api/consultations`, {
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
        if (res.ok) {
          this.setState({ pageDisplayed: "Success" });
          fetch("/api/consultationSignup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.state.email,
              date: this.formatDate(this.state.preferredConsultationDate),
              time: this.getFormattedConsultationTime(),
              name: this.state.name,
              company: this.state.company,
              industry: this.state.industry,
              stage: this.state.currentProjectStage,
              completionDate: this.formatDate(this.state.idealCompletionDate),
              description: this.state.projectDescription,
              referrer: this.state.referrer,
            }),
          });
        } else {
          this.setState({ pageDisplayed: "Error" });
        }
      })
      .catch((error) => {
        window.alert(`Failed to schedule consultation: ${error}`);
        console.error(error);
      });
  };

  applyZIndexToCaptcha = () => {
    const repatcha = document.getElementsByClassName("grecaptcha-badge")[0];
    if (repatcha) repatcha.style.zIndex = 1000;
  };

  handleReCAPTCHAChange = (e) => {};

  render() {
    return (
      <div>
        {this.state.pageDisplayed === "Phase 1" ||
        this.state.pageDisplayed === "Phase 2" ||
        this.state.pageDisplayed === "Phase 3" ? (
          <>
            <h2 className="text-[24px] font-medium">
              Schedule a Free Consultation
            </h2>
            <p className="mb-4 mt-2">
              Building things that matter makes you a busy person, we get it.
              Let&apos;s find the perfect time to discuss your goals.
            </p>
          </>
        ) : null}
        {this.state.pageDisplayed === "Phase 1" ? (
          <Phase1
            formState={this.state}
            setFormStateValue={(value) => this.setState(value)}
            changePage={this.changePage}
          />
        ) : this.state.pageDisplayed === "Phase 2" ? (
          <Phase2
            formState={this.state}
            setFormStateValue={(value) => this.setState(value)}
            changePage={this.changePage}
          />
        ) : this.state.pageDisplayed === "Phase 3" ? (
          <Phase3
            formState={this.state}
            setFormStateValue={(value) => this.setState(value)}
            changePage={this.changePage}
          />
        ) : this.state.pageDisplayed === "Loading" ? (
          <div className="grid grid-flow-row items-center justify-items-center gap-4 py-[100px]">
            <p className="text-[24px] font-medium">
              Scheduling Your Consultation
            </p>
            <GridLoader color={"#004bfa"} />
          </div>
        ) : this.state.pageDisplayed === "Success" ? (
          <SuccessFormState formState={this.state} />
        ) : (
          <ErrorFormState
            formState={this.state}
            returnToForm={(e) => this.changePage(e, "Phase 3")}
          />
        )}
        <ReCAPTCHA
          ref={this.recaptchaRef}
          size="invisible"
          sitekey="6LfaJgMqAAAAANyWndVdVYRluGbn4jE3taJSdYko"
          onChange={this.handleReCAPTCHAChange}
          asyncScriptOnLoad={this.applyZIndexToCaptcha}
        />
      </div>
    );
  }
}

export default ScheduleConsultationForm;
