"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  dateRange: e => "Nuo ".concat(e.startDate, " iki ").concat(e.endDate),
  dateSelected: e => "Pasirinkta ".concat(e.date),
  finishRangeSelectionPrompt: "Spustelėkite, kad baigtumėte pasirinkti datų intervalą",
  maximumDate: "Paskutinė galima data",
  minimumDate: "Pirmoji galima data",
  next: "Paskesnis",
  previous: "Ankstesnis",
  selectedDateDescription: e => "Pasirinkta data: ".concat(e.date),
  selectedRangeDescription: e => "Pasirinktas intervalas: ".concat(e.dateRange),
  startRangeSelectionPrompt: "Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",
  todayDate: e => "Šiandien, ".concat(e.date),
  todayDateSelected: e => "Šiandien, pasirinkta ".concat(e.date)
}