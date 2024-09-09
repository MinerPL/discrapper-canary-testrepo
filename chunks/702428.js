n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(44315),
    r = n(554300),
    l = n(981631),
    o = n(689938),
    c = n(612260);
function d(e) {
    let { isSelected: t, onClick: n } = e,
        d = (0, s.Sl)(l.Ilk.WHITE);
    return (0, i.jsx)(
        r.Z,
        {
            avatar: (0, i.jsx)(a.QuestsIcon, { color: t ? d.hex : void 0 }),
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
        },
        'quest-home'
    );
}
