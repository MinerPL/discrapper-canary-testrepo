n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(735250);
n(470079);
var l = n(831209),
    r = n(481060),
    a = n(731408);
function s(e) {
    let { mentionsCount: t } = e;
    return (0, i.jsx)('div', {
        className: a.mentionsBadge,
        'aria-hidden': !0,
        children: (0, i.jsx)(r.NumberBadge, {
            count: t,
            color: l.Z.STATUS_DANGER
        })
    });
}
