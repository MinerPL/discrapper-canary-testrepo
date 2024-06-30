t.d(n, {
    Z: function () {
        return d;
    }
});
var a = t(735250);
t(470079);
var i = t(442837), s = t(481060), r = t(211739), l = t(680089), u = t(689938);
function d(e) {
    let n = (0, i.e7)([l.Z], () => l.Z.isCollapsed(e.id), [e.id]);
    return (0, a.jsx)(s.MenuCheckboxItem, {
        id: 'collapse-category',
        label: u.Z.Messages.COLLAPSE_CATEGORY,
        action: () => n ? (0, r.mJ)(e.id) : (0, r.c4)(e.id),
        checked: n
    });
}
