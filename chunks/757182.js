"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(655922),
  s = n(420660),
  o = n(915863),
  a = n(689938);

function l(e) {
  let {
    activity: t,
    onAction: n,
    ButtonComponent: l = o.Z,
    ...u
  } = e;
  return (0, s.Z)(t) ? (0, i.jsx)(l, {
    onClick: () => {
      null == n || n();
      let e = (0, r.Z)(t);
      return window.open(null != e ? e : void 0)
    },
    fullWidth: !0,
    ...u,
    children: a.Z.Messages.WATCH
  }, "play-activity") : null
}