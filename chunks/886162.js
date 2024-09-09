n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(399606),
    l = n(481060),
    o = n(232567),
    c = n(213609),
    d = n(313201),
    u = n(23434),
    _ = n(981631),
    h = n(689938),
    E = n(485187);
function m(e) {
    let { transitionState: t } = e,
        m = (0, r.e7)([u.Z], () => u.Z.getAction()),
        [I, g] = a.useState(!1),
        p = (0, d.Dt)();
    async function T() {
        return g(!0), m === _.c2C.AGREEMENTS && g(await (0, o.Lr)()), null;
    }
    return (
        (0, c.Z)(
            {
                type: s.ImpressionTypes.VIEW,
                name: s.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: m }
            },
            {},
            []
        ),
        (0, i.jsxs)(l.ModalRoot, {
            'aria-labelledby': p,
            transitionState: t,
            children: [
                (0, i.jsx)('div', { id: p }),
                (0, i.jsx)(l.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)(l.Heading, {
                        variant: 'heading-lg/semibold',
                        children: h.Z.Messages.NEW_TERMS_TITLE
                    })
                }),
                (0, i.jsxs)(l.ModalContent, {
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: m === _.c2C.AGREEMENTS ? h.Z.Messages.TERMS_OF_SERVICE_UPDATE_03_27_2023_DESCRIPTION.format() : null
                        }),
                        (0, i.jsxs)('div', {
                            className: E.container,
                            children: [
                                (0, i.jsxs)('ul', {
                                    className: E.links,
                                    children: [(0, i.jsx)('li', { children: h.Z.Messages.TERMS_OF_SERVICE.format({ url: _.EYA.TERMS }) }), (0, i.jsx)('li', { children: h.Z.Messages.PAID_SERVICES_TERMS.format({ url: _.EYA.PAID_TERMS }) }), (0, i.jsx)('li', { children: h.Z.Messages.PRIVACY_POLICY.format({ url: _.EYA.PRIVACY }) }), (0, i.jsx)('li', { children: h.Z.Messages.COMMUNITY_GUIDELINES.format({ url: _.EYA.GUIDELINES }) })]
                                }),
                                (0, i.jsx)('img', {
                                    className: E.image,
                                    alt: '',
                                    src: n(146714)
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: E.agreementDescription,
                            children: h.Z.Messages.TERMS_OF_SERVICE_AGREEMENT_DESCRIPTION
                        })
                    ]
                }),
                (0, i.jsx)(l.ModalFooter, {
                    children: (0, i.jsx)(l.Button, {
                        submitting: I,
                        onClick: T,
                        color: l.Button.Colors.GREEN,
                        children: h.Z.Messages.AGREE
                    })
                })
            ]
        })
    );
}
