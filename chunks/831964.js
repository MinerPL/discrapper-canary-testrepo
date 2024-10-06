n.d(t, {
    __: function () {
        return D;
    },
    dm: function () {
        return a;
    }
});
var s,
    a,
    r = n(230711),
    i = n(100527),
    l = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(981631),
    _ = n(526761),
    E = n(689938),
    u = n(509614),
    T = n(880511),
    I = n(985443),
    R = n(612253),
    g = n(832287),
    N = n(860528),
    m = n(872532),
    C = n(91342),
    f = n(181708),
    p = n(821721),
    A = n(158897),
    M = n(290650),
    S = n(751125),
    h = n(904505),
    x = n(386014),
    b = n(845571),
    O = n(220046),
    P = n(385874),
    v = n(371000),
    L = n(377679),
    Z = n(825087);
((s = a || (a = {})).NEW_APP_STYLES = 'newAppStyles'), (s.REFERRAL_PROGRAM = 'referralProgram'), (s.SERVER_PROFILES = 'serverProfiles'), (s.SHOW_YOUR_STYLE = 'showYourStyle'), (s.YOUR_SPACE = 'yourSpace'), (s.EMOJIS = 'emojis'), (s.NO_LIMITS = 'noLimits');
let D = () => {
    let e = (0, c.rO)();
    return {
        emojis: {
            name: 'emojis',
            title: E.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_TITLE,
            description: E.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
            previewImage: u,
            videoUrl: e ? C.Z : f.Z,
            isCompact: !0
        },
        noLimits: {
            name: 'noLimits',
            title: E.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_NO_LIMITS_HEADER,
            description: E.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_NO_LIMITS_DESCRIPTION,
            previewImage: T,
            videoUrl: e ? M.Z : S.Z,
            isCompact: !0
        }
    };
};
t.ZP = (e) => {
    let { analyticsLocations: t } = (0, l.ZP)(i.Z.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, o.Z)({
            scrollPosition: _.Y_.TRY_IT_OUT,
            analyticsLocations: t
        }),
        s = (0, c.rO)(),
        a = {
            referralProgram: {
                name: 'referralProgram',
                title: E.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
                descriptionCta: E.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                previewImage: N,
                videoUrl: s ? h.Z : x.Z
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: E.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
                descriptionCta: E.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                previewImage: m,
                videoUrl: s ? b.Z : O.Z
            },
            newAppStyles: {
                name: 'newAppStyles',
                title: E.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
                descriptionCta: E.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
                previewImage: g,
                videoUrl: s ? p.Z : A.Z
            }
        },
        u = {
            showYourStyle: {
                name: 'showYourStyle',
                title: E.Z.Messages.MARKETING_PAGE_COMPARISON_TABLE_SHOW_OFF_YOUR_STYLE_SECTION_V2,
                description: E.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_PROFILE_STYLES_DESCRIPTION,
                descriptionCta: E.Z.Messages.TAKE_ME_THERE,
                previewImage: R,
                onClick: n,
                videoUrl: s ? P.Z : v.Z
            },
            yourSpace: {
                name: 'yourSpace',
                title: E.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_APP_STYLES_HEADER,
                description: E.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_APP_STYLES_DESCRIPTION,
                descriptionCta: E.Z.Messages.TAKE_ME_THERE,
                previewImage: I,
                onClick: () => {
                    r.Z.open(d.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: t
                    });
                },
                videoUrl: s ? L.Z : Z.Z
            }
        };
    return e ? u : a;
};
