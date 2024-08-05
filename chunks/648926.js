n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(287734),
  o = n(872810),
  l = n(382182),
  u = n(199902),
  c = n(652853),
  d = n(475413),
  _ = n(228168),
  E = n(981631),
  f = n(689938),
  h = n(692184);

function p(e) {
  let {
stream: t,
canWatch: n,
unavailableReason: p,
onClick: m,
onClose: I
  } = e, {
profileType: T
  } = (0, c.z)(), g = (0, i.e7)([u.Z], () => {
let e = u.Z.getActiveStreamForApplicationStream(t);
return (null == e ? void 0 : e.state) !== E.jm8.ENDED && (null == e ? void 0 : e.ownerId) === t.ownerId && u.Z.getAllActiveStreamsForChannel(t.channelId).some(e => {
  let {
    state: n,
    ownerId: r
  } = e;
  return n !== E.jm8.ENDED && r !== t.ownerId;
});
  });
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(a.Tooltip, {
    text: null != p ? (0, l.P9)(p) : null,
    children: e => (0, r.jsx)(d.tG, {
      ...e,
      icon: a.ScreenIcon,
      text: f.Z.Messages.WATCH,
      disabled: !n,
      themeColor: T === _.y0.FULL_SIZE ? 'secondary' : 'primary',
      wrapperClassName: h.primaryButton,
      fullWidth: !0,
      onClick: e => {
        null == m || m(e), s.default.selectVoiceChannel(t.channelId), (0, o.iV)(t), null == I || I();
      }
    })
  }),
  g && (0, r.jsx)(d.ef, {
    tooltipText: f.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
    icon: a.EyePlusIcon,
    disabled: !n,
    themeColor: T === _.y0.FULL_SIZE ? 'secondary' : 'primary',
    onClick: e => {
      null == m || m(e), s.default.selectVoiceChannel(t.channelId), (0, o.iV)(t, {
        forceMultiple: !0
      }), null == I || I();
    }
  })
]
  });
}