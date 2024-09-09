n.d(t, {
    GX: function () {
        return f;
    },
    M7: function () {
        return R;
    },
    UY: function () {
        return p;
    },
    k2: function () {
        return s;
    },
    v: function () {
        return A;
    }
}),
    n(627341),
    n(470079);
var s,
    a,
    r = n(278074),
    i = n(691324),
    l = n(180650),
    o = n(44315),
    c = n(410154),
    d = n(689938),
    _ = n(22344),
    u = n(107209),
    E = n(876122),
    T = n(270905),
    I = n(428251);
((a = s || (s = {}))[(a.NONE = 0)] = 'NONE'), (a[(a.TOOLTIP = 1)] = 'TOOLTIP'), (a[(a.COACHTIP = 2)] = 'COACHTIP'), (a[(a.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (a[(a.BADGE = 4)] = 'BADGE');
let R = (e) =>
        (0, r.EQ)(e)
            .with(l.T.TIDE, () => ({
                label: () => d.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
                iconSrc: I,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, o.Lq)(i.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    g = {
        imageSrc: E,
        style: {
            position: 'absolute',
            width: '600px',
            zIndex: 10
        }
    },
    C = {
        imageSrc: u,
        style: {
            position: 'absolute',
            width: '400px',
            right: '-200px',
            zIndex: 10
        }
    },
    N = {
        imageSrc: _,
        style: {
            position: 'absolute',
            width: '600px'
        }
    },
    m = {
        imageSrc: T,
        style: {
            position: 'absolute',
            width: '850px'
        }
    },
    p = (e) =>
        (0, r.EQ)(e)
            .with('1252405010608951358', () => g)
            .with('1252405017688936508', () => g)
            .with('1267521289330102344', () => m)
            .with('1267521289355268154', () => m)
            .with('1266160780928352268', () => m)
            .with('1266160780978556969', () => m)
            .with('1266161342801383434', () => m)
            .with('1220513995308400680', () => m)
            .with('1220513984273186816', () => m)
            .with('1220513989729976411', () => m)
            .with('1220514048068812901', () => m)
            .with('1266493591207940133', () => m)
            .with('1266493591275044903', () => m)
            .with('1220432740638523543', () => m)
            .with('1220513977683935373', () => N)
            .with('1220432647453409384', () => N)
            .with('1220432697718083614', () => N)
            .otherwise(() => null),
    A = (e) =>
        (0, r.EQ)(e)
            .with('1262491137386614805', () => C)
            .otherwise(() => null),
    f = {
        [c.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
            description: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
        },
        [c.C5.ROBERT]: {
            artSrc: n(638431),
            backgroundSrc: n(619359),
            title: () => d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_TITLE,
            description: () => d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_DESCRIPTION
        },
        [c.C5.STORM]: {
            artSrc: n(152777),
            backgroundSrc: n(962560),
            title: () => d.Z.Messages.COLLECTIBLES_STORM_SETTINGS_BANNER_TITLE,
            description: () => d.Z.Messages.COLLECTIBLES_STORM_SETTINGS_BANNER_DESCRIPTION
        }
    };
