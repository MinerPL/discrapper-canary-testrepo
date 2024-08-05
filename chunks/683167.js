n.d(t, {
  I: function() {
return r;
  }
});
var i = n(818083),
  a = n(302800);
let s = (0, i.B)({
kind: 'user',
id: '2024-04_shop_marketing_badge',
label: 'Shop Marketing New Badge Design Experiment',
defaultConfig: {
  coachtipEdition: a.LM.NONE
},
treatments: [{
    id: 1,
    label: 'Shy',
    config: {
      coachtipEdition: a.LM.SHY
    }
  },
  {
    id: 2,
    label: 'Lofi Vibes',
    config: {
      coachtipEdition: a.LM.LOFI_VIBES
    }
  },
  {
    id: 3,
    label: 'Galaxy',
    config: {
      coachtipEdition: a.LM.GALAXY
    }
  },
  {
    id: 4,
    label: 'Retro & Pirates',
    config: {
      coachtipEdition: a.LM.RETRO_AND_PIRATES
    }
  },
  {
    id: 5,
    label: 'Arcade',
    config: {
      coachtipEdition: a.LM.ARCADE
    }
  },
  {
    id: 6,
    label: 'Tide',
    config: {
      coachtipEdition: a.LM.TIDE
    }
  },
  {
    id: 7,
    label: 'Dark Fantasy',
    config: {
      coachtipEdition: a.LM.DARK_FANTASY
    }
  },
  {
    id: 8,
    label: 'Robert',
    config: {
      coachtipEdition: a.LM.ROBERT
    }
  }
]
  }),
  r = e => s.useExperiment({
location: e
  }).coachtipEdition;