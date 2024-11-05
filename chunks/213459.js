n.d(t, {
    FN: function () {
        return q;
    },
    If: function () {
        return em;
    },
    JK: function () {
        return ei;
    },
    LD: function () {
        return en;
    },
    PL: function () {
        return er;
    },
    em: function () {
        return et;
    },
    un: function () {
        return ep;
    },
    v1: function () {
        return es;
    }
}),
    n(47120),
    n(653041),
    n(390547),
    n(789020);
var r,
    i,
    a,
    s = n(192379),
    o = n(512722),
    l = n.n(o),
    u = n(259443),
    c = n(442837),
    d = n(570140),
    f = n(749210),
    _ = n(911969),
    h = n(822245),
    p = n(399860),
    m = n(706454),
    g = n(675478),
    E = n(314897),
    v = n(592125),
    I = n(430824),
    S = n(594174),
    T = n(626135),
    b = n(254711),
    y = n(700089),
    A = n(654455),
    N = n(963456),
    C = n(367790),
    R = n(895924),
    O = n(581364),
    D = n(807169),
    L = n(104793),
    x = n(689079),
    w = n(981631);
function M(e, t, n) {
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
let P = new u.Y('ApplicationCommandIndexStore'),
    k = Symbol('currentUser'),
    U = Symbol('stale'),
    G = Symbol('current'),
    B = Object.freeze({
        descriptors: [],
        commands: [],
        sectionedCommands: [],
        loading: !0
    }),
    Z = Object.freeze({
        serverVersion: G,
        fetchState: { fetching: !1 },
        result: {
            sections: {},
            sectionIdsByBotId: {},
            version: G
        }
    }),
    F = Object.freeze({
        serverVersion: U,
        fetchState: { fetching: !1 }
    }),
    V = {
        sensitivity: 'accent',
        numeric: !0
    },
    j = !1,
    H = [];
function Y(e) {
    switch (e.type) {
        case 'guild':
            return e.guildId;
        case 'channel':
            return e.channelId;
        case 'user':
            return k;
        case 'application':
            return e.applicationId;
    }
}
function W(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = Y(e),
        a = ee.indices[i];
    return (
        null != a
            ? ('fetchState' in t && a.fetchState.fetching && a.fetchState.abort.abort(),
              (n = {
                  ...a,
                  ...t
              }))
            : r &&
              (n = {
                  serverVersion: U,
                  fetchState: { fetching: !1 },
                  ...t
              }),
        void 0 !== n && ((ee.indices[i] = n), 'application' === e.type && (ee.applicationIndices.set(i, n), (ee.applicationIndicesVersion = ee.applicationIndicesVersion + 1))),
        a
    );
}
function K(e) {
    let t = Y(e),
        n = ee.indices[t];
    (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete ee.indices[t];
}
function z() {
    for (let e of Object.values(ee.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
    ee.indices = {};
}
async function q(e) {
    var t, n;
    let r = Y(e),
        i = null !== (t = ee.indices[r]) && void 0 !== t ? t : F;
    return ec(i) ? (await Q(e), null !== (n = ee.indices[r]) && void 0 !== n ? n : F) : i;
}
async function Q(e) {
    let t = new AbortController();
    W(
        e,
        {
            fetchState: {
                fetching: !0,
                abort: t
            }
        },
        !0
    ),
        await (0, N.a)(e, t);
}
function X(e) {
    var t, n;
    let { target: r, index: i } = e,
        a = null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == a) return !j && H.push(e), !1;
    let s = {},
        o = {},
        l = new Set();
    for (let e of i.applications) {
        if (null == e.bot && null != e.bot_id) {
            o[e.bot_id] = e.id;
            let t = S.default.getUser(e.bot_id);
            null != t ? (e.bot = t) : l.add(e.bot_id);
        } else null != e.bot && (o[e.bot.id] = e.id);
        let t = {
            descriptor: {
                ...(0, O.X0)(
                    (function (e) {
                        return {
                            description: e.description,
                            icon: e.icon,
                            id: e.id,
                            name: e.name,
                            bot: e.bot,
                            flags: e.flags
                        };
                    })(e)
                ),
                permissions: null != e.permissions ? (0, p.tk)(e_(e.permissions, a)) : void 0,
                botId: e.bot_id
            },
            commands: {}
        };
        s[e.id] = t;
    }
    for (let e of ('guild' === r.type && l.size > 0 && f.Z.requestMembersById(r.guildId, [...l]),
    (0, O.nG)(
        i.application_commands.map((e) =>
            (function (e, t) {
                var n, r, i, a, s;
                let o = {
                    ...e,
                    description: null !== (i = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== i ? i : '',
                    dm_permission: e.dm_permission,
                    name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                    options: null !== (s = null === (n = e.options) || void 0 === n ? void 0 : n.map(ed)) && void 0 !== s ? s : [],
                    permissions: null != e.permissions ? e_(e.permissions, t) : void 0
                };
                return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o;
            })(e, a)
        ),
        !0
    ))) {
        let t = s[e.applicationId];
        if (null == t) {
            P.error('Command has no matching application');
            continue;
        }
        t.commands[e.id] = e;
    }
    let u = null !== (n = i.version) && void 0 !== n ? n : G;
    W(r, {
        serverVersion: u,
        result: {
            sections: s,
            sectionIdsByBotId: o,
            version: u
        },
        fetchState: { fetching: !1 }
    });
}
function J() {
    W({ type: 'user' }, { serverVersion: U });
}
class $ extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(m.default),
            this.waitFor(E.default),
            this.syncWith([m.default], () => {
                !(function () {
                    let e = m.default.locale;
                    e !== ee.oldLocale &&
                        (z(),
                        (ee.collator = new Intl.Collator(e, {
                            sensitivity: 'accent',
                            numeric: !0
                        })),
                        (ee.oldLocale = e));
                })();
            });
    }
    getContextState(e) {
        var t, n;
        return null != e && eu(e) ? (null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : F) : Z;
    }
    hasContextStateApplication(e, t, n) {
        var r, i;
        let a = this.indices[null != n ? n : t];
        return e in (null !== (i = null == a ? void 0 : null === (r = a.result) || void 0 === r ? void 0 : r.sections) && void 0 !== i ? i : {});
    }
    getGuildState(e) {
        var t;
        return null == e ? Z : null !== (t = this.indices[e]) && void 0 !== t ? t : F;
    }
    getUserState() {
        var e;
        return null !== (e = this.indices[k]) && void 0 !== e ? e : F;
    }
    hasUserStateApplication(e) {
        var t, n;
        let r = this.indices[k];
        return e in (null !== (n = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sections) && void 0 !== n ? n : {});
    }
    getApplicationState(e) {
        var t;
        return null == e ? Z : null !== (t = this.indices[e]) && void 0 !== t ? t : F;
    }
    getApplicationStates() {
        return this.applicationIndices;
    }
    hasApplicationState(e) {
        return e in this.indices;
    }
    query(e, t, n) {
        if (null == S.default.getCurrentUser()) return B;
        let r = this.getContextState(e),
            i = this.getUserState(),
            a = this.getApplicationState(n.applicationId),
            s = this.getApplicationStates(),
            o = (0, D.k)(e, t.commandTypes),
            l = null == e || (null == o ? void 0 : o.hasBaseAccessPermissions) === !0,
            u = !1 !== t.applicationCommands,
            c = !1;
        n.allowFetch &&
            (u &&
                l &&
                null != e &&
                eu(e) &&
                (T.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(ee.indices).length
                }),
                ec(r) &&
                    null != e &&
                    (null != e.guild_id
                        ? (0, N.j)({
                              type: 'guild',
                              guildId: e.guild_id
                          })
                        : (0, N.j)({
                              type: 'channel',
                              channelId: e.id
                          }),
                    (c = !0))),
            ec(i) && ((0, N.j)({ type: 'user' }), (c = !0)),
            ec(a) &&
                null != n.applicationId &&
                ((0, N.j)({
                    type: 'application',
                    applicationId: n.applicationId
                }),
                (c = !0)));
        let d = eo({
            permissionContext: o,
            text: t.text,
            allowApplicationCommands: u,
            builtIns: t.builtIns,
            scoreMethod: n.scoreMethod,
            allowEmptySections: n.allowEmptySections,
            contextState: r,
            userState: i,
            applicationStates: n.allowApplicationState ? s : new Map(),
            sortOptions: n.sortOptions,
            singleApplicationId: n.applicationId,
            installOnDemand: n.installOnDemand
        });
        return (d.loading = d.loading || c), d;
    }
    queryInstallOnDemandApp(e, t) {
        let n = v.Z.getChannel(t);
        null != n &&
            this.query(
                n,
                { commandTypes: [_.yU.CHAT] },
                {
                    placeholderCount: 5,
                    scoreMethod: C.p.COMMAND_ONLY,
                    applicationId: e,
                    allowFetch: !0
                }
            );
    }
    constructor(...e) {
        super(...e), M(this, 'indices', {}), M(this, 'applicationIndices', new Map()), M(this, 'applicationIndicesVersion', 0), M(this, 'oldLocale', m.default.locale), M(this, 'collator', new Intl.Collator(m.default.locale, V));
    }
}
M($, 'displayName', 'ApplicationCommandIndexStore');
let ee = new $(d.Z, {
    LOGOUT: z,
    CONNECTION_OPEN: function () {
        for (let e of Object.values(ee.indices)) e.serverVersion = U;
        !(function () {
            for (let e of H) X(e);
            H = [];
        })(),
            (j = !0);
    },
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function (e) {
        var t;
        let { target: n } = e,
            r = Y(n);
        ec(null !== (t = ee.indices[r]) && void 0 !== t ? t : F) && Q(n);
    },
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: X,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function (e) {
        let { target: t } = e;
        W(t, {
            fetchState: {
                fetching: !1,
                retryAfter: Date.now() + 5000
            }
        });
    },
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function (e) {
        let { applicationId: t, channelId: n, guildId: r } = e;
        ee.hasContextStateApplication(t, n, r) &&
            W(
                null != r
                    ? {
                          type: 'guild',
                          guildId: r
                      }
                    : {
                          type: 'channel',
                          channelId: n
                      },
                { serverVersion: U }
            ),
            ee.hasUserStateApplication(t) && W({ type: 'user' }, { serverVersion: U }),
            ee.hasApplicationState(t) &&
                W(
                    {
                        type: 'application',
                        applicationId: t
                    },
                    { serverVersion: U }
                );
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        K({
            type: 'channel',
            channelId: t.id
        });
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        K({
            type: 'guild',
            guildId: t.id
        });
    },
    USER_APPLICATION_UPDATE: J,
    USER_APPLICATION_REMOVE: J,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function (e) {
        var t;
        let { guildId: n, version: r } = e,
            i = W(
                {
                    type: 'guild',
                    guildId: n
                },
                { serverVersion: null != r ? r : U }
            ),
            a = null == i ? void 0 : null === (t = i.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
        if (null != a)
            for (let e in a) {
                let t = v.Z.getDMFromUserId(e);
                null != t &&
                    W(
                        {
                            type: 'channel',
                            channelId: t
                        },
                        { serverVersion: U }
                    );
            }
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t)
            n =
                (function (e, t) {
                    var n;
                    let r = Y({
                            type: 'guild',
                            guildId: e
                        }),
                        i = null === (n = ee.indices[r]) || void 0 === n ? void 0 : n.result;
                    if (null == i) return !1;
                    let a = !1;
                    return (
                        t.forEach((e) => {
                            let { user: t } = e;
                            if (!t.bot) return;
                            let n = i.sectionIdsByBotId[t.id];
                            if (null == n) return;
                            let r = i.sections[n];
                            l()(null != r, 'Bot has no matching index section'), l()(null != r.descriptor.application, "Bot's index section has no application info");
                            let s = (0, O.X0)({
                                ...r.descriptor.application,
                                bot: t
                            });
                            (r.descriptor = {
                                ...r.descriptor,
                                ...s
                            }),
                                (a = !0);
                        }),
                        a
                    );
                })(e.guildId, e.members) || n;
        return n;
    }
});
function et(e, t, n) {
    let [r, i] = s.useState(!0),
        a = (0, c.cj)([ee], () => (null != e ? ee.getContextState(e) : ee.getUserState()));
    return (
        s.useEffect(() => {
            if (r) {
                if (null == e) {
                    n && ec(a) && (0, N.j)({ type: 'user' });
                    return;
                }
                n &&
                    t &&
                    eu(e) &&
                    (T.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == a.result,
                        size: Object.keys(ee.indices).length
                    }),
                    ec(a) &&
                        (null != e.guild_id
                            ? (0, N.j)({
                                  type: 'guild',
                                  guildId: e.guild_id
                              })
                            : (0, N.j)({
                                  type: 'channel',
                                  channelId: e.id
                              }))),
                    i(!1);
            }
        }, [a, n, e, t, r]),
        a
    );
}
function en(e, t) {
    let [n, r] = s.useState(!0),
        i = (0, c.cj)([ee], () => {
            var t;
            return null !== (t = ee.indices[e]) && void 0 !== t ? t : F;
        });
    return (
        s.useEffect(() => {
            n &&
                null != e &&
                (t &&
                    (T.default.track(w.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == i.result,
                        size: Object.keys(ee.indices).length
                    }),
                    ec(i) &&
                        (0, N.j)({
                            type: 'guild',
                            guildId: e
                        })),
                r(!1));
        }, [i, t, e, n]),
        i
    );
}
function er(e, t) {
    let [n, r] = s.useState(!0),
        i = (0, c.cj)([ee], () => ee.getUserState());
    return (
        s.useEffect(() => {
            n && (t && ec(i) && e && (0, N.j)({ type: 'user' }), r(!1));
        }, [i, t, e, n]),
        i
    );
}
t.ZP = ee;
function ei(e, t, n, r) {
    let { descriptors: i, commands: a, sectionedCommands: o, loading: l } = es(e, n, r),
        u = s.useMemo(
            () =>
                null != e
                    ? {
                          channel: e,
                          guild: t
                      }
                    : void 0,
            [e, t]
        ),
        c = (0, y.R)(u);
    return s.useMemo(() => {
        if (!r.includeFrecency || 0 === c.length)
            return {
                descriptors: i,
                commands: a,
                sectionedCommands: o,
                loading: l
            };
        let e = a
            .filter((e) => c.includes(e.id))
            .sort((e, t) => {
                let n = A.ZP.getScoreWithoutLoadingLatest(u, e);
                return A.ZP.getScoreWithoutLoadingLatest(u, t) - n;
            })
            .splice(0, x.hz);
        return 0 === e.length
            ? {
                  descriptors: i,
                  commands: a,
                  sectionedCommands: o,
                  loading: l
              }
            : {
                  descriptors: [b.Tm[x.bi.FRECENCY], ...i],
                  commands: e.concat(a),
                  sectionedCommands: [
                      {
                          section: b.Tm[x.bi.FRECENCY],
                          data: e
                      },
                      ...o
                  ],
                  loading: l
              };
    }, [l, r.includeFrecency, c, a, i, o, u]);
}
let ea = Object.freeze({
    applications: {
        useFrecency: !1,
        useScore: !1
    },
    commands: {
        useFrecency: !0,
        useScore: !0
    }
});
function es(e, t, n) {
    let r = (0, D.Hs)(e, t.commandTypes),
        i = !1 !== t.applicationCommands,
        a = et(e, i, n.allowFetch),
        o = er(i, n.allowFetch),
        l = (0, c.e7)([ee], () => ee.getApplicationStates()),
        u = (0, c.e7)([ee], () => ee.applicationIndicesVersion);
    return (
        !(function (e, t) {
            let [n, r] = s.useState(!0),
                i = (0, c.e7)([ee], () => ee.getApplicationState(e));
            s.useEffect(() => {
                n &&
                    (t &&
                        ec(i) &&
                        null != e &&
                        (0, N.j)({
                            type: 'application',
                            applicationId: e
                        }),
                    r(!1));
            }, [t, e, i, n]);
        })(n.applicationId, n.allowFetch),
        s.useMemo(
            () =>
                eo({
                    permissionContext: r,
                    text: t.text,
                    allowApplicationCommands: i,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: a,
                    userState: o,
                    applicationStates: n.allowApplicationState ? l : new Map(),
                    sortOptions: n.sortOptions,
                    singleApplicationId: n.applicationId,
                    installOnDemand: n.installOnDemand
                }),
            [r, t.text, t.builtIns, i, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, a, o, l, u]
        )
    );
}
function eo(e) {
    var t, n, r, i, a, s, o;
    let { permissionContext: u, contextState: c, userState: d, applicationStates: f, text: _, builtIns: p = C.D.ALLOW, allowApplicationCommands: m = !0, singleApplicationId: E, allowEmptySections: v = !1, scoreMethod: S = C.p.NONE, sortOptions: T = ea, installOnDemand: y = !1 } = e,
        { commandTypes: N } = u,
        R = null == _ ? void 0 : _.toLowerCase(),
        O = null == R ? void 0 : R.split(' '),
        D = p === C.D.ONLY_TEXT,
        L = p !== C.D.DENY ? (0, b.Kh)(N, !0, D) : [],
        w = [],
        M = {
            permissionContext: u,
            query: R,
            splitQuery: O,
            allowEmptySections: v,
            scoreMethod: S,
            installOnDemand: y
        },
        P = null !== (i = null === (t = c.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        k = null !== (a = null === (n = d.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {},
        U = new Set();
    if (m) {
        if (u.hasBaseAccessPermissions)
            for (let e in P) {
                let t = P[e];
                (null == E || t.descriptor.id === E) && U.add(e);
            }
        for (let e in k) {
            let t = k[e];
            (null == E || t.descriptor.id === E) && U.add(e);
        }
    }
    let G = new Map();
    for (let [e, t] of f)
        if (null == E || e === E) {
            let e = null === (s = t.result) || void 0 === s ? void 0 : s.sections;
            if (null != e) for (let t of Object.keys(e)) U.add(t), G.set(t, e[t]);
        }
    for (let e of Array.from(U)) {
        let t, n;
        let r = P[e],
            i = k[e],
            a = G.get(e),
            s = null != r,
            o = null != i;
        if (null != r && null != i) {
            for (let e in ((t = i.descriptor), (n = []), i.commands)) {
                let t = i.commands[e];
                n.push(t);
            }
            for (let e in r.commands)
                if (!(e in i.commands)) {
                    let t = r.commands[e];
                    n.push(t);
                }
        } else null != r ? ((t = r.descriptor), (n = Object.values(r.commands))) : null != i ? ((t = i.descriptor), (n = Object.values(i.commands))) : null != a && ((t = a.descriptor), (n = Object.values(a.commands)));
        l()(null != t, 'Failed to select application descriptor'), l()(null != n, 'Failed to select list of application commands');
        let u = el(t, n, s, o, M);
        null != u && w.push(u);
    }
    if (
        (T.applications.useFrecency && g.DZ.loadIfNecessary(),
        w.sort((e, t) => {
            if (T.applications.useScore && S === C.p.APPLICATION_ONLY) {
                var n, r, i, a;
                let s = null !== (i = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== i ? i : Number.MAX_VALUE,
                    o = null !== (a = null === (r = t.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : Number.MAX_VALUE;
                if (s !== o) return s - o;
            }
            if (T.applications.useFrecency) {
                let n = h.Z.getScoreWithoutLoadingLatest(e.section.id),
                    r = h.Z.getScoreWithoutLoadingLatest(t.section.id);
                if (n !== r) return r - n;
            }
            return eh(e.section.name, t.section.name);
        }),
        L.length > 0 || !0 === v)
    ) {
        let e = el(b.Tm[x.bi.BUILT_IN], L, !0, !0, M);
        null != e && w.push(e);
    }
    let B = w.flatMap((e) =>
        e.data.map((t) => ({
            ...t,
            section: e.section
        }))
    );
    if (S === C.p.COMMAND_ONLY || S === C.p.COMMAND_OR_APPLICATION) {
        let e = u.context,
            t = I.Z.getGuild(null == u ? void 0 : null === (o = u.context) || void 0 === o ? void 0 : o.guild_id);
        T.commands.useFrecency && g.DZ.loadIfNecessary();
        let n =
            null != e
                ? {
                      channel: e,
                      guild: t
                  }
                : void 0;
        B.sort((e, t) => {
            if (T.commands.useScore) {
                var r, i;
                let n = null !== (r = e.score) && void 0 !== r ? r : 0,
                    a = null !== (i = t.score) && void 0 !== i ? i : 0;
                if (n !== a) return n - a;
            }
            if (T.commands.useFrecency) {
                let r = A.ZP.getScoreWithoutLoadingLatest(n, e),
                    i = A.ZP.getScoreWithoutLoadingLatest(n, t);
                if (r !== i) return i - r;
            }
            return eh(e.displayName, t.displayName);
        });
    }
    return {
        commands: B,
        descriptors: w.map((e) => e.section),
        sectionedCommands: w,
        loading: (null == c ? void 0 : c.fetchState.fetching) === !0 || (null == d ? void 0 : d.fetchState.fetching) === !0 || (null != E && (null === (r = f.get(E)) || void 0 === r ? void 0 : r.fetchState.fetching) === !0)
    };
}
function el(e, t, n, r, i) {
    let a,
        { query: s, splitQuery: o, allowEmptySections: l, scoreMethod: u, permissionContext: c, installOnDemand: d } = i,
        { context: f, userId: _, roleIds: h, isImpersonating: p } = c,
        m = (null == f ? void 0 : f.guild_id) != null ? L.ML(e.permissions, f.guild_id, _, h, p) : null,
        g = (null == f ? void 0 : f.guild_id) != null ? L.ZJ(e.permissions, f, f.guild_id) : null,
        E = [];
    for (let i of t)
        L.Ft(i, c, {
            applicationAllowedForUser: m,
            applicationAllowedForChannel: g,
            commandBotId: e.botId,
            isGuildInstalled: n,
            isUserInstalled: r || d
        }) === L.mF.ALLOWED && E.push(i);
    return 0 !==
        (a =
            u !== C.p.NONE && null != s && null != o
                ? (function (e, t, n, r, i) {
                      let a;
                      let s = [];
                      if (i === C.p.APPLICATION_ONLY || i === C.p.COMMAND_OR_APPLICATION) {
                          let t = r.name.toLocaleLowerCase();
                          if (t.startsWith(e)) a = 5;
                          else if (t.includes(e)) a = 6;
                          else {
                              var o, l;
                              let t = null === (l = r.application) || void 0 === l ? void 0 : null === (o = l.description) || void 0 === o ? void 0 : o.toLocaleLowerCase();
                              (null == t ? void 0 : t.includes(e)) && (a = 8);
                          }
                      }
                      let u = t[0],
                          c = t.slice(1).join(' ');
                      for (let t of n) {
                          let n;
                          (i === C.p.COMMAND_ONLY || i === C.p.COMMAND_OR_APPLICATION) &&
                              (n = (function (e, t, n, r) {
                                  var i;
                                  let a = e.untranslatedName,
                                      s = e.displayName;
                                  if (a.startsWith(t) || s.startsWith(t)) return 0;
                                  if ((a.startsWith(n) && a.split(' ').slice(1).join(' ').startsWith(r)) || (s.startsWith(n) && s.split(' ').slice(1).join(' ').startsWith(r))) return 1;
                                  if (a.includes(t) || (null == s ? void 0 : s.includes(t))) return 2;
                                  let o = !1;
                                  for (let { name: n, serverLocalizedName: r } of null !== (i = e.options) && void 0 !== i ? i : []) {
                                      if (n.startsWith(t) || ''.concat(a, ' ').concat(n).startsWith(t) || (null != s && ''.concat(s, ' ').concat(n).startsWith(t)) || (null != r && (r.startsWith(t) || ''.concat(a, ' ').concat(r).startsWith(t) || (null != s && ''.concat(s, ' ').concat(r).startsWith(t))))) return 3;
                                      (n.includes(t) || (null == r ? void 0 : r.includes(t))) && (o = !0);
                                  }
                                  if (o) return 4;
                                  let l = e.untranslatedDescription.toLocaleLowerCase(),
                                      u = e.displayDescription.toLocaleLowerCase();
                                  if (l.includes(t) || u.includes(t)) return 7;
                              })(t, e, u, c)),
                              (void 0 === n || (void 0 !== a && a < n)) && (n = a),
                              void 0 !== n &&
                                  s.push({
                                      ...t,
                                      score: n
                                  });
                      }
                      return s;
                  })(s, o, E, e, u)
                : E).length || l
        ? ((u === C.p.NONE || u === C.p.APPLICATION_ONLY) && a.sort((e, t) => eh(e.displayName, t.displayName)),
          {
              section: e,
              data: a
          })
        : null;
}
function eu(e) {
    var t;
    return (null == e ? void 0 : e.guild_id) != null || (e.type === w.d4z.DM && (null === (t = S.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0);
}
function ec(e) {
    return (
        !!(function (e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion;
        })(e) &&
        !e.fetchState.fetching &&
        (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    );
}
function ed(e) {
    var t, n, r, i;
    let a = {
        ...e,
        choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ef),
        description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
        name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
        options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ed)
    };
    return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a;
}
function ef(e) {
    var t;
    let n = {
        ...e,
        name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
    };
    return e.name !== e.name_default && (n.name_localized = e.name), n;
}
function e_(e, t) {
    let n = [];
    if (
        (null != e.user &&
            n.push({
                type: R.Kw.USER,
                id: t,
                permission: e.user
            }),
        null != e.channels)
    )
        for (let [t, r] of Object.entries(e.channels))
            n.push({
                type: R.Kw.CHANNEL,
                id: t,
                permission: r
            });
    if (null != e.roles)
        for (let [t, r] of Object.entries(e.roles))
            n.push({
                type: R.Kw.ROLE,
                id: t,
                permission: r
            });
    return n;
}
((a = i || (i = {}))[(a.COMMAND_NAME_STARTS_WITH = 0)] = 'COMMAND_NAME_STARTS_WITH'), (a[(a.STARTS_WITH_COMMAND_NAME = 1)] = 'STARTS_WITH_COMMAND_NAME'), (a[(a.COMMAND_NAME_CONTAINS = 2)] = 'COMMAND_NAME_CONTAINS'), (a[(a.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3)] = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME'), (a[(a.OPTION_NAME_CONTAINS = 4)] = 'OPTION_NAME_CONTAINS'), (a[(a.SECTION_NAME_STARTS_WITH = 5)] = 'SECTION_NAME_STARTS_WITH'), (a[(a.SECTION_NAME_CONTAINS = 6)] = 'SECTION_NAME_CONTAINS'), (a[(a.COMMAND_DESCRIPTION_CONTAINS = 7)] = 'COMMAND_DESCRIPTION_CONTAINS'), (a[(a.SECTION_DESCRIPTION_CONTAINS = 8)] = 'SECTION_DESCRIPTION_CONTAINS');
function eh(e, t) {
    return ee.collator.compare(e, t);
}
function ep(e, t) {
    return eh(e, t);
}
function em(e, t) {
    var n, r, i, a, s, o;
    let l, u;
    if (t === x.bi.BUILT_IN)
        return {
            descriptor: b.Tm[x.bi.BUILT_IN],
            sectionCommands: (0, b.Kh)([_.yU.CHAT], !0, !1),
            isGuildInstalled: !0,
            isUserInstalled: !0
        };
    let c = ee.getContextState(e),
        d = ee.getUserState(),
        f = null !== (s = null === (n = c.result) || void 0 === n ? void 0 : n.sections) && void 0 !== s ? s : {},
        h = null !== (o = null === (r = d.result) || void 0 === r ? void 0 : r.sections) && void 0 !== o ? o : {},
        p = f[t],
        m = h[t],
        g = null === (a = ee.getApplicationState(t).result) || void 0 === a ? void 0 : null === (i = a.sections) || void 0 === i ? void 0 : i[t];
    if (null != p && null != m) {
        for (let e in ((l = m.descriptor), (u = []), m.commands)) {
            let t = m.commands[e];
            u.push(t);
        }
        for (let e in p.commands)
            if (!(e in m.commands)) {
                let t = p.commands[e];
                u.push(t);
            }
    } else null != p ? ((l = p.descriptor), (u = Object.values(p.commands))) : null != m ? ((l = m.descriptor), (u = Object.values(m.commands))) : null != g && ((l = g.descriptor), (u = Object.values(g.commands)));
    return {
        descriptor: l,
        sectionCommands: u,
        isGuildInstalled: null != p,
        isUserInstalled: null != m
    };
}
