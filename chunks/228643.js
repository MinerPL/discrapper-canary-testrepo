t.d(n, {
    L_: function () {
        return r;
    },
    nj: function () {
        return c;
    },
    sE: function () {
        return l;
    }
});
var a = t(544891), s = t(570140), o = t(480608), i = t(981631);
function l(e, n) {
    a.tn.get({ url: i.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n) }).then(e => {
        let t = [];
        e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
            connectionType: e.connection_type,
            connectionMetadataField: e.connection_metadata_field,
            applicationId: e.application_id,
            operator: e.operator,
            value: e.value
        })))), s.Z.dispatch({
            type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
            roleId: n,
            roleConnectionConfigurations: t
        });
    }).catch(() => {
    });
}
async function r(e, n, t) {
    let l = t.map(e => e.map(e => ({
            connection_type: e.connectionType,
            connection_metadata_field: e.connectionMetadataField,
            application_id: e.applicationId,
            operator: e.operator,
            value: e.value
        }))), r = await a.tn.put({
            url: i.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
            body: 0 === l.length ? [] : l,
            oldFormErrors: !0
        }).then(e => {
            let n = [];
            return e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
                connectionType: e.connection_type,
                connectionMetadataField: e.connection_metadata_field,
                applicationId: e.application_id,
                operator: e.operator,
                value: e.value
            })))), n;
        }), c = await (0, o.H)(e, n, !1);
    null != c && s.Z.dispatch({
        type: 'GUILD_ROLE_MEMBER_COUNT_UPDATE',
        guildId: e,
        roleId: n,
        count: c
    }), s.Z.dispatch({
        type: 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS',
        roleId: n,
        roleConnectionConfigurations: r
    });
}
async function c() {
    return (await a.tn.get({ url: i.ANM.APPLICATION_USER_ROLE_CONNECTIONS })).body;
}
