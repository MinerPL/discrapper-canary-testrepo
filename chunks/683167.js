n.d(t, {
  I: function() {
return r;
  }
});
var i = n(818083),
  s = n(302800);
let a = (0, i.B)({
kind: 'user',
id: '2024-04_shop_marketing_badge',
label: 'Shop Marketing New Badge Design Experiment',
defaultConfig: {
  coachtipEdition: s.LM.NONE
},
treatments: [{
    id: 1,
    label: 'Shy',
    config: {
      coachtipEdition: s.LM.SHY
    }
  },
  {
    id: 2,
    label: 'Lofi Vibes',
    config: {
      coachtipEdition: s.LM.LOFI_VIBES
    }
  },
  {
    id: 3,
    label: 'Galaxy',
    config: {
      coachtipEdition: s.LM.GALAXY
    }
  },
  {
    id: 4,
    label: 'Retro & Pirates',
    config: {
      coachtipEdition: s.LM.RETRO_AND_PIRATES
    }
  },
  {
    id: 5,
    label: 'Arcade',
    config: {
      coachtipEdition: s.LM.ARCADE
    }
  },
  {
    id: 6,
    label: 'Tide',
    config: {
      coachtipEdition: s.LM.TIDE
    }
  },
  {
    id: 7,
    label: 'Dark Fantasy',
    config: {
      coachtipEdition: s.LM.DARK_FANTASY
    }
  }
]
  }),
  r = e => a.useExperiment({
location: e
  }).coachtipEdition;