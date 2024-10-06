n.d(t, {
    O: function () {
        return m;
    }
});
var l = n(735250),
    a = n(470079),
    s = n(120356),
    i = n.n(s),
    r = n(392711),
    o = n(481060),
    c = n(686546),
    u = n(124347),
    d = n(499376),
    h = n(937889),
    _ = n(930282),
    f = n(318616),
    E = n(689938),
    g = n(228895);
function m(e) {
    let { message: t, forwardOptions: n } = e,
        {
            attachments: s,
            embeds: m,
            hasContent: S,
            contentMessage: A
        } = (0, f.c)({
            message: t,
            forwardOptions: n
        }),
        I = a.useMemo(
            () =>
                S
                    ? (0, h.ZP)(t, {
                          formatInline: !0,
                          allowLinks: !0,
                          allowHeading: !0,
                          allowList: !0,
                          hideSimpleEmbedContent: !1,
                          contentMessage: A
                      }).content
                    : null,
            [A, S, t]
        ),
        p = s.length,
        C = null,
        N = null,
        L = null;
    if (p > 0 || m.length > 0) {
        var v, b, x, T;
        let e = (0, r.countBy)(s, (e) => (0, d.aw)(e, !0)),
            t = null !== (x = e.IMAGE) && void 0 !== x ? x : 0,
            n = null !== (T = e.VIDEO) && void 0 !== T ? T : 0;
        t > 0 && n > 0
            ? ((C = E.Z.Messages.NUM_IMAGES_VIDEOS.format({
                  image_count: t,
                  video_count: n
              })),
              (N = o.ImagesIcon))
            : n > 0
              ? ((C = E.Z.Messages.NUM_VIDEOS.format({ count: n })), (N = o.CirclePlayIcon))
              : t > 0
                ? ((C = E.Z.Messages.NUM_IMAGES.format({ count: t })), (N = 1 === t ? o.ImageIcon : o.ImagesIcon))
                : ((C = E.Z.Messages.NUM_ATTACHMENTS.format({ count: p })), (N = o.AttachmentIcon)),
            n > 0 && p === n
                ? (L = (0, l.jsxs)('div', {
                      className: i()(g.attachmentPreview, g.attachmentPreviewVideo),
                      children: [
                          (0, l.jsx)(u.ZP, {
                              className: g.thumbnail,
                              src: s[0].proxy_url,
                              width: 56,
                              height: 56
                          }),
                          (0, l.jsx)(o.CirclePlayIcon, {
                              className: g.playIcon,
                              size: 'md',
                              color: 'white'
                          })
                      ]
                  }))
                : p > 0
                  ? (L = (0, l.jsx)('div', {
                        className: g.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: s[0].proxy_url,
                            width: 56,
                            height: 56
                        })
                    }))
                  : (null === (b = m[0]) || void 0 === b ? void 0 : null === (v = b.thumbnail) || void 0 === v ? void 0 : v.proxyURL) != null &&
                    (L = (0, l.jsx)('div', {
                        className: g.attachmentPreview,
                        children: (0, l.jsx)(u.ZP, {
                            src: m[0].thumbnail.proxyURL,
                            width: 56,
                            height: 56
                        })
                    }));
    }
    return (
        p > 1 &&
            null != L &&
            (L = (0, l.jsxs)('div', {
                className: g.attachmentPreviewOverflow,
                children: [
                    (0, l.jsx)(c.ZP, {
                        mask: c.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                        width: 56,
                        height: 56,
                        children: L
                    }),
                    (0, l.jsxs)(o.Text, {
                        className: g.overflowCount,
                        variant: 'text-xs/semibold',
                        color: 'text-normal',
                        children: ['+', p - 1]
                    })
                ]
            })),
        (0, l.jsxs)('div', {
            className: g.forwardPreview,
            children: [
                (0, l.jsx)('div', { className: g.quote }),
                (0, l.jsxs)('div', {
                    className: g.contentWrapper,
                    children: [
                        S &&
                            (0, l.jsx)(_.ZP, {
                                className: i()(g.forwardPreviewMessage, p > 0 && g.hasAttachments),
                                message: t,
                                content: I
                            }),
                        p > 0 &&
                            (0, l.jsxs)('div', {
                                className: g.attachmentRow,
                                children: [
                                    null != N &&
                                        (0, l.jsx)(N, {
                                            size: 'custom',
                                            width: S ? 18 : 20,
                                            color: o.tokens.colors.TEXT_LOW_CONTRAST
                                        }),
                                    null != C &&
                                        (0, l.jsx)(o.Text, {
                                            variant: S ? 'text-sm/medium' : 'text-md/medium',
                                            color: 'text-low-contrast',
                                            children: C
                                        })
                                ]
                            })
                    ]
                }),
                L
            ]
        })
    );
}
