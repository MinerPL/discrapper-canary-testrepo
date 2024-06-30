let r;
n.d(t, {
    M3: function () {
        return _;
    },
    aD: function () {
        return u;
    },
    bF: function () {
        return d;
    },
    f0: function () {
        return c;
    }
});
var i = n(544891), a = n(314897), o = n(12647), s = n(865427);
let l = '/__development/build_overrides';
async function u(e) {
    try {
        var t;
        let n = await i.tn.put({
            url: (0, s.pU)(l),
            body: {
                overrides: e,
                version: s.Ji
            },
            headers: { Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : '' },
            oldFormErrors: !0
        });
        return await r(n), n;
    } catch (e) {
        return e;
    }
}
async function c(e) {
    try {
        let t = await i.tn.put({
            url: (0, s.pU)('/__development/link'),
            body: {
                payload: e,
                token: a.default.getToken(),
                version: s.Ji
            },
            oldFormErrors: !0
        });
        return await r(t), t;
    } catch (e) {
        return e;
    }
}
async function d() {
    let e = await i.tn.del({
        url: (0, s.pU)(l),
        oldFormErrors: !0
    });
    return await r(e), e;
}
function _(e) {
    var t;
    return i.tn.post({
        url: (0, s.pU)('/__development/create_build_override_link'),
        body: e,
        headers: { Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : '' },
        oldFormErrors: !0
    }).then(e => ({
        url: e.body.url,
        error: !1
    }), e => 400 === e.status ? {
        url: !1,
        error: e.body
    } : {
        url: !1,
        error: 'Error making API request ('.concat(e.status, ')')
    });
}
r = async e => {
    try {
        await o.Z.flushCookies();
    } catch (e) {
    }
};
