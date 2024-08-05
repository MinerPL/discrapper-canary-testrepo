n(47120), n(653041);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(802498),
  l = n(266067),
  u = n(873546),
  c = n(442837),
  d = n(704215),
  _ = n(335854),
  E = n(481060),
  f = n(570140),
  h = n(721037),
  p = n(490173),
  m = n(114250),
  I = n(315263),
  T = n(40851),
  g = n(607070),
  S = n(899663),
  A = n(213609),
  N = n(613413),
  v = n(94795),
  O = n(327943),
  R = n(907459),
  C = n(559407),
  y = n(556766),
  D = n(514361),
  L = n(724145),
  b = n(260035),
  M = n(947519),
  P = n(243778),
  U = n(813744),
  w = n(311476),
  x = n(892254),
  G = n(210887),
  k = n(978781),
  B = n(819640),
  F = n(594174),
  V = n(451478),
  H = n(672752),
  Z = n(812663),
  Y = n(153850),
  j = n(725568),
  W = n(78415),
  K = n(806519),
  z = n(358085),
  q = n(74538),
  Q = n(663993),
  X = n(823453),
  $ = n(628123),
  J = n(962745),
  ee = n(151851),
  et = n(981631),
  en = n(921944),
  er = n(376593);
n(792295), Promise.resolve().then(n.bind(n, 62883)).then(e => {
  z.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
}), (0, _.E)({
  getDefaultLinkInterceptor: I.default
}), (0, Q.Un)({
  createPromise: () => Promise.all([
n.e('77298'),
n.e('80451'),
n.e('30634'),
n.e('54343')
  ]).then(n.bind(n, 849493)),
  webpackId: 849493
}), (0, Q.Un)({
  createPromise: () => Promise.all([
n.e('77298'),
n.e('80451'),
n.e('30634'),
n.e('81811')
  ]).then(n.bind(n, 80753)),
  webpackId: 80753
});
let ei = (0, Q.Un)({
createPromise: () => n.e('46369').then(n.bind(n, 177741)),
webpackId: 177741
  }),
  ea = i.memo(function(e) {
let t = (0, c.e7)([V.Z], () => V.Z.isFocused());
return (0, r.jsx)(ee.Z, {
  ...e,
  focused: t
});
  });
t.Z = function(e) {
  let {
children: t,
skipsSettingDefaultPageTitle: n
  } = e, {
pathname: a
  } = (0, l.TH)(), _ = (0, z.getPlatform)(), I = u.tq || u.Em, V = (0, c.e7)([G.Z], () => G.Z.darkSidebar ? et.BRd.DARK : void 0), Q = (0, c.e7)([g.Z], () => g.Z.useForcedColors ? 'yes' : 'no'), [ee, es, eo] = (0, c.Wu)([D.Z], () => [
D.Z.isEditorOpen,
D.Z.isCoachmark,
D.Z.isPreview
  ]), [el, eu] = (0, c.Wu)([O.Z], () => [
O.Z.isEditorOpen,
O.Z.isUpsellPreview
  ]), ec = (0, c.e7)([B.Z], () => B.Z.getLayers().includes(et.S9g.USER_SETTINGS)), ed = (0, c.e7)([F.default], () => q.ZP.canUseClientThemes(F.default.getCurrentUser())), e_ = ee && !ec, eE = [];
  e_ && es && !ed && eE.push(d.z.CLIENT_THEMES_COACHMARK);
  let [ef, eh] = (0, P.U)(eE, en.R.SIDEBAR, !0);
  eE.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
  let ep = ef === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
em = ef === d.z.CLIENT_THEMES_COACHMARK;
  i.useEffect(() => {
null == (0, l.LX)(a, {
  path: 'invite',
  exact: !1,
  strict: !1
}) && ep && !em && ((0, v.nJ)(), f.Z.dispatch({
  type: 'APP_ICON_TRACK_IMPRESSION',
  markAsDismissed: eh
}));
  }, [
ep,
em,
eh,
a
  ]);
  let eI = i.useRef(document.body),
eT = e_ && !es || em,
eg = el && !ec && !em,
eS = eo || eu,
{
  enabled: eA
} = w.Z.useExperiment({
  location: 'AppSkeleton'
}, {
  autoTrackExposure: eS && (eT || eg),
  disable: !eS
});
  return (0, r.jsx)(x.Z, {
children: (0, r.jsx)(S.Z, {
  children: (0, r.jsxs)(E.RedesignIconContextProvider, {
    children: [
      (0, r.jsx)(X.Z, {
        skipsSettingDefaultPageTitle: n
      }),
      (0, r.jsx)(J.Z, {
        children: (0, r.jsx)($.Z, {
          children: (0, r.jsxs)(E.FocusRingScope, {
            containerRef: eI,
            children: [
              (0, r.jsx)(K.Co, {}),
              (0, r.jsx)(H.ZP, {}),
              (0, r.jsx)(o.OU, {}),
              null != _ ? (0, r.jsx)(ea, {
                type: _,
                themeOverride: V
              }) : null,
              (0, r.jsx)(T.Wu, {
                appContext: et.IlC.APP,
                renderWindow: window,
                children: (0, r.jsxs)(Y.yP, {
                  children: [
                    (0, r.jsxs)('div', {
                      className: s()(er.appAsidePanelWrapper, I && er.mobileAppAsidePanelWrapper, {
                        [er.allowsScrolling]: (() => {
                          let e = (0, l.LX)(a, {
                            path: et.Z5c.APPLICATION_DIRECTORY,
                            exact: !1,
                            strict: !1
                          });
                          return (!!u.tq || !!u.Em) && null != e || !1;
                        })()
                      }),
                      children: [
                        (0, r.jsx)('div', {
                          className: er.notAppAsidePanel,
                          'data-app-not-dev-tools': !0,
                          children: (0, r.jsx)(b.m, {
                            children: (0, r.jsx)(W.OR, {
                              children: (0, r.jsxs)(Z.Z.Provider, {
                                value: A.Z,
                                children: [
                                  (0, r.jsx)('div', {
                                    className: s()(I ? er.mobileApp : er.app),
                                    children: t
                                  }),
                                  (0, r.jsx)(C.Z, {}),
                                  (0, r.jsx)(p.Z, {}),
                                  (0, r.jsx)(E.Modals, {}),
                                  (0, r.jsx)(m.Z, {}),
                                  (0, r.jsx)(j.Ox, {}),
                                  (0, r.jsx)(Y.Un, {}),
                                  (0, r.jsx)(W.ot, {}),
                                  (0, r.jsx)(E.ToastContainer, {}),
                                  (0, r.jsx)(N.Z, {}),
                                  (0, r.jsx)(U.Z, {}),
                                  (0, r.jsx)(ei, {})
                                ]
                              })
                            })
                          })
                        }),
                        (0, r.jsx)(y.Z, {}),
                        (0, r.jsx)(h.Z, {}),
                        eT && !eA && (0, r.jsx)(L.Z, {
                          markAsDismissed: eh
                        }),
                        eg && !eA && (0, r.jsx)(R.Z, {
                          isCoachmark: ep,
                          markAsDismissed: eh
                        }),
                        (eT || eg) && eA && (0, r.jsx)(k.Z, {
                          initialTab: eg ? k._.APP_ICONS : k._.CLIENT_THEMES,
                          markAsDismissed: eh
                        }),
                        (0, r.jsx)(M.Z, {
                          mobile: I
                        })
                      ]
                    }),
                    !1
                  ]
                })
              }),
              (0, r.jsx)(o.OU, {})
            ]
          })
        })
      })
    ]
  })
})
  }, Q);
};