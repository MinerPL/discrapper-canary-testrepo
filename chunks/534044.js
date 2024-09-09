s.d(n, {
    Z: function () {
        return x;
    }
});
var a = s(735250);
s(470079);
var t = s(120356),
    l = s.n(t),
    i = s(481060),
    o = s(600164),
    r = s(548647),
    c = s(696375),
    d = s(800530),
    _ = s(689938),
    E = s(629916),
    N = s(220613),
    u = s(160557);
function x(e) {
    let { className: n, onNext: s, onClose: t } = e,
        x = (0, r.n)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(i.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, a.jsx)('div', {
                        className: E.iconContainer,
                        children: (0, a.jsx)('img', {
                            src: u,
                            alt: '',
                            className: E.icon
                        })
                    }),
                    (0, a.jsx)(i.Heading, {
                        className: N.title,
                        variant: 'heading-xl/semibold',
                        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER
                    }),
                    (0, a.jsx)(i.Heading, {
                        className: N.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER
                    }),
                    null != t &&
                        (0, a.jsx)(i.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: t
                        })
                ]
            }),
            (0, a.jsxs)(i.ModalContent, {
                className: l()(E.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        className: E.actionsHeader,
                        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER
                    }),
                    (0, a.jsx)(c.Z, {
                        text: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => x(d.n0.ClickCommunityGuidelinesLink)
                    }),
                    (0, a.jsx)(c.Z, {
                        text: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => x(d.n0.ClickWarningSystemHelpcenterLink)
                    })
                ]
            }),
            (0, a.jsx)(i.ModalFooter, {
                children: (0, a.jsx)(i.Button, {
                    onClick: s,
                    color: i.Button.Colors.BRAND,
                    children: _.Z.Messages.DONE
                })
            })
        ]
    });
}
