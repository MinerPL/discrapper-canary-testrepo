L.r(_),
    L.d(_, {
        default: function () {
            return a;
        }
    });
var s = L(735250);
L(470079);
var A = L(979554),
    e = L(98278),
    O = L(790527),
    P = L(474936),
    R = L(689938);
function a(E) {
    let { collectableType: _, onClose: a, analyticsSource: I, analyticsLocation: M, onSecondaryClick: T, ...n } = E;
    return _ === A.Z.AVATAR_DECORATION || _ === A.Z.PROFILE_EFFECT
        ? (0, s.jsx)(O.Z, {
              artURL: L(76096),
              type: P.cd.CUSTOM_PROFILE_UPSELL,
              title: _ === A.Z.AVATAR_DECORATION ? R.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_TITLE : R.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_TITLE,
              body: _ === A.Z.AVATAR_DECORATION ? R.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION : R.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              glowUp: _ === A.Z.AVATAR_DECORATION ? R.Z.Messages.PREMIUM_UPSELL_PROFILE_AVATAR_DECO_MODAL_UPSELL_DESCRIPTION : R.Z.Messages.PREMIUM_UPSELL_PROFILE_EFFECT_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  T(), (0, e.$)(a);
              },
              secondaryCTA: R.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: a,
              enableArtBoxShadow: !1,
              analyticsSource: I,
              analyticsLocation: M,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...n
          })
        : null;
}
