n.d(t, {
    Z: function () {
        return h;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(695464), o = n(459);
let c = 16 / 9;
function u(e, t) {
    return Math.max(1, Math.floor((t - e) / (8 + e)) + 1);
}
function d(e, t, n) {
    let i = t - e;
    for (; i > 0;) {
        let t = e, a = Math.floor(i / 2);
        n(t += a) ? (e = t + 1, i -= a + 1) : i = a;
    }
    return e;
}
function h(e) {
    var t;
    let {
            className: n,
            children: l,
            keyExtractor: h,
            paddingTop: p = 0,
            paddingBottom: m = 0
        } = e, [_, f] = a.useState({
            width: 0,
            height: 0
        }), {
            width: E,
            height: C
        } = _, g = null !== (t = null == l ? void 0 : l.length) && void 0 !== t ? t : 0, I = E - 16, x = C - (p + m), {
            tileStyle: T,
            tileWidth: N,
            rows: v,
            columns: S
        } = a.useMemo(() => function (e, t, n) {
            let {
                rows: i,
                columns: a,
                tileWidth: l
            } = function (e, t, n) {
                let i;
                let a = Math.floor(t / 25);
                i = e > 25 ? d(a, t, e => {
                    let i = u(e, t), a = function (e, t) {
                            let n = e / c;
                            return Math.ceil((t - n) / (8 + n)) + 1;
                        }(e, n);
                    return i * a > 25;
                }) : d(a, t, i => {
                    let a = u(i, t), l = function (e, t) {
                            let n = e / c;
                            return Math.floor((t - n) / (8 + n)) + 1;
                        }(i, n);
                    return a * l >= e;
                }) - 1;
                let l = u(i, t), s = Math.ceil(e / l);
                return {
                    tileWidth: i,
                    columns: Math.max(1, l),
                    rows: s
                };
            }(e, t, n);
            return {
                tileStyle: { width: l },
                tileWidth: l,
                rows: i,
                columns: a
            };
        }(g, I, x), [
            g,
            I,
            x
        ]), Z = S + 1, A = Z * N + (Z - 1) * 8 <= E, M = Math.floor(N / c) + 8, b = Math.max(0, x - M * v) / 2;
    return (0, i.jsx)(r.Z, {
        fade: !0,
        className: n,
        listPadding: [
            p + b,
            0,
            m + b - 8,
            8
        ],
        renderRow: function (e) {
            var t;
            let n = e * S;
            return (0, i.jsx)('div', {
                className: o.row,
                children: null == l ? void 0 : null === (t = l.slice(n, n + S)) || void 0 === t ? void 0 : t.map((e, t) => {
                    var a;
                    let l = n + t;
                    return (0, i.jsx)('div', {
                        style: T,
                        className: s()(o.tile, {
                            [o.padColumn]: A,
                            [o.noVerticalMargin]: l >= (v - 1) * S,
                            [o.noHorizontalMargin]: (l + 1) % S == 0 || l === g - 1
                        }),
                        children: (0, i.jsx)('div', {
                            className: o.tileSizer,
                            children: e(N)
                        })
                    }, null !== (a = null == h ? void 0 : h(l)) && void 0 !== a ? a : l);
                })
            }, e);
        },
        rowCount: v,
        rowCountBySection: [v],
        rowHeight: M,
        onResize: f
    });
}
