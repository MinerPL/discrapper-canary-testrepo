"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var l = s("735250");
s("470079");
var a = s("493683"),
  i = s("974029"),
  n = s("785717"),
  r = s("993409"),
  o = s("689938");

function u(e) {
  let {
    user: t,
    compact: s,
    onClose: u
  } = e, {
    trackUserProfileAction: d
  } = (0, n.useUserProfileAnalyticsContext)();
  return (0, l.jsx)(r.default, {
    icon: i.default,
    text: o.default.Messages.USER_PROFILE_MESSAGE,
    onClick: () => {
      d({
        action: "SEND_MESSAGE"
      }), a.default.openPrivateChannel(t.id), null == u || u()
    },
    compact: s
  })
}