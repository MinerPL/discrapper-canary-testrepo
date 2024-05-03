"use strict";
n.r(t), n.d(t, {
  CharterScrollGameSection: function() {
    return v
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("913527"),
  o = n.n(r),
  u = n("718017"),
  d = n("442837"),
  c = n("481060"),
  f = n("430824"),
  h = n("594174"),
  m = n("650461"),
  p = n("353093"),
  E = n("105671"),
  C = n("287679"),
  g = n("979264"),
  S = n("550271"),
  _ = n("116175"),
  T = n("308083"),
  I = n("689938"),
  A = n("156610");

function N(e) {
  let {
    tag: t,
    badge: n,
    primaryColor: l,
    secondaryColor: s
  } = e;
  return null == t || 0 === t.length ? (0, a.jsx)(C.default, {
    height: 41,
    width: 41,
    className: A.placeholderIcon
  }) : (0, a.jsx)(g.BaseClanTagChiplet, {
    className: A.charterClanTag,
    clanTag: t,
    textVariant: "heading-lg/semibold",
    textColor: "text-normal",
    badgeSize: T.ClanTagBadgeSize.SIZE_24,
    clanBadge: (0, a.jsx)(S.ClanBadge, {
      className: A.charterClanBadge,
      badge: n,
      width: T.ClanTagBadgeSize.SIZE_24,
      height: T.ClanTagBadgeSize.SIZE_24,
      primaryTintColor: l,
      secondaryTintColor: s
    })
  })
}

function v(e) {
  let {
    applicationIds: t,
    playstyle: n,
    className: s
  } = e, r = l.useMemo(() => Array.from(t), [t]), o = (0, E.useFormattedGameNames)(r), u = l.useMemo(() => {
    if (null == o) return null;
    let e = (0, T.getPlaystyleTitle)(n);
    return null == e ? I.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({
      games: o
    }) : I.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
      playstyle: e,
      games: o
    })
  }, [o, n]);
  return (0, a.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: i()(A.overviewText, s),
    children: null == u ? I.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : u
  })
}
t.default = e => {
  var t;
  let {
    guildId: n,
    signed: s,
    setSigned: r,
    animatedTextStyle: E,
    signRef: C
  } = e, g = (0, d.useStateFromStores)([f.default], () => {
    var e, t;
    return null !== (t = null === (e = f.default.getGuild(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), {
    gameApplicationIds: S,
    playstyle: x,
    interests: M,
    tag: R,
    badgeKind: L,
    badgePrimaryColor: y,
    badgeSecondaryColor: O
  } = (0, d.useStateFromStoresObject)([m.default], () => {
    var e;
    return null !== (e = m.default.getStateForGuild(n).progress) && void 0 !== e ? e : m.DEFAULT_CLAN_PROGRESS
  }), j = l.useMemo(() => (null == M ? void 0 : M.size) > 0 ? (0, p.formatSelectionList)(Array.from(M), T.MAX_TRAITS_TO_DISPLAY) : null, [M]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: A.scrollBg,
      children: [(0, a.jsx)("div", {
        className: A.scrollBgTop
      }), (0, a.jsx)("div", {
        className: A.scrollBgBottom
      })]
    }), (0, a.jsx)(u.animated.div, {
      className: A.overviewSidebarWrapper,
      style: E,
      children: (0, a.jsxs)(c.ScrollerNone, {
        fade: !0,
        className: A.overviewSidebarContent,
        children: [(0, a.jsx)(N, {
          tag: R,
          badge: L,
          primaryColor: null != y ? y : _.CLAN_BADGE_PRIMARY_DEFAULT,
          secondaryColor: null != O ? O : _.CLAN_BADGE_SECONDARY_DEFAULT
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/normal",
          color: "text-muted",
          className: A.overviewHeaderPrelude,
          children: I.default.Messages.CLAN_SETUP_OVERVIEW_TITLE
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          color: "interactive-active",
          className: A.overviewGuildName,
          children: g
        }), (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: A.overviewText,
          children: I.default.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({
            date: o()().format("MMMM YYYY")
          })
        }), (0, a.jsx)(v, {
          applicationIds: S,
          playstyle: x
        }), null != j ? (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: A.overviewText,
          children: I.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({
            traits: j
          })
        }) : null, (0, a.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: A.overviewText,
          children: I.default.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
        }), (0, a.jsxs)(c.Clickable, {
          onClick: () => {
            null == r || r(!0)
          },
          className: i()(A.signatureBlock, {
            [A.clickable]: null != r
          }),
          children: [(0, a.jsx)("div", {
            ref: C
          }), (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "none",
            children: "x"
          }), s ? (0, a.jsx)(c.Text, {
            variant: "text-lg/normal",
            color: "header-primary",
            className: A.signatureText,
            children: null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.username
          }) : (0, a.jsx)(c.Text, {
            variant: "text-lg/normal",
            color: "none",
            className: A.signatureText,
            children: I.default.Messages.CLAN_SETUP_OVERVIEW_SIGNATURE
          })]
        })]
      })
    })]
  })
}