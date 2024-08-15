t.d(s, {
	Z: function () {
		return u;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(852860),
	o = t(164946),
	l = t(350327),
	c = t(647699),
	d = t(18438),
	_ = t(778825),
	E = t(689938);
function u() {
	let e = (0, i.e7)([_.Z], () => _.Z.getIsSubmitDisabled()),
		s = (0, i.e7)([_.Z], () => _.Z.getGuild()),
		t = (0, i.e7)([_.Z], () => _.Z.getErrors()),
		[u, I] = a.useState(!1),
		T = a.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? E.Z.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null), [t]),
		S = a.useCallback(async () => {
			var e, t;
			I(!0);
			let n = _.Z.getAllPending(),
				a = (0, o.Jo)(n),
				i = (0, o.g9)(n),
				r = !0;
			if (Object.keys(a).length > 0) {
				let t = await (0, d.iq)(null == s ? void 0 : s.id, a);
				(r = r && null !== (e = null == t ? void 0 : t.ok) && void 0 !== e && e), (null == t ? void 0 : t.ok) && (0, d.IO)();
			}
			if (Object.keys(i).length > 0) {
				let e = await (0, l.Z)(i, null == s ? void 0 : s.id);
				(r = r && null !== (t = null == e ? void 0 : e.ok) && void 0 !== t && t), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, c.v)();
			}
			r && (0, d.b9)(), I(!1);
		}, [null == s ? void 0 : s.id]),
		N = a.useCallback(() => {
			(0, d.W3)();
		}, []);
	return (0, n.jsx)(r.Z, {
		submitting: u,
		onSave: S,
		onReset: N,
		disabled: e,
		errorMessage: null != T ? T : void 0
	});
}
