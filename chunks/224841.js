"use strict";
var s = n(735250);
n(470079);
var r = n(481060),
  i = n(703656),
  a = n(819570),
  l = n(63063),
  o = n(981631),
  u = n(689938),
  c = n(657977);
let d = () => (0, i.uL)(o.Z5c.LOGIN);
t.Z = e => {
  let {
    authBoxClassName: t,
    underageMessage: i
  } = e;
  return (0, s.jsxs)(a.ZP, {
    className: t,
    children: [(0, s.jsx)("img", {
      alt: "",
      src: n(231443),
      className: c.img
    }), (0, s.jsx)(a.Dx, {
      className: c.title,
      children: u.Z.Messages.AGE_GATE_UNDERAGE_HEADER
    }), (0, s.jsx)(a.DK, {
      className: c.subtitle,
      children: u.Z.Messages.AGE_GATE_UNDERAGE_BODY.format({
        underageMessage: null != i ? i : u.Z.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
        helpURL: l.Z.getArticleURL(o.BhN.AGE_GATE)
      })
    }), (0, s.jsx)(r.Button, {
      fullWidth: !0,
      onClick: d,
      children: u.Z.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
    })]
  })
}