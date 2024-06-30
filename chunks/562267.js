n(47120);
var r = n(735250), i = n(470079), a = n(442837), o = n(481060), s = n(913663), l = n(268350), u = n(419922), c = n(132338), d = n(689938), _ = n(188972);
t.Z = i.memo(function (e) {
    var t;
    let {
            channelId: n,
            chatInputType: E
        } = e, [f, h] = i.useState(null), p = (0, a.e7)([s.Z], () => s.Z.getStickerPreview(n, E.drafts.type));
    return (null === (t = E.stickers) || void 0 === t ? void 0 : t.allowSending) && null != p && 0 !== p.length ? (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: _.stickerPreviews,
                children: p.map(e => (0, r.jsxs)('div', {
                    className: _.stickerPreviewContainer,
                    children: [
                        (0, r.jsx)(o.Clickable, {
                            onFocus: () => h(e.id),
                            onBlur: () => h(null),
                            className: _.closeButton,
                            'aria-label': d.Z.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({ name: e.name }),
                            onClick: () => (0, l.qB)(n, E.drafts.type),
                            children: (0, r.jsx)('div', {
                                className: _.closeIconContainer,
                                children: (0, r.jsx)(o.CircleXIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _.closeIcon
                                })
                            })
                        }),
                        (0, r.jsx)(u.ZP, {
                            isInteracting: f === e.id,
                            className: _.stickerPreview,
                            size: 48,
                            sticker: e
                        })
                    ]
                }, e.id))
            }),
            (0, r.jsx)(c.Z, { className: _.stickerPreviewDivider })
        ]
    }) : null;
});
