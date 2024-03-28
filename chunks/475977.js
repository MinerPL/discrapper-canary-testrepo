"use strict";
s.r(t), s("627341");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("278074"),
  o = s("481060"),
  d = s("100527"),
  u = s("906732"),
  c = s("626135"),
  S = s("335131"),
  E = s("410154"),
  T = s("981631"),
  _ = s("474936"),
  f = s("689938"),
  m = s("760668"),
  g = s("786792"),
  h = s("329213");
let N = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("353437"),
        className: m.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: m.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: m.title,
        children: f.default.Messages.COLLECTIBLES_BANNER_TITLE_2024
      }), (0, a.jsx)(o.Text, {
        className: m.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: f.default.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })]
    })]
  }),
  I = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("162813"),
        className: i()([m.art, m.artJan2024]),
        alt: " ",
        width: "143"
      })
    }), (0, a.jsxs)("div", {
      className: m.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        color: "always-white",
        className: m.title,
        children: f.default.Messages.COLLECTIBLES_SFA_TITLE
      }), (0, a.jsx)(o.Text, {
        className: m.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: f.default.Messages.COLLECTIBLES_SFA_BANNER_DESCRIPTION
      })]
    })]
  }),
  p = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("861636"),
        className: m.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: m.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: m.title,
        children: f.default.Messages.COLLECTIBLES_BANNER_TITLE_2024
      }), (0, a.jsx)(o.Text, {
        className: m.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: f.default.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })]
    })]
  }),
  C = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("43563"),
        className: m.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: m.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: m.title,
        children: f.default.Messages.COLLECTIBLES_SHY_PROFILE_UPSELL_BANNER_TITLE
      }), (0, a.jsx)(o.Text, {
        className: m.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: f.default.Messages.COLLECTIBLES_SHY_PROFILE_UPSELL_BANNER_SUBTITLE
      })]
    })]
  }),
  A = e => {
    let {
      variation: t
    } = e;
    return (0, r.match)(t).with(E.CollectiblesShopMarketingVariants.MONSTER_DROP, () => (0, a.jsx)(I, {})).with(E.CollectiblesShopMarketingVariants.SPRINGTOONS, () => (0, a.jsx)(p, {})).with(E.CollectiblesShopMarketingVariants.SHY, () => (0, a.jsx)(C, {})).otherwise(() => (0, a.jsx)(N, {}))
  };
t.default = () => {
  let {
    analyticsLocations: e
  } = (0, u.default)(d.default.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), t = n.useRef(null), s = (0, E.default)("CollectiblesUpsellBanner");
  return n.useEffect(() => {
    c.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: _.PremiumUpsellTypes.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: e
    })
  }, [e]), (0, a.jsxs)("div", {
    ref: t,
    className: i()(m.container),
    style: {
      backgroundImage: "url(".concat(s === E.CollectiblesShopMarketingVariants.SHY ? h : g, ")")
    },
    children: [(0, a.jsx)(A, {
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
      children: (0, r.match)(s).with(E.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => f.default.Messages.CHECK_IT_OUT).otherwise(() => f.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP)
    })]
  })
}