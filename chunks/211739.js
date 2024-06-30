t.d(n, {
    N5: function () {
        return u;
    },
    c4: function () {
        return a;
    },
    lc: function () {
        return r;
    },
    mJ: function () {
        return s;
    }
});
var i = t(570140);
function a(e) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE',
        id: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND',
        id: e
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'CATEGORY_COLLAPSE_ALL',
        guildId: e
    });
}
function r(e) {
    i.Z.dispatch({
        type: 'CATEGORY_EXPAND_ALL',
        guildId: e
    });
}
