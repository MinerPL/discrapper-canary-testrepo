"use strict";
l.r(t), l.d(t, {
  default: function() {
    return ea
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("917351"),
  d = l("969176"),
  r = l.n(d),
  u = l("249654"),
  C = l("65597"),
  c = l("669491"),
  f = l("77078"),
  m = l("87657"),
  E = l("149638"),
  M = l("681937"),
  h = l("509"),
  _ = l("459824"),
  T = l("654017"),
  x = l("982108"),
  S = l("305961"),
  A = l("957255"),
  g = l("697218"),
  p = l("91551"),
  H = l("4845"),
  N = l("635731"),
  L = l("491401"),
  I = l("663745"),
  R = l("781896"),
  v = l("864982"),
  b = l("151185"),
  j = l("339123"),
  D = l("387111"),
  O = l("158998"),
  V = l("64905"),
  B = l("536999"),
  y = l("466818"),
  U = l("178406"),
  F = l("150162"),
  w = l("290491"),
  k = l("624663"),
  Z = l("553275"),
  P = l("412013"),
  Y = l("49111"),
  G = l("782340"),
  J = l("236807");
let q = n.memo(function(e) {
  let {
    member: t
  } = e, l = n.useMemo(() => (0, h.isCommunicationDisabled)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = n.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]), o = (0, B.isInMembersTableSafetySignalsExperiment)(t.guildId);
  return (0, a.jsxs)("div", {
    className: i(J.flagContainer),
    children: [t.hasUnusualDmActivity && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_UNUSUAL_DM_ACTIVITY_TOOLTIP,
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
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    }), l && (0, a.jsx)(f.Tooltip, {
      "aria-label": G.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP,
      allowOverflow: !0,
      text: (0, a.jsxs)("div", {
        className: J.communicationDisabledTooltip,
        children: [(0, a.jsx)("div", {
          children: G.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED_TOOLTIP
        }), (0, a.jsx)(p.default, {
          deadline: s,
          showUnits: !0,
          stopAtOneSec: !0
        })]
      }),
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: l
        } = e;
        return (0, a.jsx)(L.default, {
          width: 20,
          height: 20,
          onMouseEnter: t,
          onMouseLeave: l,
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), o && (0, T.isSpammer)(t.userId) && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_UNUSUAL_ACCOUNT_ACTIVITY_TOOLTIP,
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
          color: c.default.colors.TEXT_DANGER.css
        })
      }
    }), o && (0, M.hasAutomodQuarantinedProfile)(t) && (0, a.jsx)(f.Tooltip, {
      text: G.default.Messages.MEMBER_SAFETY_QUARANTINED_USER_TOOLTIP,
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
          color: c.default.colors.TEXT_MUTED.css
        })
      }
    })]
  })
});

function z(e) {
  let {
    member: t
  } = e, l = (0, C.default)([S.default], () => S.default.getGuild(t.guildId), [t.guildId]), s = n.useMemo(() => {
    var e;
    if (null == l) return [];
    let a = null !== (e = null == l ? void 0 : l.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var l, n, s, i;
      return null !== (i = null !== (s = null === (l = a[t]) || void 0 === l ? void 0 : l.position) && void 0 !== s ? s : 0 - (null === (n = a[e]) || void 0 === n ? void 0 : n.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, l]);
  return null == l || 0 === s.length ? null : (0, a.jsx)("div", {
    className: J.roleTooltipItemContainer,
    children: s.map(e => (0, a.jsx)(P.default, {
      className: i(J.roleTooltipItem),
      role: l.roles[e],
      guildId: t.guildId
    }, e))
  })
}
let K = n.memo(function(e) {
    let {
      member: t,
      highestRole: l
    } = e, s = (0, C.default)([S.default], () => S.default.getGuild(t.guildId), [t.guildId]), [o, d] = n.useState(!1), r = t.roles.length - 1, u = n.useMemo(() => new Intl.NumberFormat(G.default.getLocale()).format(r), [r]), c = (0, Z.useContextMenuModerateRoles)(t), m = (0, C.default)([A.default], () => A.default.can(Y.Permissions.MANAGE_ROLES, s), [s]), E = n.useCallback(e => () => {
      d(!0), null == e || e()
    }, []), M = n.useCallback(e => () => {
      d(!1), null == e || e()
    }, []);
    return null == s ? null : (0, a.jsxs)("div", {
      className: i(J.roleContainer),
      children: [null != l && (0, a.jsx)(P.default, {
        className: i(J.roleTooltipItem, J.highestRole),
        role: l,
        guildId: t.guildId
      }), r > 0 && (0, a.jsx)(f.Tooltip, {
        "aria-label": G.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP,
        tooltipContentClassName: J.roleTooltip,
        allowOverflow: !0,
        text: (0, a.jsx)("div", {
          className: J.roleTooltipSafetyContainer,
          children: o ? (0, a.jsx)(z, {
            member: t
          }) : G.default.Messages.MEMBER_SAFETY_MORE_ROLES_TOOLTIP
        }),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(J.otherRoles),
            onMouseEnter: E(t),
            onMouseLeave: M(l),
            children: (0, a.jsxs)(f.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: ["+", u]
            })
          })
        }
      }), m && (0, a.jsx)(f.Tooltip, {
        text: G.default.Messages.MEMBER_SAFETY_TABLE_ADD_ROLES_TOOLTIP,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: l
          } = e;
          return (0, a.jsx)(f.Clickable, {
            className: i(J.otherRoles, J.addRoleContainer),
            onClick: c,
            onMouseEnter: t,
            onMouseLeave: l,
            children: (0, a.jsx)(b.default, {
              className: i(J.addRoleIcon),
              width: 16,
              height: 16
            })
          })
        }
      })]
    })
  }),
  W = n.memo(function(e) {
    var t;
    let {
      member: l,
      user: n
    } = e;
    return null == n || null == l ? null : (0, a.jsxs)("div", {
      className: i(J.memberNameContainer),
      children: [(0, a.jsx)("div", {
        className: i(J.memberAvatar),
        children: (0, a.jsx)(m.default, {
          user: n
        })
      }), (0, a.jsx)("div", {
        className: i(J.memberName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-sm/medium",
          children: (0, a.jsx)(f.NameWithRole, {
            name: D.default.getName(l.guildId, null, n),
            color: null !== (t = l.colorString) && void 0 !== t ? t : void 0,
            className: i(J.memberNameText)
          })
        })
      }), (0, a.jsx)("div", {
        className: i(J.memberGlobalName),
        children: (0, a.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: O.default.getUserTag(n)
        })
      })]
    })
  });

function Q(e) {
  let t = null == e ? null : (0, V.formatDateRelativeTime)(e, V.MembersTableDateFormats.JOINED_AT),
    l = new Date(null != e ? e : 0).toLocaleDateString(G.default.getLocale(), V.MEMBER_JOIN_DATE_TOOLTIP_CONFIG);
  return {
    short: t,
    long: l
  }
}

function X(e) {
  let {
    member: t,
    showLongDate: l
  } = e, [s, o] = n.useState(null);
  return (n.useEffect(() => {
    o(Q(t.joinedAtTimestamp))
  }, [t.joinedAtTimestamp]), (0, E.default)(() => {
    o(Q(t.joinedAtTimestamp))
  }, 1e4), (null == s ? void 0 : s.short) == null) ? null : l ? (0, a.jsx)("div", {
    className: i(J.joinedAtContainer),
    children: (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: s.long
    })
  }) : (0, a.jsx)("div", {
    className: i(J.joinedAtContainer),
    children: (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: s.long,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-normal",
        children: s.short
      })
    })
  })
}
let $ = n.memo(function(e) {
    let {
      member: t,
      showLongDate: l
    } = e, {
      accountCreationDateShort: s,
      accountCreationDateLong: i
    } = n.useMemo(() => {
      let e = u.default.extractTimestamp(t.userId),
        l = (0, V.formatDateRelativeTime)(e, V.MembersTableDateFormats.ACCOUNT_AGE),
        a = new Date(e).toLocaleDateString(G.default.getLocale(), V.ACCOUNT_AGE_DATE_TOOLTIP_CONFIG);
      return {
        accountCreationDateShort: l,
        accountCreationDateLong: a
      }
    }, [t.userId]);
    return l ? (0, a.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      children: i
    }) : (0, a.jsx)(f.Tooltip, {
      align: "left",
      text: i,
      children: e => (0, a.jsx)(f.Text, {
        ...e,
        variant: "text-sm/medium",
        color: "text-normal",
        children: s
      })
    })
  }),
  ee = n.memo(function(e) {
    let {
      member: t,
      user: l,
      highestRole: s,
      isHoldingAdvancedInfoKey: o,
      onOpenModerationMenu: d,
      onOpenProfileMenu: r,
      compact: u
    } = e, c = (0, C.default)([A.default, S.default], () => A.default.can(Y.Permissions.MANAGE_GUILD, S.default.getGuild(t.guildId)), [t.guildId]), {
      selectedUserIds: m,
      addUsers: E,
      removeUser: M
    } = (0, k.default)(t.guildId), h = (0, y.useCanAccessBulkBanningFeature)(t.guildId), T = (0, y.useCanBulkBanUser)(t.guildId, h, t.userId), x = (0, _.useCanAccessGuildMemberModView)(t.guildId), g = n.useCallback(e => {
      e.stopPropagation(), e.preventDefault(), null != t && T && (m.has(t.userId) ? M(t.userId) : E([t.userId]))
    }, [E, T, t, M, m]);
    return (0, a.jsxs)(a.Fragment, {
      children: [h && (0, a.jsx)(f.Tooltip, {
        tooltipClassName: J.disabledActionTooltip,
        shouldShow: !T,
        text: G.default.Messages.MEMBER_SAFETY_ACTION_PERMISSIONS_MISSING,
        children: e => (0, a.jsx)("td", {
          ...e,
          children: (0, a.jsx)("div", {
            className: i(J.checkbox, J.xsmallCol),
            children: (0, a.jsx)(f.Clickable, {
              onClick: g,
              children: (0, a.jsx)(f.Checkbox, {
                type: f.Checkbox.Types.INVERTED,
                value: m.has(t.userId),
                disabled: !T
              })
            })
          })
        })
      }), (0, a.jsx)("td", {
        className: i({
          [J.compact]: u
        }),
        children: (0, a.jsx)(W, {
          member: t,
          user: l
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: u
        }),
        children: (0, a.jsx)(X, {
          showLongDate: o,
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: u
        }),
        children: (0, a.jsx)($, {
          showLongDate: o,
          member: t
        })
      }), c && (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: u
        }),
        children: (0, a.jsx)(w.default, {
          userId: t.userId,
          guildId: t.guildId
        })
      }), (0, a.jsx)("td", {
        className: i(J.mediumCol, {
          [J.compact]: u
        }),
        children: (0, a.jsx)(K, {
          member: t,
          highestRole: s
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: u
        }),
        children: (0, a.jsx)(q, {
          member: t
        })
      }), (0, a.jsx)("td", {
        className: i(J.smallCol, {
          [J.compact]: u
        }),
        children: (0, a.jsxs)("div", {
          className: i(J.actionCell),
          children: [(0, a.jsx)(f.Tooltip, {
            text: x ? G.default.Messages.MEMBER_SAFETY_TABLE_MOD_VIEW_TOOLTIP : G.default.Messages.MEMBER_SAFETY_TABLE_PROFILE_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: r,
                className: i(J.button),
                children: x ? (0, a.jsx)(j.default, {
                  width: et,
                  height: et
                }) : (0, a.jsx)(R.default, {
                  width: et,
                  height: et
                })
              })
            }
          }), (0, a.jsx)(f.Tooltip, {
            text: G.default.Messages.MEMBER_SAFETY_TABLE_OVERFLOW_TOOLTIP,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(f.Clickable, {
                onMouseEnter: t,
                onMouseLeave: l,
                onClick: d,
                className: i(J.button),
                children: (0, a.jsx)(I.default, {
                  width: et,
                  height: et
                })
              })
            }
          })]
        })
      })]
    })
  }),
  et = 18,
  el = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"];
var ea = n.memo(function(e) {
  let {
    userId: t,
    guildId: l,
    style: s,
    onSelect: d,
    rowSelected: u,
    isLoading: c = !1,
    isHoldingAdvancedInfoKey: f = !1,
    compact: m = !1
  } = e, E = (0, C.default)([x.default], () => x.default.getGuildSidebarState(l), [l]), M = (null == E ? void 0 : E.details.userId) === t, h = (0, C.default)([U.default], () => U.default.getEnhancedMember(l, t), [l, t]), _ = (0, Z.useHighestRole)(h), T = (0, C.default)([g.default], () => g.default.getUser(t), [t]), S = (0, Z.useContextMenuModerateUser)(null != h ? h : void 0), A = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), S(e)
  }, [S]), p = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != h && (null == d || d(h))
  }, [d, h]), H = n.useCallback(e => {
    e.stopPropagation(), e.preventDefault(), null != h && (null == d || d(h))
  }, [h, d]), N = n.useCallback((e, t) => r((0, o.omit)(e, el), (0, o.omit)(t, el)), []);
  return null == h ? null : (0, a.jsx)(F.default, {
    role: "row",
    value: h,
    style: s,
    className: i(J.roundedRow, J.memberRowContainer, u && J.selected, M && J.memberSelected, c && J.loading),
    equalityFn: N,
    onClick: p,
    onContextMenu: A,
    children: (0, a.jsx)(ee, {
      member: h,
      user: T,
      highestRole: _,
      isHoldingAdvancedInfoKey: f,
      onOpenModerationMenu: A,
      onOpenProfileMenu: H,
      compact: m
    })
  })
})