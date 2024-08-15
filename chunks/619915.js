n.d(t, {
	QN: function () {
		return s;
	},
	ZP: function () {
		return d;
	},
	gb: function () {
		return p;
	},
	uF: function () {
		return f;
	}
}),
	n(47120),
	n(653041);
var i = n(470079),
	l = n(442837),
	r = n(835473),
	a = n(158776),
	o = n(594174),
	u = n(823379),
	c = n(317381);
function d(e, t) {
	return p(
		(0, l.Wu)([c.ZP], () => (null != e && null != e.id && '' !== e.id ? c.ZP.getEmbeddedActivitiesForChannel(e.id) : c.i6)),
		t
	);
}
function s(e) {
	let t = p((0, l.e7)([c.ZP], () => (null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6)));
	return i.useMemo(() => {
		let e = new Map();
		return (
			t.forEach((t) => {
				var n;
				let i = t.embeddedActivity.channelId,
					l = null !== (n = e.get(i)) && void 0 !== n ? n : [];
				l.push(t), e.set(i, l);
			}),
			e
		);
	}, [t]);
}
function p(e, t) {
	let n = e.map((e) => e.applicationId),
		a = (0, r.Z)(n),
		c = new Set([]);
	for (let t of e) for (let e of t.userIds) c.add(e);
	let d = (0, l.Wu)(
		[o.default],
		() => {
			let e = [];
			for (let t of c) e.push(o.default.getUser(t));
			return e;
		},
		[c]
	);
	return i.useMemo(() => {
		let n = new Map();
		return (
			d.forEach((e) => {
				null != e && n.set(e.id, e);
			}),
			e
				.map((e, i) => {
					let l = a[i],
						r = [];
					if (null != r)
						for (let i of e.userIds) {
							let e = n.get(i);
							if (null != e && null != t) {
								let n = t(e);
								null != n && r.push(n);
							}
						}
					return null == l
						? null
						: {
								embeddedActivity: e,
								application: l,
								userParticipantAvatarUrls: r
							};
				})
				.filter(u.lm)
		);
	}, [e, a, d, t]);
}
function f(e) {
	return (0, l.e7)(
		[a.Z],
		() => {
			let t = new Map();
			return (
				e.forEach((e) => {
					var n;
					let i = a.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, (t) => {
						var n;
						return t.application_id === (null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id);
					});
					t.set(null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id, {
						...e,
						presenceActivity: i
					});
				}),
				t
			);
		},
		[e],
		l.pF
	);
}
