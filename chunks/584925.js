n(47120);
var i,
	a = n(442837),
	s = n(570140),
	r = n(70956),
	l = n(761080),
	o = n(207205);
function c(e, t, n) {
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
let d = 5 * r.Z.Millis.DAY,
	u = { readIdToTimestampMap: {} };
class _ extends (i = a.ZP.DeviceSettingsStore) {
	initialize(e) {
		u = null != e && null != e.readIdToTimestampMap ? { readIdToTimestampMap: e.readIdToTimestampMap } : { readIdToTimestampMap: {} };
		let t = Date.now() - d;
		for (let e of Object.keys(u.readIdToTimestampMap).filter((e) => u.readIdToTimestampMap[e] < t)) delete u.readIdToTimestampMap[e];
	}
	getReadTimestamp(e) {
		return u.readIdToTimestampMap[e];
	}
	getState() {
		return u;
	}
	getUserAgnosticState() {
		return u;
	}
}
c(_, 'displayName', 'GravityUnreadStateStore'),
	c(_, 'persistKey', 'GravityUnreadStateStore'),
	(t.Z = new _(s.Z, {
		GRAVITY_ACK_ITEMS: function (e) {
			let { items: t, override: n } = e;
			t.forEach((e) => {
				null != e && (null == u.readIdToTimestampMap[e.id] || n) && (u.readIdToTimestampMap[e.id] = e.timestamp);
			});
		},
		LOAD_GRAVITY_DEHYDRATED: function (e) {
			let { items: t } = e;
			for (let e of t) e.type === l.Rr.MESSAGE ? null == u.readIdToTimestampMap[e.id] && !(0, o.$U)(e.data.channel_id, e.data.message_id) && (u.readIdToTimestampMap[e.id] = 0) : e.type === l.Rr.SUMMARY && null == u.readIdToTimestampMap[e.id] && !(0, o.$U)(e.data.channel_id, e.data.summary_id) && (u.readIdToTimestampMap[e.id] = 0);
		}
	}));
