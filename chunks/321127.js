"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(697692);

function a(e) {
  let {
    attributes: t,
    children: n,
    leaf: r,
    text: a
  } = e;
  if (r.commandName) {
    let e = s()(o.commandName, {
      [o.emptyText]: "" === a.text
    });
    return (0, i.jsx)("span", {
      ...t,
      className: e,
      spellCheck: !1,
      children: n
    })
  }
  return null
}