r(411104);
var n = r(688619), _ = r.n(n), a = r(402903), i = r.n(a), o = r(190558), E = r(949180), s = r(777910), c = r(897710), I = r(15202), R = r(211468);
let {Themes: u} = I.V, {
        SemanticColors: T,
        RawColors: l
    } = o.V, {Shadows: A} = s.V, {Spacing: N} = c.V, d = Symbol('semanticColor'), O = {
        themes: u,
        colors: i()(T, (t, e) => ({ [d]: e })),
        unsafe_rawColors: l,
        shadows: i()(A, t => {
            function e(e) {
                return { resolve: (r, n) => e(t[r].nativeStyles, n) };
            }
            return {
                shadowOffset: e(t => t.shadowOffset),
                shadowColor: e((t, e) => e ? t.shadowColorAndroid : t.shadowColor),
                shadowOpacity: e(t => t.shadowOpacity),
                shadowRadius: e(t => t.shadowRadius),
                elevation: e(t => t.elevation)
            };
        }),
        radii: E.w,
        spacing: N,
        internal: {
            isSemanticColor: t => 'object' == typeof t && null !== t && d in t,
            getSemanticColorName: t => t[d],
            resolveSemanticColor(t, e, r) {
                var n, a;
                t = function (t) {
                    if ('string' == typeof t) {
                        let e = t.toUpperCase();
                        if (!(e in u))
                            throw Error('Invalid theme: '.concat(t));
                        t = u[e];
                    }
                    return t;
                }(t);
                let i = T[e[d]], {category: o} = i, E = i[t], s = l[E.raw], c = E.opacity;
                if ((null == r ? void 0 : r.gradient) != null && 'gradient' in i) {
                    let t = i.gradient[null == r ? void 0 : r.gradient.theme];
                    if (null != t) {
                        let e = _()(t.color in l ? l[t.color] : null == r ? void 0 : r.gradient.colors[t.color]);
                        'saturation' in t && (e = e.set('hsl.s', t.saturation)), 'lightness' in t && (e = e.set('hsl.l', t.lightness)), s = e.hex(), c = 'opacity' in t ? t.opacity : 1;
                    }
                }
                let I = null !== (n = null == r ? void 0 : r.contrast) && void 0 !== n ? n : 1, A = null !== (a = null == r ? void 0 : r.saturation) && void 0 !== a ? a : 1;
                return (A < 1 && (s = (0, R.dO)(s, o, A)), 1 !== I && (s = (0, R.pq)(s, o, t, I)), 1 === c) ? s : _()(s).alpha(c).hex();
            },
            adjustColorSaturation: (t, e, r) => (0, R.dO)(t, r, e),
            adjustColorContrast: (t, e, r, n) => (0, R.pq)(t, r, n, e)
        }
    };
e.ZP = O;
