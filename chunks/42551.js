"use strict";
l.r(t), l.d(t, {
  default: function() {
    return L
  }
}), l("47120"), l("724458"), l("653041");
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  o = l.n(n),
  i = l("658722"),
  r = l.n(i),
  d = l("954955"),
  u = l.n(d),
  C = l("498607"),
  c = l.n(C),
  m = l("399606"),
  E = l("481060"),
  f = l("563115"),
  _ = l("910693"),
  M = l("893966"),
  h = l("527379"),
  T = l("285173"),
  S = l("689938"),
  x = l("799500"),
  A = l("256194");
let p = new Set;

function L(e) {
  let {
    guildId: t,
    onClose: l
  } = e, n = (0, _.useTrackMemberFilterRolesUsed)(t), i = (0, m.useStateFromStores)([M.default], () => M.default.getSearchStateByGuildId(t), [t], c()), [d, C] = s.useState(i.selectedRoleIds), L = (0, f.useRoleRows)(t, p, !0), g = (e, l) => {
    let {
      record: s
    } = e;
    return (0, a.jsx)(E.ComboboxItem, {
      value: s.id,
      children: (0, a.jsxs)("div", {
        className: o()(x.roleNameContainer),
        children: [(0, a.jsxs)("div", {
          className: o()(x.roleLabel),
          children: [(0, a.jsx)("div", {
            className: o()(x.labelBackground, l && x.selected)
          }), (0, a.jsx)(E.ComboboxItem.Label, {
            children: (0, a.jsx)(T.default, {
              className: o()(A.roleTooltipItem),
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
  }, H = (e, t) => L.reduce((l, a) => {
    let {
      record: s
    } = a, n = e.has(s.id);
    return r()(t.toLowerCase(), s.name.toLowerCase()) ? l.push(g(a, n)) : n && l.push(g(a, n)), l
  }, []), N = s.useCallback(e => {
    (0, h.updateSearchState)(t, {
      selectedRoleIds: e
    }), n(e)
  }, [t, n]), I = s.useCallback(u()(N, 300), [N]), R = s.useCallback(e => {
    let t;
    C(t = d.has(e) ? new Set([...d].filter(t => t !== e)) : new Set([...d, e])), I(t)
  }, [d, I]);
  return (0, a.jsx)(E.ComboboxPopout, {
    className: o()(x.rolePopout),
    placeholder: S.default.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
    value: d,
    onChange: R,
    onClose: () => {
      l()
    },
    multiSelect: !0,
    showScrollbar: !0,
    autoFocus: !0,
    children: e => H(d, e)
  })
}