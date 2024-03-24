"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("794252");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("506838"),
  o = s("77078"),
  d = s("812204"),
  u = s("685665"),
  c = s("599110"),
  S = s("21526"),
  E = s("411691"),
  T = s("49111"),
  f = s("646718"),
  _ = s("782340"),
  m = s("941147");
let g = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("217775"),
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
        className: m.textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: _.default.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })]
    })]
  }),
  h = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("872702"),
        className: i([m.art, m.artJan2024]),
        alt: " ",
        width: "143"
      })
    }), (0, a.jsxs)("div", {
      className: m.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        color: "always-white",
        className: m.title,
        children: _.default.Messages.COLLECTIBLES_SFA_TITLE
      }), (0, a.jsx)(o.Text, {
        className: m.textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: _.default.Messages.COLLECTIBLES_SFA_BANNER_DESCRIPTION
      })]
    })]
  }),
  N = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("43980"),
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
        className: m.textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: _.default.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })]
    })]
  }),
  I = e => {
    let {
      variation: t
    } = e;
    return (0, r.match)(t).with(E.CollectiblesShopMarketingVariants.MONSTER_DROP, () => (0, a.jsx)(h, {})).with(E.CollectiblesShopMarketingVariants.SPRINGTOONS, () => (0, a.jsx)(N, {})).otherwise(() => (0, a.jsx)(g, {}))
  };
var p = () => {
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
    className: i(m.container, m.shopForAllBackgroundImage),
    children: [(0, a.jsx)(I, {
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