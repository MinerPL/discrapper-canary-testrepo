"use strict";
n.d(t, {
  S: function() {
    return c
  }
}), n(47120);
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(941028),
  a = n(509848),
  l = n(849522),
  u = n(439170);
let _ = "@here";

function d(e) {
  return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
}

function c(e, t, n) {
  let r = (0, l.Z)(),
    [c, E] = i.useState(!1),
    I = i.useMemo(() => s().debounce(e => {
      var i, s, l, c;
      if (i = e, s = r, l = t, c = n, d(u.ZP.getProps(l, c).groups) || !(i.length < _.length) && !(i.length > s) && -1 !== i.indexOf(_) && ((0, o.b8)(l, c, a.KV), 1)) E(!0)
    }, 200, {
      maxWait: 500
    }), [r, t, n]);
  i.useEffect(() => {
    let i = u.ZP.getProps(t, n).groups;
    if (null != t && !d(i) && !c) return e.addListener("text-changed", I), () => {
      e.removeListener("text-changed", I), I.cancel()
    }
  }, [c, I, e, t, n])
}