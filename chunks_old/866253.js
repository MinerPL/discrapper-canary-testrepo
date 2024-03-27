"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("996866");

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
    onClick: E
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
        onClick: E,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: !d && c,
        submitting: d,
        children: o
      })
    }
  })
}