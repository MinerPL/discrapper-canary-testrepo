"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("399606"),
  s = n("125268"),
  i = n("673125"),
  r = n("292793"),
  o = n("871499"),
  u = n("185403"),
  d = n("304388"),
  c = n("689938");

function f() {
  let e = (0, l.useStateFromStores)([i.default], () => i.default.getDrawMode()),
    t = (null == e ? void 0 : e.type) === r.DrawableType.LINE,
    n = () => {
      t ? (0, s.setDrawMode)(null) : (0, s.setDrawMode)({
        type: r.DrawableType.LINE
      })
    };
  return (0, a.jsx)(d.default, {
    renderPopout: () => null,
    children: e => {
      let {
        ...l
      } = e;
      return (0, a.jsx)(o.default, {
        ...l,
        label: c.default.Messages.SHARED_CANVAS_DRAW_MODE_LINE,
        isActive: t,
        iconComponent: u.default,
        onClick: n
      })
    }
  })
}