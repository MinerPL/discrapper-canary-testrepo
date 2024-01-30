"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("969176"),
  d = l.n(o),
  r = l("65597"),
  u = l("95410"),
  C = l("77078"),
  c = l("305961"),
  f = l("957255"),
  m = l("118530"),
  E = l("490931"),
  M = l("536999"),
  h = l("466818"),
  _ = l("178406"),
  T = l("624663"),
  x = l("463200"),
  S = l("868967"),
  A = l("512882"),
  g = l("149777"),
  p = l("413989"),
  H = l("49111"),
  N = l("782340"),
  L = l("368715"),
  I = l("236807");

function R(e) {
  let {
    label: t,
    onFilter: l,
    isFiltered: n,
    isSorted: s,
    className: o,
    ...d
  } = e;
  return (0, a.jsx)("th", {
    className: i(L.tableHeaderCellContainer, o),
    children: (0, a.jsxs)(C.Clickable, {
      ...d,
      onClick: l,
      className: i(L.tableHeaderCell, {
        [L.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, a.jsx)(C.Text, {
        variant: "eyebrow",
        color: n ? "text-brand" : "header-secondary",
        children: t
      }), null != l && (0, a.jsx)("div", {
        className: L.filterIconButton,
        children: (0, a.jsx)(m.default, {
          className: L.filterIcon,
          color: s ? C.tokens.colors.CONTROL_BRAND_FOREGROUND.css : C.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let v = "member-safety-force-show-signals-tooltip";

function b(e) {
  let {
    guildId: t,
    currentPagedMembers: l
  } = e, s = (0, r.default)([_.default], () => _.default.getSearchStateByGuildId(t), [t], d), o = (0, r.default)([f.default, c.default], () => f.default.can(H.Permissions.MANAGE_GUILD, c.default.getGuild(t)), [t]), {
    selectedUserIds: m,
    addUsers: b,
    clearSelection: j
  } = (0, T.default)(t), D = s.requireUnusualDmActivity || s.requireCommunicationDisabled || s.requireUnusualAccountActivity || s.requireUsernameQuarantined, O = s.selectedRoleIds.size > 0, V = null != s.selectedJoinDateOption.afterDate, B = s.selectedSort === E.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, y = null != s.selectedAccountAgeOption.afterDate, U = s.selectedSort === E.OrderBy.ORDER_BY_USER_ID_ASC || s.selectedSort === E.OrderBy.ORDER_BY_USER_ID_DESC, F = null != s.selectedSourceInviteCode && "" !== s.selectedSourceInviteCode, w = null != s.selectedJoinSourceType, k = F || w, [Z, P] = n.useState(null == u.default.get(v, null)), Y = n.useCallback(() => {
    u.default.set(v, Date.now()), P(!1)
  }, []), G = (0, h.useCanAccessBulkBanningFeature)(t), J = (0, M.isInMembersTablesAdditionalFilteringExperiment)(t), q = o && J, z = n.useMemo(() => l.filter(e => (0, h.canBulkBanUser)(t, G, e)), [G, l, t]), K = z.length > 0, W = z.filter(e => !m.has(e)), Q = 0 === W.length, X = n.useCallback(() => {
    K && (Q ? j() : b(z))
  }, [K, Q, j, b, z]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: L.tableHeaderRow,
      children: [G && (0, a.jsx)("th", {
        className: i(L.tableHeaderCellContainer, I.xsmallCol),
        children: (0, a.jsx)(C.Tooltip, {
          shouldShow: !K,
          text: N.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(C.Clickable, {
            ...e,
            onClick: X,
            className: L.tableHeaderCell,
            children: (0, a.jsx)(C.Checkbox, {
              type: C.Checkbox.Types.INVERTED,
              value: Q,
              disabled: !K
            })
          })
        })
      }), (0, a.jsx)(R, {
        label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), J ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(A.default, {
            guildId: t,
            onClose: H.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(R, {
              label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              isFiltered: V,
              isSorted: B,
              className: I.smallCol,
              ...l
            })
          }
        }), (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(x.default, {
            guildId: t,
            onClose: H.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(R, {
              label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              isFiltered: y,
              isSorted: U,
              className: I.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(R, {
          label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: I.smallCol
        }), (0, a.jsx)(R, {
          label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: I.smallCol
        })]
      }), q ? (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(g.default, {
          guildId: t,
          onClose: H.NOOP
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(R, {
            label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: t,
            isFiltered: k,
            className: I.smallCol,
            ...l
          })
        }
      }) : o && (0, a.jsx)(R, {
        label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
        className: I.smallCol
      }), (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, a.jsx)(p.default, {
            guildId: t,
            onClose: l
          })
        },
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(R, {
            label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            isFiltered: O,
            className: i(I.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(C.Tooltip, {
        text: N.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
        position: "top",
        align: "left",
        forceOpen: Z,
        shouldShow: !0,
        color: C.Tooltip.Colors.BRAND,
        children: e => (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: e => {
            let {
              closePopout: l
            } = e;
            return (0, a.jsx)(S.default, {
              guildId: t,
              onClose: l
            })
          },
          children: t => (0, a.jsx)(R, {
            label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": N.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, n;
              Y(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (n = e.onClick) || void 0 === n || n.call(e)
            },
            isFiltered: D,
            className: i(I.smallCol),
            onMouseEnter: () => {
              var l, a;
              Y(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
            },
            onMouseDown: t.onMouseDown,
            onMouseLeave: e.onMouseLeave,
            onBlur: e.onBlur,
            onFocus: e.onFocus,
            onKeyDown: t.onKeyDown,
            "aria-controls": t["aria-controls"],
            "aria-expanded": t["aria-expanded"]
          })
        })
      }), (0, a.jsx)(R, {
        label: N.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: I.smallCol
      })]
    })
  })
}