var n,
	a = i(442837),
	o = i(570140);
function c(e, t, i) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = i),
		e
	);
}
let r = {
	canPlayWowMoment: !1,
	isFetchingWowMomentMedia: !1,
	wowMomentWumpusMediaUrl: null
};
class s extends (n = a.ZP.PersistedStore) {
	initialize(e) {
		null != e && (r = e), (r.canPlayWowMoment = !1), (r.isFetchingWowMomentMedia = !1), (r.wowMomentWumpusMediaUrl = null);
	}
	getState() {
		return r;
	}
	get canPlayWowMoment() {
		return r.canPlayWowMoment;
	}
	get isFetchingWowMomentMedia() {
		return r.isFetchingWowMomentMedia;
	}
	get wowMomentWumpusMedia() {
		return r.wowMomentWumpusMediaUrl;
	}
}
c(s, 'displayName', 'PurchasedItemsFestivityStore'),
	c(s, 'persistKey', 'PurchasedItemsFestivityStore'),
	c(s, 'migrations', [(e) => ({ ...e })]),
	(t.Z = new s(o.Z, {
		LOGOUT: function () {
			r = {
				canPlayWowMoment: !1,
				isFetchingWowMomentMedia: !1,
				wowMomentWumpusMediaUrl: null
			};
		},
		PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT: function (e) {
			let { value: t } = e;
			r.canPlayWowMoment = t;
		},
		PURCHASED_ITEMS_FESTIVITY_IS_FETCHING_WOW_MOMENT_MEDIA: function (e) {
			let { value: t } = e;
			r.isFetchingWowMomentMedia = t;
		},
		PURCHASED_ITEMS_FESTIVITY_FETCH_WOW_MOMENT_MEDIA_SUCCESS: function (e) {
			let { wumpusMedia: t } = e;
			(r.wowMomentWumpusMediaUrl = t), (r.isFetchingWowMomentMedia = !1);
		}
	}));
