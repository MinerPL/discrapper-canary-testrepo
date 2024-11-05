n.d(t, {
    Ao: function () {
        return S;
    },
    B3: function () {
        return j;
    },
    Dt: function () {
        return L;
    },
    Gt: function () {
        return et;
    },
    IN: function () {
        return N;
    },
    Me: function () {
        return c;
    },
    PK: function () {
        return X;
    },
    Pf: function () {
        return D;
    },
    QB: function () {
        return Z;
    },
    V5: function () {
        return A;
    },
    Zj: function () {
        return en;
    },
    a9: function () {
        return z;
    },
    ad: function () {
        return O;
    },
    b0: function () {
        return M;
    },
    bE: function () {
        return V;
    },
    bt: function () {
        return s;
    },
    cr: function () {
        return er;
    },
    dG: function () {
        return p;
    },
    gn: function () {
        return R;
    },
    iW: function () {
        return o;
    },
    ib: function () {
        return k;
    },
    kR: function () {
        return h;
    },
    lE: function () {
        return W;
    },
    mp: function () {
        return d;
    },
    nG: function () {
        return P;
    },
    r3: function () {
        return _;
    },
    rP: function () {
        return K;
    },
    rf: function () {
        return H;
    },
    tS: function () {
        return f;
    },
    tv: function () {
        return w;
    },
    vE: function () {
        return ei;
    },
    xi: function () {
        return F;
    },
    y$: function () {
        return ea;
    },
    yU: function () {
        return Y;
    },
    zL: function () {
        return I;
    },
    zT: function () {
        return $;
    },
    zX: function () {
        return J;
    }
});
var r = n(192379),
    i = n(198453),
    a = n(867330);
let s = 'undefined' != typeof document ? r.useLayoutEffect : () => {};
function o(e) {
    let t = (0, r.useRef)(null);
    return (
        s(() => {
            t.current = e;
        }, [e]),
        (0, r.useCallback)((...e) => (0, t.current)(...e), [])
    );
}
let l = !!('undefined' != typeof window && window.document && window.document.createElement),
    u = new Map();
function c(e) {
    let [t, n] = (0, r.useState)(e),
        a = (0, r.useRef)(null),
        o = (0, i.gP)(t),
        c = (0, r.useCallback)((e) => {
            a.current = e;
        }, []);
    return (
        l && u.set(o, c),
        s(
            () => () => {
                u.delete(o);
            },
            [o]
        ),
        (0, r.useEffect)(() => {
            let e = a.current;
            e && ((a.current = null), n(e));
        }),
        o
    );
}
function d(e = []) {
    let t = c(),
        [n, i] = (function (e) {
            let [t, n] = (0, r.useState)(e),
                i = (0, r.useRef)(null),
                a = o(() => {
                    let e = i.current.next();
                    if (e.done) {
                        i.current = null;
                        return;
                    }
                    t === e.value ? a() : n(e.value);
                });
            s(() => {
                i.current && a();
            });
            let l = o((e) => {
                (i.current = e(t)), a();
            });
            return [t, l];
        })(t),
        a = (0, r.useCallback)(() => {
            i(function* () {
                yield t, yield document.getElementById(t) ? t : void 0;
            });
        }, [t, i]);
    return s(a, [t, a, ...e]), n;
}
function f(...e) {
    return (...t) => {
        for (let n of e) 'function' == typeof n && n(...t);
    };
}
let _ = (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document;
    },
    h = (e) => (e && 'window' in e && e.window === e ? e : _(e).defaultView || window);
function p(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let r = e[n];
        for (let e in r) {
            let n = t[e],
                i = r[e];
            'function' == typeof n && 'function' == typeof i && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2)
                ? (t[e] = f(n, i))
                : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof n && 'string' == typeof i
                  ? (t[e] = (0, a.Z)(n, i))
                  : 'id' === e && n && i
                    ? (t.id = (function (e, t) {
                          if (e === t) return e;
                          let n = u.get(e);
                          if (n) return n(t), t;
                          let r = u.get(t);
                          return r ? (r(e), e) : t;
                      })(n, i))
                    : (t[e] = void 0 !== i ? i : n);
        }
    }
    return t;
}
let m = new Set(['id']),
    g = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
    E = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
    v = /^(data-.*)$/;
function I(e, t = {}) {
    let { labelable: n, isLink: r, propNames: i } = t,
        a = {};
    for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (m.has(t) || (n && g.has(t)) || (r && E.has(t)) || (null == i ? void 0 : i.has(t)) || v.test(t)) && (a[t] = e[t]);
    return a;
}
function S(e) {
    if (
        (function () {
            if (null == T) {
                T = !1;
                try {
                    document.createElement('div').focus({
                        get preventScroll() {
                            return (T = !0), !0;
                        }
                    });
                } catch (e) {}
            }
            return T;
        })()
    )
        e.focus({ preventScroll: !0 });
    else {
        let t = (function (e) {
            for (var t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement; t instanceof HTMLElement && t !== r; )
                (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
                    n.push({
                        element: t,
                        scrollTop: t.scrollTop,
                        scrollLeft: t.scrollLeft
                    }),
                    (t = t.parentNode);
            return (
                r instanceof HTMLElement &&
                    n.push({
                        element: r,
                        scrollTop: r.scrollTop,
                        scrollLeft: r.scrollLeft
                    }),
                n
            );
        })(e);
        e.focus(),
            (function (e) {
                for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
            })(t);
    }
}
let T = null;
function b(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent));
}
function y(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
}
function A() {
    return y(/^Mac/i);
}
function N() {
    return y(/^iPhone/i);
}
function C() {
    return y(/^iPad/i) || (A() && navigator.maxTouchPoints > 1);
}
function R() {
    return N() || C();
}
function O() {
    return A() || R();
}
function D() {
    return (
        b(/AppleWebKit/i) &&
        !(function () {
            return b(/Chrome/i);
        })()
    );
}
function L() {
    return b(/Android/i);
}
let x = (0, r.createContext)({
    isNative: !0,
    open: function (e, t) {
        !(function (e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute('data-href')) {
                let n = document.createElement('a');
                (n.href = e.getAttribute('data-href')), e.hasAttribute('data-target') && (n.target = e.getAttribute('data-target')), e.hasAttribute('data-rel') && (n.rel = e.getAttribute('data-rel')), e.hasAttribute('data-download') && (n.download = e.getAttribute('data-download')), e.hasAttribute('data-ping') && (n.ping = e.getAttribute('data-ping')), e.hasAttribute('data-referrer-policy') && (n.referrerPolicy = e.getAttribute('data-referrer-policy')), e.appendChild(n), t(n), e.removeChild(n);
            }
        })(e, (e) => P(e, t));
    }
});
function w() {
    return (0, r.useContext)(x);
}
function M(e, t) {
    let n = e.getAttribute('target');
    return (!n || '_self' === n) && e.origin === location.origin && !e.hasAttribute('download') && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey;
}
function P(e, t, n = !0) {
    var r, i;
    let { metaKey: a, ctrlKey: s, altKey: o, shiftKey: l } = t;
    b(/Firefox/i) && (null === (i = window.event) || void 0 === i ? void 0 : null === (r = i.type) || void 0 === r ? void 0 : r.startsWith('key')) && '_blank' === e.target && (A() ? (a = !0) : (s = !0));
    let u =
        D() && A() && !C()
            ? new KeyboardEvent('keydown', {
                  keyIdentifier: 'Enter',
                  metaKey: a,
                  ctrlKey: s,
                  altKey: o,
                  shiftKey: l
              })
            : new MouseEvent('click', {
                  metaKey: a,
                  ctrlKey: s,
                  altKey: o,
                  shiftKey: l,
                  bubbles: !0,
                  cancelable: !0
              });
    (P.isOpening = n), S(e), e.dispatchEvent(u), (P.isOpening = !1);
}
P.isOpening = !1;
function k(e) {
    return {
        'data-href': e.href,
        'data-target': e.target,
        'data-rel': e.rel,
        'data-download': e.download,
        'data-ping': e.ping,
        'data-referrer-policy': e.referrerPolicy
    };
}
let U = new Map(),
    G = new Set();
function B() {
    if ('undefined' == typeof window) return;
    let e = (t) => {
        let n = U.get(t.target);
        if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener('transitioncancel', e), U.delete(t.target)), 0 === U.size)) {
            for (let e of G) e();
            G.clear();
        }
    };
    document.body.addEventListener('transitionrun', (t) => {
        let n = U.get(t.target);
        !n && ((n = new Set()), U.set(t.target, n), t.target.addEventListener('transitioncancel', e)), n.add(t.propertyName);
    }),
        document.body.addEventListener('transitionend', e);
}
function Z(e) {
    requestAnimationFrame(() => {
        0 === U.size ? e() : G.add(e);
    });
}
function F() {
    let e = (0, r.useRef)(new Map()),
        t = (0, r.useCallback)((t, n, r, i) => {
            let a = (null == i ? void 0 : i.once)
                ? (...t) => {
                      e.current.delete(r), r(...t);
                  }
                : r;
            e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: a,
                options: i
            }),
                t.addEventListener(n, r, i);
        }, []),
        n = (0, r.useCallback)((t, n, r, i) => {
            var a;
            let s = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
            t.removeEventListener(n, s, i), e.current.delete(r);
        }, []),
        i = (0, r.useCallback)(() => {
            e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options);
            });
        }, [n]);
    return (
        (0, r.useEffect)(() => i, [i]),
        {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: i
        }
    );
}
function V(e, t) {
    let { id: n, 'aria-label': r, 'aria-labelledby': i } = e;
    return (
        (n = c(n)),
        i && r ? (i = [...new Set([n, ...i.trim().split(/\s+/)])].join(' ')) : i && (i = i.trim().split(/\s+/).join(' ')),
        !r && !i && t && (r = t),
        {
            id: n,
            'aria-label': r,
            'aria-labelledby': i
        }
    );
}
function j(e) {
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
function H(e, t) {
    let n = (0, r.useRef)(!0),
        i = (0, r.useRef)(null);
    (0, r.useEffect)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        []
    ),
        (0, r.useEffect)(() => {
            n.current ? (n.current = !1) : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(), (i.current = t);
        }, t);
}
'undefined' != typeof document && ('loading' !== document.readyState ? B() : document.addEventListener('DOMContentLoaded', B));
function Y(e) {
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
function W(e, t) {
    s(() => {
        if (e && e.ref && t)
            return (
                (e.ref.current = t.current),
                () => {
                    e.ref.current = null;
                }
            );
    });
}
function K(e, t) {
    for (z(e, t) && (e = e.parentElement); e && !z(e, t); ) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement;
}
function z(e, t) {
    let n = window.getComputedStyle(e),
        r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
    return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r;
}
'undefined' != typeof document && window.visualViewport;
let q = 0,
    Q = new Map();
function X(e) {
    let [t, n] = (0, r.useState)(void 0);
    return (
        s(() => {
            if (!e) return;
            let t = Q.get(e);
            if (t) n(t.element.id);
            else {
                let r = `react-aria-description-${q++}`;
                n(r);
                let i = document.createElement('div');
                (i.id = r),
                    (i.style.display = 'none'),
                    (i.textContent = e),
                    document.body.appendChild(i),
                    (t = {
                        refCount: 0,
                        element: i
                    }),
                    Q.set(e, t);
            }
            return (
                t.refCount++,
                () => {
                    0 == --t.refCount && (t.element.remove(), Q.delete(e));
                }
            );
        }, [e]),
        { 'aria-describedby': e ? t : void 0 }
    );
}
function J(e, t, n, i) {
    let a = o(n),
        s = null == n;
    (0, r.useEffect)(() => {
        if (s) return;
        let n = e.current;
        return (
            n.addEventListener(t, a, i),
            () => {
                n.removeEventListener(t, a, i);
            }
        );
    }, [e, t, i, s, a]);
}
function $(e, t) {
    let n = ee(e, t, 'left'),
        r = ee(e, t, 'top'),
        i = t.offsetWidth,
        a = t.offsetHeight,
        s = e.scrollLeft,
        o = e.scrollTop,
        { borderTopWidth: l, borderLeftWidth: u } = getComputedStyle(e),
        c = e.scrollLeft + parseInt(u, 10),
        d = e.scrollTop + parseInt(l, 10),
        f = c + e.clientWidth,
        _ = d + e.clientHeight;
    n <= s ? (s = n - parseInt(u, 10)) : n + i > f && (s += n + i - f), r <= d ? (o = r - parseInt(l, 10)) : r + a > _ && (o += r + a - _), (e.scrollLeft = s), (e.scrollTop = o);
}
function ee(e, t, n) {
    let r = 'left' === n ? 'offsetLeft' : 'offsetTop',
        i = 0;
    for (; t.offsetParent && ((i += t[r]), t.offsetParent !== e); ) {
        if (t.offsetParent.contains(e)) {
            i -= e[r];
            break;
        }
        t = t.offsetParent;
    }
    return i;
}
function et(e, t) {
    if (document.contains(e)) {
        let s = document.scrollingElement || document.documentElement;
        if ('hidden' === window.getComputedStyle(s).overflow) {
            let t = K(e);
            for (; e && t && e !== s && t !== s; ) $(t, e), (t = K((e = t)));
        } else {
            var n, r, i, a;
            let { left: s, top: o } = e.getBoundingClientRect();
            null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, { block: 'nearest' });
            let { left: l, top: u } = e.getBoundingClientRect();
            (Math.abs(s - l) > 1 || Math.abs(o - u) > 1) &&
                (null == t ||
                    null === (i = t.containingElement) ||
                    void 0 === i ||
                    null === (r = i.scrollIntoView) ||
                    void 0 === r ||
                    r.call(i, {
                        block: 'center',
                        inline: 'center'
                    }),
                null === (a = e.scrollIntoView) || void 0 === a || a.call(e, { block: 'nearest' }));
        }
    }
}
function en(e) {
    return (0 === e.mozInputSource && !!e.isTrusted) || (L() && e.pointerType ? 'click' === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
}
function er(e) {
    return (!L() && 0 === e.width && 0 === e.height) || (1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && 'mouse' === e.pointerType);
}
function ei(e, t) {
    let n = (0, r.useRef)(null);
    return e && n.current && t(e, n.current) && (e = n.current), (n.current = e), e;
}
function ea(e, t, n) {
    let i = (0, r.useRef)(t),
        a = o(() => {
            n && n(i.current);
        });
    (0, r.useEffect)(() => {
        var t;
        let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
        return (
            null == n || n.addEventListener('reset', a),
            () => {
                null == n || n.removeEventListener('reset', a);
            }
        );
    }, [e, a]);
}
