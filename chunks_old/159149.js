"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return s
  },
  default: function() {
    return E
  }
});
var r, s, i = n("37983");
n("884691");
var l = n("77078"),
  a = n("145131"),
  o = n("181114"),
  u = n("376641"),
  c = n("782340"),
  d = n("30501");
(r = s || (s = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
let f = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: r,
    primaryCTA: s,
    primaryType: f,
    primaryText: E,
    primaryTooltip: _,
    primaryDisabled: C,
    primarySubmitting: I,
    onPrimary: p,
    secondaryText: R,
    onSecondary: h
  } = e;
  return (0, i.jsxs)(l.ModalFooter, {
    justify: a.default.Justify.BETWEEN,
    align: a.default.Align.CENTER,
    children: [(() => {
      if (null == s || null == E) return null;
      let e = 2 === s ? o.default : l.Button,
        t = {
          innerClassName: d.button,
          type: f,
          disabled: C,
          submitting: I,
          color: 0 === s ? l.Button.Colors.BRAND : l.Button.Colors.GREEN,
          onClick: p
        };
      return null != _ ? (0, i.jsx)(l.Tooltip, {
        text: _,
        children: n => (0, i.jsxs)(e, {
          ...n,
          ...t,
          children: [null == r ? null : (0, i.jsx)(r, {
            className: d.primaryIcon
          }), E]
        })
      }) : (0, i.jsxs)(e, {
        ...t,
        children: [null == r ? null : (0, i.jsx)(r, {
          className: d.primaryIcon
        }), E]
      })
    })(), null == R ? null : (0, i.jsx)(l.Button, {
      color: l.Button.Colors.PRIMARY,
      look: l.Button.Looks.LINK,
      onClick: h,
      children: R
    }), (0, i.jsx)(u.default, {}), null == t ? null : (0, i.jsx)(l.Button, {
      className: d.back,
      color: l.Button.Colors.PRIMARY,
      look: l.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
f.CTAType = s;
var E = f