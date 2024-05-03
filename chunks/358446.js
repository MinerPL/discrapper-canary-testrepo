"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  useGetKeybindNotification: function() {
    return m
  }
}), n("47120");
var i = n("735250");
n("470079");
var a = n("524437"),
  l = n("481060"),
  s = n("13245"),
  o = n("312839"),
  r = n("706140"),
  d = n("454902"),
  u = n("357727"),
  c = n("658785"),
  f = n("987650"),
  h = n("921944"),
  p = n("689938"),
  g = n("918910");

function m() {
  let [e, t] = (0, r.useGetDismissibleContent)([a.DismissibleContent.OVERLAY_KEYBIND_NOTIFICATION]), {
    showKeybindIndicators: n
  } = c.default.useExperiment({
    location: "Overlay"
  }, {
    autoTrackExposure: !1
  });
  return {
    showKeybindIndicators: null != e && n,
    dismissKeybindNotification: t
  }
}

function E(e) {
  let {
    markAsDismissed: t
  } = e, {
    trackView: n,
    trackClick: a
  } = (0, o.makeAnalyticsTrackers)(f.OverlayNotificationType.KeybindIndicatorsNotification, {
    notif_type: f.OverlayNotificationType.KeybindIndicatorsNotification
  });
  return {
    icon: null,
    body: (0, i.jsxs)("div", {
      className: g.notificationBody,
      children: [(0, i.jsx)("div", {
        className: g.iconContainer,
        children: (0, i.jsx)(u.default, {
          height: 28,
          width: 28
        })
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: p.default.Messages.KEYBIND_NOTIFICATION_DESCRIPTION
      })]
    }),
    colorScheme: d.ColorSchemes.PRIMARY,
    onDismissClick: (e, n) => {
      a("dismiss"), t(h.ContentDismissActionType.DISMISS), s.default.updateNotificationStatus(n)
    },
    onNotificationShow: () => {
      t(h.ContentDismissActionType.AUTO_DISMISS), n()
    }
  }
}