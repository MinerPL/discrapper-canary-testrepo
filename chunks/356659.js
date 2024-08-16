n.d(t, {
    A5: function () {
        return B;
    },
    B2: function () {
        return S;
    },
    Bg: function () {
        return m;
    },
    D5: function () {
        return c;
    },
    D_: function () {
        return E;
    },
    EF: function () {
        return p;
    },
    G$: function () {
        return f;
    },
    HW: function () {
        return N;
    },
    Hp: function () {
        return A;
    },
    JO: function () {
        return L;
    },
    Kw: function () {
        return M;
    },
    MG: function () {
        return O;
    },
    OT: function () {
        return o;
    },
    Qr: function () {
        return C;
    },
    Ut: function () {
        return R;
    },
    WM: function () {
        return I;
    },
    X9: function () {
        return u;
    },
    XH: function () {
        return v;
    },
    _U: function () {
        return G;
    },
    dJ: function () {
        return l;
    },
    f_: function () {
        return y;
    },
    i$: function () {
        return w;
    },
    jF: function () {
        return h;
    },
    ji: function () {
        return U;
    },
    jp: function () {
        return P;
    },
    mg: function () {
        return g;
    },
    nU: function () {
        return T;
    },
    wD: function () {
        return D;
    },
    xd: function () {
        return k;
    },
    xx: function () {
        return x;
    },
    yl: function () {
        return b;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(710845),
    _ = n(70956);
((r = o || (o = {}))[(r.SECONDS_30 = 30 * _.Z.Millis.SECOND)] = 'SECONDS_30'), (r[(r.MINUTES_1 = _.Z.Millis.MINUTE)] = 'MINUTES_1'), (r[(r.MINUTES_2 = 2 * _.Z.Millis.MINUTE)] = 'MINUTES_2'), ((i = l || (l = {}))[(i.ALL = 0)] = 'ALL'), (i[(i.FRIENDS = 1)] = 'FRIENDS'), ((a = u || (u = {})).DECOUPLED = 'decoupled'), (a.VIEWER = 'viewer'), (a.STREAMER = 'streamer'), ((s = c || (c = {}))[(s.Error = 0)] = 'Error'), (s[(s.Disabled = 1)] = 'Disabled'), (s[(s.Enabled = 2)] = 'Enabled');
let E = 'alt+c',
    f = 6 * _.Z.Millis.SECOND,
    h = new d.Z('Clips'),
    p = (e) => 'Discord_Clip_'.concat(e, '.mp4'),
    m = 3,
    I = 1,
    T = /(NVIDIA GeForce GTX (98|10|16).*|Radeon RX 5(500|600|).*|Radeon RX5.*)/,
    g = /(NVIDIA GeForce (RTX (20|30|40).*))|(.*Radeon RX (57|58|59|6|7).*)/,
    S = /(Apple M[12].*)/,
    A = 0.1,
    N = 25,
    v = 0,
    O = 200,
    R = 'clips-edit',
    C = 'clips-gallery',
    y = 640,
    D = 360,
    L = 100,
    b = (e) => 'Clip - '.concat(new Date(e).toLocaleString()),
    M = 15,
    P = 30000,
    U = 30,
    w = 10,
    x = 14 * _.Z.Millis.DAY,
    G = 5,
    k = 5,
    B = 1;
