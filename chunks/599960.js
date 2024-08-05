n.d(t, {
  E: function() {
return r;
  }
});
var i = n(818083),
  a = n(302800);
let s = (0, i.B)({
kind: 'user',
id: '2024-07_shop_marketing_variants',
label: 'Shop Marketing Variants Experiment',
defaultConfig: {
  marketingVariant: a.k2.COACHTIP
},
treatments: [{
    id: 0,
    label: 'Control (Badge + Coachtip with headline and copy)',
    config: {
      marketingVariant: a.k2.COACHTIP
    }
  },
  {
    id: 1,
    label: 'Badge + Coachtip with headline',
    config: {
      marketingVariant: a.k2.COACHTIP_HEADLINE_ONLY
    }
  },
  {
    id: 2,
    label: 'Badge only',
    config: {
      marketingVariant: a.k2.BADGE
    }
  }
]
  }),
  r = e => s.useExperiment({
location: e
  }).marketingVariant;