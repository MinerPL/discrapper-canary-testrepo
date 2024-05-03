"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("285952"),
  s = n("395361"),
  o = n("829820"),
  l = n("160004");

function u(e) {
  let {
    activity: t,
    user: n,
    source: u,
    className: d,
    size: _,
    onAction: c
  } = e, {
    label: E,
    tooltip: I,
    loading: T,
    disabled: f,
    onClick: S
  } = (0, o.useSpotifyPlayAction)(t, n, u), h = () => {
    null == c || c(), S()
  };
  return (0, i.jsx)(r.Tooltip, {
    text: I,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsx)(r.Button, {
        className: d,
        size: _,
        onClick: h,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: f,
        submitting: T,
        children: (0, i.jsxs)(a.default, {
          align: a.default.Align.CENTER,
          children: [(0, i.jsx)(s.default, {
            className: l.spotifyButtonLogo
          }), E]
        })
      })
    }
  })
}