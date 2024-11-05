n.d(t, {
    BH: function () {
        return E;
    },
    Cs: function () {
        return I;
    },
    G1: function () {
        return d;
    },
    IC: function () {
        return L;
    },
    OT: function () {
        return x;
    },
    Vw: function () {
        return _;
    },
    XM: function () {
        return h;
    },
    XS: function () {
        return R;
    },
    Yq: function () {
        return w;
    },
    aj: function () {
        return C;
    },
    bl: function () {
        return O;
    },
    eu: function () {
        return P;
    },
    f_: function () {
        return g;
    },
    iC: function () {
        return A;
    },
    mO: function () {
        return D;
    },
    qS: function () {
        return f;
    },
    ql: function () {
        return m;
    },
    rN: function () {
        return v;
    },
    uV: function () {
        return N;
    },
    x0: function () {
        return k;
    },
    x6: function () {
        return M;
    }
}),
    n(724458),
    n(47120),
    n(653041);
var r = n(392711),
    i = n(979554),
    a = n(134432),
    s = n(937615),
    o = n(922347),
    l = n(212161),
    u = n(215023),
    c = n(981631);
let d = (e) => (null == e ? void 0 : e.premiumType) != null,
    f = (e) => (null == e ? void 0 : e.purchaseType) === c.qc2.PREMIUM_PURCHASE,
    _ = (e, t, n) => {
        let r;
        return m(e, (r = n ? (t ? c.tuJ.MOBILE_PREMIUM_TIER_2 : c.tuJ.MOBILE) : t ? c.tuJ.PREMIUM_TIER_2 : c.tuJ.DEFAULT));
    },
    h = (e, t, n) => {
        let r = _(e, t, n);
        return null == r ? '' : (0, s.T4)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency);
    },
    p = (e) => {
        let t = e.bundledProducts;
        return null == t
            ? 0
            : t.reduce((e, t) => {
                  var n;
                  let r = m(t, c.tuJ.DEFAULT);
                  return e + (null !== (n = null == r ? void 0 : r.amount) && void 0 !== n ? n : 0);
              }, 0);
    },
    m = (e, t) => {
        var n, r, i;
        let a = null !== (i = e.prices[t]) && void 0 !== i ? i : null;
        return null == a ? null : null === (r = a.countryPrices) || void 0 === r ? void 0 : null === (n = r.prices) || void 0 === n ? void 0 : n[0];
    },
    g = {
        original: -1,
        discountPercentage: -1
    },
    E = (e, t) => {
        let n = p(e);
        if (n <= 0) return g;
        let r = m(e, t ? c.tuJ.PREMIUM_TIER_2 : c.tuJ.DEFAULT);
        return null == r
            ? g
            : {
                  original: n,
                  discountPercentage: Math.floor(((n - r.amount) / n) * 100)
              };
    },
    v = (e) => {
        var t;
        return (null === (t = m(e, c.tuJ.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0;
    },
    I = (e) => {
        let t = (0, r.flatMap)([...e.values()], 'products');
        return (0, r.uniqBy)(t, 'storeListingId');
    },
    S = (e, t) => {
        if (t === i.Z.AVATAR_DECORATION) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(o.M);
            return (0, r.uniqBy)(t, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let t = (0, r.flatMap)([...e.values()], 'items').filter(l.H);
            return (0, r.uniqBy)(t, 'id');
        }
    },
    T = (e, t) => {
        let n = I(e);
        if (t === i.Z.AVATAR_DECORATION) {
            let e = (0, r.flatMap)(n, 'items').filter(o.M);
            return (0, r.uniqBy)(e, 'id');
        }
        if (t === i.Z.PROFILE_EFFECT) {
            let e = (0, r.flatMap)(n, 'items').filter(l.H);
            return (0, r.uniqBy)(e, 'id');
        }
    },
    b = (e) => S(e, i.Z.AVATAR_DECORATION),
    y = (e) => T(e, i.Z.AVATAR_DECORATION),
    A = (e, t) => (0, r.uniqBy)([...b(e), ...y(t)], 'id'),
    N = (e, t) => {
        var n;
        let { CDN_HOST: r, API_ENDPOINT: i } = window.GLOBAL_ENV,
            s = (0, a.oO)(t.size * (0, a.x_)()),
            o = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : 'png';
        if (null != r) return ''.concat(location.protocol, '//').concat(r, '/app-assets/').concat(c.XAJ, '/').concat(e, '.').concat(o, '?size=').concat(s);
        let l = c.ANM.APPLICATION_ASSET(c.XAJ, e, o);
        return ''.concat(location.protocol).concat(i).concat(l, '?size=').concat(s);
    },
    C = (e) => S(e, i.Z.PROFILE_EFFECT),
    R = (e) => T(e, i.Z.PROFILE_EFFECT),
    O = (e, t) => {
        let n = C(t),
            r = R(e).filter((e) => {
                let { id: t } = e;
                return !n.some((e) => e.id === t);
            });
        return {
            purchased: n,
            shopPreviews: r
        };
    },
    D = (e) => e.applicationId === c.XAJ,
    L = (e) => 3.8 * e,
    x = (e) => {
        let t = new Date(),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
        return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 86400000);
    },
    w = (e) => {
        let t = u.yf[e];
        return null != t && new Date().getTime() < t;
    },
    M = (e) => (null == e ? void 0 : e.type) === i.Z.BUNDLE,
    P = (e, t, n) => {
        if (M(e)) return p(e);
        let r = m(e, t ? (n ? c.tuJ.MOBILE : c.tuJ.DEFAULT) : n ? c.tuJ.MOBILE_PREMIUM_TIER_2 : c.tuJ.PREMIUM_TIER_2);
        return null == r ? void 0 : r.amount;
    },
    k = (e, t) => {
        let n = [];
        for (let r of e) {
            let e = r.heroRanking;
            if (null != e)
                for (let r of e) {
                    let e = t.get(r);
                    if (null != e && !M(e) && (n.push(r), n.length >= u.K8)) return n;
                }
        }
        return U(n);
    },
    U = (e) => {
        if (e.length < u.K8) {
            let t = u.HU.slice(0, u.K8 - e.length);
            return e.concat(t);
        }
        return e;
    };
