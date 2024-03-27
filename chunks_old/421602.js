"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  a = n("450911"),
  i = n("54239"),
  d = n("271938"),
  s = n("49111"),
  o = n("782340");

function r(e, t) {
  let n = d.default.getId(),
    r = t === s.AppContext.POPOUT;
  return n === e || r ? null : (0, l.jsx)(u.MenuItem, {
    id: "message-user",
    label: o.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      a.default.openPrivateChannel(e), (0, i.popLayer)()
    }
  })
}