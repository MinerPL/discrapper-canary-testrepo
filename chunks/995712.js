var r = n(735250);
n(470079);
var i = n(481060), a = n(806519), o = n(768581), s = n(689938), l = n(533868);
t.Z = e => {
    var t;
    let {entry: n} = e, {
            id: u,
            icon: c,
            name: d
        } = n, _ = null !== (t = o.ZP.getGuildIconURL({
            id: u,
            icon: c,
            size: 32
        })) && void 0 !== t ? t : void 0;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)(i.Heading, {
                className: l.header,
                variant: 'heading-sm/semibold',
                children: s.Z.Messages.REPORT_MODAL_SERVER_PREVIEW_HEADER
            }),
            (0, r.jsx)('div', {
                className: l.guildContainer,
                children: (0, r.jsxs)('div', {
                    className: l.guildInfo,
                    children: [
                        (0, r.jsx)(a.ZP, {
                            mask: a.ZP.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: l.guildIconMask,
                            children: (0, r.jsx)('img', {
                                src: _,
                                alt: '',
                                className: l.guildIcon
                            })
                        }),
                        (0, r.jsx)(i.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: d
                        })
                    ]
                })
            })
        ]
    });
};
