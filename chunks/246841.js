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
  l = n("22387");

function u(e) {
  let {
    activity: t,
    user: n,
    source: u,
    className: d,
    size: _,
    look: c,
    color: E,
    fullWidth: I,
    onAction: T
  } = e, {
    label: f,
    tooltip: S,
    loading: h,
    disabled: A,
    onClick: m
  } = (0, o.useSpotifyPlayAction)(t, n, u), N = () => {
    null == T || T(), m()
  };
  return (0, i.jsx)(r.Tooltip, {
    text: S,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsx)(r.Button, {
        className: d,
        size: _,
        look: c,
        color: E,
        fullWidth: I,
        onClick: N,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: A,
        submitting: h,
        children: (0, i.jsxs)(a.default, {
          align: a.default.Align.CENTER,
          children: [(0, i.jsx)(s.default, {
            className: l.spotifyButtonLogo
          }), f]
        })
      })
    }
  })
}