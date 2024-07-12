n.d(t, {
  Z: function() {
return er;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(392711),
  o = n(442837),
  c = n(433517),
  d = n(481060),
  u = n(570140),
  h = n(393238),
  p = n(40851),
  m = n(100527),
  _ = n(906732),
  f = n(358221),
  E = n(414910),
  C = n(909820),
  g = n(493010),
  I = n(788983),
  x = n(928518),
  T = n(703656),
  v = n(493754),
  N = n(880831),
  S = n(73563),
  Z = n(800965),
  A = n(107169),
  M = n(891551),
  b = n(314897),
  R = n(979696),
  j = n(430824),
  L = n(496675),
  P = n(944486),
  O = n(358085),
  y = n(792125),
  D = n(998502),
  k = n(922482),
  U = n(431328),
  w = n(501655),
  B = n(427679),
  H = n(513449),
  G = n(153349),
  V = n(901434),
  F = n(302270),
  W = n(308177),
  z = n(700483),
  Y = n(686468),
  K = n(801405),
  q = n(903108),
  X = n(981631),
  Q = n(354459),
  J = n(689938),
  $ = n(495585);
let ee = 'HasBeenInStageChannel',
  et = (e, t) => () => {
let n = e.getGuildId();
null != n && null != t && (0, T.XU)(n, t), I.hP(e);
  },
  en = () => {
u.Z.wait(() => I.xv(X.KJ3.CHANNEL_CALL_POPOUT));
  },
  ei = e => {
I.hY(X.KJ3.CHANNEL_CALL_POPOUT, e);
  };

function ea(e) {
  let {
channel: t,
appContext: n,
popoutOpen: l,
popoutWindow: s,
popoutWindowAlwaysOnTop: r,
selectedParticipant: c
  } = e, d = t.getGuildId(), u = (0, o.e7)([P.Z], () => P.Z.getMostRecentSelectedTextChannelId(d), [d]), h = b.default.getId(), p = !(0, o.e7)([f.Z], () => f.Z.isFullscreenInContext(n)) && (!O.isPlatformEmbedded || O.isPlatformEmbedded && D.ZP.supportsFeature(X.eRX.POPOUT_WINDOWS)), m = null != c && c.type !== Q.fO.ACTIVITY && c.user.id !== h, _ = a.useMemo(() => {
var e;
return null !== (e = null == s ? void 0 : s.window) && void 0 !== e ? e : window;
  }, [s]), C = (0, K.Z)({
channel: t,
appContext: n,
popoutOpen: l,
popoutWindow: s,
currentWindow: _
  }), g = n === X.IlC.POPOUT && O.isPlatformEmbedded && D.ZP.supportsFeature(X.eRX.POPOUT_WINDOWS);
  return (0, i.jsxs)(i.Fragment, {
children: [
  m ? (0, i.jsx)(M.Z, {
    context: (0, E.Z)(c.type),
    userId: c.user.id,
    currentWindow: _,
    sliderClassName: $.volumeSlider
  }) : null,
  g ? (0, i.jsx)(A.Z, {
    className: $.rightTrayIcon,
    popoutWindowAlwaysOnTop: r,
    onToggleStayOnTop: ei
  }) : null,
  p ? (0, i.jsx)(Z.Z, {
    className: $.rightTrayIcon,
    popoutOpen: l,
    onOpenPopout: et(t, u),
    onClosePopout: en
  }) : null,
  C
]
  });
}

function el(e) {
  let {
channel: t
  } = e, n = (0, p.bp)(), a = (0, o.e7)([L.Z], () => L.Z.can(X.Plq.CREATE_INSTANT_INVITE, t)), l = (0, o.e7)([j.Z], () => j.Z.getGuild(t.guild_id)), s = (0, o.e7)([B.Z], () => B.Z.getStageInstanceByChannel(t.id)), r = a || (null == s ? void 0 : s.invite_code) != null;
  return null != l && r ? (0, i.jsx)(v.Z, {
channel: t,
appContext: n,
className: $.__invalid_leftTrayIcon,
analyticsLocation: X.ZY5.GUILD_CHANNEL
  }) : null;
}

function es(e) {
  let t, {
  channel: n,
  toggleRequestToSpeakSidebar: l,
  showRequestToSpeakSidebar: c,
  popoutWindow: d,
  popoutWindowAlwaysOnTop: u,
  popoutOpen: h,
  chatOpen: m
} = e,
_ = (0, p.bp)(),
E = (0, o.e7)([P.Z], () => P.Z.getVoiceChannelId() === n.id, [n.id]),
g = (0, o.e7)([L.Z], () => L.Z.can(X.Plq.CONNECT, n)),
I = (0, U.w8)(n.id, w.pV.SPEAKER),
x = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
T = h && _ !== X.IlC.POPOUT,
[v, Z] = a.useState(0),
{
  isOnStartStageScreen: A
} = (0, H.ZP)();
  (0, H.MV)(n);
  let M = (0, o.e7)([R.Z], () => R.Z.getToastsEnabled(n.id)),
b = (0, q.Z)(n) ? null != x ? '84px' : '124px' : null != x ? '0px' : '48px';
  return t = A ? (0, i.jsx)(Y.Z, {
channel: n,
onContinueClick: () => {
  (0, H.Ku)(!1), !E && (0, k.TM)(n);
}
  }) : E ? (0, i.jsx)(W.Z, {
channel: n,
onScroll: e => {
  let {
    scrollTop: t
  } = e.target;
  (0, r.debounce)(() => Z(t), 1000, {
    leading: !0
  })();
}
  }) : (0, i.jsx)(V.Z, {
participants: I,
channel: n,
hasConnectPermission: g
  }), (0, i.jsx)(S.Z, {
style: {
  height: 'calc(100% - '.concat(b, ')'),
  paddingTop: b
},
disableGradients: 0 === v && S.e.TOP,
renderBottomLeft: () => (0, i.jsx)(el, {
  channel: n
}),
renderBottomCenter: () => E ? (0, i.jsx)(z.Z, {
  channel: n,
  isOnStartStageScreen: A
}) : null,
renderBottomRight: () => E ? (0, i.jsx)(ea, {
  channel: n,
  appContext: _,
  popoutOpen: h,
  popoutWindow: d,
  popoutWindowAlwaysOnTop: u,
  selectedParticipant: x
}) : null,
renderHeader: () => (0, i.jsx)(F.Z, {
  inPopout: _ === X.IlC.POPOUT,
  toggleRequestToSpeakSidebar: l,
  showRequestToSpeakSidebar: c,
  channel: n
}),
renderChatToasts: () => !M || m || T ? null : (0, i.jsx)(C.ZP, {
  children: (0, i.jsx)(N.Z, {
    className: s()($.chatToasts, {
      [$.rtsSidebarOpen]: c
    }),
    channelId: n.id
  })
}),
onActive: () => {},
onPreventIdle: () => {},
onAllowIdle: () => {},
onForceIdle: () => {},
screenMessage: T ? {
  mainText: J.Z.Messages.POPOUT_PLAYER_OPENED
} : null,
idle: !1,
children: !T && t
  });
}

function er(e) {
  let {
channel: t
  } = e, [l, r] = a.useState(!1), u = a.useCallback(() => {
r(!l);
  }, [
l,
r
  ]), {
popoutWindow: E,
popoutWindowAlwaysOnTop: I
  } = (0, o.cj)([x.Z], () => ({
popoutWindow: x.Z.getWindow(X.KJ3.CHANNEL_CALL_POPOUT),
popoutWindowAlwaysOnTop: x.Z.getIsAlwaysOnTop(X.KJ3.CHANNEL_CALL_POPOUT)
  })), T = null != E && !E.closed, {
analyticsLocations: v
  } = (0, _.ZP)(m.Z.STAGE_CHANNEL_CALL), N = (0, p.bp)(), S = (0, o.e7)([f.Z], () => f.Z.getChatOpen(t.id), [t.id]), Z = (0, o.e7)([j.Z], () => j.Z.getGuild(t.guild_id), [t.guild_id]);
  a.useEffect(() => {
null == c.K.get(ee) && ((0, d.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('37194').then(n.bind(n, 947422));
  return t => (0, i.jsx)(e, {
    ...t
  });
}), c.K.set(ee, Date.now()));
  }, []);
  let {
width: A = 0,
ref: M
  } = (0, h.Z)();
  return (0, i.jsx)(_.Gt, {
value: v,
children: (0, i.jsxs)(C.B2, {
  children: [
    (0, i.jsxs)('div', {
      className: $.container,
      ref: M,
      children: [
        (0, i.jsx)('div', {
          className: s()($.callContainer, (0, y.Q)(X.BRd.DARK), {
            [$.sidebarVisible]: l,
            [$.sidebarOrChatVisible]: l || S
          }),
          children: (0, i.jsx)(es, {
            channel: t,
            toggleRequestToSpeakSidebar: u,
            showRequestToSpeakSidebar: l,
            popoutWindow: E,
            popoutWindowAlwaysOnTop: I,
            popoutOpen: T,
            chatOpen: S
          })
        }),
        l ? (0, i.jsx)(G.Z, {
          channel: t,
          toggleRequestToSpeakSidebar: u,
          chatOpen: S
        }) : null,
        (0, i.jsx)('div', {
          className: $.channelChatWrapper,
          children: S && (!T || T && N === X.IlC.POPOUT) && (0, i.jsx)(g.Z, {
            channel: t,
            guild: Z,
            maxWidth: A - 550
          })
        })
      ]
    }),
    (0, i.jsx)(C.H_, {})
  ]
})
  });
}