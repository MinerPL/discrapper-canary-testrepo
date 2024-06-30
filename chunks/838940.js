n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(528027), o = n(686807), c = n(113318), d = n(240233);
function u(e) {
    let {
            benefit: t,
            guildId: n
        } = e, a = (0, c.Z)(n, t.ref_id), u = (0, i.jsx)(r.Z, {
            guildId: n,
            emojiId: t.emoji_id,
            emojiName: t.emoji_name
        }), _ = null != a ? (0, i.jsx)(l.Clickable, {
            className: d.__invalid_channelLink,
            onClick: a.navigateToChannel,
            'aria-label': a.ariaLabel,
            role: 'link',
            children: (0, i.jsx)(l.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                className: s()(d.name, d.linkedName),
                children: (0, o.Z)(t)
            })
        }) : (0, i.jsx)(l.Text, {
            variant: 'text-md/medium',
            color: 'header-primary',
            className: d.name,
            children: (0, o.Z)(t)
        });
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsxs)('div', {
                className: d.infoContainer,
                children: [
                    _,
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-sm/normal',
                        children: t.description
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.emojiContainer,
                children: u
            })
        ]
    });
}
