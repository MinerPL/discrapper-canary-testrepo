n(757143);
var r = n(688619), i = n.n(r), a = n(595182), o = n.n(a), s = n(402903), l = n.n(s), u = n(190558), c = n(387117), d = n(949180), _ = n(777910), E = n(897710);
let {Themes: f} = n(15202).V, {
        SemanticColors: h,
        RawColors: p
    } = u.V, {Shadows: m} = _.V, {Spacing: I} = E.V, {Modules: T} = c.V, g = l()(p, e => i()(e)), S = {
        themes: f,
        modules: T,
        colors: l()(h, (e, t) => ({
            css: O(t),
            resolve(t) {
                let n = e[t.theme], r = n.raw, i = n.opacity;
                if (1 === i)
                    return S.unsafe_rawColors[r].resolve(t);
                {
                    let e = g[r];
                    return 0 !== e.alpha() && 1 !== i && (e = e.alpha(i)), A(e, t.saturation);
                }
            }
        })),
        unsafe_rawColors: l()(p, (e, t) => {
            let n = g[t];
            return {
                css: O(t),
                resolve: e => A(n, e.saturation)
            };
        }),
        shadows: l()(m, (e, t) => ({
            css: O(t),
            resolve: t => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: d.w,
        spacing: l()(I, e => ''.concat(e, 'px'))
    };
function A(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return N(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return N(e, t, n).css('hsl');
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return N(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = N(e, t, n), i = r.num();
            return 1 !== r.alpha() ? i << 8 | Math.round(255 * r.alpha()) : i;
        }
    };
}
function N(e, t, n) {
    var r;
    let i = o()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1), a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function v(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function O(e, t) {
    let n = null != t ? v(t) : null, r = v(e);
    return 'var(--'.concat([
        n,
        r
    ].filter(Boolean).join('-'), ')');
}
t.Z = S;
