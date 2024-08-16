n.d(t, {
    GX: function () {
        return G;
    },
    LM: function () {
        return a;
    },
    M7: function () {
        return v;
    },
    UY: function () {
        return j;
    },
    fY: function () {
        return b;
    },
    k2: function () {
        return s;
    },
    v: function () {
        return U;
    },
    zM: function () {
        return P;
    }
}),
    n(627341),
    n(470079);
var s,
    a,
    r,
    i,
    l = n(278074),
    o = n(691324),
    c = n(180650),
    d = n(704215),
    _ = n(44315),
    u = n(410154),
    E = n(893136),
    T = n(689938),
    I = n(644089),
    R = n(420224),
    C = n(782164),
    g = n(22344),
    p = n(107209),
    N = n(876122),
    A = n(692797),
    m = n(219663),
    f = n(480097),
    S = n(270905),
    h = n(118810),
    M = n(428251),
    x = n(937641),
    O = n(522892);
((r = s || (s = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.TOOLTIP = 1)] = 'TOOLTIP'), (r[(r.COACHTIP = 2)] = 'COACHTIP'), (r[(r.COACHTIP_HEADLINE_ONLY = 3)] = 'COACHTIP_HEADLINE_ONLY'), (r[(r.BADGE = 4)] = 'BADGE'), ((i = a || (a = {})).NONE = 'NONE'), (i.SHY = 'SHY'), (i.LOFI_VIBES = 'LOFI_VIBES'), (i.GALAXY = 'GALAXY'), (i.RETRO_AND_PIRATES = 'RETRO_AND_PIRATES'), (i.ARCADE = 'ARCADE'), (i.TIDE = 'TIDE'), (i.DARK_FANTASY = 'DARK_FANTASY'), (i.ROBERT = 'ROBERT'), (i.STORM = 'STORM');
let b = {
        [d.z.COLLECTIBLES_SHOP_TIDE_COACHTIP]: {
            type: 2,
            title: () => T.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_TITLE,
            body: () => T.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_DESCRIPTION,
            imageSrc: h,
            assetIds: ['a_48b8411feb1e80a69048fc65b3275b75', 'a_0830085f29712a6f3a23a123302050b4', 'a_949a575b693c81ced8f56a7579d0969f'],
            entryPointClassName: 'tideButton'
        },
        [d.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING]: {
            type: 2,
            title: () => T.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_TITLE,
            body: () => T.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_DESCRIPTION,
            imageSrc: I,
            assetIds: ['a_ef8d97374ffdbf140df1164be6c69e46', 'a_4430a4ee89b7fba456e765db21f38485', 'a_1005898c6acf56a9ac5010baf444f6fd']
        },
        [d.z.COLLECTIBLES_SHOP_ROBERT_MARKETING]: {
            type: 2,
            title: () => T.Z.Messages.COLLECTIBLES_ROBERT_COACHTIP_TITLE,
            body: () => T.Z.Messages.COLLECTIBLES_ROBERT_COACHTIP_DESCRIPTION,
            imageSrc: A,
            assetIds: ['a_914f20f4984a11b5255f0e42c661fa5b', 'a_0f7fa66bc185c858f92a7918ea4dd47a', 'a_bba669bfb28f492b64852e00fde4989d'],
            entryPointIcon: E._,
            entryPointBackgroundAssets: {
                srcDark: m,
                srcLight: f
            },
            entrypointDecorationAssets: {
                srcDark: R,
                srcLight: C
            }
        },
        [d.z.COLLECTIBLES_SHOP_STORM_MARKETING]: {
            type: 2,
            title: () => T.Z.Messages.COLLECTIBLES_STORM_COACHTIP_TITLE,
            body: () => T.Z.Messages.COLLECTIBLES_STORM_COACHTIP_DESCRIPTION,
            imageSrc: O,
            assetIds: ['a_da532f804b47f1681006c2996eb07b2a', 'a_b1efe77f379c6c9c6e47e6b6299d5a7d', 'a_62cd9d7c0031a7c1eb5ad5cc96992189'],
            entrypointBackgroundStyle: {
                resting: {
                    light: 'linear-gradient(90deg, rgba(211, 211, 211, 0.00) 19.2%, rgba(211, 211, 211, 0.25) 61.36%, rgba(99, 5, 160, 0.50) 101.79%)',
                    dark: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) 18.53%, rgba(0, 0, 0, 0.25) 61.03%, rgba(99, 5, 160, 0.50) 101.79%)'
                },
                hovered: {
                    light: 'linear-gradient(90deg, rgba(211, 211, 211, 0.00) 0%, rgba(211, 211, 211, 0.50) 52.53%, rgba(99, 5, 160, 0.80) 102.9%)',
                    dark: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 52.64%, #6305A0 103.12%)'
                }
            },
            entryPointBackgroundAssets: {
                srcLightHovered: x,
                srcDarkHovered: x
            }
        }
    },
    P = {
        [d.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING]: {
            type: 3,
            title: () => T.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_NEUTRAL_TEXT,
            imageSrc: I,
            assetIds: ['a_ef8d97374ffdbf140df1164be6c69e46', 'a_4430a4ee89b7fba456e765db21f38485', 'a_1005898c6acf56a9ac5010baf444f6fd']
        }
    },
    v = (e) =>
        (0, l.EQ)(e)
            .with(c.T.TIDE, () => ({
                label: () => T.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
                iconSrc: M,
                style: {
                    background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
                    boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
                    color: (0, _.Lq)(o.I.WHITE_100)
                }
            }))
            .otherwise(() => null),
    L = {
        imageSrc: N,
        style: {
            position: 'absolute',
            width: '600px',
            zIndex: 10
        }
    },
    Z = {
        imageSrc: p,
        style: {
            position: 'absolute',
            width: '400px',
            right: '-200px',
            zIndex: 10
        }
    },
    D = {
        imageSrc: g,
        style: {
            position: 'absolute',
            width: '600px'
        }
    },
    B = {
        imageSrc: S,
        style: {
            position: 'absolute',
            width: '850px'
        }
    },
    j = (e) =>
        (0, l.EQ)(e)
            .with('1252405010608951358', () => L)
            .with('1252405017688936508', () => L)
            .with('1267521289330102344', () => B)
            .with('1267521289355268154', () => B)
            .with('1266160780928352268', () => B)
            .with('1266160780978556969', () => B)
            .with('1266161342801383434', () => B)
            .with('1220513995308400680', () => B)
            .with('1220513984273186816', () => B)
            .with('1220513989729976411', () => B)
            .with('1220514048068812901', () => B)
            .with('1266493591207940133', () => B)
            .with('1266493591275044903', () => B)
            .with('1220432740638523543', () => B)
            .with('1220513977683935373', () => D)
            .with('1220432647453409384', () => D)
            .with('1220432697718083614', () => D)
            .otherwise(() => null),
    U = (e) =>
        (0, l.EQ)(e)
            .with('1262491137386614805', () => Z)
            .otherwise(() => null),
    G = {
        [u.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => T.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
            description: () => T.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
        },
        [u.C5.ROBERT]: {
            artSrc: n(638431),
            backgroundSrc: n(619359),
            title: () => T.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_TITLE,
            description: () => T.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_DESCRIPTION
        },
        [u.C5.STORM]: {
            artSrc: n(152777),
            backgroundSrc: n(962560),
            title: () => T.Z.Messages.COLLECTIBLES_STORM_SETTINGS_BANNER_TITLE,
            description: () => T.Z.Messages.COLLECTIBLES_STORM_SETTINGS_BANNER_DESCRIPTION
        }
    };
