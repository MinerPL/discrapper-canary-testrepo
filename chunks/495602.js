"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
    one: () => "".concat(t.number(e.optionCount), " خيار"),
    other: () => "".concat(t.number(e.optionCount), " خيارات")
  }), " متاحة."),
  focusAnnouncement: (e, t) => "".concat(t.select({
    true: () => "المجموعة المدخلة ".concat(e.groupTitle, ", مع ").concat(t.plural(e.groupCount, {
      one: () => "".concat(t.number(e.groupCount), " خيار"),
      other: () => "".concat(t.number(e.groupCount), " خيارات")
    }), ". "),
    other: ""
  }, e.isGroupChange)).concat(e.optionText).concat(t.select({
    true: ", محدد",
    other: ""
  }, e.isSelected)),
  listboxLabel: "مقترحات",
  selectedAnnouncement: e => "".concat(e.optionText, "، محدد")
}