t.d(i, {
    K: function () {
        return I;
    }
}),
    t(47120);
var n = t(470079),
    l = t(442837),
    s = t(172337),
    a = t(101492),
    d = t(710091),
    u = t(496675),
    r = t(689938);
let o = {
        'server-subscriptions-onboarding': d.Z,
        'server-subscriptions-finish-setting-up': a.Z,
        'server-subscriptions-create-tier-from-template': s.Z
    },
    c = {
        title: () => r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_TITLE,
        description: () => r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_DESCRIPTION,
        selectGuildCta: () => r.Z.Messages.GET_STARTED,
        createGuildDescription: () => r.Z.Messages.GUILD_SETTINGS_PICKER_DEFAULT_CREATE_DESCRIPTION,
        createGuildCta: () => r.Z.Messages.CREATE_SERVER_BUTTON_CTA,
        canCreateGuild: !0,
        useIsGuildSupported: () => (0, l.e7)([u.Z], () => (e) => u.Z.canAccessGuildSettings(e), [], l.pF)
    };
function I(e) {
    var i;
    let [t] = n.useState(null == e ? void 0 : o[e]),
        l = c.useIsGuildSupported(),
        s = null == t ? void 0 : null === (i = t.useIsGuildSupported) || void 0 === i ? void 0 : i.call(t),
        a = {
            ...c,
            ...(null != t ? t : {})
        };
    return {
        title: a.title(),
        description: a.description(),
        selectGuildCta: a.selectGuildCta(),
        createGuildDescription: a.createGuildDescription(),
        createGuildCta: a.createGuildCta(),
        canCreateGuild: a.canCreateGuild,
        isGuildSupported: (e, i) => l(e, i) && (null == s ? void 0 : s(e, i)) !== !1
    };
}
