"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("222007"), l("808653"), l("424973");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("448105"),
  d = l.n(o),
  r = l("483366"),
  u = l.n(r),
  C = l("969176"),
  c = l.n(C),
  f = l("65597"),
  m = l("77078"),
  E = l("571067"),
  M = l("130037"),
  h = l("178406"),
  _ = l("645266"),
  T = l("412013"),
  x = l("782340"),
  S = l("554490"),
  A = l("236807");
let g = new Set;

function p(e) {
  let {
    guildId: t,
    onClose: l
  } = e, s = (0, M.useTrackMemberFilterRolesUsed)(t), o = (0, f.default)([h.default], () => h.default.getSearchStateByGuildId(t), [t], c), [r, C] = n.useState(o.selectedRoleIds), p = (0, E.useRoleRows)(t, g, !0), H = (e, l) => {
    let {
      record: n
    } = e;
    return (0, a.jsx)(m.ComboboxItem, {
      value: n.id,
      children: (0, a.jsxs)("div", {
        className: i(S.roleNameContainer),
        children: [(0, a.jsxs)("div", {
          className: i(S.roleLabel),
          children: [(0, a.jsx)("div", {
            className: i(S.labelBackground, l && S.selected)
          }), (0, a.jsx)(m.ComboboxItem.Label, {
            children: (0, a.jsx)(T.default, {
              className: i(A.roleTooltipItem),
              role: n,
              guildId: t
            }, n.id)
          })]
        }), (0, a.jsx)("div", {
          className: S.checkboxContainer,
          children: (0, a.jsx)(m.ComboboxItem.Checkbox, {
            checked: l
          })
        })]
      })
    }, n.id)
  }, N = (e, t) => p.reduce((l, a) => {
    let {
      record: n
    } = a, s = e.has(n.id);
    return d(t.toLowerCase(), n.name.toLowerCase()) ? l.push(H(a, s)) : s && l.push(H(a, s)), l
  }, []), L = n.useCallback(e => {
    (0, _.updateSearchState)(t, {
      selectedRoleIds: e
    }), s(e)
  }, [t, s]), I = n.useCallback(u(L, 300), [L]), R = n.useCallback(e => {
    let t;
    C(t = r.has(e) ? new Set([...r].filter(t => t !== e)) : new Set([...r, e])), I(t)
  }, [r, I]);
  return (0, a.jsx)(m.ComboboxPopout, {
    className: i(S.rolePopout),
    placeholder: x.default.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
    value: r,
    onChange: R,
    onClose: () => {
      l()
    },
    multiSelect: !0,
    showScrollbar: !0,
    autoFocus: !0,
    children: e => N(r, e)
  })
}