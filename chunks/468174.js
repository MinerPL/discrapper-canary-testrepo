"use strict";
n.d(e, {
  g: function() {
    return a
  }
});
var r = n(46834),
  i = n(876122),
  s = n(633401);

function a(t, e, n = () => {}) {
  let a;
  let o = {
    ...t
  };
  void 0 !== o.name && void 0 === o.description && (o.description = o.name);
  let u = (0, i.Gd)(),
    l = u.getScope(),
    c = l.getSpan(),
    d = function() {
      if (!!(0, s.z)()) return c ? c.startChild(o) : u.startTransaction(o)
    }();

  function h() {
    d && d.finish(), u.getScope().setSpan(c)
  }
  l.setSpan(d);
  try {
    a = e(d)
  } catch (t) {
    throw d && d.setStatus("internal_error"), n(t), h(), t
  }
  return (0, r.J8)(a) ? Promise.resolve(a).then(() => {
    h()
  }, t => {
    d && d.setStatus("internal_error"), n(t), h()
  }) : h(), a
}