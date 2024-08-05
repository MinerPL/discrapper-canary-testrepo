n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(149765),
  o = n(442837),
  c = n(704215),
  u = n(481060),
  d = n(367907),
  h = n(499254),
  p = n(424602),
  m = n(541099),
  _ = n(827498),
  f = n(663924),
  E = n(998698),
  g = n(605236),
  C = n(665906),
  I = n(271383),
  x = n(496675),
  T = n(594174),
  N = n(291407),
  v = n(981631),
  S = n(314734),
  Z = n(921944),
  A = n(689938),
  M = n(979030);
let b = a.forwardRef(function(e, t) {
  let {
type: n
  } = e, [s, r] = a.useState(!1), p = (0, o.e7)([m.Z], () => m.Z.shouldShowPopup()), f = a.useCallback(() => {
(0, d.yw)(v.rMx.APP_LAUNCHER_ENTRYPOINT_BUTTON_CLICKED), p ? h.y(_.ti.DISMISSED) : ((0, g.EW)(c.z.DESKTOP_APP_LAUNCHER_ONBOARDING, {
  dismissAction: Z.L.TAKE_ACTION
}), h._(_._b.TEXT, n));
  }, [
p,
n
  ]), E = () => {
r(!0);
  }, C = () => {
r(!1);
  };
  return (0, i.jsx)('div', {
className: l()(M.buttonContainer, S.t4),
ref: t,
children: (0, i.jsx)(u.Button, {
  look: u.Button.Looks.BLANK,
  size: u.Button.Sizes.NONE,
  tabIndex: 0,
  className: M.button,
  onClick: f,
  onMouseEnter: E,
  onMouseOver: E,
  onMouseLeave: C,
  onFocus: E,
  onBlur: C,
  'aria-label': A.Z.Messages.APP_LAUNCHER_ENTRYPOINT_BUTTON_ARIA_LABEL,
  focusProps: {
    offset: {
      top: 4,
      bottom: 4,
      left: -4,
      right: -4
    }
  },
  innerClassName: M.buttonContents,
  children: (0, i.jsx)(u.AppsIcon, {
    className: l()(s || p ? M.iconActive : M.iconInactive)
  })
})
  });
});
t.Z = a.memo(a.forwardRef(function(e) {
  let {
channel: t,
type: n
  } = e, s = a.useRef(null), l = function(e, t) {
let n = e.getGuildId(),
  i = (0, o.e7)([
    I.ZP,
    T.default
  ], () => {
    var e, t;
    let i = T.default.getCurrentUser();
    return null !== (t = null != n && null != i ? null === (e = I.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
  }),
  {
    messagesDisabled: a
  } = (0, o.cj)([x.Z], () => {
    var n, a;
    let s = e.isPrivate(),
      l = x.Z.computePermissions(e),
      o = r.e$(l, v.Plq.CREATE_PUBLIC_THREADS) || r.e$(l, v.Plq.CREATE_PRIVATE_THREADS),
      c = (!(null === (n = t.permissions) || void 0 === n ? void 0 : n.requireCreateTherads) || o) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || r.e$(l, v.Plq.SEND_MESSAGES)),
      u = (0, C.xl)(e);
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
activeCommand: c
  } = (0, o.cj)([E.Z], () => {
var e;
return {
  activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? E.Z.getActiveCommand(t.id) : null
};
  }), u = p.T.useExperiment({
location: 'chat_input'
  }, {
autoTrackExposure: !0
  }).enabled, d = (0, o.e7)([m.Z], () => {
let e = m.Z.activeViewType();
return null != e && e === n && m.Z.shouldShowPopup();
  }, [n]);
  return u && null == c && !l ? (0, i.jsxs)('div', {
className: M.channelAppLauncher,
children: [
  (0, i.jsx)(N.Z, {
    channel: t,
    animationContainerClassName: M.entrypointAnimation,
    glowClassName: M.animationGlow,
    trinketsClassName: M.animationTrinkets,
    children: (0, i.jsx)(b, {
      type: n,
      ref: s
    })
  }),
  d ? (0, i.jsx)(f.Z, {
    positionTargetRef: s,
    channel: t
  }) : null
]
  }) : null;
}));