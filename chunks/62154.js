"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("100849"),
  i = s("487922"),
  o = s("620648"),
  r = s("944546"),
  n = s("470900"),
  u = s("228168");

function c(e) {
  let {
    displayProfile: t,
    user: s,
    selectedSection: c,
    autoFocusNote: d,
    onClose: f
  } = e;
  switch (c) {
    case u.UserProfileSections.ACTIVITY:
      return (0, a.jsx)(l.default, {
        user: s
      });
    case u.UserProfileSections.MUTUAL_GUILDS:
      return (0, a.jsx)(n.default, {
        user: s,
        onClose: f
      });
    case u.UserProfileSections.MUTUAL_FRIENDS:
      return (0, a.jsx)(r.default, {
        user: s,
        onClose: f
      });
    case u.UserProfileSections.BOT_DATA_ACCESS:
      return (0, a.jsx)(i.default, {
        user: s
      });
    case u.UserProfileSections.USER_INFO_CONNECTIONS:
    case u.UserProfileSections.USER_INFO:
    default:
      return (0, a.jsx)(o.default, {
        displayProfile: t,
        autoFocusNote: d,
        user: s,
        scrollToConnections: c === u.UserProfileSections.USER_INFO_CONNECTIONS
      })
  }
}