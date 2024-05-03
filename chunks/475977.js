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
  m = s("689938"),
  _ = s("71038"),
  g = s("786792"),
  h = s("329213");
let I = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: _.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("353437"),
        className: _.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: _.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: _.title,
        children: m.default.Messages.COLLECTIBLES_BANNER_TITLE_2024
      }), (0, a.jsx)(o.Text, {
        className: _.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: m.default.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })]
    })]
  }),
  N = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: _.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("162813"),
        className: i()([_.art, _.artJan2024]),
        alt: " ",
        width: "143"
      })
    }), (0, a.jsxs)("div", {
      className: _.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/bold",
        color: "always-white",
        className: _.title,
        children: m.default.Messages.COLLECTIBLES_SFA_TITLE
      }), (0, a.jsx)(o.Text, {
        className: _.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: m.default.Messages.COLLECTIBLES_SFA_BANNER_DESCRIPTION
      })]
    })]
  }),
  p = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: _.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("861636"),
        className: _.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: _.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: _.title,
        children: m.default.Messages.COLLECTIBLES_BANNER_TITLE_2024
      }), (0, a.jsx)(o.Text, {
        className: _.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: m.default.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })]
    })]
  }),
  C = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: _.artContainer,
      "aria-hidden": !0,
      role: "presentation",
      children: (0, a.jsx)("img", {
        src: s("43563"),
        className: _.art,
        alt: " "
      })
    }), (0, a.jsxs)("div", {
      className: _.mainColumn,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        color: "always-white",
        className: _.title,
        children: m.default.Messages.COLLECTIBLES_SHY_PROFILE_UPSELL_BANNER_TITLE
      }), (0, a.jsx)(o.Text, {
        className: _.__invalid_textBody,
        variant: "text-sm/normal",
        color: "always-white",
        children: m.default.Messages.COLLECTIBLES_SHY_PROFILE_UPSELL_BANNER_SUBTITLE
      })]
    })]
  }),
  A = e => {
    let {
      variation: t
    } = e;
    return (0, r.match)(t).with(E.CollectiblesShopMarketingVariants.MONSTER_DROP, () => (0, a.jsx)(N, {})).with(E.CollectiblesShopMarketingVariants.SPRINGTOONS, () => (0, a.jsx)(p, {})).with(E.CollectiblesShopMarketingVariants.SHY, () => (0, a.jsx)(C, {})).otherwise(() => (0, a.jsx)(I, {}))
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
    className: i()(_.container),
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
      className: _.ctaButton,
      look: o.Button.Looks.INVERTED,
      children: (0, r.match)(s).with(E.CollectiblesShopMarketingVariants.WINTER_2023_DROP, () => m.default.Messages.CHECK_IT_OUT).otherwise(() => m.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP)
    })]
  })
}