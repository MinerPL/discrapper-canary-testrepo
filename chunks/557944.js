"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("803997"),
  n = s.n(i),
  o = s("512722"),
  r = s.n(o),
  d = s("442837"),
  u = s("481060"),
  c = s("749210"),
  h = s("430824"),
  m = s("285952"),
  C = s("6048"),
  I = s("695464"),
  M = s("399860"),
  f = s("335049"),
  N = s("689079"),
  b = s("689938"),
  x = s("351827");

function g(e) {
  let {
    editPermissions: t,
    guildId: s,
    hasMemberSearch: i,
    headerText: o,
    onClose: g,
    overwrittenKeys: p,
    search: S,
    searchPlaceholderText: k,
    selectedPermissionCount: A,
    transitionState: _
  } = e, j = (0, d.useStateFromStores)([h.default], () => h.default.getGuild(s), [s]);
  r()(null != j, "");
  let [y, T] = a.useState(null), {
    query: P,
    results: E,
    setQuery: O
  } = S(s), [R, D] = a.useState({}), L = a.useMemo(() => Object.keys(R).length, [R]), v = L + A >= N.APPLICATION_COMMAND_PERMISSIONS_LIMIT, w = a.useMemo(() => E.filter(e => {
    let t = (0, M.toPermissionKey)(e.id, e.type);
    return !p.includes(t)
  }), [p, E]), B = a.useCallback((e, t) => {
    D(s => {
      let l = (0, M.toPermissionKey)(e, t),
        a = {
          ...s
        };
      return l in s ? delete a[l] : !v && (a[l] = {
        id: e,
        permission: !0,
        type: t
      }), a
    })
  }, [v, D]), H = a.useCallback(() => {
    t(R, []), g()
  }, [t, g, R]);
  a.useEffect(() => () => clearTimeout(y), [y]);
  let K = a.useCallback(e => {
      O(e), i && T(t => (clearTimeout(t), 0 === e.length) ? null : setTimeout(() => {
        c.default.requestMembers(s, e, 200, !1)
      }, 500))
    }, [s, i, O, T]),
    q = a.useCallback(e => {
      let t = w[e],
        s = (0, M.toPermissionKey)(t.id, t.type),
        a = s in R,
        i = v && !a;
      return (0, l.jsx)("div", {
        className: x.item,
        children: (0, l.jsx)(u.Checkbox, {
          type: u.Checkbox.Types.INVERTED,
          className: n()({
            [x.checkboxItemDisabled]: i
          }),
          disabled: i,
          value: a,
          onChange: () => B(t.id, t.type),
          children: (0, l.jsx)(f.default, {
            guild: j,
            id: t.id,
            type: t.type,
            isLocked: !1
          })
        })
      }, s)
    }, [w, j, v, B, R]);
  return a.useEffect(() => {
    c.default.requestMembers(s, void 0, 200, !1)
  }, [s]), (0, l.jsxs)(u.ModalRoot, {
    "aria-label": b.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_PERMISSIONS_MODIFY,
    transitionState: _,
    children: [(0, l.jsxs)(u.ModalHeader, {
      separator: !1,
      direction: m.default.Direction.VERTICAL,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: x.header,
        children: o
      }), v ? (0, l.jsx)(u.Heading, {
        variant: "heading-sm/medium",
        color: "text-danger",
        children: b.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX
      }) : null]
    }), (0, l.jsxs)(u.ModalContent, {
      className: x.modalContent,
      children: [(0, l.jsx)(C.default, {
        className: x.searchBar,
        query: P,
        placeholder: k,
        "aria-label": k,
        onChange: K,
        onClear: () => O(""),
        size: C.default.Sizes.MEDIUM
      }), (0, l.jsx)(I.default, {
        role: "listbox",
        renderRow: q,
        rowCount: w.length,
        rowCountBySection: [w.length],
        rowHeight: 36,
        className: x.__invalid_list
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        type: "submit",
        onClick: H,
        disabled: 0 === L,
        children: b.default.Messages.ADD
      }), (0, l.jsx)(u.Button, {
        onClick: g,
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        children: b.default.Messages.CANCEL
      })]
    })]
  })
}