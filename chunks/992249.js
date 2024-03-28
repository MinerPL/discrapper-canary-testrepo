"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("717251"),
  d = s("738147");

function u(e) {
  let {
    action: t,
    children: s,
    className: n,
    onExpandChange: u,
    loading: c,
    ...E
  } = e, [_, I] = l.useState(!1), T = e => {
    I(e), null == u || u(e)
  };
  return (0, a.jsx)(r.Collapsible, {
    className: i()(d.groupContainer, n),
    isExpanded: _,
    collapsibleContent: (0, a.jsxs)("div", {
      className: d.groupCollapsedContainer,
      children: [_ && (0, a.jsx)("div", {
        className: d.pointer
      }), s]
    }),
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, a.jsx)(o.default, {
        ...E,
        className: d.groupHeaderRow,
        action: c ? (0, a.jsx)(r.Spinner, {
          type: r.Spinner.Type.PULSING_ELLIPSIS
        }) : t,
        onClick: e => {
          T(!_), s(e)
        }
      })
    }
  })
}