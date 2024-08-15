n.d(t, {
	J: function () {
		return i;
	}
}),
	n(47120);
var r = n(981631);
function i(e) {
	let { id: t, customInstallUrl: n, installParams: i, integrationTypesConfig: a } = e;
	if (null != n) return n;
	let s = {};
	s.client_id = t;
	let o = null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null);
	if (null != i && !o) {
		let { permissions: e, scopes: t } = i;
		null != e && (s.permissions = e), null != t && (s.scope = t.join(' '));
	}
	let l = Object.entries(s)
		.map((e) => {
			let [t, n] = e;
			return ''.concat(t, '=').concat(encodeURIComponent(n));
		})
		.join('&');
	return ''.concat(location.protocol, '//').concat(location.host).concat(r.Z5c.OAUTH2_AUTHORIZE, '?').concat(l);
}
