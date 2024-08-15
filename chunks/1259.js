t.d(n, {
	_: function () {
		return m;
	},
	t: function () {
		return u;
	}
}),
	t(47120);
var a = t(470079),
	r = t(442837),
	i = t(818083),
	s = t(650774),
	o = t(430824),
	l = t(496675),
	c = t(946314),
	d = t(981631);
let u = (0, i.B)({
	kind: 'guild',
	id: '2021-12_discovery_requirements_m2',
	label: 'Lower Server Discovery member count requirements',
	defaultConfig: { enableLowerMemberCountReq: !1 },
	treatments: [
		{
			id: 1,
			label: 'Allow a server to become discoverable with lower member count requirements',
			config: { enableLowerMemberCountReq: !0 }
		}
	]
});
function m(e) {
	let n = (0, r.e7)([o.Z], () => o.Z.getGuild(e)),
		t = (0, r.e7)([l.Z], () => l.Z.can(d.Plq.ADMINISTRATOR, n)),
		i = null == n ? void 0 : n.hasFeature(d.oNc.COMMUNITY),
		[m] = (0, r.Wu)([s.Z], () => [s.Z.getMemberCount(e)], [e]),
		_ = (null != m ? m : 0) >= c.WZ && (null != m ? m : 0) < c.TN,
		f = t && i && _;
	a.useEffect(() => {
		f &&
			u.trackExposure({
				guildId: e,
				location: '747eb3_1'
			});
	}, [e, f]);
	let { enableLowerMemberCountReq: C } = u.useExperiment(
		{
			guildId: e,
			location: '747eb3_2'
		},
		{
			autoTrackExposure: !1,
			disable: !f
		}
	);
	return C;
}
