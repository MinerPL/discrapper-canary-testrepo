t.r(s),
    t.d(s, {
        default: function () {
            return T;
        },
        openPremiumTryItOutProfileUpsell: function () {
            return E;
        }
    });
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(649700),
    r = t(594174),
    o = t(98278),
    l = t(790527),
    c = t(474936),
    d = t(981631),
    _ = t(689938),
    u = t(821774);
function E(e) {
    let s = r.default.getCurrentUser();
    if (null != s)
        (0, a.openModalLazy)(async () => {
            let { default: a } = await Promise.resolve().then(t.bind(t, 267717));
            return (t) =>
                (0, n.jsx)(a, {
                    user: s,
                    analyticsSource: d.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: d.jXE.USER_PROFILE,
                        object: d.qAy.BUTTON_CTA
                    },
                    onSubscribeFinish: e,
                    ...t
                });
        });
}
function T(e) {
    let { user: s, onClose: t, ...a } = e;
    return (0, n.jsx)(l.Z, {
        modalClassName: u.modal,
        modalContentClassName: u.modalContent,
        type: c.cd.TRY_IT_OUT_MODAL_UPSELL,
        title: _.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_MODAL_UPSELL_TITLE,
        body: _.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_MODAL_UPSELL_DESCRIPTION,
        glowUp: _.Z.Messages.PREMIUM_UPSELL_PROFILE_TRY_IT_OUT_MODAL_UPSELL_TITLE,
        onSecondaryClick: () => {
            (0, o.$)(t);
        },
        secondaryCTA: _.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
        onClose: t,
        enableArtBoxShadow: !1,
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        LeadingComponent: (0, n.jsx)('div', {
            className: u.previewContainerParent,
            children: (0, n.jsx)(i.Z, {
                containerClassName: u.previewContainer,
                user: s,
                disabledInputs: !0
            })
        }),
        ...a
    });
}
