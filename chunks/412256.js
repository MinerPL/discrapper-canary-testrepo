"use strict";
n.r(t), n.d(t, {
  MenuControlItem: function() {
    return d
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("697917"),
  l = n("389802"),
  u = n("946032");

function d(e) {
  let {
    color: t = "default",
    label: n,
    control: r,
    disabled: d,
    isFocused: c,
    showDefaultFocus: f = !1,
    menuItemProps: _,
    onClose: h
  } = e, g = s.useRef(null), m = s.useRef(null);
  s.useLayoutEffect(() => {
    var e, t, n;
    c ? ((0, o.ensureItemVisible)(g), null === (e = m.current) || void 0 === e || e.focus()) : null === (n = m.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n)
  }, [c]);
  let E = s.useCallback(() => {
      var e, t;
      let n = null === (t = m.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t);
      n && h()
    }, [h]),
    p = r({
      onClose: h,
      disabled: d,
      isFocused: c
    }, m);
  return (0, i.jsxs)("div", {
    onClick: E,
    className: a(u.item, l.MENU_ITEM_COLORS[t], {
      [u.disabled]: d,
      [u.focused]: f && c,
      [u.hideInteraction]: !f
    }),
    "aria-disabled": d,
    ..._,
    children: [null != n ? (0, i.jsx)("div", {
      className: u.labelContainer,
      children: (0, i.jsx)("div", {
        className: u.label,
        children: n
      })
    }) : null, p]
  })
}