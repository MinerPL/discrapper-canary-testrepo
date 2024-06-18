"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(395361),
  o = n(829820),
  a = n(22387);

function l(e) {
  let {
    activity: t,
    user: n,
    source: l,
    className: u,
    size: _,
    look: d,
    color: c,
    fullWidth: E,
    onAction: I
  } = e, {
    label: T,
    tooltip: h,
    loading: S,
    disabled: f,
    onClick: N
  } = (0, o.Ih)(t, n, l), A = () => {
    null == I || I(), N()
  };
  return (0, i.jsx)(r.Tooltip, {
    text: h,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsxs)(r.Button, {
        className: u,
        innerClassName: a.playButtonInner,
        size: _,
        look: d,
        color: c,
        fullWidth: E,
        onClick: A,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: f,
        submitting: S,
        children: [(0, i.jsx)(s.Z, {
          width: 16,
          height: 16
        }), T]
      })
    }
  })
}