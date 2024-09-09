n.d(t, {
    Gg: function () {
        return d;
    },
    Hg: function () {
        return E;
    },
    fr: function () {
        return c;
    }
});
var r = n(772848),
    i = n(433517);
let a = 'LATEST_SESSION_TIMESTAMP',
    s = 'LATEST_SESSION_UUID',
    o = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    l = Promise.resolve(),
    u = !1;
function c(e) {
    u = e;
}
function d() {
    return (l = l.then(async () => {
        let e = await _();
        if (
            null == e ||
            (function (e) {
                return 1800000 + e.lastUsed - Date.now() <= 0;
            })(e)
        ) {
            if (!u) return null;
            let t = {
                uuid: (0, r.Z)(),
                initialized: Date.now(),
                lastUsed: Date.now()
            };
            i.K.set(s, t.uuid), i.K.set(o, t.initialized.toString()), i.K.set(a, Date.now().toString()), (e = t);
        } else u && i.K.set(a, Date.now().toString());
        return e;
    }));
}
async function _() {
    let e = await i.K.getAfterRefresh(s),
        t = await i.K.getAfterRefresh(o).then(E),
        n = await i.K.getAfterRefresh(a).then(E);
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
function E(e) {
    return null != e ? Number(e) : 0;
}
