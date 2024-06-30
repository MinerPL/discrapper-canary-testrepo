n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250), l = n(470079), r = n(442837), a = n(481060), s = n(19780), o = n(571826), c = n(436055), u = n(785792), d = n(190054), h = n(760373), p = n(689938), _ = n(294903);
function f(e) {
    let {channelId: t} = e, n = (0, r.e7)([s.Z], () => {
            var e;
            return null === (e = s.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator;
        }), f = (0, c.E)({
            codeBase64: n,
            chunkSize: h.y6,
            desiredLength: h.YP
        }), m = l.useCallback(() => {
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
                        color: a.tokens.colors.STATUS_POSITIVE
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        color: 'status-positive',
                        children: p.Z.Messages.E2EE_END_TO_END_ENCRYPTED
                    })
                ]
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: p.Z.Messages.E2EE_RTC_PANEL_CALL_VERIFICATION_SUBTITLE
            }),
            (0, i.jsxs)('div', {
                className: _.header,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: p.Z.Messages.E2EE_VOICE_PRIVACY_CODE
                    }),
                    null != f && (0, i.jsx)(d.H, {
                        chunks: f,
                        color: a.tokens.colors.INTERACTIVE_NORMAL.css,
                        onCopy: m
                    })
                ]
            }),
            null != f && (0, i.jsx)(u.b, {
                className: _.code,
                chunks: f,
                columns: h.WK
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                children: p.Z.Messages.E2EE_CALL_VERIFICATION_FOOTER_TEXT.format({ helpArticle: h.l4 })
            })
        ]
    });
}
