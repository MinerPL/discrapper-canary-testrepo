"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  dateRange: e => "".concat(e.startDate, " עד ").concat(e.endDate),
  dateSelected: e => "".concat(e.date, " נבחר"),
  finishRangeSelectionPrompt: "חץ כדי לסיים את בחירת טווח התאריכים",
  maximumDate: "תאריך פנוי אחרון",
  minimumDate: "תאריך פנוי ראשון",
  next: "הבא",
  previous: "הקודם",
  selectedDateDescription: e => "תאריך נבחר: ".concat(e.date),
  selectedRangeDescription: e => "טווח נבחר: ".concat(e.dateRange),
  startRangeSelectionPrompt: "לחץ כדי להתחיל בבחירת טווח התאריכים",
  todayDate: e => "היום, ".concat(e.date),
  todayDateSelected: e => "היום, ".concat(e.date, " נבחר")
}