n.d(t, {
    IE: function () {
        return u;
    },
    Og: function () {
        return d;
    },
    sm: function () {
        return c;
    }
});
var i = n(963202),
    a = n(703656),
    s = n(823379),
    r = n(49898),
    l = n(981631),
    o = n(689938);
function c(e) {
    switch (e) {
        case r.F$.SERVERS:
            return o.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
        case r.F$.APPS:
            return o.Z.Messages.GLOBAL_DISCOVERY_APPS_TITLE;
        case r.F$.QUESTS:
            return o.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
        default:
            (0, s.vE)(e);
    }
}
function d() {
    (0, i.rx)('discovery_history_util') && (0, a.uL)(l.Z5c.GLOBAL_DISCOVERY_SERVERS);
}
function u(e, t) {
    switch (e) {
        case '/discovery/quests':
            return r.F$.QUESTS;
        case '/discovery/applications':
            return t ? r.F$.APPS : r.D7;
        case '/discovery/servers':
            return r.F$.SERVERS;
        default:
            return r.D7;
    }
}
