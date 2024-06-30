n.d(t, {
    I2: function () {
        return A;
    },
    RD: function () {
        return N;
    },
    mY: function () {
        return O;
    },
    pH: function () {
        return S;
    }
}), n(653041), n(47120), n(724458);
var r = n(470079), a = n(652874), i = n(143927), E = n(881052), _ = n(36459), u = n(866894), s = n(273504), l = n(981631);
let o = {}, I = e => {
        let t = {
            [s.fX.KEYWORD]: [],
            [s.fX.ML_SPAM]: [],
            [s.fX.DEFAULT_KEYWORD_LIST]: [],
            [s.fX.MENTION_SPAM]: [],
            [s.fX.USER_PROFILE]: [],
            [s.fX.SERVER_POLICY]: []
        };
        return e.forEach(e => {
            var n;
            let {triggerType: r} = e;
            null === (n = t[r]) || void 0 === n || n.push(e);
        }), t;
    }, T = (0, a.Z)((e, t) => ({
        rules: {},
        fetching: !1,
        error: null,
        updateRule: n => {
            var r, a;
            let {
                    guildId: i,
                    id: E,
                    triggerType: _
                } = n, {rules: s} = t(), l = null !== (r = s[i]) && void 0 !== r ? r : {}, o = null !== (a = l[_]) && void 0 !== a ? a : [], I = o.some(e => e.id === E), T = o.filter(e => (!(0, u.U)(e.id) || e.triggerType !== _) && !0), O = I ? T.map(e => e.id === E ? n : e) : [
                    ...T,
                    n
                ];
            e({
                rules: {
                    ...s,
                    [i]: {
                        ...l,
                        [_]: O
                    }
                },
                error: null
            });
        },
        removeRule: (n, r) => {
            let {rules: a} = t(), i = a[r], E = Object.keys(i).reduce((e, t) => {
                    var r;
                    let a = Number(t), E = null !== (r = i[a]) && void 0 !== r ? r : [];
                    return e[a] = E.filter(e => e.id !== n), e;
                }, i);
            e({
                rules: {
                    ...a,
                    [r]: E
                },
                error: null
            });
        },
        syncRules: async n => {
            if (!!function (e) {
                    var t;
                    let n = Date.now(), r = null !== (t = o[e]) && void 0 !== t ? t : 0;
                    return n - r > 20000;
                }(n)) {
                o[n] = Date.now();
                try {
                    let r = await (0, _.$Y)(n), a = I(r), i = t().rules;
                    e({
                        rules: {
                            ...i,
                            [n]: a
                        },
                        error: null
                    });
                } catch (t) {
                    e({ error: new E.Hx(t) });
                }
            }
        }
    })), O = (e, t) => {
        var n, r;
        return (null !== (r = null === (n = T.getState().rules[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : []).length;
    };
function A(e) {
    let [t, n] = r.useState(!1), [a, E] = T(e => [
            e.syncRules,
            e.fetching
        ], i.Z);
    return [
        t,
        r.useCallback(async () => {
            if (!E && null != e)
                try {
                    n(!0), await a(e);
                } finally {
                    n(!1);
                }
        }, [
            e,
            E,
            a
        ])
    ];
}
function N(e) {
    let [t, n] = A(e);
    return r.useEffect(() => {
        (async () => {
            await n();
        })();
    }, [
        e,
        n
    ]), [
        t,
        n
    ];
}
function S(e) {
    return T(t => {
        var n;
        return {
            rulesByTriggerType: null !== (n = t.rules[null != e ? e : l.lds]) && void 0 !== n ? n : {},
            updateRule: t.updateRule,
            removeRule: t.removeRule
        };
    });
}
