"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var a = n("481060"),
  l = n("13245"),
  s = n("872810"),
  o = n("312839"),
  r = n("454902"),
  d = n("436088"),
  u = n("134598"),
  c = n("987650"),
  f = n("689938");

function h(e) {
  let {
    game: t
  } = e, {
    trackView: n,
    trackClick: h
  } = (0, o.makeAnalyticsTrackers)(c.OverlayNotificationType.StartBroadcastNotification, {
    notif_type: c.OverlayNotificationType.StartBroadcastNotification
  });
  return {
    colorScheme: r.ColorSchemes.PRIMARY,
    title: null,
    body: f.default.Messages.START_BROADCAST_NOTIFICATION_BODY,
    icon: (0, i.jsx)(d.default, {}),
    renderFooter: () => (0, i.jsx)(a.Button, {
      color: a.Button.Colors.GREEN,
      size: a.Button.Sizes.SMALL,
      fullWidth: !0,
      children: f.default.Messages.START_BROADCAST_NOTIFICATION_CTA
    }),
    onNotificationShow: () => {
      n()
    },
    onNotificationClick: (e, n) => {
      h("unlock"), l.default.updateNotificationStatus(n), l.default.setInstanceLocked(!1), (0, u.openBroadcastingPrivacySettingsModal)(f.default.Messages.START_BROADCASTING, f.default.Messages.START_BROADCASTING_CTA, () => {
        (0, s.createBroadcastChannelOrStartStream)({
          pid: t.pid
        })
      })
    },
    onDismissClick: () => {
      h("dismiss")
    }
  }
}