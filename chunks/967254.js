"use strict";
a.r(e), a.d(e, {
  ConnectedSafetyHubViolationsContainer: function() {
    return b
  }
}), a("47120");
var n = a("735250"),
  i = a("470079"),
  s = a("803997"),
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
  f = a("236289"),
  A = a("788080"),
  I = a("467432"),
  g = a("451284"),
  N = a("613734"),
  C = a("800530"),
  p = a("981631"),
  m = a("689938"),
  U = a("631853");
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
          } = await Promise.all([a.e("49237"), a.e("99387"), a.e("79504"), a.e("58153"), a.e("25381"), a.e("58286"), a.e("18831"), a.e("24699")]).then(a.bind(a, "41164"));
          return e => (0, n.jsx)(t, {
            classificationId: s,
            source: C.SafetyHubAnalyticsActionSource.StandingTab,
            ...e
          })
        })
      },
      className: l()(U.itemDetail, {
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
  b = () => {
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