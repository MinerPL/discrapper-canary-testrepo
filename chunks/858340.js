var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(981631);
let c = {};
class d extends (s = o.ZP.Store) {
    getHookError(e) {
        return c[e];
    }
}
(a = 'HookErrorStore'),
    (i = 'displayName') in (r = d)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new d(l.Z, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function () {
            c = {};
        },
        MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function () {
            delete c[u.K3D.SOUND];
        },
        MEDIA_ENGINE_SOUNDSHARE_FAILED: function (e) {
            let { errorMessage: t, errorCode: n } = e;
            c[u.K3D.SOUND] = {
                errorMessage: t,
                errorCode: n
            };
        }
    }));
