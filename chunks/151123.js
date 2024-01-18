"use strict";
l.r(t), l.d(t, {
  default: function() {
    return j
  }
}), l("222007");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("969176"),
  d = l.n(o),
  u = l("65597"),
  r = l("95410"),
  C = l("77078"),
  c = l("685665"),
  f = l("305961"),
  m = l("957255"),
  E = l("118530"),
  M = l("536999"),
  h = l("466818"),
  T = l("178406"),
  x = l("624663"),
  _ = l("463200"),
  H = l("868967"),
  A = l("512882"),
  p = l("149777"),
  S = l("413989"),
  L = l("49111"),
  g = l("782340"),
  N = l("368715"),
  v = l("236807");

function I(e) {
  let {
    label: t,
    onFilter: l,
    selected: n,
    className: s,
    ...o
  } = e;
  return (0, a.jsx)("th", {
    className: i(N.tableHeaderCellContainer, s),
    children: (0, a.jsxs)(C.Clickable, {
      ...o,
      onClick: l,
      className: i(N.tableHeaderCell, {
        [N.tableHeaderCellWithFilter]: null != l
      }),
      children: [(0, a.jsx)(C.Text, {
        variant: "eyebrow",
        color: n ? "text-brand" : "header-secondary",
        children: t
      }), null != l && (0, a.jsx)("div", {
        className: N.filterIconButton,
        children: (0, a.jsx)(E.default, {
          className: N.filterIcon,
          color: n ? C.tokens.colors.CONTROL_BRAND_FOREGROUND.css : C.tokens.colors.TEXT_MUTED.css,
          width: 16,
          height: 16
        })
      })]
    })
  })
}
let R = "member-safety-force-show-signals-tooltip";

function j(e) {
  var t;
  let {
    guildId: l,
    currentPagedMembers: s
  } = e, o = (0, u.default)([T.default], () => T.default.getSearchStateByGuildId(l), [l], d), E = (0, u.default)([m.default, f.default], () => m.default.can(L.Permissions.MANAGE_GUILD, f.default.getGuild(l)), [l]), {
    selectedUserIds: j,
    addUsers: b,
    clearSelection: D
  } = (0, x.default)(l), O = o.requireUnusualDmActivity || o.requireCommunicationDisabled || o.requireUnusualAccountActivity || o.requireUsernameQuarantined, V = o.selectedRoleIds.size > 0, B = null != o.selectedJoinDateOption.afterDate, y = null != o.selectedAccountAgeOption.afterDate, F = null != o.selectedSourceInviteCode && "" !== o.selectedSourceInviteCode, U = null != o.selectedJoinSourceType, w = F || U, [k, Z] = n.useState(null == r.default.get(R, null)), P = n.useCallback(() => {
    r.default.set(R, Date.now()), Z(!1)
  }, []), {
    analyticsLocations: Y
  } = (0, c.default)(), G = null !== (t = null == Y ? void 0 : Y[0]) && void 0 !== t ? t : null, q = (0, h.useCanAccessBulkBanningFeature)(l, G, !0), J = (0, M.isInMembersTablesAdditionalFilteringExperiment)(l), K = n.useMemo(() => s.filter(e => (0, h.canBulkBanUser)(l, q, e)), [q, s, l]), z = K.length > 0, W = K.filter(e => !j.has(e)), Q = 0 === W.length, X = n.useCallback(() => {
    z && (Q ? D() : b(K))
  }, [z, Q, D, b, K]);
  return (0, a.jsx)("thead", {
    children: (0, a.jsxs)("tr", {
      className: N.tableHeaderRow,
      children: [q && (0, a.jsx)("th", {
        className: i(N.tableHeaderCellContainer, v.xsmallCol),
        children: (0, a.jsx)(C.Tooltip, {
          shouldShow: !z,
          text: g.default.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
          children: e => (0, a.jsx)(C.Clickable, {
            ...e,
            onClick: X,
            className: N.tableHeaderCell,
            children: (0, a.jsx)(C.Checkbox, {
              type: C.Checkbox.Types.INVERTED,
              value: Q,
              disabled: !z
            })
          })
        })
      }), (0, a.jsx)(I, {
        label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
      }), J ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(A.default, {
            guildId: l,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              selected: B,
              className: v.smallCol,
              ...l
            })
          }
        }), (0, a.jsx)(C.Popout, {
          animation: C.Popout.Animation.FADE,
          position: "bottom",
          spacing: 4,
          align: "left",
          renderPopout: () => (0, a.jsx)(_.default, {
            guildId: l,
            onClose: L.NOOP
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, a.jsx)(I, {
              label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              selected: y,
              className: v.smallCol,
              ...l
            })
          }
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(I, {
          label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: v.smallCol
        }), (0, a.jsx)(I, {
          label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: v.smallCol
        })]
      }), E && J ? (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: () => (0, a.jsx)(p.default, {
          guildId: l,
          onClose: L.NOOP
        }),
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(I, {
            label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
            onFilter: t,
            selected: w,
            className: v.smallCol,
            ...l
          })
        }
      }) : null, (0, a.jsx)(C.Popout, {
        animation: C.Popout.Animation.FADE,
        position: "bottom",
        spacing: 4,
        align: "left",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, a.jsx)(S.default, {
            guildId: l,
            onClose: t
          })
        },
        children: e => {
          let {
            onClick: t,
            ...l
          } = e;
          return (0, a.jsx)(I, {
            label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
            onFilter: t,
            selected: V,
            className: i(v.mediumCol),
            ...l
          })
        }
      }), (0, a.jsx)(C.Tooltip, {
        text: g.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
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
              closePopout: t
            } = e;
            return (0, a.jsx)(H.default, {
              guildId: l,
              onClose: t
            })
          },
          children: t => (0, a.jsx)(I, {
            label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
            "aria-label": g.default.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
            onFilter: l => {
              var a, n;
              P(), null === (a = t.onClick) || void 0 === a || a.call(t, l), null === (n = e.onClick) || void 0 === n || n.call(e)
            },
            selected: O,
            className: i(v.smallCol),
            onMouseEnter: () => {
              var l, a;
              P(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (a = t.onMouseEnter) || void 0 === a || a.call(t)
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
        label: g.default.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
        className: v.smallCol
      })]
    })
  })
}