"use strict";
s.r(t);
var E = s("735250"),
  _ = s("470079"),
  a = s("803997"),
  n = s.n(a),
  T = s("442837"),
  i = s("481060"),
  u = s("749210"),
  A = s("700582"),
  l = s("484459"),
  I = s("271383"),
  r = s("246946"),
  o = s("594174"),
  L = s("104259"),
  d = s("206017"),
  N = s("757698"),
  S = s("912527"),
  g = s("202597"),
  D = s("5192"),
  c = s("893966"),
  G = s("527379"),
  O = s("327999"),
  U = s("689938"),
  C = s("889630");
let M = _.memo(function() {
    return (0, E.jsx)(i.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, E.jsx)(i.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: U.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  R = _.memo(function() {
    return (0, E.jsx)(i.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: e => (0, E.jsx)(i.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
      })
    })
  }),
  f = {
    [O.JoinSourceType.UNSPECIFIED]: {
      type: O.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [O.JoinSourceType.BOT]: {
      type: O.JoinSourceType.BOT,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, E.jsx)(S.default, {
        className: C.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [O.JoinSourceType.INTEGRATION]: {
      type: O.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, E.jsx)(g.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.JoinSourceType.DISCOVERY]: {
      type: O.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, E.jsx)(L.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.JoinSourceType.HUB]: {
      type: O.JoinSourceType.HUB,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, E.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [O.JoinSourceType.INVITE]: {
      type: O.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, E.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [O.JoinSourceType.VANITY_URL]: {
      type: O.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, E.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function h(e) {
  var t;
  let {
    guildId: s,
    inviterUser: a,
    joinSourceType: u,
    className: l,
    onClickInviter: r
  } = e, o = (0, T.useStateFromStores)([I.default], () => null == a ? null : I.default.getMember(s, a.id), [a, s]), L = _.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != a && (null == r || r(a))
  }, [a, r]);
  return null == a ? null : (0, E.jsxs)("div", {
    className: n()(C.inviterTooltipContainer, l),
    children: [(0, E.jsx)(i.Text, {
      variant: "text-xs/medium",
      children: u !== O.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, E.jsxs)(i.Clickable, {
      className: n()(C.inviterUserContainer, null != r && C.clickable),
      onClick: L,
      children: [(0, E.jsx)(A.default, {
        user: a,
        size: i.AvatarSizes.SIZE_16
      }), (0, E.jsx)(i.Text, {
        variant: "text-xs/medium",
        children: (0, E.jsx)(i.NameWithRole, {
          name: D.default.getName(s, null, a),
          color: null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function p(e) {
  let {
    children: t,
    hasTooltip: s,
    guildId: _,
    inviterUser: a,
    joinSourceType: n
  } = e;
  return s && null != a ? (0, E.jsx)(i.Tooltip, {
    "aria-label": n !== O.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, E.jsx)(h, {
      guildId: _,
      inviterUser: a,
      joinSourceType: n
    }),
    children: e => (0, E.jsx)(E.Fragment, {
      children: t(e)
    })
  }) : (0, E.jsx)(E.Fragment, {
    children: t({})
  })
}

function m(e) {
  let {
    type: t
  } = e, s = (0, O.useGetIntegrationIconString)(t);
  return null == s ? null : (0, E.jsx)("div", {
    className: C.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: s
    }
  })
}

function P(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: s,
    integrationType: a,
    showInviterAsFooter: T,
    guildId: u,
    inviterUser: A,
    onClickInviter: l,
    ...I
  } = e, r = null != s ? f[s] : null, o = s === O.JoinSourceType.INTEGRATION && null != a, L = _.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == s:
      case null == s:
        return;
      case s === O.JoinSourceType.INVITE && null != t:
        var E;
        (0, G.updateSearchState)(u, {
          selectedSourceInviteCode: null !== (E = null == t ? void 0 : t.trim()) && void 0 !== E ? E : void 0,
          selectedJoinSourceType: s
        });
        return;
      default:
        (0, G.updateSearchState)(u, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != s ? s : void 0
        });
        return
    }
  }, [u, s, t]);
  switch (!0) {
    case null == r:
    case null == s:
    case s === O.JoinSourceType.UNSPECIFIED:
      return (0, E.jsx)(M, {
        ...I
      });
    case null != a && o:
      return (0, E.jsxs)(i.Clickable, {
        className: C.inviteContainer,
        ...I,
        "aria-label": (0, O.getIntegrationLabel)(a),
        role: "button",
        tabIndex: 0,
        onClick: L,
        children: [(0, E.jsx)(m, {
          type: a
        }), (0, E.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: (0, O.getIntegrationLabel)(a)
        })]
      });
    case null != r:
      return (0, E.jsxs)("div", {
        className: n()(T && C.footerAlignment),
        children: [(0, E.jsxs)(i.Clickable, {
          className: C.inviteContainer,
          ...I,
          "aria-label": null == r ? void 0 : r.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: L,
          children: [null == r ? void 0 : r.icon, (0, E.jsx)(i.Text, {
            variant: "text-sm/medium",
            children: null == r ? void 0 : r.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), T && (0, E.jsx)(h, {
          guildId: u,
          inviterUser: A,
          joinSourceType: s,
          className: C.inviterFooter,
          onClickInviter: l
        })]
      });
    default:
      return (0, E.jsx)(M, {
        ...I
      })
  }
}
t.default = _.memo(function(e) {
  var t, s;
  let {
    userId: a,
    guildId: n,
    showInviterAsFooter: i,
    onClickInviter: A
  } = e, I = (0, T.useStateFromStores)([c.default], () => c.default.getEnhancedMember(n, a), [n, a]), L = null !== (t = null == I ? void 0 : I.inviterId) && void 0 !== t ? t : null, d = (0, T.useStateFromStores)([o.default], () => o.default.getUser(L), [L]);
  _.useEffect(() => {
    null != L && (u.default.requestMembersById(n, [L]), (0, l.default)(L, void 0, {
      guildId: n
    }))
  }, [n, L]);
  let N = (0, T.useStateFromStores)([r.default], () => r.default.hideInstantInvites, []);
  if (null == I) return (0, E.jsx)(M, {});
  let {
    sourceInviteCode: S,
    joinSourceType: g,
    integrationType: D
  } = I, G = null != g ? f[g] : null, U = null !== (s = null == G ? void 0 : G.hasTooltip) && void 0 !== s && s;
  return (g === O.JoinSourceType.INVITE || g === O.JoinSourceType.VANITY_URL) && N ? (0, E.jsx)(R, {}) : (0, E.jsx)(p, {
    hasTooltip: U && !i,
    inviterUser: null != d ? d : null,
    guildId: n,
    joinSourceType: g,
    children: e => (0, E.jsx)(P, {
      sourceInviteCode: S,
      joinSourceType: g,
      integrationType: D,
      showInviterAsFooter: i,
      inviterUser: null != d ? d : null,
      guildId: n,
      onClickInviter: A,
      ...e
    })
  })
})