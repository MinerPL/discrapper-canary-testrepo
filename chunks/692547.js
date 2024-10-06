n(47120), n(757143);
var r = n(688619),
    i = n.n(r),
    a = n(595182),
    s = n.n(a),
    o = n(402903),
    l = n.n(o),
    u = n(35782),
    c = n(190558),
    d = n(196548),
    _ = n(387117),
    E = n(949180),
    f = n(777910),
    h = n(897710);
let { Themes: p } = n(15202).V,
    { SemanticColors: I, RawColors: m } = c.V,
    { SemanticColorExperiments: T } = u.V,
    { Shadows: S } = f.V,
    { Spacing: g } = h.V,
    { Modules: A } = _.V,
    { Layout: N } = d.V,
    O = l()(m, (e) => i()(e)),
    R = {
        themes: p,
        modules: A,
        colors: l()(I, (e, t) => ({
            css: y(t),
            resolve(n) {
                let r = e[n.theme],
                    i = r.raw,
                    a = r.opacity;
                if (t in T && null != n.enabledExperiments && n.enabledExperiments.length > 0)
                    for (let e of n.enabledExperiments) {
                        var s, o, l, u;
                        let r = null === (o = T[t]) || void 0 === o ? void 0 : null === (s = o[e]) || void 0 === s ? void 0 : s[n.theme];
                        null != r && ((i = null !== (l = r.raw) && void 0 !== l ? l : i), (a = null !== (u = r.opacity) && void 0 !== u ? u : a));
                    }
                if (1 === a) return R.unsafe_rawColors[i].resolve(n);
                {
                    let e = O[i];
                    return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), v(e, n.saturation);
                }
            }
        })),
        unsafe_rawColors: l()(m, (e, t) => {
            let n = O[t];
            return {
                css: y(t),
                resolve: (e) => v(n, e.saturation)
            };
        }),
        shadows: l()(S, (e, t) => ({
            css: y(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: E.w,
        spacing: l()(g, (e) => ''.concat(e, 'px')),
        layout: l()(N, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e))
    };
function v(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).css('hsl');
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = C(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        }
    };
}
function C(e, t, n) {
    var r;
    let i = s()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function L(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function y(e, t) {
    let n = null != t ? L(t) : null,
        r = L(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
t.Z = R;
