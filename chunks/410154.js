n.d(t, {
  C5: function() {
return i;
  }
});
var r, i, a = n(818083);
(r = i || (i = {}))[r.DEFAULT = 0] = 'DEFAULT', r[r.WINTER_2023_DROP = 1] = 'WINTER_2023_DROP', r[r.MONSTER_DROP = 2] = 'MONSTER_DROP', r[r.SPRINGTOONS = 4] = 'SPRINGTOONS', r[r.SHY = 5] = 'SHY', r[r.GALAXY = 6] = 'GALAXY', r[r.TIDE = 7] = 'TIDE';
let o = (0, a.B)({
  kind: 'user',
  id: '2023-12_collectibles_shop_marketing',
  label: 'Collectibles Shop Marketing Variations',
  defaultConfig: {
variant: 0
  },
  treatments: [{
  id: 1,
  label: 'Winter 2023',
  config: {
    variant: 1
  }
},
{
  id: 2,
  label: 'Jan 2024',
  config: {
    variant: 2
  }
},
{
  id: 4,
  label: 'Springtoons 2024',
  config: {
    variant: 4
  }
},
{
  id: 5,
  label: 'Shy 2024',
  config: {
    variant: 5
  }
},
{
  id: 6,
  label: 'Galaxy 2024',
  config: {
    variant: 6
  }
},
{
  id: 7,
  label: 'Tide 2024',
  config: {
    variant: 7
  }
}
  ]
});
t.ZP = e => o.useExperiment({
  location: e
}).variant;