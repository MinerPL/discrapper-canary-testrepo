"use strict";
a.r(t), a.d(t, {
  default: function() {
    return D
  }
});
var s = a("735250");
a("470079");
var n = a("442837"),
  r = a("524437"),
  l = a("663002"),
  d = a("481060"),
  o = a("2052"),
  i = a("410030"),
  u = a("100527"),
  c = a("906732"),
  _ = a("963249"),
  E = a("594174"),
  m = a("976644"),
  f = a("626135"),
  M = a("63063"),
  A = a("74538"),
  I = a("823188"),
  R = a("290347"),
  g = a("474936"),
  p = a("981631"),
  O = a("689938"),
  T = a("286230"),
  h = a("891594"),
  L = a("607139"),
  C = a("956723"),
  N = a("103052"),
  P = a("74316");
let x = "AnnouncementModalVariant1_PREMIUM_2024_APRIL_MARKETING_MODAL";

function D(e) {
  let {
    renderModalProps: t
  } = e, {
    onClose: a
  } = t, {
    location: D
  } = (0, o.useAnalyticsContext)(), {
    analyticsLocations: b
  } = (0, c.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), y = (0, n.useStateFromStores)([E.default], () => E.default.getCurrentUser()), S = (0, A.isPremiumExactly)(y, g.PremiumTypes.TIER_2), v = (0, A.isPremium)(y) && !S, j = (0, i.default)(), H = (0, l.isThemeLight)(j) ? I.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : I.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL;
  return (0, s.jsx)(R.default, {
    renderModalProps: t,
    heroArt: {
      type: "image",
      src: N
    },
    modalDismissibleContent: r.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_MODAL,
    header: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER,
    modalTopExtra: () => (0, s.jsx)(I.PremiumPillWithSparkles, {
      text: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
      className: T.modalTopPill,
      colorOptions: H
    }),
    subHeader: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_SUBHEADER,
    subHeaderExtra: () => (0, s.jsx)(d.Anchor, {
      className: T.termsApplyAnchor,
      href: M.default.getArticleURL(p.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT),
      children: (0, s.jsx)(d.Heading, {
        variant: "heading-md/normal",
        className: T.termsApplyBodyText,
        children: O.default.Messages.BOGO_TERMS_APPLY
      })
    }),
    featureCards: [{
      header: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_CUSTOM_PROFILE_TILE_HEADER,
      subHeader: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_CUSTOM_PROFILE_TILE_BODY,
      imageSrc: C
    }, {
      header: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_COLOR_THEMES_TILE_HEADER,
      subHeader: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_COLOR_THEMES_TILE_BODY,
      imageSrc: h
    }, {
      header: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_APP_ICONS_TILE_HEADER,
      subHeader: O.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_APP_ICONS_TILE_BODY,
      imageSrc: L
    }],
    changeLogId: x,
    button: () => {
      let e = v ? "upgrade_plan_button" : "get_nitro_button",
        t = Date.now();
      return (0, s.jsxs)(m.default, {
        className: T.buttonWide,
        innerClassName: T.innerButton,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        onClick: () => {
          f.default.track(p.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: x,
            cta_type: e,
            seconds_open: Math.round((Date.now() - t) / 1e3),
            target: x
          }), (0, _.default)({
            subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
            analyticsLocations: b,
            analyticsObject: {
              ...D,
              object: p.AnalyticsObjects.BUTTON_CTA,
              objectType: p.AnalyticsObjectTypes.TIER_2
            },
            onClose: e => {
              e && a()
            }
          })
        },
        children: [(0, s.jsx)("img", {
          alt: "",
          className: T.nitroIconSubHeader,
          src: P
        }), O.default.Messages.BOGO_CLAIM_OFFER]
      })
    }
  })
}