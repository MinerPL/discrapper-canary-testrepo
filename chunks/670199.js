s.d(n, {
    Z: function () {
        return A;
    }
});
var a = s(735250);
s(470079);
var t = s(120356),
    l = s.n(t),
    i = s(481060),
    o = s(600164),
    r = s(219230),
    c = s(788080),
    d = s(548647),
    _ = s(696375),
    E = s(97568),
    N = s(800530),
    u = s(689938),
    x = s(220613);
function A(e) {
    var n, s;
    let { classification: t, isSpam: A = !1, isCoppa: I = !1, className: C, onClose: S, onNext: T } = e,
        m = (0, d.n)(),
        h = null !== (n = null == t ? void 0 : t.explainer_link) && void 0 !== n ? n : '',
        M = null != t && null != t.flagged_content && t.flagged_content.length > 0,
        L = (0, c.c7)(null == t ? void 0 : t.description),
        g = !A && !I,
        O = (0, r.B)('classification_evidence'),
        p = null != t && (((0, c.FB)(t) && O) || M);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(i.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: x.header,
                separator: !1,
                children: [
                    (0, a.jsx)(i.Heading, {
                        className: x.title,
                        variant: 'heading-xl/semibold',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
                    }),
                    (0, a.jsx)(i.Text, {
                        className: x.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
                    }),
                    null != S &&
                        (0, a.jsx)(i.ModalCloseButton, {
                            className: x.closeButton,
                            onClick: S
                        })
                ]
            }),
            (0, a.jsxs)(i.ModalContent, {
                className: l()(x.modalContent, !p && x.evidenceOffset, C),
                paddingFix: !1,
                children: [
                    p && (0, a.jsx)(E.s, { flaggedContent: null !== (s = t.flagged_content) && void 0 !== s ? s : [] }),
                    (0, a.jsx)(i.Text, {
                        className: x.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
                    }),
                    (0, a.jsx)('div', {
                        className: x.policyContainer,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-md/semibold',
                            children: L
                        })
                    }),
                    I &&
                        (0, a.jsx)(_.Z, {
                            url: N.sQ.AGE_VERIFICATION_LINK,
                            text: u.Z.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
                            onClick: () => m(N.n0.ClickAgeVerificationLink)
                        }),
                    A &&
                        !I &&
                        (0, a.jsx)(_.Z, {
                            url: N.sQ.SPAM_LINK,
                            text: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
                            onClick: () => m(N.n0.ClickSpamWebformLink)
                        }),
                    !I &&
                        (0, a.jsx)(_.Z, {
                            text: u.Z.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
                            url: h,
                            onClick: () => m(N.n0.ClickLearnMoreLink)
                        }),
                    g &&
                        (0, a.jsx)(i.Text, {
                            className: x.learnMore,
                            variant: 'text-xs/normal',
                            children: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
                        })
                ]
            }),
            g &&
                (0, a.jsx)(i.ModalFooter, {
                    children: (0, a.jsx)(i.Button, {
                        onClick: T,
                        color: i.Button.Colors.BRAND,
                        children: u.Z.Messages.NEXT
                    })
                })
        ]
    });
}
