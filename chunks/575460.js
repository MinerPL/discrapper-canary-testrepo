n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(259580), l = n(528027), r = n(686807), o = n(113318), c = n(121834);
function d(e) {
    let {
            benefit: t,
            guildId: n,
            onClick: d
        } = e, u = (0, o.Z)(n, t.ref_id), _ = (0, i.jsx)(l.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        });
    return (0, i.jsxs)(a.Clickable, {
        className: c.container,
        onClick: () => {
            null == u || u.navigateToChannel(), d();
        },
        'aria-label': null == u ? void 0 : u.ariaLabel,
        role: 'link',
        children: [
            (0, i.jsx)('div', {
                className: c.emojiContainer,
                children: _
            }),
            (0, i.jsxs)('div', {
                className: c.infoContainer,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: c.name,
                        children: (0, r.Z)(t)
                    }),
                    (0, i.jsx)(a.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, i.jsx)(s.Z, {
                direction: s.Z.Directions.RIGHT,
                className: c.caret
            })
        ]
    });
}
