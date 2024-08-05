n(653041);
var i, a = n(442837),
  s = n(570140),
  r = n(695346),
  l = n(885110),
  o = n(70956),
  c = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let u = [],
  _ = !1;

function h() {
  return u.length >= 4 && u.some(e => e < Date.now() - 3 * o.Z.Millis.DAY);
}
class E extends(i = a.ZP.PersistedStore) {
  initialize(e) {
null != e && Array.isArray(e.sessionStartsWithDND) && (u = e.sessionStartsWithDND);
  }
  showNagBar() {
return _;
  }
  getState() {
return {
  sessionStartsWithDND: u
};
  }
  getTemp() {
return {
  x: r.Cr.getSetting()
};
  }
}
d(E, 'displayName', 'HabitualDNDStore'), d(E, 'persistKey', 'habitualDND'), new E(s.Z, {
  POST_CONNECTION_OPEN: function() {
l.Z.getStatus() === c.Skl.DND && '0' === r.Cr.getSetting() ? (u.push(Date.now()), u = u.filter(e => e > Date.now() - 5 * o.Z.Millis.DAY), h() && setTimeout(() => {
  s.Z.dispatch({
    type: 'HABITUAL_DND_CLEAR'
  });
}, 15 * o.Z.Millis.SECOND)) : u = [];
  },
  HABITUAL_DND_CLEAR: function() {
_ = !!h() || !1, u = [];
  }
});