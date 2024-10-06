n.d(t, {
    $X: function () {
        return d;
    },
    HV: function () {
        return c;
    },
    RI: function () {
        return s;
    },
    k5: function () {
        return o;
    },
    kR: function () {
        return i;
    },
    zY: function () {
        return l;
    }
});
var a = n(626135),
    r = n(981631);
function s(e) {
    let { selectedTab: t } = e;
    a.default.track(r.rMx.GLOBAL_DISCOVERY_VIEWED, { selected_tab: t });
}
function i(e) {
    let { selectedCategoryId: t } = e;
    a.default.track(r.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, { selected_category_id: t });
}
function o(e) {
    let { source: t } = e;
    a.default.track(r.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, { source: t });
}
function c(e) {
    let { gameId: t, source: n } = e;
    a.default.track(r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_VIEWED, {
        game_id: t,
        source: n
    });
}
function l(e) {
    let { gameId: t } = e;
    a.default.track(r.rMx.GUILD_GAME_DISCOVERY_ENTRYPOINT_DEEP_LINK_TO_DESKTOP, { game_id: t });
}
function d(e) {
    let { gameId: t } = e;
    a.default.track(r.rMx.GLOBAL_DISCOVERY_WITH_GAME_VIEWED, { game_id: t });
}
