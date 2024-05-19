"use strict";
s.r(t), s.d(t, {
  UserProfileClanContainer: function() {
    return x
  },
  UserProfileClanRow: function() {
    return A
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("100527");
s("502762"), s("659101");
var u = s("594174"),
  c = s("768581"),
  S = s("931240"),
  E = s("905362"),
  T = s("353093"),
  f = s("891728"),
  _ = s("438365"),
  m = s("114487"),
  g = s("219039"),
  I = s("979264"),
  h = s("308083"),
  N = s("981631"),
  p = s("689938"),
  C = s("407020");

function A(e) {
  let {
    className: t,
    clanTag: s,
    clanBadge: l,
    onTagClick: r,
    guildId: d,
    guildName: u,
    guildIcon: S,
    guildIconSize: E,
    memberCount: f
  } = e, _ = n.useMemo(() => c.default.getGuildIconURL({
    id: d,
    icon: S,
    size: E,
    canAnimate: !0
  }), [d, S, E]), N = n.useRef(null), [p, A] = n.useState(!1);
  n.useEffect(() => {
    let e = N.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && A(e.offsetWidth < e.scrollWidth)
  }, []);
  let O = (0, T.getClanBadgeUrl)(d, l, h.ClanTagBadgeSize.SIZE_16);
  return (0, a.jsxs)("div", {
    className: i()(C.container, t),
    children: [(0, a.jsxs)("div", {
      className: C.guildPrefixContainer,
      children: [(0, a.jsx)(m.ClanGuildIconSimple, {
        guildName: u,
        guildIconURL: _,
        iconSize: E,
        className: C.guildPrefixIcon
      }), (0, a.jsxs)("div", {
        className: C.details,
        children: [(0, a.jsx)(o.Tooltip, {
          text: u,
          color: o.Tooltip.Colors.PRIMARY,
          shouldShow: p,
          children: e => (0, a.jsx)("span", {
            ref: N,
            ...e,
            className: C.guildName,
            children: u
          })
        }), null != f && (0, a.jsx)(g.default, {
          count: f
        })]
      })]
    }), (0, a.jsx)("div", {
      className: C.tagContainer,
      children: (0, a.jsx)(I.BaseClanTagChiplet, {
        className: C.tag,
        clanTag: s,
        clanBadge: O,
        onClick: r,
        badgeSize: h.ClanTagBadgeSize.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/medium",
        badgeClassName: C.badge
      })
    })]
  })
}

function O(e) {
  let {
    userClanTag: t,
    userClanBadge: s,
    guildId: l,
    guildName: i,
    guildIcon: c,
    clan: _,
    userId: m
  } = e, g = (0, f.useCurrentUserAvailableClanIds)(), I = (0, r.useStateFromStores)([u.default], () => {
    var e;
    return (0, T.getUserClanData)(null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), h = n.useMemo(() => {
    if (l !== I) {
      if (g.has(l)) return () => {
        (0, o.openModal)(e => (0, a.jsx)(o.ConfirmModal, {
          ...e,
          header: p.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA,
          confirmText: p.default.Messages.CLAN_USER_ADOPT_TAG_GUILD_PROFILE_CTA,
          confirmButtonColor: o.Button.Colors.BRAND,
          cancelText: p.default.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
          onConfirm: async () => {
            await (0, S.adoptClanIdentity)(l, !0, d.default.PROFILE_POPOUT)
          },
          children: (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: p.default.Messages.CLAN_USER_PROFILE_USE_CLAN_TAG.format({
              guildName: i
            })
          })
        }))
      };
      if (null != _) return () => {
        (0, E.openClanApplyFlow)(l, _, {
          source: N.AnalyticsSections.USER_PROFILE,
          location: d.default.CLAN_TAG,
          tagUserId: m
        })
      }
    }
  }, [g, _, I, l, i, m]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Heading, {
      className: C.header,
      variant: "eyebrow",
      children: p.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN
    }), (0, a.jsx)(A, {
      className: C.profileContainer,
      clanTag: t,
      clanBadge: s,
      onTagClick: h,
      guildName: i,
      guildId: l,
      guildIcon: c,
      guildIconSize: 40,
      memberCount: null == _ ? void 0 : _.memberCount
    })]
  })
}

function x(e) {
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
  } = (0, _.useUserSelectedClan)({
    userId: t
  });
  if (null == n || null == i || null == r) return null;
  let u = (0, a.jsx)(O, {
    userClanTag: n,
    userClanBadge: l,
    guildId: i,
    guildName: r,
    guildIcon: o,
    clan: d,
    userId: t
  });
  return null != s ? (0, a.jsx)(a.Fragment, {
    children: s(u)
  }) : u
}