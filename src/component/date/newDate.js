import { Component } from "react";

export default class NewDate extends Component {
  renderDate(time) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let day = days[time.getDay()];
    let date = time.getDate();
    let month = months[time.getMonth()];
    let year = time.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  }
  render() {
    return this.renderDate(new Date());
  }
}
