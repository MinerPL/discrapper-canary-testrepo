n.d(t, {
    Gi: function () {
        return o;
    },
    MP: function () {
        return l;
    },
    Qs: function () {
        return u;
    },
    YN: function () {
        return c;
    }
});
var r = n(818083),
    i = n(380684),
    a = n(311476),
    s = n(474936);
let o = (0, r.B)({
        id: '2024-06_premium_emoji_desktop_upsell',
        label: 'Premium Emoji Desktop Upsell',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            addSocialProof: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enable new roadblock experience',
                config: {
                    enabled: !0,
                    addSocialProof: !1
                }
            },
            {
                id: 2,
                label: 'Enable new roadblock experience with social proof',
                config: {
                    enabled: !0,
                    addSocialProof: !0
                }
            }
        ]
    }),
    l = (0, r.B)({
        id: '2024-05_file_upload_desktop_upsell',
        label: 'File Upload Desktop Upsell',
        kind: 'user',
        defaultConfig: {
            enabled: !1,
            addSocialProof: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enable new roadblock modal',
                config: {
                    enabled: !0,
                    addSocialProof: !1
                }
            },
            {
                id: 2,
                label: 'Enable new roadblock modal with social proof',
                config: {
                    enabled: !0,
                    addSocialProof: !0
                }
            }
        ]
    }),
    u = (0, r.B)({
        id: '2024-06_premium_soundboard_desktop_upsell',
        label: 'Premium Soundboard Desktop Upsell',
        kind: 'user',
        defaultConfig: {
            enableInlineUpsell: !1,
            enableRoadblock: !1,
            enableRoadblockWithSocialProof: !1
        },
        treatments: [
            {
                id: 1,
                label: 'Enable inline upsell only',
                config: {
                    enableInlineUpsell: !0,
                    enableRoadblock: !1,
                    enableRoadblockWithSocialProof: !1
                }
            },
            {
                id: 2,
                label: 'Enable inline and roadblock upsells only',
                config: {
                    enableInlineUpsell: !0,
                    enableRoadblock: !0,
                    enableRoadblockWithSocialProof: !1
                }
            },
            {
                id: 3,
                label: 'Enable inline and roadblock upsells with social proof',
                config: {
                    enableInlineUpsell: !0,
                    enableRoadblock: !0,
                    enableRoadblockWithSocialProof: !0
                }
            }
        ]
    });
function c(e) {
    switch (e) {
        case s.cd.UPLOAD_ERROR_UPSELL:
            return l.getCurrentConfig({ location: 'File Upload Roadblock' }, { autoTrackExposure: !1 }).addSocialProof && !(0, i.XS)();
        case s.cd.CLIENT_THEMES_UPSELL:
        case s.cd.APP_ICON_UPSELL:
            return a.Z.getCurrentConfig({ location: 'shouldShowSocialProof' }, { autoTrackExposure: !1 }).addSocialProof;
        case s.cd.ANIMATED_AVATAR_MODAL_UPSELL:
        case s.cd.ANIMATED_BANNER_MODAL_UPSELL:
        case s.cd.PROFILE_EFFECT_MODAL_UPSELL:
        case s.cd.AVATAR_DECORATION_MODAL_UPSELL:
        case s.cd.FOR_LATER_MODAL_UPSELL:
            return !0;
        default:
            return !1;
    }
}
