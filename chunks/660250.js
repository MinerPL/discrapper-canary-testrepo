t.r(n);
var o = t(735250),
    s = t(470079),
    c = t(442837),
    r = t(481060),
    i = t(959457),
    l = t(571826),
    a = t(630759),
    d = t(301107),
    u = t(785792),
    h = t(190054),
    f = t(245581),
    x = t(760373),
    _ = t(689938),
    m = t(722041);
n.default = function (e) {
    let { transitionState: n, streamKey: t, channelId: E } = e,
        v = (0, c.e7)([i.Z], () => {
            var e;
            return null === (e = i.Z.getSecureFramesState(t)) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        p = (0, d.W)({
            fingerprintBase64: v,
            chunkSize: x.y6,
            desiredLength: x.YP
        }),
        I = s.useCallback(() => {
            (0, l.ih)({ channelId: E });
        }, [E]);
    return (0, o.jsxs)(f.Z, {
        transitionState: n,
        title: _.Z.Messages.E2EE_STREAM_PRIVACY_CODE,
        subtitle: _.Z.Messages.E2EE_STREAM_VERIFICATION_SUBTITLE,
        children: [
            (0, o.jsxs)('div', {
                className: m.verification,
                children: [
                    (0, o.jsxs)('div', {
                        className: m.header,
                        children: [
                            (0, o.jsx)(r.Heading, {
                                variant: 'text-sm/bold',
                                color: 'header-primary',
                                children: _.Z.Messages.E2EE_PRIVACY_CODE
                            }),
                            null != p &&
                                (0, o.jsx)(h.H, {
                                    className: m.copyIcon,
                                    chunks: p,
                                    color: r.tokens.colors.INTERACTIVE_NORMAL,
                                    onCopy: I
                                })
                        ]
                    }),
                    (0, o.jsx)(u.b, {
                        className: m.code,
                        chunks: p,
                        columns: x.WK
                    })
                ]
            }),
            (0, o.jsx)(r.Text, {
                className: m.footer,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: _.Z.Messages.E2EE_STREAM_VERIFICATION_FOOTER_TEXT.format({ helpArticle: (0, a.uV)() })
            })
        ]
    });
};
