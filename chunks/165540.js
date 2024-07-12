n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(149765),
  o = n(442837),
  c = n(481060),
  d = n(367907),
  u = n(499254),
  h = n(424602),
  p = n(541099),
  m = n(827498),
  _ = n(663924),
  f = n(998698),
  E = n(747127),
  C = n(665906),
  g = n(271383),
  I = n(496675),
  x = n(594174),
  T = n(583027),
  v = n(981631),
  N = n(314734),
  S = n(689938),
  Z = n(979030);
let A = a.forwardRef(function(e, t) {
  let {
type: n
  } = e, [l, r] = a.useState(!1), h = (0, o.e7)([p.Z], () => p.Z.shouldShowPopup()), _ = a.useCallback(() => {
(0, d.yw)(v.rMx.CHAT_INPUT_COMPONENT_VIEWED, {
  type: v.K98.APPS_BUTTON
}), h ? u.y(m.ti.DISMISSED) : u._(m._b.TEXT, n);
  }, [
h,
n
  ]), f = () => {
r(!0);
  }, C = () => {
r(!1);
  }, g = a.useRef(), I = (0, E.Z)(t, g);
  return a.useEffect(() => T.HJ.subscribe(e => {
let {
  channelTextAreaHeight: t
} = e;
return t;
  }, e => {
let t = g.current;
null != t && (t.style.transform = null != e ? 'translateY(calc(100% - '.concat(e, 'px)') : '');
  }), []), (0, i.jsx)(c.Tooltip, {
text: S.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
children: e => (0, i.jsx)('div', {
  ...e,
  className: s()(Z.buttonContainer, N.t4),
  ref: I,
  children: (0, i.jsx)(c.Button, {
    look: c.Button.Looks.BLANK,
    size: c.Button.Sizes.NONE,
    tabIndex: 0,
    className: Z.button,
    onClick: _,
    onMouseEnter: f,
    onMouseOver: f,
    onMouseLeave: C,
    onFocus: f,
    onBlur: C,
    'aria-label': S.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4,
        left: -4,
        right: -4
      }
    },
    innerClassName: Z.buttonContents,
    children: (0, i.jsx)(c.AppsIcon, {
      className: s()(l ? Z.iconHovered : Z.iconUnhovered)
    })
  })
})
  });
});
t.Z = a.memo(a.forwardRef(function(e) {
  let {
channel: t,
type: n
  } = e, l = a.useRef(null), s = function(e, t) {
let n = e.getGuildId(),
  i = (0, o.e7)([
    g.ZP,
    x.default
  ], () => {
    var e, t;
    let i = x.default.getCurrentUser();
    return null !== (t = null != n && null != i ? null === (e = g.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
  }),
  {
    messagesDisabled: a
  } = (0, o.cj)([I.Z], () => {
    var n, a;
    let l = e.isPrivate(),
      s = I.Z.computePermissions(e),
      o = r.e$(s, v.Plq.CREATE_PUBLIC_THREADS) || r.e$(s, v.Plq.CREATE_PRIVATE_THREADS),
      c = (!(null === (n = t.permissions) || void 0 === n ? void 0 : n.requireCreateTherads) || o) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || r.e$(s, v.Plq.SEND_MESSAGES)),
      d = (0, C.xl)(e);
    return {
      messagesDisabled: i || !l && !c || d
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
  } = (0, o.cj)([f.Z], () => {
var e;
return {
  activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? f.Z.getActiveCommand(t.id) : null
};
  }), d = h.T.useExperiment({
location: 'chat_input'
  }, {
autoTrackExposure: !0
  }).enabled, u = (0, o.e7)([p.Z], () => {
let e = p.Z.activeViewType();
return null != e && e === n && p.Z.shouldShowPopup();
  }, [n]);
  return d && null == c && !s ? (0, i.jsxs)('div', {
className: Z.channelAppLauncher,
children: [
  (0, i.jsx)(A, {
    type: n,
    ref: l
  }),
  u ? (0, i.jsx)(_.Z, {
    positionTargetRef: l,
    channel: t
  }) : null
]
  }) : null;
}));