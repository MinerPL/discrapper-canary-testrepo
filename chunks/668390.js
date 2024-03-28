"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("780384"),
  o = s("481060"),
  d = s("239091"),
  u = s("741247"),
  c = s("151888"),
  h = s("808268"),
  m = s("689938"),
  E = s("802059");

function f(e) {
  let {
    role: t,
    guild: n
  } = e, [r, c] = a.useState(!1);
  return (0, u.useHasGuildRoleItems)(n, t) ? (0, l.jsx)(o.Clickable, {
    onClick: e => {
      c(!0), (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(s.bind(s, "741247"));
        return s => (0, l.jsx)(e, {
          ...s,
          role: t,
          guild: n
        })
      }, {
        onClose: () => c(!1)
      })
    },
    className: i()(E.roleOverflow, {
      [E.open]: r
    }),
    children: (0, l.jsx)(h.default, {
      width: 20,
      height: 20
    })
  }) : null
}

function g(e) {
  let {
    color: t,
    id: n,
    role: i,
    guild: u,
    children: h,
    isDragging: g,
    selectedItem: S,
    onItemSelect: T,
    itemType: N,
    locked: _,
    lockTooltip: p,
    showContextMenu: C,
    theme: x,
    roleStyle: M,
    "aria-label": I
  } = e, R = a.useCallback(e => {
    (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await s.e("65889").then(s.bind(s, "731646"));
      return t => (0, l.jsx)(e, {
        ...t,
        id: n,
        label: m.default.Messages.COPY_ID_ROLE
      })
    })
  }, [n]);
  return g ? (0, l.jsx)("div", {
    className: E.dragged
  }) : (0, l.jsx)(o.TabBar.Item, {
    className: E.role,
    id: n,
    selectedItem: S,
    onItemSelect: T,
    itemType: N,
    "aria-label": null != p ? "".concat(I, ", ").concat(p) : I,
    children: (0, l.jsxs)("div", {
      className: E.roleContent,
      children: ["dot" === M ? (0, l.jsx)(o.RoleDot, {
        color: null != t ? t : void 0,
        className: E.roleDot,
        background: !1,
        tooltip: !1
      }) : (0, l.jsx)(o.RoleCircle, {
        color: null != t ? t : void 0,
        className: E.roleCircle
      }), function() {
        if (!_) return null;
        let e = (0, r.isThemeDark)(x) ? s("27377") : s("514811");
        return (0, l.jsx)(o.Tooltip, {
          text: p,
          color: o.Tooltip.Colors.RED,
          children: t => (0, l.jsx)(c.default, {
            className: E.lock,
            src: e,
            ...t
          })
        })
      }(), (0, l.jsx)("div", {
        className: E.roleInner,
        onContextMenu: R,
        children: h
      }), C && null != i ? (0, l.jsx)(f, {
        guild: u,
        role: i
      }) : null]
    })
  })
}