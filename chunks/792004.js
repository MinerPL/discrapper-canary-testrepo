"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  buttonLabel: "候補を表示",
  countAnnouncement: (e, t) => "".concat(t.plural(e.optionCount, {
    one: () => "".concat(t.number(e.optionCount), " 個のオプション"),
    other: () => "".concat(t.number(e.optionCount), " 個のオプション")
  }), "を利用できます。"),
  focusAnnouncement: (e, t) => "".concat(t.select({
    true: () => "入力されたグループ ".concat(e.groupTitle, "、").concat(t.plural(e.groupCount, {
      one: () => "".concat(t.number(e.groupCount), " 個のオプション"),
      other: () => "".concat(t.number(e.groupCount), " 個のオプション")
    }), "を含む。"),
    other: ""
  }, e.isGroupChange)).concat(e.optionText).concat(t.select({
    true: "、選択済み",
    other: ""
  }, e.isSelected)),
  listboxLabel: "候補",
  selectedAnnouncement: e => "".concat(e.optionText, "、選択済み")
}