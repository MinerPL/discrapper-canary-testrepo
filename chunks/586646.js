n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(442837),
    a = n(481060),
    s = n(19780),
    o = n(571826),
    c = n(630759),
    u = n(301107),
    d = n(785792),
    h = n(190054),
    p = n(760373),
    f = n(689938),
    _ = n(64570);
function m(e) {
    let { channelId: t } = e,
        n = (0, r.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator;
        }),
        m = (0, u.W)({
            fingerprintBase64: n,
            chunkSize: p.y6,
            desiredLength: p.YP
        }),
        g = l.useCallback(() => {
            (0, o.PM)({ channelId: t });
        }, [t]);
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsxs)('div', {
                className: _.tag,
                children: [
                    (0, i.jsx)(a.LockIcon, {
                        size: 'xxs',
                        color: a.tokens.colors.TEXT_POSITIVE
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-positive',
                        children: f.Z.Messages.E2EE_END_TO_END_ENCRYPTED
                    })
                ]
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: f.Z.Messages.E2EE_RTC_PANEL_CALL_VERIFICATION_SUBTITLE
            }),
            (0, i.jsxs)('div', {
                className: _.header,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: f.Z.Messages.E2EE_VOICE_PRIVACY_CODE
                    }),
                    null != m &&
                        (0, i.jsx)(h.H, {
                            chunks: m,
                            color: a.tokens.colors.INTERACTIVE_NORMAL.css,
                            onCopy: g
                        })
                ]
            }),
            (0, i.jsx)(d.b, {
                className: _.code,
                chunks: m,
                columns: p.WK
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: f.Z.Messages.E2EE_CALL_VERIFICATION_FOOTER_TEXT.format({ helpArticle: (0, c.uV)() })
            })
        ]
    });
}
