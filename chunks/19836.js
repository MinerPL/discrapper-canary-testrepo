"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(2052),
  u = n(580552),
  _ = n(594174),
  d = n(346656),
  c = n(466111),
  E = n(74538),
  I = n(588822),
  T = n(659101),
  h = n(981631),
  S = n(689938),
  f = n(404737),
  N = n(379916);

function A(e) {
  let {
    guildName: t
  } = e;
  return (0, i.jsxs)("div", {
    className: f.guildMemberProfileTooltip,
    children: [(0, i.jsx)(c.Z, {
      className: f.guildMemberProfileTooltipNitroWheel
    }), S.Z.Messages.GUILD_IDENTITY_BIO_TOAST.format({
      guildName: t
    })]
  })
}

function m(e) {
  let {
    guild: t,
    bio: r,
    hidePersonalInformation: c,
    isUsingGuildBio: m,
    lastSection: O = !1,
    animateOnHover: R = !1,
    isHovering: C = !1,
    lineClamp: p,
    userId: g
  } = e, {
    location: L
  } = (0, l.O)(), v = (0, o.e7)([_.default], () => _.default.getCurrentUser()), D = E.ZP.canUsePremiumGuildMemberProfile(v), M = (0, u.Z)(g);
  return (c || null == r || "" === r) && !M ? null : (0, i.jsxs)(T.Z, {
    lastSection: O,
    children: [(0, i.jsxs)(a.Heading, {
      variant: "eyebrow",
      className: N.title,
      children: [S.Z.Messages.USER_POPOUT_ABOUT_ME, null != t && m && (0, i.jsx)(a.Tooltip, {
        color: a.Tooltip.Colors.NESTED,
        tooltipClassName: f.aboutMeGuildIconTooltip,
        "aria-label": S.Z.Messages.GUILD_IDENTITY_BIO_TOAST.format({
          guildName: t.name
        }),
        text: (0, i.jsx)(A, {
          guildName: t.name
        }),
        children: e => (0, i.jsx)(d.Z, {
          ...e,
          onClick: () => {
            var t;
            null == (t = e.onClick) || t(), null != v && !D && (0, a.openModalLazy)(async () => {
              let {
                default: e
              } = await n.e("84509").then(n.bind(n, 933696));
              return t => (0, i.jsx)(e, {
                ...t,
                source: {
                  ...L,
                  object: h.qAy.GUILD_ICON
                }
              })
            })
          },
          guild: t,
          size: d.Z.Sizes.SMOL,
          className: s()(f.aboutMeGuildIcon, {
            [f.nonPremiumHoverState]: !D
          })
        })
      })]
    }), (0, i.jsx)(I.Z, {
      userBio: r,
      animateOnHover: R,
      isHovering: C,
      lineClamp: p,
      userId: g
    })]
  })
}