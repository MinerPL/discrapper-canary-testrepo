var s,
    a,
    r,
    i,
    l = n(442837),
    o = n(570140);
let c = {},
    d = null;
function _() {
    (c = {}), (d = null);
}
class u extends (i = l.ZP.Store) {
    getEmailSettings() {
        return {
            categories: c,
            initialized: d
        };
    }
}
(r = 'EmailSettingsStore'),
    (a = 'displayName') in (s = u)
        ? Object.defineProperty(s, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = r),
    (t.Z = new u(o.Z, {
        CONNECTION_OPEN: _,
        LOGOUT: _,
        EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
            let { settings: t } = e;
            (c = t.categories), (d = t.initialized);
        },
        EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
            let { settings: t } = e;
            c = t.categories;
        },
        EMAIL_SETTINGS_UPDATE: function (e) {
            let { updates: t } = e;
            c = {
                ...c,
                ...t
            };
        }
    }));
