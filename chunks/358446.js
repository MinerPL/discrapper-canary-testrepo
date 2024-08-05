n.d(t, {
  K: function() {
return _;
  },
  Z: function() {
return g;
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(704215),
  a = n(481060),
  o = n(13245),
  r = n(312839),
  l = n(706140),
  c = n(593481),
  d = n(658785),
  u = n(987650),
  h = n(921944),
  p = n(689938),
  f = n(306220);

function _() {
  let [e, t] = (0, l.c)([s.z.OVERLAY_KEYBIND_NOTIFICATION]), {
showKeybindIndicators: n
  } = d.Z.useExperiment({
location: 'Overlay'
  }, {
autoTrackExposure: !1
  });
  return {
showKeybindIndicators: null != e && n,
dismissKeybindNotification: t
  };
}

function g(e) {
  let {
markAsDismissed: t
  } = e, {
trackView: n,
trackClick: s
  } = (0, r.R)(u.n0.KeybindIndicatorsNotification, {
notif_type: u.n0.KeybindIndicatorsNotification
  });
  return {
icon: null,
body: (0, i.jsxs)('div', {
  className: f.notificationBody,
  children: [
    (0, i.jsx)('div', {
      className: f.iconContainer,
      children: (0, i.jsx)(a.MicrophoneIcon, {
        size: 'custom',
        color: 'currentColor',
        height: 28,
        width: 28
      })
    }),
    (0, i.jsx)(a.Text, {
      variant: 'text-sm/normal',
      children: p.Z.Messages.KEYBIND_NOTIFICATION_DESCRIPTION
    })
  ]
}),
colorScheme: c.IC.PRIMARY,
onDismissClick: (e, n) => {
  s('dismiss'), t(h.L.DISMISS), o.Z.updateNotificationStatus(n);
},
onNotificationShow: () => {
  t(h.L.AUTO_DISMISS), n();
}
  };
}