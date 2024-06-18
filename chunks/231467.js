"use strict";
n.d(t, {
  cS: function() {
    return b
  },
  xV: function() {
    return B
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(903788),
  l = n(310665),
  u = n(194565),
  _ = n(481060),
  d = n(442837),
  c = n(239091),
  E = n(835473),
  I = n(970606),
  T = n(905362),
  h = n(603368),
  S = n(353093),
  f = n(169559),
  N = n(114487),
  A = n(214715),
  m = n(550271),
  O = n(246364),
  R = n(937111),
  C = n(703656),
  p = n(271383),
  g = n(594174),
  L = n(806519),
  v = n(778045),
  D = n(355932),
  M = n(981631),
  P = n(308083),
  y = n(689938),
  U = n(449729);

function b(e) {
  let {
    wildcardDescriptors: t,
    primaryColor: n
  } = e, s = t.filter(e => e !== P.U6).join(", "), o = (0, _.useToken)(_.tokens.colors.BACKGROUND_FLOATING), a = (0, h.pX)(n, o.hex()), l = r.useRef(null), [u, d] = r.useState(!1);
  if (r.useEffect(() => {
      let e = l.current;
      null != e && null != e.offsetWidth && null != e.scrollWidth && d(e.offsetWidth < e.scrollWidth)
    }, []), 0 === s.length) return null;
  let c = null != a ? {
    color: a.css()
  } : void 0;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: U.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(_.Tooltip, {
      text: s,
      color: _.Tooltip.Colors.PRIMARY,
      shouldShow: u,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: c,
        className: U.wildCardText,
        ref: l,
        children: s
      })
    })]
  })
}

function G(e) {
  let {
    description: t,
    expanded: n
  } = e;
  return null == t ? null : n ? (0, i.jsx)("div", {
    className: U.cardContentDescriptionSection,
    children: (0, i.jsx)(_.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: t
    })
  }) : (0, i.jsx)("div", {
    className: U.cardContentDescriptionSection,
    children: (0, i.jsx)(_.Text, {
      className: U.cardContentDescriptionCollapsed,
      variant: "text-xs/normal",
      color: "text-muted",
      lineClamp: 4,
      children: t
    })
  })
}

function w(e) {
  let {
    traits: t,
    traitsToHighlight: n
  } = e, s = r.useMemo(() => null == n ? new Set : new Set(n), [n]), a = r.useCallback(e => (0, i.jsx)(A.Z, {
    className: o()(U.thinTrait, {
      [U.selectedTrait]: s.has(e)
    }),
    text: e,
    selected: s.has(e)
  }, e), [s]);
  return (0, i.jsx)(D.Z, {
    className: U.traitsContainer,
    items: t,
    renderItem: a,
    maxLines: 2,
    itemGapPx: 4
  })
}

function k(e) {
  let {
    hasPendingJoinRequest: t,
    atMaxMemberCapacity: n,
    isGuildMember: r
  } = e;
  if (t) return (0, i.jsxs)("div", {
    className: U.headerBadge,
    children: [(0, i.jsx)(l.w, {
      width: 12,
      height: 12
    }), (0, i.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: y.Z.Messages.CLAN_CARD_BADGE_APPLIED
    })]
  });
  if (r) return (0, i.jsxs)("div", {
    className: U.headerBadge,
    children: [(0, i.jsx)(a.o, {
      width: 12,
      height: 12,
      color: _.tokens.colors.STATUS_POSITIVE
    }), (0, i.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: y.Z.Messages.JOINED_GUILD
    })]
  });
  if (n) return (0, i.jsxs)("div", {
    className: U.headerBadge,
    children: [(0, i.jsx)(u.m, {
      width: 12,
      height: 12
    }), (0, i.jsx)(_.Text, {
      variant: "text-xs/medium",
      color: "text-normal",
      children: y.Z.Messages.FULL
    })]
  });
  return null
}

function B(e) {
  var t;
  let {
    clan: n,
    bannerComponent: s,
    expanded: a,
    isMember: l = !1,
    traitsToHighlight: u,
    prioritizedGameIds: d,
    className: c,
    showBrandingFooter: I = !1,
    bannerUrl: T,
    onlyAnimateIconOnHover: h = !1,
    hasPendingJoinRequest: A = !1,
    atMaxMemberCapacity: O = !1
  } = e, {
    tag: R,
    badge: C,
    branding: {
      primaryColor: p,
      secondaryColor: g
    },
    bannerHash: D
  } = n, M = (0, E.Z)(n.games), B = (0, f.Z)("clan_discovery_card"), [x, V] = r.useState(!1), Z = r.useRef(null), [H, F] = r.useState(!1), Y = r.useCallback(() => {
    V(!0)
  }, []), j = r.useCallback(() => {
    V(!1)
  }, []), W = y.Z.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: n.memberCount
  }), K = null != T ? T : (0, S.pY)(n.id, D), z = null == s && null == K ? {
    background: "linear-gradient(90deg, ".concat(p, ", ").concat(g, ")")
  } : void 0, q = null != s ? s : null != K ? (0, i.jsx)("img", {
    alt: y.Z.Messages.CLAN_LOOK_BANNER,
    src: K,
    className: U.bannerImage
  }) : null, X = r.useMemo(() => (0, P.HR)(n.traits, u), [n.traits, u]);
  return r.useEffect(() => {
    let e = Z.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && F(e.offsetWidth < e.scrollWidth)
  }, []), (0, i.jsxs)("div", {
    className: o()(U.card, c, {
      [U.cardStaticHeight]: !a
    }),
    onMouseEnter: Y,
    onMouseLeave: j,
    children: [(0, i.jsxs)("div", {
      className: U.cardBrandingHeader,
      style: z,
      children: [q, (0, i.jsx)(k, {
        hasPendingJoinRequest: A,
        atMaxMemberCapacity: O,
        isGuildMember: l
      })]
    }), (0, i.jsxs)("div", {
      className: U.cardContent,
      children: [(0, i.jsxs)("div", {
        className: U.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: U.cardNameAndTagWrapper,
          children: [(0, i.jsx)(L.ZP, {
            mask: L.QS.CLAN_ICON,
            width: 70,
            height: 70,
            className: U.clanIconMask,
            children: (0, i.jsx)("div", {
              className: U.clanIconInner,
              children: (0, i.jsx)(N.b, {
                guildId: n.id,
                guildName: n.name,
                guildIcon: n.icon,
                iconSize: 64,
                animate: !h || x
              })
            })
          }), (0, i.jsx)("div", {
            className: U.clanTagChipletWrapper,
            children: (0, i.jsx)(_.Tooltip, {
              text: y.Z.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !l && B,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: U.clanTagChiplet,
                children: [(0, i.jsx)(m.A, {
                  width: 16,
                  height: 16,
                  badge: C.badgeKind,
                  primaryTintColor: C.primaryColor,
                  secondaryTintColor: C.secondaryColor
                }), (0, i.jsx)(_.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: R
                })]
              })
            })
          })]
        }), (0, i.jsx)(_.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: (0, i.jsx)(_.Tooltip, {
            text: n.name,
            color: _.Tooltip.Colors.PRIMARY,
            shouldShow: H,
            children: e => (0, i.jsx)("span", {
              ...e,
              ref: Z,
              className: U.nameText,
              children: n.name
            })
          })
        }), (0, i.jsxs)("div", {
          className: U.clanInfoRow,
          children: [(0, i.jsx)(_.Text, {
            variant: "text-xxs/normal",
            className: U.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": y.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: U.clanInfoItem,
            children: null !== (t = (0, P.mv)(n.playstyle)) && void 0 !== t ? t : y.Z.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(b, {
            wildcardDescriptors: n.wildcardDescriptors,
            primaryColor: n.branding.primaryColor
          })]
        })]
      }), (0, i.jsx)(G, {
        description: n.description,
        expanded: a
      }), (0, i.jsx)(w, {
        traits: X,
        traitsToHighlight: u
      })]
    }), (0, i.jsxs)("div", {
      className: U.cardFooter,
      children: [(0, i.jsx)("div", {
        className: U.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: U.cardFooterMembers,
          children: (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: W
          })
        })
      }), (0, i.jsx)("div", {
        className: U.cardFooterGames,
        children: (0, i.jsx)(v.Z, {
          games: M,
          prioritizedGameIds: d
        })
      })]
    }), I && (0, i.jsx)("div", {
      className: U.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(p, ", ").concat(g, ")")
      }
    })]
  })
}
t.ZP = 12633 == n.j ? function(e) {
  let {
    style: t,
    prioritizedGameIds: s,
    ...o
  } = e, {
    clan: a,
    affinity: l,
    index: u,
    source: E
  } = o, h = (0, d.e7)([g.default], () => g.default.getCurrentUser()), S = (0, d.e7)([p.ZP], () => p.ZP.isMember(a.id, null == h ? void 0 : h.id), [a, h]), f = (0, d.e7)([R.Z], () => {
    var e;
    return (null === (e = R.Z.getRequest(a.id)) || void 0 === e ? void 0 : e.applicationStatus) === O.wB.SUBMITTED
  }), N = a.memberCount >= P.Du, A = r.useCallback(() => {
    let e = null != R.Z.getRequest(a.id);
    if ((0, I.EK)({
        guildId: a.id,
        isMember: S,
        hasJoinRequest: e,
        affinity: l,
        index: u
      }), S) {
      (0, C.XU)(a.id);
      return
    }
    if (e) {
      (0, C.uL)(M.Z5c.GUILD_MEMBER_VERIFICATION(a.id));
      return
    }(0, T.q)(a.id, a, {
      source: E,
      location: M.Sbl.CLAN_DISCOVERY_CARD
    }, s)
  }, [a, S, l, u, E, s]), m = r.useCallback(e => {
    (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5577").then(n.bind(n, 955120));
      return t => (0, i.jsx)(e, {
        ...t,
        guildId: a.id
      })
    })
  }, [a.id]);
  return (0, i.jsx)(_.Clickable, {
    onClick: A,
    className: U.clickableCard,
    style: t,
    onContextMenu: m,
    children: (0, i.jsx)(B, {
      ...o,
      isMember: S,
      prioritizedGameIds: s,
      showBrandingFooter: !0,
      hasPendingJoinRequest: f,
      atMaxMemberCapacity: N
    })
  })
} : null