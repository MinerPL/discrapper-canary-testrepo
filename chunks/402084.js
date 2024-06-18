"use strict";
n.d(t, {
  q: function() {
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
    disabled: n,
    isFocused: s,
    showDefaultFocus: _ = !1,
    menuItemProps: d,
    children: c
  } = e, E = r.useRef(null);
  return r.useLayoutEffect(() => {
    if (!s) return;
    let e = E.current;
    if (null == e) return;
    (0, a.F)(E);
    let t = e.querySelector('[tabindex="0"]');
    null == t || t.focus()
  }, [s]), (0, i.jsx)("div", {
    ref: E,
    className: o()(u.item, l._[t], {
      [u.disabled]: n,
      [u.focused]: _ && s,
      [u.hideInteraction]: !_
    }),
    "aria-disabled": n,
    ...d,
    children: c
  })
}