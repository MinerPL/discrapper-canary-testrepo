t.d(a, {
    t: function () {
        return j;
    }
}), t(411104);
var n = t(735250), r = t(470079), s = t(512722), o = t.n(s), l = t(478677), c = t(481060), i = t(570140), d = t(275759), u = t(202120), x = t(710845), N = t(285952), h = t(689938), m = t(985571);
let C = new x.Z('TwoWayLink');
function j(e) {
    let {
            platformType: a,
            isWaitingForConnection: t,
            onWaitingForConnection: s,
            expectedCallbackState: x,
            onAuthToken: j,
            onError: E,
            onClose: f,
            img: p,
            title: v,
            body: T,
            redirectDestination: O
        } = e, g = r.useCallback(async () => {
            let e;
            try {
                if (e = await (0, u.H)(a, { twoWayLinkType: l.g.DESKTOP }), null == e)
                    throw Error('missing authorizeURL');
            } catch (e) {
                C.error('Error opening provider authorize page', e), E();
                return;
            }
            let {state: t} = (0, d.xp)(e);
            o()(null != t, 'Authorize URL state query parameter must be present'), null == s || s(t);
        }, [
            a,
            E,
            s
        ]), R = r.useCallback(e => {
            let {
                callbackCode: t,
                callbackState: n
            } = e;
            if (n !== x) {
                C.warn(''.concat(a, ' link: received mismatching callback state!'));
                return;
            }
            j({
                callbackCode: t,
                callbackState: n
            });
        }, [
            a,
            x,
            j
        ]);
    return r.useEffect(() => (i.Z.subscribe('USER_CONNECTIONS_LINK_CALLBACK', R), () => {
        i.Z.unsubscribe('USER_CONNECTIONS_LINK_CALLBACK', R);
    }), [R]), (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(c.ModalHeader, {
                direction: N.Z.Direction.VERTICAL,
                className: m.header,
                separator: !1,
                children: [
                    (0, n.jsx)(c.Text, {
                        className: m.stepHeader,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: h.Z.Messages.BIDIRECTIONAL_STEP_HEADER.format({
                            number: 1,
                            total: 2
                        })
                    }),
                    (0, n.jsxs)('div', {
                        className: m.illustration,
                        children: [
                            p,
                            ' '
                        ]
                    }),
                    (0, n.jsx)(c.Heading, {
                        className: m.title,
                        variant: 'heading-xl/extrabold',
                        children: v
                    }),
                    null != f && (0, n.jsx)(c.ModalCloseButton, {
                        className: m.closeButton,
                        onClick: f
                    })
                ]
            }),
            (0, n.jsxs)(c.ModalContent, {
                className: m.body,
                paddingFix: !1,
                children: [
                    (0, n.jsx)(c.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: T
                    }),
                    !t && (0, n.jsx)(c.Text, {
                        tag: 'p',
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.Z.Messages.CONSOLE_REDIRECT_NOTICE.format({ redirectUrl: O })
                    })
                ]
            }),
            (0, n.jsx)(c.ModalFooter, {
                className: m.footer,
                children: (0, n.jsxs)(c.Button, {
                    className: m.footerButton,
                    color: t ? c.Button.Colors.PRIMARY : c.Button.Colors.BRAND,
                    onClick: g,
                    children: [
                        t ? h.Z.Messages.RETRY : h.Z.Messages.CONTINUE,
                        (0, n.jsx)(c.WindowLaunchIcon, {
                            color: 'currentColor',
                            className: m.launchIcon,
                            size: 'xs'
                        })
                    ]
                })
            })
        ]
    });
}
