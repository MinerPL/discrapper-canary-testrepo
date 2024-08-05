n(47120);
var i, a = n(735250),
  s = n(470079),
  l = n(120356),
  r = n.n(l),
  o = n(512722),
  c = n.n(o),
  u = n(613828),
  d = n(731965),
  h = n(442837),
  p = n(481060),
  m = n(490173),
  _ = n(40851),
  f = n(607070),
  E = n(899663),
  g = n(317381),
  C = n(496616),
  I = n(100527),
  x = n(906732),
  T = n(168551),
  N = n(597952),
  v = n(628123),
  S = n(151851),
  Z = n(587061),
  A = n(392358),
  M = n(892254),
  b = n(706454),
  R = n(210887),
  j = n(740492),
  L = n(451478),
  P = n(153850),
  O = n(806519),
  y = n(358085),
  D = n(792125),
  k = n(998502),
  U = n(473159),
  w = n(928518),
  B = n(981631),
  H = n(689938),
  G = n(536792);

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class F extends(i = s.Component) {
  componentDidMount() {
let {
  guestWindow: e
} = this.props, t = e.document;
null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, U.O)(e), e.addEventListener('blur', this.handleBlur), t.addEventListener('contextmenu', this.handleContextMenu, !0), e.addEventListener('beforeunload', this.warnPopoutClose);
  }
  componentDidUpdate(e) {
let {
  title: t,
  fontScale: n,
  locale: i,
  clientThemesCSS: a
} = this.props;
e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== a && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
  }
  componentWillUnmount() {
let {
  guestWindow: e
} = this.props, t = e.document;
e.removeEventListener('blur', this.handleBlur), t.removeEventListener('contextmenu', this.handleContextMenu, !0), (0, d.j)(() => p.useModalsStore.setState(e => ({
  ...e,
  [p.POPOUT_MODAL_CONTEXT]: []
}))), e.removeEventListener('beforeunload', this.warnPopoutClose);
  }
  updateSaturationFactor() {
let {
  saturation: e,
  guestWindow: t
} = this.props, n = t.document.documentElement;
c()(null != n, 'Window document element was null'), n.style.setProperty('--saturation-factor', e.toString());
  }
  updateLocale() {
let {
  locale: e,
  guestWindow: t
} = this.props, n = t.document.documentElement;
c()(null != n, 'Window document element was null'), n.lang = e;
  }
  updateTitle() {
let {
  title: e,
  guestWindow: t
} = this.props, n = t.document.querySelector('title');
null != n && (n.innerText = e);
  }
  updateFontScale() {
let {
  fontScale: e,
  guestWindow: t
} = this.props, n = t.document.documentElement;
c()(null != n, 'Window document element was null'), n.style.fontSize = ''.concat(e, '%');
  }
  updateClientTheme() {
let {
  clientThemesCSS: e,
  guestWindow: t
} = this.props, n = t.document, i = (0, n.head);
c()(null != i, 'Window document '.concat('head', ' was null'));
let a = i.querySelector('style['.concat(T.PQ, ']'));
if (null != a) {
  a.textContent = e;
  return;
}
let s = n.createElement('style');
s.setAttribute(T.PQ, 'true'), s.textContent = e, i.appendChild(s);
  }
  updateForcedColors() {
let {
  useForcedColors: e,
  systemForcedColors: t,
  guestWindow: n
} = this.props;
n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
  }
  render() {
let {
  theme: e,
  forcedColors: t,
  focused: n,
  appFocused: i,
  children: s,
  windowKey: l,
  mouseModeEnabled: o,
  keyboardModeEnabled: c,
  reducedMotionEnabled: d,
  fontScaleClass: h,
  saturation: f,
  withTitleBar: g,
  guestWindow: C,
  clientThemesClassName: I,
  contentClassName: x
} = this.props, T = (0, y.getPlatform)(), Z = r()(h, {
  'mouse-mode': o,
  'reduce-motion': d,
  'full-motion': !d,
  'keyboard-mode': c,
  'app-focused': n || i,
  'low-saturation': f <= 0.4
});
return (0, a.jsx)(u.VK, {
  children: (0, a.jsx)(M.Z, {
    children: (0, a.jsx)(p.ThemeContextProvider, {
      theme: e,
      children: (0, a.jsx)(p.RedesignIconContextProvider, {
        children: (0, a.jsx)('div', {
          'data-popout-root': !0,
          ref: this.rootRef,
          className: r()((0, D.Q)(e), (0, N.Z)(), Z, I),
          children: (0, a.jsx)(p.FocusRingScope, {
            containerRef: this.rootRef,
            children: (0, a.jsx)(E.Z, {
              children: (0, a.jsxs)(v.Z, {
                children: [
                  (0, a.jsx)(O.Co, {}),
                  (0, a.jsx)(_.Wu, {
                    appContext: B.IlC.POPOUT,
                    renderWindow: C,
                    children: (0, a.jsxs)(P.yP, {
                      children: [
                        (0, a.jsxs)('div', {
                          className: G.popout,
                          children: [
                            g && null != T ? (0, a.jsx)(S.Z, {
                              focused: n,
                              type: T,
                              windowKey: l,
                              macOSFrame: !0
                            }) : null,
                            (0, a.jsx)('div', {
                              className: r()(G.content, x),
                              children: s
                            })
                          ]
                        }),
                        (0, a.jsx)(p.Modals, {}),
                        (0, a.jsx)(m.Z, {}),
                        (0, a.jsx)(P.Un, {})
                      ]
                    })
                  })
                ]
              })
            })
          })
        })
      })
    })
  }, t)
});
  }
  constructor(...e) {
super(...e), V(this, 'rootRef', s.createRef()), V(this, '_cleanupWindowActionCreators', void 0), V(this, 'warnPopoutClose', e => {
  if (this.props.connectedToEmbeddedActivity && !j.ZP.disableEmbeddedActivityPopOutAlert) {
    if (e.returnValue = H.Z.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE, !!y.isPlatformEmbedded)
      (0, C.Z)(() => {
        w.Z.unmountWindow(this.props.windowKey), y.isPlatformEmbedded && k.ZP.close(this.props.windowKey);
      });
  }
}), V(this, 'handleBlur', () => {
  var e, t;
  null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
}), V(this, 'handleContextMenu', e => {
  e.preventDefault();
});
  }
}
V(F, 'defaultProps', {
  withTitleBar: !0
});
let W = s.forwardRef(function(e, t) {
  let {
guestWindow: n,
focused: i
  } = (0, h.cj)([w.Z], () => ({
guestWindow: w.Z.getWindow(e.windowKey),
focused: w.Z.getWindowFocused(e.windowKey)
  }));
  c()(null != n, 'Missing guestWindow reference');
  let s = (0, h.e7)([L.Z], () => L.Z.isFocused()),
{
  locale: l,
  theme: r
} = (0, h.cj)([
  R.Z,
  b.default
], () => ({
  locale: b.default.locale,
  theme: R.Z.theme
})),
o = (0, h.e7)([f.Z], () => f.Z.useForcedColors ? 'yes' : 'no'),
{
  fontScale: u,
  keyboardModeEnabled: d,
  reducedMotionEnabled: m,
  fontScaleClass: _,
  saturation: E,
  systemForcedColors: C,
  useForcedColors: N
} = (0, h.cj)([f.Z], () => ({
  fontScale: f.Z.fontScale,
  keyboardModeEnabled: f.Z.keyboardModeEnabled,
  reducedMotionEnabled: f.Z.useReducedMotion,
  fontScaleClass: f.Z.fontScaleClass,
  saturation: f.Z.saturation,
  systemForcedColors: f.Z.systemForcedColors,
  useForcedColors: f.Z.useForcedColors
})),
v = (0, h.e7)([g.ZP], () => null != e.channelId && null !== g.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
  (0, Z.Z)(n, !1);
  let S = (0, A.Z)(n, i),
{
  analyticsLocations: M
} = (0, x.ZP)(I.Z.POPOUT_WINDOW),
{
  clientThemesClassName: j,
  clientThemesCSS: P
} = (0, T.ZP)();
  return null == n ? null : (0, a.jsx)(p.DnDProvider, {
children: (0, a.jsx)(x.Gt, {
  value: M,
  children: (0, a.jsx)(F, {
    ref: t,
    ...e,
    guestWindow: n,
    focused: i,
    appFocused: s,
    locale: l,
    theme: r,
    forcedColors: o,
    useForcedColors: N,
    systemForcedColors: C,
    fontScale: u,
    keyboardModeEnabled: d,
    mouseModeEnabled: S,
    reducedMotionEnabled: m,
    connectedToEmbeddedActivity: v,
    fontScaleClass: _,
    saturation: E,
    clientThemesClassName: j,
    clientThemesCSS: P
  })
})
  });
});
t.Z = W;