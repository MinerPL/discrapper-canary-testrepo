"use strict";
E.r(t), E.d(t, {
  default: function() {
    return H
  }
});
var _ = E("37983"),
  s = E("884691"),
  T = E("414456"),
  a = E.n(T),
  n = E("446674"),
  A = E("77078"),
  u = E("851387"),
  I = E("87657"),
  i = E("506885"),
  l = E("26989"),
  L = E("102985"),
  o = E("697218"),
  r = E("627490"),
  d = E("745633"),
  N = E("83900"),
  S = E("71216"),
  g = E("741919"),
  D = E("387111"),
  G = E("178406"),
  O = E("645266"),
  c = E("835257"),
  U = E("782340"),
  C = E("724023");
let M = s.memo(function() {
    return (0, _.jsx)(A.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN_TOOLTIP,
      children: e => (0, _.jsx)(A.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: U.default.Messages.MEMBERS_SAFETY_UNKNOWN_INVITE_CODE
      })
    })
  }),
  R = s.memo(function() {
    return (0, _.jsx)(A.Tooltip, {
      text: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN_TOOLTIP,
      children: e => (0, _.jsx)(A.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-muted",
        className: C.unknownInvite,
        children: U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HIDDEN
      })
    })
  }),
  f = {
    [c.JoinSourceType.UNSPECIFIED]: {
      type: c.JoinSourceType.UNSPECIFIED,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN,
      icon: null,
      hasTooltip: !1
    },
    [c.JoinSourceType.BOT]: {
      type: c.JoinSourceType.BOT,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT,
      icon: (0, _.jsx)(S.default, {
        className: C.robot,
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [c.JoinSourceType.INTEGRATION]: {
      type: c.JoinSourceType.INTEGRATION,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION,
      icon: (0, _.jsx)(g.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [c.JoinSourceType.DISCOVERY]: {
      type: c.JoinSourceType.DISCOVERY,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY,
      icon: (0, _.jsx)(r.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [c.JoinSourceType.HUB]: {
      type: c.JoinSourceType.HUB,
      getJoinTypeLabel: () => U.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB,
      icon: (0, _.jsx)(d.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    },
    [c.JoinSourceType.INVITE]: {
      type: c.JoinSourceType.INVITE,
      getJoinTypeLabel: e => e,
      icon: (0, _.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !0
    },
    [c.JoinSourceType.VANITY_URL]: {
      type: c.JoinSourceType.VANITY_URL,
      getJoinTypeLabel: e => e,
      icon: (0, _.jsx)(N.default, {
        height: 12,
        width: 12
      }),
      hasTooltip: !1
    }
  };

function h(e) {
  var t;
  let {
    guildId: E,
    inviterUser: T,
    joinSourceType: u,
    className: i,
    onClickInviter: L
  } = e, o = (0, n.useStateFromStores)([l.default], () => null == T ? null : l.default.getMember(E, T.id), [T, E]), r = s.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != T && (null == L || L(T))
  }, [T, L]);
  return null == T ? null : (0, _.jsxs)("div", {
    className: a(C.inviterTooltipContainer, i),
    children: [(0, _.jsx)(A.Text, {
      variant: "text-xs/medium",
      children: u !== c.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP
    }), (0, _.jsxs)(A.Clickable, {
      className: a(C.inviterUserContainer, null != L && C.clickable),
      onClick: r,
      children: [(0, _.jsx)(I.default, {
        user: T,
        size: A.AvatarSizes.SIZE_16
      }), (0, _.jsx)(A.Text, {
        variant: "text-xs/medium",
        children: (0, _.jsx)(A.NameWithRole, {
          name: D.default.getName(E, null, T),
          color: null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : void 0
        })
      })]
    })]
  })
}

function p(e) {
  let {
    children: t,
    hasTooltip: E,
    guildId: s,
    inviterUser: T,
    joinSourceType: a
  } = e;
  return E && null != T ? (0, _.jsx)(A.Tooltip, {
    "aria-label": a !== c.JoinSourceType.BOT ? U.default.Messages.MEMBER_SAFETY_INVITER_TOOLTIP : U.default.Messages.MEMBER_SAFETY_INVITER_BOT_TOOLTIP,
    allowOverflow: !0,
    text: (0, _.jsx)(h, {
      guildId: s,
      inviterUser: T,
      joinSourceType: a
    }),
    children: e => (0, _.jsx)(_.Fragment, {
      children: t(e)
    })
  }) : (0, _.jsx)(_.Fragment, {
    children: t({})
  })
}

function P(e) {
  let {
    type: t
  } = e, E = (0, c.useGetIntegrationIconString)(t);
  return null == E ? null : (0, _.jsx)("div", {
    className: C.integrationIcon,
    style: {
      width: 12,
      height: 12,
      backgroundImage: E
    }
  })
}

function y(e) {
  let {
    sourceInviteCode: t,
    joinSourceType: E,
    integrationType: T,
    showInviterAsFooter: n,
    guildId: u,
    inviterUser: I,
    onClickInviter: i,
    ...l
  } = e, L = null != E ? f[E] : null, o = E === c.JoinSourceType.INTEGRATION && null != T, r = s.useCallback(e => {
    switch (e.stopPropagation(), e.preventDefault(), !0) {
      case null == t && null == E:
      case null == E:
        return;
      case E === c.JoinSourceType.INVITE && null != t:
        var _;
        (0, O.updateSearchState)(u, {
          selectedSourceInviteCode: null !== (_ = null == t ? void 0 : t.trim()) && void 0 !== _ ? _ : void 0,
          selectedJoinSourceType: E
        });
        return;
      default:
        (0, O.updateSearchState)(u, {
          selectedSourceInviteCode: null,
          selectedJoinSourceType: null != E ? E : void 0
        });
        return
    }
  }, [u, E, t]);
  switch (!0) {
    case null == L:
    case null == E:
    case E === c.JoinSourceType.UNSPECIFIED:
      return (0, _.jsx)(M, {
        ...l
      });
    case null != T && o:
      return (0, _.jsxs)(A.Clickable, {
        className: C.inviteContainer,
        ...l,
        "aria-label": (0, c.getIntegrationLabel)(T),
        role: "button",
        tabIndex: 0,
        onClick: r,
        children: [(0, _.jsx)(P, {
          type: T
        }), (0, _.jsx)(A.Text, {
          variant: "text-sm/medium",
          children: (0, c.getIntegrationLabel)(T)
        })]
      });
    case null != L:
      return (0, _.jsxs)("div", {
        className: a(n && C.footerAlignment),
        children: [(0, _.jsxs)(A.Clickable, {
          className: C.inviteContainer,
          ...l,
          "aria-label": null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0),
          role: "button",
          tabIndex: 0,
          onClick: r,
          children: [null == L ? void 0 : L.icon, (0, _.jsx)(A.Text, {
            variant: "text-sm/medium",
            children: null == L ? void 0 : L.getJoinTypeLabel(null != t ? t : void 0)
          })]
        }), n && (0, _.jsx)(h, {
          guildId: u,
          inviterUser: I,
          joinSourceType: E,
          className: C.inviterFooter,
          onClickInviter: i
        })]
      });
    default:
      return (0, _.jsx)(M, {
        ...l
      })
  }
}
var H = s.memo(function(e) {
  var t, E;
  let {
    userId: T,
    guildId: a,
    showInviterAsFooter: A,
    onClickInviter: I
  } = e, l = (0, n.useStateFromStores)([G.default], () => G.default.getEnhancedMember(a, T), [a, T]), r = null !== (t = null == l ? void 0 : l.inviterId) && void 0 !== t ? t : null, d = (0, n.useStateFromStores)([o.default], () => o.default.getUser(r), [r]);
  s.useEffect(() => {
    null != r && (u.default.requestMembersById(a, [r]), (0, i.default)(r, void 0, {
      guildId: a
    }))
  }, [a, r]);
  let N = (0, n.useStateFromStores)([L.default], () => L.default.hideInstantInvites, []);
  if (null == l) return (0, _.jsx)(M, {});
  let {
    sourceInviteCode: S,
    joinSourceType: g,
    integrationType: D
  } = l, O = null != g ? f[g] : null, U = null !== (E = null == O ? void 0 : O.hasTooltip) && void 0 !== E && E, C = g === c.JoinSourceType.INVITE || g === c.JoinSourceType.VANITY_URL;
  return C && N ? (0, _.jsx)(R, {}) : (0, _.jsx)(p, {
    hasTooltip: U && !A,
    inviterUser: null != d ? d : null,
    guildId: a,
    joinSourceType: g,
    children: e => (0, _.jsx)(y, {
      sourceInviteCode: S,
      joinSourceType: g,
      integrationType: D,
      showInviterAsFooter: A,
      inviterUser: null != d ? d : null,
      guildId: a,
      onClickInviter: I,
      ...e
    })
  })
})