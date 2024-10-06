r.d(t, {
    ML: function () {
        return o;
    },
    nH: function () {
        return i;
    },
    vK: function () {
        return d;
    },
    yV: function () {
        return s;
    }
});
var n = r(180650),
    a = r(921948);
let s = 1060,
    o = (e) => e * (0, a.Z)(),
    i = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
            { primary: r, secondary: n } = e;
        return 'linear-gradient('.concat(t, 'deg, ').concat(r.toHslString(), ', ').concat(n.toHslString(), ')');
    },
    l = [r(241371), r(448509)],
    c = {
        [''.concat(n.T.FANTASY)]: [r(709393), r(646584)],
        [''.concat(n.T.ANIME)]: [r(647387), r(448509)],
        [''.concat(n.T.BREAKFAST)]: [r(289901), r(402344)],
        [''.concat(n.T.FALL)]: [r(432170), r(15888)],
        [''.concat(n.T.WINTER)]: [r(304088), r(774694)],
        [''.concat(n.T.MONSTERS)]: [r(16724), r(441506)]
    },
    d = (e) => {
        var t;
        return null == e ? l : null !== (t = c[e]) && void 0 !== t ? t : l;
    };
