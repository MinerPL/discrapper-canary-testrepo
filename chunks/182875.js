var r = n(470079),
	i = Symbol.for('react.element'),
	a = Symbol.for('react.fragment'),
	s = Object.prototype.hasOwnProperty,
	o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	l = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
function u(e, t, n) {
	var r,
		a = {},
		u = null,
		c = null;
	for (r in (void 0 !== n && (u = '' + n), void 0 !== t.key && (u = '' + t.key), void 0 !== t.ref && (c = t.ref), t))
		s.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
	if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
	return {
		$$typeof: i,
		type: e,
		key: u,
		ref: c,
		props: a,
		_owner: o.current
	};
}
(t.Fragment = a), (t.jsx = u), (t.jsxs = u);
