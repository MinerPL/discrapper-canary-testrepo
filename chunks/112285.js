var r,
	i,
	a,
	s,
	o = n(161581),
	l = n(197187),
	u = n(566885),
	c = n(354848),
	d = n(740362),
	_ = n(936940),
	E = n(620623),
	f = n(50754),
	h = n(722063),
	p = n(202934),
	I = n(531460),
	m = n(391673),
	T = o.setImmediate,
	g = o.clearImmediate,
	S = o.process,
	A = o.Dispatch,
	N = o.Function,
	v = o.MessageChannel,
	O = o.String,
	R = 0,
	C = {},
	y = 'onreadystatechange';
_(function () {
	r = o.location;
});
var D = function (e) {
		if (d(C, e)) {
			var t = C[e];
			delete C[e], t();
		}
	},
	L = function (e) {
		return function () {
			D(e);
		};
	},
	b = function (e) {
		D(e.data);
	},
	M = function (e) {
		o.postMessage(O(e), r.protocol + '//' + r.host);
	};
(!T || !g) &&
	((T = function (e) {
		p(arguments.length, 1);
		var t = c(e) ? e : N(e),
			n = f(arguments, 1);
		return (
			(C[++R] = function () {
				l(t, void 0, n);
			}),
			i(R),
			R
		);
	}),
	(g = function (e) {
		delete C[e];
	}),
	m
		? (i = function (e) {
				S.nextTick(L(e));
			})
		: A && A.now
			? (i = function (e) {
					A.now(L(e));
				})
			: v && !I
				? ((s = (a = new v()).port2), (a.port1.onmessage = b), (i = u(s.postMessage, s)))
				: o.addEventListener && c(o.postMessage) && !o.importScripts && r && 'file:' !== r.protocol && !_(M)
					? ((i = M), o.addEventListener('message', b, !1))
					: (i =
							y in h('script')
								? function (e) {
										E.appendChild(h('script'))[y] = function () {
											E.removeChild(this), D(e);
										};
									}
								: function (e) {
										setTimeout(L(e), 0);
									})),
	(e.exports = {
		set: T,
		clear: g
	});
