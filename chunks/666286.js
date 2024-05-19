"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("115849"),
  r = n("645792"),
  o = n("787642"),
  u = n("437314"),
  d = n("981631"),
  c = n("689938"),
  f = n("910040");

function E() {
  return (0, a.jsxs)("header", {
    className: f.header,
    children: [(0, a.jsx)(l.FormTitle, {
      tag: "h2",
      className: f.title,
      children: c.default.Messages.ADD_FRIEND
    }), (0, a.jsx)(i.default, {})]
  })
}
t.default = function() {
  return (0, a.jsxs)(s.Fragment, {
    children: [(0, a.jsx)(E, {}), (0, r.backToSchoolEnabled)() && (0, a.jsx)(o.default, {}), (0, a.jsx)("div", {
      className: f.emptyState,
      children: (0, a.jsx)(u.default, {
        type: d.FriendsSections.ADD_FRIEND
      })
    })]
  })
}