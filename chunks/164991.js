n.d(t, {
    $G: function () {
        return h;
    },
    A3: function () {
        return I;
    },
    BK: function () {
        return v;
    },
    D1: function () {
        return S;
    },
    Dm: function () {
        return _;
    },
    LD: function () {
        return N;
    },
    NL: function () {
        return m;
    },
    Zq: function () {
        return p;
    },
    a7: function () {
        return E;
    },
    lZ: function () {
        return g;
    },
    lx: function () {
        return f;
    },
    uP: function () {
        return C;
    }
});
var i = n(192379),
    r = n(903797),
    a = n(782690),
    l = n(731965);
let s = Object.freeze({
        query: '',
        languageCode: null,
        categoryId: n(731455).Hk,
        fetchedQuery: '',
        resultsQuery: '',
        resultsInitialCategoryId: null,
        scrollPosition: null
    }),
    o = (0, r.Z)(() => s);
function c(e) {
    return (t) => t[e];
}
function d(e) {
    return o(
        i.useMemo(() => {
            var t;
            return (t = e), (e) => e[t];
        }, [e]),
        a.Z
    );
}
function u(e) {
    var t;
    let n = ((t = e), (e) => e[t]);
    return n(o.getState());
}
let h = () => d('resultsQuery'),
    m = () => d('fetchedQuery'),
    p = () => u('fetchedQuery'),
    g = () => d('categoryId'),
    f = () => u('categoryId'),
    _ = () => d('languageCode'),
    E = () => u('languageCode'),
    I = () => d('query'),
    C = () => u('query'),
    v = () => u('scrollPosition'),
    S = () => d('resultsInitialCategoryId'),
    N = (e) => {
        (0, l.j)(() => o.setState(e));
    };
