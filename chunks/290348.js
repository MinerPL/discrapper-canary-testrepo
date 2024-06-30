t.d(n, {
    B7: function () {
        return $;
    },
    Ek: function () {
        return x;
    },
    F2: function () {
        return V;
    },
    GM: function () {
        return J;
    },
    GP: function () {
        return G;
    },
    H9: function () {
        return z;
    },
    Lo: function () {
        return K;
    },
    PK: function () {
        return Z;
    },
    R7: function () {
        return B;
    },
    TT: function () {
        return W;
    },
    UE: function () {
        return w;
    },
    XZ: function () {
        return H;
    },
    Xo: function () {
        return Q;
    },
    _T: function () {
        return M;
    },
    d9: function () {
        return D;
    },
    mR: function () {
        return O;
    },
    p9: function () {
        return P;
    },
    qs: function () {
        return U;
    },
    rU: function () {
        return Y;
    }
}), t(47120);
var r = t(470079), i = t(512722), o = t.n(i), l = t(392711), u = t(772848), s = t(866442), a = t(442837), c = t(80932), d = t(749210), _ = t(339085), f = t(73346), E = t(817460), I = t(423117), g = t(584825), p = t(289393), C = t(790285), T = t(303737), S = t(971792), m = t(22902), h = t(403474), N = t(944537), A = t(293810), v = t(981631), R = t(474936);
function L(e, n, t) {
    let i = (0, N.n)(e => e.setListing), o = r.useCallback(r => {
            i(e, e => {
                var i;
                let o = null !== (i = null == e ? void 0 : e[n]) && void 0 !== i ? i : t;
                return Object.assign({}, e, { [n]: 'function' == typeof r ? r(o) : r });
            });
        }, [
            i,
            e,
            n,
            t
        ]), l = (0, N.n)(t => {
            var r;
            return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
        });
    return [
        void 0 !== l ? l : t,
        o
    ];
}
function b(e, n) {
    let t = (0, a.e7)([p.Z], () => p.Z.getSubscriptionListing(e));
    return r.useMemo(() => n(t), [t]);
}
function M(e) {
    let n = b(e, e => {
        var n;
        return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
    });
    return L(e, 'name', n);
}
function O(e) {
    let n = b(e, e => {
        var n;
        return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return L(e, 'priceTier', n);
}
function Z(e) {
    let n = b(e, e => {
        var n;
        return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
    });
    return L(e, 'description', n);
}
function D(e, n) {
    let t = b(e, e => {
        if ((null == e ? void 0 : e.image_asset) != null)
            return (0, f._W)(e.application_id, e.image_asset, n);
    });
    return L(e, 'image', t);
}
function P(e, n) {
    let t = (0, S.Z)(n, e);
    return L(e, 'roleIcon', r.useMemo(() => {
        var e, n;
        return {
            icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
            unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
        };
    }, [t]));
}
function U(e, n) {
    let t = (0, S.Z)(n, e), i = (0, N.n)(n => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
        }), o = (0, N.n)(n => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
        });
    return r.useMemo(() => {
        let e = { ...null != t ? t : h.k };
        if (void 0 !== o) {
            var n, r;
            e.icon = null !== (n = o.icon) && void 0 !== n ? n : '', e.unicodeEmoji = null !== (r = o.unicodeEmoji) && void 0 !== r ? r : '';
        }
        return void 0 !== i && (e.color = i, e.colorString = (0, s.Rf)(i)), e;
    }, [
        t,
        o,
        i
    ]);
}
function x(e, n) {
    let t = (0, S.Z)(n, e);
    return L(e, 'roleColor', r.useMemo(() => {
        var e;
        return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : v.p6O;
    }, [t]));
}
function G(e, n) {
    let t = (0, S.Z)(n, e);
    return L(e, 'channelAccessFormat', r.useMemo(() => null == t ? N.I.SOME_CHANNELS_ACCESS : (0, C.MT)(t) ? N.I.ALL_CHANNELS_ACCESS : N.I.SOME_CHANNELS_ACCESS, [t]));
}
let y = [];
function w(e) {
    let n = b(e, e => null == e ? y : e.role_benefits.benefits.filter(E.rC));
    return L(e, 'channelBenefits', n);
}
let j = [];
function B(e) {
    let n = b(e, e => null == e ? j : e.role_benefits.benefits.filter(E.lL));
    return L(e, 'intangibleBenefits', n);
}
let F = new Set();
function k(e, n) {
    return 0 === e.length ? F : new Set(e.filter(e => e.roles.includes(n)).map(e => {
        let {id: n} = e;
        return n;
    }));
}
function H(e, n) {
    let t = (0, S.Z)(n, e), i = (0, a.Wu)([_.Z], () => _.Z.getGuildEmoji(n), [n]);
    return L(e, 'tierEmojiIds', r.useMemo(() => null == t ? F : k(i, t.id), [
        i,
        t
    ]));
}
function W(e) {
    var n;
    let t = (0, g.oC)(e), {selectedOption: r} = (0, m.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
    return L(e, 'trialInterval', null != r ? r : null);
}
function V(e) {
    var n;
    let t = (0, g.oC)(e);
    return L(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function Y(e) {
    return (0, N.n)(n => void 0 !== n.listings[e]);
}
function K(e) {
    return (0, N.n)(n => {
        for (let t of e)
            if (void 0 !== n.listings[t])
                return !0;
        return !1;
    });
}
function z(e) {
    let n = b(e, e => null == e ? void 0 : e.subscription_plans[0]), [t] = L(e, 'priceTier', void 0);
    return [r.useMemo(() => {
            var e, r, i, o, l;
            return {
                price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
                currency: null !== (r = null == n ? void 0 : n.currency) && void 0 !== r ? r : v.pKx.USD,
                interval: null !== (i = null == n ? void 0 : n.interval) && void 0 !== i ? i : R.rV.MONTH,
                interval_count: null !== (o = null == n ? void 0 : n.interval_count) && void 0 !== o ? o : 1,
                id: null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : ''
            };
        }, [
            n,
            t
        ])];
}
function J(e) {
    var n;
    n = e, N.n.setState(e => ({
        listings: {
            ...e.listings,
            [n]: e.listings.nonexistantEditStateId
        }
    }));
}
async function q(e) {
    let {
            guildId: n,
            editStateId: t
        } = e, r = p.Z.getSubscriptionListing(t);
    o()(null != r, 'listing doesnt exist');
    let i = r.role_id, u = r.id, s = N.n.getState().listings[t];
    o()(null != s, 'edit state does not exist');
    let {
        roleColor: a,
        roleIcon: f,
        trialLimit: E,
        trialInterval: g,
        tierEmojiIds: C
    } = s;
    (void 0 !== a || void 0 !== f) && await d.Z.updateRole(n, i, {
        color: a,
        icon: null == f ? void 0 : f.icon,
        unicodeEmoji: null == f ? void 0 : f.unicodeEmoji
    });
    let T = p.Z.getSubscriptionTrial(u);
    if ((null != E || null != g || null != T && null == g) && await I.I1(n, u, {
            trial: g,
            max_num_active_trial_users: E
        }), void 0 !== C) {
        let e = k(_.Z.getGuildEmoji(n), i), t = (0, l.difference)([...C], [...e]), r = (0, l.difference)([...e], [...C]), o = t.map(e => _.Z.getCustomEmojiById(e)).map(e => {
                if (null != e)
                    return (0, c.dv)({
                        guildId: n,
                        emojiId: e.id,
                        roles: [
                            ...e.roles,
                            i
                        ]
                    });
            }), u = r.map(e => _.Z.getCustomEmojiById(e)).map(e => {
                if (null == e)
                    return;
                let t = e.roles.filter(e => e !== i);
                return t.length > 0 ? (0, c.dv)({
                    guildId: n,
                    emojiId: e.id,
                    roles: t
                }) : (0, c.RE)(n, e.id);
            });
        await Promise.all([
            ...o,
            ...u
        ]);
    }
}
async function X(e) {
    let {
            guildId: n,
            editStateId: t,
            groupListingId: r,
            onBeforeDispatchNewListing: i
        } = e, l = N.n.getState().listings[t];
    o()(null != l, 'edit state does not exist');
    let {
        name: u,
        description: s,
        channelBenefits: a,
        intangibleBenefits: c,
        priceTier: d,
        image: _,
        channelAccessFormat: f
    } = l;
    o()(null != u, 'no name provided'), o()(null != s, 'no description provided'), o()(null != d, 'no priceTier provided'), o()(null != _, 'no image provided');
    let E = f === N.I.ALL_CHANNELS_ACCESS, g = r;
    null == g && (g = (await I.uw(n, {})).id), null != a && a.length > 0 && await (0, T.r4)(n, a);
    let p = [
            ...null != a ? a : [],
            ...null != c ? c : []
        ], C = (0, T.yL)(t, n);
    return I.dA({
        guildId: n,
        groupListingId: g,
        data: {
            can_access_all_channels: E,
            image: _,
            name: u,
            description: s,
            benefits: p,
            priceTier: d
        },
        analyticsContext: C,
        onBeforeDispatchNewListing: i
    });
}
function Q() {
    let [e, n] = r.useState(!1), [t, i] = r.useState();
    return {
        loading: e,
        error: t,
        handleCreateOrUpdateFromEditState: r.useCallback(async e => {
            let {
                    guildId: t,
                    editStateId: r,
                    groupListingId: u,
                    onBeforeDispatchNewListing: s,
                    onAfterDispatchNewListing: a
                } = e, c = r, d = p.Z.getSubscriptionListing(c);
            try {
                if (n(!0), i(void 0), null != d)
                    o()(null != u, 'groupListingId is null'), await function (e) {
                        var n;
                        let {
                                guildId: t,
                                editStateId: r,
                                groupListingId: i
                            } = e, u = p.Z.getSubscriptionListing(r);
                        o()(null != u, 'listing doesnt exist');
                        let s = N.n.getState().listings[r];
                        o()(null != s, 'edit state does not exist');
                        let {
                                name: a,
                                description: c,
                                channelBenefits: d,
                                intangibleBenefits: _,
                                priceTier: f,
                                image: g,
                                channelAccessFormat: C
                            } = s, T = {};
                        if (a !== u.name && (T.name = a), c !== u.description && (T.description = c), f !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (T.priceTier = f), null != g && (T.image = g), null != C && (T.can_access_all_channels = C === N.I.ALL_CHANNELS_ACCESS), null != d || null != _) {
                            let e = u.role_benefits.benefits.filter(E.rC), n = u.role_benefits.benefits.filter(E.lL), t = [
                                    ...null != d ? d : e,
                                    ...null != _ ? _ : n
                                ];
                            T.benefits = t;
                        }
                        return (0, l.isEmpty)(T) ? u : I.O0({
                            guildId: t,
                            groupListingId: i,
                            listingId: r,
                            data: T
                        });
                    }({
                        guildId: t,
                        editStateId: c,
                        groupListingId: u
                    });
                else {
                    var _, f;
                    let e = await X({
                        guildId: t,
                        editStateId: c,
                        groupListingId: u,
                        onBeforeDispatchNewListing: s
                    });
                    c = e.id, _ = r, f = c, N.n.setState(e => ({
                        listings: {
                            ...e.listings,
                            [f]: e.listings[_],
                            [_]: void 0
                        }
                    })), null == a || a(e);
                }
                return await q({
                    guildId: t,
                    editStateId: c
                }), J(c), !0;
            } catch (e) {
                if (!('getAnyErrorMessage' in e))
                    throw e;
                i(e);
            } finally {
                n(!1);
            }
        }, [])
    };
}
function $(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 }, i = (0, g._k)(e, t), o = (0, N.n)(e => e.editStateIdsForGroup[n]), l = (0, N.n)(e => e.setEditStateIdsForGroup), s = (0, N.n)(e => e.setListing), a = r.useMemo(() => [
            ...i.map(e => {
                let {id: n} = e;
                return n;
            }),
            ...null != o ? o : []
        ], [
            o,
            i
        ]), c = r.useCallback(() => {
            let e = (0, u.Z)();
            l(n, n => [
                ...null != n ? n : [],
                e
            ]);
        }, [
            n,
            l
        ]), d = r.useCallback(e => {
            let t = (0, u.Z)();
            return l(n, e => [
                ...null != e ? e : [],
                t
            ]), e.listings.forEach(n => {
                s(t, () => ({
                    name: n.name,
                    description: n.description,
                    priceTier: n.price_tier,
                    image: n.image,
                    intangibleBenefits: n.additional_perks,
                    channelBenefits: n.channels.map(e => ({
                        ref_id: e.id,
                        ref_type: A.Qs.CHANNEL,
                        description: e.description,
                        name: e.name,
                        emoji_name: e.emoji_name
                    })),
                    roleIcon: {
                        unicodeEmoji: void 0,
                        icon: n.image
                    },
                    roleColor: n.role_color,
                    usedTemplate: e.category
                }));
            }), t;
        }, [
            n,
            l,
            s
        ]);
    return {
        editStateIds: a,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: r.useCallback(e => {
            l(n, n => (null != n ? n : []).filter(n => n !== e));
        }, [
            n,
            l
        ])
    };
}
