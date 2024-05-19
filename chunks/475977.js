"use strict";
s.r(t), s("627341");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("278074"),
  o = s("481060"),
  d = s("100527"),
  u = s("906732"),
  c = s("626135"),
  S = s("335131"),
  E = s("410154"),
  T = s("981631"),
  f = s("474936"),
  _ = s("689938"),
  m = s("449221"),
  g = s("786792");
let I = e => {
    let {
      artSrc: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: m.artContainer,
        "aria-hidden": !0,
        role: "presentation",
        children: (0, a.jsx)("img", {
          src: t,
          className: m.art,
          alt: " "
        })
      }), (0, a.jsxs)("div", {
        className: m.mainColumn,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          color: "always-white",
          className: m.title,
          children: _.default.Messages.COLLECTIBLES_BANNER_TITLE_2024
        }), (0, a.jsx)(o.Text, {
          className: m.__invalid_textBody,
          variant: "text-sm/normal",
          color: "always-white",
          children: _.default.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
        })]
      })]
    })
  },
  h = e => {
    let {
      variation: t
    } = e;
    return (0, r.match)(t).with(E.CollectiblesShopMarketingVariants.GALAXY, () => (0, a.jsx)(I, {
      artSrc: s("161594")
    })).otherwise(() => (0, a.jsx)(I, {
      artSrc: s("353437")
    }))
  };
t.default = () => {
  let {
    analyticsLocations: e
  } = (0, u.default)(d.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = n.useRef(null), s = (0, E.default)("CollectiblesUpsellBanner");
  return n.useEffect(() => {
    c.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: f.PremiumUpsellTypes.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: e
    })
  }, [e]), (0, a.jsxs)("div", {
    ref: t,
    className: i()(m.container),
    style: {
      backgroundImage: "url(".concat(g, ")")
    },
    children: [(0, a.jsx)(h, {
      variation: s
    }), (0, a.jsx)(o.Button, {
      onClick: () => {
        (0, S.openCollectiblesShop)({
          analyticsLocations: e,
          analyticsSource: d.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        })
      },
      className: m.ctaButton,
      look: o.Button.Looks.INVERTED,
      children: (0, r.match)(s).with(E.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => _.default.Messages.CHECK_IT_OUT).otherwise(() => _.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP)
    })]
  })
}