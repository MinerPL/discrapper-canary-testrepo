"use strict";
n.d(t, {
  S: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(979714),
  s = n(800870),
  o = n(780384),
  a = n(79320),
  l = n(600795);
let u = (0, s.vQ)("keydown", e => !!(0, l.Tm)(e) && (e.preventDefault(), !0)),
  _ = (0, s.vQ)("mousedown", e => -1 === e.type.indexOf("touch") && -1 !== e.type.indexOf("mouse") && ((0, a.Yk)(!1), !0)),
  d = {
    backends: [{
      id: "html5",
      backend: r.PD,
      transition: _
    }, {
      id: "keyboard",
      backend: l.ZP,
      context: {
        window,
        document
      },
      options: {
        onDndModeChanged: a.Yk,
        announcer: o.uv
      },
      preview: !0,
      transition: u
    }]
  };

function c(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)(s.WG, {
    options: d,
    children: t
  })
}