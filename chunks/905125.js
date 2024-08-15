var r = n(690244)('%TypeError%'),
	i = n(116298),
	a = n(125179),
	s = n(395238),
	o = n(441596),
	l = n(75150),
	u = n(860438),
	c = n(465555),
	d = n(828148),
	_ = n(148309),
	E = n(632384);
e.exports = function (e, t, n, f, h) {
	var p,
		I,
		m = E(e);
	if ('Undefined' !== m && 'Object' !== m) throw new r('Assertion failed: O must be undefined or an Object');
	if (!d(t)) throw new r('Assertion failed: P must be a Property Key');
	if ('Boolean' !== E(n)) throw new r('Assertion failed: extensible must be a Boolean');
	if (
		!s(
			{
				Type: E,
				IsDataDescriptor: u,
				IsAccessorDescriptor: l
			},
			f
		)
	)
		throw new r('Assertion failed: Desc must be a Property Descriptor');
	if (
		'Undefined' !== E(h) &&
		!s(
			{
				Type: E,
				IsDataDescriptor: u,
				IsAccessorDescriptor: l
			},
			h
		)
	)
		throw new r('Assertion failed: current must be a Property Descriptor, or undefined');
	if ('Undefined' === E(h))
		return (
			!!n &&
			('Undefined' === m ||
				(l(f)
					? i(u, _, o, e, t, f)
					: i(u, _, o, e, t, {
							'[[Configurable]]': !!f['[[Configurable]]'],
							'[[Enumerable]]': !!f['[[Enumerable]]'],
							'[[Value]]': f['[[Value]]'],
							'[[Writable]]': !!f['[[Writable]]']
						})))
		);
	if (
		!a(
			{
				IsAccessorDescriptor: l,
				IsDataDescriptor: u
			},
			h
		)
	)
		throw new r('`current`, when present, must be a fully populated and valid Property Descriptor');
	if (!h['[[Configurable]]']) {
		if (
			('[[Configurable]]' in f && f['[[Configurable]]']) ||
			('[[Enumerable]]' in f && !_(f['[[Enumerable]]'], h['[[Enumerable]]'])) ||
			(!c(f) && !_(l(f), l(h)))
		)
			return !1;
		if (l(h)) {
			if (('[[Get]]' in f && !_(f['[[Get]]'], h['[[Get]]'])) || ('[[Set]]' in f && !_(f['[[Set]]'], h['[[Set]]'])))
				return !1;
		} else if (
			!h['[[Writable]]'] &&
			(('[[Writable]]' in f && f['[[Writable]]']) || ('[[Value]]' in f && !_(f['[[Value]]'], h['[[Value]]'])))
		)
			return !1;
	}
	if ('Undefined' !== m)
		return u(h) && l(f)
			? ((p = ('[[Configurable]]' in f ? f : h)['[[Configurable]]']),
				i(u, _, o, e, t, {
					'[[Configurable]]': !!p,
					'[[Enumerable]]': !!(I = ('[[Enumerable]]' in f ? f : h)['[[Enumerable]]']),
					'[[Get]]': ('[[Get]]' in f ? f : h)['[[Get]]'],
					'[[Set]]': ('[[Set]]' in f ? f : h)['[[Set]]']
				}))
			: l(h) && u(f)
				? ((p = ('[[Configurable]]' in f ? f : h)['[[Configurable]]']),
					i(u, _, o, e, t, {
						'[[Configurable]]': !!p,
						'[[Enumerable]]': !!(I = ('[[Enumerable]]' in f ? f : h)['[[Enumerable]]']),
						'[[Value]]': ('[[Value]]' in f ? f : h)['[[Value]]'],
						'[[Writable]]': !!('[[Writable]]' in f ? f : h)['[[Writable]]']
					}))
				: i(u, _, o, e, t, f);
	return !0;
};
