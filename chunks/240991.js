n.r(t),
    n.d(t, {
        getOrParseBioAST: function () {
            return I;
        },
        parseBioReact: function () {
            return h;
        },
        parseBioReactWithCachedAST: function () {
            return m;
        },
        parseBioReactWithoutScrolling: function () {
            return T;
        }
    });
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    s = n.n(a),
    o = n(302454),
    l = n.n(o),
    u = n(25209),
    c = n(691424),
    d = n(428595);
n(454585);
var _ = n(364458);
let E = (0, _.Z)([d.Z.PROFILE_BIO_RULES, (0, c.Z)({ enableBuildOverrides: !1 })]),
    f = new (s())({ max: 2000 }),
    h = u.w4(E),
    p = void 0;
function I(e) {
    let t = f.get(e);
    return null != t ? t : ((t = p(e, !0)), f.set(e, t), t);
}
function m(e) {
    if (0 === e.trim().length) return null;
    let t = I(e);
    return l().reactFor(l().ruleOutput(E, 'react'))(t);
}
let T = u.w4((0, _.Z)([i().omit(E, ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention']), { emoji: { react: () => null } }]));
