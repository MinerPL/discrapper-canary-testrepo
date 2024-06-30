var i = n(735250), s = n(470079), a = n(392711), r = n.n(a), l = n(481060), o = n(367907), c = n(626135), d = n(986332), u = n(428695), _ = n(981631), E = n(689938), h = n(243844);
let I = r().debounce(o.ZP.trackWithMetadata, 500), m = e => {
        let {
            guild: t,
            title: n,
            message: a,
            image: r,
            type: d,
            imageMarginX: u,
            imageMarginTop: m,
            trackingSource: p,
            undismissable: g,
            onDismissed: T,
            onClick: S,
            cta: C,
            ctaColor: N
        } = e;
        s.useEffect(() => {
            I(_.rMx.CHANNEL_NOTICE_VIEWED, {
                notice_type: d,
                guild_id: t.id
            });
        }, [
            t.id,
            d
        ]);
        let f = null;
        'function' == typeof C ? f = C() : null != C && (f = (0, i.jsx)(l.Button, {
            className: h.btn,
            size: l.Button.Sizes.SMALL,
            onClick: () => {
                null != d && c.default.track(_.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                    source: p,
                    guild_id: t.id,
                    notice_type: d
                }), null == S || S();
            },
            fullWidth: !0,
            color: N,
            children: C
        }));
        let A = null != u ? ''.concat(u, 'px') : '16px';
        return (0, i.jsxs)('div', {
            className: h.channelNotice,
            children: [
                !0 === g ? null : (0, i.jsx)(l.Clickable, {
                    onClick: () => {
                        o.ZP.trackWithMetadata(_.rMx.CHANNEL_NOTICE_CLOSED, { notice_type: d }), null == T || T();
                    },
                    className: h.close,
                    'aria-label': E.Z.Messages.DISMISS,
                    children: (0, i.jsx)(l.CloseSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: h.closeIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: h.imageContainer,
                    style: {
                        marginTop: ''.concat(m, 'px'),
                        marginLeft: A,
                        marginRight: A
                    },
                    children: (0, i.jsx)('img', {
                        className: h.image,
                        src: r,
                        alt: ''
                    })
                }),
                (0, i.jsxs)('div', {
                    className: h.message,
                    children: [
                        null != n ? (0, i.jsx)(l.Heading, {
                            variant: 'heading-md/semibold',
                            className: h.title,
                            children: n
                        }) : null,
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: a
                        }),
                        f
                    ]
                })
            ]
        });
    };
t.Z = function (e) {
    let {showRedesignedChannelNotice: t} = (0, d.o)(!0);
    return t ? (0, i.jsx)(u.Z, { ...e }) : (0, i.jsx)(m, { ...e });
};
