var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140);
let u = null,
    c = !1;
class d extends (s = o.ZP.Store) {
    getLastProgress() {
        return u;
    }
    isRunning() {
        return c;
    }
}
(a = 'DispatchApplicationLaunchSetupStore'),
    (i = 'displayName') in (r = d)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new d(l.Z, {
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            c = !0;
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function (e) {
            let { progress: t, total: n, name: r } = e;
            u = {
                progress: t,
                total: n,
                name: r
            };
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            (u = null), (c = !1);
        }
    }));
