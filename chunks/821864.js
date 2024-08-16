n.d(t, {
    I4: function () {
        return I;
    },
    Sn: function () {
        return s;
    },
    U3: function () {
        return O;
    },
    Ui: function () {
        return T;
    },
    W4: function () {
        return l;
    },
    gq: function () {
        return o;
    },
    kZ: function () {
        return u;
    }
});
var r = n(544891),
    a = n(570140),
    i = n(555573),
    E = n(581364),
    _ = n(981631);
function u() {
    a.Z.dispatch({ type: 'INTEGRATION_PERMISSION_SETTINGS_CLEAR' });
}
function l(e, t, n) {
    a.Z.dispatch({
        applicationId: e,
        commandId: t,
        permissions: n,
        type: 'INTEGRATION_PERMISSION_SETTINGS_EDIT'
    });
}
function s(e, t) {
    r.tn.get(_.ANM.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(
        (n) => {
            a.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS',
                applicationId: t,
                commands: n.body.application_commands,
                guildId: e,
                permissions: n.body.permissions
            });
        },
        () => {
            a.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE',
                applicationId: t
            });
        }
    );
}
async function o(e, t, n) {
    let i = [];
    try {
        let a = await r.tn.get(_.ANM.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
        a.ok && (i = a.body.permissions);
    } catch (r) {
        if (404 !== r.status) {
            a.Z.dispatch({
                type: 'INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE',
                applicationId: e,
                commandId: n,
                guildId: t
            });
            return;
        }
    }
    a.Z.dispatch({
        type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
        applicationId: e,
        commandId: n,
        guildId: t,
        permissions: i
    });
}
function I(e) {
    a.Z.dispatch({
        applicationId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_INIT'
    });
}
function T(e) {
    a.Z.dispatch({
        commandId: e,
        type: 'INTEGRATION_PERMISSION_SETTINGS_RESET'
    });
}
async function O(e) {
    let { applicationId: t, commandId: n, defaultEveryoneValue: r, defaultEverywhereValue: _, guildId: u, permissions: l } = e,
        s =
            n === t
                ? (function (e, t, n, r) {
                      if (!n || !r) return t;
                      let a = {
                          [e]: n,
                          [(0, E.bD)(e)]: r
                      };
                      return t.filter((e) => {
                          let t = a[e.id];
                          return null == t || e.permission !== t;
                      });
                  })(u, l, r, _)
                : l,
        o = await i.dh(t, u, n, s);
    o.ok &&
        a.Z.dispatch({
            type: 'INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE',
            applicationId: t,
            commandId: n,
            guildId: u,
            permissions: o.body.permissions
        });
}
