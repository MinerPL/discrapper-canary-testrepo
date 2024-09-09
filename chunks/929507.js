t(47120);
var a = t(470079),
    r = t(399606),
    i = t(544891),
    s = t(570140),
    o = t(367907),
    l = t(430824),
    c = t(496675),
    d = t(626135),
    u = t(70956),
    m = t(997787),
    _ = t(981631);
let f = 1 * u.Z.Millis.DAY,
    C = new Map();
n.Z = {
    useShouldShowChannelNotice(e) {
        let n = (0, r.e7)([l.Z, c.Z], () => {
            let n = l.Z.getGuild(e);
            return null != n && c.Z.can(_.Plq.ADMINISTRATOR, n);
        });
        a.useEffect(() => {
            n &&
                !(function (e) {
                    var n;
                    let t = Date.now(),
                        a = null !== (n = C.get(e)) && void 0 !== n ? n : 0;
                    if (!(t < a + f))
                        C.set(e, t),
                            i.tn.post({ url: _.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e) }).then(
                                (n) => {
                                    var t, a;
                                    s.Z.dispatch({
                                        type: 'COMMANDS_MIGRATION_UPDATE_SUCCESS',
                                        guildId: e,
                                        integrationIdsWithAppCommands: null !== (a = null === (t = n.body) || void 0 === t ? void 0 : t.integration_ids_with_app_commands) && void 0 !== a ? a : []
                                    });
                                },
                                () => {
                                    C.set(e, a);
                                }
                            );
                })(e);
        }, [e, n]);
        let t = (0, r.e7)([m.Z], () => m.Z.shouldShowChannelNotice(e));
        return n && t;
    },
    dismissNotice(e) {
        s.Z.dispatch({
            type: 'COMMANDS_MIGRATION_NOTICE_DISMISSED',
            guildId: e
        });
    },
    dismissOverviewTooltip(e, n) {
        var t;
        s.Z.dispatch({
            type: 'COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED',
            guildId: e,
            integrationId: n.id
        }),
            d.default.track(_.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                ...(0, o.hH)(e),
                application_id: null === (t = n.application) || void 0 === t ? void 0 : t.id,
                location: 'overview'
            });
    },
    dismissToggleTooltip(e, n) {
        var t;
        if (void 0 !== n)
            s.Z.dispatch({
                type: 'COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED',
                integrationId: n.id
            }),
                d.default.track(_.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
                    ...(0, o.hH)(e),
                    application_id: null === (t = n.application) || void 0 === t ? void 0 : t.id,
                    location: 'toggle'
                });
    }
};
