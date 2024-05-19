"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("531057"),
  u = n("149020"),
  d = n("8386"),
  c = n("738232"),
  f = n("376644"),
  E = n("481060"),
  h = n("963202"),
  _ = n("105671"),
  C = n("92373"),
  m = n("207796"),
  S = n("308083"),
  p = n("689938"),
  g = n("683391");

function I(e) {
  let {
    icon: t,
    text: n,
    ariaLabel: s,
    tooltip: l,
    onClick: r,
    isActive: u,
    autoWidth: d = !1
  } = e;
  return (0, a.jsx)(E.Tooltip, {
    text: l,
    position: "bottom",
    "aria-label": s,
    shouldShow: u,
    tooltipClassName: i()(g.filterTooltip, {
      [g.filterTooltipAutoWidth]: d
    }),
    tooltipContentClassName: g.filterTooltipContent,
    children: e => (0, a.jsxs)(E.Button, {
      ...e,
      className: i()(g.filterPill, {
        [g.filterPillActive]: u
      }),
      innerClassName: g.filterPillContents,
      look: E.ButtonLooks.OUTLINED,
      color: E.ButtonColors.CUSTOM,
      onClick: r,
      children: [t, (0, a.jsxs)("div", {
        className: g.filterPillText,
        children: [(0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: n
        }), (0, a.jsx)(o.ChevronSmallDownIcon, {
          className: g.chevron,
          color: "currentColor"
        })]
      })]
    })
  })
}

function T() {
  var e;
  let t = (0, m.useClanDiscoveryUIStore)(e => e.selectedGames, r.default),
    n = s.useCallback(() => {
      (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.GAMES)
    }, []),
    l = null !== (e = (0, _.useFormattedGameNames)(t)) && void 0 !== e ? e : "",
    i = t.slice(0, 2),
    o = t.length - 2,
    d = (0, a.jsxs)("div", {
      className: g.gamesTooltip,
      children: [i.map(e => (0, a.jsx)(C.default, {
        applicationId: e
      }, e)), o > 0 && (0, a.jsx)(C.default, {
        applicationId: t[2],
        remainingGame: o
      })]
    }),
    c = (0, a.jsx)(u.GameControllerIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(I, {
    icon: c,
    text: p.default.Messages.CLAN_DISCOVERY_GAME_FILTER.format({
      count: t.length
    }),
    tooltip: d,
    onClick: n,
    isActive: t.length > 0,
    ariaLabel: l,
    autoWidth: !0
  })
}

function A() {
  let e = s.useMemo(S.getPlaystyleOptions, []),
    t = (0, m.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, r.default),
    n = null != t ? e[t] : null,
    l = null == n ? void 0 : n.title,
    i = s.useCallback(() => {
      (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.PLAYSTYLE)
    }, []);
  if (null == n || null == l) return null;
  let o = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.Heading, {
        variant: "heading-xxl/medium",
        children: n.emoji
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(E.Heading, {
          variant: "heading-md/medium",
          children: n.title
        }), (0, a.jsx)(E.Text, {
          variant: "text-xs/normal",
          children: n.subtitle
        })]
      })]
    }),
    u = (0, a.jsx)(c.ReactionIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(I, {
    icon: u,
    text: l,
    tooltip: o,
    onClick: i,
    isActive: null != n,
    ariaLabel: l
  })
}

function N() {
  let e = (0, m.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default),
    t = s.useCallback(() => {
      (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.TRAITS)
    }, []);
  if (null == e) return null;
  let n = (0, a.jsx)("div", {
      className: g.traitsTooltip,
      children: e.map(e => (0, a.jsx)("div", {
        className: g.trait,
        children: (0, a.jsx)(E.Text, {
          variant: "text-xs/medium",
          color: "none",
          children: e
        })
      }, e))
    }),
    l = (0, a.jsx)(f.TagIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    });
  return (0, a.jsx)(I, {
    icon: l,
    text: p.default.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
    tooltip: n,
    onClick: t,
    isActive: e.length > 0,
    ariaLabel: e.join(", ")
  })
}

function v() {
  let {
    enableClanCreation: e
  } = (0, h.useClanPrepilotExperimentForAllGuilds)({
    location: "clan_discovery_add_clan",
    includeConverted: !1
  });
  return e ? (0, a.jsxs)(E.Clickable, {
    className: i()(g.buttonPill),
    onClick: () => (0, m.setClanDiscoveryMode)(m.ClanDiscoveryMode.ADMIN_UPSELL),
    children: [(0, a.jsx)(d.PlusSmallIcon, {
      className: g.filterPillIcon,
      color: "currentColor"
    }), (0, a.jsx)("div", {
      className: g.filterPillText,
      children: (0, a.jsx)(E.Text, {
        variant: "text-xs/medium",
        color: "none",
        children: p.default.Messages.CLAN_DISCOVERY_ADD_CLAN
      })
    })]
  }) : null
}
t.default = function() {
  return (0, a.jsxs)("div", {
    className: g.toolbar,
    children: [(0, a.jsx)("div", {
      className: g.addClan,
      children: (0, a.jsx)(v, {})
    }), (0, a.jsxs)("div", {
      className: g.preferences,
      children: [(0, a.jsx)(T, {}), (0, a.jsx)(A, {}), (0, a.jsx)(N, {})]
    }), (0, a.jsx)("div", {
      className: g.actions
    })]
  })
}