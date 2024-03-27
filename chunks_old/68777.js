"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("866227"),
  u = n.n(r),
  o = n("65597"),
  d = n("77078"),
  c = n("252073"),
  f = n("685665"),
  h = n("309021"),
  m = n("917397"),
  p = n("553275"),
  E = n("287103"),
  g = n("817343"),
  S = n("26989"),
  C = n("305961"),
  _ = n("987663"),
  I = n("387111"),
  T = n("136281"),
  v = n("782340"),
  x = n("856527"),
  N = n("499559"),
  A = n("865331");

function M(e) {
  let {
    log: t,
    member: n,
    guild: s
  } = e, {
    analyticsLocations: r
  } = (0, f.default)(), c = h.getSimpleAuditLogTitleFromChange(t), E = h.getSimpleAuditLogTitleContextFromChange(t), C = h.getStringForBanReason(t), _ = h.getSimpleAuditLogChangeDetails(t), T = (0, m.useAuditLogDate)(t.id), A = (0, o.useStateFromStores)([S.default], () => null != t.userId ? S.default.getMember(n.guildId, t.userId) : null, [n.guildId, t.userId]), M = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, p.openMemberProfile)(e, r)
  }, [r]), R = l.useCallback(() => null == t.user ? null : (0, a.jsx)(d.Tooltip, {
    text: v.default.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
    children: e => {
      var l;
      let {
        onMouseEnter: s,
        onMouseLeave: r
      } = e;
      return (0, a.jsx)(d.Clickable, {
        tag: "span",
        className: x.username,
        onClick: M(A),
        onMouseEnter: s,
        onMouseLeave: r,
        children: (0, a.jsxs)(d.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, a.jsx)(d.NameWithRole, {
            name: I.default.getName(n.guildId, null, t.user),
            color: null !== (l = null == A ? void 0 : A.colorString) && void 0 !== l ? l : void 0,
            className: i(x.memberNameText)
          })]
        })
      })
    }
  }), [M, t.user, n.guildId, A]), j = R();
  return (0, a.jsxs)("div", {
    className: i(N.modInfoItem, x.auditLogItem),
    children: [(0, a.jsxs)("div", {
      className: x.auditLogItemTitleContainer,
      children: [(0, a.jsxs)("div", {
        className: x.auditLogItemTitle,
        children: [null != c && (0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: c
        }), null != E && (0, a.jsxs)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof E ? E : u(E).fromNow(), ")"]
        })]
      }), (0, a.jsx)("div", {
        className: x.auditLogItemDate,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: T
        })
      })]
    }), null != C && (0, a.jsx)("div", {
      className: x.auditLogSecondaryContainer,
      children: (0, a.jsxs)("div", {
        className: x.auditLogReason,
        children: [j, (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: C
        })]
      })
    }), null == C && null != _ && (0, a.jsx)("div", {
      className: x.auditLogSecondaryContainer,
      children: (0, a.jsxs)("div", {
        className: x.auditLogSecondary,
        children: [j, (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: _
        })]
      })
    }), null == C && null == _ && (0, a.jsx)("div", {
      className: x.auditLogSecondaryContainer,
      children: (0, a.jsx)("div", {
        className: x.auditLogSecondary,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, a.jsx)(g.AuditLogExpandedChangeDetails, {
            log: t,
            guild: s,
            onContentClick: () => {},
            className: x.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function R(e) {
  let {
    member: t
  } = e, n = (0, o.useStateFromStores)([C.default], () => C.default.getGuild(t.guildId), [t.guildId]), s = (0, o.useStateFromStores)([E.default], () => {
    let e = E.default.logs;
    return null == e || null == n ? [] : _.transformLogs(e, n)
  }, [n]);
  return (l.useEffect(() => {
    (async function e(e, t) {
      await c.filterByTargetId(t, e)
    })(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === s.length) ? null : (0, a.jsx)("div", {
    className: i(A.safetySignalsMainContainer),
    children: (0, a.jsx)(d.FormItem, {
      title: v.default.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
      titleClassName: A.infoTitle,
      children: s.length > 0 ? (0, a.jsx)(T.UserModInfoItemContainer, {
        children: s.map(e => (0, a.jsx)(M, {
          log: e,
          member: t,
          guild: n
        }, e.id))
      }) : null
    })
  })
}