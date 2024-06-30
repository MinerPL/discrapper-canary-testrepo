n.d(t, {
    $: function () {
        return g;
    },
    s: function () {
        return C;
    }
});
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(470167), o = n(481060), c = n(572691), d = n(406432), u = n(584656), _ = n(153124), E = n(810090), m = n(163268), I = n(719548), T = n(689938), h = n(344898);
let N = e => {
        let {attachment: t} = e, {
                url: n,
                description: a
            } = t;
        return null == n ? null : (0, i.jsx)(p, {
            url: n,
            description: a
        });
    }, f = e => {
        var t, n, a;
        let {embed: s} = e;
        if (!I.n2.has(s.type))
            return null;
        let l = void 0 !== s.video && s.type !== r.h.GIFV ? s.video.url : null !== (a = null === (t = s.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== a ? a : null === (n = s.image) || void 0 === n ? void 0 : n.url;
        return null == l ? null : (0, i.jsx)(p, { url: l });
    }, p = e => {
        let {
                url: t,
                description: n
            } = e, a = (0, d.cb)(t);
        return (0, i.jsx)('div', {
            className: h.mediaContainer,
            children: a ? (0, i.jsx)(E.Z, {
                className: l()(h.video, h.media),
                controls: !0,
                src: t
            }) : (0, i.jsx)('img', {
                className: l()(h.image, h.media),
                src: t,
                alt: n
            })
        });
    };
function C(e) {
    c.Z.pop(), (0, u.t)({
        id: 'explicit-media-false-positive-modal',
        text: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
    }), e();
}
function g(e) {
    let {
            channelId: t,
            messageId: n,
            isReportFalsePositiveLoading: s,
            analyticsContext: l,
            attachmentPreview: r,
            embedPreview: c,
            onConfirmPress: d,
            transitionState: u,
            onClose: E
        } = e, I = (0, _.Dt)(), p = a.useCallback(() => {
            (0, m.aP)({
                action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
                channelId: t,
                messageId: n,
                context: l
            }), E();
        }, [
            t,
            n,
            l,
            E
        ]), C = a.useCallback(() => {
            null == d || d(), (0, m.aP)({
                action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
                channelId: t,
                messageId: n,
                context: l
            });
        }, [
            t,
            n,
            l,
            d
        ]);
    return a.useEffect(() => {
        (0, m.aP)({
            action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
            channelId: t,
            messageId: n,
            context: l
        });
    }, [
        t,
        n,
        l
    ]), (0, i.jsxs)(o.ModalRoot, {
        transitionState: u,
        'aria-labelledby': I,
        size: o.ModalSize.SMALL,
        children: [
            (0, i.jsxs)(o.ModalContent, {
                children: [
                    (0, i.jsx)(o.ModalCloseButton, {
                        onClick: p,
                        className: h.closeButton
                    }),
                    (0, i.jsx)(o.Heading, {
                        id: I,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: h.header,
                        children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: h.subheader,
                        children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
                    }),
                    null != r && (0, i.jsx)(N, { attachment: r }),
                    null != c && (0, i.jsx)(f, { embed: c })
                ]
            }),
            (0, i.jsxs)(o.ModalFooter, {
                children: [
                    (0, i.jsx)(o.Button, {
                        className: h.button,
                        disabled: s,
                        submitting: s,
                        size: o.Button.Sizes.MEDIUM,
                        color: o.Button.Colors.BRAND,
                        onClick: C,
                        children: T.Z.Messages.CONFIRM
                    }),
                    (0, i.jsx)(o.Button, {
                        className: h.button,
                        disabled: s,
                        color: o.Button.Colors.TRANSPARENT,
                        size: o.Button.Sizes.MEDIUM,
                        onClick: p,
                        children: T.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
