_(47120);
var I = _(253923),
    N = _(230711),
    R = _(581364),
    O = _(797610),
    A = _(200876),
    P = _(456269),
    t = _(228392),
    e = _(676317),
    T = _(434404),
    M = _(71275),
    i = _(60222),
    l = _(665906),
    s = _(131704),
    n = _(430824),
    r = _(63063),
    C = _(981631),
    o = _(71080),
    D = _(689938);
function L(E) {
    let S = (0, i.A)(E),
        _ = (0, P.Eg)(E),
        I = n.Z.getGuild(E),
        t = null == I ? void 0 : I.hasFeature(C.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        e = null != I && (0, A.l)(I),
        T = (0, O.M9)(I),
        M = (0, R.vC)(E, { location: 'get_permission_options' });
    return {
        PRIORITY_SPEAKER_DESCRIPTION: D.Z.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
            keybind: D.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
            onClick: () => {
                N.Z.open(C.oAB.KEYBINDS);
            }
        }),
        SOUNDBOARD_DESCRIPTION: D.Z.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({ helpCenterArticle: r.Z.getArticleURL(C.BhN.SOUNDBOARD) }),
        showStageChannelPermissions: S,
        showExperimental: !0,
        showForumPermissions: _,
        showMembershipManualApprovalPermissions: t,
        showCreatorMonetizationAnalyticsPermission: e,
        showClydeAIPermissions: T,
        externalAppsEnabled: M
    };
}
function a(E, S) {
    return E ? [S()] : [];
}
S.Z = {
    generateChannelPermissionSpec: function (E, S, _, N) {
        var R, A, i, r, a, U;
        let g = (0, P.Eg)(E),
            G = (0, o.IG)(S, _, g, N),
            u = L(E),
            c =
                l.tM.getCurrentConfig({
                    guildId: E,
                    location: '3ad37d_1'
                }).enabled && s.Um.has(S.type),
            p = (0, M.tu)(E),
            d = (0, e.ze)(E),
            f = S.isMediaChannel(),
            V = n.Z.getGuild(E),
            H = (0, O.M9)(V);
        switch (S.type) {
            case C.d4z.GUILD_CATEGORY:
                return [
                    I.zO(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY),
                    I.Ny(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    I.vq(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                        showPrivateThreads: !0,
                        showCreateThreads: !0,
                        showClydeAIPermissions: H
                    }),
                    I.WV(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
                    I.xU(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                    ...((R = u.showStageChannelPermissions), (A = () => I.kv(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE)), R ? [A()] : []),
                    I.uu(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)
                ];
            case C.d4z.GUILD_VOICE:
                return [
                    I.zO(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, { showManageWebhooks: !0 }),
                    I.Ny(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    I.WV(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE),
                    I.aW(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                        sectionDescription: d
                            ? D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                  setUpAutomod: () => {
                                      T.Z.open(E, C.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0
                    }),
                    I.uu(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
                    I.xU(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS)
                ];
            case C.d4z.GUILD_STAGE_VOICE:
                return [
                    I.zO(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, { showManageWebhooks: !1 }),
                    I.Ny(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    I.FX(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE, p),
                    I.kv(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_STAGE),
                    I.uu(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS),
                    I.aW(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
                        sectionDescription: d
                            ? D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
                                  setUpAutomod: () => {
                                      T.Z.open(E, C.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0
                    })
                ];
            case C.d4z.GUILD_FORUM:
            case C.d4z.GUILD_MEDIA:
                let h = f ? D.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : D.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
                    B = f ? D.Z.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : D.Z.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
                return [
                    I.zO(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
                    I.Ny(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    I.vq(G, h, {
                        showPrivateThreads: !1,
                        showCreateThreads: !1,
                        sectionDescription: d
                            ? B.format({
                                  setUpAutomod: () => {
                                      !f && (0, t.MO)(), T.Z.open(E, C.pNK.GUILD_AUTOMOD);
                                  }
                              })
                            : void 0,
                        showClydeAIPermissions: H
                    }),
                    I.xU(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                    ...((i = c), (r = () => I.WV(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE)), i ? [r()] : [])
                ];
            default:
                return [
                    I.zO(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL),
                    I.Ny(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP),
                    I.vq(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
                        showPrivateThreads: S.type !== C.d4z.GUILD_ANNOUNCEMENT,
                        showCreateThreads: !0,
                        showClydeAIPermissions: H
                    }),
                    I.xU(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_APPS),
                    ...((a = c), (U = () => I.WV(G, D.Z.Messages.ROLE_PERMISSIONS_SECTION_VOICE)), a ? [U()] : [])
                ];
        }
    },
    generateGuildPermissionSpec: function (E) {
        var S, _;
        let N = new Set();
        return (
            !E.hasFeature(C.oNc.COMMUNITY) && N.add(C.Plq.VIEW_GUILD_ANALYTICS.toString()),
            (S = I.s4(D.Z.Messages, L(E.id))),
            0 === (_ = N).size
                ? S
                : S.map((E) => ({
                      ...E,
                      permissions: E.permissions.filter((E) => !_.has(E.flag.toString()))
                  }))
        );
    },
    getGuildPermissionSpecMap: function (E) {
        return I.WW(D.Z.Messages, L(E.id));
    }
};
