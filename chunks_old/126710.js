"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  r = n("450911"),
  s = n("42203"),
  l = n("782340");

function u(e, t) {
  let n = s.default.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(a.MenuItem, {
    id: "close-dm",
    label: l.default.Messages.CLOSE_DM,
    action: () => r.default.closePrivateChannel(e, t)
  })
}