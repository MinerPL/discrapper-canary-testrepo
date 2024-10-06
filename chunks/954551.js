n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    l = n(665149),
    s = n(388035),
    a = n(453473),
    o = n(689938);
function c(e) {
    let { onOpen: t, onClose: n, className: c } = e;
    return (0, r.jsx)(a.P, {
        onOpen: t,
        onClose: n,
        popoutPosition: 'bottom',
        popoutAlign: 'right',
        children: (e, t, n, a) =>
            (0, r.jsx)(s.U, {
                location: 'bookmarks-button',
                children: (0, r.jsx)(l.JO, {
                    ...n,
                    className: c,
                    onClick: e,
                    icon: i.BookmarkIcon,
                    'aria-label': o.Z.Messages.FOR_LATER,
                    tooltip: t ? null : o.Z.Messages.FOR_LATER,
                    selected: t,
                    showBadge: a
                })
            })
    });
}
