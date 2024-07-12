t.d(n, {
  T: function() {
return o;
  }
});
var i = t(570140),
  r = t(155414);
async function o(e, n) {
  i.Z.dispatch({
type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH',
guildId: e,
priceTierType: n
  });
  try {
let t = await r.X(e, n);
i.Z.dispatch({
  type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS',
  guildId: e,
  priceTierType: n,
  priceTiers: t
});
  } catch (t) {
i.Z.dispatch({
  type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE',
  guildId: e,
  priceTierType: n
});
  }
}