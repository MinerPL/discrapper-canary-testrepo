var n = Symbol.for('react.element'),
	r = Symbol.for('react.portal'),
	i = Symbol.for('react.fragment'),
	a = Symbol.for('react.strict_mode'),
	s = Symbol.for('react.profiler'),
	o = Symbol.for('react.provider'),
	l = Symbol.for('react.context'),
	u = Symbol.for('react.forward_ref'),
	c = Symbol.for('react.suspense'),
	d = Symbol.for('react.memo'),
	_ = Symbol.for('react.lazy'),
	E = Symbol.iterator,
	f = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {}
	},
	h = Object.assign,
	p = {};
function I(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = p), (this.updater = n || f);
}
function m() {}
function T(e, t, n) {
	(this.props = e), (this.context = t), (this.refs = p), (this.updater = n || f);
}
(I.prototype.isReactComponent = {}),
	(I.prototype.setState = function (e, t) {
		if ('object' != typeof e && 'function' != typeof e && null != e)
			throw Error(
				'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
			);
		this.updater.enqueueSetState(this, e, t, 'setState');
	}),
	(I.prototype.forceUpdate = function (e) {
		this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
	}),
	(m.prototype = I.prototype);
var g = (T.prototype = new m());
(g.constructor = T), h(g, I.prototype), (g.isPureReactComponent = !0);
var S = Array.isArray,
	A = Object.prototype.hasOwnProperty,
	N = { current: null },
	v = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
function O(e, t, r) {
	var i,
		a = {},
		s = null,
		o = null;
	if (null != t)
		for (i in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = '' + t.key), t))
			A.call(t, i) && !v.hasOwnProperty(i) && (a[i] = t[i]);
	var l = arguments.length - 2;
	if (1 === l) a.children = r;
	else if (1 < l) {
		for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
		a.children = u;
	}
	if (e && e.defaultProps) for (i in (l = e.defaultProps)) void 0 === a[i] && (a[i] = l[i]);
	return {
		$$typeof: n,
		type: e,
		key: s,
		ref: o,
		props: a,
		_owner: N.current
	};
}
function R(e) {
	return 'object' == typeof e && null !== e && e.$$typeof === n;
}
var C = /\/+/g;
function y(e, t) {
	var n, r;
	return 'object' == typeof e && null !== e && null != e.key
		? ((n = '' + e.key),
			(r = {
				'=': '=0',
				':': '=2'
			}),
			'$' +
				n.replace(/[=:]/g, function (e) {
					return r[e];
				}))
		: t.toString(36);
}
function D(e, t, i) {
	if (null == e) return e;
	var a = [],
		s = 0;
	return (
		!(function e(t, i, a, s, o) {
			var l,
				u,
				c,
				d = typeof t;
			('undefined' === d || 'boolean' === d) && (t = null);
			var _ = !1;
			if (null === t) _ = !0;
			else
				switch (d) {
					case 'string':
					case 'number':
						_ = !0;
						break;
					case 'object':
						switch (t.$$typeof) {
							case n:
							case r:
								_ = !0;
						}
				}
			if (_) {
				return (
					(o = o((_ = t))),
					(t = '' === s ? '.' + y(_, 0) : s),
					S(o)
						? ((a = ''),
							null != t && (a = t.replace(C, '$&/') + '/'),
							e(o, i, a, '', function (e) {
								return e;
							}))
						: null != o &&
							(R(o) &&
								((l = o),
								(u = a + (!o.key || (_ && _.key === o.key) ? '' : ('' + o.key).replace(C, '$&/') + '/') + t),
								(o = {
									$$typeof: n,
									type: l.type,
									key: u,
									ref: l.ref,
									props: l.props,
									_owner: l._owner
								})),
							i.push(o)),
					1
				);
			}
			if (((_ = 0), (s = '' === s ? '.' : s + ':'), S(t)))
				for (var f = 0; f < t.length; f++) {
					var h = s + y((d = t[f]), f);
					_ += e(d, i, a, h, o);
				}
			else {
				if (
					'function' ==
					typeof (h =
						null === (c = t) || 'object' != typeof c
							? null
							: 'function' == typeof (c = (E && c[E]) || c['@@iterator'])
								? c
								: null)
				)
					for (t = h.call(t), f = 0; !(d = t.next()).done; ) (h = s + y((d = d.value), f++)), (_ += e(d, i, a, h, o));
				else if ('object' === d)
					throw Error(
						'Objects are not valid as a React child (found: ' +
							('[object Object]' === (i = String(t)) ? 'object with keys {' + Object.keys(t).join(', ') + '}' : i) +
							'). If you meant to render a collection of children, use an array instead.'
					);
			}
			return _;
		})(e, a, '', '', function (e) {
			return t.call(i, e, s++);
		}),
		a
	);
}
function L(e) {
	if (-1 === e._status) {
		var t = e._result;
		(t = t()).then(
			function (t) {
				(0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
			},
			function (t) {
				(0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
			}
		),
			-1 === e._status && ((e._status = 0), (e._result = t));
	}
	if (1 === e._status) return e._result.default;
	throw e._result;
}
var b = { current: null },
	M = { transition: null };
(t.Children = {
	map: D,
	forEach: function (e, t, n) {
		D(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			D(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			D(e, function (e) {
				return e;
			}) || []
		);
	},
	only: function (e) {
		if (!R(e)) throw Error('React.Children.only expected to receive a single React element child.');
		return e;
	}
}),
	(t.Component = I),
	(t.Fragment = i),
	(t.Profiler = s),
	(t.PureComponent = T),
	(t.StrictMode = a),
	(t.Suspense = c),
	(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
		ReactCurrentDispatcher: b,
		ReactCurrentBatchConfig: M,
		ReactCurrentOwner: N
	}),
	(t.cloneElement = function (e, t, r) {
		if (null == e)
			throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
		var i = h({}, e.props),
			a = e.key,
			s = e.ref,
			o = e._owner;
		if (null != t) {
			if (
				(void 0 !== t.ref && ((s = t.ref), (o = N.current)),
				void 0 !== t.key && (a = '' + t.key),
				e.type && e.type.defaultProps)
			)
				var l = e.type.defaultProps;
			for (u in t) A.call(t, u) && !v.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
		}
		var u = arguments.length - 2;
		if (1 === u) i.children = r;
		else if (1 < u) {
			l = Array(u);
			for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
			i.children = l;
		}
		return {
			$$typeof: n,
			type: e.type,
			key: a,
			ref: s,
			props: i,
			_owner: o
		};
	}),
	(t.createContext = function (e) {
		return (
			((e = {
				$$typeof: l,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null,
				_defaultValue: null,
				_globalName: null
			}).Provider = {
				$$typeof: o,
				_context: e
			}),
			(e.Consumer = e)
		);
	}),
	(t.createElement = O),
	(t.createFactory = function (e) {
		var t = O.bind(null, e);
		return (t.type = e), t;
	}),
	(t.createRef = function () {
		return { current: null };
	}),
	(t.forwardRef = function (e) {
		return {
			$$typeof: u,
			render: e
		};
	}),
	(t.isValidElement = R),
	(t.lazy = function (e) {
		return {
			$$typeof: _,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: L
		};
	}),
	(t.memo = function (e, t) {
		return {
			$$typeof: d,
			type: e,
			compare: void 0 === t ? null : t
		};
	}),
	(t.startTransition = function (e) {
		var t = M.transition;
		M.transition = {};
		try {
			e();
		} finally {
			M.transition = t;
		}
	}),
	(t.unstable_act = function () {
		throw Error('act(...) is not supported in production builds of React.');
	}),
	(t.useCallback = function (e, t) {
		return b.current.useCallback(e, t);
	}),
	(t.useContext = function (e) {
		return b.current.useContext(e);
	}),
	(t.useDebugValue = function () {}),
	(t.useDeferredValue = function (e) {
		return b.current.useDeferredValue(e);
	}),
	(t.useEffect = function (e, t) {
		return b.current.useEffect(e, t);
	}),
	(t.useId = function () {
		return b.current.useId();
	}),
	(t.useImperativeHandle = function (e, t, n) {
		return b.current.useImperativeHandle(e, t, n);
	}),
	(t.useInsertionEffect = function (e, t) {
		return b.current.useInsertionEffect(e, t);
	}),
	(t.useLayoutEffect = function (e, t) {
		return b.current.useLayoutEffect(e, t);
	}),
	(t.useMemo = function (e, t) {
		return b.current.useMemo(e, t);
	}),
	(t.useReducer = function (e, t, n) {
		return b.current.useReducer(e, t, n);
	}),
	(t.useRef = function (e) {
		return b.current.useRef(e);
	}),
	(t.useState = function (e) {
		return b.current.useState(e);
	}),
	(t.useSyncExternalStore = function (e, t, n) {
		return b.current.useSyncExternalStore(e, t, n);
	}),
	(t.useTransition = function () {
		return b.current.useTransition();
	}),
	(t.version = '18.2.0');
