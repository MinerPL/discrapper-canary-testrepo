"use strict";
n.r(t), n.d(t, {
  createClipsNotification: function() {
    return p
  },
  createClipsReminderNotification: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var a = n("481060"),
  l = n("312839"),
  s = n("556296"),
  o = n("454902"),
  r = n("529653"),
  d = n("13140"),
  u = n("981631"),
  c = n("987650"),
  f = n("689938");

function h() {
  let {
    trackView: e,
    trackClick: t
  } = (0, l.makeAnalyticsTrackers)(c.OverlayNotificationType.ClipsReminderNotification, {
    notif_type: c.OverlayNotificationType.ClipsReminderNotification
  }), n = s.default.getKeybindForAction(u.GlobalKeybindActions.SAVE_CLIP);
  if (null == n) return null;
  let h = d.toString(n.shortcut, !0);
  return {
    colorScheme: o.ColorSchemes.PRIMARY,
    title: f.default.Messages.CLIPS_REMINDER_NOTIFICATION_TITLE.format({
      keybind: h,
      keybindHook: () => (0, i.jsx)("span", {
        style: {
          display: "inline-block"
        },
        children: (0, i.jsx)(a.KeyCombo, {
          shortcut: h
        })
      })
    }),
    icon: (0, i.jsx)(r.default, {}),
    onNotificationShow: () => {
      e()
    },
    onDismissClick: () => {
      t("dismiss")
    }
  }
}

function p(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, l.makeAnalyticsTrackers)(c.OverlayNotificationType.ClipsNotification, {
    notif_type: c.OverlayNotificationType.ClipsNotification
  });
  return {
    colorScheme: o.ColorSchemes.PRIMARY,
    title: e,
    icon: (0, i.jsx)(r.default, {}),
    onNotificationShow: () => {
      t()
    },
    onDismissClick: () => {
      n("dismiss")
    }
  }
}