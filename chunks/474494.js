n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var s = n(735250);
n(470079);
var a = n(319147),
    r = n(306276),
    i = n(510236),
    l = n(133398),
    o = n(722283),
    c = n(298274),
    d = n(569620),
    _ = n(16503),
    u = n(64268),
    E = n(697720),
    T = n(578325),
    I = n(56790),
    R = n(90718),
    C = n(897482),
    g = n(4515),
    p = n(474472),
    N = n(156129),
    A = n(799303),
    m = n(245630),
    f = n(842272),
    S = n(486731),
    h = n(346943),
    M = n(55826),
    x = n(218776),
    O = n(414653),
    b = n(297141),
    P = n(26517),
    v = n(93125),
    L = n(278583),
    Z = n(814437);
let D = new Map([
    ['BG', i],
    ['CZ', c],
    ['HU', C],
    ['RO', P],
    ['SE', v],
    ['CY', o],
    ['EE', _],
    ['IS', p],
    ['IE', g],
    ['LV', S],
    ['LI', A],
    ['LT', m],
    ['LU', f],
    ['MT', h],
    ['SK', Z],
    ['SI', L],
    ['GR', I],
    ['FI', E],
    ['PT', b],
    ['NO', x],
    ['BE', r],
    ['AT', a],
    ['CH', l],
    ['FR', T],
    ['DE', d],
    ['ES', u],
    ['IT', N],
    ['NL', M],
    ['PL', O],
    ['HR', R]
]);
function B(e) {
    let { className: t, countryCode: n } = e;
    if (null == n || !D.has(n)) return null;
    let a = D.get(n);
    return (0, s.jsx)('img', {
        className: t,
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: a
    });
}
