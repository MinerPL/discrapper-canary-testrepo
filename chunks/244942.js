"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
    one: () => "".concat(t.number(e.optionCount), " опция"),
    other: () => "".concat(t.number(e.optionCount), " опции")
  }), " на разположение."),
  focusAnnouncement: (e, t) => "".concat(t.select({
    true: () => "Въведена група ".concat(e.groupTitle, ", с ").concat(t.plural(e.groupCount, {
      one: () => "".concat(t.number(e.groupCount), " опция"),
      other: () => "".concat(t.number(e.groupCount), " опции")
    }), ". "),
    other: ""
  }, e.isGroupChange)).concat(e.optionText).concat(t.select({
    true: ", избрани",
    other: ""
  }, e.isSelected)),
  listboxLabel: "Предложения",
  selectedAnnouncement: e => "".concat(e.optionText, ", избрани")
}