n.d(t, {
    O: function () {
        return r;
    }
}),
    n(789020);
var r,
    i,
    a,
    s = n(442837),
    o = n(570140),
    l = n(695346),
    u = n(630388),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _() {
    return {
        lastUsedObject: {},
        useActivityUrlOverride: !1,
        activityUrlOverride: null,
        filter: ''
    };
}
let E = _();
((a = r || (r = {})).INITIALIZED = 'INITIALIZED'), (a.LOADING = 'LOADING'), (a.LOADED = 'LOADED'), (a.ERROR = 'ERROR');
let f = 'INITIALIZED',
    h = [];
class p extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        E = {
            ..._(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return E;
    }
    getIsEnabled() {
        return l.Sb.getSetting() && h.length > 0;
    }
    getLastUsedObject() {
        return E.lastUsedObject;
    }
    getUseActivityUrlOverride() {
        return this.getIsEnabled() && E.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
        return this.getIsEnabled() ? E.activityUrlOverride : null;
    }
    getFetchState() {
        return f;
    }
    getFilter() {
        return this.getIsEnabled() ? E.filter : '';
    }
    getDeveloperShelfItems() {
        return this.getIsEnabled() ? h : [];
    }
    inDevModeForApplication(e) {
        return this.getIsEnabled() && null != h.find((t) => t.id === e);
    }
}
d(p, 'displayName', 'DeveloperActivityShelfStore'),
    d(p, 'persistKey', 'DeveloperActivityShelfStore'),
    d(p, 'migrations', [(e) => (delete e.isEnabled, { ...e })]),
    (t.Z = new p(o.Z, {
        LOGOUT: function () {
            (E = _()), (f = 'INITIALIZED'), (h = []);
        },
        DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function () {
            E.useActivityUrlOverride = !E.useActivityUrlOverride;
        },
        DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function (e) {
            let { activityUrlOverride: t } = e;
            E.activityUrlOverride = t;
        },
        DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function (e) {
            let { applicationId: t, timestamp: n } = e;
            if (null == h.find((e) => e.id === t)) return !1;
            E.lastUsedObject[t] = n;
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
            f = 'LOADING';
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function (e) {
            let { applications: t } = e;
            (f = 'LOADED'), (h = t.filter((e) => null != e.flags && (0, u.yE)(e.flags, c.udG.EMBEDDED)));
        },
        DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function (e) {
            let { type: t } = e;
            f = 'ERROR';
        },
        DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function (e) {
            let { filter: t } = e;
            E.filter = t;
        },
        USER_SETTINGS_PROTO_UPDATE() {}
    }));
