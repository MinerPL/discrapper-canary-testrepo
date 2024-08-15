r.d(e, {
	w: function () {
		return h;
	}
});
var n = r(146150),
	i = r(28866),
	o = r(670458),
	a = r(973682),
	s = r(859159);
function u(t, e) {
	return Object.keys(t).reduce(function (r, i) {
		return (r[i] = (0, n.pi)({ timeZone: e }, t[i])), r;
	}, {});
}
function c(t, e) {
	return Object.keys((0, n.pi)((0, n.pi)({}, t), e)).reduce(function (r, i) {
		return (r[i] = (0, n.pi)((0, n.pi)({}, t[i] || {}), e[i] || {})), r;
	}, {});
}
function l(t, e) {
	if (!e) return t;
	var r = o.C.formats;
	return (0, n.pi)((0, n.pi)((0, n.pi)({}, r), t), {
		date: c(u(r.date, e), u(t.date || {}, e)),
		time: c(u(r.time, e), u(t.time || {}, e))
	});
}
var h = function (t, e, r, o, u) {
	var c = t.locale,
		h = t.formats,
		f = t.messages,
		p = t.defaultLocale,
		m = t.defaultFormats,
		d = t.fallbackOnEmptyString,
		v = t.onError,
		g = t.timeZone,
		y = t.defaultRichTextElements;
	void 0 === r && (r = { id: '' });
	var b = r.id,
		E = r.defaultMessage;
	(0, i.kG)(
		!!b,
		'[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue'
	);
	var T = String(b),
		_ = f && Object.prototype.hasOwnProperty.call(f, T) && f[T];
	if (Array.isArray(_) && 1 === _.length && _[0].type === s.TYPE.literal) return _[0].value;
	if (!o && _ && 'string' == typeof _ && !y) return _.replace(/'\{(.*?)\}'/gi, '{$1}');
	if (((o = (0, n.pi)((0, n.pi)({}, y), o || {})), (h = l(h, g)), (m = l(m, g)), !_)) {
		if (!1 === d && '' === _) return _;
		if (((!E || (c && c.toLowerCase() !== p.toLowerCase())) && v(new a.$6(r, c)), E))
			try {
				var A = e.getMessageFormat(E, p, m, u);
				return A.format(o);
			} catch (t) {
				return (
					v(
						new a.X9(
							'Error formatting default message for: "'.concat(T, '", rendering default message verbatim'),
							c,
							r,
							t
						)
					),
					'string' == typeof E ? E : T
				);
			}
		return T;
	}
	try {
		var A = e.getMessageFormat(_, c, h, (0, n.pi)({ formatters: e }, u || {}));
		return A.format(o);
	} catch (t) {
		v(
			new a.X9(
				'Error formatting message: "'.concat(T, '", using ').concat(E ? 'default message' : 'id', ' as fallback.'),
				c,
				r,
				t
			)
		);
	}
	if (E)
		try {
			var A = e.getMessageFormat(E, p, m, u);
			return A.format(o);
		} catch (t) {
			v(new a.X9('Error formatting the default message for: "'.concat(T, '", rendering message verbatim'), c, r, t));
		}
	return 'string' == typeof _ ? _ : 'string' == typeof E ? E : T;
};
