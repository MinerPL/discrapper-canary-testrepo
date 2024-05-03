"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var l = s("735250");
s("470079");
var a = s("543595"),
  i = s("100849"),
  n = s("487922"),
  r = s("620648"),
  o = s("944546"),
  u = s("470900"),
  d = s("228168");

function c(e) {
  let {
    displayProfile: t,
    user: s,
    selectedSection: c,
    autoFocusNote: f,
    onClose: S
  } = e;
  switch (c) {
    case d.UserProfileSections.ACTIVITY:
      return (0, l.jsx)(i.default, {
        user: s,
        type: a.Types.PROFILE_V2
      });
    case d.UserProfileSections.MUTUAL_GUILDS:
      return (0, l.jsx)(u.default, {
        user: s,
        onClose: S
      });
    case d.UserProfileSections.MUTUAL_FRIENDS:
      return (0, l.jsx)(o.default, {
        user: s,
        onClose: S
      });
    case d.UserProfileSections.BOT_DATA_ACCESS:
      return (0, l.jsx)(n.default, {
        user: s
      });
    case d.UserProfileSections.USER_INFO_CONNECTIONS:
    case d.UserProfileSections.USER_INFO:
    default:
      return (0, l.jsx)(r.default, {
        displayProfile: t,
        autoFocusNote: f,
        user: s,
        scrollToConnections: c === d.UserProfileSections.USER_INFO_CONNECTIONS
      })
  }
}