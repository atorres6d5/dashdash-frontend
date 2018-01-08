import React from 'react'
import { Link } from 'react-router-dom'
import NextButton from './common-elements/NextButton'

const ScheduleType = ({updateNewScheduleTypeData}) => {

  const grabData = () => {
    const scheduleType = document.getElementById('scheduleType').checked ? 'weekend' : 'weekday'
    updateNewScheduleTypeData(scheduleType)
  }

  return (
    <div className="body">
      <h2 className="py-4 mb-5 title font-weight-bold">create a schedule</h2>
      <img className="selection-img mb-2" src="./img/branding/days-of-the-week-orange.svg" alt="days of the week" />
      <h5 className="mb-4 px-5">what type of schedule will this be?</h5>
      <div className="switch">
        <label>
          weekday
          <input type="checkbox" id="scheduleType"/>
          <span className="lever"></span>
          weekend
        </label>
      </div>
      <div className="footer-container py-3">
        <Link to={'/arrivalTime'} onClick={ e => grabData() }>
          <NextButton />
        </Link>
      </div>

    </div>
  )
}

export default ScheduleType
