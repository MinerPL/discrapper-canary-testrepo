n.d(e, {
  Z: function() {
return c;
  }
}), n(411104);
var i = n(570140),
  s = n(710845),
  a = n(209492),
  o = n(981631);
let l = new s.Z('CloudSync');
class r {
  constructor(t) {
var e, n, i;
e = this, i = void 0, (n = 'message') in e ? Object.defineProperty(e, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[n] = i, this.message = t;
  }
}
async function c(t, e) {
  let n, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  i.Z.dispatch({
type: 'GAME_CLOUD_SYNC_START',
applicationId: t,
branchId: e
  });
  try {
if ((n = await a.j(t, e, s)).type === o.QCD.CONFLICT)
  throw i.Z.dispatch({
    type: 'GAME_CLOUD_SYNC_CONFLICT',
    applicationId: t,
    branchId: e,
    next: n.next,
    remote: n.remote
  }), new r('Conflict in cloud sync.');
(n.type === o.QCD.PULL || n.type === o.QCD.PUSH) && l.info('Sync complete', n);
  } catch (n) {
if (n instanceof r)
  throw n;
throw i.Z.dispatch({
  type: 'GAME_CLOUD_SYNC_ERROR',
  applicationId: t,
  branchId: e
}), l.error('Failed to cloud sync:', n), Error('Failed to cloud sync.');
  }
  return i.Z.dispatch({
type: 'GAME_CLOUD_SYNC_COMPLETE',
applicationId: t,
branchId: e
  }), n;
}