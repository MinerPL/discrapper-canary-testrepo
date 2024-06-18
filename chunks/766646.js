"use strict";
n.d(t, {
  n: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(159242);

function a(e) {
  let {
    id: t,
    tag: n = "span",
    showOnFocus: r,
    children: a
  } = e;
  return (0, i.jsx)(n, {
    id: t,
    className: s()({
      [o.hiddenVisually]: !r,
      [o.showOnFocus]: r
    }),
    children: a
  })
}