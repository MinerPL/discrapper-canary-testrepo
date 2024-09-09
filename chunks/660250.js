n.r(t);
var i = n(735250),
    o = n(470079),
    s = n(442837),
    c = n(481060),
    r = n(959457),
    a = n(571826),
    d = n(301107),
    l = n(785792),
    f = n(190054),
    _ = n(245581),
    u = n(760373),
    h = n(689938),
    E = n(756843);
t.default = function (e) {
    let { transitionState: t, streamKey: n, channelId: p } = e,
        I = (0, s.e7)([r.Z], () => {
            var e;
            return null === (e = r.Z.getSecureFramesState(n)) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        x = (0, d.W)({
            fingerprintBase64: I,
            chunkSize: u.y6,
            desiredLength: u.YP
        }),
        v = o.useCallback(() => {
            (0, a.ih)({ channelId: p });
        }, [p]);
    return (0, i.jsxs)(_.Z, {
        transitionState: t,
        title: h.Z.Messages.E2EE_STREAM_PRIVACY_CODE,
        subtitle: h.Z.Messages.E2EE_STREAM_VERIFICATION_SUBTITLE,
        children: [
            (0, i.jsxs)('div', {
                className: E.verification,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.header,
                        children: [
                            (0, i.jsx)(c.Heading, {
                                variant: 'text-sm/bold',
                                color: 'header-primary',
                                children: h.Z.Messages.E2EE_PRIVACY_CODE
                            }),
                            null != x &&
                                (0, i.jsx)(f.H, {
                                    className: E.copyIcon,
                                    chunks: x,
                                    color: c.tokens.colors.INTERACTIVE_NORMAL,
                                    onCopy: v
                                })
                        ]
                    }),
                    (0, i.jsx)(l.b, {
                        className: E.code,
                        chunks: x,
                        columns: u.WK
                    })
                ]
            }),
            (0, i.jsx)(c.Text, {
                className: E.footer,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: h.Z.Messages.E2EE_STREAM_VERIFICATION_FOOTER_TEXT.format({ helpArticle: u.l4 })
            })
        ]
    });
};
