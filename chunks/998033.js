"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("735250");
n("470079");
var a = n("13245"),
  l = n("703656"),
  s = n("974180"),
  o = n("237997"),
  r = n("454902"),
  d = n("150097"),
  u = n("557177"),
  c = n("312839"),
  f = n("981631"),
  h = n("987650"),
  p = n("689938");

function g(e, t, n, g) {
  var m;
  let {
    icon: E,
    title: S,
    body: v
  } = (0, d.makeTextChatNotification)(e, t, n), {
    trackView: y,
    trackClick: I
  } = (0, c.makeAnalyticsTrackers)(h.OverlayNotificationType.TextChat, {
    notif_type: h.OverlayNotificationType.TextChat,
    notif_user_id: null === (m = t.author) || void 0 === m ? void 0 : m.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type
  });
  return {
    colorScheme: r.ColorSchemes.PRIMARY,
    icon: E,
    title: S,
    body: v,
    renderFooter: e => e ? (0, i.jsx)("div", {
      style: {
        textAlign: "center"
      },
      children: p.default.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL
    }) : null,
    maxBodyLines: 2,
    onNotificationShow: () => {
      g && (0, u.playSound)(s.MESSAGE_SOUND, s.MESSAGE_SOUND_VOLUME), y()
    },
    onNotificationClick: () => {
      (0, l.transitionTo)(f.Routes.CHANNEL(e.guild_id, e.id)), I("jump"), o.default.isInstanceUILocked() && a.default.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      I("dismiss")
    }
  }
}