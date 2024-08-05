n.d(t, {
  m: function() {
return l;
  }
});
var i = n(806966),
  s = n(585483),
  a = n(981631),
  r = n(957825);

function l(e) {
  let {
stickerPack: t,
stickerPickerCategories: n
  } = e;
  s.S.dispatchToLastSubscribed(a.CkL.OPEN_EXPRESSION_PICKER, {
activeView: r.X1.STICKER
  });
  let l = n.findIndex(e => e.id === t.id); -
  1 !== l && i.ZN.setActiveCategoryIndex(l);
}