"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("446674"),
  o = a("77078"),
  c = a("997289"),
  i = a("716849"),
  r = a("552917"),
  d = a("697218"),
  u = a("719923"),
  O = a("154867"),
  E = a("870879"),
  _ = a("239448"),
  g = a("439141"),
  A = a("648911"),
  p = a("360371"),
  f = a("917219"),
  M = a("49111"),
  m = a("991207"),
  I = a("782340"),
  v = a("80387");

function h(e) {
  let {
    onLearnMore: t,
    selectedBackgroundOption: h,
    onSelectBackgroundOption: x,
    currentDeviceId: C,
    smallerBackgroundOptions: N
  } = e, R = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [T, k] = n.useState(null);
  (0, i.useMaybeFetchPremiumLikelihood)(r.default);
  let D = (0, A.default)(),
    B = u.default.canUseCustomBackgrounds(R),
    U = (0, l.useStateFromStoresObject)([E.default], () => B ? E.default.videoFilterAssets : {}),
    j = n.useMemo(() => Object.values(U).filter(e => e.type === f.VideoFilterType.BACKGROUND), [U]),
    L = (0, c.useAnalyticsContext)();
  n.useEffect(() => {
    D ? (0, g.applyBackgroundOptionPreview)(h, C, {
      track: !1
    }).catch(() => x(null)) : null != h && x(null)
  }, [C]);
  let V = e => {
    x(e), (0, g.applyBackgroundOptionPreview)(e, C, {
      location: L.location
    }).then(() => k(null)).catch(() => {
      k(I.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, g.applyBackgroundOptionPreview)(null, C, {
        location: L.location
      })
    })
  };
  return D ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.Heading, {
      className: v.spacingTop24,
      variant: "eyebrow",
      color: "header-secondary",
      children: I.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
    }), null != T ? (0, s.jsx)(o.FormErrorBlock, {
      className: v.videoBackgroundError,
      children: T
    }) : null, (0, s.jsx)(p.default, {
      canUseCustomBackgrounds: B,
      customBackgroundOptions: j,
      selectedOption: h,
      onSelectOption: V,
      onUpsellClick: () => {
        (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("497296").then(a.bind(a, "497296"));
          return a => (0, s.jsx)(e, {
            ...a,
            onLearnMore: t,
            analyticsSource: {
              ...L.location,
              object: M.AnalyticsObjects.BUTTON_CTA
            }
          })
        })
      },
      onAddBackgroundImage: function(e, t) {
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async s => {
          try {
            let s = await (0, O.uploadVideoFilterAsset)(e, f.VideoFilterType.BACKGROUND);
            V(s), (0, _.trackBackgroundOptionAdded)(s, t.type === m.FileTypes.MP4, a), k(null)
          } catch (e) {
            k(e.message)
          }
          s()
        })
      },
      smallerOptions: N
    })]
  }) : null
}