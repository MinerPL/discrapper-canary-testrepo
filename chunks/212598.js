n.d(t, {
    t: function () {
        return E;
    }
}),
    n(411104);
var a = n(735250),
    r = n(470079),
    s = n(512722),
    o = n.n(s),
    l = n(478677),
    c = n(481060),
    i = n(570140),
    d = n(275759),
    u = n(202120),
    x = n(600164),
    N = n(710845),
    h = n(424071),
    C = n(689938),
    m = n(879137);
let j = new N.Z('TwoWayLink');
function E(e) {
    let { platformType: t, isWaitingForConnection: n, onWaitingForConnection: s, expectedCallbackState: N, onAuthToken: E, onError: f, onClose: v, img: p, title: T, body: O, redirectDestination: b } = e,
        R = r.useCallback(async () => {
            let e;
            try {
                if (((e = await (0, u.H)(t, { twoWayLinkType: l.g.DESKTOP })), null == e)) throw Error('missing authorizeURL');
            } catch (e) {
                j.error('Error opening provider authorize page', e), f();
                return;
            }
            let { state: n } = (0, d.xp)(e);
            o()(null != n, 'Authorize URL state query parameter must be present'), null == s || s(n);
        }, [t, f, s]),
        I = r.useCallback(
            (e) => {
                let { callbackCode: n, callbackState: a } = e;
                if (a !== N) {
                    j.warn(''.concat(t, ' link: received mismatching callback state!'));
                    return;
                }
                E({
                    callbackCode: n,
                    callbackState: a
                });
            },
            [t, N, E]
        );
    return (
        r.useEffect(
            () => (
                i.Z.subscribe('USER_CONNECTIONS_LINK_CALLBACK', I),
                () => {
                    i.Z.unsubscribe('USER_CONNECTIONS_LINK_CALLBACK', I);
                }
            ),
            [I]
        ),
        (0, a.jsxs)(h.Z, {
            children: [
                (0, a.jsxs)(c.ModalHeader, {
                    direction: x.Z.Direction.VERTICAL,
                    className: m.header,
                    separator: !1,
                    children: [
                        (0, a.jsx)(c.Text, {
                            className: m.stepHeader,
                            variant: 'text-xs/bold',
                            color: 'header-secondary',
                            children: C.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                                number: 1,
                                total: 2
                            })
                        }),
                        (0, a.jsxs)('div', {
                            className: m.illustration,
                            children: [p, ' ']
                        }),
                        (0, a.jsx)(c.Heading, {
                            className: m.title,
                            variant: 'heading-xl/extrabold',
                            children: T
                        }),
                        null != v &&
                            (0, a.jsx)(c.ModalCloseButton, {
                                className: m.closeButton,
                                onClick: v
                            })
                    ]
                }),
                (0, a.jsxs)(c.ModalContent, {
                    className: m.body,
                    paddingFix: !1,
                    children: [
                        (0, a.jsx)(c.Text, {
                            tag: 'p',
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: O
                        }),
                        !n &&
                            (0, a.jsx)(c.Text, {
                                tag: 'p',
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: C.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({ redirectUrl: b })
                            })
                    ]
                }),
                (0, a.jsx)(c.ModalFooter, {
                    className: m.footer,
                    children: (0, a.jsxs)(c.Button, {
                        className: m.footerButton,
                        color: n ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                        onClick: R,
                        children: [
                            n ? C.Z.Messages.RETRY : C.Z.Messages.CONTINUE,
                            (0, a.jsx)(c.WindowLaunchIcon, {
                                color: 'currentColor',
                                className: m.launchIcon,
                                size: 'xs'
                            })
                        ]
                    })
                })
            ]
        })
    );
}
