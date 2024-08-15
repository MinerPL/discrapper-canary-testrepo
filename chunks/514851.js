var i,
	a,
	s,
	r,
	l = n(442837),
	o = n(570140);
let c = !1,
	u = !1,
	d = [];
class _ extends (r = l.ZP.Store) {
	getForCampaign(e) {
		let t = d.filter((t) => t.campaign === e);
		return 1 === t.length ? t[0] : null;
	}
	shouldFetchCampaignContext() {
		return !c && !u;
	}
}
(s = 'CampaignContextStore'),
	(a = 'displayName') in (i = _)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new _(o.Z, {
		CAMPAIGN_CONTEXT_FETCH_SUCCESS: function (e) {
			(u = !0), (c = !1), (d = e.campaignContexts);
		},
		CAMPAIGN_CONTEXT_FETCH_FAILURE: function () {
			(u = !0), (c = !1);
		},
		CAMPAIGN_CONTEXT_FETCH: function () {
			c = !0;
		},
		LOGOUT: function () {
			(c = !1), (u = !1), (d = []);
		}
	}));
