n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(168232),
    o = n(430824),
    l = n(594174),
    u = n(987338),
    c = n(48541);
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
let _ = 'production' === c.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === c.C.STAGING;
function E() {
    _ = (0, s.QI)(l.default.getCurrentUser());
}
class f extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.default, o.Z),
            Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => _,
                    set: () => {}
                }
            }),
            E(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return _
            ? {
                  type: 'developer',
                  name: 'discord_dev_testing',
                  revision: 1,
                  override: !0,
                  bucket: u.NZ.TREATMENT_1
              }
            : null;
    }
    constructor(...e) {
        super(...e), d(this, 'isDeveloper', !1);
    }
}
d(f, 'displayName', 'DeveloperExperimentStore'),
    (t.Z = new f(a.Z, {
        CONNECTION_OPEN: E,
        OVERLAY_INITIALIZE: E,
        CURRENT_USER_UPDATE: E
    }));
