"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("120356"),
  i = a.n(s),
  r = a("91192"),
  c = a("481060"),
  u = a("270144"),
  o = a("191741"),
  d = a("768581"),
  m = a("4461"),
  g = a("924489"),
  p = a("132871"),
  _ = a("491576"),
  f = a("689938"),
  h = a("371165");

function C(e) {
  var t, a, s;
  let {
    application: C,
    className: R,
    childrenClassName: I,
    showAdd: x,
    showMutualGuilds: A,
    showPrimaryCategory: T,
    children: E,
    onView: v,
    guildCountPosition: P = "top",
    subheaderTextVariant: S = "text-sm/normal",
    mutualGuildShownMax: N,
    guildIconSize: y,
    source: j
  } = e, O = (0, p.useApplicationDirectoryHistory)(e => e.guildId), D = (0, r.useListItem)(C.id), L = d.default.getApplicationIconURL({
    id: C.id,
    icon: C.icon,
    size: 48
  }), {
    canInstall: M,
    install: b
  } = (0, m.useInstallApplication)(C), Y = (0, _.default)({
    application: C,
    showMutualGuilds: A
  }), H = n.useCallback(e => {
    e.stopPropagation(), b(j)
  }, [b, j]), k = null === (t = C.categories) || void 0 === t ? void 0 : t[0], U = (null !== (s = null === (a = C.directory_entry) || void 0 === a ? void 0 : a.guild_count) && void 0 !== s ? s : 0) > 0 || Y.length > 0, F = (0, l.jsx)(g.default, {
    application: C,
    textVariant: S,
    mutualGuilds: Y,
    mutualGuildShownMax: N,
    guildIconSize: y,
    compact: !0
  }), w = T && null != k, G = U && "top" === P, B = U && "bottom" === P, {
    applicationSubscriptionListingsShown: V
  } = (0, u.default)({
    applicationId: C.id,
    groupListingId: C.primary_sku_id,
    guildId: O
  }), z = (0, l.jsxs)("article", {
    children: [(0, l.jsxs)("div", {
      className: h.topWrapper,
      children: [(0, l.jsx)("img", {
        className: h.icon,
        alt: "",
        "aria-hidden": !0,
        src: L,
        width: 48,
        height: 48
      }), (0, l.jsxs)("div", {
        className: h.info,
        children: [(0, l.jsx)(c.Heading, {
          variant: "heading-md/medium",
          children: C.name
        }), (w || G) && (0, l.jsxs)("div", {
          className: h.details,
          children: [w ? (0, l.jsx)(c.Text, {
            tag: "span",
            color: "header-secondary",
            variant: S,
            children: k.name
          }) : null, G ? (0, l.jsxs)(l.Fragment, {
            children: [w ? (0, l.jsx)("span", {
              className: h.bullet,
              children: "•"
            }) : null, F, V ? (0, l.jsxs)("div", {
              className: h.premiumContainer,
              children: [(0, l.jsx)("span", {
                className: h.bullet,
                children: "•"
              }), (0, l.jsx)(o.default, {
                width: 16,
                height: 16
              }), (0, l.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: h.premiumText,
                children: f.default.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
              })]
            }) : null]
          }) : null]
        })]
      }), x ? (0, l.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        onClick: H,
        disabled: !M,
        children: f.default.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null]
    }), null != E || null != I ? (0, l.jsx)("div", {
      className: i()(I, h.__invalid_children),
      children: E
    }) : null, B ? (0, l.jsx)("div", {
      className: h.bottomGuildCountContainer,
      children: F
    }) : null]
  });
  return null != v ? (0, l.jsx)(c.Clickable, {
    tag: "li",
    onClick: () => v({
      mutualGuilds: Y
    }),
    className: i()(R, h.listing, h.clickable),
    ...D,
    children: z
  }) : (0, l.jsx)(c.FocusRing, {
    children: (0, l.jsx)("li", {
      className: i()(R, h.listing),
      ...D,
      children: z
    })
  })
}