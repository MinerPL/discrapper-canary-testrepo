"use strict";
n.d(t, {
  M0: function() {
    return d
  },
  YX: function() {
    return u
  },
  tT: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(1561),
  a = n(981729),
  l = n(264426);
let u = {
    TERTIARY: l.tertiary,
    SECONDARY: l.secondary,
    PRIMARY: l.primary
  },
  _ = {
    SIZE_24: l.size24,
    SIZE_32: l.size32,
    SIZE_36: l.size36
  };

function d(e) {
  let {
    className: t,
    tooltip: n,
    color: r,
    size: u = _.SIZE_32,
    icon: d,
    onClick: c,
    disabled: E,
    focusProps: I
  } = e;
  return (0, i.jsx)(a.u, {
    text: n,
    shouldShow: !E,
    children: e => {
      let {
        onClick: a,
        ..._
      } = e;
      return (0, i.jsx)(o.P, {
        ..._,
        "aria-label": n,
        "aria-disabled": E,
        className: s()(t, l.button, r, u, {
          [l.disabled]: E
        }),
        onClick: e => {
          null == a || a(), c(e)
        },
        focusProps: I,
        children: d
      })
    }
  })
}