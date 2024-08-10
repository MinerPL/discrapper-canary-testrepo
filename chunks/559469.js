n.d(t, {
  n: function() {
return l;
  }
});
var i = n(470079),
  a = n(116175),
  s = n(308083);

function r(e) {
  let {
id: t,
preset: n,
banner: i,
bannerHash: r,
...l
  } = e, o = (0, a.lP)();
  return {
id: t,
name: '',
icon: null,
description: '',
memberCount: 0,
playstyle: s.zv.CASUAL,
tag: '',
traits: [],
games: [],
banner: i,
bannerHash: r,
badge: {
  badgeKind: o,
  primaryColor: s.LD[n].primary,
  secondaryColor: s.LD[n].secondary
},
branding: {
  primaryColor: s.LD[n].primary,
  secondaryColor: s.LD[n].secondary
},
wildcardDescriptors: s.LK,
gameActivity: {},
...l
  };
}

function l() {
  return i.useMemo(() => [
r({
  id: '1239910082150400001',
  icon: 'bea185f5c9dbde7ba2f0c50363c16ec6',
  games: [
    s.DA.AGE_OF_EMPIRES_2,
    s.DA.APEX
  ],
  preset: s.N.VOLCANO,
  banner: s.qC.WORLD_MAP,
  bannerHash: '99a72cbacfb6de2baf362daa1a5292bb',
  playstyle: s.zv.COMPETITIVE,
  name: 'Retro Rebels',
  description: 'Are you a console collector? Rare game curator? Be a rebel and join us in celebrating retro gaming classics \uD83D\uDE0E',
  tag: 'RR',
  wildcardDescriptors: [
    'collector',
    'nostalgia',
    'classic'
  ],
  traits: [
    '30+',
    'Inclusive',
    'cooking',
    'podcasts',
    'hiking'
  ],
  memberCount: 98
}),
r({
  id: '1239910082150400002',
  icon: 'fe5e3c39b398965133d24d3c5d72b06c',
  games: [s.DA.HONKAI_STAR_RAIL],
  preset: s.N.THUNDER,
  banner: s.qC.CASTLE,
  bannerHash: '3c8e6496a598b9a563dffbc87d65f6f8',
  playstyle: s.zv.SOCIAL,
  name: 'the lofi tavern',
  description: '~ hosting chill beats and study rooms every night ~ join the tavern to kick back and meet other cozy gamers ~',
  tag: 'MUSE',
  wildcardDescriptors: [
    'creative',
    'harmony',
    'nightowl'
  ],
  traits: [
    'Streamers',
    'study buddies',
    'sleepy cats',
    'lo-fi chilling'
  ],
  memberCount: 112
}),
r({
  id: '1239910082150400003',
  icon: 'fc7bdf17dadd9a59014fc2a41dd88613',
  games: [
    s.DA.LETHAL_COMPANY,
    s.DA.HELLDIVERS_2
  ],
  preset: s.N.MARSH,
  banner: s.qC.WARP_TUNNEL,
  bannerHash: 'd699192ec79c5da7159d2b73eb4b56b7',
  playstyle: s.zv.VERY_HARDCORE,
  name: 'midnight tacos',
  description: 'gamers and doritos tacos enthusiasts pls apply',
  tag: 'CHZZ',
  wildcardDescriptors: [
    'spicy',
    'chaotic',
    'gamba'
  ],
  traits: [
    '20+',
    'Streamers',
    'ranking bottled water',
    'late night tacos',
    'voice chat',
    'anime'
  ],
  memberCount: 45
}),
r({
  id: '1239910082150400004',
  icon: '7b7a2a06e7852e7cdb7f301fb86c3e18',
  games: [s.DA.SIMS_4],
  preset: s.N.EARTH,
  banner: s.qC.SEA_FOAM,
  bannerHash: 'c01388993ca324a6de870f805cc30bd3',
  name: 'Eco ELO',
  description: 'If you like growing plants or gardening, in game and IRL, then this is the place for you! Welcome home \uD83C\uDF31 \uD83D\uDC9A',
  tag: 'eco',
  wildcardDescriptors: [
    'ecofriendly',
    'explorers',
    'advocates'
  ],
  traits: [
    '20+',
    'Inclusive',
    'PUGs',
    'board games',
    'going outside',
    'PvP',
    'the stalk market',
    'growing stuff'
  ],
  memberCount: 32
}),
r({
  id: '1239910082150400005',
  icon: '5ca93390d20f7b96a0f0c3702fceec8e',
  games: [s.DA.SIMS_4],
  preset: s.N.CASCADE,
  banner: s.qC.NIGHT_SKY,
  bannerHash: '37cd6a7f90faafeb8c54e5ea5163407b',
  name: 'Meowtopia',
  description: 'the purrfect place for a pawsitive and hissterical time :D are you kitten me...i feline like that\u2019s too many puns...',
  tag: 'meow',
  wildcardDescriptors: [
    'Meow',
    'Meow',
    'Moew'
  ],
  traits: [
    'All Ages',
    'Streamers',
    'Parent Friendly',
    'sleepy cats',
    'DnD',
    'travel',
    'catnaps'
  ],
  memberCount: 94
})
  ], []);
}