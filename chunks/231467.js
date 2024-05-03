"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryCardTraits: function() {
    return v
  },
  ClanDiscoveryCardView: function() {
    return M
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("442837"),
  u = n("835473"),
  d = n("353093"),
  _ = n("728257"),
  c = n("114487"),
  E = n("550271"),
  I = n("175557"),
  T = n("937111"),
  f = n("703656"),
  S = n("271383"),
  h = n("594174"),
  A = n("626135"),
  m = n("768581"),
  N = n("524989"),
  p = n("981631"),
  O = n("308083"),
  R = n("689938"),
  C = n("228706");

function g(e) {
  let {
    clan: t
  } = e, {
    wildcardDescriptors: n,
    branding: {
      primaryColor: a
    }
  } = t, s = n.filter(e => e !== O.EMPTY_WILDCARD).join(", "), l = (0, _.useColorIsLowContrastAgainstClientBackground)(a), u = r.useRef(null), [d, c] = r.useState(!1);
  if (r.useEffect(() => {
      let e = u.current;
      null != e && null != e.offsetWidth && null != e.scrollWidth && c(e.offsetWidth < e.scrollWidth)
    }, []), 0 === s.length) return null;
  let E = {
    color: l ? "var(--text-normal)" : a
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      className: C.clanInfoItem,
      children: "\xb7"
    }), (0, i.jsx)(o.Tooltip, {
      text: s,
      color: o.Tooltip.Colors.PRIMARY,
      shouldShow: d,
      children: e => (0, i.jsx)("span", {
        ...e,
        style: E,
        className: C.wildCardText,
        ref: u,
        children: s
      })
    })]
  })
}

function L(e) {
  let {
    trait: t,
    isHighlighted: n
  } = e;
  return (0, i.jsx)("div", {
    className: s()(C.trait, {
      [C.highlightedTrait]: n
    }),
    children: (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      lineClamp: 1,
      children: t
    })
  })
}

function v(e) {
  let {
    traits: t,
    traitsToHighlight: n,
    expanded: a
  } = e, s = r.useMemo(() => new Set(n), [n]);
  return a ? (0, i.jsx)("div", {
    className: C.expandedTraitsContainer,
    children: t.map(e => (0, i.jsx)(L, {
      trait: e,
      isHighlighted: s.has(e)
    }, e))
  }) : (0, i.jsx)(N.default, {
    items: t,
    renderItem: e => (0, i.jsx)(L, {
      trait: e,
      isHighlighted: s.has(e)
    }, e),
    renderOverflow: e => (0, i.jsx)(o.Tooltip, {
      text: (0, i.jsx)("div", {
        className: C.overflowTooltip,
        children: e.map(e => (0, i.jsx)("div", {
          className: C.trait,
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
        className: C.trait,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: R.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
            count: e.length
          })
        })
      })
    }),
    maxLines: 2,
    className: C.traitsContainer
  })
}

function D(e) {
  let {
    games: t
  } = e, n = t.filter(e => null != e && null != e.icon), a = n.slice(0, 3), s = r.useMemo(() => {
    let e = n[3];
    if (null == e) return null;
    let t = e.getIconURL(24);
    if (null == t) return null;
    if (n.length > 4) {
      let r = n.slice(3).map(e => e.name),
        a = (0, d.formatSelectionList)(r);
      return (0, i.jsx)(o.Tooltip, {
        text: a,
        position: "bottom",
        children: n => (0, i.jsxs)("div", {
          ...n,
          className: C.cardFooterGame,
          children: [(0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: C.cardFooterGameImg
          }), (0, i.jsx)("div", {
            className: C.cardFooterOtherCount,
            children: (0, i.jsx)(o.Text, {
              variant: "text-xs/medium",
              color: "always-white",
              children: "+".concat(r.length)
            })
          })]
        })
      })
    }
    return (0, i.jsx)(o.Tooltip, {
      text: e.name,
      position: "bottom",
      children: n => (0, i.jsx)("div", {
        ...n,
        className: C.cardFooterGame,
        children: (0, i.jsx)("img", {
          src: t,
          alt: e.name,
          className: C.cardFooterGameImg
        })
      })
    })
  }, [n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [a.map(e => {
      let t = e.getIconURL(24);
      return null == t ? null : (0, i.jsx)(o.Tooltip, {
        text: e.name,
        position: "bottom",
        children: n => (0, i.jsx)("div", {
          ...n,
          className: C.cardFooterGame,
          children: (0, i.jsx)("img", {
            src: t,
            alt: e.name,
            className: C.cardFooterGameImg
          })
        })
      }, e.id)
    }), s]
  })
}

function M(e) {
  var t, n;
  let {
    clan: r,
    bannerComponent: a,
    expanded: l,
    isMember: d,
    traitsToHighlight: _,
    className: T,
    showBrandingFooter: f = !1
  } = e, {
    tag: S,
    badge: h,
    branding: {
      primaryColor: A,
      secondaryColor: N
    },
    banner: p
  } = r, L = (0, u.default)(r.games), M = R.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
    count: r.memberCount
  }), y = null !== (t = m.default.getGuildIconURL({
    id: r.id,
    icon: r.icon,
    size: 64,
    canAnimate: !0
  })) && void 0 !== t ? t : void 0;
  return (0, i.jsxs)("div", {
    className: s()(C.card, T),
    children: [(0, i.jsx)("div", {
      className: C.cardBrandingHeader,
      style: {
        background: "linear-gradient(90deg, ".concat(A, ", ").concat(N, ")")
      },
      children: null != a ? a : (0, i.jsx)(I.default, {
        banner: p,
        primaryTintColor: A,
        secondaryTintColor: N
      })
    }), (0, i.jsxs)("div", {
      className: C.cardContent,
      children: [(0, i.jsxs)("div", {
        className: C.cardContentTitleSection,
        children: [(0, i.jsxs)("div", {
          className: C.cardNameAndTagWrapper,
          children: [(0, i.jsx)(c.ClanGuildIconSimple, {
            guildName: r.name,
            guildIconURL: y,
            iconSize: 64,
            className: C.clanIcon
          }), (0, i.jsx)("div", {
            className: C.clanTagChipletWrapper,
            children: (0, i.jsx)(o.Tooltip, {
              text: R.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
              position: "top",
              shouldShow: !d,
              children: e => (0, i.jsxs)("div", {
                ...e,
                className: C.clanTagChiplet,
                children: [(0, i.jsx)(E.ClanBadge, {
                  width: 16,
                  height: 16,
                  badge: h.badgeKind,
                  primaryTintColor: h.primaryColor,
                  secondaryTintColor: h.secondaryColor
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  color: "text-primary",
                  children: S
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
          className: C.clanInfoRow,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-xxs/normal",
            className: C.clanInfoItem,
            children: (0, i.jsx)("span", {
              role: "img",
              "aria-label": R.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
              children: "\uD83C\uDFAE"
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: C.clanInfoItem,
            children: null !== (n = (0, O.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : R.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
          }), (0, i.jsx)(g, {
            clan: r
          })]
        })]
      }), (0, i.jsx)("div", {
        className: C.cardContentDescriptionSection,
        children: (0, i.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: r.description
        })
      }), (0, i.jsx)(v, {
        traits: (0, O.getSortedTraits)(r.traits, _),
        expanded: l,
        traitsToHighlight: _
      })]
    }), (0, i.jsxs)("div", {
      className: C.cardFooter,
      children: [(0, i.jsx)("div", {
        className: C.cardFooterInfo,
        children: (0, i.jsx)("div", {
          className: C.cardFooterMembers,
          children: (0, i.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: M
          })
        })
      }), (0, i.jsx)("div", {
        className: C.cardFooterGames,
        children: (0, i.jsx)(D, {
          games: L
        })
      })]
    }), f && (0, i.jsx)("div", {
      className: C.cardBrandingFooter,
      style: {
        background: "linear-gradient(90deg, ".concat(A, ", ").concat(N, ")")
      }
    })]
  })
}
t.default = function(e) {
  let {
    clan: t,
    affinity: a,
    index: s
  } = e, u = (0, l.useStateFromStores)([h.default], () => h.default.getCurrentUser()), d = (0, l.useStateFromStores)([S.default], () => S.default.isMember(t.id, null == u ? void 0 : u.id), [t, u]), _ = r.useCallback(() => {
    let e = null != T.default.getRequest(t.id);
    if (A.default.track(p.AnalyticEvents.CLAN_DISCOVERY_CARD_CLICKED, {
        guild_id: t.id,
        is_member: d,
        has_join_request: e,
        affinity: a,
        index: s
      }), d) {
      (0, f.transitionToGuild)(t.id);
      return
    }
    if (e) {
      (0, f.transitionTo)(p.Routes.GUILD_MEMBER_VERIFICATION(t.id));
      return
    }(0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
      return n => (0, i.jsx)(e, {
        ...n,
        clan: t
      })
    })
  }, [t, d, a, s]);
  return (0, i.jsx)(o.Clickable, {
    onClick: _,
    className: C.clickableCard,
    children: (0, i.jsx)(M, {
      ...e,
      isMember: d,
      showBrandingFooter: !0
    })
  })
}