let citis = [
  // Major Cities
  { arName: "مكة المكرمة", Name: "Makkah al Mukarramah" },
  { arName: "الرياض", Name: "Riyadh" },
  { arName: "جدة", Name: "Jeddah" },
  { arName: "الدمام", Name: "Dammam" },
  { arName: "الخبر", Name: "Khobar" },
  { arName: "الطائف", Name: "Taif" },
  { arName: "بريدة", Name: "Buraydah" },
  { arName: "تبوك", Name: "Tabuk" },
  { arName: "حائل", Name: "Hail" },
  { arName: "الجبيل", Name: "Jubail" },

  // Eastern Province
  { arName: "الأحساء", Name: "Al Ahsa" },
  { arName: "القطيف", Name: "Qatif" },
  { arName: "الظهران", Name: "Dhahran" },
  { arName: "رأس تنورة", Name: "Ras Tanura" },
  { arName: "الخفجي", Name: "Khafji" },
  { arName: "النعيرية", Name: "Nairiyah" },
  { arName: "العديد", Name: "Al Udayd" },
  { arName: "القرية العليا", Name: "Al Qaryah Al Ulya" },
  { arName: "القرية السفلى", Name: "Al Qaryah Al Sufla" },
  { arName: "المركز", Name: "Al Markaz" },

  // Riyadh Province
  { arName: "الخرج", Name: "Al Kharj" },
  { arName: "الزلفي", Name: "Al Zulfi" },
  { arName: "الدوادمي", Name: "Al Duwadimi" },
  { arName: "الغاط", Name: "Al Ghat" },
  { arName: "الشماسية", Name: "Al Shamasiah" },
  { arName: "الدرعية", Name: "Al Diriyah" },
  { arName: "العارض", Name: "Al Arad" },
  { arName: "الملز", Name: "Al Malaz" },
  { arName: "العليا", Name: "Al Olaya" },
  { arName: "النرجس", Name: "Al Narjis" },
  { arName: "الملقا", Name: "Al Malqa" },
  { arName: "الربوة", Name: "Al Rabwah" },
  { arName: "النسيم", Name: "Al Naseem" },
  { arName: "الروضة", Name: "Al Rawdah" },
  { arName: "الشفا", Name: "Al Shifa" },
  { arName: "الدرع", Name: "Al Dir" },
  { arName: "الرميلة", Name: "Al Rumailah" },
  { arName: "الطريف", Name: "Al Tarif" },
  { arName: "الجبيلة", Name: "Al Jubailah" },

  // Makkah Province
  { arName: "المدينة المنورة", Name: "Medina" },
  { arName: "ينبع", Name: "Yanbu" },
  { arName: "رابغ", Name: "Rabigh" },
  { arName: "القنفذة", Name: "Al Qunfudhah" },
  { arName: "الليث", Name: "Al Lith" },
  { arName: "أملج", Name: "Umluj" },
  { arName: "الوجه", Name: "Al Wajh" },
  { arName: "ضباء", Name: "Duba" },
  { arName: "الخرمة", Name: "Al Khurmah" },
  { arName: "تربة", Name: "Turbah" },
  { arName: "الجموم", Name: "Al Jumum" },
  { arName: "الكامل", Name: "Al Kamil" },
  { arName: "الخليل", Name: "Al Khalil" },
  { arName: "الرين", Name: "Al Rayn" },
  { arName: "المندق", Name: "Al Mandag" },
  { arName: "المويه", Name: "Al Muwayh" },
  { arName: "العقيق", Name: "Al Aqiq" },
  { arName: "الهدى", Name: "Al Hada" },
  { arName: "الزاهر", Name: "Al Zahir" },

  // Asir Province
  { arName: "أبها", Name: "Abha" },
  { arName: "خميس مشيط", Name: "Khamis Mushait" },
  { arName: "النماص", Name: "Al Namass" },
  { arName: "بلقرن", Name: "Balqarn" },
  { arName: "محايل عسير", Name: "Muhayil Asir" },
  { arName: "تثليث", Name: "Tathleeth" },
  { arName: "بيشة", Name: "Bisha" },
  { arName: "سراة عبيدة", Name: "Sarat Abidah" },
  { arName: "رجال ألمع", Name: "Rijal Alma" },
  { arName: "المجاردة", Name: "Al Majardah" },
  { arName: "بارق", Name: "Bariq" },
  { arName: "البرك", Name: "Al Bark" },
  { arName: "الحرجة", Name: "Al Harjah" },
  { arName: "الربيعية", Name: "Al Rabiah" },
  { arName: "الفرشة", Name: "Al Farshah" },
  { arName: "القرن", Name: "Al Qarn" },

  // Qassim Province
  { arName: "عنيزة", Name: "Unaizah" },
  { arName: "الرس", Name: "Al Rass" },
  { arName: "المذنب", Name: "Al Mithnab" },
  { arName: "البكيرية", Name: "Al Bukayriyah" },
  { arName: "البدائع", Name: "Al Badai" },
  { arName: "الأسياح", Name: "Al Asyah" },
  { arName: "النبهانية", Name: "Al Nabhaniyah" },
  { arName: "عيون الجواء", Name: "Uyun Al Jiwa" },

  // Hail Province
  { arName: "بقعاء", Name: "Baqaa" },
  { arName: "الشنان", Name: "Al Shinan" },
  { arName: "الغزالة", Name: "Al Ghazalah" },
  { arName: "الشملي", Name: "Al Shumli" },
  { arName: "موقق", Name: "Mawqaq" },

  // Northern Borders Province
  { arName: "عرعر", Name: "Arar" },
  { arName: "رفحاء", Name: "Rafha" },
  { arName: "طريف", Name: "Turaif" },
  { arName: "العويقيلة", Name: "Al Uwayqilah" },
  { arName: "الحديثة", Name: "Al Hadithah" },

  // Jazan Province
  { arName: "جازان", Name: "Jazan" },
  { arName: "صبياء", Name: "Sabya" },
  { arName: "أبو عريش", Name: "Abu Arish" },
  { arName: "صامطة", Name: "Samtah" },
  { arName: "الطوال", Name: "Al Tuwal" },
  { arName: "الدرب", Name: "Al Darb" },
  { arName: "الريث", Name: "Al Rayth" },
  { arName: "ضمد", Name: "Damad" },
  { arName: "الحرث", Name: "Al Harith" },
  { arName: "فيفاء", Name: "Fayfa" },
  { arName: "الدائر", Name: "Al Dair" },
  { arName: "العارضة", Name: "Al Aradhah" },
  { arName: "العيدابي", Name: "Al Aidabi" },

  // Najran Province
  { arName: "نجران", Name: "Najran" },
  { arName: "شرورة", Name: "Sharurah" },
  { arName: "حبونا", Name: "Hubuna" },
  { arName: "بدر الجنوب", Name: "Badr Al Janub" },
  { arName: "الخوبة", Name: "Al Khubah" },
  { arName: "الوديعة", Name: "Al Wadiyah" },

  // Al Baha Province
  { arName: "الباحة", Name: "Al Baha" },
  { arName: "بلجرشي", Name: "Baljurashi" },
  { arName: "المخواة", Name: "Al Makhwah" },
  { arName: "قلوة", Name: "Qilwah" },
  { arName: "القرى", Name: "Al Qara" },

  // Al Jouf Province
  { arName: "سكاكا", Name: "Sakaka" },
  { arName: "القريات", Name: "Al Qurayyat" },
  { arName: "دومة الجندل", Name: "Dumat Al Jandal" },
  { arName: "طبرجل", Name: "Tabarjal" },

  // Additional Major Towns and Districts
  { arName: "الملز", Name: "Al Malaz" },
  { arName: "العليا", Name: "Al Olaya" },
  { arName: "النرجس", Name: "Al Narjis" },
  { arName: "الملقا", Name: "Al Malqa" },
  { arName: "الربوة", Name: "Al Rabwah" },
  { arName: "النسيم", Name: "Al Naseem" },
  { arName: "الروضة", Name: "Al Rawdah" },
  { arName: "الشفا", Name: "Al Shifa" },
  { arName: "الدرع", Name: "Al Dir" },
  { arName: "الرميلة", Name: "Al Rumailah" },
  { arName: "الطريف", Name: "Al Tarif" },
  { arName: "الجبيلة", Name: "Al Jubailah" },
  { arName: "المندق", Name: "Al Mandag" },
  { arName: "المويه", Name: "Al Muwayh" },
  { arName: "العقيق", Name: "Al Aqiq" },
  { arName: "الهدى", Name: "Al Hada" },
  { arName: "الزاهر", Name: "Al Zahir" },
  { arName: "المجاردة", Name: "Al Majardah" },
  { arName: "بارق", Name: "Bariq" },
  { arName: "البرك", Name: "Al Bark" },
  { arName: "الحرجة", Name: "Al Harjah" },
  { arName: "الربيعية", Name: "Al Rabiah" },
  { arName: "الفرشة", Name: "Al Farshah" },
  { arName: "القرن", Name: "Al Qarn" },
  { arName: "عنيزة", Name: "Unaizah" },
  { arName: "الرس", Name: "Al Rass" },
  { arName: "المذنب", Name: "Al Mithnab" },
  { arName: "البكيرية", Name: "Al Bukayriyah" },
  { arName: "البدائع", Name: "Al Badai" },
  { arName: "الأسياح", Name: "Al Asyah" },
  { arName: "النبهانية", Name: "Al Nabhaniyah" },
  { arName: "عيون الجواء", Name: "Uyun Al Jiwa" },
  { arName: "بقعاء", Name: "Baqaa" },
  { arName: "الشنان", Name: "Al Shinan" },
  { arName: "الغزالة", Name: "Al Ghazalah" },
  { arName: "الشملي", Name: "Al Shumli" },
  { arName: "موقق", Name: "Mawqaq" },
  { arName: "عرعر", Name: "Arar" },
  { arName: "رفحاء", Name: "Rafha" },
  { arName: "طريف", Name: "Turaif" },
  { arName: "العويقيلة", Name: "Al Uwayqilah" },
  { arName: "الحديثة", Name: "Al Hadithah" },
  { arName: "جازان", Name: "Jazan" },
  { arName: "صبياء", Name: "Sabya" },
  { arName: "أبو عريش", Name: "Abu Arish" },
  { arName: "صامطة", Name: "Samtah" },
  { arName: "الطوال", Name: "Al Tuwal" },
  { arName: "الدرب", Name: "Al Darb" },
  { arName: "الريث", Name: "Al Rayth" },
  { arName: "ضمد", Name: "Damad" },
  { arName: "الحرث", Name: "Al Harith" },
  { arName: "فيفاء", Name: "Fayfa" },
  { arName: "الدائر", Name: "Al Dair" },
  { arName: "العارضة", Name: "Al Aradhah" },
  { arName: "العيدابي", Name: "Al Aidabi" },
  { arName: "نجران", Name: "Najran" },
  { arName: "شرورة", Name: "Sharurah" },
  { arName: "حبونا", Name: "Hubuna" },
  { arName: "بدر الجنوب", Name: "Badr Al Janub" },
  { arName: "الخوبة", Name: "Al Khubah" },
  { arName: "الوديعة", Name: "Al Wadiyah" },
  { arName: "الباحة", Name: "Al Baha" },
  { arName: "بلجرشي", Name: "Baljurashi" },
  { arName: "المخواة", Name: "Al Makhwah" },
  { arName: "قلوة", Name: "Qilwah" },
  { arName: "القرى", Name: "Al Qara" },
  { arName: "سكاكا", Name: "Sakaka" },
  { arName: "القريات", Name: "Al Qurayyat" },
  { arName: "دومة الجندل", Name: "Dumat Al Jandal" },
  { arName: "طبرجل", Name: "Tabarjal" },
];

// Function to populate city select dropdown
function populateCitySelect() {
  const citySelect = document.getElementById("city_select");
  if (!citySelect) {
    console.error("City select element not found!");
    return;
  }

  // Add default option
  citySelect.innerHTML = '<option value="">اختر المدينة</option>';

  // Add cities
  for (let city of citis) {
    let content = `<option value="${city.Name}">${city.arName}</option>`;
    citySelect.innerHTML += content;
  }

  // Set default selection to Riyadh
  citySelect.value = "Riyadh";
}

// Function to fetch prayer times for a specific city
function fetchPrayerTimes(cityName) {
  if (!cityName) {
    console.log("No city selected");
    return;
  }

  let params = {
    country: "SA",
    city: cityName,
  };

  // Update city name in header
  const cityDisplay = citis.find((city) => city.Name === cityName);
  if (cityDisplay) {
    const headerElement = document.querySelector(".header h2");
    if (headerElement) {
      headerElement.textContent = cityDisplay.arName;
    }
  }

  axios
    .get("https://api.aladhan.com/v1/timingsByCity", {
      params: params,
    })
    .then(function (response) {
      const timings = response.data.data.timings;
      const days = response.data.data.date.hijri.weekday.ar;
      const dates = response.data.data.date.gregorian;

      fillTime("Fajr", timings.Fajr);
      fillTime("Sunrise", timings.Sunrise);
      fillTime("Dhuhr", timings.Dhuhr);
      fillTime("Asr", timings.Asr);
      fillTime("Maghrib", timings.Maghrib);
      fillTime("Isha", timings.Isha);
      fillDate("date", dates.date);
      fillDay("day", days);

      console.log("Prayer times loaded for:", cityName);
      console.log(response.data.data.timings);
    })
    .catch(function (error) {
      console.error("Error fetching prayer times:", error);
      // Show error message to user
      alert("خطأ في تحميل أوقات الصلاة. يرجى المحاولة مرة أخرى.");
    });
}

// Initialize the application when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing app...");

  // Populate city select dropdown
  populateCitySelect();

  // Load initial prayer times for Riyadh
  fetchPrayerTimes("Riyadh");

  // Add event listener for city selection
  const citySelect = document.getElementById("city_select");
  if (citySelect) {
    citySelect.addEventListener("change", function () {
      const selectedCity = this.value;
      console.log("City selected:", selectedCity);
      fetchPrayerTimes(selectedCity);
    });
  } else {
    console.error("City select element not found for event listener!");
  }
});

function fillTime(id, time) {
  document.getElementById(id).innerHTML = time;
}

function fillDate(id, date) {
  document.getElementById(id).innerHTML = date;
}

function fillDay(id, day) {
  document.getElementById(id).innerHTML = day;
}
