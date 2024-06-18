"use strict";
t(789020);
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(759231),
  a = t(630388),
  r = t(402148),
  o = t(981631),
  c = t(689938),
  d = t(376495);
s.Z = e => {
  let {
    role: s
  } = e;
  return (0, a.yE)(s.flags, o.aO5.IN_PROMPT) ? (0, r.F)(s) ? (0, n.jsxs)("div", {
    className: d.notice,
    children: [(0, n.jsx)(l.Z, {
      className: d.noticeIconPowerful
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: c.Z.Messages.ROLE_IN_PROMPT_POWERFUL_NOTICE_TEXT
    })]
  }) : (0, n.jsxs)("div", {
    className: d.notice,
    children: [(0, n.jsx)(l.Z, {
      className: d.noticeIcon
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: c.Z.Messages.ROLE_IN_PROMPT_NOTICE_TEXT
    })]
  }) : null
}