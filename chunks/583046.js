"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(442837),
  r = n(509545),
  s = n(212895),
  o = n(474936),
  a = n(231338);

function l(e) {
  var t, n;
  let {
    activeSubscription: l,
    skuIDs: u,
    paymentSourceId: _,
    isGift: d
  } = e;
  u = u.filter(e => e !== o.Si.NONE);
  let c = (0, i.e7)([r.Z], () => {
      let e = r.Z.getPlanIdsForSkus(u).filter(e => !d || o.dJ.has(e));
      return e.length > 0 ? r.Z.get(e[0]) : null
    }),
    E = null == c ? [] : (0, s.DE)(c.id, _, d),
    I = null !== (n = null !== (t = E.find(e => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : a.pK.USD;
  return {
    ...(0, s.gr)(I, null == c ? void 0 : c.id, _, d, u),
    currencies: E
  }
}