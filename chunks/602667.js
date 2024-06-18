"use strict";
n.d(t, {
  A: function() {
    return c
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(434650),
  a = n(110924),
  l = n(451478),
  u = n(915750);
let _ = e => {
    let [t, n] = r.useState(!1), i = null != e ? e : t, s = i !== (0, a.Z)(i);
    return {
      visible: i,
      visibleChanged: s,
      reference: (0, o.O)(e => n(e), .5)
    }
  },
  d = () => {
    let e = (0, s.e7)([l.Z], () => l.Z.isFocused()),
      t = e !== (0, a.Z)(e);
    return {
      focused: e,
      focusedChanged: t
    }
  };

function c(e) {
  let {
    focused: t,
    focusedChanged: n
  } = d(), {
    visible: s,
    visibleChanged: o,
    reference: a
  } = _(e.overrideVisibility), l = {
    ...e,
    focused: t,
    focusedChanged: n,
    visible: s,
    visibleChanged: o,
    reference: a,
    impression: r.useRef(null)
  };
  return (0, i.jsx)(u.u, {
    ...l
  }, (0, u.B)(e.questOrQuests, e.questContent))
}