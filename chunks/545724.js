"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("748780"),
  o = n("924826"),
  u = n("481060"),
  d = n("239091"),
  c = n("687683"),
  f = n("527105");
t.default = function(e) {
  let {
    index: t,
    children: l,
    user: E,
    channel: h,
    onClick: _,
    isFocused: C,
    isActive: m,
    onOtherHover: S,
    className: I
  } = e, [p, T] = s.useState(!1), [g, A] = s.useState(!1), N = () => {
    T(!0), C && !m && !g && (null == S || S())
  }, v = () => {
    T(!1)
  }, O = (e, t) => {
    null != t && (A(!0), (0, d.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("64409")]).then(n.bind(n, "881351"));
      return n => (0, a.jsx)(e, {
        ...n,
        user: t
      })
    }, {
      onClose: () => {
        A(!1)
      }
    }))
  };
  return (0, a.jsx)(o.ListNavigatorItem, {
    id: h.id,
    children: e => (0, a.jsx)(u.FocusRing, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, a.jsx)(r.default.div, {
        className: i()(f.messageRequestItem, I, {
          [f.active]: m || g,
          [f.firstItem]: 0 === t
        }),
        onContextMenu: e => O(e, E),
        onMouseEnter: N,
        onMouseLeave: v,
        onClick: null != _ ? _ : void 0,
        style: {
          LIST_ROW_HEIGHT: c.LIST_ROW_HEIGHT,
          opacity: 1
        },
        ...e,
        children: l(p || m || g)
      })
    })
  })
}