i.d(n, {
	KM: function () {
		return S;
	},
	U0: function () {
		return A;
	},
	YG: function () {
		return f;
	},
	y9: function () {
		return E;
	}
});
var e = i(470079),
	a = i(442837),
	o = i(709054),
	l = i(103879),
	c = i(364226),
	s = i(531441),
	u = i(236289),
	r = i(788080),
	_ = i(800530);
function d() {
	return (0, a.Wu)([u.Z], () => u.Z.getClassifications()).sort(
		(t, n) => o.default.extractTimestamp(n.id) - o.default.extractTimestamp(t.id)
	);
}
function f(t) {
	let n;
	let i = (0, a.e7)([u.Z], () => u.Z.getClassification(t)),
		o = (0, a.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
		d = (0, a.e7)([u.Z], () => u.Z.getIsDsaEligible()),
		f = (0, c.A)('classification_detail');
	if ((0, r.FB)(i)) {
		var E;
		n =
			(null === (E = i.guild_metadata) || void 0 === E ? void 0 : E.member_type) === s.wO.OWNER
				? _.qS.GUILD_OWNER
				: _.qS.GUILD_MEMBER;
	} else n = _.qS.USER;
	return (
		e.useEffect(() => {
			void 0 === i && null == o && l.NA(t);
		}, [t, i, o]),
		{
			classification: i,
			classificationRequestState: o,
			isDsaEligible: d,
			isAppealEligible: d && null != i && null == i.appeal_status && (!(0, r.FB)(i) || f),
			violationType: n
		}
	);
}
function E() {
	let t = d(),
		n = new Date();
	return t.filter((t) => new Date(t.max_expiration_time) > n);
}
function S() {
	let t = d(),
		n = new Date();
	return t.filter((t) => new Date(t.max_expiration_time) <= n);
}
function A() {
	return (0, a.e7)([u.Z], () => u.Z.getAppealSignal());
}
