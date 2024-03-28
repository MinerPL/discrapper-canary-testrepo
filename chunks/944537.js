"use strict";
n.r(t), n.d(t, {
  AllChannelAccessOptions: function() {
    return i
  },
  useEditStateStore: function() {
    return s
  }
});
var r, i, l = n("652874");
(r = i || (i = {}))[r.ALL_CHANNELS_ACCESS = 0] = "ALL_CHANNELS_ACCESS", r[r.SOME_CHANNELS_ACCESS = 1] = "SOME_CHANNELS_ACCESS";
let s = (0, l.default)(e => ({
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