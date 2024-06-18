"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(802498),
  l = n(266067),
  u = n(873546),
  _ = n(442837),
  d = n(704215),
  c = n(335854),
  E = n(481060),
  I = n(570140),
  T = n(721037),
  h = n(490173),
  S = n(114250),
  f = n(315263),
  N = n(40851),
  A = n(607070),
  m = n(545006),
  O = n(213609),
  R = n(613413),
  C = n(327943),
  p = n(907459),
  g = n(559407),
  L = n(556766),
  v = n(514361),
  D = n(724145),
  M = n(260035),
  P = n(947519),
  y = n(243778),
  U = n(813744),
  b = n(892254),
  G = n(210887),
  w = n(819640),
  k = n(594174),
  B = n(451478),
  x = n(672752),
  V = n(812663),
  Z = n(153850),
  H = n(725568),
  F = n(78415),
  Y = n(806519),
  j = n(358085),
  W = n(74538),
  K = n(663993),
  z = n(823453),
  q = n(628123),
  X = n(962745),
  Q = n(151851),
  J = n(981631),
  $ = n(921944),
  ee = n(776954);
n(792295), Promise.resolve().then(n.bind(n, 62883)).then(e => {
  j.isPlatformEmbedded ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1) : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1)
}), (0, c.E)({
  getDefaultLinkInterceptor: f.default
}), (0, K.Un)({
  createPromise: () => Promise.all([n.e("99387"), n.e("77298"), n.e("80451"), n.e("30634"), n.e("54343")]).then(n.bind(n, 849493)),
  webpackId: 849493
}), (0, K.Un)({
  createPromise: () => Promise.all([n.e("77298"), n.e("80451"), n.e("30634"), n.e("81811")]).then(n.bind(n, 80753)),
  webpackId: 80753
});
let et = (0, K.Un)({
    createPromise: () => Promise.all([n.e("99387"), n.e("46369")]).then(n.bind(n, 177741)),
    webpackId: 177741
  }),
  en = r.memo(function(e) {
    let t = (0, _.e7)([B.Z], () => B.Z.isFocused());
    return (0, i.jsx)(Q.Z, {
      ...e,
      focused: t
    })
  });
t.Z = function(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: n
  } = e, {
    pathname: s
  } = (0, l.TH)(), c = (0, j.getPlatform)(), f = u.tq || u.Em, B = (0, _.e7)([G.Z], () => G.Z.darkSidebar ? J.BRd.DARK : void 0), K = (0, _.e7)([A.Z], () => A.Z.useForcedColors ? "yes" : "no"), [Q, ei] = (0, _.Wu)([v.Z], () => [v.Z.isEditorOpen, v.Z.isCoachmark]), er = (0, _.e7)([C.Z], () => C.Z.isEditorOpen), es = (0, _.e7)([w.Z], () => w.Z.getLayers().includes(J.S9g.USER_SETTINGS)), eo = (0, _.e7)([k.default], () => W.ZP.canUseClientThemes(k.default.getCurrentUser())), ea = Q && !es, el = [];
  ea && ei && !eo && el.push(d.z.CLIENT_THEMES_COACHMARK);
  let [eu, e_] = (0, y.U)(el, $.R.SIDEBAR, !0);
  el.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
  let ed = eu === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
    ec = eu === d.z.CLIENT_THEMES_COACHMARK;
  r.useEffect(() => {
    null == (0, l.LX)(s, {
      path: "invite",
      exact: !1,
      strict: !1
    }) && ed && !ec && (I.Z.dispatch({
      type: "APP_ICON_EDITOR_OPEN"
    }), I.Z.dispatch({
      type: "APP_ICON_TRACK_IMPRESSION",
      markAsDismissed: e_
    }))
  }, [ed, ec, e_, s]);
  let eE = r.useRef(document.body);
  return (0, i.jsx)(b.Z, {
    children: (0, i.jsx)(m.Z, {
      children: (0, i.jsxs)(E.RedesignIconContextProvider, {
        children: [(0, i.jsx)(z.Z, {
          skipsSettingDefaultPageTitle: n
        }), (0, i.jsx)(X.Z, {
          children: (0, i.jsx)(q.Z, {
            children: (0, i.jsxs)(E.FocusRingScope, {
              containerRef: eE,
              children: [(0, i.jsx)(Y.Co, {}), (0, i.jsx)(x.ZP, {}), (0, i.jsx)(a.OU, {}), null != c ? (0, i.jsx)(en, {
                type: c,
                themeOverride: B
              }) : null, (0, i.jsx)(N.Wu, {
                appContext: J.IlC.APP,
                renderWindow: window,
                children: (0, i.jsxs)(Z.yP, {
                  children: [(0, i.jsxs)("div", {
                    className: o()(ee.appAsidePanelWrapper, f && ee.mobileAppAsidePanelWrapper, {
                      [ee.allowsScrolling]: (() => {
                        let e = (0, l.LX)(s, {
                          path: J.Z5c.APPLICATION_DIRECTORY,
                          exact: !1,
                          strict: !1
                        });
                        return (!!u.tq || !!u.Em) && null != e || !1
                      })()
                    }),
                    children: [(0, i.jsx)("div", {
                      className: ee.notAppAsidePanel,
                      "data-app-not-dev-tools": !0,
                      children: (0, i.jsx)(M.m, {
                        children: (0, i.jsx)(F.OR, {
                          children: (0, i.jsxs)(V.Z.Provider, {
                            value: O.Z,
                            children: [(0, i.jsx)("div", {
                              className: o()(f ? ee.mobileApp : ee.app),
                              children: t
                            }), (0, i.jsx)(g.Z, {}), (0, i.jsx)(h.Z, {}), (0, i.jsx)(E.Modals, {}), (0, i.jsx)(S.Z, {}), (0, i.jsx)(H.Ox, {}), (0, i.jsx)(Z.Un, {}), (0, i.jsx)(F.ot, {}), (0, i.jsx)(E.ToastContainer, {}), (0, i.jsx)(R.Z, {}), (0, i.jsx)(U.Z, {}), (0, i.jsx)(et, {})]
                          })
                        })
                      })
                    }), (0, i.jsx)(L.Z, {}), (0, i.jsx)(T.Z, {}), ea && !ei || ec ? (0, i.jsx)(D.Z, {
                      markAsDismissed: e_
                    }) : null, !er || es || ec ? null : (0, i.jsx)(p.Z, {
                      isCoachmark: ed,
                      markAsDismissed: e_
                    }), (0, i.jsx)(P.Z, {
                      mobile: f
                    })]
                  }), !1]
                })
              }), (0, i.jsx)(a.OU, {})]
            })
          })
        })]
      })
    })
  }, K)
}