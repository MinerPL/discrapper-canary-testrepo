var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(689938), o = n(256129);
t.Z = function (e) {
    let {
        className: t,
        color: n = 'header-primary',
        textOpacity: a = 0.9,
        bgOpacity: c = 0.4
    } = e;
    return (0, i.jsxs)(l.Text, {
        variant: 'text-xxs/medium',
        color: n,
        className: s()(o.promotedTag, t),
        children: [
            (0, i.jsx)('span', {
                className: o.promotedTagBackground,
                style: { opacity: c }
            }),
            (0, i.jsx)('span', {
                style: { opacity: a },
                children: r.Z.Messages.QUESTS_PROMOTED
            })
        ]
    });
};
