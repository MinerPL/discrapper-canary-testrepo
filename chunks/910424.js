n.d(t, {
  Z: function() {
return I;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(572691),
  o = n(287734),
  l = n(872810),
  u = n(40851),
  c = n(382182),
  d = n(199902),
  _ = n(592125),
  E = n(585483),
  f = n(915863),
  h = n(981631),
  p = n(689938),
  m = n(589850);

function I(e) {
  let {
isCurrentUser: t,
color: n,
look: I,
applicationStream: T,
onAction: g
  } = e, {
activeStream: S,
watchingOtherStream: A
  } = (0, i.cj)([d.Z], () => ({
activeStream: d.Z.getActiveStreamForApplicationStream(T),
watchingOtherStream: null != T && d.Z.getAllActiveStreamsForChannel(T.channelId).filter(e => {
  let {
    ownerId: t
  } = e;
  return t !== T.ownerId;
}).length > 0
  })), N = (0, i.e7)([_.Z], () => _.Z.getChannel(null == T ? void 0 : T.channelId)), [v, O] = (0, c.wq)(N), R = (0, u.Aq)(), C = null != S && null != T && S.state !== h.jm8.ENDED && S.ownerId === T.ownerId, y = e => {
if (null != T)
  null == g || g(), o.default.selectVoiceChannel(T.channelId), !C && (0, l.iV)(T, {
    forceMultiple: e
  }), R.dispatch(h.CkL.POPOUT_CLOSE), E.S.dispatch(h.CkL.MODAL_CLOSE), s.Z.popAll();
  };
  if (null == T)
return null;
  let D = (0, c.P9)(O);
  t ? D = p.Z.Messages.WATCH_STREAM_STREAMING : C && (D = p.Z.Messages.WATCH_STREAM_WATCHING);
  let L = {
color: n,
look: I
  };
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)(f.Z, {
    disabled: t || C || !v,
    onClick: () => y(!1),
    ...L,
    fullWidth: !0,
    children: [
      (0, r.jsx)(a.ScreenArrowIcon, {
        size: 'md',
        color: 'currentColor',
        className: m.streamIcon
      }),
      D
    ]
  }, 'play'),
  A && !C ? (0, r.jsx)(a.Tooltip, {
    text: p.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
    children: e => (0, r.jsx)(f.Z, {
      ...e,
      onClick: () => {
        var t;
        null === (t = e.onClick) || void 0 === t || t.call(e), y(!0);
      },
      ...L,
      className: m.iconButton,
      size: m.iconButtonSize,
      children: (0, r.jsx)(a.EyePlusIcon, {
        size: 'xs',
        color: 'currentColor',
        className: m.iconSize
      })
    })
  }) : null
]
  });
}