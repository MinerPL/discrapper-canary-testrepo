n.d(t, {
    Vb: function () {
        return s;
    },
    YI: function () {
        return o;
    },
    u5: function () {
        return a;
    },
    vJ: function () {
        return i;
    }
});
var r = n(333392);
let i = n(139458).B || !1;
function a() {
    let e = n(165830).Z;
    return s()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((t) => {
            let { code: n, name: i } = t;
            return {
                value: n,
                name: i,
                localizedName: e[(0, r.runtimeHashMessageKey)(n)]
            };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: r } = t;
            return (n = n.toLowerCase()), n < (r = r.toLowerCase()) ? -1 : n > r ? 1 : 0;
        });
}
function s() {
    return n(515297);
}
function o(e, t) {
    var n, r;
    let i = s()
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t } = e;
            return t;
        });
    if (i.includes(e)) return e;
    let a = e.split('-');
    return i.includes(a[0]) ? a[0] : 'zh' === a[0] && a.length > 1 && 'Hant' === a[1] ? (null !== (n = i.find((e) => 'zh-TW' === e)) && void 0 !== n ? n : t) : null !== (r = i.find((e) => e.split('-')[0] === a[0])) && void 0 !== r ? r : t;
}
