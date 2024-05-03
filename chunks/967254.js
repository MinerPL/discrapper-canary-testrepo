"use strict";
a.r(t), a.d(t, {
  ConnectedSafetyHubViolationsContainer: function() {
    return R
  }
}), a("47120");
var n = a("735250"),
  i = a("470079"),
  s = a("120356"),
  l = a.n(s),
  u = a("442837"),
  r = a("495056"),
  o = a("481060"),
  c = a("259580"),
  d = a("499033"),
  _ = a("783539"),
  S = a("626135"),
  E = a("709054"),
  T = a("219230"),
  f = a("531441"),
  A = a("236289"),
  I = a("788080"),
  g = a("467432"),
  N = a("451284"),
  C = a("613734"),
  p = a("800530"),
  m = a("981631"),
  U = a("689938"),
  H = a("175951");
let h = e => {
    let {
      status: t,
      onClick: a,
      opened: i,
      count: s
    } = e;
    return (0, n.jsxs)(o.Clickable, {
      className: H.header,
      onClick: a,
      children: [(0, n.jsx)("div", {
        className: H.headerIconWrapper,
        children: (0, n.jsx)(r.WarningIcon, {
          color: "active" === t ? o.tokens.colors.INTERACTIVE_ACTIVE : o.tokens.colors.INTERACTIVE_MUTED,
          width: 24,
          height: 24
        })
      }), (0, n.jsxs)("div", {
        className: H.title,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-normal",
          children: "active" === t ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE_V2.format({
            count: s.toString()
          }) : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED_V2.format({
            count: s.toString()
          })
        }), (0, n.jsx)(o.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === t ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE_V2 : U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED_V2
        })]
      }), (0, n.jsx)("div", {
        className: H.caret,
        children: (0, n.jsx)(c.default, {
          width: 18,
          height: 18,
          direction: i ? c.default.Directions.UP : c.default.Directions.DOWN
        })
      })]
    })
  },
  x = () => (0, n.jsxs)("div", {
    className: H.emptyState,
    children: [(0, n.jsxs)("div", {
      className: H.iconContainer,
      children: [(0, n.jsx)("div", {
        className: H.iconBackground,
        children: (0, n.jsx)(_.default, {
          className: H.icon
        })
      }), (0, n.jsx)(d.default, {
        className: H.stars
      })]
    }), (0, n.jsx)(o.Heading, {
      variant: "heading-md/bold",
      className: H.emptyStateText,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
    }), (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: H.emptyStateSubtext,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
    })]
  }),
  O = () => (0, n.jsx)("div", {
    className: H.emptyState,
    children: (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: H.emptyStateSubtext,
      children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
    })
  }),
  F = e => {
    let {
      timestamp: t
    } = e;
    return (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: H.timestamp,
      children: (0, I.getClassificationRelativeIncidentTime)(t)
    })
  },
  v = () => (0, n.jsx)(o.Text, {
    variant: "text-xs/bold",
    className: H.newBadge,
    children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
  }),
  D = e => {
    let {
      classification: t
    } = e, {
      id: s,
      description: u
    } = t, r = E.default.extractTimestamp(s), c = (0, g.useIsNewClassification)(t), d = (0, T.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), _ = i.useMemo(() => {
      var e, a, i;
      let s = {
        description: u,
        descriptionHook: e => (0, n.jsx)(o.Text, {
          tag: "span",
          variant: "heading-lg/bold",
          children: e
        })
      };
      if (!(d && (0, I.isGuildClassification)(t))) return U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format(s);
      return (null == t ? void 0 : null === (e = t.guild_metadata) || void 0 === e ? void 0 : e.member_type) === f.MemberType.OWNER ? U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
        ...s,
        guildName: null == t ? void 0 : null === (a = t.guild_metadata) || void 0 === a ? void 0 : a.name
      }) : U.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
        guildName: null == t ? void 0 : null === (i = t.guild_metadata) || void 0 === i ? void 0 : i.name,
        classification_type: s.description,
        classificationHook: s.descriptionHook
      })
    }, [t, u, d]);
    return (0, n.jsx)(o.Clickable, {
      onClick: () => {
        (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("58286"), a.e("18831"), a.e("98154")]).then(a.bind(a, "41164"));
          return t => (0, n.jsx)(e, {
            classificationId: s,
            source: p.SafetyHubAnalyticsActionSource.StandingTab,
            ...t
          })
        })
      },
      className: l()(H.itemDetail, {
        [H.itemDetailNew]: c
      }),
      children: (0, n.jsxs)("div", {
        className: H.descriptionContainer,
        children: [c ? (0, n.jsx)(v, {}) : (0, n.jsx)(F, {
          timestamp: r
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-lg/normal",
          children: _
        })]
      })
    }, s)
  },
  b = e => {
    let {
      status: t,
      classifications: a
    } = e, [s, l] = i.useState(!1), [r, c] = i.useState(3), d = (0, N.useSafetyHubAccountStanding)(), _ = (0, u.useStateFromStores)([A.default], () => A.default.getIsDsaEligible()), E = i.useMemo(() => a.slice(0, r), [a, r]);
    i.useEffect(() => {
      s && S.default.track(m.AnalyticEvents.SAFETY_HUB_ACTION, {
        action: p.SafetyHubAnalyticsActions.ViewViolationsDropdown,
        account_standing: d.state,
        classification_ids: E.map(e => Number(e.id)),
        source: p.SafetyHubAnalyticsActionSource.StandingTab,
        is_violative_content_shown: !1,
        is_dsa_eligible: _
      })
    }, [s, d.state, E, _]);
    let T = a.length - E.length > 3 ? 3 : a.length - E.length;
    return (0, n.jsxs)("div", {
      className: H.dropdown,
      children: [(0, n.jsx)(h, {
        status: t,
        onClick: () => l(e => !e),
        opened: s,
        count: a.length
      }), s && (0, n.jsxs)("div", {
        className: H.items,
        children: [(0, n.jsx)(o.TabBar.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), E.length > 0 && E.map(e => (0, n.jsx)(D, {
          classification: e
        }, e.id)), E.length < a.length && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(o.TabBar.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, n.jsx)("button", {
            className: H.paginationButton,
            onClick: () => c(e => e + T),
            children: U.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
              nextPageSize: T
            })
          })]
        }), 0 === E.length && "active" === t && (0, n.jsx)(x, {}), 0 === E.length && "expired" === t && (0, n.jsx)(O, {})]
      })]
    })
  },
  R = () => {
    let e = (0, C.useActiveSafetyHubClassifications)(),
      t = (0, C.useExpiredSafetyHubClassifications)();
    return 0 === e.length && 0 === t.length ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(b, {
        status: "active",
        classifications: e
      }), (0, n.jsx)(b, {
        status: "expired",
        classifications: t
      })]
    })
  }