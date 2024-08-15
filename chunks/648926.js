n.d(t, {
  Z: function() {
return f;
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
  c = n(475413),
  d = n(981631),
  _ = n(689938),
  E = n(139665);

function f(e) {
  let {
stream: t,
canWatch: n,
unavailableReason: f,
onAction: h,
onClose: p
  } = e, m = (0, i.e7)([u.Z], () => {
let e = u.Z.getActiveStreamForApplicationStream(t);
return (null == e ? void 0 : e.state) !== d.jm8.ENDED && (null == e ? void 0 : e.ownerId) === t.ownerId && u.Z.getAllActiveStreamsForChannel(t.channelId).some(e => {
  let {
    state: n,
    ownerId: r
  } = e;
  return n !== d.jm8.ENDED && r !== t.ownerId;
});
  });
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(a.Tooltip, {
    text: null != f ? (0, l.P9)(f) : null,
    children: e => (0, r.jsx)(c.tG, {
      ...e,
      icon: a.ScreenIcon,
      text: _.Z.Messages.WATCH,
      disabled: !n,
      wrapperClassName: E.primaryButton,
      fullWidth: !0,
      onClick: () => {
        null == h || h({
          action: 'PRESS_WATCH_STREAM_BUTTON'
        }), s.default.selectVoiceChannel(t.channelId), (0, o.iV)(t), null == p || p();
      }
    })
  }),
  m && (0, r.jsx)(c.ef, {
    tooltipText: _.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
    icon: a.EyePlusIcon,
    disabled: !n,
    onClick: () => {
      null == h || h({
        action: 'PRESS_WATCH_MULTIPLE_STREAMS_BUTTON'
      }), s.default.selectVoiceChannel(t.channelId), (0, o.iV)(t, {
        forceMultiple: !0
      }), null == p || p();
    }
  })
]
  });
}