"use strict";
n.d(t, {
  C5: function() {
    return r
  }
});
var i, r, s = n(818083);
(i = r || (r = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", i[i.MONSTER_DROP = 2] = "MONSTER_DROP", i[i.SPRINGTOONS = 4] = "SPRINGTOONS", i[i.SHY = 5] = "SHY", i[i.GALAXY = 6] = "GALAXY";
let o = (0, s.B)({
  kind: "user",
  id: "2023-12_collectibles_shop_marketing",
  label: "Collectibles Shop Marketing Variations",
  defaultConfig: {
    variant: 0
  },
  treatments: [{
    id: 1,
    label: "Winter 2023",
    config: {
      variant: 1
    }
  }, {
    id: 2,
    label: "Jan 2024",
    config: {
      variant: 2
    }
  }, {
    id: 4,
    label: "Springtoons 2024",
    config: {
      variant: 4
    }
  }, {
    id: 5,
    label: "Shy 2024",
    config: {
      variant: 5
    }
  }, {
    id: 6,
    label: "Galaxy 2024",
    config: {
      variant: 6
    }
  }]
});
t.ZP = e => o.useExperiment({
  location: e
}).variant