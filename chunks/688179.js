"use strict";
n.r(t), n.d(t, {
  navigateToOwnedStickerPack: function() {
    return r
  }
});
var s = n("806966"),
  a = n("585483"),
  l = n("981631"),
  i = n("957825");

function r(e) {
  let {
    stickerPack: t,
    stickerPickerCategories: n
  } = e;
  a.ComponentDispatch.dispatchToLastSubscribed(l.ComponentActions.OPEN_EXPRESSION_PICKER, {
    activeView: i.ExpressionPickerViewType.STICKER
  });
  let r = n.findIndex(e => e.id === t.id); - 1 !== r && s.StickerPickerStore.setActiveCategoryIndex(r)
}