var t = n(735250),
    l = n(470079),
    o = n(120356),
    s = n.n(o),
    i = n(481060),
    a = n(378233),
    c = n(689938),
    d = n(120437);
let u = (e) => {
    let { stickerPack: r } = e;
    return (0, t.jsx)('div', {
        className: d.features,
        children: (0, a.X_)(r)
            ? (0, t.jsx)(i.Tooltip, {
                  tooltipClassName: d.featuresTooltip,
                  position: 'top',
                  text: c.Z.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                  children: (e) =>
                      (0, t.jsx)(i.PlayIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          ...e,
                          className: d.featureIcon
                      })
              })
            : null
    });
};
r.Z = l.memo((e) => {
    let { className: r, stickerPack: n, withDescription: l = !1 } = e;
    return (0, t.jsxs)('div', {
        className: s()(d.header, r),
        children: [
            (0, t.jsxs)('div', {
                className: d.title,
                children: [
                    (0, t.jsx)(i.Heading, {
                        className: d.heading,
                        variant: 'heading-sm/semibold',
                        children: n.name
                    }),
                    (0, t.jsx)(u, { stickerPack: n })
                ]
            }),
            l &&
                null != n.description &&
                (0, t.jsx)(i.Text, {
                    className: d.description,
                    variant: 'text-sm/normal',
                    children: n.description
                }),
            (0, t.jsx)('div', {
                className: d.count,
                children: c.Z.Messages.STICKER_PACK_STICKER_COUNT.format({ numStickers: n.stickers.length })
            })
        ]
    });
});
