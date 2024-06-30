n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var s = n(481060), a = n(100527), r = n(360048), l = n(709158), o = n(689938), c = n(679638);
function d(e) {
    let {
        isSelected: t,
        onClick: n
    } = e;
    return (0, l.Z)(a.Z.QUEST_HOME_PAGE) ? (0, i.jsx)(r.Z, {
        avatar: (0, i.jsx)(s.QuestsIcon, {}),
        name: o.Z.Messages.QUESTS,
        focusProps: {
            offset: {
                right: 4,
                top: 1,
                bottom: 1
            }
        },
        onClick: n,
        wrapContent: !0,
        selected: t,
        className: c.categoryItem,
        selectedClassName: c.selectedCategoryItem,
        innerClassName: c.itemInner
    }, 'quest-home') : null;
}
