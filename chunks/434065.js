"use strict";
n.r(t), n.d(t, {
  useFavoritesTooltipStore: function() {
    return r
  }
});
let r = (0, n("652874").default)(e => ({
  favoriteAdded: !1,
  notifyFavoriteAdded: () => e({
    favoriteAdded: !0
  }),
  clearFavoriteAdded: () => e({
    favoriteAdded: !1
  })
}))