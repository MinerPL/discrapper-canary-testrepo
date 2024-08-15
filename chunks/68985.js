n(47120);
var r,
	i = n(442837),
	a = n(570140),
	s = n(626135),
	o = n(261376),
	l = n(981631);
function u(e, t, n) {
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
let c = {
	numberOfDCsShownToday: 0,
	dailyCapPeriodStart: null,
	dismissibleContentSeenDuringSession: new Set(),
	dailyCapOverridden: !1,
	renderedAtTimestamps: new Map(),
	lastDCDismissed: null
};
class d extends (r = i.ZP.PersistedStore) {
	initialize(e) {
		if (null != e) {
			var t;
			(c.numberOfDCsShownToday = null !== (t = e.numberOfDCsShownToday) && void 0 !== t ? t : 0),
				(c.dailyCapPeriodStart = e.dailyCapPeriodStart),
				(c.dailyCapOverridden = e.dailyCapOverridden);
		}
		(c.dismissibleContentSeenDuringSession = new Set()), (c.lastDCDismissed = null);
	}
	getState() {
		return c;
	}
	get dailyCapOverridden() {
		return c.dailyCapOverridden;
	}
	get lastDCDismissed() {
		return c.lastDCDismissed;
	}
	getRenderedAtTimestamp(e) {
		return c.renderedAtTimestamps.get(e);
	}
	hasUserHitDCCap(e) {
		if (
			(null != e && (o.O.has(e) || c.dailyCapOverridden)) ||
			(null != e && c.dismissibleContentSeenDuringSession.has(e))
		)
			return !1;
		let t = new Date();
		return (
			t.setHours(0, 0, 0, 0),
			null != c.dailyCapPeriodStart &&
				c.dailyCapPeriodStart < t.getTime() &&
				((c.numberOfDCsShownToday = 0), (c.dailyCapPeriodStart = null)),
			c.numberOfDCsShownToday >= 3
		);
	}
}
u(d, 'displayName', 'DismissibleContentFrameworkStore'),
	u(d, 'persistKey', 'DismissibleContentFrameworkStore'),
	u(d, 'migrations', [(e) => ({ ...e })]),
	(t.Z = new d(a.Z, {
		LOGOUT: function () {
			c = {
				...c,
				dismissibleContentSeenDuringSession: new Set(),
				renderedAtTimestamps: new Map()
			};
		},
		DCF_DAILY_CAP_OVERRIDE: function (e) {
			let { value: t } = e;
			c.dailyCapOverridden = t;
		},
		DCF_HANDLE_DC_SHOWN: function (e) {
			let { dismissibleContent: t } = e,
				n = new Date();
			if (
				(c.renderedAtTimestamps.set(t, n.getTime()),
				!(o.O.has(t) || c.dailyCapOverridden || c.dismissibleContentSeenDuringSession.has(t)))
			) {
				if ((c.dismissibleContentSeenDuringSession.add(t), null == c.dailyCapPeriodStart)) {
					let e = new Date();
					e.setHours(0, 0, 0, 0), (c.dailyCapPeriodStart = e.getTime());
				}
				(c.numberOfDCsShownToday += 1),
					c.numberOfDCsShownToday > 3 &&
						s.default.track(l.rMx.DCF_CAP_EXCEEDED, {
							cap_type: 'daily_cap',
							dismissible_content: t,
							shown_dcs: c.numberOfDCsShownToday
						});
			}
		},
		DCF_HANDLE_DC_DISMISSED: function (e) {
			let { dismissibleContent: t } = e;
			(c.lastDCDismissed = t), c.renderedAtTimestamps.delete(t);
		},
		DCF_RESET: function () {
			(c.dailyCapPeriodStart = null),
				(c.numberOfDCsShownToday = 0),
				(c.dismissibleContentSeenDuringSession = new Set()),
				(c.lastDCDismissed = null);
		}
	}));
