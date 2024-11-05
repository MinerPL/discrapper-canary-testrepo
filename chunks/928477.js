n.d(t, {
    JA: function () {
        return w;
    },
    Jw: function () {
        return r;
    },
    Od: function () {
        return x;
    },
    Wj: function () {
        return P;
    },
    gK: function () {
        return M;
    },
    oD: function () {
        return D;
    },
    vH: function () {
        return O;
    }
}),
    n(757143),
    n(653041),
    n(47120);
var r,
    i,
    a = n(192379),
    s = n(544891),
    o = n(570140),
    l = n(668781),
    u = n(430742),
    c = n(904245),
    d = n(166459),
    f = n(238349),
    _ = n(228392),
    h = n(957730),
    p = n(467798),
    m = n(592125),
    g = n(703558),
    E = n(375954),
    v = n(300429),
    I = n(70956),
    S = n(630388),
    T = n(709054),
    b = n(968437),
    y = n(665906),
    A = n(456077),
    N = n(124368),
    C = n(981631),
    R = n(388032);
function O(e) {
    let t = (0, y.NE)(e);
    return (0, y.Xu)(e) ? (t ? 2 : 3) : 1;
}
function D(e, t) {
    var n;
    if (3 === t) return !0;
    return null !== (n = e.isPrivate) && void 0 !== n && n;
}
function L(e, t) {
    return e.length > t ? e.substring(0, t) + '...' : e;
}
function x(e, t) {
    var n, r, i, a, s, o, l;
    let u = null == t ? null : E.Z.getMessage(e.id, t),
        c = null !== (s = null == u ? void 0 : null === (r = u.embeds) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== s ? s : '',
        d = null !== (o = null == u ? void 0 : null === (a = u.poll) || void 0 === a ? void 0 : null === (i = a.question) || void 0 === i ? void 0 : i.text) && void 0 !== o ? o : '';
    if ('' !== c) return L(c, 40);
    if ('' !== d) return L(d, 80);
    {
        let t = h.ZP.unparse(null !== (l = null == u ? void 0 : u.content) && void 0 !== l ? l : '', e.id, !0),
            n = (0, A.Z)(t.split('\n')[0], !0);
        n = n.replace(/^[ #-]+/, '');
        let r = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                r.push(n);
                break;
            }
            r.push(n.substring(0, e.index)), r.push(e[0]), (n = n.substring(e.index + e[0].length));
        }
        let i = r[0];
        for (let e = 1; e < r.length; e++) {
            let t = i + r[e];
            if (t.length > 40) break;
            i = t;
        }
        return L(i, 40);
    }
}
function w(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: r, privateThreadMode: i, location: o, onThreadCreated: l, useDefaultThreadName: f, uploadHandler: _ } = e;
    return a.useCallback(
        async (e, a, p) => {
            var E;
            let v = null == n,
                I = D(r, i),
                S = null !== (E = r.name) && void 0 !== E ? E : '';
            if ('' === S && f) {
                let e = x(t, n);
                S = '' !== e ? e : R.intl.string(R.t['7Xm5QE']);
            }
            let y = (0, b.WD)(t),
                A = m.Z.getChannel(T.default.castMessageIdAsChannelId(n)),
                N = await k(t, () => {
                    let e = null != n ? C.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : C.ANM.CHANNEL_THREADS(t.id);
                    return s.tn.post({
                        url: e,
                        body: {
                            name: S,
                            type: I ? C.d4z.PRIVATE_THREAD : t.type === C.d4z.GUILD_ANNOUNCEMENT ? C.d4z.ANNOUNCEMENT_THREAD : C.d4z.PUBLIC_THREAD,
                            auto_archive_duration: y,
                            location: o
                        }
                    });
                });
            N !== A &&
                (u.Z.clearDraft(t.id, g.d.ThreadSettings),
                u.Z.clearDraft(t.id, g.d.FirstThreadMessage),
                null == l || l(N),
                (v || e.length > 0 || (null != a && a.length > 0) || (null != p && p.length > 0)) &&
                    (function (e, t, n, r, i) {
                        if (null != i && null != r && r.length > 0) i(e, r, t, n);
                        else if (null != n && n.length > 0) c.Z.sendStickers(e.id, n, t);
                        else c.Z.sendMessage(e.id, h.ZP.parse(e, t));
                    })(N, e, a, p, _)),
                d.Z.clearAll(t.id, g.d.FirstThreadMessage);
        },
        [t, n, r, l, i, o, f, _]
    );
}
function M(e, t, n, r, i) {
    return k(e, () =>
        s.tn.post({
            url: C.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: r,
                location: i
            }
        })
    );
}
function P(e) {
    let { parentChannel: t, name: n, appliedTags: r, onThreadCreated: i, upload: o } = e;
    return a.useCallback(
        async (e, a, l) => {
            let c = 0,
                [f, h] = (0, p.Z)(e);
            f && ((e = h), (c = (0, S.pj)(c, C.iLy.SUPPRESS_NOTIFICATIONS)));
            let m = (0, b.WD)(t, null),
                E = C.ANM.CHANNEL_THREADS(t.id) + '?use_nested_fields=true',
                v = {
                    name: n,
                    auto_archive_duration: m,
                    applied_tags: r,
                    message: {
                        content: e,
                        sticker_ids: a,
                        flags: 0 !== c ? c : void 0
                    }
                },
                I = await k(t, () =>
                    null != l && l.length > 0
                        ? o(E, v, l)
                        : s.tn.post({
                              url: E,
                              body: v
                          })
                );
            return (
                u.Z.clearDraft(t.id, g.d.ThreadSettings),
                u.Z.clearDraft(t.id, g.d.FirstThreadMessage),
                d.Z.clearAll(t.id, g.d.FirstThreadMessage),
                (0, _.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: I.id
                }),
                null == i || i(I),
                I
            );
        },
        [t, n, i, r, o]
    );
}
((i = r || (r = {}))[(i.Disabled = 1)] = 'Disabled'), (i[(i.Enabled = 2)] = 'Enabled'), (i[(i.PrivateOnly = 3)] = 'PrivateOnly');
async function k(e, t) {
    let n;
    let r = e.isForumLikeChannel();
    try {
        (n = await t()),
            null == n.body
                ? l.Z.show({
                      title: R.intl.string(R.t.j2d6Ki),
                      body: R.intl.string(R.t.fEptJC)
                  })
                : (o.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: v.S.CreateThread,
                      channelId: e.id
                  }),
                  o.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: n.body.id
                  }));
    } catch (t) {
        var i, a, s, u, d, _;
        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === C.evJ.TOO_MANY_THREADS)
            l.Z.show({
                title: r ? R.intl.string(R.t.vWNFk5) : R.intl.string(R.t['1KEdvL']),
                body: r ? R.intl.string(R.t.KGaiEB) : R.intl.string(R.t.P0wT5e)
            });
        else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === C.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            l.Z.show({
                title: R.intl.string(R.t['1KEdvL']),
                body: R.intl.string(R.t.jDMxz8)
            });
        else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === C.evJ.SLOWMODE_RATE_LIMITED) {
            let n = null !== (_ = t.body.retry_after) && void 0 !== _ ? _ : 0;
            n > 0 &&
                o.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: v.S.CreateThread,
                    cooldownMs: n * I.Z.Millis.SECOND
                });
        } else if (429 === t.status)
            l.Z.show({
                title: r ? R.intl.string(R.t.vWNFk5) : R.intl.string(R.t['1KEdvL']),
                body: R.intl.string(R.t['Whhv4+'])
            });
        else if (N.fZ.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
        else {
            if (N.RN.has(null === (d = t.body) || void 0 === d ? void 0 : d.code))
                return new Promise((e, n) => {
                    null == t.body && n(),
                        f.Z.addConditionalChangeListener(() => {
                            let t = f.Z.getAndDeleteMostRecentUserCreatedThreadId();
                            if (null != t) {
                                let r = m.Z.getChannel(t);
                                return (
                                    o.Z.wait(() => {
                                        null == r ? n() : e(r);
                                    }),
                                    !1
                                );
                            }
                        });
                });
            l.Z.show({
                title: R.intl.string(R.t.j2d6Ki),
                body: R.intl.string(R.t.fEptJC)
            });
        }
    }
    let h = await new Promise((e, t) => {
        null == n.body && t(),
            m.Z.addConditionalChangeListener(() => {
                let t = m.Z.getChannel(n.body.id);
                if (null != t)
                    return (
                        o.Z.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
    try {
        await c.Z.fetchMessages({
            channelId: h.id,
            limit: C.AQB
        });
    } catch (e) {}
    return h;
}
