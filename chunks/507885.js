n(47120);
var i,
	a = n(442837),
	s = n(570140),
	r = n(701488);
function l(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let o = new Set(),
	c = new Set([r.ES.DISCORD_TURNS_8]);
class d extends (i = a.ZP.PersistedStore) {
	initialize(e) {
		null != e &&
			(Array.isArray(e.acknowledged) && (o = new Set(e.acknowledged)),
			Array.isArray(e.opened) && (c = new Set(e.opened)));
	}
	getState() {
		return {
			acknowledged: o,
			opened: c
		};
	}
	getOpened() {
		return c;
	}
	getAcknowledged() {
		return o;
	}
	isOpened(e) {
		return c.has(e);
	}
	isAcknowledged(e) {
		return o.has(e);
	}
}
l(d, 'displayName', 'ActivitiesWhatsNewStore'),
	l(d, 'persistKey', 'ActivitiesWhatsNewStore'),
	(t.Z = new d(s.Z, {
		ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION: function (e) {
			let { section: t } = e;
			o.add(t);
		},
		ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION: function (e) {
			let { section: t } = e;
			c.add(t);
		}
	}));
