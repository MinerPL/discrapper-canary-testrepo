"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r = {};
r = {
  deselectedItem: e => "Stavka ".concat(e.item, " nije odabrana."),
  longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
  select: "Odaberite",
  selectedAll: "Odabrane su sve stavke.",
  selectedCount: (e, t) => "".concat(t.plural(e.count, {
    "=0": "Nije odabrana nijedna stavka",
    one: () => "Odabrana je ".concat(t.number(e.count), " stavka"),
    other: () => "Odabrano je ".concat(t.number(e.count), " stavki")
  }), "."),
  selectedItem: e => "Stavka ".concat(e.item, " je odabrana.")
}