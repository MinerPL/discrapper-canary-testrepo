t.d(n, {
	Z: function () {
		return _;
	}
}),
	t(47120);
var l = t(470079),
	s = t(392711),
	o = t.n(s),
	i = t(442837),
	r = t(699682),
	u = t(70956),
	a = t(709054),
	c = t(897285),
	d = t(924301),
	E = t(854698);
function _(e, n, t) {
	let s = (0, i.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(e)),
		_ = (0, r.Z)(t),
		[C, N] = l.useState(null != t && null != s ? (0, E.PJ)(4, (0, E.Ho)(t), new Date(s.scheduled_start_time)) : []);
	l.useEffect(() => {
		if (null == _ || null == t || null == s || o().isEqual(_, t)) return;
		let e = (0, E.Ho)(t);
		N((0, E.PJ)(C.length, e, new Date(s.scheduled_start_time)));
	}, [t, C.length, s, _]),
		l.useEffect(() => {
			if (null == n) return;
			let t = C.map((e) => a.default.fromTimestamp(Math.floor(e.getTime() / u.Z.Millis.SECOND) * u.Z.Millis.SECOND));
			c.Z.getGuildEventUserCounts(n, e, t);
		}, [e, n, C]);
	let h = l.useMemo(() => {
		if (null == t || 0 === C.length || (null == s ? void 0 : s.scheduled_start_time) == null) return !1;
		let e = new Date();
		e.setFullYear(e.getFullYear() + E.hn);
		let n = C[C.length - 1],
			l = (0, E.Ho)(t).after(n);
		return null != l && l <= e;
	}, [t, C, null == s ? void 0 : s.scheduled_start_time]);
	return {
		recurrenceStartTimes: C,
		canViewMoreRecurrences: h,
		updateRecurrenceStartTimes: () => {
			if (null == t || null == s) return;
			let e = (0, E.Ho)(t),
				n = C[C.length - 1];
			N([...C, ...(0, E.PJ)(4, e, n, !0)]);
		}
	};
}
