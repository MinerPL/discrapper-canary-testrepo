a.r(n),
    a.d(n, {
        default: function () {
            return p;
        },
        openProfileUpsellModal: function () {
            return P;
        }
    });
var i = a(735250);
a(470079);
var r = a(481060),
    s = a(921813),
    o = a(687158),
    l = a(576635),
    t = a(594174),
    u = a(98278),
    c = a(790527),
    d = a(474936),
    A = a(981631),
    E = a(486324),
    _ = a(689938),
    I = a(960232);
function P(e, n, s) {
    let o = t.default.getCurrentUser();
    return (
        null != o &&
        ((0, r.openModalLazy)(async () => {
            let { default: r } = await Promise.resolve().then(a.bind(a, 378879));
            return (a) =>
                (0, i.jsx)(r, {
                    user: o,
                    imageSrc: n,
                    uploadType: e,
                    analyticsSource: A.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: A.jXE.USER_PROFILE,
                        object: A.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: s,
                    ...a
                });
        }),
        !0)
    );
}
function p(e) {
    let { user: n, uploadType: r, imageSrc: t, onClose: A, analyticsSource: P, analyticsLocation: p, onSecondaryClick: v, ...N } = e,
        m = (0, o.ZP)(n.id),
        { primaryColor: C, secondaryColor: L } = (0, l.Z)({
            user: n,
            displayProfile: m,
            pendingAvatar: r === E.pC.AVATAR ? t : void 0,
            isPreview: !0
        }),
        T = r === E.pC.AVATAR || r === E.pC.BANNER,
        R = null != t;
    return T
        ? (0, i.jsx)(c.Z, {
              artURL: R ? void 0 : a(76096),
              modalClassName: R ? I.modal : void 0,
              modalContentClassName: R ? I.modalContent : void 0,
              type: d.cd.CUSTOM_PROFILE_UPSELL,
              title: r === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body: r === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp: r === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  null == v || v(), (0, u.$)(A);
              },
              secondaryCTA: _.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: A,
              enableArtBoxShadow: !1,
              analyticsSource: P,
              analyticsLocation: p,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: R
                  ? (0, i.jsx)('div', {
                        className: I.previewContainerParent,
                        children: (0, i.jsx)(s.Z, {
                            containerClassName: I.previewContainer,
                            user: n,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: r === E.pC.AVATAR ? t : void 0,
                            pendingBanner: r === E.pC.BANNER ? t : void 0,
                            pendingThemeColors: [C, L]
                        })
                    })
                  : void 0,
              ...N
          })
        : null;
}
