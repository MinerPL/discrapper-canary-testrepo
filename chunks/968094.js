"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  deselectedItem: e => "".concat(e.item, " nije izabrano."),
  longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
  select: "Izaberite",
  selectedAll: "Izabrane su sve stavke.",
  selectedCount: (e, t) => "".concat(t.plural(e.count, {
    "=0": "Nije izabrana nijedna stavka",
    one: () => "Izabrana je ".concat(t.number(e.count), " stavka"),
    other: () => "Izabrano je ".concat(t.number(e.count), " stavki")
  }), "."),
  selectedItem: e => "".concat(e.item, " je izabrano.")
}