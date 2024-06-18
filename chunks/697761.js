"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(710845),
  s = n(620662),
  o = n(915863),
  a = n(981631),
  l = n(689938);

function u(e) {
  let {
    activity: t,
    user: n,
    look: u,
    color: _,
    onAction: d
  } = e;
  return (0, s.Z)(t, a.xjy.INSTANCE) ? (0, i.jsx)(o.Z, {
    look: u,
    color: _,
    onClick: () => {
      null == d || d(), new r.Z("UserActivityActions").log("notify", n.id, t)
    },
    fullWidth: !0,
    children: l.Z.Messages.USER_ACTIVITY_ACTION_NOTIFY_ME
  }, "notify") : null
}