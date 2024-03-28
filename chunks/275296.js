"use strict";
s.r(t), s("789020");
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("759231"),
  i = s("630388"),
  r = s("402148"),
  o = s("981631"),
  d = s("689938"),
  u = s("318311");
t.default = e => {
  let {
    role: t
  } = e;
  return (0, i.hasFlag)(t.flags, o.RoleFlags.IN_PROMPT) ? (0, r.isRolePowerful)(t) ? (0, a.jsxs)("div", {
    className: u.notice,
    children: [(0, a.jsx)(n.default, {
      className: u.noticeIconPowerful
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: d.default.Messages.ROLE_IN_PROMPT_POWERFUL_NOTICE_TEXT
    })]
  }) : (0, a.jsxs)("div", {
    className: u.notice,
    children: [(0, a.jsx)(n.default, {
      className: u.noticeIcon
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: d.default.Messages.ROLE_IN_PROMPT_NOTICE_TEXT
    })]
  }) : null
}