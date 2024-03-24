"use strict";
l.r(t), l.d(t, {
  default: function() {
    return L
  }
}), l("222007"), l("808653"), l("424973");
var a = l("37983"),
  s = l("884691"),
  n = l("414456"),
  o = l.n(n),
  i = l("448105"),
  r = l.n(i),
  d = l("483366"),
  u = l.n(d),
  C = l("969176"),
  c = l.n(C),
  m = l("65597"),
  E = l("77078"),
  f = l("571067"),
  M = l("130037"),
  h = l("178406"),
  _ = l("645266"),
  T = l("412013"),
  S = l("782340"),
  x = l("373198"),
  A = l("615319");
let p = new Set;

function L(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, M.useTrackMemberFilterRolesUsed)(t), i = (0, m.useStateFromStores)([h.default], () => h.default.getSearchStateByGuildId(t), [t], c), [d, C] = s.useState(i.selectedRoleIds), L = (0, f.useRoleRows)(t, p, !0), H = (e, l) => {
    let {
      record: s
    } = e;
    return (0, a.jsx)(E.ComboboxItem, {
      value: s.id,
      children: (0, a.jsxs)("div", {
        className: o(x.roleNameContainer),
        children: [(0, a.jsxs)("div", {
          className: o(x.roleLabel),
          children: [(0, a.jsx)("div", {
            className: o(x.labelBackground, l && x.selected)
          }), (0, a.jsx)(E.ComboboxItem.Label, {
            children: (0, a.jsx)(T.default, {
              className: o(A.roleTooltipItem),
              role: s,
              guildId: t
            }, s.id)
          })]
        }), (0, a.jsx)("div", {
          className: x.checkboxContainer,
          children: (0, a.jsx)(E.ComboboxItem.Checkbox, {
            checked: l
          })
        })]
      })
    }, s.id)
  }, N = (e, t) => L.reduce((l, a) => {
    let {
      record: s
    } = a, n = e.has(s.id);
    return r(t.toLowerCase(), s.name.toLowerCase()) ? l.push(H(a, n)) : n && l.push(H(a, n)), l
  }, []), g = s.useCallback(e => {
    (0, _.updateSearchState)(t, {
      selectedRoleIds: e
    }), n(e)
  }, [t, n]), I = s.useCallback(u(g, 300), [g]), R = s.useCallback(e => {
    let t;
    C(t = d.has(e) ? new Set([...d].filter(t => t !== e)) : new Set([...d, e])), I(t)
  }, [d, I]);
  return (0, a.jsx)(E.ComboboxPopout, {
    className: o(x.rolePopout),
    placeholder: S.default.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
    value: d,
    onChange: R,
    onClose: () => {
      l()
    },
    multiSelect: !0,
    showScrollbar: !0,
    autoFocus: !0,
    children: e => N(d, e)
  })
}