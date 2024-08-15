n.d(t, {
  Z: function() {
return er;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(392711),
  o = n(442837),
  c = n(433517),
  u = n(481060),
  d = n(570140),
  h = n(393238),
  m = n(40851),
  p = n(100527),
  _ = n(906732),
  f = n(358221),
  E = n(414910),
  g = n(909820),
  C = n(493010),
  I = n(788983),
  x = n(928518),
  T = n(703656),
  N = n(493754),
  v = n(880831),
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
  $ = n(394738);
let ee = 'HasBeenInStageChannel',
  et = (e, t) => () => {
let n = e.getGuildId();
null != n && null != t && (0, T.XU)(n, t), I.hP(e);
  },
  en = () => {
d.Z.wait(() => I.xv(X.KJ3.CHANNEL_CALL_POPOUT));
  },
  ei = e => {
I.hY(X.KJ3.CHANNEL_CALL_POPOUT, e);
  };

function ea(e) {
  let {
channel: t,
appContext: n,
popoutOpen: s,
popoutWindow: l,
popoutWindowAlwaysOnTop: r,
selectedParticipant: c
  } = e, u = t.getGuildId(), d = (0, o.e7)([P.Z], () => P.Z.getMostRecentSelectedTextChannelId(u), [u]), h = b.default.getId(), m = !(0, o.e7)([f.Z], () => f.Z.isFullscreenInContext(n)) && (!O.isPlatformEmbedded || O.isPlatformEmbedded && D.ZP.supportsFeature(X.eRX.POPOUT_WINDOWS)), p = null != c && c.type !== Q.fO.ACTIVITY && c.user.id !== h, _ = a.useMemo(() => {
var e;
return null !== (e = null == l ? void 0 : l.window) && void 0 !== e ? e : window;
  }, [l]), g = (0, K.Z)({
channel: t,
appContext: n,
popoutOpen: s,
popoutWindow: l,
currentWindow: _
  }), C = n === X.IlC.POPOUT && O.isPlatformEmbedded && D.ZP.supportsFeature(X.eRX.POPOUT_WINDOWS);
  return (0, i.jsxs)(i.Fragment, {
children: [
  p ? (0, i.jsx)(M.Z, {
    context: (0, E.Z)(c.type),
    userId: c.user.id,
    currentWindow: _,
    sliderClassName: $.volumeSlider
  }) : null,
  C ? (0, i.jsx)(A.Z, {
    className: $.rightTrayIcon,
    popoutWindowAlwaysOnTop: r,
    onToggleStayOnTop: ei
  }) : null,
  m ? (0, i.jsx)(Z.Z, {
    className: $.rightTrayIcon,
    popoutOpen: s,
    onOpenPopout: et(t, d),
    onClosePopout: en
  }) : null,
  g
]
  });
}

function es(e) {
  let {
channel: t
  } = e, n = (0, m.bp)(), a = (0, o.e7)([L.Z], () => L.Z.can(X.Plq.CREATE_INSTANT_INVITE, t)), s = (0, o.e7)([j.Z], () => j.Z.getGuild(t.guild_id)), l = (0, o.e7)([B.Z], () => B.Z.getStageInstanceByChannel(t.id)), r = a || (null == l ? void 0 : l.invite_code) != null;
  return null != s && r ? (0, i.jsx)(N.Z, {
channel: t,
appContext: n,
className: $.__invalid_leftTrayIcon,
analyticsLocation: X.ZY5.GUILD_CHANNEL
  }) : null;
}

function el(e) {
  let t, {
  channel: n,
  toggleRequestToSpeakSidebar: s,
  showRequestToSpeakSidebar: c,
  popoutWindow: u,
  popoutWindowAlwaysOnTop: d,
  popoutOpen: h,
  chatOpen: p
} = e,
_ = (0, m.bp)(),
E = (0, o.e7)([P.Z], () => P.Z.getVoiceChannelId() === n.id, [n.id]),
C = (0, o.e7)([L.Z], () => L.Z.can(X.Plq.CONNECT, n)),
I = (0, U.w8)(n.id, w.pV.SPEAKER),
x = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)),
T = h && _ !== X.IlC.POPOUT,
[N, Z] = a.useState(0),
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
hasConnectPermission: C
  }), (0, i.jsx)(S.Z, {
style: {
  height: 'calc(100% - '.concat(b, ')'),
  paddingTop: b
},
disableGradients: 0 === N && S.e.TOP,
renderBottomLeft: () => (0, i.jsx)(es, {
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
  popoutWindow: u,
  popoutWindowAlwaysOnTop: d,
  selectedParticipant: x
}) : null,
renderHeader: () => (0, i.jsx)(F.Z, {
  inPopout: _ === X.IlC.POPOUT,
  toggleRequestToSpeakSidebar: s,
  showRequestToSpeakSidebar: c,
  channel: n
}),
renderChatToasts: () => !M || p || T ? null : (0, i.jsx)(g.ZP, {
  children: (0, i.jsx)(v.Z, {
    className: l()($.chatToasts, {
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
  } = e, [s, r] = a.useState(!1), d = a.useCallback(() => {
r(!s);
  }, [
s,
r
  ]), {
popoutWindow: E,
popoutWindowAlwaysOnTop: I
  } = (0, o.cj)([x.Z], () => ({
popoutWindow: x.Z.getWindow(X.KJ3.CHANNEL_CALL_POPOUT),
popoutWindowAlwaysOnTop: x.Z.getIsAlwaysOnTop(X.KJ3.CHANNEL_CALL_POPOUT)
  })), T = null != E && !E.closed, {
analyticsLocations: N
  } = (0, _.ZP)(p.Z.STAGE_CHANNEL_CALL), v = (0, m.bp)(), S = (0, o.e7)([f.Z], () => f.Z.getChatOpen(t.id), [t.id]), Z = (0, o.e7)([j.Z], () => j.Z.getGuild(t.guild_id), [t.guild_id]);
  a.useEffect(() => {
null == c.K.get(ee) && ((0, u.openModalLazy)(async () => {
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
value: N,
children: (0, i.jsxs)(g.B2, {
  children: [
    (0, i.jsxs)('div', {
      className: $.container,
      ref: M,
      children: [
        (0, i.jsx)('div', {
          className: l()($.callContainer, (0, y.Q)(X.BRd.DARK), {
            [$.sidebarVisible]: s,
            [$.sidebarOrChatVisible]: s || S
          }),
          children: (0, i.jsx)(el, {
            channel: t,
            toggleRequestToSpeakSidebar: d,
            showRequestToSpeakSidebar: s,
            popoutWindow: E,
            popoutWindowAlwaysOnTop: I,
            popoutOpen: T,
            chatOpen: S
          })
        }),
        s ? (0, i.jsx)(G.Z, {
          channel: t,
          toggleRequestToSpeakSidebar: d,
          chatOpen: S
        }) : null,
        (0, i.jsx)('div', {
          className: $.channelChatWrapper,
          children: S && (!T || T && v === X.IlC.POPOUT) && (0, i.jsx)(C.Z, {
            channel: t,
            guild: Z,
            maxWidth: A - 550
          })
        })
      ]
    }),
    (0, i.jsx)(g.H_, {})
  ]
})
  });
}