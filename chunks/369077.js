"use strict";
s.r(t), s.d(t, {
  UserProfileClanContainer: function() {
    return C
  },
  UserProfileClanRow: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060");
s("502762"), s("659101");
var d = s("594174"),
  u = s("768581"),
  c = s("931240"),
  S = s("353093"),
  E = s("891728"),
  T = s("438365"),
  f = s("114487"),
  m = s("219039"),
  _ = s("979264"),
  g = s("308083"),
  h = s("689938"),
  I = s("963422");

function N(e) {
  let {
    className: t,
    userClanTag: s,
    userClanBadge: l,
    onTagClick: r,
    guildId: d,
    guildName: c,
    guildIcon: E,
    guildIconSize: T,
    memberCount: h
  } = e, N = n.useMemo(() => u.default.getGuildIconURL({
    id: d,
    icon: E,
    size: T,
    canAnimate: !0
  }), [d, E, T]), p = n.useRef(null), [C, A] = n.useState(!1);
  n.useEffect(() => {
    let e = p.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && A(e.offsetWidth < e.scrollWidth)
  }, []);
  let O = (0, S.getClanBadgeUrl)(d, l, g.ClanTagBadgeSize.SIZE_16);
  return (0, a.jsxs)("div", {
    className: i()(I.container, t),
    children: [(0, a.jsx)(f.ClanGuildIconSimple, {
      className: I.icon,
      guildName: c,
      guildIconURL: N,
      iconSize: T
    }), (0, a.jsxs)("div", {
      className: I.details,
      children: [(0, a.jsx)(o.Tooltip, {
        text: c,
        color: o.Tooltip.Colors.PRIMARY,
        shouldShow: C,
        children: e => (0, a.jsx)("span", {
          ref: p,
          ...e,
          className: I.guildName,
          children: c
        })
      }), null != h && (0, a.jsx)(m.default, {
        count: h
      })]
    }), (0, a.jsx)("div", {
      className: I.tagContainer,
      children: (0, a.jsx)(_.BaseClanTagChiplet, {
        className: I.tag,
        clanTag: s,
        clanBadge: O,
        onClick: r,
        badgeSize: g.ClanTagBadgeSize.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/medium"
      })
    })]
  })
}

function p(e) {
  let {
    userClanTag: t,
    userClanBadge: l,
    guildId: i,
    guildName: u,
    guildIcon: T,
    clan: f
  } = e, m = (0, E.useCurrentUserAvailableClanIds)(), _ = (0, r.useStateFromStores)([d.default], () => {
    var e;
    return (0, S.getUserClanData)(null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), g = n.useMemo(() => {
    if (i !== _) {
      if (m.has(i)) return () => {
        (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
          ...e,
          header: h.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: h.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: h.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, c.adoptClanIdentity)(i, !0)
          },
          children: (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: h.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: u
            })
          })
        }))
      };
      if (null != f) return () => (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("81319")]).then(s.bind(s, "767593"));
        return t => (0, a.jsx)(e, {
          ...t,
          clan: f
        })
      })
    }
  }, [m, f, _, i, u]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Heading, {
      className: I.header,
      variant: "eyebrow",
      children: h.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, a.jsx)(N, {
      className: I.profileContainer,
      userClanTag: t,
      userClanBadge: l,
      onTagClick: g,
      guildName: u,
      guildId: i,
      guildIcon: T,
      guildIconSize: 40,
      memberCount: null == f ? void 0 : f.memberCount
    })]
  })
}

function C(e) {
  let {
    userId: t,
    wrapChildren: s
  } = e, {
    userClanTag: n,
    userClanBadge: l,
    guildId: i,
    guildName: r,
    guildIcon: o,
    clan: d
  } = (0, T.useUserSelectedClan)({
    userId: t
  });
  if (null == n || null == i || null == r) return null;
  let u = (0, a.jsx)(p, {
    userClanTag: n,
    userClanBadge: l,
    guildId: i,
    guildName: r,
    guildIcon: o,
    clan: d
  });
  return null != s ? (0, a.jsx)(a.Fragment, {
    children: s(u)
  }) : u
}