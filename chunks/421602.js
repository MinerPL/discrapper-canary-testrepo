"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  u = n("450911"),
  r = n("54239"),
  a = n("271938"),
  o = n("49111"),
  s = n("782340");

function d(e, t) {
  let n = a.default.getId(),
    d = t === o.AppContext.POPOUT;
  return n === e || d ? null : (0, l.jsx)(i.MenuItem, {
    id: "message-user",
    label: s.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      u.default.openPrivateChannel(e), (0, r.popLayer)()
    }
  })
}