"use strict";
t.r(a), t.d(a, {
  default: function() {
    return h
  }
}), t("47120");
var s = t("735250"),
  n = t("470079"),
  l = t("442837"),
  o = t("481060"),
  c = t("2052"),
  i = t("857185"),
  r = t("911200"),
  d = t("594174"),
  u = t("74538"),
  _ = t("716161"),
  O = t("634041"),
  E = t("647177"),
  g = t("672339"),
  A = t("898531"),
  p = t("636188"),
  f = t("678916"),
  M = t("981631"),
  m = t("869783"),
  v = t("689938"),
  I = t("122114");

function h(e) {
  let {
    onLearnMore: a,
    selectedBackgroundOption: h,
    onSelectBackgroundOption: x,
    currentDeviceId: C,
    smallerBackgroundOptions: N
  } = e, R = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [T, k] = n.useState(null);
  (0, i.useMaybeFetchPremiumLikelihood)(r.default);
  let D = (0, A.default)(),
    B = u.default.canUseCustomBackgrounds(R),
    U = (0, l.useStateFromStoresObject)([O.default], () => B ? O.default.videoFilterAssets : {}),
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
      k(v.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY), (0, g.applyBackgroundOptionPreview)(null, C, {
        location: L.location
      })
    })
  };
  return D ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.Heading, {
      className: I.spacingTop24,
      variant: "eyebrow",
      color: "header-secondary",
      children: v.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND
    }), null != T ? (0, s.jsx)(o.FormErrorBlock, {
      className: I.videoBackgroundError,
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
          } = await Promise.all([t.e("99387"), t.e("87200")]).then(t.bind(t, "592163"));
          return t => (0, s.jsx)(e, {
            ...t,
            onLearnMore: a,
            analyticsSource: {
              ...L.location,
              object: M.AnalyticsObjects.BUTTON_CTA
            }
          })
        })
      },
      onAddBackgroundImage: function(e, a) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return new Promise(async s => {
          try {
            let s = await (0, _.uploadVideoFilterAsset)(e, f.VideoFilterType.BACKGROUND);
            V(s), (0, E.trackBackgroundOptionAdded)(s, a.type === m.FileTypes.MP4, t), k(null)
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