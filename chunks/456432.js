"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("829820");

function i(e) {
  let {
    activity: t,
    user: n,
    source: i,
    ...r
  } = e, {
    label: o,
    tooltip: u,
    loading: d,
    disabled: c,
    onClick: f
  } = (0, l.useSpotifyJoinAction)(t, n, i);
  return (0, s.jsx)(a.Tooltip, {
    text: u,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, s.jsx)(a.Button, {
        ...r,
        color: c ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
        onClick: f,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: !d && c,
        submitting: d,
        children: o
      })
    }
  })
}