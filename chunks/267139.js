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
    f = Symbol.for('react.lazy'),
    _ = Symbol.iterator,
    h = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    p = Object.assign,
    m = {};
function g(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
}
function E() {}
function v(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
}
(g.prototype.isReactComponent = {}),
    (g.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e) throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
        this.updater.enqueueSetState(this, e, t, 'setState');
    }),
    (g.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }),
    (E.prototype = g.prototype);
var I = (v.prototype = new E());
(I.constructor = v), p(I, g.prototype), (I.isPureReactComponent = !0);
var S = Array.isArray,
    T = Object.prototype.hasOwnProperty,
    b = { current: null },
    y = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function A(e, t, r) {
    var i,
        a = {},
        s = null,
        o = null;
    if (null != t) for (i in (void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = '' + t.key), t)) T.call(t, i) && !y.hasOwnProperty(i) && (a[i] = t[i]);
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
        _owner: b.current
    };
}
function N(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === n;
}
var C = /\/+/g;
function R(e, t) {
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
function O(e, t, i) {
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
            var f = !1;
            if (null === t) f = !0;
            else
                switch (d) {
                    case 'string':
                    case 'number':
                        f = !0;
                        break;
                    case 'object':
                        switch (t.$$typeof) {
                            case n:
                            case r:
                                f = !0;
                        }
                }
            if (f) {
                return (
                    (o = o((f = t))),
                    (t = '' === s ? '.' + R(f, 0) : s),
                    S(o)
                        ? ((a = ''),
                          null != t && (a = t.replace(C, '$&/') + '/'),
                          e(o, i, a, '', function (e) {
                              return e;
                          }))
                        : null != o &&
                          (N(o) &&
                              ((l = o),
                              (u = a + (!o.key || (f && f.key === o.key) ? '' : ('' + o.key).replace(C, '$&/') + '/') + t),
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
            if (((f = 0), (s = '' === s ? '.' : s + ':'), S(t)))
                for (var h = 0; h < t.length; h++) {
                    var p = s + R((d = t[h]), h);
                    f += e(d, i, a, p, o);
                }
            else {
                if ('function' == typeof (p = null === (c = t) || 'object' != typeof c ? null : 'function' == typeof (c = (_ && c[_]) || c['@@iterator']) ? c : null)) for (t = p.call(t), h = 0; !(d = t.next()).done; ) (p = s + R((d = d.value), h++)), (f += e(d, i, a, p, o));
                else if ('object' === d) throw Error('Objects are not valid as a React child (found: ' + ('[object Object]' === (i = String(t)) ? 'object with keys {' + Object.keys(t).join(', ') + '}' : i) + '). If you meant to render a collection of children, use an array instead.');
            }
            return f;
        })(e, a, '', '', function (e) {
            return t.call(i, e, s++);
        }),
        a
    );
}
function D(e) {
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
var L = { current: null },
    x = { transition: null };
function w() {
    throw Error('act(...) is not supported in production builds of React.');
}
(t.Children = {
    map: O,
    forEach: function (e, t, n) {
        O(
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
            O(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            O(e, function (e) {
                return e;
            }) || []
        );
    },
    only: function (e) {
        if (!N(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    }
}),
    (t.Component = g),
    (t.Fragment = i),
    (t.Profiler = s),
    (t.PureComponent = v),
    (t.StrictMode = a),
    (t.Suspense = c),
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
        ReactCurrentDispatcher: L,
        ReactCurrentBatchConfig: x,
        ReactCurrentOwner: b
    }),
    (t.act = w),
    (t.cloneElement = function (e, t, r) {
        if (null == e) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
        var i = p({}, e.props),
            a = e.key,
            s = e.ref,
            o = e._owner;
        if (null != t) {
            if ((void 0 !== t.ref && ((s = t.ref), (o = b.current)), void 0 !== t.key && (a = '' + t.key), e.type && e.type.defaultProps)) var l = e.type.defaultProps;
            for (u in t) T.call(t, u) && !y.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
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
    (t.createElement = A),
    (t.createFactory = function (e) {
        var t = A.bind(null, e);
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
    (t.isValidElement = N),
    (t.lazy = function (e) {
        return {
            $$typeof: f,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: D
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
        var t = x.transition;
        x.transition = {};
        try {
            e();
        } finally {
            x.transition = t;
        }
    }),
    (t.unstable_act = w),
    (t.useCallback = function (e, t) {
        return L.current.useCallback(e, t);
    }),
    (t.useContext = function (e) {
        return L.current.useContext(e);
    }),
    (t.useDebugValue = function () {}),
    (t.useDeferredValue = function (e) {
        return L.current.useDeferredValue(e);
    }),
    (t.useEffect = function (e, t) {
        return L.current.useEffect(e, t);
    }),
    (t.useId = function () {
        return L.current.useId();
    }),
    (t.useImperativeHandle = function (e, t, n) {
        return L.current.useImperativeHandle(e, t, n);
    }),
    (t.useInsertionEffect = function (e, t) {
        return L.current.useInsertionEffect(e, t);
    }),
    (t.useLayoutEffect = function (e, t) {
        return L.current.useLayoutEffect(e, t);
    }),
    (t.useMemo = function (e, t) {
        return L.current.useMemo(e, t);
    }),
    (t.useReducer = function (e, t, n) {
        return L.current.useReducer(e, t, n);
    }),
    (t.useRef = function (e) {
        return L.current.useRef(e);
    }),
    (t.useState = function (e) {
        return L.current.useState(e);
    }),
    (t.useSyncExternalStore = function (e, t, n) {
        return L.current.useSyncExternalStore(e, t, n);
    }),
    (t.useTransition = function () {
        return L.current.useTransition();
    }),
    (t.version = '18.3.1');
