"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(692547),
  c = t(481060),
  d = t(142497),
  u = t(338327),
  E = t(496675),
  _ = t(825185),
  I = t(41542),
  T = t(187500),
  N = t(63063),
  m = t(981631),
  S = t(190378),
  h = t(689938),
  g = t(217370),
  x = t(438825),
  C = t(236140),
  R = t(37069),
  L = t(518513),
  O = t(168179),
  A = t(348986),
  p = t(930065),
  M = t(345669);
let f = () => [{
    icon: T.Z,
    color: o.Z.unsafe_rawColors.GREEN_360.css,
    header: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_HEADER,
    body: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_BODY.format({
      featureHook: (e, s) => (0, n.jsx)("strong", {
        className: g.featuredText,
        children: e
      }, s)
    })
  }, {
    icon: _.Z,
    color: o.Z.unsafe_rawColors.PARTNER.css,
    header: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_HEADER,
    body: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_BODY.format({
      infoHook: () => (0, n.jsx)(c.Tooltip, {
        text: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        "aria-label": h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        children: e => (0, n.jsx)(I.Z, {
          className: g.infoIcon,
          ...e
        })
      }),
      featureHook: (e, s) => (0, n.jsx)("strong", {
        className: g.featuredText,
        children: e
      }, s)
    })
  }, {
    icon: I.Z,
    color: o.Z.unsafe_rawColors.RED_360.css,
    header: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_HEADER,
    body: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_BODY
  }],
  v = [{
    iconSrc: A,
    name: "Pokemon GO Paris",
    position: [-230, -100]
  }, {
    iconSrc: p,
    name: "Python",
    position: [-180, -100],
    faded: !0,
    rightAlign: !0
  }, {
    iconSrc: L,
    name: "Learn Latin",
    position: [-280, -30],
    faded: !0
  }, {
    iconSrc: O,
    name: "r/leagueoflegends",
    position: [-320, -30],
    rightAlign: !0
  }, {
    iconSrc: M,
    name: "Sneaker Fans",
    position: [-250, 40]
  }, {
    iconSrc: R,
    name: "Hogwarts School",
    position: [-270, 40],
    faded: !0,
    rightAlign: !0
  }],
  D = e => {
    let {
      icon: s,
      color: t,
      size: i = 24,
      header: l,
      body: a
    } = e;
    return (0, n.jsxs)("div", {
      className: g.featureCard,
      children: [(0, n.jsx)("div", {
        className: g.featureIcon,
        children: (0, n.jsx)(s, {
          color: t,
          width: i,
          height: i
        })
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        className: g.featureHeader,
        children: l
      }), (0, n.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  Z = e => {
    let {
      iconSrc: s,
      name: t,
      position: i,
      faded: l,
      rightAlign: r,
      imageCoordinates: o
    } = e, d = {
      [r ? "right" : "left"]: o[0] + i[0],
      top: o[1] + i[1]
    };
    return (0, n.jsxs)("div", {
      className: a()(g.guildDetails, {
        [g.faded]: l
      }),
      style: d,
      children: [(0, n.jsx)("div", {
        className: g.guildIcon,
        children: (0, n.jsx)("img", {
          alt: "",
          src: s,
          width: 24,
          height: 24
        })
      }), (0, n.jsx)(c.Heading, {
        variant: "heading-deprecated-12/semibold",
        children: t
      })]
    })
  };
s.Z = e => {
  let {
    guild: s
  } = e, [t, l] = i.useState(0), [a, o] = i.useState(0), [_, I] = i.useState(), T = (0, r.e7)([E.Z], () => E.Z.can(m.Plq.ADMINISTRATOR, s)), R = null == _ ? void 0 : _.offsetWidth, L = null == _ ? void 0 : _.offsetHeight;
  i.useEffect(() => {
    null != R && l(R / 2), null != L && o(L / 2)
  }, [R, L, l, o]), i.useEffect(() => {
    (0, d.Kw)(S.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
  }, []);
  let O = () => {
    u.Z.open()
  };
  return (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsxs)("div", {
      className: g.banner,
      ref: e => I(e),
      children: [v.map(e => (0, n.jsx)(Z, {
        ...e,
        imageCoordinates: [t, a]
      }, e.name)), (0, n.jsx)("img", {
        alt: "",
        src: x,
        className: g.image,
        width: 256
      }), (0, n.jsx)("img", {
        alt: "",
        src: C,
        className: g.sparkles
      })]
    }), (0, n.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      children: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_HEADER
    }), (0, n.jsx)(c.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: g.body,
      children: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_BODY_WITH_HELP_ARTICLE.format({
        helpdeskArticle: N.Z.getArticleURL(m.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
      })
    }), (0, n.jsx)(c.Tooltip, {
      text: T ? null : h.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      "aria-label": T ? void 0 : h.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      children: e => (0, n.jsx)(c.Button, {
        onClick: O,
        className: g.button,
        disabled: !T,
        ...e,
        children: h.Z.Messages.GET_STARTED
      })
    }), (0, n.jsx)("hr", {
      className: g.separator
    }), (0, n.jsx)(c.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_DETAILS
    }), (0, n.jsx)(c.Text, {
      color: "header-secondary",
      className: g.body,
      variant: "text-sm/normal",
      children: h.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_LEARN_MORE.format({
        helpdeskArticle: N.Z.getArticleURL(m.BhN.GUILD_COMMUNITY_FEATURE)
      })
    }), (0, n.jsx)("div", {
      className: g.features,
      children: f().map((e, s) => (0, n.jsx)(D, {
        ...e
      }, s))
    })]
  })
}