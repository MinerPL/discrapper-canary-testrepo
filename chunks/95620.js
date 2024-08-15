r.d(e, {
	R: function () {
		return s;
	}
});
var n = r(789903),
	i = r(973682),
	o = r(78385),
	a = ['type'];
function s(t, e, r, s) {
	var u = t.locale,
		c = t.onError;
	void 0 === s && (s = {}),
		!Intl.PluralRules &&
			c(
				new o.u_(
					'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
					o.jK.MISSING_INTL_API
				)
			);
	var l = (0, n.L6)(s, a);
	try {
		return e(u, l).select(r);
	} catch (t) {
		c(new i.Qe('Error formatting plural.', u, t));
	}
	return 'other';
}
