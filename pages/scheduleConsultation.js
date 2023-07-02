import { Component } from 'react'
import styles from '../styles/ScheduleConsultation.module.css'
import Head from 'next/head'
import PageTransition from '../components/PageTransition'

class ConsultationScheduler extends Component {
  constructor() {
    super()
    this.state = {
      pageDisplayed: 1,
      timeZone: '-5',
      date: '',
      time: '',
      name: '',
      company: '',
      industry: '',
      email: '',
      confirmEmail: '',
      currentProjectStage: '',
      idealCompletionDate: '',
      projectDescription: '',
      whereDidYouHearAboutUs: '',
    }
  }

  handleDateChange = (e) => {
    this.setState({date: e.target.value})
  }

  changePage = (e, newPage) => {
    e.preventDefault()
    if (newPage === 4) {
      this.submitConsultationHandler()
    } else {
      this.setState({pageDisplayed: newPage})
    }
  }

  submitConsultationHandler = () => {
    window.alert('Consultation scheduled!')
  }

  render(props, ref) {
    return (
      <>
        <Head>
          <title>Schedule a Consultation</title>
          <meta name="description" content="Boxhouse Consulting is a for-hire software team specializing in web-based application development" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#FFFFFE" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='pageHeaderContainer'>
          <h1>Schedule a Consultation</h1>
        </div>
        <div className={styles.pageContainer}>
          { this.state.pageDisplayed === 1 ?
            <form className={styles.pageContentWrapper} onSubmit={(e) => this.changePage(e, 2)}>
              <h2 className={styles.title}>Let us know when works for you.</h2>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Time Zone</label>
                <select
                  className={styles.selectDropdown}
                  value={this.state.timeZone}
                  onChange={(e) => this.setState({timeZone: e.target.value})}
                >
                  <option value='-5'>GMT -5 Eastern Standard Time</option>
                  <option value='-6'>GMT -6 Central Standard Time</option>
                  <option value='-7'>GMT -7 Mountain Standard Time</option>
                  <option value='-8'>GMT -8 Pacific Standard Time</option>
                  <option value='-9'>GMT -9 Alaska Standard Time</option>
                  <option value='-10'>GMT -10 Hawaii Standard Time</option>
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Date</label>
                <input
                  className={styles.dateInput}
                  type='date'
                  min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                  max={new Date(new Date().setDate(new Date().getDate() + 60)).toISOString().split('T')[0]}
                  value={this.state.date}
                  onChange={this.handleDateChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Time</label>
                <select className={styles.selectDropdown}>
                  <option value='9:00 AM'>9:00 AM</option>
                  <option value='9:00 AM'>10:00 AM</option>
                  <option value='9:00 AM'>11:00 AM</option>
                  <option value='9:00 AM'>12:00 PM</option>
                  <option value='9:00 AM'>1:00 PM</option>
                  <option value='9:00 AM'>2:00 PM</option>
                  <option value='9:00 AM'>3:00 PM</option>
                  <option value='9:00 AM'>4:00 PM</option>
                  <option value='9:00 AM'>5:00 PM</option>
                </select>
              </div>
              <button className={styles.continueButton} type='submit'>Continue</button>
            </form>

          : this.state.pageDisplayed === 2 ?

            <form className={styles.pageContentWrapper} onSubmit={(e) => this.changePage(e, 3)}>
              <h2 className={styles.title}>Tell us a bit about you.</h2>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Name</label>
                <input
                  className={styles.textInput}
                  type='text'
                  tabIndex="1"
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Company</label>
                <input
                  className={styles.textInput}
                  type='text'
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Industry</label>
                <select className={styles.selectDropdown}>
                  <option value='9:00 AM'>9:00 AM</option>
                  <option value='9:00 AM'>10:00 AM</option>
                  <option value='9:00 AM'>11:00 AM</option>
                  <option value='9:00 AM'>12:00 PM</option>
                  <option value='9:00 AM'>1:00 PM</option>
                  <option value='9:00 AM'>2:00 PM</option>
                  <option value='9:00 AM'>3:00 PM</option>
                  <option value='9:00 AM'>4:00 PM</option>
                  <option value='9:00 AM'>5:00 PM</option>
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Email</label>
                <input
                  className={styles.textInput}
                  type='text'
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Confirm Email</label>
                <input
                  className={styles.textInput}
                  type='text'
                />
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.backButton} type="button" onClick={(e) => this.changePage(e, 1)}>Back</button>
                <button className={styles.continueButton} type="submit">Continue</button>
              </div>
            </form>

          :

            <form className={styles.pageContentWrapper} onSubmit={(e) => this.changePage(e, 4)}>
              <h2 className={styles.title}>How can we help?</h2>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Current Project Stage</label>
                <select className={styles.selectDropdown} tabIndex="1">
                  <option value=''>Just getting started</option>
                  <option value=''>Partial design completion</option>
                  <option value=''>Partial development completion</option>
                  <option value=''>In production, need feature expansion</option>
                  <option value=''>Other</option>
                </select>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Ideal Completion Date</label>
                <input
                  className={styles.dateInput}
                  type='date'
                  min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                  value={this.state.date}
                  onChange={this.handleDateChange}
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>A brief description of your project</label>
                <textarea
                  className={styles.textArea}
                  type='text'
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Where did you hear about us?</label>
                <select className={styles.selectDropdown}>
                  <option value=''>Google</option>
                  <option value=''>Facebook</option>
                  <option value=''>Word of Mouth</option>
                  <option value=''>LinkedIn</option>
                  <option value=''>Other</option>
                </select>
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.backButton} type="button" onClick={() => this.changePage(e, 2)}>Back</button>
                <button className={styles.continueButton} type="submit">Submit</button>
              </div>
            </form>
          }
        </div>
      </>
    )
  }
}

export default ConsultationScheduler