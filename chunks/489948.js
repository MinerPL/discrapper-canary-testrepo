let r;
n.d(t, {
    Jc: function () {
        return w;
    },
    dx: function () {
        return R;
    },
    tE: function () {
        return k;
    }
});
var i,
    a,
    s,
    o = n(192379),
    l = Object.defineProperty,
    u = (e, t, n) =>
        t in e
            ? l(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n
              })
            : (e[t] = n),
    c = (e, t, n) => (u(e, 'symbol' != typeof t ? t + '' : t, n), n),
    d = { exports: {} };
(i = d),
    (function () {
        var e = {}.hasOwnProperty;
        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var a = typeof i;
                    if ('string' === a || 'number' === a) n.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var s = t.apply(null, i);
                            s && n.push(s);
                        }
                    } else if ('object' === a) {
                        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes('[native code]')) {
                            n.push(i.toString());
                            continue;
                        }
                        for (var o in i) e.call(i, o) && i[o] && n.push(o);
                    }
                }
            }
            return n.join(' ');
        }
        i.exports ? ((t.default = t), (i.exports = t)) : (window.classNames = t);
    })();
let f = d.exports;
var _ = function (e, t, n, r, i, a, s, o) {
    if (!e) {
        var l;
        if (void 0 === t) l = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var u = [n, r, i, a, s, o],
                c = 0;
            (l = Error(
                t.replace(/%s/g, function () {
                    return u[c++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((l.framesToPop = 1), l);
    }
};
let h = /^#[0-9a-f]{3,8}$/i,
    p = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class m {
    constructor(e, t, n, r) {
        (this.red = e), (this.green = t), (this.blue = n), (this.alpha = r);
    }
    toHexString() {
        var e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? t : '0' + t) + (this.blue > 15.5 ? n : '0' + n);
    }
    static parseString(e) {
        return e.match(p) ? this.parseColorFnString(e) : e.match(h) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new m(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(!e.match(h) || [6, 8].includes(e.length))) {
            if ((e = e.replace('#', '')).length < 6) {
                let [t, n, r, i] = e.split('');
                (e = t + t + n + n + r + r), i && (e += i + i);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t) return new m(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1);
        }
    }
    static parseColorFnString(e) {
        var t;
        let [, n, r] = null != (t = e.match(p)) ? t : [];
        if (!n || !r) return;
        let i = r
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(',', '').trim())
            .filter((e) => '' !== e)
            .map((e, t) =>
                (function (e, t, n) {
                    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
                    if ('h' === e[n]) {
                        if (/turn$/.test(t)) return 360 * parseFloat(t);
                        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
                    }
                    return parseFloat(t);
                })(n, e, t)
            );
        if ('hsl' === n.substr(0, 3)) {
            let e = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
                let i;
                t /= 255;
                let a = (1 - Math.abs(2 * (n /= 255) - 1)) * t,
                    s = a * (1 - Math.abs(((e / 60) % 2) - 1)),
                    o = n - a / 2,
                    l = (i = e < 60 ? [a, s, 0] : e < 120 ? [s, a, 0] : e < 180 ? [0, a, s] : e < 240 ? [0, s, a] : e < 300 ? [s, 0, a] : [a, 0, s]).map((e) => Math.round((e + o) * 255));
                return {
                    red: l[0],
                    green: l[1],
                    blue: l[2],
                    alpha: r
                };
            })({
                hue: i[0],
                saturation: i[1],
                lightness: i[2],
                alpha: i[3]
            });
            return new m(e.red, e.green, e.blue, e.alpha);
        }
        return new m(i[0], i[1], i[2], 'number' == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return (function ({ red: e, green: t, blue: n, alpha: r }) {
            let i = e / 255,
                a = t / 255,
                s = n / 255,
                o = Math.max(i, a, s),
                l = Math.min(i, a, s),
                u = o - l,
                c = (o + l) / 2,
                d = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === u)
                return {
                    hue: 0,
                    saturation: d,
                    lightness: c,
                    alpha: r
                };
            let f = 0;
            switch (o) {
                case i:
                    f = ((a - s) / u) % 6;
                    break;
                case a:
                    f = (s - i) / u + 2;
                    break;
                case s:
                    f = (a - s) / u + 4;
            }
            return {
                hue: 60 * f,
                saturation: d,
                lightness: c,
                alpha: r
            };
        })({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        });
    }
    getRelativeLuminance() {
        var e = this.red / 255,
            t = this.green / 255,
            n = this.blue / 255;
        return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) + 0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
    }
}
function g(e, t) {
    let n = e.alpha,
        r = (1 - n) * t.red + n * e.red,
        i = (1 - n) * t.green + n * e.green,
        a = (1 - n) * t.blue + n * e.blue;
    return new m(r, i, a, e.alpha + t.alpha * (1 - e.alpha));
}
function E(e) {
    if (e) return parseInt(e) > 0 ? e : void 0;
}
class v {
    constructor() {
        c(this, 'targetElement'), c(this, 'targetAncestry'), c(this, 'boundingBox'), c(this, 'className'), c(this, 'offset', 0), c(this, 'zIndex'), c(this, 'container', null), c(this, 'themeOptions'), c(this, 'invalidate', () => null);
    }
    setContainer(e) {
        this.container = e;
    }
    setThemeOptions(e) {
        this.themeOptions = e;
    }
    showElement(e, t = {}) {
        var n, i;
        (this.targetElement = e), (this.targetAncestry = this.getElementAncestors(this.targetElement)), (this.boundingBox = void 0), (this.className = t.className), (this.offset = null != (n = t.offset) ? n : 0), (this.zIndex = t.zIndex), (i = this), i !== r && (null == r || r.hide(), (r = i)), this.invalidate();
    }
    hide() {
        (this.targetElement = void 0), (this.targetAncestry = void 0), (this.boundingBox = void 0), (this.className = void 0), (this.offset = 0), (this.zIndex = void 0), this.invalidate();
    }
    get visible() {
        return null != this.targetElement || null != this.boundingBox;
    }
    getElementAncestors(e) {
        if (null == e)
            return {
                elements: [],
                styles: []
            };
        let t = [],
            n = [],
            r = e;
        for (; null != r; ) t.push(r), 'u' > typeof window && n.push(window.getComputedStyle(r)), (r = r.parentElement);
        return {
            elements: t,
            styles: n
        };
    }
    getNextZIndexForAncestry(e) {
        for (let t = 0; t < e.elements.length; t++) {
            let n = e.elements[t],
                r = parseInt(e.styles[t].getPropertyValue('z-index'));
            if (!isNaN(r)) return r + 1;
            if (n === this.container) break;
        }
    }
    getBorderRadius(e) {
        var t, n, r, i, a, s, o, l;
        let u = null != (n = E(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : '0',
            c = null != (i = E(null == (r = e.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : '0',
            d = null != (s = E(null == (a = e.styles[0]) ? void 0 : a.borderBottomRightRadius)) ? s : '0',
            f = null != (l = E(null == (o = e.styles[0]) ? void 0 : o.borderBottomLeftRadius)) ? l : '0';
        if (!('0' === u && '0' === c && '0' === d && '0' === f)) return `${u} ${c} ${d} ${f}`;
    }
    makePositionFromDOMRect(e) {
        var t, n, r, i;
        if (null == this.container) return {};
        let a = this.container.getBoundingClientRect(),
            { scrollTop: s, scrollLeft: o } = this.container,
            l = 0,
            u = 0,
            c = 0,
            d = 0;
        return (
            'number' == typeof this.offset ? ((l = this.offset), (u = this.offset), (c = this.offset), (d = this.offset)) : ((l = null != (t = this.offset.top) ? t : 0), (u = null != (n = this.offset.right) ? n : 0), (c = null != (r = this.offset.bottom) ? r : 0), (d = null != (i = this.offset.left) ? i : 0)),
            {
                top: s + e.top - a.top + l,
                width: e.width - (u + d),
                height: e.height - (c + l),
                left: o + e.left - a.left + d
            }
        );
    }
    getStyle() {
        var e;
        let t = {};
        if (
            (null != this.boundingBox &&
                (t = {
                    ...this.makePositionFromDOMRect(this.boundingBox),
                    zIndex: this.zIndex
                }),
            null != this.targetElement && null != this.targetAncestry)
        ) {
            let n = (function (e) {
                let t = [];
                for (let n of e.styles.slice(1)) {
                    let e = m.parseString(n.backgroundColor);
                    if (null != e) {
                        if (e.alpha > 0.95) return e;
                        t.push(e);
                    }
                }
                return t.push(new m(255, 255, 255, 1)), t.reduce(g);
            })(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                '--__adaptive-focus-ring-color': (function (e, t) {
                    if (null == e) return 'var(--focus-primary)';
                    let { saturation: n } = e.toHSL(),
                        r = e.getRelativeLuminance();
                    return n <= 0.4 ? 'var(--focus-primary)' : 'u' > typeof t ? (r < (t.brightnessTreshold || 0.2) ? 'var(--focus-light, rgba(255,255,255,0.7))' : 'var(--focus-dark, rgba(0, 0, 0, 0.85))') : 'rgba(255,255,255,0.7)';
                })(n, this.themeOptions),
                '--__adaptive-focus-ring-radius': this.getBorderRadius(this.targetAncestry)
            };
        }
        return t;
    }
}
let I = new v();
'u' > typeof window && I.setContainer(document.body);
let S = o.createContext(I);
var T = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
    var a = Object.keys(e),
        s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
        var u = a[l];
        if (!o(u)) return !1;
        var c = e[u],
            d = t[u];
        if (!1 === (i = n ? n.call(r, c, d, u) : void 0) || (void 0 === i && c !== d)) return !1;
    }
    return !0;
};
let b = !1,
    y,
    A = {};
function N() {
    if (!b) return;
    let e = null == r ? void 0 : r.getStyle();
    null == e || T(e, A) ? null != y && cancelAnimationFrame(y) : ((A = e), null == r || r.invalidate()), (y = requestAnimationFrame(N));
}
let C = !1,
    R = {
        get ringsEnabled() {
            return C;
        },
        setRingsEnabled(e) {
            (C = e), null == r || r.invalidate();
        },
        enableAnimationTracking() {
            (b = !0), (y = requestAnimationFrame(N));
        },
        disableAnimationTracking() {
            (b = !1), null != y && cancelAnimationFrame(y);
        }
    };
var O = { exports: {} },
    D = {};
O.exports = (function () {
    if (a) return D;
    a = 1;
    var e = Symbol.for('react.element'),
        t = Symbol.for('react.fragment'),
        n = Object.prototype.hasOwnProperty,
        r = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    function s(t, a, s) {
        var o,
            l = {},
            u = null,
            c = null;
        for (o in (void 0 !== s && (u = '' + s), void 0 !== a.key && (u = '' + a.key), void 0 !== a.ref && (c = a.ref), a)) n.call(a, o) && !i.hasOwnProperty(o) && (l[o] = a[o]);
        if (t && t.defaultProps) for (o in (a = t.defaultProps)) void 0 === l[o] && (l[o] = a[o]);
        return {
            $$typeof: e,
            type: t,
            key: u,
            ref: c,
            props: l,
            _owner: r.current
        };
    }
    return (D.Fragment = t), (D.jsx = s), (D.jsxs = s), D;
})();
let L = O.exports.jsx,
    x = O.exports.jsxs;
function w(e) {
    let { containerRef: t, children: n, themeOptions: r } = e,
        i = o.useRef(new v());
    return (
        o.useEffect(() => {
            i.current.setContainer(t.current), i.current.setThemeOptions(r);
        }, [t.current]),
        x(S.Provider, {
            value: i.current,
            children: [n, L(M, {})]
        })
    );
}
function M() {
    let e = o.useContext(S),
        [, t] = o.useState({});
    return (
        o.useEffect(
            () => (
                (e.invalidate = () => t({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e]
        ),
        R.ringsEnabled && e.visible
            ? L('div', {
                  className: f('focus-rings-ring', e.className),
                  style: e.getStyle()
              })
            : null
    );
}
let P = 'u' > typeof window && (null == (s = window.document) ? void 0 : s.createElement) != null ? o.useLayoutEffect : o.useEffect;
function k(e) {
    let { within: t = !1, enabled: n = !0, focused: r, offset: i = 0, focusTarget: a, ringTarget: s, ringClassName: l, focusClassName: u, focusWithinClassName: c, children: d } = e;
    null != a && _(null != s, 'FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.'), null != r && _(null != s, 'FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.');
    let h = o.useRef(!1),
        [p, m] = o.useState(!1),
        g = o.useContext(S),
        E = o.Children.only(d),
        { onBlur: v, onFocus: I, ...T } = E.props,
        b = o.useMemo(
            () => ({
                className: l,
                offset: i
            }),
            [l, i]
        );
    P(() => {
        n && g.invalidate();
    }),
        o.useEffect(() => {
            n || g.hide();
        }, [n, g]),
        o.useEffect(
            () => () => {
                h.current && g.hide();
            },
            [g]
        ),
        o.useEffect(() => {
            let e = null == s ? void 0 : s.current;
            null == r || null == e || ((h.current = r), r ? g.showElement(e, b) : !1 === r && g.hide());
        }, [r, b, g, s]),
        P(() => {
            if (null != r) return;
            let e = null == a ? void 0 : a.current,
                n = null == s ? void 0 : s.current;
            if (null != e && null != n)
                return (
                    e.addEventListener('focusin', i, !0),
                    e.addEventListener('focusout', o, !0),
                    () => {
                        e.removeEventListener('focusin', i, !0), e.removeEventListener('focusout', o, !0);
                    }
                );
            function i(e) {
                if (null != n) {
                    if (e.currentTarget === e.target) {
                        (h.current = !0), g.showElement(n, b);
                        return;
                    }
                    m(!0), t && g.showElement(n, b);
                }
            }
            function o() {
                g.hide(), (h.current = !1), m(!1);
            }
        }, [t, b, r, g, a, s]);
    let y = o.useCallback(
            (e) => {
                g.hide(), (h.current = !1), m(!1), null == v || v(e);
            },
            [v, g]
        ),
        A = o.useCallback(
            (e) => {
                let n = null == s ? void 0 : s.current;
                e.currentTarget === e.target ? ((h.current = !0), g.showElement(null != n ? n : e.currentTarget, b)) : (m(!0), t && g.showElement(null != n ? n : e.currentTarget, b)), null == I || I(e);
            },
            [s, t, I, g, b]
        );
    return n && null == a && null == r
        ? o.cloneElement(E, {
              ...T,
              className: f(T.className, h.current ? u : void 0, p ? c : void 0),
              onBlur: y,
              onFocus: A
          })
        : E;
}
