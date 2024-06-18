"use strict";
n.d(t, {
  a: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(272903);

function l(e) {
  let {
    children: t,
    onClick: n,
    className: r,
    tooltip: l
  } = e;
  return (0, i.jsx)(o.Tooltip, {
    text: l,
    children: e => {
      let {
        onClick: l,
        ...u
      } = e;
      return (0, i.jsx)(o.Button, {
        ...u,
        onClick: e => {
          null == n || n(e), null == l || l()
        },
        innerClassName: a.buttonReset,
        color: s()(a.cta, r),
        size: o.Button.Sizes.MIN,
        children: t
      })
    }
  })
}