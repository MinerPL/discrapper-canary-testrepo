"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("594174"),
  i = n("823379");
let r = [];

function o(e) {
  let t = (0, l.useStateFromStoresArray)([s.default], () => e.participants.map(e => s.default.getUser(e)).filter(i.isNotNullish), [e.participants]);
  return a.useMemo(() => {
    let n = t.find(t => t.id === e.author_id),
      a = t.filter(t => t.id !== e.author_id);
    return null == n ? r : [...a, n]
  }, [e, t])
}