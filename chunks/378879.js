a.r(n),
    a.d(n, {
        default: function () {
            return m;
        },
        openProfileUpsellModal: function () {
            return v;
        }
    });
var i = a(735250);
a(470079);
var s = a(481060),
    r = a(921813),
    o = a(687158),
    l = a(576635),
    t = a(594174),
    c = a(98278),
    u = a(790527),
    d = a(474936),
    A = a(981631),
    E = a(486324),
    _ = a(689938),
    I = a(821774),
    P = a(842786),
    p = a(89671);
function v(e, n) {
    let r = t.default.getCurrentUser();
    return (
        null != r &&
        ((0, s.openModalLazy)(async () => {
            let { default: o } = await Promise.resolve().then(a.bind(a, 378879));
            return (a) =>
                (0, i.jsx)(o, {
                    user: r,
                    imageSrc: n,
                    uploadType: e,
                    analyticsSource: A.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: A.jXE.USER_PROFILE,
                        object: A.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: s.closeAllModals,
                    ...a
                });
        }),
        !0)
    );
}
function m(e) {
    let { user: n, uploadType: a, imageSrc: s, onClose: t, analyticsSource: A, analyticsLocation: v, onSecondaryClick: m, ...N } = e,
        C = (0, o.ZP)(n.id),
        { primaryColor: f, secondaryColor: T } = (0, l.Z)({
            user: n,
            displayProfile: C,
            pendingAvatar: a === E.pC.AVATAR ? s : void 0,
            isPreview: !0
        }),
        L = a === E.pC.AVATAR || a === E.pC.BANNER,
        R = null != s;
    return L
        ? (0, i.jsx)(u.Z, {
              artURL: R || a === E.pC.AVATAR ? void 0 : p.Z,
              artElement:
                  R || a !== E.pC.AVATAR
                      ? void 0
                      : (0, i.jsx)('img', {
                            className: I.avatarImage,
                            alt: '',
                            src: P
                        }),
              modalClassName: R ? I.modal : void 0,
              modalContentClassName: R ? I.modalContent : void 0,
              type: d.cd.CUSTOM_PROFILE_UPSELL,
              title: a === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body: a === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp: a === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  null == m || m(), (0, c.$)(t);
              },
              secondaryCTA: _.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: t,
              enableArtBoxShadow: !1,
              analyticsSource: A,
              analyticsLocation: v,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: R
                  ? (0, i.jsx)('div', {
                        className: I.previewContainerParent,
                        children: (0, i.jsx)(r.Z, {
                            containerClassName: I.previewContainer,
                            user: n,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: a === E.pC.AVATAR ? s : void 0,
                            pendingBanner: a === E.pC.BANNER ? s : void 0,
                            pendingThemeColors: [f, T]
                        })
                    })
                  : void 0,
              ...N
          })
        : null;
}
