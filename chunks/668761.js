"use strict";
n.d(t, {
  f: function() {
    return f
  },
  y: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(312839),
  a = n(556296),
  o = n(454902),
  r = n(529653),
  d = n(13140),
  c = n(981631),
  u = n(987650),
  h = n(689938);

function p() {
  let {
    trackView: e,
    trackClick: t
  } = (0, l.R)(u.n0.ClipsReminderNotification, {
    notif_type: u.n0.ClipsReminderNotification
  }), n = a.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
  if (null == n) return null;
  let p = d.BB(n.shortcut, !0);
  return {
    colorScheme: o.IC.PRIMARY,
    title: h.Z.Messages.CLIPS_REMINDER_NOTIFICATION_TITLE.format({
      keybind: p,
      keybindHook: () => (0, i.jsx)("span", {
        style: {
          display: "inline-block"
        },
        children: (0, i.jsx)(s.KeyCombo, {
          shortcut: p
        })
      })
    }),
    icon: (0, i.jsx)(r.Z, {}),
    onNotificationShow: () => {
      e()
    },
    onDismissClick: () => {
      t("dismiss")
    }
  }
}

function f(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, l.R)(u.n0.ClipsNotification, {
    notif_type: u.n0.ClipsNotification
  });
  return {
    colorScheme: o.IC.PRIMARY,
    title: e,
    icon: (0, i.jsx)(r.Z, {}),
    onNotificationShow: () => {
      t()
    },
    onDismissClick: () => {
      n("dismiss")
    }
  }
}