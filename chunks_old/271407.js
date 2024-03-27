"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("669491"),
  d = s("77078"),
  u = s("597517"),
  c = s("45395"),
  E = s("957255"),
  _ = s("756609"),
  I = s("68238"),
  T = s("240292"),
  S = s("701909"),
  f = s("49111"),
  m = s("533613"),
  N = s("782340"),
  g = s("477204"),
  h = s("175717"),
  C = s("869917"),
  R = s("133765"),
  x = s("138131"),
  L = s("52846"),
  O = s("656011"),
  A = s("845929"),
  p = s("144582");
let M = () => [{
    icon: T.default,
    color: o.default.unsafe_rawColors.GREEN_360.css,
    header: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_HEADER,
    body: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_BODY.format({
      featureHook: (e, t) => (0, a.jsx)("strong", {
        className: g.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: _.default,
    color: o.default.unsafe_rawColors.PARTNER.css,
    header: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_HEADER,
    body: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_BODY.format({
      infoHook: () => (0, a.jsx)(d.Tooltip, {
        text: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        "aria-label": N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        children: e => (0, a.jsx)(I.default, {
          className: g.infoIcon,
          ...e
        })
      }),
      featureHook: (e, t) => (0, a.jsx)("strong", {
        className: g.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: I.default,
    color: o.default.unsafe_rawColors.RED_360.css,
    header: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_HEADER,
    body: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_BODY
  }],
  D = [{
    iconSrc: O,
    name: "Pokemon GO Paris",
    position: [-230, -100]
  }, {
    iconSrc: A,
    name: "Python",
    position: [-180, -100],
    faded: !0,
    rightAlign: !0
  }, {
    iconSrc: x,
    name: "Learn Latin",
    position: [-280, -30],
    faded: !0
  }, {
    iconSrc: L,
    name: "r/leagueoflegends",
    position: [-320, -30],
    rightAlign: !0
  }, {
    iconSrc: p,
    name: "Sneaker Fans",
    position: [-250, 40]
  }, {
    iconSrc: R,
    name: "Hogwarts School",
    position: [-270, 40],
    faded: !0,
    rightAlign: !0
  }],
  v = e => {
    let {
      icon: t,
      color: s,
      size: l = 24,
      header: n,
      body: i
    } = e;
    return (0, a.jsxs)("div", {
      className: g.featureCard,
      children: [(0, a.jsx)("div", {
        className: g.featureIcon,
        children: (0, a.jsx)(t, {
          color: s,
          width: l,
          height: l
        })
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: g.featureHeader,
        children: n
      }), (0, a.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: i
      })]
    })
  },
  G = e => {
    let {
      iconSrc: t,
      name: s,
      position: l,
      faded: n,
      rightAlign: r,
      imageCoordinates: o
    } = e, u = {
      [r ? "right" : "left"]: o[0] + l[0],
      top: o[1] + l[1]
    };
    return (0, a.jsxs)("div", {
      className: i(g.guildDetails, {
        [g.faded]: n
      }),
      style: u,
      children: [(0, a.jsx)("div", {
        className: g.guildIcon,
        children: (0, a.jsx)("img", {
          alt: "",
          src: t,
          width: 24,
          height: 24
        })
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-deprecated-12/semibold",
        children: s
      })]
    })
  };
var j = e => {
  let {
    guild: t
  } = e, [s, n] = l.useState(0), [i, o] = l.useState(0), [_, I] = l.useState(), T = (0, r.useStateFromStores)([E.default], () => E.default.can(f.Permissions.ADMINISTRATOR, t)), R = null == _ ? void 0 : _.offsetWidth, x = null == _ ? void 0 : _.offsetHeight;
  l.useEffect(() => {
    null != R && n(R / 2), null != x && o(x / 2)
  }, [R, x, n, o]), l.useEffect(() => {
    (0, u.hideHotspot)(m.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
  }, []);
  let L = () => {
    c.default.open()
  };
  return (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsxs)("div", {
      className: g.banner,
      ref: e => I(e),
      children: [D.map(e => (0, a.jsx)(G, {
        ...e,
        imageCoordinates: [s, i]
      }, e.name)), (0, a.jsx)("img", {
        alt: "",
        src: h,
        className: g.image,
        width: 256
      }), (0, a.jsx)("img", {
        alt: "",
        src: C,
        className: g.sparkles
      })]
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-xl/semibold",
      children: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: g.body,
      children: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_BODY_WITH_HELP_ARTICLE.format({
        helpdeskArticle: S.default.getArticleURL(f.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
      })
    }), (0, a.jsx)(d.Tooltip, {
      text: T ? null : N.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      "aria-label": T ? void 0 : N.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      children: e => (0, a.jsx)(d.Button, {
        onClick: L,
        className: g.button,
        disabled: !T,
        ...e,
        children: N.default.Messages.GET_STARTED
      })
    }), (0, a.jsx)("hr", {
      className: g.separator
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_DETAILS
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      className: g.body,
      variant: "text-sm/normal",
      children: N.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_LEARN_MORE.format({
        helpdeskArticle: S.default.getArticleURL(f.HelpdeskArticles.GUILD_COMMUNITY_FEATURE)
      })
    }), (0, a.jsx)("div", {
      className: g.features,
      children: M().map((e, t) => (0, a.jsx)(v, {
        ...e
      }, t))
    })]
  })
}