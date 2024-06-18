"use strict";
n.d(t, {
  K: function() {
    return Z
  },
  Z: function() {
    return g
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(704215),
  l = n(481060),
  a = n(13245),
  o = n(312839),
  r = n(706140),
  d = n(454902),
  c = n(357727),
  u = n(658785),
  h = n(987650),
  p = n(921944),
  f = n(689938),
  E = n(398644);

function Z() {
  let [e, t] = (0, r.c)([s.z.OVERLAY_KEYBIND_NOTIFICATION]), {
    showKeybindIndicators: n
  } = u.Z.useExperiment({
    location: "Overlay"
  }, {
    autoTrackExposure: !1
  });
  return {
    showKeybindIndicators: null != e && n,
    dismissKeybindNotification: t
  }
}

function g(e) {
  let {
    markAsDismissed: t
  } = e, {
    trackView: n,
    trackClick: s
  } = (0, o.R)(h.n0.KeybindIndicatorsNotification, {
    notif_type: h.n0.KeybindIndicatorsNotification
  });
  return {
    icon: null,
    body: (0, i.jsxs)("div", {
      className: E.notificationBody,
      children: [(0, i.jsx)("div", {
        className: E.iconContainer,
        children: (0, i.jsx)(c.Z, {
          height: 28,
          width: 28
        })
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: f.Z.Messages.KEYBIND_NOTIFICATION_DESCRIPTION
      })]
    }),
    colorScheme: d.IC.PRIMARY,
    onDismissClick: (e, n) => {
      s("dismiss"), t(p.L.DISMISS), a.Z.updateNotificationStatus(n)
    },
    onNotificationShow: () => {
      t(p.L.AUTO_DISMISS), n()
    }
  }
}