"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var a = l("37983"),
  s = l("884691"),
  n = l("414456"),
  o = l.n(n),
  i = l("969176"),
  r = l.n(i),
  d = l("65597"),
  u = l("95410"),
  C = l("77078"),
  c = l("305961"),
  m = l("957255"),
  E = l("118530"),
  f = l("490931"),
  M = l("466818"),
  h = l("178406"),
  _ = l("624663"),
  T = l("463200"),
  S = l("868967"),
  x = l("512882"),
  A = l("149777"),
  p = l("309462"),
  L = l("49111"),
  H = l("782340"),
  N = l("748766"),
  g = l("615319");

function I(e) {
  let {
    label: t,
    onFilter: l,
    isFiltered: s,
    isSorted: n,
    className: i,
    ...r
  } = e, d = s ? "header-primary" : "header-secondary";
  return n && (d = "text-brand"), (0, a.jsx)("th", {
    className: o(N.tableHeaderCellContainer, i),
    children: (0, a.jsxs)(C.Clickable, {
      ...r,
      onClick: l,
      className: o(N.tableHeaderCell, {
        [N.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, a.jsx)(C.Text, {
        variant: "eyebrow",
        color: d,
        children: t
      }), null != l && (0, a.jsx)("div", {
        className: N.filterIconButton,
        children: (0, a.jsx)(E.default, {
          className: N.filterIcon,
          color: s ? C.tokens.colors.CONTROL_BRAND_FOREGROUND.css : C.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let R = "member-safety-force-show-signals-tooltip";

function j(e) {
  let {
    guildId: t,
    currentPagedMembers: l
  } = e, n = (0, d.useStateFromStores)([h.default], () => h.default.getSearchStateByGuildId(t), [t], r), i = (0, d.useStateFromStores)([m.default, c.default], () => m.default.can(L.Permissions.MANAGE_GUILD, c.default.getGuild(t)), [t]), {
    selectedUserIds: E,
    addUsers: j,
    clearSelection: v
  } = (0, _.default)(t), D = n.requireUnusualDmActivity || n.requireCommunicationDisabled || n.requireUnusualAccountActivity || n.requireUsernameQuarantined, b = n.selectedRoleIds.size > 0, O = null != n.selectedJoinDateOption.afterDate, B = n.selectedSort === f.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC, V = null != n.selectedAccountAgeOption.afterDate, F = n.selectedSort === f.OrderBy.ORDER_BY_USER_ID_ASC || n.selectedSort === f.OrderBy.ORDER_BY_USER_ID_DESC, y = null != n.selectedSourceInviteCode && "" !== n.selectedSourceInviteCode, U = null != n.selectedJoinSourceType, w = y || U, [k, P] = s.useState(null == u.default.get(R, null)), Z = s.useCallback(() => {
    u.default.set(R, Date.now()), P(!1)
  }, []), Y = (0, M.useCanAccessBulkBanningFeature)(t), G = s.useMemo(() => l.filter(e => (0, M.canBulkBanUser)(t, Y, e)), [Y, l, t]), J = G.length > 0, q = G.filter(e => !E.has(e)), z = 0 === q.length, K = s.useCallback(() => {
    J && (z ? v() : j(G))
  }, [J, z, v, j, G]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: N.tableHeaderRow,
      children: [Y && (0, a.jsx)("th", {
        className: o(N.tableHeaderCellContainer, g.xsmallCol),
        children: (0, a.jsx)(C.Tooltip, {
          shouldShow: !J,
          text: H.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(C.Clickable, {
            ...e,
            onClick: K,
            className: N.tableHeaderCell,
            children: (0, a.jsx)(C.Checkbox, {
              type: C.Checkbox.Types.INVERTED,
              value: z,
              disabled: !J
            })
          })
        })
      }), (0, a.jsx)(I, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), i ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(x.default, {
            guildId: t,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              isFiltered: O,
              isSorted: B,
              className: g.smallCol,
              ...l
            })
          }
        }), (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(T.default, {
            guildId: t,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              isFiltered: V,
              isSorted: F,
              className: g.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(I, {
          label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: g.smallCol
        }), (0, a.jsx)(I, {
          label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: g.smallCol
        })]
      }), i ? (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(A.default, {
          guildId: t,
          onClose: L.NOOP
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(I, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: t,
            isFiltered: w,
            className: g.smallCol,
            ...l
          })
        }
      }) : i && (0, a.jsx)(I, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
        className: g.smallCol
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
          return (0, a.jsx)(I, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            isFiltered: b,
            className: o(g.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(C.Tooltip, {
        text: H.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
        position: "top",
        align: "left",
        forceOpen: k,
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
          children: t => (0, a.jsx)(I, {
            label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": H.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, s;
              Z(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (s = e.onClick) || void 0 === s || s.call(e)
            },
            isFiltered: D,
            className: o(g.smallCol),
            onMouseEnter: () => {
              var l, a;
              Z(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
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
      }), (0, a.jsx)(I, {
        label: H.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: g.smallCol
      })]
    })
  })
}