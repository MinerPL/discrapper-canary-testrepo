n.d(t, {
    RY: function () {
        return a;
    },
    Tb: function () {
        return l;
    },
    ec: function () {
        return o;
    },
    iD: function () {
        return r;
    }
}), n(47120);
var i = n(570140), s = n(830168);
function a(e) {
    s.Z.queryDirectory(e, (t, n) => {
        if (null == t && null != n)
            i.Z.dispatch({
                type: 'INSTALLATION_LOCATION_ADD',
                path: e,
                metadata: n
            });
    });
}
function r(e) {
    i.Z.dispatch({
        type: 'INSTALLATION_LOCATION_REMOVE',
        path: e
    });
}
function l(e, t) {
    let {
        label: n,
        isDefault: s
    } = t;
    i.Z.dispatch({
        type: 'INSTALLATION_LOCATION_UPDATE',
        path: e,
        label: n,
        isDefault: s
    });
}
function o(e) {
    let t = {}, n = 0;
    for (let a of e) {
        if (null != a && 'string' == typeof a)
            s.Z.queryDirectory(a, (s, r) => {
                ++n, null == s && null != r && (t[a] = r), n === e.length && i.Z.dispatch({
                    type: 'INSTALLATION_LOCATION_FETCH_METADATA',
                    metadataPayload: t
                });
            });
    }
}
