let r;
n.d(t, {
    Jc: function () {
        return P;
    },
    dx: function () {
        return y;
    },
    tE: function () {
        return x;
    }
});
var i, a, o, s = n(470079), l = Object.defineProperty, u = (e, t, n) => t in e ? l(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, c = (e, t, n) => (u(e, 'symbol' != typeof t ? t + '' : t, n), n), d = { exports: {} };
i = d, function () {
    var e = {}.hasOwnProperty;
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++) {
            var i = arguments[r];
            if (i) {
                var a = typeof i;
                if ('string' === a || 'number' === a)
                    n.push(i);
                else if (Array.isArray(i)) {
                    if (i.length) {
                        var o = t.apply(null, i);
                        o && n.push(o);
                    }
                } else if ('object' === a) {
                    if (i.toString !== Object.prototype.toString && !i.toString.toString().includes('[native code]')) {
                        n.push(i.toString());
                        continue;
                    }
                    for (var s in i)
                        e.call(i, s) && i[s] && n.push(s);
                }
            }
        }
        return n.join(' ');
    }
    i.exports ? (t.default = t, i.exports = t) : window.classNames = t;
}();
let _ = d.exports;
var E = function (e, t, n, r, i, a, o, s) {
    if (!e) {
        var l;
        if (void 0 === t)
            l = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var u = [
                    n,
                    r,
                    i,
                    a,
                    o,
                    s
                ], c = 0;
            (l = Error(t.replace(/%s/g, function () {
                return u[c++];
            }))).name = 'Invariant Violation';
        }
        throw l.framesToPop = 1, l;
    }
};
let f = /^#[0-9a-f]{3,8}$/i, h = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class p {
    constructor(e, t, n, r) {
        this.red = e, this.green = t, this.blue = n, this.alpha = r;
    }
    toHexString() {
        var e = Math.round(this.red).toString(16), t = Math.round(this.green).toString(16), n = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? t : '0' + t) + (this.blue > 15.5 ? n : '0' + n);
    }
    static parseString(e) {
        return e.match(h) ? this.parseColorFnString(e) : e.match(f) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new p(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!(!e.match(f) || [
                6,
                8
            ].includes(e.length))) {
            if ((e = e.replace('#', '')).length < 6) {
                let [t, n, r, i] = e.split('');
                e = t + t + n + n + r + r, i && (e += i + i);
            }
            var t = e.match(/.{1,2}/g);
            if (null != t)
                return new p(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1);
        }
    }
    static parseColorFnString(e) {
        var t;
        let [, n, r] = null != (t = e.match(h)) ? t : [];
        if (!n || !r)
            return;
        let i = r.split(/\s*[,/\s]\s*/).map(e => e.replace(',', '').trim()).filter(e => '' !== e).map((e, t) => function (e, t, n) {
            if (/%$/.test(t))
                return 3 === n ? parseFloat(t) / 100 : 255 * parseFloat(t) / 100;
            if ('h' === e[n]) {
                if (/turn$/.test(t))
                    return 360 * parseFloat(t);
                if (/rad$/.test(t))
                    return 57.3 * parseFloat(t);
            }
            return parseFloat(t);
        }(n, e, t));
        if ('hsl' === n.substr(0, 3)) {
            let e = function ({
                hue: e,
                saturation: t,
                lightness: n,
                alpha: r
            }) {
                let i;
                t /= 255;
                let a = (1 - Math.abs(2 * (n /= 255) - 1)) * t, o = a * (1 - Math.abs(e / 60 % 2 - 1)), s = n - a / 2, l = (i = e < 60 ? [
                        a,
                        o,
                        0
                    ] : e < 120 ? [
                        o,
                        a,
                        0
                    ] : e < 180 ? [
                        0,
                        a,
                        o
                    ] : e < 240 ? [
                        0,
                        o,
                        a
                    ] : e < 300 ? [
                        o,
                        0,
                        a
                    ] : [
                        a,
                        0,
                        o
                    ]).map(e => Math.round((e + s) * 255));
                return {
                    red: l[0],
                    green: l[1],
                    blue: l[2],
                    alpha: r
                };
            }({
                hue: i[0],
                saturation: i[1],
                lightness: i[2],
                alpha: i[3]
            });
            return new p(e.red, e.green, e.blue, e.alpha);
        }
        return new p(i[0], i[1], i[2], 'number' == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return function ({
            red: e,
            green: t,
            blue: n,
            alpha: r
        }) {
            let i = e / 255, a = t / 255, o = n / 255, s = Math.max(i, a, o), l = Math.min(i, a, o), u = s - l, c = (s + l) / 2, d = u > 0 ? u / (1 - Math.abs(2 * c - 1)) : 0;
            if (0 === u)
                return {
                    hue: 0,
                    saturation: d,
                    lightness: c,
                    alpha: r
                };
            let _ = 0;
            switch (s) {
            case i:
                _ = (a - o) / u % 6;
                break;
            case a:
                _ = (o - i) / u + 2;
                break;
            case o:
                _ = (a - o) / u + 4;
            }
            return {
                hue: 60 * _,
                saturation: d,
                lightness: c,
                alpha: r
            };
        }({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        });
    }
    getRelativeLuminance() {
        var e = this.red / 255, t = this.green / 255, n = this.blue / 255;
        return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) + 0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
    }
}
function m(e, t) {
    let n = e.alpha, r = (1 - n) * t.red + n * e.red, i = (1 - n) * t.green + n * e.green, a = (1 - n) * t.blue + n * e.blue;
    return new p(r, i, a, e.alpha + t.alpha * (1 - e.alpha));
}
function I(e) {
    if (e)
        return parseInt(e) > 0 ? e : void 0;
}
class T {
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
        this.targetElement = e, this.targetAncestry = this.getElementAncestors(this.targetElement), this.boundingBox = void 0, this.className = t.className, this.offset = null != (n = t.offset) ? n : 0, this.zIndex = t.zIndex, i = this, i !== r && (null == r || r.hide(), r = i), this.invalidate();
    }
    hide() {
        this.targetElement = void 0, this.targetAncestry = void 0, this.boundingBox = void 0, this.className = void 0, this.offset = 0, this.zIndex = void 0, this.invalidate();
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
        let t = [], n = [], r = e;
        for (; null != r;)
            t.push(r), 'u' > typeof window && n.push(window.getComputedStyle(r)), r = r.parentElement;
        return {
            elements: t,
            styles: n
        };
    }
    getNextZIndexForAncestry(e) {
        for (let t = 0; t < e.elements.length; t++) {
            let n = e.elements[t], r = parseInt(e.styles[t].getPropertyValue('z-index'));
            if (!isNaN(r))
                return r + 1;
            if (n === this.container)
                break;
        }
    }
    getBorderRadius(e) {
        var t, n, r, i, a, o, s, l;
        let u = null != (n = I(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : '0', c = null != (i = I(null == (r = e.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : '0', d = null != (o = I(null == (a = e.styles[0]) ? void 0 : a.borderBottomRightRadius)) ? o : '0', _ = null != (l = I(null == (s = e.styles[0]) ? void 0 : s.borderBottomLeftRadius)) ? l : '0';
        if (!('0' === u && '0' === c && '0' === d && '0' === _))
            return `${ u } ${ c } ${ d } ${ _ }`;
    }
    makePositionFromDOMRect(e) {
        var t, n, r, i;
        if (null == this.container)
            return {};
        let a = this.container.getBoundingClientRect(), {
                scrollTop: o,
                scrollLeft: s
            } = this.container, l = 0, u = 0, c = 0, d = 0;
        return 'number' == typeof this.offset ? (l = this.offset, u = this.offset, c = this.offset, d = this.offset) : (l = null != (t = this.offset.top) ? t : 0, u = null != (n = this.offset.right) ? n : 0, c = null != (r = this.offset.bottom) ? r : 0, d = null != (i = this.offset.left) ? i : 0), {
            top: o + e.top - a.top + l,
            width: e.width - (u + d),
            height: e.height - (c + l),
            left: s + e.left - a.left + d
        };
    }
    getStyle() {
        var e;
        let t = {};
        if (null != this.boundingBox && (t = {
                ...this.makePositionFromDOMRect(this.boundingBox),
                zIndex: this.zIndex
            }), null != this.targetElement && null != this.targetAncestry) {
            let n = function (e) {
                let t = [];
                for (let n of e.styles.slice(1)) {
                    let e = p.parseString(n.backgroundColor);
                    if (null != e) {
                        if (e.alpha > 0.95)
                            return e;
                        t.push(e);
                    }
                }
                return t.push(new p(255, 255, 255, 1)), t.reduce(m);
            }(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                '--__adaptive-focus-ring-color': function (e, t) {
                    if (null == e)
                        return 'var(--focus-primary)';
                    let {saturation: n} = e.toHSL(), r = e.getRelativeLuminance();
                    return n <= 0.4 ? 'var(--focus-primary)' : 'u' > typeof t ? r < (t.brightnessTreshold || 0.2) ? 'var(--focus-light, rgba(255,255,255,0.7))' : 'var(--focus-dark, rgba(0, 0, 0, 0.85))' : 'rgba(255,255,255,0.7)';
                }(n, this.themeOptions),
                '--__adaptive-focus-ring-radius': this.getBorderRadius(this.targetAncestry)
            };
        }
        return t;
    }
}
let g = new T();
'u' > typeof window && g.setContainer(document.body);
let S = s.createContext(g);
var A = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i)
        return !!i;
    if (e === t)
        return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t)
        return !1;
    var a = Object.keys(e), o = Object.keys(t);
    if (a.length !== o.length)
        return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
        var u = a[l];
        if (!s(u))
            return !1;
        var c = e[u], d = t[u];
        if (!1 === (i = n ? n.call(r, c, d, u) : void 0) || void 0 === i && c !== d)
            return !1;
    }
    return !0;
};
let N = !1, v, O = {};
function R() {
    if (!N)
        return;
    let e = null == r ? void 0 : r.getStyle();
    null == e || A(e, O) ? null != v && cancelAnimationFrame(v) : (O = e, null == r || r.invalidate()), v = requestAnimationFrame(R);
}
let C = !1, y = {
        get ringsEnabled() {
            return C;
        },
        setRingsEnabled(e) {
            C = e, null == r || r.invalidate();
        },
        enableAnimationTracking() {
            N = !0, v = requestAnimationFrame(R);
        },
        disableAnimationTracking() {
            N = !1, null != v && cancelAnimationFrame(v);
        }
    };
var D = { exports: {} }, L = {};
D.exports = function () {
    if (a)
        return L;
    a = 1;
    var e = Symbol.for('react.element'), t = Symbol.for('react.fragment'), n = Object.prototype.hasOwnProperty, r = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
    function o(t, a, o) {
        var s, l = {}, u = null, c = null;
        for (s in (void 0 !== o && (u = '' + o), void 0 !== a.key && (u = '' + a.key), void 0 !== a.ref && (c = a.ref), a))
            n.call(a, s) && !i.hasOwnProperty(s) && (l[s] = a[s]);
        if (t && t.defaultProps)
            for (s in a = t.defaultProps)
                void 0 === l[s] && (l[s] = a[s]);
        return {
            $$typeof: e,
            type: t,
            key: u,
            ref: c,
            props: l,
            _owner: r.current
        };
    }
    return L.Fragment = t, L.jsx = o, L.jsxs = o, L;
}();
let b = D.exports.jsx, M = D.exports.jsxs;
function P(e) {
    let {
            containerRef: t,
            children: n,
            themeOptions: r
        } = e, i = s.useRef(new T());
    return s.useEffect(() => {
        i.current.setContainer(t.current), i.current.setThemeOptions(r);
    }, [t.current]), M(S.Provider, {
        value: i.current,
        children: [
            n,
            b(U, {})
        ]
    });
}
function U() {
    let e = s.useContext(S), [, t] = s.useState({});
    return s.useEffect(() => (e.invalidate = () => t({}), () => {
        e.invalidate = () => null;
    }), [e]), y.ringsEnabled && e.visible ? b('div', {
        className: _('focus-rings-ring', e.className),
        style: e.getStyle()
    }) : null;
}
let w = 'u' > typeof window && (null == (o = window.document) ? void 0 : o.createElement) != null ? s.useLayoutEffect : s.useEffect;
function x(e) {
    let {
        within: t = !1,
        enabled: n = !0,
        focused: r,
        offset: i = 0,
        focusTarget: a,
        ringTarget: o,
        ringClassName: l,
        focusClassName: u,
        focusWithinClassName: c,
        children: d
    } = e;
    null != a && E(null != o, 'FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.'), null != r && E(null != o, 'FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.');
    let f = s.useRef(!1), [h, p] = s.useState(!1), m = s.useContext(S), I = s.Children.only(d), {
            onBlur: T,
            onFocus: g,
            ...A
        } = I.props, N = s.useMemo(() => ({
            className: l,
            offset: i
        }), [
            l,
            i
        ]);
    w(() => {
        n && m.invalidate();
    }), s.useEffect(() => {
        n || m.hide();
    }, [
        n,
        m
    ]), s.useEffect(() => () => {
        f.current && m.hide();
    }, [m]), s.useEffect(() => {
        let e = null == o ? void 0 : o.current;
        null == r || null == e || (f.current = r, r ? m.showElement(e, N) : !1 === r && m.hide());
    }, [
        r,
        N,
        m,
        o
    ]), w(() => {
        if (null != r)
            return;
        let e = null == a ? void 0 : a.current, n = null == o ? void 0 : o.current;
        if (null != e && null != n)
            return e.addEventListener('focusin', i, !0), e.addEventListener('focusout', s, !0), () => {
                e.removeEventListener('focusin', i, !0), e.removeEventListener('focusout', s, !0);
            };
        function i(e) {
            if (null != n) {
                if (e.currentTarget === e.target) {
                    f.current = !0, m.showElement(n, N);
                    return;
                }
                p(!0), t && m.showElement(n, N);
            }
        }
        function s() {
            m.hide(), f.current = !1, p(!1);
        }
    }, [
        t,
        N,
        r,
        m,
        a,
        o
    ]);
    let v = s.useCallback(e => {
            m.hide(), f.current = !1, p(!1), null == T || T(e);
        }, [
            T,
            m
        ]), O = s.useCallback(e => {
            let n = null == o ? void 0 : o.current;
            e.currentTarget === e.target ? (f.current = !0, m.showElement(null != n ? n : e.currentTarget, N)) : (p(!0), t && m.showElement(null != n ? n : e.currentTarget, N)), null == g || g(e);
        }, [
            o,
            t,
            g,
            m,
            N
        ]);
    return n && null == a && null == r ? s.cloneElement(I, {
        ...A,
        className: _(A.className, f.current ? u : void 0, h ? c : void 0),
        onBlur: v,
        onFocus: O
    }) : I;
}
