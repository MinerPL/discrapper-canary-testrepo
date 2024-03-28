"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("643560");
t.default = e => {
  let {
    entry: t,
    forceLightTheme: n,
    hideEditButton: i,
    children: r,
    onRequestOpen: o,
    onRequestClose: u
  } = e;
  return (0, a.jsx)(l.Popout, {
    onRequestOpen: o,
    onRequestClose: u,
    animation: l.Popout.Animation.NONE,
    position: "bottom",
    spacing: 4,
    align: "right",
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, a.jsx)(s.default, {
        entry: t,
        closePopout: l,
        forceLightTheme: n,
        hideEditButton: i
      })
    },
    children: r
  })
}