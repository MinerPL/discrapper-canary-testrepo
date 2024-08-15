t.d(n, {
	X: function () {
		return l;
	}
});
var r = t(544891),
	i = t(881052),
	o = t(981631);
let l = async (e, n) => {
	try {
		return (
			await r.tn.get({
				url: o.ANM.PRICE_TIERS,
				query: {
					price_tier_type: n,
					guild_id: e
				}
			})
		).body;
	} catch (e) {
		throw new i.Hx(e);
	}
};
