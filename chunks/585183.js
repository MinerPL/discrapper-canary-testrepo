n.d(t, {
    h: function () {
        return m;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
    s = n(512722),
    o = n.n(s),
    l = n(481060),
    c = n(457330),
    i = n(600164),
    d = n(710845),
    u = n(69580),
    x = n(424071),
    N = n(689938),
    h = n(879137);
let C = new d.Z('TwoWayLinkDiscordConsentWeb');
function m(e) {
    let { platformType: t, clientId: n, scopes: s, authToken: d, onContinue: m, onError: j, onClose: E, redirectUri: f } = e,
        [v, p] = r.useState(!1),
        T = r.useCallback(
            async (e) => {
                let n,
                    a,
                    { location: r } = e,
                    { callbackCode: s, callbackState: o } = d;
                try {
                    n = await c.Z.completeTwoWayLink(t, r, s, o);
                } catch (e) {
                    var l;
                    C.error(''.concat(t, ' link error:'), e), (a = null === (l = e.body) || void 0 === l ? void 0 : l.code);
                }
                null != n ? m() : j(a);
            },
            [t, d, m, j]
        ),
        {
            header: O,
            body: b,
            appDetails: R,
            sendAuthorize: I
        } = (0, u.useOAuth2AuthorizeForm)({
            clientId: n,
            scopes: s,
            responseType: 'code',
            callback: T,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: f
        }),
        g = r.useCallback(() => {
            o()(null != I, 'sendAuthorize not available'), p(!0), I(!0);
        }, [I]);
    return (0, a.jsxs)(x.Z, {
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                direction: i.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, a.jsx)(l.Text, {
                        className: h.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: N.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                            number: 2,
                            total: 2
                        })
                    }),
                    null != E &&
                        (0, a.jsx)(l.ModalCloseButton, {
                            className: h.closeButton,
                            onClick: E
                        })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                paddingFix: !1,
                children: [O, b, R]
            }),
            (0, a.jsx)(l.ModalFooter, {
                className: h.footer,
                children: (0, a.jsx)(l.Button, {
                    className: h.footerButton,
                    color: l.Button.Colors.BRAND,
                    submitting: v,
                    onClick: g,
                    children: N.Z.Messages.AUTHORIZE_AND_CONTINUE
                })
            })
        ]
    });
}
