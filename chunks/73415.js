n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    });
var d = n(200651);
n(192379);
var a = n(979554),
    e = n(98278),
    s = n(792254),
    f = n(790527),
    o = n(474936),
    A = n(388032);
function p(c) {
    let { collectableType: t, onClose: n, analyticsSource: p, analyticsLocation: b, onSecondaryClick: i, ...r } = c,
        u = t === a.Z.AVATAR_DECORATION || t === a.Z.PROFILE_EFFECT,
        R = (0, s.Z)(t === a.Z.AVATAR_DECORATION ? o.cd.AVATAR_DECORATION_MODAL_UPSELL : o.cd.PROFILE_EFFECT_MODAL_UPSELL);
    return u
        ? (0, d.jsx)(f.Z, {
              artURL: R,
              type: t === a.Z.AVATAR_DECORATION ? o.cd.AVATAR_DECORATION_MODAL_UPSELL : o.cd.PROFILE_EFFECT_MODAL_UPSELL,
              title: t === a.Z.AVATAR_DECORATION ? A.intl.string(A.t.JI7uhY) : A.intl.string(A.t.sYm15e),
              body: t === a.Z.AVATAR_DECORATION ? A.intl.string(A.t['5XvsdX']) : A.intl.string(A.t['Hza+Bg']),
              glowUp: t === a.Z.AVATAR_DECORATION ? A.intl.string(A.t['5XvsdX']) : A.intl.string(A.t['Hza+Bg']),
              onSecondaryClick: () => {
                  i(), (0, e.$)(n);
              },
              secondaryCTA: A.intl.string(A.t.PcTCBw),
              onClose: n,
              enableArtBoxShadow: !1,
              analyticsSource: p,
              analyticsLocation: b,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...r
          })
        : null;
}
