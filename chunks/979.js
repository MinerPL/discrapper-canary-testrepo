"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  deselectedItem: e => "Element ".concat(e.item, " ni izbran."),
  longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
  select: "Izberite",
  selectedAll: "Vsi elementi so izbrani.",
  selectedCount: (e, t) => "".concat(t.plural(e.count, {
    "=0": "Noben element ni izbran",
    one: () => "".concat(t.number(e.count), " element je izbran"),
    other: () => "".concat(t.number(e.count), " elementov je izbranih")
  }), "."),
  selectedItem: e => "Element ".concat(e.item, " je izbran.")
}