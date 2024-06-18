"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(13245),
  a = n(872810),
  o = n(312839),
  r = n(454902),
  d = n(436088),
  c = n(134598),
  u = n(987650),
  h = n(689938);

function p(e) {
  let {
    game: t
  } = e, {
    trackView: n,
    trackClick: p
  } = (0, o.R)(u.n0.StartBroadcastNotification, {
    notif_type: u.n0.StartBroadcastNotification
  });
  return {
    colorScheme: r.IC.PRIMARY,
    title: null,
    body: h.Z.Messages.START_BROADCAST_NOTIFICATION_BODY,
    icon: (0, i.jsx)(d.Z, {}),
    renderFooter: () => (0, i.jsx)(s.Button, {
      color: s.Button.Colors.GREEN,
      size: s.Button.Sizes.SMALL,
      fullWidth: !0,
      children: h.Z.Messages.START_BROADCAST_NOTIFICATION_CTA
    }),
    onNotificationShow: () => {
      n()
    },
    onNotificationClick: (e, n) => {
      p("unlock"), l.Z.updateNotificationStatus(n), l.Z.setInstanceLocked(!1), (0, c.X)(h.Z.Messages.START_BROADCASTING, h.Z.Messages.START_BROADCASTING_CTA, () => {
        (0, a.tE)({
          pid: t.pid
        })
      })
    },
    onDismissClick: () => {
      p("dismiss")
    }
  }
}