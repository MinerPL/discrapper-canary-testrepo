l.d(t, {
  Z: function() {
return R;
  }
}), l(47120);
var n = l(735250),
  a = l(470079),
  o = l(120356),
  s = l.n(o),
  i = l(498607),
  r = l.n(i),
  C = l(399606),
  c = l(433517),
  d = l(481060),
  u = l(430824),
  m = l(496675),
  _ = l(588215),
  E = l(241559),
  h = l(893966),
  M = l(256003),
  x = l(170323),
  b = l(434368),
  T = l(42170),
  L = l(123846),
  g = l(42551),
  I = l(981631),
  p = l(689938),
  H = l(325465),
  f = l(124927);

function A(e) {
  let {
label: t,
onFilter: l,
isFiltered: a,
isSorted: o,
className: i,
...r
  } = e, C = a ? 'header-primary' : 'header-secondary';
  return o && (C = 'text-brand'), (0, n.jsx)('th', {
className: s()(H.tableHeaderCellContainer, i),
children: (0, n.jsxs)(d.Clickable, {
  ...r,
  onClick: l,
  className: s()(H.tableHeaderCell, {
    [H.tableHeaderCellWithFilter]: null != l
  }),
  children: [
    (0, n.jsx)(d.Text, {
      variant: 'eyebrow',
      color: C,
      children: t
    }),
    null != l && (0, n.jsx)('div', {
      className: H.filterIconButton,
      children: (0, n.jsx)(d.FiltersHorizontalIcon, {
        size: 'custom',
        className: H.filterIcon,
        color: a ? d.tokens.colors.CONTROL_BRAND_FOREGROUND.css : d.tokens.colors.TEXT_MUTED.css,
        width: 16,
        height: 16
      })
    })
  ]
})
  });
}
let N = 'member-safety-force-show-signals-tooltip';

function R(e) {
  let {
guildId: t,
currentPagedMembers: l
  } = e, o = (0, C.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], r()), i = (0, C.e7)([
m.Z,
u.Z
  ], () => m.Z.can(I.Plq.MANAGE_GUILD, u.Z.getGuild(t)), [t]), {
selectedUserIds: R,
addUsers: S,
clearSelection: Z
  } = (0, M.Z)(t), j = o.requireUnusualDmActivity || o.requireCommunicationDisabled || o.requireUnusualAccountActivity || o.requireUsernameQuarantined, v = o.selectedRoleIds.size > 0, D = null != o.selectedJoinDateOption.afterDate, O = o.selectedSort === _.d$.ORDER_BY_GUILD_JOINED_AT_ASC, B = null != o.selectedAccountAgeOption.afterDate, V = o.selectedSort === _.d$.ORDER_BY_USER_ID_ASC || o.selectedSort === _.d$.ORDER_BY_USER_ID_DESC, U = null != o.selectedSourceInviteCode && '' !== o.selectedSourceInviteCode, w = null != o.selectedJoinSourceType, k = U || w, [F, y] = a.useState(null == c.K.get(N, null)), P = a.useCallback(() => {
c.K.set(N, Date.now()), y(!1);
  }, []), Y = (0, E.xC)(t), G = a.useMemo(() => l.filter(e => (0, E.rX)(t, Y, e)), [
Y,
l,
t
  ]), z = G.length > 0, q = 0 === G.filter(e => !R.has(e)).length, W = a.useCallback(() => {
z && (q ? Z() : S(G));
  }, [
z,
q,
Z,
S,
G
  ]);
  return (0, n.jsx)('thead', {
children: (0, n.jsxs)('tr', {
  className: H.tableHeaderRow,
  children: [
    Y && (0, n.jsx)('th', {
      className: s()(H.tableHeaderCellContainer, f.xsmallCol),
      children: (0, n.jsx)(d.Tooltip, {
        shouldShow: !z,
        text: p.Z.Messages.MEMBER_SAFETY_CANNOT_SELECT_ALL,
        children: e => (0, n.jsx)(d.Clickable, {
          ...e,
          onClick: W,
          className: H.tableHeaderCell,
          children: (0, n.jsx)(d.Checkbox, {
            type: d.Checkbox.Types.INVERTED,
            value: q,
            disabled: !z
          })
        })
      })
    }),
    (0, n.jsx)(A, {
      label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_NAME
    }),
    i ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(d.Popout, {
          animation: d.Popout.Animation.FADE,
          position: 'bottom',
          spacing: 4,
          align: 'left',
          renderPopout: () => (0, n.jsx)(T.Z, {
            guildId: t,
            onClose: I.dG4
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, n.jsx)(A, {
              label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
              onFilter: t,
              isFiltered: D,
              isSorted: O,
              className: f.smallCol,
              ...l
            });
          }
        }),
        (0, n.jsx)(d.Popout, {
          animation: d.Popout.Animation.FADE,
          position: 'bottom',
          spacing: 4,
          align: 'left',
          renderPopout: () => (0, n.jsx)(x.Z, {
            guildId: t,
            onClose: I.dG4
          }),
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return (0, n.jsx)(A, {
              label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
              onFilter: t,
              isFiltered: B,
              isSorted: V,
              className: f.smallCol,
              ...l
            });
          }
        })
      ]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(A, {
          label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOINED_AT,
          className: f.smallCol
        }),
        (0, n.jsx)(A, {
          label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACCOUNT_AGE,
          className: f.smallCol
        })
      ]
    }),
    i ? (0, n.jsx)(d.Popout, {
      animation: d.Popout.Animation.FADE,
      position: 'bottom',
      spacing: 4,
      align: 'left',
      renderPopout: () => (0, n.jsx)(L.Z, {
        guildId: t,
        onClose: I.dG4
      }),
      children: e => {
        let {
          onClick: t,
          ...l
        } = e;
        return (0, n.jsx)(A, {
          label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
          onFilter: t,
          isFiltered: k,
          className: f.smallCol,
          ...l
        });
      }
    }) : i && (0, n.jsx)(A, {
      label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_JOIN_METHOD,
      className: f.smallCol
    }),
    (0, n.jsx)(d.Popout, {
      animation: d.Popout.Animation.FADE,
      position: 'bottom',
      spacing: 4,
      align: 'left',
      renderPopout: e => {
        let {
          closePopout: l
        } = e;
        return (0, n.jsx)(g.Z, {
          guildId: t,
          onClose: l
        });
      },
      children: e => {
        let {
          onClick: t,
          ...l
        } = e;
        return (0, n.jsx)(A, {
          label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ROLES,
          onFilter: t,
          isFiltered: v,
          className: s()(f.mediumCol),
          ...l
        });
      }
    }),
    (0, n.jsx)(d.Tooltip, {
      text: p.Z.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
      position: 'top',
      align: 'left',
      forceOpen: F,
      shouldShow: !0,
      color: d.Tooltip.Colors.BRAND,
      children: e => (0, n.jsx)(d.Popout, {
        animation: d.Popout.Animation.FADE,
        position: 'bottom',
        spacing: 4,
        align: 'left',
        renderPopout: e => {
          let {
            closePopout: l
          } = e;
          return (0, n.jsx)(b.Z, {
            guildId: t,
            onClose: l
          });
        },
        children: t => (0, n.jsx)(A, {
          label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_FLAGS,
          'aria-label': p.Z.Messages.MEMBER_SAFETY_SIGNALS_DESCRIPTION,
          onFilter: l => {
            var n, a;
            P(), null === (n = t.onClick) || void 0 === n || n.call(t, l), null === (a = e.onClick) || void 0 === a || a.call(e);
          },
          isFiltered: j,
          className: s()(f.smallCol),
          onMouseEnter: () => {
            var l, n;
            P(), null === (l = e.onMouseEnter) || void 0 === l || l.call(e), null === (n = t.onMouseEnter) || void 0 === n || n.call(t);
          },
          onMouseDown: t.onMouseDown,
          onMouseLeave: e.onMouseLeave,
          onBlur: e.onBlur,
          onFocus: e.onFocus,
          onKeyDown: t.onKeyDown,
          'aria-controls': t['aria-controls'],
          'aria-expanded': t['aria-expanded']
        })
      })
    }),
    (0, n.jsx)(A, {
      label: p.Z.Messages.MEMBER_SAFETY_TABLE_HEADER_ACTIONS,
      className: f.smallCol
    })
  ]
})
  });
}