n.d(t, {
    Z: function () {
        return I;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(990547), r = n(399606), l = n(481060), o = n(232567), c = n(213609), d = n(23434), u = n(153124), _ = n(981631), E = n(689938), h = n(90054);
function I(e) {
    let {transitionState: t} = e, I = (0, r.e7)([d.Z], () => d.Z.getAction()), [m, p] = s.useState(!1), g = (0, u.Dt)();
    async function T() {
        return p(!0), I === _.c2C.AGREEMENTS && p(await (0, o.Lr)()), null;
    }
    return (0, c.Z)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.USER_AGREEMENTS,
        properties: { required_action: I }
    }, {}, []), (0, i.jsxs)(l.ModalRoot, {
        'aria-labelledby': g,
        transitionState: t,
        children: [
            (0, i.jsx)('div', { id: g }),
            (0, i.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, i.jsx)(l.Heading, {
                    variant: 'heading-lg/semibold',
                    children: E.Z.Messages.NEW_TERMS_TITLE
                })
            }),
            (0, i.jsxs)(l.ModalContent, {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: I === _.c2C.AGREEMENTS ? E.Z.Messages.TERMS_OF_SERVICE_UPDATE_03_27_2023_DESCRIPTION.format() : null
                    }),
                    (0, i.jsxs)('div', {
                        className: h.container,
                        children: [
                            (0, i.jsxs)('ul', {
                                className: h.links,
                                children: [
                                    (0, i.jsx)('li', { children: E.Z.Messages.TERMS_OF_SERVICE.format({ url: _.EYA.TERMS }) }),
                                    (0, i.jsx)('li', { children: E.Z.Messages.PAID_SERVICES_TERMS.format({ url: _.EYA.PAID_TERMS }) }),
                                    (0, i.jsx)('li', { children: E.Z.Messages.PRIVACY_POLICY.format({ url: _.EYA.PRIVACY }) }),
                                    (0, i.jsx)('li', { children: E.Z.Messages.COMMUNITY_GUIDELINES.format({ url: _.EYA.GUIDELINES }) })
                                ]
                            }),
                            (0, i.jsx)('img', {
                                className: h.image,
                                alt: '',
                                src: n(146714)
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        className: h.agreementDescription,
                        children: E.Z.Messages.TERMS_OF_SERVICE_AGREEMENT_DESCRIPTION
                    })
                ]
            }),
            (0, i.jsx)(l.ModalFooter, {
                children: (0, i.jsx)(l.Button, {
                    submitting: m,
                    onClick: T,
                    color: l.Button.Colors.GREEN,
                    children: E.Z.Messages.AGREE
                })
            })
        ]
    });
}
