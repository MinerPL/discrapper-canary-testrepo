i.d(n, {
    Z: function () {
        return o;
    }
});
var l = i(735250);
i(470079);
var a = i(120356), t = i.n(a), s = i(481060), r = i(689938), c = i(710208);
function o(e) {
    let {
            guild: n,
            speakers: i,
            speakerCount: a,
            className: o
        } = e, u = i.slice(0, 5), d = u.map(e => {
            var i, a;
            return (0, l.jsxs)('div', {
                className: c.speakerContainer,
                children: [
                    (0, l.jsx)(s.Avatar, {
                        src: null == e ? void 0 : null === (i = e.user) || void 0 === i ? void 0 : i.getAvatarURL(n.id, 20),
                        size: s.AvatarSizes.SIZE_20,
                        className: c.avatar,
                        'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                    }),
                    (0, l.jsx)('div', {
                        className: c.textInGridContainer,
                        children: (0, l.jsx)(s.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: c.textInGrid,
                            children: null == e ? void 0 : e.userNick
                        })
                    })
                ]
            }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id);
        }), h = a - u.length;
    return (0, l.jsxs)('div', {
        className: t()(c.grid, o),
        children: [
            d,
            h > 0 && (0, l.jsxs)('div', {
                className: c.speakerContainer,
                children: [
                    (0, l.jsx)('div', {
                        className: c.iconMicrophone,
                        children: (0, l.jsx)(s.MicrophoneIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            height: 12
                        })
                    }),
                    (0, l.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        className: c.textInGrid,
                        children: r.Z.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({ count: h })
                    })
                ]
            })
        ]
    });
}
