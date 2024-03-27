"use strict";
a.r(e), a.d(e, {
  ConnectedSafetyHubViolationsContainer: function() {
    return R
  }
}), a("222007");
var n = a("37983"),
  i = a("884691"),
  s = a("414456"),
  l = a.n(s),
  u = a("446674"),
  r = a("779807"),
  o = a("77078"),
  c = a("461380"),
  d = a("543289"),
  _ = a("300113"),
  S = a("599110"),
  E = a("299039"),
  T = a("667963"),
  f = a("646356"),
  A = a("736393"),
  I = a("310888"),
  g = a("132206"),
  N = a("698609"),
  C = a("170213"),
  p = a("49111"),
  m = a("782340"),
  U = a("595764");
let h = t => {
    let {
      status: e,
      onClick: a,
      opened: i,
      count: s
    } = t;
    return (0, n.jsxs)(o.Clickable, {
      className: U.header,
      onClick: a,
      children: [(0, n.jsx)("div", {
        className: U.headerIconWrapper,
        children: (0, n.jsx)(r.WarningIcon, {
          color: "active" === e ? o.tokens.colors.INTERACTIVE_ACTIVE : o.tokens.colors.INTERACTIVE_MUTED,
          width: 24,
          height: 24
        })
      }), (0, n.jsxs)("div", {
        className: U.title,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          color: "text-normal",
          children: "active" === e ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE_V2.format({
            count: s.toString()
          }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED_V2.format({
            count: s.toString()
          })
        }), (0, n.jsx)(o.Heading, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "active" === e ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE_V2 : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED_V2
        })]
      }), (0, n.jsx)("div", {
        className: U.caret,
        children: (0, n.jsx)(c.default, {
          width: 18,
          height: 18,
          direction: i ? c.default.Directions.UP : c.default.Directions.DOWN
        })
      })]
    })
  },
  H = () => (0, n.jsxs)("div", {
    className: U.emptyState,
    children: [(0, n.jsxs)("div", {
      className: U.iconContainer,
      children: [(0, n.jsx)("div", {
        className: U.iconBackground,
        children: (0, n.jsx)(_.default, {
          className: U.icon
        })
      }), (0, n.jsx)(d.default, {
        className: U.stars
      })]
    }), (0, n.jsx)(o.Heading, {
      variant: "heading-md/bold",
      className: U.emptyStateText,
      children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
    }), (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: U.emptyStateSubtext,
      children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
    })]
  }),
  x = () => (0, n.jsx)("div", {
    className: U.emptyState,
    children: (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: U.emptyStateSubtext,
      children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
    })
  }),
  O = t => {
    let {
      timestamp: e
    } = t;
    return (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: U.timestamp,
      children: (0, A.getClassificationRelativeIncidentTime)(e)
    })
  },
  F = () => (0, n.jsx)(o.Text, {
    variant: "text-xs/bold",
    className: U.newBadge,
    children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
  }),
  D = t => {
    var e;
    let {
      classification: i
    } = t, {
      id: s,
      description: u,
      max_expiration_time: r
    } = i, c = E.default.extractTimestamp(s), d = (0, I.useIsNewClassification)(i), _ = (0, T.useIsSafetyHubDisplayGuildViolationsEnabled)("violations_container"), S = new Date(r), f = S.toDateString();
    return (0, n.jsx)(o.Clickable, {
      onClick: () => {
        (0, o.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("825138").then(a.bind(a, "825138"));
          return e => (0, n.jsx)(t, {
            classificationId: s,
            source: C.SafetyHubAnalyticsActionSource.StandingTab,
            ...e
          })
        })
      },
      className: l(U.itemDetail, {
        [U.itemDetailNew]: d
      }),
      children: (0, n.jsxs)("div", {
        className: U.descriptionContainer,
        children: [d ? (0, n.jsx)(F, {}) : (0, n.jsx)(O, {
          timestamp: c
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-lg/normal",
          children: _ && (0, A.isGuildClassification)(i) ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
            guildName: null == i ? void 0 : null === (e = i.guild_metadata) || void 0 === e ? void 0 : e.name,
            description: u,
            descriptionHook: t => (0, n.jsx)(o.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format({
            description: u,
            descriptionHook: t => (0, n.jsx)(o.Text, {
              tag: "span",
              variant: "heading-lg/bold",
              children: t
            })
          })
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          className: U.expirationDate,
          children: S > new Date ? m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_ACTIVE.format({
            expirationDate: f
          }) : m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EXPIRATION_DATE_EXPIRED.format({
            expirationDate: f
          })
        })]
      })
    }, s)
  },
  v = t => {
    let {
      status: e,
      classifications: a
    } = t, [s, l] = i.useState(!1), [r, c] = i.useState(3), d = (0, g.useSafetyHubAccountStanding)(), _ = (0, u.useStateFromStores)([f.default], () => f.default.getIsDsaEligible()), E = i.useMemo(() => a.slice(0, r), [a, r]);
    i.useEffect(() => {
      s && S.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
        action: C.SafetyHubAnalyticsActions.ViewViolationsDropdown,
        account_standing: d.state,
        classification_ids: E.map(t => Number(t.id)),
        source: C.SafetyHubAnalyticsActionSource.StandingTab,
        is_violative_content_shown: !1,
        is_dsa_eligible: _
      })
    }, [s, d.state, E, _]);
    let T = a.length - E.length > 3 ? 3 : a.length - E.length;
    return (0, n.jsxs)("div", {
      className: U.dropdown,
      children: [(0, n.jsx)(h, {
        status: e,
        onClick: () => l(t => !t),
        opened: s,
        count: a.length
      }), s && (0, n.jsxs)("div", {
        className: U.items,
        children: [(0, n.jsx)(o.TabBar.Separator, {
          style: {
            height: "1px",
            width: "100%"
          }
        }), E.length > 0 && E.map(t => (0, n.jsx)(D, {
          classification: t
        }, t.id)), E.length < a.length && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(o.TabBar.Separator, {
            style: {
              height: "1px",
              width: "100%"
            }
          }), (0, n.jsx)("button", {
            className: U.paginationButton,
            onClick: () => c(t => t + T),
            children: m.default.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
              nextPageSize: T
            })
          })]
        }), 0 === E.length && "active" === e && (0, n.jsx)(H, {}), 0 === E.length && "expired" === e && (0, n.jsx)(x, {})]
      })]
    })
  },
  R = () => {
    let t = (0, N.useActiveSafetyHubClassifications)(),
      e = (0, N.useExpiredSafetyHubClassifications)();
    return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(v, {
        status: "active",
        classifications: t
      }), (0, n.jsx)(v, {
        status: "expired",
        classifications: e
      })]
    })
  }