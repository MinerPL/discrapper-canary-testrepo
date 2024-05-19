"use strict";
n.r(t), n("47120"), n("653041");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("802498"),
  l = n("266067"),
  u = n("613828"),
  d = n("873546"),
  _ = n("442837"),
  c = n("524437"),
  E = n("335854"),
  I = n("481060"),
  T = n("570140"),
  f = n("721037"),
  S = n("490173"),
  h = n("114250"),
  A = n("315263"),
  m = n("40851"),
  N = n("607070"),
  p = n("545006"),
  O = n("213609"),
  C = n("613413"),
  R = n("327943"),
  g = n("907459"),
  L = n("559407"),
  v = n("556766"),
  D = n("514361"),
  M = n("724145"),
  y = n("260035"),
  P = n("947519"),
  U = n("243778"),
  b = n("813744"),
  G = n("904085"),
  w = n("892254"),
  k = n("210887"),
  B = n("819640"),
  V = n("594174"),
  x = n("451478"),
  F = n("672752"),
  H = n("812663"),
  Y = n("153850"),
  j = n("725568"),
  W = n("78415"),
  K = n("806519"),
  z = n("358085"),
  Z = n("74538"),
  X = n("663993"),
  Q = n("823453"),
  q = n("628123"),
  J = n("962745"),
  $ = n("151851"),
  ee = n("981631"),
  et = n("921944"),
  en = n("776954");
n("792295"), Promise.resolve().then(n.bind(n, "62883")).then(e => {
  z.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
}), (0, E.setDesignConfig)({
  getDefaultLinkInterceptor: A.default
}), (0, X.makeLazy)({
  createPromise: () => Promise.all([n.e("99387"), n.e("40326"), n.e("80451"), n.e("30634"), n.e("54343")]).then(n.bind(n, "849493")),
  webpackId: "849493"
}), (0, X.makeLazy)({
  createPromise: () => Promise.all([n.e("40326"), n.e("80451"), n.e("30634"), n.e("81811")]).then(n.bind(n, "80753")),
  webpackId: "80753"
});
let ei = (0, X.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("46369")]).then(n.bind(n, "177741")),
    webpackId: "177741"
  }),
  er = r.memo(function(e) {
    let t = (0, _.useStateFromStores)([x.default], () => x.default.isFocused());
    return (0, i.jsx)($.default, {
      ...e,
      focused: t
    })
  });
t.default = function(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: n
  } = e, {
    pathname: a
  } = (0, u.useLocation)(), E = (0, z.getPlatform)(), A = d.isMobile || d.isTablet, x = (0, _.useStateFromStores)([k.default], () => k.default.darkSidebar ? ee.ThemeTypes.DARK : void 0), X = (0, _.useStateFromStores)([N.default], () => N.default.useForcedColors ? "yes" : "no"), [$, ea] = (0, _.useStateFromStoresArray)([D.default], () => [D.default.isEditorOpen, D.default.isCoachmark]), es = (0, _.useStateFromStores)([R.default], () => R.default.isEditorOpen), {
    enabled: eo
  } = G.default.useExperiment({
    location: "client_themes_coachmark_reintro"
  }, {
    autoTrackExposure: !0
  }), el = (0, _.useStateFromStores)([B.default], () => B.default.getLayers().includes(ee.Layers.USER_SETTINGS)), eu = (0, _.useStateFromStores)([V.default], () => Z.default.canUseClientThemes(V.default.getCurrentUser())), ed = $ && !el, e_ = [];
  ed && ea && eo && !eu && e_.push(c.DismissibleContent.CLIENT_THEMES_COACHMARK);
  let [ec, eE] = (0, U.useSelectedDismissibleContent)(e_, et.DismissibleContentGroupName.SIDEBAR, !0);
  e_.push(c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
  let eI = ec === c.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
    eT = ec === c.DismissibleContent.CLIENT_THEMES_COACHMARK;
  r.useEffect(() => {
    null == (0, l.matchPath)(a, {
      path: "invite",
      exact: !1,
      strict: !1
    }) && eI && !eT && (T.default.dispatch({
      type: "APP_ICON_EDITOR_OPEN"
    }), T.default.dispatch({
      type: "APP_ICON_TRACK_IMPRESSION",
      markAsDismissed: eE
    }))
  }, [eI, eT, eE, a]);
  let ef = r.useRef(document.body);
  return (0, i.jsx)(w.default, {
    children: (0, i.jsx)(p.default, {
      children: (0, i.jsxs)(I.RedesignIconContextProvider, {
        children: [(0, i.jsx)(Q.default, {
          skipsSettingDefaultPageTitle: n
        }), (0, i.jsx)(J.default, {
          children: (0, i.jsx)(q.default, {
            children: (0, i.jsxs)(I.FocusRingScope, {
              containerRef: ef,
              children: [(0, i.jsx)(K.MaskLibrary, {}), (0, i.jsx)(F.default, {}), (0, i.jsx)(o.FocusGuard, {}), null != E ? (0, i.jsx)(er, {
                type: E,
                themeOverride: x
              }) : null, (0, i.jsx)(m.AppWindowContextProvider, {
                appContext: ee.AppContext.APP,
                renderWindow: window,
                children: (0, i.jsxs)(Y.AppLayerProvider, {
                  children: [(0, i.jsxs)("div", {
                    className: s()(en.appAsidePanelWrapper, A && en.mobileAppAsidePanelWrapper, {
                      [en.allowsScrolling]: (() => {
                        let e = (0, l.matchPath)(a, {
                          path: ee.Routes.APPLICATION_DIRECTORY,
                          exact: !1,
                          strict: !1
                        });
                        return (!!d.isMobile || !!d.isTablet) && null != e || !1
                      })()
                    }),
                    children: [(0, i.jsx)("div", {
                      className: en.notAppAsidePanel,
                      "data-app-not-dev-tools": !0,
                      children: (0, i.jsx)(y.CommonConfettiCannonContextProvider, {
                        children: (0, i.jsx)(W.VerificationLayerProvider, {
                          children: (0, i.jsxs)(H.default.Provider, {
                            value: O.default,
                            children: [(0, i.jsx)("div", {
                              className: s()(A ? en.mobileApp : en.app),
                              children: t
                            }), (0, i.jsx)(L.default, {}), (0, i.jsx)(S.default, {}), (0, i.jsx)(I.Modals, {}), (0, i.jsx)(h.default, {}), (0, i.jsx)(j.FullScreenLayers, {}), (0, i.jsx)(Y.AppLayerContainer, {}), (0, i.jsx)(W.VerificationLayerContainer, {}), (0, i.jsx)(I.ToastContainer, {}), (0, i.jsx)(C.default, {}), (0, i.jsx)(b.default, {}), (0, i.jsx)(ei, {})]
                          })
                        })
                      })
                    }), (0, i.jsx)(v.default, {}), (0, i.jsx)(f.default, {}), ed && !ea || eT ? (0, i.jsx)(M.default, {
                      markAsDismissed: eE
                    }) : null, !es || el || eT ? null : (0, i.jsx)(g.default, {
                      isCoachmark: eI,
                      markAsDismissed: eE
                    }), (0, i.jsx)(P.default, {
                      mobile: A
                    })]
                  }), !1]
                })
              }), (0, i.jsx)(o.FocusGuard, {})]
            })
          })
        })]
      })
    })
  }, X)
}