"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  deselectedItem: e => "未选择 ".concat(e.item, "。"),
  longPressToSelect: "长按以进入选择模式。",
  select: "选择",
  selectedAll: "已选择所有项目。",
  selectedCount: (e, t) => "".concat(t.plural(e.count, {
    "=0": "未选择项目",
    one: () => "已选择 ".concat(t.number(e.count), " 个项目"),
    other: () => "已选择 ".concat(t.number(e.count), " 个项目")
  }), "。"),
  selectedItem: e => "已选择 ".concat(e.item, "。")
}