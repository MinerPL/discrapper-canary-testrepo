var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(918701), o = n(644646), c = n(118393);
t.Z = function (e) {
    let {
            className: t,
            autoplay: n,
            quest: a,
            questContent: d
        } = e, u = (0, r.pG)({ quest: a });
    return (0, i.jsxs)('div', {
        className: s()(c.wrapper, t),
        style: { color: a.config.colors.primary },
        children: [
            (0, i.jsx)(o.Z, {
                autoplay: n,
                className: c.rewardTile,
                quest: a,
                questContent: d
            }),
            (0, i.jsx)(l.Text, {
                className: c.instructions,
                variant: 'text-sm/normal',
                color: 'text-normal',
                children: u
            })
        ]
    });
};
