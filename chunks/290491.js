"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  o = n("446674"),
  u = n("77078"),
  a = n("851387"),
  c = n("87657"),
  d = n("506885"),
  f = n("26989"),
  E = n("697218"),
  h = n("627490"),
  p = n("745633"),
  _ = n("83900"),
  v = n("71216"),
  m = n("741919"),
  C = n("387111"),
  S = n("178406"),
  L = n("645266"),
  M = n("835257"),
  g = n("782340"),
  I = n("50183");
let T = i.memo(function() {
    return (0, l.jsx)(u.Tooltip, {
      text: g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, l.jsx)(u.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: I.unknownInvite,
        children: g.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  A = {
    [M.JoinSourceType.UNSPECIFIED]: {
      type: M.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [M.JoinSourceType.BOT]: {
      type: M.JoinSourceType.BOT,
      getJoinTypeLabel: () => g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, l.jsx)(v.default, {
        className: I.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [M.JoinSourceType.INTEGRATION]: {
      type: M.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, l.jsx)(m.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [M.JoinSourceType.DISCOVERY]: {
      type: M.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, l.jsx)(h.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [M.JoinSourceType.HUB]: {
      type: M.JoinSourceType.HUB,
      getJoinTypeLabel: () => g.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, l.jsx)(p.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [M.JoinSourceType.INVITE]: {
      type: M.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, l.jsx)(_.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [M.JoinSourceType.VANITY_URL]: {
      type: M.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, l.jsx)(_.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function x(e) {
  var t;
  let {
    guildId: n,
    inviterUser: r,
    joinSourceType: a,
    className: d,
    onClickInviter: E
  } = e, h = (0, o.useStateFromStores)([f.default], () => null == r ? null : f.default.getMember(n, r.id), [r, n]), p = i.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != r && (null == E || E(r))
  }, [r, E]);
  return null == r ? null : (0, l.jsxs)("div", {
    className: s(I.inviterTooltipContainer, d),
    children: [(0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      children: a !== M.JoinSourceType.BOT ? g.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : g.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, l.jsxs)(u.Clickable, {
      className: s(I.inviterUserContainer, null != E && I.clickable),
      onClick: p,
      children: [(0, l.jsx)(c.default, {
        user: r,
        size: u.AvatarSizes.SIZE_16
      }), (0, l.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: (0, l.jsx)(u.NameWithRole, {
          name: C.default.getName(n, null, r),
          color: null !== (t = null == h ? void 0 : h.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function N(e) {
  let {
    children: t,
    hasTooltip: n,
    guildId: i,
    inviterUser: r,
    joinSourceType: s
  } = e;
  return n && null != r ? (0, l.jsx)(u.Tooltip, {
    "aria-label": s !== M.JoinSourceType.BOT ? g.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : g.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, l.jsx)(x, {
      guildId: i,
      inviterUser: r,
      joinSourceType: s
    }),
    children: e => (0, l.jsx)(l.Fragment, {
      children: t(e)
    })
  }) : (0, l.jsx)(l.Fragment, {
    children: t({})
  })
}

function j(e) {
  let {
    type: t
  } = e, n = (0, M.useGetIntegrationIconString)(t);
  return null == n ? null : (0, l.jsx)("div", {
    className: I.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: n
    }
  })
}

function k(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: n,
    integrationType: r,
    showInviterAsFooter: o,
    guildId: a,
    inviterUser: c,
    onClickInviter: d,
    ...f
  } = e, E = null != n ? A[n] : null, h = n === M.JoinSourceType.INTEGRATION && null != r, p = i.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == n:
      case null == n:
        return;
      case n === M.JoinSourceType.INVITE && null != t:
        var l;
        (0, L.updateSearchState)(a, {
          selectedSourceInviteCode: null !== (l = null == t ? void 0 : t.trim()) && void 0 !== l ? l : void 0,
          selectedJoinSourceType: n
        });
        return;
      default:
        (0, L.updateSearchState)(a, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != n ? n : void 0
        });
        return
    }
  }, [a, n, t]);
  switch (!0) {
    case null == E:
    case null == n:
    case n === M.JoinSourceType.UNSPECIFIED:
      return (0, l.jsx)(T, {
        ...f
      });
    case null != r && h:
      return (0, l.jsxs)(u.Clickable, {
        className: I.inviteContainer,
        ...f,
        "aria-label": (0, M.getIntegrationLabel)(r),
        role: "button",
        tabIndex: 0,
        onClick: p,
        children: [(0, l.jsx)(j, {
          type: r
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: (0, M.getIntegrationLabel)(r)
        })]
      });
    case null != E:
      return (0, l.jsxs)("div", {
        className: s(o && I.footerAlignment),
        children: [(0, l.jsxs)(u.Clickable, {
          className: I.inviteContainer,
          ...f,
          "aria-label": null == E ? void 0 : E.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: p,
          children: [null == E ? void 0 : E.icon, (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: null == E ? void 0 : E.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), o && (0, l.jsx)(x, {
          guildId: a,
          inviterUser: c,
          joinSourceType: n,
          className: I.inviterFooter,
          onClickInviter: d
        })]
      });
    default:
      return (0, l.jsx)(T, {
        ...f
      })
  }
}
var R = i.memo(function(e) {
  var t, n;
  let {
    userId: r,
    guildId: s,
    showInviterAsFooter: u,
    onClickInviter: c
  } = e, f = (0, o.useStateFromStores)([S.default], () => S.default.getEnhancedMember(s, r), [s, r]), h = null !== (t = null == f ? void 0 : f.inviterId) && void 0 !== t ? t : null, p = (0, o.useStateFromStores)([E.default], () => E.default.getUser(h), [h]);
  if (i.useEffect(() => {
      null != h && (a.default.requestMembersById(s, [h]), (0, d.default)(h, void 0, {
        guildId: s
      }))
    }, [s, h]), null == f) return (0, l.jsx)(T, {});
  let {
    sourceInviteCode: _,
    joinSourceType: v,
    integrationType: m
  } = f, C = null != v ? A[v] : null, L = null !== (n = null == C ? void 0 : C.hasTooltip) && void 0 !== n && n;
  return (0, l.jsx)(N, {
    hasTooltip: L && !u,
    inviterUser: null != p ? p : null,
    guildId: s,
    joinSourceType: v,
    children: e => (0, l.jsx)(k, {
      sourceInviteCode: _,
      joinSourceType: v,
      integrationType: m,
      showInviterAsFooter: u,
      inviterUser: null != p ? p : null,
      guildId: s,
      onClickInviter: c,
      ...e
    })
  })
})