"use strict";
t.d(s, {
  Z: function() {
    return d
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(717251),
  c = t(729290);

function d(e) {
  let {
    action: s,
    children: t,
    className: l,
    onExpandChange: d,
    loading: u,
    ...E
  } = e, [_, I] = i.useState(!1), T = e => {
    I(e), null == d || d(e)
  };
  return (0, n.jsx)(r.Collapsible, {
    className: a()(c.groupContainer, l),
    isExpanded: _,
    collapsibleContent: (0, n.jsxs)("div", {
      className: c.groupCollapsedContainer,
      children: [_ && (0, n.jsx)("div", {
        className: c.pointer
      }), t]
    }),
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, n.jsx)(o.Z, {
        ...E,
        className: c.groupHeaderRow,
        action: u ? (0, n.jsx)(r.Spinner, {
          type: r.Spinner.Type.PULSING_ELLIPSIS
        }) : s,
        onClick: e => {
          T(!_), t(e)
        }
      })
    }
  })
}