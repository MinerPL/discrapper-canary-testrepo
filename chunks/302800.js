n.d(t, {
    GX: function () {
        return O;
    },
    LM: function () {
        return a;
    },
    M7: function () {
        return h;
    },
    QQ: function () {
        return S;
    },
    UY: function () {
        return x;
    },
    k2: function () {
        return s;
    }
}), n(627341);
var s, a, r, i, l = n(278074), o = n(691324), c = n(180650), d = n(704215), _ = n(44315), u = n(410154), E = n(689938), T = n(714953), I = n(160506), R = n(263660), C = n(848359), p = n(736088), g = n(782984), A = n(118810), m = n(428251), N = n(376477), f = n(224941);
(r = s || (s = {}))[r.NONE = 0] = 'NONE', r[r.TOOLTIP = 1] = 'TOOLTIP', r[r.COACHTIP = 2] = 'COACHTIP', (i = a || (a = {})).NONE = 'NONE', i.SHY = 'SHY', i.LOFI_VIBES = 'LOFI_VIBES', i.GALAXY = 'GALAXY', i.RETRO_AND_PIRATES = 'RETRO_AND_PIRATES', i.ARCADE = 'ARCADE', i.TIDE = 'TIDE';
let S = {
        [d.z.COLLECTIBLES_SHOP_SHY_COACHTIP]: {
            type: 2,
            title: () => E.Z.Messages.COLLECTIBLES_SHY_COACHTIP_TITLE,
            body: () => E.Z.Messages.COLLECTIBLES_SHY_COACHTIP_DESCRIPTION,
            imageSrc: N,
            assetIds: [
                'a_98555e40cc6802bd3a4fed906af1d992',
                'a_09de63526a45be1ddac70e84718ee04a',
                'a_904b1989077c91fca1168d39bfcaa0a4'
            ],
            entrypointDecorationAssets: {
                srcDark: I,
                srcLight: R
            },
            entryPointClassName: 'shyButton'
        },
        [d.z.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP]: {
            type: 2,
            title: () => E.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_TITLE,
            body: () => E.Z.Messages.COLLECTIBLES_LOFI_VIBES_COACHTIP_DESCRIPTION,
            imageSrc: g,
            assetIds: [
                'a_49c479e15533fb4c02eb320c9c137433',
                'a_77b7b6a740a9451e1ef39c0252154ef8',
                'a_e8c11f139e55dac538cdaafb3caa2317'
            ]
        },
        [d.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP]: {
            type: 2,
            title: () => E.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_TITLE,
            body: () => E.Z.Messages.COLLECTIBLES_GALAXY_COACHTIP_DESCRIPTION,
            imageSrc: C,
            assetIds: [
                'a_a47890109a231f72dae7b17b27164676',
                'a_c9b84ee80a335a9d59b69352e34574f6',
                'a_9a6bf0ab30a6719d6eb09fa4996984ca'
            ]
        },
        [d.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP]: {
            type: 2,
            title: () => E.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_TITLE,
            body: () => E.Z.Messages.COLLECTIBLES_FEELIN_RETRO_PIRATES_COACHTIP_DESCRIPTION,
            imageSrc: T,
            assetIds: [
                'a_89155faed81b205d59fbbefa4316952d',
                'a_9cc1c1426ea5478aac7be6cdefdbc568',
                'a_f11c214394044d001d81c983dcab354f',
                'a_798a5bcbb11067e4d9ab339e51d2a16c'
            ]
        },
        [d.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP]: {
            type: 2,
            title: () => E.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_TITLE,
            body: () => E.Z.Messages.COLLECTIBLES_ARCADE_COACHTIP_DESCRIPTION,
            imageSrc: f,
            assetIds: [
                'a_e72e44eeea89e92dc02c9bec8b02d158',
                'a_492f6b54b761c0a14d9dbc9c98aaa0f5',
                'a_46750412a18f4988de71f4cf14991b38'
            ]
        },
        [d.z.COLLECTIBLES_SHOP_TIDE_COACHTIP]: {
            type: 2,
            title: () => E.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_TITLE,
            body: () => E.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_DESCRIPTION,
            imageSrc: A,
            assetIds: [
                'a_48b8411feb1e80a69048fc65b3275b75',
                'a_0830085f29712a6f3a23a123302050b4',
                'a_949a575b693c81ced8f56a7579d0969f'
            ],
            entryPointClassName: 'tideButton'
        }
    }, h = e => (0, l.EQ)(e).with(c.T.TIDE, () => ({
        label: () => E.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
        iconSrc: m,
        style: {
            background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
            boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
            color: (0, _.Lq)(o.I.WHITE_100)
        }
    })).otherwise(() => null), M = {
        confettiAssetSrc: p,
        style: {
            position: 'absolute',
            width: '600px',
            zIndex: 10
        }
    }, x = e => (0, l.EQ)(e).with('1252405010608951358', () => M).with('1252405017688936508', () => M).otherwise(() => null), O = {
        [u.C5.GALAXY]: { artSrc: n(161594) },
        [u.C5.TIDE]: {
            artSrc: n(94899),
            backgroundSrc: n(987583),
            title: () => E.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
            description: () => E.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
        }
    };
