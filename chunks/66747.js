"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  o = l.n(n),
  i = l("392711"),
  r = l("498607"),
  d = l.n(r),
  u = l("399606"),
  C = l("692547"),
  c = l("481060"),
  m = l("700582"),
  E = l("745735"),
  f = l("906732"),
  _ = l("715903"),
  M = l("69882"),
  h = l("189357"),
  T = l("493892"),
  S = l("433355"),
  x = l("430824"),
  A = l("496675"),
  p = l("594174"),
  L = l("373791"),
  g = l("725522"),
  H = l("862443"),
  N = l("789695"),
  I = l("621113"),
  R = l("964309"),
  v = l("203893"),
  j = l("729285"),
  D = l("777288"),
  b = l("5192"),
  O = l("709054"),
  B = l("51144"),
  V = l("815790"),
  F = l("588215"),
  y = l("241559"),
  U = l("893966"),
  w = l("685244"),
  k = l("16829"),
  P = l("256003"),
  Z = l("472596"),
  Y = l("285173"),
  G = l("981631"),
  J = l("689938"),
  q = l("256194");
let z = s.memo(function(e) {
  let {
    member: t
  } = e, l = s.useMemo(() => (0, M.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), n = s.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return (0, a.jsxs)("div", {
    className: o()(q.flagContainer),
    children: [t.hasUnusualDmActivity && (0, a.jsx)(c.Tooltip, {
      text: J.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(g.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: C.default.colors.TEXT_MUTED.css
        })
      }
    }), l && (0, a.jsx)(c.Tooltip, {
      "aria-label": J.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, a.jsxs)("div", {
        className: q.communicationDisabledTooltip,
        children: [(0, a.jsx)("div", {
          children: J.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, a.jsx)(L.default, {
          deadline: n,
          showUnits: !0,
          stopAtOneSec: !0
        })]
      }),
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(N.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: C.default.colors.TEXT_DANGER.css
        })
      }
    }), (0, T.isSpammer)(t.userId) && (0, a.jsx)(c.Tooltip, {
      text: J.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(v.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: C.default.colors.TEXT_DANGER.css
        })
      }
    }), (0, _.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(c.Tooltip, {
      text: J.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(H.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: C.default.colors.TEXT_MUTED.css
        })
      }
    })]
  })
});

function K(e) {
  let {
    member: t
  } = e, l = (0, u.useStateFromStores)([x.default], () => x.default.getRoles(t.guildId)), n = s.useMemo(() => null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
    var a, s, n, o;
    return null !== (o = null !== (n = null === (a = l[t]) || void 0 === a ? void 0 : a.position) && void 0 !== n ? n : 0 - (null === (s = l[e]) || void 0 === s ? void 0 : s.position)) && void 0 !== o ? o : 0
  }), [t.roles, t.highestRoleId, l]);
  return 0 === n.length ? null : (0, a.jsx)("div", {
    className: q.roleTooltipItemContainer,
    children: n.map(e => (0, a.jsx)(Y.default, {
      className: o()(q.roleTooltipItem),
      role: l[e],
      guildId: t.guildId
    }, e))
  })
}
let W = s.memo(function(e) {
    let {
      member: t,
      highestRole: l
    } = e, n = (0, u.useStateFromStores)([x.default], () => x.default.getGuild(t.guildId), [t.guildId]), [i, r] = s.useState(!1), d = t.roles.length - 1, C = s.useMemo(() => new Intl.NumberFormat(J.default.getLocale()).format(d), [d]), m = (0, Z.useContextMenuModerateRoles)(t), E = (0, u.useStateFromStores)([A.default], () => A.default.can(G.Permissions.MANAGE_ROLES, n), [n]), f = s.useCallback(e => () => {
      r(!0), null == e || e()
    }, []), _ = s.useCallback(e => () => {
      r(!1), null == e || e()
    }, []);
    return null == n ? null : (0, a.jsxs)("div", {
      className: o()(q.roleContainer),
      children: [null != l && (0, a.jsx)(Y.default, {
        className: o()(q.roleTooltipItem, q.highestRole),
        role: l,
        guildId: t.guildId
      }), d > 0 && (0, a.jsx)(c.Tooltip, {
        "aria-label": J.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: q.roleTooltip,
        allowOverflow: !0,
        text: (0, a.jsx)("div", {
          className: q.roleTooltipSafetyContainer,
          children: i ? (0, a.jsx)(K, {
            member: t
          }) : J.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(c.Clickable, {
            className: o()(q.otherRoles),
            onMouseEnter: f(t),
            onMouseLeave: _(l),
            children: (0, a.jsxs)(c.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: ["+", C]
            })
          })
        }
      }), E && (0, a.jsx)(c.Tooltip, {
        text: J.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(c.Clickable, {
            className: o()(q.otherRoles, q.addRoleContainer),
            onClick: m,
            onMouseEnter: t,
            onMouseLeave: l,
            children: (0, a.jsx)(j.default, {
              className: o()(q.addRoleIcon),
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  Q = s.memo(function(e) {
    var t;
    let {
      member: l,
      user: n
    } = e, {
      analyticsLocations: i
    } = (0, f.default)(), r = s.useCallback(e => {
      null != l && (e.stopPropagation(), e.preventDefault(), (0, Z.openMemberProfile)(l, i))
    }, [l, i]);
    return null == n || null == l ? null : (0, a.jsxs)("div", {
      className: o()(q.memberNameContainer),
      children: [(0, a.jsx)(c.Clickable, {
        className: o()(q.memberAvatar),
        onClick: r,
        children: (0, a.jsx)(m.default, {
          user: n
        })
      }), (0, a.jsx)("div", {
        className: o()(q.memberName),
        children: (0, a.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: (0, a.jsx)(c.Clickable, {
            onClick: r,
            children: (0, a.jsx)(c.NameWithRole, {
              name: b.default.getName(l.guildId, null, n),
              color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
              className: o()(q.memberNameText)
            })
          })
        })
      }), (0, a.jsx)("div", {
        className: o()(q.memberGlobalName),
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          tag: "span",
          children: (0, a.jsx)(c.Clickable, {
            onClick: r,
            tag: "span",
            children: B.default.getUserTag(n)
          })
        })
      })]
    })
  });

function X(e) {
  let t = null == e ? null : (0, V.formatDateRelativeTime)(e, V.MembersTableDateFormats.JOINED_AT);
  return {
    short: t,
    long: new Date(null != e ? e : 0).toLocaleDateString(J.default.getLocale(), V.MEMBER_JOIN_DATE_TOOLTIP_CONFIG)
  }
}

function $(e) {
  let {
    member: t,
    showLongDate: l,
    isSortedBy: n
  } = e, [i, r] = s.useState(null);
  s.useEffect(() => {
    r(X(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, E.default)(() => {
    r(X(t.joinedAtTimestamp))
  }, 1e4);
  let d = n ? "text-brand" : "text-normal";
  return (null == i ? void 0 : i.short) == null ? null : l ? (0, a.jsx)("div", {
    className: o()(q.__invalid_joinedAtContainer),
    children: (0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: d,
      children: i.long
    })
  }) : (0, a.jsx)("div", {
    className: o()(q.__invalid_joinedAtContainer),
    children: (0, a.jsx)(c.Tooltip, {
      align: "left",
      text: i.long,
      children: e => (0, a.jsx)(c.Text, {
        ...e,
        variant: "text-sm/medium",
        color: d,
        children: i.short
      })
    })
  })
}
let ee = s.memo(function(e) {
    let {
      member: t,
      showLongDate: l,
      isSortedBy: n
    } = e, {
      accountCreationDateShort: o,
      accountCreationDateLong: i
    } = s.useMemo(() => {
      let e = O.default.extractTimestamp(t.userId),
        l = (0, V.formatDateRelativeTime)(e, V.MembersTableDateFormats.ACCOUNT_AGE);
      return {
        accountCreationDateShort: l,
        accountCreationDateLong: new Date(e).toLocaleDateString(J.default.getLocale(), V.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG)
      }
    }, [t.userId]), r = n ? "text-brand" : "text-normal";
    return l ? (0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: r,
      children: i
    }) : (0, a.jsx)(c.Tooltip, {
      align: "left",
      text: i,
      children: e => (0, a.jsx)(c.Text, {
        ...e,
        variant: "text-sm/medium",
        color: r,
        children: o
      })
    })
  }),
  et = s.memo(function(e) {
    let {
      member: t,
      user: l,
      highestRole: n,
      isHoldingAdvancedInfoKey: i,
      onOpenModerationMenu: r,
      onOpenProfileMenu: C,
      compact: m
    } = e, E = (0, u.useStateFromStores)([A.default, x.default], () => A.default.can(G.Permissions.MANAGE_GUILD, x.default.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: f,
      addUsers: _,
      removeUser: M
    } = (0, P.default)(t.guildId), T = (0, y.useCanAccessBulkBanningFeature)(t.guildId), S = (0, y.useCanBulkBanUser)(t.guildId, T, t.userId), p = (0, h.useCanAccessGuildMemberModView)(t.guildId), L = (0, u.useStateFromStores)([U.default], () => {
      var e;
      return null !== (e = U.default.getSearchStateByGuildId(t.guildId).selectedSort) && void 0 !== e ? e : F.OrderBy.ORDER_BY_UNSPECIFIED
    }, [t.guildId], d()), g = s.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && S && (f.has(t.userId) ? M(t.userId) : _([t.userId]))
    }, [_, S, t, M, f]), H = L === F.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, N = L === F.OrderBy.ORDER_BY_USER_ID_ASC || L === F.OrderBy.ORDER_BY_USER_ID_DESC;
    return (0, a.jsxs)(a.Fragment, {
      children: [T && (0, a.jsx)(c.Tooltip, {
        tooltipClassName: q.disabledActionTooltip,
        shouldShow: !S,
        text: J.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, a.jsx)("td", {
          ...e,
          children: (0, a.jsx)("div", {
            className: o()(q.__invalid_checkbox, q.xsmallCol),
            children: (0, a.jsx)(c.Clickable, {
              onClick: g,
              children: (0, a.jsx)(c.Checkbox, {
                type: c.Checkbox.Types.INVERTED,
                value: f.has(t.userId),
                disabled: !S
              })
            })
          })
        })
      }), (0, a.jsx)("td", {
        className: o()({
          [q.compact]: m
        }),
        children: (0, a.jsx)(Q, {
          member: t,
          user: l
        })
      }), (0, a.jsx)("td", {
        className: o()(q.smallCol, {
          [q.compact]: m
        }),
        children: (0, a.jsx)($, {
          showLongDate: i,
          member: t,
          isSortedBy: H
        })
      }), (0, a.jsx)("td", {
        className: o()(q.smallCol, {
          [q.compact]: m
        }),
        children: (0, a.jsx)(ee, {
          showLongDate: i,
          member: t,
          isSortedBy: N
        })
      }), E && (0, a.jsx)("td", {
        className: o()(q.smallCol, {
          [q.compact]: m
        }),
        children: (0, a.jsx)(k.default, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, a.jsx)("td", {
        className: o()(q.mediumCol, {
          [q.compact]: m
        }),
        children: (0, a.jsx)(W, {
          member: t,
          highestRole: n
        })
      }), (0, a.jsx)("td", {
        className: o()(q.smallCol, {
          [q.compact]: m
        }),
        children: (0, a.jsx)(z, {
          member: t
        })
      }), (0, a.jsx)("td", {
        className: o()(q.smallCol, {
          [q.compact]: m
        }),
        children: (0, a.jsxs)("div", {
          className: o()(q.actionCell),
          children: [(0, a.jsx)(c.Tooltip, {
            text: p ? J.default.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : J.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(c.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: C,
                className: o()(q.button),
                children: p ? (0, a.jsx)(D.default, {
                  width: el,
                  height: el
                }) : (0, a.jsx)(R.default, {
                  width: el,
                  height: el
                })
              })
            }
          }), (0, a.jsx)(c.Tooltip, {
            text: J.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(c.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: r,
                className: o()(q.button),
                children: (0, a.jsx)(I.default, {
                  width: el,
                  height: el
                })
              })
            }
          })]
        })
      })]
    })
  }),
  el = 18,
  ea = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
t.default = s.memo(function(e) {
  let {
    userId: t,
    guildId: l,
    style: n,
    onSelect: r,
    rowSelected: C,
    isLoading: c = !1,
    isHoldingAdvancedInfoKey: m = !1,
    compact: E = !1
  } = e, f = (0, u.useStateFromStores)([S.default], () => S.default.getGuildSidebarState(l), [l]), _ = (null == f ? void 0 : f.details.userId) === t, M = (0, u.useStateFromStores)([U.default], () => U.default.getEnhancedMember(l, t), [l, t]), h = (0, Z.useHighestRole)(M), T = (0, u.useStateFromStores)([p.default], () => p.default.getUser(t), [t]), x = (0, Z.useContextMenuModerateUser)(null != M ? M : void 0), A = s.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), x(e)
  }, [x]), L = s.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (null == r || r(M))
  }, [r, M]), g = s.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != M && (null == r || r(M))
  }, [M, r]), H = s.useCallback((e, t) => d()((0, i.omit)(e, ea), (0, i.omit)(t, ea)), []);
  return null == M ? null : (0, a.jsx)(w.default, {
    role: "row",
    value: M,
    style: n,
    className: o()(q.roundedRow, q.memberRowContainer, C && q.selected, _ && q.memberSelected, c && q.loading),
    equalityFn: H,
    onClick: L,
    onContextMenu: A,
    children: (0, a.jsx)(et, {
      member: M,
      user: T,
      highestRole: h,
      isHoldingAdvancedInfoKey: m,
      onOpenModerationMenu: A,
      onOpenProfileMenu: g,
      compact: E
    })
  })
})