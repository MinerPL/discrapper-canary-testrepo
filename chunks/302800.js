t.d(a, {
  GX: function() {
return v;
  },
  LM: function() {
return s;
  },
  M7: function() {
return B;
  },
  UY: function() {
return x;
  },
  fY: function() {
return R;
  },
  k2: function() {
return n;
  },
  v: function() {
return h;
  },
  zM: function() {
return N;
  }
}), t(627341), t(470079);
var n, s, o, r, c = t(278074),
  f = t(691324),
  i = t(180650),
  _ = t(704215),
  C = t(44315),
  E = t(410154),
  T = t(893136),
  d = t(689938),
  I = t(644089),
  L = t(420224),
  p = t(782164),
  u = t(107209),
  A = t(736088),
  S = t(692797),
  b = t(219663),
  O = t(480097),
  l = t(118810),
  g = t(428251);
(o = n || (n = {}))[o.NONE = 0] = 'NONE', o[o.TOOLTIP = 1] = 'TOOLTIP', o[o.COACHTIP = 2] = 'COACHTIP', o[o.COACHTIP_HEADLINE_ONLY = 3] = 'COACHTIP_HEADLINE_ONLY', o[o.BADGE = 4] = 'BADGE', (r = s || (s = {})).NONE = 'NONE', r.SHY = 'SHY', r.LOFI_VIBES = 'LOFI_VIBES', r.GALAXY = 'GALAXY', r.RETRO_AND_PIRATES = 'RETRO_AND_PIRATES', r.ARCADE = 'ARCADE', r.TIDE = 'TIDE', r.DARK_FANTASY = 'DARK_FANTASY', r.ROBERT = 'ROBERT';
let R = {
[_.z.COLLECTIBLES_SHOP_TIDE_COACHTIP]: {
  type: 2,
  title: () => d.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_TITLE,
  body: () => d.Z.Messages.COLLECTIBLES_TIDE_COACHTIP_DESCRIPTION,
  imageSrc: l,
  assetIds: [
    'a_48b8411feb1e80a69048fc65b3275b75',
    'a_0830085f29712a6f3a23a123302050b4',
    'a_949a575b693c81ced8f56a7579d0969f'
  ],
  entryPointClassName: 'tideButton'
},
[_.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING]: {
  type: 2,
  title: () => d.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_TITLE,
  body: () => d.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_DESCRIPTION,
  imageSrc: I,
  assetIds: [
    'a_ef8d97374ffdbf140df1164be6c69e46',
    'a_4430a4ee89b7fba456e765db21f38485',
    'a_1005898c6acf56a9ac5010baf444f6fd'
  ]
},
[_.z.COLLECTIBLES_SHOP_ROBERT_MARKETING]: {
  type: 2,
  title: () => d.Z.Messages.COLLECTIBLES_ROBERT_COACHTIP_TITLE,
  body: () => d.Z.Messages.COLLECTIBLES_ROBERT_COACHTIP_DESCRIPTION,
  imageSrc: S,
  assetIds: [
    'a_914f20f4984a11b5255f0e42c661fa5b',
    'a_0f7fa66bc185c858f92a7918ea4dd47a',
    'a_bba669bfb28f492b64852e00fde4989d'
  ],
  entryPointIcon: T._,
  entryPointBackgroundAssets: {
    srcDark: b,
    srcLight: O
  },
  entrypointDecorationAssets: {
    srcDark: L,
    srcLight: p
  }
}
  },
  N = {
[_.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING]: {
  type: 3,
  title: () => d.Z.Messages.COLLECTIBLES_DARK_FANTASY_COACHTIP_NEUTRAL_TEXT,
  imageSrc: I,
  assetIds: [
    'a_ef8d97374ffdbf140df1164be6c69e46',
    'a_4430a4ee89b7fba456e765db21f38485',
    'a_1005898c6acf56a9ac5010baf444f6fd'
  ]
}
  },
  B = e => (0, c.EQ)(e).with(i.T.TIDE, () => ({
label: () => d.Z.Messages.COLLECTIBLES_SHY_FOR_A_LIMITED_TIME,
iconSrc: g,
style: {
  background: 'linear-gradient(180deg, #103A8B -7.5%, #3390FD 128.75%)',
  boxShadow: '0px 0px 15.4px 0px rgba(23, 160, 236, 0.5)',
  color: (0, C.Lq)(f.I.WHITE_100)
}
  })).otherwise(() => null),
  P = {
imageSrc: A,
style: {
  position: 'absolute',
  width: '600px',
  zIndex: 10
}
  },
  D = {
imageSrc: u,
style: {
  position: 'absolute',
  width: '400px',
  right: '-200px',
  zIndex: 10
}
  },
  x = e => (0, c.EQ)(e).with('1252405010608951358', () => P).with('1252405017688936508', () => P).otherwise(() => null),
  h = e => (0, c.EQ)(e).with('1262491137386614805', () => D).otherwise(() => null),
  v = {
[E.C5.GALAXY]: {
  artSrc: t(161594)
},
[E.C5.TIDE]: {
  artSrc: t(94899),
  backgroundSrc: t(987583),
  title: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_TITLE,
  description: () => d.Z.Messages.COLLECTIBLES_TIDE_SETTINGS_BANNER_DESCRIPTION
},
[E.C5.ROBERT]: {
  artSrc: t(638431),
  backgroundSrc: t(619359),
  title: () => d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_TITLE,
  description: () => d.Z.Messages.COLLECTIBLES_ROBERT_SETTINGS_BANNER_DESCRIPTION
}
  };