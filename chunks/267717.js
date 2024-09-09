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
    u = t(960232);
function E() {
    let e = r.default.getCurrentUser();
    if (null != e)
        (0, a.openModalLazy)(async () => {
            let { default: s } = await Promise.resolve().then(t.bind(t, 267717));
            return (t) =>
                (0, n.jsx)(s, {
                    user: e,
                    analyticsSource: d.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: d.jXE.USER_PROFILE,
                        object: d.qAy.BUTTON_CTA
                    },
                    ...t
                });
        });
}
function T(e) {
    let { user: s, onClose: t, analyticsSource: a, analyticsLocation: r, ...d } = e;
    return (0, n.jsx)(l.Z, {
        modalClassName: u.modal,
        modalContentClassName: u.modalContent,
        type: c.cd.APP_ICONS_UPSELL,
        title: _.Z.Messages.PREMIUM_UPSEL_FEATURE_IN_APP_ICONS_TITLE,
        body: _.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
        glowUp: _.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
        onSecondaryClick: () => {
            (0, o.$)(t);
        },
        secondaryCTA: _.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
        analyticsSource: a,
        analyticsLocation: r,
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
        ...d
    });
}
