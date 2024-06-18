"use strict";
n.d(t, {
  I: function() {
    return r
  },
  n: function() {
    return o
  }
});
var i, r, s = n(652874);
(i = r || (r = {}))[i.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", i[i.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS";
let o = (0, s.Z)(e => ({
  listings: {},
  setListing: (t, n) => e(e => ({
    listings: {
      ...e.listings,
      [t]: n(e.listings[t])
    }
  })),
  editStateIdsForGroup: {},
  setEditStateIdsForGroup: (t, n) => e(e => ({
    editStateIdsForGroup: {
      ...e.editStateIdsForGroup,
      [t]: n(e.editStateIdsForGroup[t])
    }
  }))
}))