"use strict";
n.d(t, {
  B: function() {
    return o
  }
}), n(653041);
var i = n(470079),
  r = n(592204),
  s = n(712950);
let o = () => {
  let {
    profanity: e,
    sexualContent: t,
    slurs: n
  } = (0, s.g)(), o = (0, r.Xo)({
    location: "use-should-filter-keywords"
  });
  return i.useMemo(() => {
    let i = [];
    return o ? (e && i.push("profanity"), t && i.push("sexualContent"), n && i.push("slurs"), i.join(":")) : null
  }, [e, t, n, o])
}