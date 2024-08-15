var r = n(165566),
	i = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	},
	a = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	},
	s = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	},
	o = {};
function l(e) {
	return r.isMemo(e) ? s : o[e.$$typeof] || i;
}
(o[r.ForwardRef] = {
	$$typeof: !0,
	render: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0
}),
	(o[r.Memo] = s);
var u = Object.defineProperty,
	c = Object.getOwnPropertyNames,
	d = Object.getOwnPropertySymbols,
	_ = Object.getOwnPropertyDescriptor,
	E = Object.getPrototypeOf,
	f = Object.prototype;
e.exports = function e(t, n, r) {
	if ('string' != typeof n) {
		if (f) {
			var i = E(n);
			i && i !== f && e(t, i, r);
		}
		var s = c(n);
		d && (s = s.concat(d(n)));
		for (var o = l(t), h = l(n), p = 0; p < s.length; ++p) {
			var m = s[p];
			if (!a[m] && !(r && r[m]) && !(h && h[m]) && !(o && o[m])) {
				var I = _(n, m);
				try {
					u(t, m, I);
				} catch (e) {}
			}
		}
	}
	return t;
};
