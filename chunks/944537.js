n.d(t, {
  I: function() {
return i;
  },
  n: function() {
return o;
  }
});
var r, i, a = n(652874),
  s = n(731965);
(r = i || (i = {}))[r.ALL_CHANNELS_ACCESS = 0] = 'ALL_CHANNELS_ACCESS', r[r.SOME_CHANNELS_ACCESS = 1] = 'SOME_CHANNELS_ACCESS';
let o = (0, a.Z)(e => ({
  listings: {},
  setListing: (t, n) => (0, s.j)(() => e(e => ({
listings: {
  ...e.listings,
  [t]: n(e.listings[t])
}
  }))),
  editStateIdsForGroup: {},
  setEditStateIdsForGroup: (t, n) => (0, s.j)(() => {
e(e => ({
  editStateIdsForGroup: {
    ...e.editStateIdsForGroup,
    [t]: n(e.editStateIdsForGroup[t])
  }
}));
  })
}));