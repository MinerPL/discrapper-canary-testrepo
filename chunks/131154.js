a.d(n, {
    Z: function () {
        return d;
    }
});
var t = a(735250);
a(470079);
var c = a(120356),
    i = a.n(c),
    o = a(481060),
    r = a(689938),
    l = a(543471);
function d(e) {
    let { guild: n, speakers: a, speakerCount: c, className: d } = e,
        s = a.slice(0, 5),
        u = s.map((e) => {
            var a, c;
            return (0, t.jsxs)(
                'div',
                {
                    className: l.speakerContainer,
                    children: [
                        (0, t.jsx)(o.Avatar, {
                            src: null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.getAvatarURL(n.id, 20),
                            size: o.AvatarSizes.SIZE_20,
                            className: l.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, t.jsx)('div', {
                            className: l.textInGridContainer,
                            children: (0, t.jsx)(o.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: l.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e ? void 0 : null === (c = e.user) || void 0 === c ? void 0 : c.id
            );
        }),
        _ = c - s.length;
    return (0, t.jsxs)('div', {
        className: i()(l.grid, d),
        children: [
            u,
            _ > 0 &&
                (0, t.jsxs)('div', {
                    className: l.speakerContainer,
                    children: [
                        (0, t.jsx)('div', {
                            className: l.iconMicrophone,
                            children: (0, t.jsx)(o.MicrophoneIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, t.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: l.textInGrid,
                            children: r.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({ count: _ })
                        })
                    ]
                })
        ]
    });
}
