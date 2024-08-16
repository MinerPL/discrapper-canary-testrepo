n.d(t, {
    Aj: function () {
        return o;
    },
    S1: function () {
        return u;
    },
    d$: function () {
        return l;
    },
    hw: function () {
        return c;
    },
    kU: function () {
        return d;
    },
    kY: function () {
        return s;
    }
});
var r = n(570140),
    i = n(156699),
    a = n(493683);
async function s(e, t, n, a) {
    let s = e.getGuildId();
    if (null != s && t === s && !(await (0, i.u)(e, a, n))) return !1;
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION',
        id: t,
        allow: n,
        deny: a
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION',
        id: e
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE',
        advancedMode: e
    });
}
function u() {
    r.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_INIT' });
}
function c(e, t, n) {
    return d(e, t, [], n);
}
function d(e, t, n, i) {
    return (
        r.Z.dispatch({ type: 'CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING' }),
        new Promise((r) => {
            let i = () => {
                if (0 === t.length && 0 === n.length) return r();
                if (t.length > 0) {
                    let n = t.pop();
                    if (null == n) return i();
                    a.Z.updatePermissionOverwrite(e, n).then(i, i);
                } else {
                    let t = n.pop();
                    if (null == t) return i();
                    a.Z.clearPermissionOverwrite(e, t).then(i, i);
                }
            };
            i();
        }).then(() => {
            r.Z.dispatch({
                type: 'CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS',
                silent: i
            });
        })
    );
}
