var r = n(735250);
n(470079);
var i = n(266067),
	a = n(442837),
	s = n(353926),
	o = n(314897),
	l = n(981631);
t.Z = a.ZP.connectStores([s.Z, o.default], () => {
	let e = o.default.getToken();
	return {
		token: e,
		hasLoadedExperiments: null != e || s.Z.hasLoadedExperiments
	};
})((e) => {
	let { hasLoadedExperiments: t, token: n } = e;
	return null != n
		? (0, r.jsx)(i.l_, { to: l.Z5c.APP })
		: t
			? (0, r.jsx)(i.l_, { to: l.Z5c.DEFAULT_LOGGED_OUT })
			: null;
});
