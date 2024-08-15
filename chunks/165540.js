var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(149765),
  o = n(442837),
  c = n(704215),
  u = n(749280),
  d = n(481060),
  h = n(367907),
  m = n(499254),
  p = n(424602),
  _ = n(541099),
  f = n(827498),
  E = n(663924),
  g = n(998698),
  C = n(605236),
  I = n(665906),
  x = n(271383),
  T = n(496675),
  N = n(594174),
  v = n(291407),
  S = n(981631),
  Z = n(314734),
  A = n(921944),
  M = n(689938),
  b = n(664179);
let R = a.forwardRef(function(e, t) {
  let {
type: n,
animateRef: s
  } = e, r = (0, o.e7)([_.Z], () => _.Z.shouldShowPopup() && _.Z.activeViewType() === n), {
Component: p,
events: E,
play: g
  } = (0, u.w)();
  a.useImperativeHandle(s, () => ({
animate: () => {
  E.onMouseEnter();
}
  }), [E]);
  let I = a.useCallback(() => {
(0, h.yw)(S.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), r ? m.y(f.ti.DISMISSED) : ((0, C.EW)(c.z.DESKTOP_APP_LAUNCHER_ONBOARDING, {
  dismissAction: A.L.TAKE_ACTION
}), m._(f._b.TEXT, n)), g();
  }, [
r,
n,
g
  ]);
  return (0, i.jsx)('div', {
className: l()(b.buttonContainer, Z.t4),
ref: t,
children: (0, i.jsx)(d.Button, {
  look: d.Button.Looks.BLANK,
  size: d.Button.Sizes.NONE,
  tabIndex: 0,
  className: l()(b.button, {
    [b.buttonActive]: r
  }),
  onClick: I,
  'aria-label': M.Z.Messages.APP_LAUNCHER_ENTRYPOINT_BUTTON_ARIA_LABEL,
  focusProps: {
    offset: {
      top: 4,
      bottom: 4,
      left: -4,
      right: -4
    }
  },
  innerClassName: b.buttonContents,
  ...E,
  children: (0, i.jsx)(p, {
    color: 'currentColor'
  })
})
  });
});
t.Z = a.memo(a.forwardRef(function(e) {
  let {
channel: t,
type: n,
animateRef: s
  } = e, l = a.useRef(null), c = function(e, t) {
let n = e.getGuildId(),
  i = (0, o.e7)([
    x.ZP,
    N.default
  ], () => {
    var e, t;
    let i = N.default.getCurrentUser();
    return null !== (t = null != n && null != i ? null === (e = x.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
  }),
  {
    messagesDisabled: a
  } = (0, o.cj)([T.Z], () => {
    var n, a;
    let s = e.isPrivate(),
      l = T.Z.computePermissions(e),
      o = r.e$(l, S.Plq.CREATE_PUBLIC_THREADS) || r.e$(l, S.Plq.CREATE_PRIVATE_THREADS),
      c = (!(null === (n = t.permissions) || void 0 === n ? void 0 : n.requireCreateTherads) || o) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || r.e$(l, S.Plq.SEND_MESSAGES)),
      u = (0, I.xl)(e);
    return {
      messagesDisabled: i || !s && !c || u
    };
  }, [
    e,
    t.permissions.requireCreateTherads,
    t.permissions.requireSendMessages,
    i
  ]);
return a;
  }(t, n), {
activeCommand: u
  } = (0, o.cj)([g.Z], () => {
var e;
return {
  activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? g.Z.getActiveCommand(t.id) : null
};
  }), d = p.T.useExperiment({
location: 'chat_input'
  }, {
autoTrackExposure: !0
  }).enabled, h = (0, o.e7)([_.Z], () => {
let e = _.Z.activeViewType();
return null != e && e === n && _.Z.shouldShowPopup();
  }, [n]);
  return d && null == u && !c ? (0, i.jsxs)('div', {
className: b.channelAppLauncher,
children: [
  (0, i.jsx)(v.Z, {
    channel: t,
    animationContainerClassName: b.entrypointAnimation,
    glowClassName: b.animationGlow,
    trinketsClassName: b.animationTrinkets,
    children: (0, i.jsx)(R, {
      type: n,
      ref: l,
      animateRef: s
    })
  }),
  h ? (0, i.jsx)(E.Z, {
    positionTargetRef: l,
    channel: t
  }) : null
]
  }) : null;
}));