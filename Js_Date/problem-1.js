// create a validator function
const isValidDate = (date) => {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
};
// check the age :

const ageCalculator = (birthday) => {
  // call the validator function :
  const isValid = isValidDate(birthday);

  if (isValid) {
    //   birthday :
    let dob = new Date(birthday);
    let dob_year = dob.getFullYear();
    let dob_month = dob.getMonth();
    let dob_day = dob.getDay();

    //   current day :
    let today = new Date();

    // current birthday :
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();

    //   difference between birth-year and current year
    let diffYear = currentYear - dob_year;

    //   difference between birth-month and current month
    let diffMonth;
    if (currentMonth > dob_month) {
      diffMonth = currentMonth - dob_month;
    } else {
      diffMonth = 12 + currentMonth - dob_month;
      diffYear--;
    }
    //   difference between birth-day and current day
    let diffDay;
    if (currentDay > dob_day) {
      diffDay = currentDay - dob_day;
    } else {
      diffYear--;
      diffMonth = 11;
      diffDay = 30 + currentDay - dob_day;
    }
    let myData = {
      year: diffYear,
      month: diffMonth,
      day: diffDay,
    };
      return myData;
    // console.log(diffYear, diffMonth, diffDay);
  } else {
    console.log("Write a valid date");
  }
};

const age = ageCalculator("october 28, 2000");
console.log(age);
