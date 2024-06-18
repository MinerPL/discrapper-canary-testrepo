"use strict";
n.d(t, {
  I: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(743236),
  l = n(939350),
  u = n(768160);

function _(e) {
  let {
    color: t = "default",
    label: n,
    control: s,
    disabled: _,
    isFocused: d,
    showDefaultFocus: c = !1,
    menuItemProps: E,
    onClose: I
  } = e, T = r.useRef(null), h = r.useRef(null);
  r.useLayoutEffect(() => {
    var e, t, n;
    d ? ((0, a.F)(T), null === (e = h.current) || void 0 === e || e.focus()) : null === (n = h.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n)
  }, [d]);
  let S = r.useCallback(() => {
      var e, t;
      (null === (t = h.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && I()
    }, [I]),
    f = s({
      onClose: I,
      disabled: _,
      isFocused: d
    }, h);
  return (0, i.jsxs)("div", {
    onClick: S,
    className: o()(u.item, l._[t], {
      [u.disabled]: _,
      [u.focused]: c && d,
      [u.hideInteraction]: !c
    }),
    "aria-disabled": _,
    ...E,
    children: [null != n ? (0, i.jsx)("div", {
      className: u.labelContainer,
      children: (0, i.jsx)("div", {
        className: u.label,
        children: n
      })
    }) : null, f]
  })
}