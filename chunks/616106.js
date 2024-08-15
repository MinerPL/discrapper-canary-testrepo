var i, a, s, r, l = n(913527),
  o = n.n(l),
  c = n(442837),
  u = n(570140),
  d = n(255078),
  _ = n(594174),
  E = n(74538);
let I = !1;
class m extends(r = c.ZP.Store) {
  shouldShowReactivateNotice() {
let e = _.default.getCurrentUser();
return !(0, E.I5)(e) && I;
  }
}
s = 'SubscriptionRemindersStore', (a = 'displayName') in(i = m) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new m(u.Z, {
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
let {
  subscription: t
} = e;
if (null != t) {
  var n;
  let e = d.Z.createFromServer(t);
  if (null == (0, E.Af)(e) || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null)
    return;
  let i = o()(e.metadata.ended_at);
  o()().isBetween(i.clone().add(4, 'days'), i.clone().add(11, 'days')) && (I = !0);
}
  }
});