t.d(n, {
	w: function () {
		return c;
	}
}),
	t(47120),
	t(653041),
	t(733860);
var i = t(470079),
	a = t(581364),
	s = t(984933),
	l = t(496675),
	r = t(282923),
	o = t(981631),
	d = t(689938);
function c(e) {
	let n = i.useMemo(() => {
			let n = s.ZP.getChannels(e),
				t = [...n[s.sH]];
			t.push(...n[s.Zb].filter((e) => e.channel.isGuildVocal()));
			let i = t.map((e) => ({
				id: e.channel.id,
				name: e.channel.name,
				canManage: l.Z.can(o.Plq.MANAGE_ROLES, e.channel)
			}));
			return (
				i.unshift({
					id: (0, a.bD)(e),
					name: d.Z.Messages.INTEGRATIONS_APPLICATION_ALL_CHANNELS,
					canManage: !0
				}),
				i
			);
		}, [e]),
		[t, c] = i.useState(''),
		I = i.useMemo(() => {
			let e = (function (e) {
				return e.startsWith('#') ? e.substr(1) : e;
			})(t);
			return (0, r.B)(n, u, e);
		}, [n, t]);
	return {
		query: t,
		results: I,
		setQuery: c,
		unfilteredCount: n.length
	};
}
function u(e) {
	return {
		id: e.id,
		names: [e.name]
	};
}
