"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return M
  },
  ClanDiscoveryCardView: function() {
    return y
  },
  Wildcards: function() {
    return v
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("442837"),
  u = n("835473"),
  d = n("970606"),
  _ = n("905362"),
  c = n("603368"),
  E = n("353093"),
  I = n("169559"),
  T = n("114487"),
  f = n("550271"),
  S = n("937111"),
  h = n("703656"),
  A = n("271383"),
  m = n("594174"),
  N = n("768581"),
  p = n("778045"),
  O = n("524989"),
  C = n("981631"),
  R = n("308083"),
  g = n("689938"),
  L = n("449729");

function v(e) {
  let {
    wildcardDescriptors: t,
    primaryColor: n
  } = e, a = t.filter(e => e !== R.EMPTY_WILDCARD).join(", "), s = (0, o.useToken)(o.tokens.colors.BACKGROUND_FLOATING), l = (0, c.getAccessibleClanColor)(n, s.hex()), u = r.useRef(null), [d, _] = r.useState(!1);
  if (r.useEffect(() => {
      let e = u.current;
      null != e && null != e.offsetWidth && null != e.scrollWidth && _(e.offsetWidth < e.scrollWidth)
    }, []), 0 === a.length) return null;
  let E = null != l ? {
    color: l.css()
  } : void 0;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: L.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(o.Tooltip, {
      text: a,
      color: o.Tooltip.Colors.PRIMARY,
      shouldShow: d,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: E,
        className: L.wildCardText,
        ref: u,
        children: a
      })
    })]
  })
}

function D(e) {
  let {
    trait: t,
    isHighlighted: n,
    className: r
  } = e;
  return (0, i.jsx)("div", {
    className: s()(r, L.trait, {
      [L.highlightedTrait]: n
    }),
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      lineClamp: 1,
      children: t
    })
  })
}

function M(e) {
  let {
    traits: t,
    traitsToHighlight: n,
    expanded: a,
    traitClassName: s
  } = e, l = r.useMemo(() => new Set(n), [n]);
  return a ? (0, i.jsx)("div", {
    className: L.expandedTraitsContainer,
    children: t.map(e => (0, i.jsx)(D, {
      className: s,
      trait: e,
      isHighlighted: l.has(e)
    }, e))
  }) : (0, i.jsx)(O.default, {
    items: t,
    renderItem: e => (0, i.jsx)(D, {
      trait: e,
      isHighlighted: l.has(e)
    }, e),
    renderOverflow: e => (0, i.jsx)(o.Tooltip, {
      text: (0, i.jsx)("div", {
        className: L.overflowTooltip,
        children: e.map(e => (0, i.jsx)("div", {
          className: L.trait,
          children: (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-normal",
            lineClamp: 1,
            children: e
          })
        }, e))
      }),
      "aria-label": "overflow",
      children: t => (0, i.jsx)("div", {
        ...t,
        className: L.trait,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: g.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: e.length
          })
        })
      })
    }),
    maxLines: 2,
    className: L.traitsContainer
  })
}

function y(e) {
  var t, n;
  let {
    clan: r,
    bannerComponent: a,
    expanded: l,
    isMember: d,
    traitsToHighlight: _,
    prioritizedGameIds: c,
    className: S,
    showBrandingFooter: h = !1,
    bannerUrl: A
  } = e, {
    tag: m,
    badge: O,
    branding: {
      primaryColor: C,
      secondaryColor: D
    },
    bannerHash: y
  } = r, P = (0, u.default)(r.games), U = (0, I.default)("clan_discovery_card"), b = g.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), G = null !== (t = N.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0, w = null != A ? A : (0, E.getClanBannerUrl)(r.id, y), k = null == a && null == w ? {
    background: "linear-gradient(90deg, ".concat(C, ", ").concat(D, ")")
  } : void 0, B = null != a ? a : null != w ? (0, i.jsx)("img", {
    alt: g.default.Messages.CLAN_LOOK_BANNER,
    src: w,
    className: L.bannerImage
  }) : null;
  return (0, i.jsxs)("div", {
    className: s()(L.card, S),
    children: [(0, i.jsx)("div", {
      className: L.cardBrandingHeader,
      style: k,
      children: B
    }), (0, i.jsxs)("div", {
      className: L.cardContent,
      children: [(0, i.jsxs)("div", {
        className: L.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: L.cardNameAndTagWrapper,
          children: [(0, i.jsx)(T.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: G,
            iconSize: 64,
            className: L.clanIcon
          }), (0, i.jsx)("div", {
            className: L.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: g.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !d && U,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: L.clanTagChiplet,
                children: [(0, i.jsx)(f.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: O.badgeKind,
                  primaryTintColor: O.primaryColor,
                  secondaryTintColor: O.secondaryColor
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: m
                })]
              })
            })
          })]
        }), (0, i.jsx)(o.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: r.name
        }), (0, i.jsxs)("div", {
          className: L.clanInfoRow,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-xxs/normal",
            className: L.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": g.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: L.clanInfoItem,
            children: null !== (n = (0, R.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : g.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(v, {
            wildcardDescriptors: r.wildcardDescriptors,
            primaryColor: r.branding.primaryColor
          })]
        })]
      }), (0, i.jsx)("div", {
        className: L.cardContentDescriptionSection,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: r.description
        })
      }), (0, i.jsx)(M, {
        traits: (0, R.getSortedTraits)(r.traits, _),
        expanded: l,
        traitsToHighlight: _
      })]
    }), (0, i.jsxs)("div", {
      className: L.cardFooter,
      children: [(0, i.jsx)("div", {
        className: L.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: L.cardFooterMembers,
          children: (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: b
          })
        })
      }), (0, i.jsx)("div", {
        className: L.cardFooterGames,
        children: (0, i.jsx)(p.default, {
          games: P,
          prioritizedGameIds: c
        })
      })]
    }), h && (0, i.jsx)("div", {
      className: L.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(C, ", ").concat(D, ")")
      }
    })]
  })
}
t.default = function(e) {
  let {
    style: t,
    prioritizedGameIds: n,
    ...a
  } = e, {
    clan: s,
    affinity: u,
    index: c,
    source: E
  } = a, I = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), T = (0, l.useStateFromStores)([A.default], () => A.default.isMember(s.id, null == I ? void 0 : I.id), [s, I]), f = r.useCallback(() => {
    let e = null != S.default.getRequest(s.id);
    if ((0, d.trackClanDiscoveryCardClicked)({
        guildId: s.id,
        isMember: T,
        hasJoinRequest: e,
        affinity: u,
        index: c
      }), T) {
      (0, h.transitionToGuild)(s.id);
      return
    }
    if (e) {
      (0, h.transitionTo)(C.Routes.GUILD_MEMBER_VERIFICATION(s.id));
      return
    }(0, _.openClanApplyFlow)(s.id, s, {
      source: E,
      location: C.AnalyticsLocations.CLAN_DISCOVERY_CARD
    }, n)
  }, [s, T, u, c, E, n]);
  return (0, i.jsx)(o.Clickable, {
    onClick: f,
    className: L.clickableCard,
    style: t,
    children: (0, i.jsx)(y, {
      ...a,
      isMember: T,
      prioritizedGameIds: n,
      showBrandingFooter: !0
    })
  })
}