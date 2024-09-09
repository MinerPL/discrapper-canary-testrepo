t.d(n, {
    Z: function () {
        return g;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    a = t(481060),
    l = t(40851),
    u = t(132871),
    o = t(147890),
    r = t(593128),
    d = t(434404),
    c = t(956324),
    E = t(994763),
    _ = t(84615),
    M = t(984933),
    N = t(981631),
    I = t(308083),
    S = t(689938);
function g(e) {
    let n = (0, l.Aq)(),
        t = (0, c.Z)(e),
        g = (0, i.Wu)([M.ZP], () => M.ZP.getChannels(e.id).SELECTABLE, [e]);
    if (__OVERLAY__ || !t) return null;
    let L = (t) => {
        d.Z.open(e.id, t), n.dispatch(N.CkL.POPOUT_CLOSE), (0, a.closeAllModals)();
    };
    return (0, s.jsx)(a.MenuItem, {
        id: 'guild-settings',
        label: S.Z.Messages.SERVER_SETTINGS,
        action: () => L(),
        children: (0, E.getGuildSettingsSections)(e, g).map((n) => {
            let { section: t, label: i } = n;
            if (null == i) return null;
            switch (t) {
                case N.pNK.DELETE:
                    return null;
                case N.pNK.COMMUNITY:
                    return (0, s.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            action: () => L(t),
                            label: S.Z.Messages.GUILD_SETTINGS_COMMUNITY
                        },
                        t
                    );
                case N.pNK.APP_DIRECTORY:
                    return (0, s.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            action: () => {
                                (0, o.goToAppDirectory)({
                                    guildId: e.id,
                                    entrypoint: { name: u.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU }
                                });
                            },
                            label: i
                        },
                        t
                    );
                case N.pNK.CLAN:
                    return (0, s.jsx)(a.MenuItem, {
                        id: 'guild-settings',
                        label: S.Z.Messages.CLAN_SETTINGS,
                        action: () =>
                            (0, _.q4)(
                                (n) => {
                                    let { closeLayer: t } = n;
                                    return (0, s.jsx)(r.Z, {
                                        onClose: t,
                                        guildId: e.id
                                    });
                                },
                                { layerKey: I.q2 }
                            )
                    });
                default:
                    return (0, s.jsx)(
                        a.MenuItem,
                        {
                            id: t,
                            action: () => L(t),
                            label: i
                        },
                        t
                    );
            }
        })
    });
}
