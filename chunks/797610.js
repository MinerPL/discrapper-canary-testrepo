n.d(t, {
	Ib: function () {
		return l;
	},
	M9: function () {
		return d;
	},
	g0: function () {
		return _;
	},
	gJ: function () {
		return c;
	}
}),
	n(470079),
	n(442837);
var r = n(430824),
	i = n(496675),
	a = n(266090),
	s = n(981631),
	o = n(176505);
function l(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	return u(
		(function (e) {
			var t;
			let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '1e9ccc_1',
				i = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : s.lds;
			return a.Z.useExperiment(
				{
					guildId: i,
					location: r
				},
				{ autoTrackExposure: n }
			).experimentState;
		})(e, n),
		e,
		t
	);
}
function u(e, t, n) {
	if (null == t) {
		if (null != n && n.isPrivate())
			return !!n.hasFlag(o.zZ.CLYDE_AI) || r.Z.getGuildIds().some((e) => d(r.Z.getGuild(e)));
		return !1;
	}
	return null != e && e !== a.P.None && i.Z.can(s.Plq.USE_CLYDE_AI, n);
}
function c(e, t) {
	var n;
	let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		i = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : s.lds;
	return u(
		a.Z.getCurrentConfig(
			{
				guildId: i,
				location: '1e9ccc_2'
			},
			{ autoTrackExposure: r }
		).experimentState,
		e,
		t
	);
}
function d(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	return E(e, t) !== a.P.None;
}
function _(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	return E(e, t) === a.P.ClydeProfiles;
}
function E(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	if (null == e) return !1;
	let n = e.id;
	return a.Z.getCurrentConfig(
		{
			guildId: n,
			location: '1e9ccc_4'
		},
		{ autoTrackExposure: t }
	).experimentState;
}
