n.d(t, {
    B3: function () {
        return m;
    },
    Pf: function () {
        return y;
    },
    bt: function () {
        return a;
    },
    dG: function () {
        return o;
    },
    gn: function () {
        return b;
    },
    lq: function () {
        return l;
    },
    nP: function () {
        return v;
    },
    yU: function () {
        return g;
    },
    zL: function () {
        return f;
    }
});
var r = n(192379),
    i = n(819841);
let a = 'undefined' != typeof document ? r.useLayoutEffect : () => {},
    s = new Map();
function o(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let r = e[n];
        for (let e in r) {
            let n = t[e],
                a = r[e];
            'function' == typeof n && 'function' == typeof a && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2)
                ? (t[e] = (function (...e) {
                      return (...t) => {
                          for (let n of e) 'function' == typeof n && n(...t);
                      };
                  })(n, a))
                : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof n && 'string' == typeof a
                  ? (t[e] = (0, i.Z)(n, a))
                  : 'id' === e && n && a
                    ? (t.id = (function (e, t) {
                          if (e === t) return e;
                          let n = s.get(e);
                          if (n) return n(t), t;
                          let r = s.get(t);
                          return r ? (r(e), e) : t;
                      })(n, a))
                    : (t[e] = void 0 !== a ? a : n);
        }
    }
    return t;
}
function l(...e) {
    return 1 === e.length
        ? e[0]
        : (t) => {
              for (let n of e) 'function' == typeof n ? n(t) : null != n && (n.current = t);
          };
}
let u = new Set(['id']),
    c = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    d = /^(data-.*)$/;
function f(e, t = {}) {
    let { labelable: n, propNames: r } = t,
        i = {};
    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (u.has(t) || (n && c.has(t)) || (null == r ? void 0 : r.has(t)) || d.test(t)) && (i[t] = e[t]);
    return i;
}
let _ = new Map(),
    h = new Set();
function p() {
    if ('undefined' == typeof window) return;
    let e = (t) => {
        let n = _.get(t.target);
        if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener('transitioncancel', e), _.delete(t.target)), 0 === _.size)) {
            for (let e of h) e();
            h.clear();
        }
    };
    document.body.addEventListener('transitionrun', (t) => {
        let n = _.get(t.target);
        !n && ((n = new Set()), _.set(t.target, n), t.target.addEventListener('transitioncancel', e)), n.add(t.propertyName);
    }),
        document.body.addEventListener('transitionend', e);
}
function m(e) {
    let t = (0, r.useRef)();
    return (0, r.useMemo)(
        () => ({
            get current() {
                return t.current;
            },
            set current(value) {
                (t.current = value), 'function' == typeof e ? e(value) : e && (e.current = value);
            }
        }),
        [e]
    );
}
'undefined' != typeof document && ('loading' !== document.readyState ? p() : document.addEventListener('DOMContentLoaded', p));
function g(e) {
    let { ref: t, onResize: n } = e;
    (0, r.useEffect)(() => {
        let e = null == t ? void 0 : t.current;
        if (e) {
            if (!(void 0 !== window.ResizeObserver))
                return (
                    window.addEventListener('resize', n, !1),
                    () => {
                        window.removeEventListener('resize', n, !1);
                    }
                );
            else {
                let t = new window.ResizeObserver((e) => {
                    e.length && n();
                });
                return (
                    t.observe(e),
                    () => {
                        e && t.unobserve(e);
                    }
                );
            }
        }
    }, [n, t]);
}
let E = 'undefined' != typeof document && window.visualViewport;
function v() {
    let [e, t] = (0, r.useState)(() => I());
    return (
        (0, r.useEffect)(() => {
            let e = () => {
                t((e) => {
                    let t = I();
                    return t.width === e.width && t.height === e.height ? e : t;
                });
            };
            return (
                E ? E.addEventListener('resize', e) : window.addEventListener('resize', e),
                () => {
                    E ? E.removeEventListener('resize', e) : window.removeEventListener('resize', e);
                }
            );
        }, []),
        e
    );
}
function I() {
    return {
        width: (null == E ? void 0 : E.width) || window.innerWidth,
        height: (null == E ? void 0 : E.height) || window.innerHeight
    };
}
function S(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent));
}
function T(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
}
function b() {
    return T(/^iPhone/i) || T(/^iPad/i) || (T(/^Mac/i) && navigator.maxTouchPoints > 1);
}
function y() {
    return (
        S(/AppleWebKit/i) &&
        !(function () {
            return S(/Chrome/i);
        })()
    );
}
