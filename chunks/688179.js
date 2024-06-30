n.d(t, {
    m: function () {
        return r;
    }
});
var i = n(806966), a = n(585483), s = n(981631), l = n(957825);
function r(e) {
    let {
        stickerPack: t,
        stickerPickerCategories: n
    } = e;
    a.S.dispatchToLastSubscribed(s.CkL.OPEN_EXPRESSION_PICKER, { activeView: l.X1.STICKER });
    let r = n.findIndex(e => e.id === t.id);
    -1 !== r && i.ZN.setActiveCategoryIndex(r);
}
