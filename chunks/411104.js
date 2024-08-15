var e = n(147018),
	i = n(161581),
	o = n(197187),
	u = n(261987),
	c = 'WebAssembly',
	a = i[c],
	s = 7 !== Error('e', { cause: 7 }).cause,
	f = function (t, r) {
		var n = {};
		(n[t] = u(t, r, s)),
			e(
				{
					global: !0,
					constructor: !0,
					arity: 1,
					forced: s
				},
				n
			);
	},
	l = function (t, r) {
		if (a && a[t]) {
			var n = {};
			(n[t] = u(c + '.' + t, r, s)),
				e(
					{
						target: c,
						stat: !0,
						constructor: !0,
						arity: 1,
						forced: s
					},
					n
				);
		}
	};
f('Error', function (t) {
	return function (r) {
		return o(t, this, arguments);
	};
}),
	f('EvalError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	f('RangeError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	f('ReferenceError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	f('SyntaxError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	f('TypeError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	f('URIError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	l('CompileError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	l('LinkError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	}),
	l('RuntimeError', function (t) {
		return function (r) {
			return o(t, this, arguments);
		};
	});
