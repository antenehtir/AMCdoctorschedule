document.getElementById('specialty').addEventListener('change', function() {
  const specialty = this.value;
  const specialistInfo = document.getElementById('specialist-info');

  let info = '';

  switch(specialty) {
    case 'pediatrics':
      info = "Dr. Wuhib Zenebe - Pediatrician<br>Available: Monday to Friday, 8:00am to 5:00pm, Saturdays 8:00am to 12:00pm<br>Walk-in only";
      break;
    case 'internal-medicine':
      info = "Dr. Edlawit Worku - Internist<br>Available: Monday to Friday, 8:00am to 5:00pm, Saturdays 8:00am to 12:00pm<br>Walk-in only";
      break;
    case 'internal-medicine-sub':
      info = "Dr. Akeza Teame - Infectious Disease Subspecialist<br>Available: Monday, Wednesday, Friday, 8:00am to 5:00pm<br>Walk-in only";
      break;
    case 'cardiology':
      info = "Dr. Tigist Seleshi - Cardiologist (Adult)<br>Available: Wednesdays 1:00pm to 3:00pm, Saturdays 9:00am to 12:00pm<br>Walk-in only";
      break;
    case 'gynecology-obgyn':
      info = "Dr. Tigist Mekonnen - Gynecologist<br>Available: Monday, Thursday, Saturday, 9:00am to 12:00pm<br>Walk-in only<br><br>Dr. Shiferaw Negash - Gynecologist, Gynecology Oncology Subspecialist<br>Available: Tuesday and Friday, 10:00am to 12:00pm<br>Walk-in only";
      break;
    case 'psychiatry':
      info = "Dr. Ascalemariam Bikiss - Psychiatrist<br>Available: Wednesdays 3:00pm to 5:00pm<br>Booking recommended, please call 8551";
      break;
    case 'dermatology':
      info = "Dr. Selamawit Tamene - Dermatologist<br>Available: Monday 3:00pm to 5:00pm<br>Walk-in only";
      break;
    case 'endocrinology':
      info = "Dr. Kalkidan Alachew - Endocrinologist<br>Available: Tuesdays 4:00pm to 6:00pm<br>Walk-in only";
      break;
    default:
      info = '';
  }

  specialistInfo.innerHTML = info;
});
