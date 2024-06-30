n.d(t, {
    U: function () {
        return s;
    },
    k: function () {
        return es;
    }
}), n(47120);
var s, r, o = n(735250);
n(470079);
var i = n(120356), c = n.n(i), a = n(442837), l = n(246946), u = n(91802), d = n(222727), p = n(981631), f = n(630357), g = n(500052), b = n(375832), v = n(992171), x = n(937064), _ = n(434336), S = n(128955), I = n(803353), E = n(479388), h = n(179581), A = n(13174), T = n(580248), C = n(966294), m = n(302143), L = n(146121), U = n(705500), N = n(402127), B = n(153652), M = n(485487), O = n(200985), P = n(270930), R = n(46514), j = n(750876), D = n(993855), w = n(701497), F = n(937717), Z = n(165194), G = n(208802), y = n(145905), k = n(335302), H = n(956172), Y = n(695579), V = n(541764), W = n(191706), X = n(67528), z = n(332150), K = n(581902), J = n(167219), Q = n(704381), $ = n(591417), q = n(929883), ee = n(261137), et = n(958700);
(r = s || (s = {}))[r.PrivateMessages = 0] = 'PrivateMessages', r[r.SettingsMenu = 1] = 'SettingsMenu';
let en = new Map([
    [
        'PE',
        W
    ],
    [
        'PH',
        X
    ],
    [
        'CL',
        S
    ],
    [
        'CO',
        I
    ],
    [
        'AR',
        g
    ],
    [
        'JP',
        j
    ],
    [
        'VN',
        et
    ],
    [
        'TH',
        ee
    ],
    [
        'ID',
        M
    ],
    [
        'MY',
        H
    ],
    [
        'MX',
        k
    ],
    [
        'KR',
        D
    ],
    [
        'BG',
        x
    ],
    [
        'CZ',
        h
    ],
    [
        'HU',
        B
    ],
    [
        'RO',
        J
    ],
    [
        'SE',
        Q
    ],
    [
        'CY',
        E
    ],
    [
        'EE',
        T
    ],
    [
        'IS',
        P
    ],
    [
        'IE',
        O
    ],
    [
        'LV',
        G
    ],
    [
        'LI',
        w
    ],
    [
        'LT',
        F
    ],
    [
        'LU',
        Z
    ],
    [
        'MT',
        y
    ],
    [
        'SK',
        q
    ],
    [
        'SI',
        $
    ],
    [
        'GR',
        U
    ],
    [
        'FI',
        m
    ],
    [
        'PT',
        K
    ],
    [
        'NO',
        V
    ],
    [
        'BE',
        v
    ],
    [
        'AT',
        b
    ],
    [
        'CH',
        _
    ],
    [
        'FR',
        L
    ],
    [
        'DE',
        A
    ],
    [
        'ES',
        C
    ],
    [
        'IT',
        R
    ],
    [
        'NL',
        Y
    ],
    [
        'PL',
        z
    ],
    [
        'HR',
        N
    ]
]);
function es(e) {
    let {
            entryPoint: t,
            className: n
        } = e, r = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation), i = (0, u.n)(), g = null == i ? void 0 : i.countryCode;
    if ((0, d.U)(p.jXE.SETTINGS_PREMIUM, g), null == g || !en.has(g) || r)
        return null;
    let b = en.get(g), v = 'badgeIcon' + s[t];
    return (0, o.jsx)('img', {
        className: c()(n, f[v]),
        'aria-hidden': !0,
        alt: 'Wumpus holding a country-specific flag',
        src: b
    });
}
