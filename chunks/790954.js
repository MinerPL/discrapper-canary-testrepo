"use strict";
r.r(t), r.d(t, {
  resetInspectedStickerPosition: function() {
    return c
  },
  setInspectedStickerPosition: function() {
    return i
  },
  useStickerViewAllStore: function() {
    return a
  }
});
var s = r("652874");
let l = Object.freeze({
    inspectedStickerPosition: {
      rowIndex: -1,
      columnIndex: -1
    }
  }),
  n = (0, s.default)(e => l),
  a = n,
  i = (e, t, r) => {
    n.setState({
      inspectedStickerPosition: {
        rowIndex: t,
        columnIndex: e,
        source: r
      }
    })
  },
  c = () => {
    i(-1, -1)
  }