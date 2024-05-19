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
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    n = (0, l.useStateFromStoresArray)([s.default], () => {
      let t = e.participants.map(e => s.default.getUser(e)).filter(i.isNotNullish),
        n = t.find(t => t.id === e.author_id),
        a = t.filter(t => t.id !== e.author_id);
      return null == n ? r : [...a, n]
    }, [e]),
    o = a.useMemo(() => n.slice(-t), [t, n]),
    u = o[o.length - 1],
    d = o[o.length - 2],
    c = n.length - 1;
  return {
    orderedParticipants: n,
    displayParticipants: o,
    participant1: u,
    participant2: d,
    numOtherParticipants: c
  }
}