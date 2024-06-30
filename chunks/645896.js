n.d(t, {
    Cc: function () {
        return c;
    },
    E8: function () {
        return d;
    },
    L_: function () {
        return E;
    },
    _S: function () {
        return _;
    }
}), n(47120);
var r = n(470079), i = n(652874), a = n(143927), o = n(881052), s = n(931240);
let l = {}, u = (0, i.Z)((e, t) => ({
        clans: {},
        fetching: !1,
        error: null,
        fetchClanInfo: async n => {
            if (!!function (e) {
                    var t;
                    let n = Date.now(), r = null !== (t = l[e]) && void 0 !== t ? t : 0;
                    return n - r > 60000;
                }(n)) {
                l[n] = Date.now();
                try {
                    e({ fetching: !0 });
                    let r = await (0, s.WJ)(n), i = t().clans;
                    e({
                        clans: {
                            ...i,
                            [n]: r
                        },
                        error: null
                    });
                } catch (t) {
                    e({ error: new o.Hx(t) });
                } finally {
                    e({ fetching: !1 });
                }
            }
        }
    }));
function c(e) {
    return u(t => null != e ? t.clans[e] : null);
}
function d() {
    return u(e => e.fetching);
}
async function _(e) {
    if (null == e)
        return;
    let {
        fetching: t,
        fetchClanInfo: n
    } = u.getState();
    !t && await n(e);
}
function E(e) {
    let [t, n] = r.useState(!1), [i, o] = u(e => [
            e.fetchClanInfo,
            e.fetching
        ], a.Z);
    return [
        t,
        r.useCallback(async () => {
            if (!o && null != e)
                try {
                    n(!0), await i(e);
                } finally {
                    n(!1);
                }
        }, [
            e,
            o,
            i
        ])
    ];
}
