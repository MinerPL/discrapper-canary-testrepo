t.d(n, {
    L_: function () {
        return i;
    },
    nj: function () {
        return r;
    },
    sE: function () {
        return s;
    }
});
var c = t(544891),
    o = t(570140),
    a = t(480608),
    l = t(981631);
function s(e, n) {
    c.tn
        .get({ url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n) })
        .then((e) => {
            let t = [];
            e.body.length > 0 &&
                (t = e.body.map((e) =>
                    e.map((e) => ({
                        connectionType: e.connection_type,
                        connectionMetadataField: e.connection_metadata_field,
                        applicationId: e.application_id,
                        operator: e.operator,
                        value: e.value
                    }))
                )),
                o.Z.dispatch({
                    type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
                    roleId: n,
                    roleConnectionConfigurations: t
                });
        })
        .catch(() => {});
}
async function i(e, n, t) {
    let s = t.map((e) =>
            e.map((e) => ({
                connection_type: e.connectionType,
                connection_metadata_field: e.connectionMetadataField,
                application_id: e.applicationId,
                operator: e.operator,
                value: e.value
            }))
        ),
        i = await c.tn
            .put({
                url: l.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
                body: 0 === s.length ? [] : s,
                oldFormErrors: !0
            })
            .then((e) => {
                let n = [];
                return (
                    e.body.length > 0 &&
                        (n = e.body.map((e) =>
                            e.map((e) => ({
                                connectionType: e.connection_type,
                                connectionMetadataField: e.connection_metadata_field,
                                applicationId: e.application_id,
                                operator: e.operator,
                                value: e.value
                            }))
                        )),
                    n
                );
            }),
        r = await (0, a.H)(e, n, !1);
    null != r &&
        o.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_UPDATE',
            guildId: e,
            roleId: n,
            count: r
        }),
        o.Z.dispatch({
            type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
            roleId: n,
            roleConnectionConfigurations: i
        });
}
async function r() {
    return (await c.tn.get({ url: l.ANM.APPLICATION_USER_ROLE_CONNECTIONS })).body;
}
