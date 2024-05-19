"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("442837"),
  o = n("481060"),
  l = n("2052"),
  u = n("580552"),
  d = n("594174"),
  _ = n("346656"),
  c = n("466111"),
  E = n("74538"),
  I = n("588822"),
  T = n("659101"),
  f = n("981631"),
  S = n("689938"),
  h = n("404737"),
  A = n("379916");

function m(e) {
  let {
    guildName: t
  } = e;
  return (0, i.jsxs)("div", {
    className: h.guildMemberProfileTooltip,
    children: [(0, i.jsx)(c.default, {
      className: h.guildMemberProfileTooltipNitroWheel
    }), S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
      guildName: t
    })]
  })
}

function N(e) {
  let {
    guild: t,
    bio: r,
    hidePersonalInformation: c,
    isUsingGuildBio: N,
    lastSection: p = !1,
    animateOnHover: O = !1,
    isHovering: C = !1,
    lineClamp: R,
    userId: g
  } = e, {
    location: L
  } = (0, l.useAnalyticsContext)(), v = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()), D = E.default.canUsePremiumGuildMemberProfile(v), M = (0, u.default)(g);
  return (c || null == r || "" === r) && !M ? null : (0, i.jsxs)(T.default, {
    lastSection: p,
    children: [(0, i.jsxs)(o.Heading, {
      variant: "eyebrow",
      className: A.title,
      children: [S.default.Messages.USER_POPOUT_ABOUT_ME, null != t && N && (0, i.jsx)(o.Tooltip, {
        color: o.Tooltip.Colors.NESTED,
        tooltipClassName: h.aboutMeGuildIconTooltip,
        "aria-label": S.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
          guildName: t.name
        }),
        text: (0, i.jsx)(m, {
          guildName: t.name
        }),
        children: e => (0, i.jsx)(_.default, {
          ...e,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t(), null != v && !D && (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await n.e("84509").then(n.bind(n, "933696"));
              return t => (0, i.jsx)(e, {
                ...t,
                source: {
                  ...L,
                  object: f.AnalyticsObjects.GUILD_ICON
                }
              })
            })
          },
          guild: t,
          size: _.default.Sizes.SMOL,
          className: a()(h.aboutMeGuildIcon, {
            [h.nonPremiumHoverState]: !D
          })
        })
      })]
    }), (0, i.jsx)(I.default, {
      userBio: r,
      animateOnHover: O,
      isHovering: C,
      lineClamp: R,
      userId: g
    })]
  })
}