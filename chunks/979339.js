n.d(t, {
  Z: function() {
return r;
  }
}), n(47120), n(653041);
var i = n(442837),
  a = n(136015),
  l = n(565799),
  s = n(501655);

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
[n] = (0, i.e7)([l.Z], () => {
  let n = l.Z.getMutableParticipants(e).filter(e => e.type === s.Ui.VOICE),
    i = [];
  for (let e of n) {
    if (i.length >= t)
      break;
    if (null == i.find(t => t.id === e.user.id))
      i.push(e.user);
  }
  return [{
      participants: n,
      usersInSummary: i
    },
    l.Z.getParticipantsVersion(e)
  ];
}, [
  e,
  t
], a.Q);
  return n;
}