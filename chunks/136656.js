"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
    one: () => "".concat(t.number(e.optionCount), " параметр"),
    other: () => "".concat(t.number(e.optionCount), " параметри(-ів)")
  }), " доступно."),
  focusAnnouncement: (e, t) => "".concat(t.select({
    true: () => "Введена група ".concat(e.groupTitle, ", з ").concat(t.plural(e.groupCount, {
      one: () => "".concat(t.number(e.groupCount), " параметр"),
      other: () => "".concat(t.number(e.groupCount), " параметри(-ів)")
    }), ". "),
    other: ""
  }, e.isGroupChange)).concat(e.optionText).concat(t.select({
    true: ", вибрано",
    other: ""
  }, e.isSelected)),
  listboxLabel: "Пропозиції",
  selectedAnnouncement: e => "".concat(e.optionText, ", вибрано")
}