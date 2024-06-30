t.d(a, {
    h: function () {
        return m;
    }
}), t(47120);
var n = t(735250), r = t(470079), s = t(512722), o = t.n(s), l = t(481060), c = t(457330), i = t(710845), d = t(69580), u = t(285952), x = t(689938), N = t(985571);
let h = new i.Z('TwoWayLinkDiscordConsentWeb');
function m(e) {
    let {
            platformType: a,
            clientId: t,
            scopes: s,
            authToken: i,
            onContinue: m,
            onError: C,
            onClose: j,
            redirectUri: E
        } = e, [f, p] = r.useState(!1), v = r.useCallback(async e => {
            let t, {location: n} = e, {
                    callbackCode: r,
                    callbackState: s
                } = i;
            try {
                t = await c.Z.completeTwoWayLink(a, n, r, s);
            } catch (e) {
                h.error(''.concat(a, ' link error:'), e);
            }
            null != t ? m() : C();
        }, [
            a,
            i,
            m,
            C
        ]), {
            header: T,
            body: O,
            appDetails: g,
            sendAuthorize: R
        } = (0, d.useOAuth2AuthorizeForm)({
            clientId: t,
            scopes: s,
            responseType: 'code',
            callback: v,
            isTrustedName: !0,
            isEmbeddedFlow: !0,
            redirectUri: E
        }), b = r.useCallback(() => {
            o()(null != R, 'sendAuthorize not available'), p(!0), R(!0);
        }, [R]);
    return (0, n.jsxs)('div', {
        className: N.container,
        children: [
            null != j && (0, n.jsx)(l.ModalCloseButton, {
                className: N.closeButton,
                onClick: j
            }),
            (0, n.jsxs)(l.Scroller, {
                children: [
                    (0, n.jsx)(l.ModalHeader, {
                        direction: u.Z.Direction.VERTICAL,
                        className: N.header,
                        separator: !1,
                        children: (0, n.jsx)(l.Text, {
                            className: N.stepHeader,
                            variant: 'text-xs/bold',
                            color: 'header-secondary',
                            children: x.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 2,
                                total: 2
                            })
                        })
                    }),
                    (0, n.jsxs)('div', {
                        className: N.discordConsentBody,
                        children: [
                            T,
                            O,
                            g
                        ]
                    }),
                    (0, n.jsx)(l.ModalFooter, {
                        className: N.footer,
                        children: (0, n.jsx)(l.Button, {
                            className: N.footerButton,
                            color: l.Button.Colors.BRAND,
                            submitting: f,
                            onClick: b,
                            children: x.Z.Messages.AUTHORIZE_AND_CONTINUE
                        })
                    })
                ]
            })
        ]
    });
}
