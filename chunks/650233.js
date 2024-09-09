a.r(s),
    a.d(s, {
        HubEmailConnectionModalView: function () {
            return E;
        },
        default: function () {
            return m;
        }
    });
var t = a(735250),
    n = a(470079),
    l = a(990547),
    i = a(481060),
    r = a(390885),
    o = a(495784),
    c = a(950012),
    d = a(161836),
    N = a(630724),
    u = a(689938),
    _ = a(902954);
function m(e) {
    let { transitionState: s, onClose: a, isNUXFlow: m } = e;
    return (
        n.useEffect(() => {
            o.Z.hideHubUpsell(), m && r.Z.flowStep(N.MK.ORGANIC, N.EW.HUB_CONNECTION);
        }, [m]),
        (0, t.jsx)(i.ModalRoot, {
            className: _.modalRoot,
            transitionState: s,
            'aria-label': u.Z.Messages.HUB_WAITLIST_MODAL_JOIN_HEADER,
            impression: { impressionName: l.ImpressionNames.HUB_EMAIL_SIGNUP },
            children: (0, t.jsx)(i.ModalContent, {
                style: {
                    overflow: 'hidden',
                    paddingRight: '0px'
                },
                paddingFix: !1,
                className: _.modalContent,
                children: (0, t.jsxs)('div', {
                    className: _.container,
                    children: [
                        (0, t.jsx)('div', {
                            className: _.sidebarContainer,
                            children: (0, t.jsx)(d.Z, {})
                        }),
                        (0, t.jsxs)('div', {
                            className: _.contentContainer,
                            children: [
                                (0, t.jsx)(i.ModalCloseButton, {
                                    onClick: a,
                                    className: _.closeButton
                                }),
                                (0, t.jsx)(c.Z, {
                                    isNUXFlow: m,
                                    onClose: a
                                })
                            ]
                        })
                    ]
                })
            })
        })
    );
}
let E = (e) => {
    let { invite: s } = e;
    return (0, t.jsxs)('div', {
        className: _.container,
        children: [
            (0, t.jsx)('div', {
                className: _.sidebarContainer,
                children: (0, t.jsx)(d.Z, {})
            }),
            (0, t.jsx)('div', {
                className: _.contentContainer,
                children: (0, t.jsx)(c.Z, { invite: s })
            })
        ]
    });
};
