n.d(t, {
    G: function () {
        return o;
    },
    V: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(931240),
    r = n(308083),
    l = n(689938);
function o(e) {
    return [
        {
            index: r.Wy.GAMES,
            name: l.Z.Messages.CLAN_SETUP_GAMES_STEP,
            hasError: (null == e ? void 0 : e.gameApplicationIds) != null
        },
        {
            index: r.Wy.PLAYSTYLE,
            name: l.Z.Messages.CLAN_SETUP_PLAYSTYLE_STEP,
            hasError: (null == e ? void 0 : e.playstyle) != null
        },
        {
            index: r.Wy.UTILITY_TRAITS,
            name: l.Z.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
        },
        {
            index: r.Wy.INTERESTS,
            name: l.Z.Messages.CLAN_SETUP_INTERESTS_STEP,
            hasError: (null == e ? void 0 : e.interests) != null
        },
        {
            index: r.Wy.DESCRIPTION,
            name: l.Z.Messages.CLAN_SETUP_DESCRIPTION_STEP,
            hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
        },
        {
            index: r.Wy.CUSTOMIZE_TAG_BADGE,
            name: l.Z.Messages.CLAN_SETUP_TAG_STEP,
            hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
        },
        {
            index: r.Wy.CUSTOMIZE_BANNER,
            name: l.Z.Messages.CLAN_SETUP_BANNER_STEP,
            hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
        },
        {
            index: r.Wy.MEMBER_APPLICATION,
            name: l.Z.Messages.CLAN_SETUP_APPLICATIONS_STEP,
            hasError: (null == e ? void 0 : e.verificationForm) != null
        }
    ];
}
async function c(e) {
    let { guildId: t, onSuccess: r, progress: l } = e;
    try {
        await s.sv(t, l);
    } catch (e) {
        return;
    }
    r(),
        (0, a.openModalLazy)(async () => {
            let { default: e } = await n.e('63636').then(n.bind(n, 511385));
            return (n) =>
                (0, i.jsx)(e, {
                    guildId: t,
                    tag: l.tag,
                    brandPrimaryColor: l.brandPrimaryColor,
                    ...n
                });
        });
}
