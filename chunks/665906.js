n.d(t, {
    $R: function () {
        return L;
    },
    C7: function () {
        return O;
    },
    Ek: function () {
        return N;
    },
    Gu: function () {
        return x;
    },
    JQ: function () {
        return v;
    },
    NE: function () {
        return I;
    },
    RG: function () {
        return b;
    },
    Xb: function () {
        return U;
    },
    Xu: function () {
        return g;
    },
    Y: function () {
        return w;
    },
    cD: function () {
        return S;
    },
    ki: function () {
        return T;
    },
    kn: function () {
        return D;
    },
    tM: function () {
        return m;
    },
    tc: function () {
        return y;
    },
    xl: function () {
        return M;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    s = n(442837),
    o = n(987170),
    l = n(590293),
    u = n(901461),
    c = n(131704),
    d = n(314897),
    _ = n(592125),
    E = n(496675),
    f = n(709054),
    h = n(601070),
    p = n(981631);
let m = (0, o.Z)({
    id: '2022-07_voice_in_threads',
    label: 'Voice in Threads',
    kind: 'guild',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function I(e, t) {
    return A(
        (0, s.e7)(
            [E.Z],
            () => {
                let t = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : a.$e(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
                return E.Z.can(t, e);
            },
            [e]
        ),
        e,
        t
    );
}
function T(e, t) {
    let n = e.isForumLikeChannel() ? p.Plq.SEND_MESSAGES : a.$e(p.Plq.CREATE_PUBLIC_THREADS, p.Plq.READ_MESSAGE_HISTORY);
    return A(E.Z.can(n, e), e, t);
}
function g(e) {
    let t = (0, s.e7)([E.Z], () => E.Z.can(a.$e(p.Plq.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === p.d4z.GUILD_TEXT && A(t, e);
}
function S(e) {
    let t = I(e),
        n = g(e);
    return t || n;
}
function A(e, t, n) {
    return !(__OVERLAY__ || !e || !c.uC.has(t.type) || (null != n && (n.hasFlag(p.iLy.HAS_THREAD) || (0, u.Z)(n)))) && !0;
}
function N(e) {
    let t = (0, s.e7)([_.Z], () => _.Z.getChannel(f.default.castMessageIdAsChannelId(e.id)), [e]);
    return (function (e, t, n) {
        return (!!t.hasFlag(p.iLy.HAS_THREAD) && null != n && !!e) || !1;
    })(
        (0, s.e7)([E.Z], () => E.Z.can(p.Plq.VIEW_CHANNEL, t), [t]),
        e,
        t
    );
}
function v(e) {
    return (0, s.cj)([h.Z, E.Z], () => {
        let t = h.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            n = h.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            r = h.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            a = i()(n).some((e) => E.Z.can(p.Plq.VIEW_CHANNEL, e.channel)),
            s = i()(t).some((e) => !(e.channel.id in n) && E.Z.can(p.Plq.VIEW_CHANNEL, e.channel)),
            o = i()(r).some((e) => E.Z.can(p.Plq.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: a || s || o,
            hasMoreActiveThreads: o || s
        };
    });
}
function O(e) {
    let t = (0, s.e7)([_.Z], () => _.Z.getChannel(null == e ? void 0 : e.parent_id)),
        n = (0, s.e7)([E.Z], () => null != t && E.Z.can(p.Plq.MANAGE_THREADS, t), [t]),
        r = (0, s.e7)([d.default], () => d.default.getId());
    return !!(null != e && null != t && e.isThread()) && (!!n || (!e.isLockedThread() && (e.ownerId === r || !1)));
}
function R(e, t) {
    return null != e && t.can(p.Plq.SEND_MESSAGES_IN_THREADS, e);
}
function C(e, t, n) {
    var r;
    return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t);
}
function y(e) {
    let t = (0, s.e7)([E.Z], () => R(e, E.Z)),
        n = U(e);
    return C(e, t, n);
}
function D(e) {
    let t = R(e, E.Z),
        n = (function (e) {
            return P(e, E.Z);
        })(e);
    return C(e, t, n);
}
function L(e) {
    var t;
    let n = (0, s.e7)([E.Z], () => null != e && E.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e));
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n));
}
function b(e) {
    var t;
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && E.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e)));
}
function M(e) {
    let t = E.Z.can(p.Plq.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !t;
}
function P(e, t) {
    return null != e && t.can(p.Plq.MANAGE_THREADS, e);
}
function U(e) {
    return (0, s.e7)([E.Z], () => P(e, E.Z));
}
function w(e) {
    let t = (0, l.Z)(),
        n = (0, s.e7)([E.Z], () => E.Z.can(p.Plq.CONNECT, e)),
        r = L(e),
        i = m.useExperiment(
            {
                guildId: e.guild_id,
                location: 'e791ea_1'
            },
            { autoTrackExposure: !1 }
        ).enabled;
    return !t && e.isVocalThread() && i && n && r;
}
function x(e) {
    let t = U(e);
    return e.isLockedThread() && !t;
}
