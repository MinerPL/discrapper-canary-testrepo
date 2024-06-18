"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(454902),
  s = n(768581),
  l = n(312839),
  a = n(981631),
  o = n(987650),
  r = n(689938);

function d(e, t) {
  let n = e.username,
    d = r.Z.Messages.USER_ACTIVITY_USER_JOIN.format({
      username: ""
    }),
    c = (0, s.ov)(e),
    {
      trackView: u,
      trackClick: h
    } = (0, l.R)(o.n0.ActivityUserJoin, {
      notif_type: o.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: a.mFx.JOIN,
      activity_name: t.name
    });
  return {
    colorScheme: i.ZP.ColorSchemes.PRIMARY,
    icon: c,
    title: n,
    body: d,
    hint: e => (0, i.Yj)(e, r.Z.Messages.USER_ACTIVITY_USER_JOIN_HINT),
    onNotificationShow: () => {
      u()
    },
    onDismissClick: () => {
      h("dismiss")
    }
  }
}