"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("91192"),
  c = l("481060"),
  o = l("270144"),
  d = l("191741"),
  u = l("768581"),
  p = l("4461"),
  _ = l("924489"),
  m = l("132871"),
  f = l("491576"),
  h = l("689938"),
  C = l("824976");

function g(e) {
  var t, l, n;
  let {
    application: g,
    className: I,
    childrenClassName: A,
    showAdd: E,
    showMutualGuilds: v,
    showPrimaryCategory: x,
    children: R,
    onView: T,
    guildCountPosition: N = "top",
    subheaderTextVariant: P = "text-sm/normal",
    mutualGuildShownMax: y,
    guildIconSize: j,
    source: S
  } = e, O = (0, m.useApplicationDirectoryHistory)(e => e.guildId), L = (0, r.useListItem)(g.id), D = u.default.getApplicationIconURL({
    id: g.id,
    icon: g.icon,
    size: 48
  }), {
    canInstall: M,
    install: b
  } = (0, p.useInstallApplication)(g), k = (0, f.default)({
    application: g,
    showMutualGuilds: v
  }), Y = a.useCallback(e => {
    e.stopPropagation(), b(S)
  }, [b, S]), H = null === (t = g.categories) || void 0 === t ? void 0 : t[0], G = (null !== (n = null === (l = g.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== n ? n : 0) > 0 || k.length > 0, F = (0, i.jsx)(_.default, {
    application: g,
    textVariant: P,
    mutualGuilds: k,
    mutualGuildShownMax: y,
    guildIconSize: j,
    compact: !0
  }), w = x && null != H, U = G && "top" === N, B = G && "bottom" === N, {
    applicationSubscriptionListingsShown: V
  } = (0, o.default)({
    applicationId: g.id,
    groupListingId: g.primary_sku_id,
    guildId: O
  }), W = (0, i.jsxs)("article", {
    children: [(0, i.jsxs)("div", {
      className: C.topWrapper,
      children: [(0, i.jsx)("img", {
        className: C.icon,
        alt: "",
        "aria-hidden": !0,
        src: D,
        width: 48,
        height: 48
      }), (0, i.jsxs)("div", {
        className: C.info,
        children: [(0, i.jsx)(c.Heading, {
          variant: "heading-md/medium",
          children: g.name
        }), (w || U) && (0, i.jsxs)("div", {
          className: C.details,
          children: [w ? (0, i.jsx)(c.Text, {
            tag: "span",
            color: "header-secondary",
            variant: P,
            children: H.name
          }) : null, U ? (0, i.jsxs)(i.Fragment, {
            children: [w ? (0, i.jsx)("span", {
              className: C.bullet,
              children: "•"
            }) : null, F, V ? (0, i.jsxs)("div", {
              className: C.premiumContainer,
              children: [(0, i.jsx)("span", {
                className: C.bullet,
                children: "•"
              }), (0, i.jsx)(d.default, {
                width: 16,
                height: 16
              }), (0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: C.premiumText,
                children: h.default.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
              })]
            }) : null]
          }) : null]
        })]
      }), E ? (0, i.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        onClick: Y,
        disabled: !M,
        children: h.default.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null]
    }), null != R || null != A ? (0, i.jsx)("div", {
      className: s()(A, C.__invalid_children),
      children: R
    }) : null, B ? (0, i.jsx)("div", {
      className: C.bottomGuildCountContainer,
      children: F
    }) : null]
  });
  return null != T ? (0, i.jsx)(c.Clickable, {
    tag: "li",
    onClick: () => T({
      mutualGuilds: k
    }),
    className: s()(I, C.listing, C.clickable),
    ...L,
    children: W
  }) : (0, i.jsx)(c.FocusRing, {
    children: (0, i.jsx)("li", {
      className: s()(I, C.listing),
      ...L,
      children: W
    })
  })
}