var r = n(544891),
    i = n(626135);
function a(e, t, n) {
    let { trackedActionData: r, ...a } = t,
        s = {
            url: a.url,
            request_method: n
        };
    return new Promise((t, n) => {
        e(a)
            .then((e) => {
                let n = r.properties;
                'function' == typeof r.properties && (n = r.properties(e)),
                    (0, i.trackNetworkAction)(r.event, {
                        status_code: e.status,
                        ...s,
                        ...n
                    }),
                    t(e);
            })
            .catch((e) => {
                var t, a;
                let o = r.properties;
                'function' == typeof r.properties && (o = r.properties(e)),
                    (0, i.trackNetworkAction)(r.event, {
                        status_code: e.status,
                        error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                        error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                        ...s,
                        ...o
                    }),
                    n(e);
            });
    });
}
t.Z = {
    get: function (e) {
        return a(r.tn.get, e, 'get');
    },
    post: function (e) {
        return a(r.tn.post, e, 'post');
    },
    put: function (e) {
        return a(r.tn.put, e, 'put');
    },
    patch: function (e) {
        return a(r.tn.patch, e, 'patch');
    },
    delete: function (e) {
        return a(r.tn.del, e, 'del');
    }
};
