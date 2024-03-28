"use strict";
i.r(t);
var n = i("735250");
i("470079");
var a = i("374470"),
  s = i("239091");
t.default = e => {
  let {
    facepileRef: t,
    goToThread: l,
    channel: o
  } = e;
  return {
    handleLeftClick: e => {
      var i;
      !((0, a.isElement)(e.target) && (null === (i = t.current) || void 0 === i ? void 0 : i.contains(e.target))) && l(o, e.shiftKey)
    },
    handleRightClick: e => (0, s.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([i.e("99387"), i.e("39285"), i.e("53466"), i.e("19213")]).then(i.bind(i, "422200"));
      return t => (0, n.jsx)(e, {
        ...t,
        channel: o
      })
    })
  }
}