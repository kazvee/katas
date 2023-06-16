// Kata 13 - Talking Calendar

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const talkingCalendar = function (date) {
  const result = new Date(date);
  const formattedDate = result.toLocaleString('en-US', options);
  const day = formattedDate.split(' ')[1].replace(',', '');

  let suffix = '';

  if (day === '11' || day === '12' || day === '13') {
    suffix = 'th';
  }

  if (day[day.length - 1] === '1' && day !== '11') {
    suffix = 'st';
  }

  if (day[day.length - 1] === '2' && day !== '12') {
    suffix = 'nd';
  }

  if (day[day.length - 1] === '3' && day !== '13') {
    suffix = 'rd';
  }

  if (!suffix) {
    suffix = 'th';
  }

  return formattedDate.replace(day, day + suffix);
};

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));

// Expected output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987