"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  deselectedItem: e => "".concat(e.item, " が選択されていません。"),
  longPressToSelect: "長押しして選択モードを開きます。",
  select: "選択",
  selectedAll: "すべての項目を選択しました。",
  selectedCount: (e, t) => "".concat(t.plural(e.count, {
    "=0": "項目が選択されていません",
    one: () => "".concat(t.number(e.count), " 項目を選択しました"),
    other: () => "".concat(t.number(e.count), " 項目を選択しました")
  }), "。"),
  selectedItem: e => "".concat(e.item, " を選択しました。")
}