"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  dateRange: e => "Da ".concat(e.startDate, " a ").concat(e.endDate),
  dateSelected: e => "".concat(e.date, " selezionata"),
  finishRangeSelectionPrompt: "Fai clic per completare la selezione dell’intervallo di date",
  maximumDate: "Ultima data disponibile",
  minimumDate: "Prima data disponibile",
  next: "Successivo",
  previous: "Precedente",
  selectedDateDescription: e => "Data selezionata: ".concat(e.date),
  selectedRangeDescription: e => "Intervallo selezionato: ".concat(e.dateRange),
  startRangeSelectionPrompt: "Fai clic per selezionare l’intervallo di date",
  todayDate: e => "Oggi, ".concat(e.date),
  todayDateSelected: e => "Oggi, ".concat(e.date, " selezionata")
}