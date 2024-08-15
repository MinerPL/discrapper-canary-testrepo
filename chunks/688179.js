n.d(t, {
  m: function() {
return l;
  }
});
var i = n(806966),
  a = n(585483),
  s = n(981631),
  r = n(957825);

function l(e) {
  let {
stickerPack: t,
stickerPickerCategories: n
  } = e;
  a.S.dispatchToLastSubscribed(s.CkL.OPEN_EXPRESSION_PICKER, {
activeView: r.X1.STICKER
  });
  let l = n.findIndex(e => e.id === t.id); -
  1 !== l && i.ZN.setActiveCategoryIndex(l);
}