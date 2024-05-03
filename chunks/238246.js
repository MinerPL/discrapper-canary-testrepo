"use strict";
n.r(t), n("47120");
var a, l = n("735250"),
  s = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("512722"),
  u = n.n(o),
  d = n("613828"),
  c = n("442837"),
  f = n("481060"),
  h = n("490173"),
  m = n("40851"),
  p = n("607070"),
  E = n("545006"),
  C = n("317381"),
  g = n("496616"),
  S = n("100527"),
  _ = n("906732"),
  T = n("168551"),
  I = n("597952"),
  A = n("628123"),
  N = n("151851"),
  v = n("587061"),
  x = n("392358"),
  M = n("892254"),
  R = n("706454"),
  L = n("210887"),
  y = n("740492"),
  O = n("451478"),
  j = n("153850"),
  P = n("806519"),
  D = n("358085"),
  b = n("792125"),
  U = n("998502"),
  F = n("473159"),
  w = n("928518"),
  k = n("981631"),
  H = n("689938"),
  B = n("892876");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class V extends(a = s.Component) {
  componentDidMount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, F.setupWindow)(e), e.addEventListener("blur", this.handleBlur), t.addEventListener("contextmenu", this.handleContextMenu, !0), e.addEventListener("beforeunload", this.warnPopoutClose)
  }
  componentDidUpdate(e) {
    let {
      title: t,
      fontScale: n,
      locale: a,
      clientThemesCSS: l
    } = this.props;
    e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== a && this.updateLocale(), e.clientThemesCSS !== l && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors()
  }
  componentWillUnmount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    e.removeEventListener("blur", this.handleBlur), t.removeEventListener("contextmenu", this.handleContextMenu, !0), f.useModalsStore.setState(e => ({
      ...e,
      [f.POPOUT_MODAL_CONTEXT]: []
    })), e.removeEventListener("beforeunload", this.warnPopoutClose)
  }
  updateSaturationFactor() {
    let {
      saturation: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    u()(null != n, "Window document element was null"), n.style.setProperty("--saturation-factor", e.toString())
  }
  updateLocale() {
    let {
      locale: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    u()(null != n, "Window document element was null"), n.lang = e
  }
  updateTitle() {
    let {
      title: e,
      guestWindow: t
    } = this.props, n = t.document.querySelector("title");
    null != n && (n.innerText = e)
  }
  updateFontScale() {
    let {
      fontScale: e,
      guestWindow: t
    } = this.props, n = t.document.documentElement;
    u()(null != n, "Window document element was null"), n.style.fontSize = "".concat(e, "%")
  }
  updateClientTheme() {
    let {
      clientThemesCSS: e,
      guestWindow: t
    } = this.props, n = t.document, a = (0, n.head);
    u()(null != a, "Window document ".concat("head", " was null"));
    let l = a.querySelector("style[".concat(T.CLIENT_THEMES_DATA_ATTRIBUTE, "]"));
    if (null != l) {
      l.textContent = e;
      return
    }
    let s = n.createElement("style");
    s.setAttribute(T.CLIENT_THEMES_DATA_ATTRIBUTE, "true"), s.textContent = e, a.appendChild(s)
  }
  updateForcedColors() {
    let {
      useForcedColors: e,
      systemForcedColors: t,
      guestWindow: n
    } = this.props;
    n.document.documentElement.classList.toggle("disable-forced-colors", !e && "active" === t)
  }
  render() {
    let {
      theme: e,
      forcedColors: t,
      focused: n,
      appFocused: a,
      children: s,
      windowKey: i,
      mouseModeEnabled: o,
      keyboardModeEnabled: u,
      reducedMotionEnabled: c,
      fontScaleClass: p,
      saturation: C,
      withTitleBar: g,
      guestWindow: S,
      clientThemesClassName: _,
      contentClassName: T
    } = this.props, v = (0, D.getPlatform)(), x = r()(p, {
      "mouse-mode": o,
      "reduce-motion": c,
      "full-motion": !c,
      "keyboard-mode": u,
      "app-focused": n || a,
      "low-saturation": C <= .4
    });
    return (0, l.jsx)(d.BrowserRouter, {
      children: (0, l.jsx)(M.default, {
        children: (0, l.jsx)(f.ThemeContextProvider, {
          theme: e,
          children: (0, l.jsx)(f.RedesignIconContextProvider, {
            children: (0, l.jsx)("div", {
              "data-popout-root": !0,
              ref: this.rootRef,
              className: r()((0, b.getThemeClass)(e), (0, I.default)(), x, _),
              children: (0, l.jsx)(f.FocusRingScope, {
                containerRef: this.rootRef,
                children: (0, l.jsx)(E.default, {
                  children: (0, l.jsxs)(A.default, {
                    children: [(0, l.jsx)(P.MaskLibrary, {}), (0, l.jsx)(m.AppWindowContextProvider, {
                      appContext: k.AppContext.POPOUT,
                      renderWindow: S,
                      children: (0, l.jsxs)(j.AppLayerProvider, {
                        children: [(0, l.jsxs)("div", {
                          className: B.popout,
                          children: [g && null != v ? (0, l.jsx)(N.default, {
                            focused: n,
                            type: v,
                            windowKey: i,
                            macOSFrame: !0
                          }) : null, (0, l.jsx)("div", {
                            className: r()(B.content, T),
                            children: s
                          })]
                        }), (0, l.jsx)(f.Modals, {}), (0, l.jsx)(h.default, {}), (0, l.jsx)(j.AppLayerContainer, {})]
                      })
                    })]
                  })
                })
              })
            })
          })
        })
      }, t)
    })
  }
  constructor(...e) {
    super(...e), G(this, "rootRef", s.createRef()), G(this, "_cleanupWindowActionCreators", void 0), G(this, "warnPopoutClose", e => {
      this.props.connectedToEmbeddedActivity && !y.default.disableEmbeddedActivityPopOutAlert && (e.returnValue = H.default.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE, D.isPlatformEmbedded && (0, g.default)(() => {
        w.default.unmountWindow(this.props.windowKey), D.isPlatformEmbedded && U.default.close(this.props.windowKey)
      }))
    }), G(this, "handleBlur", () => {
      var e, t;
      null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t)
    }), G(this, "handleContextMenu", e => {
      e.preventDefault()
    })
  }
}
G(V, "defaultProps", {
  withTitleBar: !0
});
let W = s.forwardRef(function(e, t) {
  let {
    guestWindow: n,
    focused: a
  } = (0, c.useStateFromStoresObject)([w.default], () => ({
    guestWindow: w.default.getWindow(e.windowKey),
    focused: w.default.getWindowFocused(e.windowKey)
  }));
  u()(null != n, "Missing guestWindow reference");
  let s = (0, c.useStateFromStores)([O.default], () => O.default.isFocused()),
    {
      locale: i,
      theme: r
    } = (0, c.useStateFromStoresObject)([L.default, R.default], () => ({
      locale: R.default.locale,
      theme: L.default.theme
    })),
    o = (0, c.useStateFromStores)([p.default], () => p.default.useForcedColors ? "yes" : "no"),
    {
      fontScale: d,
      keyboardModeEnabled: h,
      reducedMotionEnabled: m,
      fontScaleClass: E,
      saturation: g,
      systemForcedColors: I,
      useForcedColors: A
    } = (0, c.useStateFromStoresObject)([p.default], () => ({
      fontScale: p.default.fontScale,
      keyboardModeEnabled: p.default.keyboardModeEnabled,
      reducedMotionEnabled: p.default.useReducedMotion,
      fontScaleClass: p.default.fontScaleClass,
      saturation: p.default.saturation,
      systemForcedColors: p.default.systemForcedColors,
      useForcedColors: p.default.useForcedColors
    })),
    N = (0, c.useStateFromStores)([C.default], () => null != e.channelId && null !== C.default.getSelfEmbeddedActivityForChannel(e.channelId));
  (0, v.default)(n, !1);
  let M = (0, x.default)(n, a),
    {
      analyticsLocations: y
    } = (0, _.default)(S.default.POPOUT_WINDOW),
    {
      clientThemesClassName: j,
      clientThemesCSS: P
    } = (0, T.default)();
  return null == n ? null : (0, l.jsx)(f.DnDProvider, {
    children: (0, l.jsx)(_.AnalyticsLocationProvider, {
      value: y,
      children: (0, l.jsx)(V, {
        ref: t,
        ...e,
        guestWindow: n,
        focused: a,
        appFocused: s,
        locale: i,
        theme: r,
        forcedColors: o,
        useForcedColors: A,
        systemForcedColors: I,
        fontScale: d,
        keyboardModeEnabled: h,
        mouseModeEnabled: M,
        reducedMotionEnabled: m,
        connectedToEmbeddedActivity: N,
        fontScaleClass: E,
        saturation: g,
        clientThemesClassName: j,
        clientThemesCSS: P
      })
    })
  })
});
t.default = W