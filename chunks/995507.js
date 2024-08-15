function n(e, t) {
	var n = e.length;
	for (e.push(t); 0 < n; ) {
		var r = (n - 1) >>> 1,
			i = e[r];
		if (0 < a(i, t)) (e[r] = t), (e[n] = i), (n = r);
		else break;
	}
}
function r(e) {
	return 0 === e.length ? null : e[0];
}
function i(e) {
	if (0 === e.length) return null;
	var t = e[0],
		n = e.pop();
	if (n !== t) {
		e[0] = n;
		for (var r = 0, i = e.length, s = i >>> 1; r < s; ) {
			var o = 2 * (r + 1) - 1,
				l = e[o],
				u = o + 1,
				c = e[u];
			if (0 > a(l, n)) u < i && 0 > a(c, l) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = l), (e[o] = n), (r = o));
			else if (u < i && 0 > a(c, n)) (e[r] = c), (e[u] = n), (r = u);
			else break;
		}
	}
	return t;
}
function a(e, t) {
	var n = e.sortIndex - t.sortIndex;
	return 0 !== n ? n : e.id - t.id;
}
if ('object' == typeof performance && 'function' == typeof performance.now) {
	var s,
		o = performance;
	t.unstable_now = function () {
		return o.now();
	};
} else {
	var l = Date,
		u = l.now();
	t.unstable_now = function () {
		return l.now() - u;
	};
}
var c = [],
	d = [],
	_ = 1,
	E = null,
	f = 3,
	h = !1,
	p = !1,
	m = !1,
	I = 'function' == typeof setTimeout ? setTimeout : null,
	T = 'function' == typeof clearTimeout ? clearTimeout : null,
	g = 'undefined' != typeof setImmediate ? setImmediate : null;
function S(e) {
	for (var t = r(d); null !== t; ) {
		if (null === t.callback) i(d);
		else if (t.startTime <= e) i(d), (t.sortIndex = t.expirationTime), n(c, t);
		else break;
		t = r(d);
	}
}
function A(e) {
	if (((m = !1), S(e), !p)) {
		if (null !== r(c)) (p = !0), P(N);
		else {
			var t = r(d);
			null !== t && U(A, t.startTime - e);
		}
	}
}
function N(e, n) {
	(p = !1), m && ((m = !1), T(R), (R = -1)), (h = !0);
	var a = f;
	try {
		for (S(n), E = r(c); null !== E && (!(E.expirationTime > n) || (e && !D())); ) {
			var s = E.callback;
			if ('function' == typeof s) {
				(E.callback = null), (f = E.priorityLevel);
				var o = s(E.expirationTime <= n);
				(n = t.unstable_now()), 'function' == typeof o ? (E.callback = o) : E === r(c) && i(c), S(n);
			} else i(c);
			E = r(c);
		}
		if (null !== E) var l = !0;
		else {
			var u = r(d);
			null !== u && U(A, u.startTime - n), (l = !1);
		}
		return l;
	} finally {
		(E = null), (f = a), (h = !1);
	}
}
'undefined' != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
var v = !1,
	O = null,
	R = -1,
	C = 5,
	y = -1;
function D() {
	return !(t.unstable_now() - y < C);
}
function L() {
	if (null !== O) {
		var e = t.unstable_now();
		y = e;
		var n = !0;
		try {
			n = O(!0, e);
		} finally {
			n ? s() : ((v = !1), (O = null));
		}
	} else v = !1;
}
if ('function' == typeof g)
	s = function () {
		g(L);
	};
else if ('undefined' != typeof MessageChannel) {
	var b = new MessageChannel(),
		M = b.port2;
	(b.port1.onmessage = L),
		(s = function () {
			M.postMessage(null);
		});
} else
	s = function () {
		I(L, 0);
	};
function P(e) {
	(O = e), v || ((v = !0), s());
}
function U(e, n) {
	R = I(function () {
		e(t.unstable_now());
	}, n);
}
(t.unstable_IdlePriority = 5),
	(t.unstable_ImmediatePriority = 1),
	(t.unstable_LowPriority = 4),
	(t.unstable_NormalPriority = 3),
	(t.unstable_Profiling = null),
	(t.unstable_UserBlockingPriority = 2),
	(t.unstable_cancelCallback = function (e) {
		e.callback = null;
	}),
	(t.unstable_continueExecution = function () {
		p || h || ((p = !0), P(N));
	}),
	(t.unstable_forceFrameRate = function (e) {
		0 > e || 125 < e ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (C = 0 < e ? Math.floor(1000 / e) : 5);
	}),
	(t.unstable_getCurrentPriorityLevel = function () {
		return f;
	}),
	(t.unstable_getFirstCallbackNode = function () {
		return r(c);
	}),
	(t.unstable_next = function (e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default:
				t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}),
	(t.unstable_pauseExecution = function () {}),
	(t.unstable_requestPaint = function () {}),
	(t.unstable_runWithPriority = function (e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}),
	(t.unstable_scheduleCallback = function (e, i, a) {
		var s = t.unstable_now();
		switch (((a = 'object' == typeof a && null !== a ? ('number' == typeof (a = a.delay) && 0 < a ? s + a : s) : s), e)) {
			case 1:
				var o = -1;
				break;
			case 2:
				o = 250;
				break;
			case 5:
				o = 1073741823;
				break;
			case 4:
				o = 10000;
				break;
			default:
				o = 5000;
		}
		return (
			(o = a + o),
			(e = {
				id: _++,
				callback: i,
				priorityLevel: e,
				startTime: a,
				expirationTime: o,
				sortIndex: -1
			}),
			a > s ? ((e.sortIndex = a), n(d, e), null === r(c) && e === r(d) && (m ? (T(R), (R = -1)) : (m = !0), U(A, a - s))) : ((e.sortIndex = o), n(c, e), p || h || ((p = !0), P(N))),
			e
		);
	}),
	(t.unstable_shouldYield = D),
	(t.unstable_wrapCallback = function (e) {
		var t = f;
		return function () {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	});
