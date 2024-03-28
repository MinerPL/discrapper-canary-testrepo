"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("913527"),
  o = n.n(r),
  u = n("399606"),
  d = n("481060"),
  c = n("480137"),
  f = n("906732"),
  h = n("884737"),
  m = n("376923"),
  p = n("472596"),
  E = n("776617"),
  C = n("501801"),
  g = n("271383"),
  S = n("430824"),
  _ = n("274730"),
  T = n("5192"),
  I = n("776767"),
  A = n("689938"),
  v = n("197617"),
  N = n("681532"),
  x = n("196958");

function M(e) {
  let {
    log: t,
    member: n,
    guild: s
  } = e, {
    analyticsLocations: r
  } = (0, f.default)(), c = h.getSimpleAuditLogTitleFromChange(t), E = h.getSimpleAuditLogTitleContextFromChange(t), S = h.getStringForBanReason(t), _ = h.getSimpleAuditLogChangeDetails(t), I = (0, m.useAuditLogDate)(t.id), x = (0, u.useStateFromStores)([g.default], () => null != t.userId ? g.default.getMember(n.guildId, t.userId) : null, [n.guildId, t.userId]), M = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, p.openMemberProfile)(e, r)
  }, [r]), R = l.useCallback(() => null == t.user ? null : (0, a.jsx)(d.Tooltip, {
    text: A.default.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
    children: e => {
      var l;
      let {
        onMouseEnter: s,
        onMouseLeave: r
      } = e;
      return (0, a.jsx)(d.Clickable, {
        tag: "span",
        className: v.username,
        onClick: M(x),
        onMouseEnter: s,
        onMouseLeave: r,
        children: (0, a.jsxs)(d.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, a.jsx)(d.NameWithRole, {
            name: T.default.getName(n.guildId, null, t.user),
            color: null !== (l = null == x ? void 0 : x.colorString) && void 0 !== l ? l : void 0,
            className: i()(v.__invalid_memberNameText)
          })]
        })
      })
    }
  }), [M, t.user, n.guildId, x])();
  return (0, a.jsxs)("div", {
    className: i()(N.modInfoItem, v.auditLogItem),
    children: [(0, a.jsxs)("div", {
      className: v.auditLogItemTitleContainer,
      children: [(0, a.jsxs)("div", {
        className: v.auditLogItemTitle,
        children: [null != c && (0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: c
        }), null != E && (0, a.jsxs)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: ["(", "string" == typeof E ? E : o()(E).fromNow(), ")"]
        })]
      }), (0, a.jsx)("div", {
        className: v.auditLogItemDate,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-primary",
          children: I
        })
      })]
    }), null != S && (0, a.jsx)("div", {
      className: v.auditLogSecondaryContainer,
      children: (0, a.jsxs)("div", {
        className: v.auditLogReason,
        children: [R, (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: S
        })]
      })
    }), null == S && null != _ && (0, a.jsx)("div", {
      className: v.auditLogSecondaryContainer,
      children: (0, a.jsxs)("div", {
        className: v.auditLogSecondary,
        children: [R, (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: _
        })]
      })
    }), null == S && null == _ && (0, a.jsx)("div", {
      className: v.auditLogSecondaryContainer,
      children: (0, a.jsx)("div", {
        className: v.auditLogSecondary,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          tag: "span",
          children: (0, a.jsx)(C.AuditLogExpandedChangeDetails, {
            log: t,
            guild: s,
            onContentClick: () => {},
            className: v.auditLogExpandedChangeDetails
          })
        })
      })
    })]
  })
}

function R(e) {
  let {
    member: t
  } = e, n = (0, u.useStateFromStores)([S.default], () => S.default.getGuild(t.guildId), [t.guildId]), s = (0, u.useStateFromStores)([E.default], () => {
    let e = E.default.logs;
    return null == e || null == n ? [] : _.transformLogs(e, n)
  }, [n]);
  return (l.useEffect(() => {
    (async function e(e, t) {
      await c.filterByTargetId(t, e)
    })(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === s.length) ? null : (0, a.jsx)("div", {
    className: i()(x.__invalid_safetySignalsMainContainer),
    children: (0, a.jsx)(d.FormItem, {
      title: A.default.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
      titleClassName: x.infoTitle,
      children: s.length > 0 ? (0, a.jsx)(I.UserModInfoItemContainer, {
        children: s.map(e => (0, a.jsx)(M, {
          log: e,
          member: t,
          guild: n
        }, e.id))
      }) : null
    })
  })
}