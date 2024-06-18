"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(404975),
  u = n(725446);

function _(e) {
  let {
    onClick: t,
    children: n,
    tooltip: s,
    dangerous: _ = !1,
    className: d,
    "aria-label": c
  } = e;
  return (0, i.jsx)(a.Tooltip, {
    text: s,
    hideOnClick: !0,
    children: e => {
      let {
        onMouseEnter: a,
        onMouseLeave: E,
        onClick: I
      } = e;
      return (0, i.jsx)(l.zx, {
        onMouseEnter: a,
        onMouseLeave: E,
        onClick: e => {
          e.stopPropagation(), null == I || I(), t(e)
        },
        dangerous: _,
        "aria-label": null != c ? c : s,
        className: d,
        children: r.Children.map(n, e => r.isValidElement(e) ? r.cloneElement(e, {
          className: o()(e.props.className, u.actionBarIcon)
        }) : e)
      })
    }
  })
}