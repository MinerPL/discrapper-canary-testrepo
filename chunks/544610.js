let i;
n(47120), n(724458), n(653041);
var s,
    a,
    l,
    r,
    o = n(392711),
    c = n.n(o),
    u = n(442837),
    d = n(570140),
    h = n(279779),
    p = n(353926),
    m = n(428598),
    _ = n(131704),
    f = n(624138),
    E = n(51144),
    g = n(592125),
    C = n(480294),
    I = n(580005),
    T = n(699516),
    x = n(594174),
    S = n(981631);
let v = !1,
    N = '',
    A = 0,
    Z = [],
    M = !1,
    b = new Set(),
    R = null;
function L() {
    (N = ''), (A = 0), (Z = []), (b = new Set()), (v = !1), (R = null);
}
function j(e) {
    (N = e), (A = 0), P();
}
function P() {
    if (!v) return !1;
    let e = g.Z.getChannel(R);
    if (0 === N.trim().length)
        return (
            null != i && i.clearQuery(),
            (Z = (function (e) {
                let t = T.Z.getFriendIDs();
                return (
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    t
                        .reduce((e, t) => {
                            let n = x.default.getUser(t);
                            return null == n || n.isProvisional ? e : (e.push({ user: n }), e);
                        }, [])
                        .sort(y)
                );
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    return (
        null != i &&
            i.setQuery(
                N,
                {
                    friends: !0,
                    provisional: !1
                },
                t,
                (function () {
                    let e = I.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof _.mn && e.isDM()),
                        t = Math.max(
                            ...e.map((e) => {
                                let { id: t } = e;
                                return I.Z.getScoreWithoutFetchingLatest(t);
                            })
                        ),
                        n = {};
                    return (
                        e.forEach((e) => {
                            let i = I.Z.getScoreWithoutFetchingLatest(e.id),
                                s = e.getRecipientId(),
                                a = T.Z.isFriend(s) ? 0.2 : 0,
                                l = null != g.Z.getDMFromUserId(s) ? 0.1 : 0;
                            n[s] = 1 + i / t + a + l;
                        }),
                        n
                    );
                })()
            ),
        !1
    );
}
function O() {
    if (!v) return !1;
    let e = M;
    return (M = c().some(T.Z.getRelationships(), (e) => e === S.OGo.FRIEND)) !== e;
}
function y(e, t) {
    if (C.Z.hasConsented(S.pjP.PERSONALIZATION)) {
        var n, i, s, a;
        let l = null !== (s = null === (n = m.Z.getUserAffinity(e.user.id)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== s ? s : 0,
            r = null !== (a = null === (i = m.Z.getUserAffinity(t.user.id)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== a ? a : 0;
        if (l !== r) return r - l;
    }
    return (0, f._I)(E.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, f._I)(E.ZP.getName(t.user).toLocaleLowerCase()));
}
function D(e) {
    let { results: t } = e;
    if (!!v && '' !== N)
        (Z = t
            .map((e) => {
                let { id: t } = e;
                return { user: x.default.getUser(t) };
            })
            .filter((e) => null != e.user)),
            G.emitChange();
}
function U() {
    return null != i && (i.destroy(), (i = null)), h.Z.getSearchContext(D, 1000);
}
function k(e) {
    if (e.key !== S.vTt) return !1;
    (v = !0), O(), (i = U()), (R = null), j('');
}
function w(e) {
    if (e.key !== S.vTt) return !1;
    B();
}
function B() {
    null != i && (i.destroy(), (i = null)), L();
}
class H extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(x.default, g.Z, T.Z, p.Z, C.Z), this.syncWith([x.default, g.Z], P), this.syncWith([T.Z], O);
    }
    getResults() {
        return Z;
    }
    hasFriends() {
        return M;
    }
    getSelectedUsers() {
        return b;
    }
    getQuery() {
        return N;
    }
    getState() {
        return {
            query: N,
            selectedRow: A,
            selectedUsers: b,
            results: Z,
            hasFriends: M
        };
    }
}
(r = 'PrivateChannelRecipientsInviteStore'),
    (l = 'displayName') in (a = H)
        ? Object.defineProperty(a, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[l] = r);
let G = new H(d.Z, {
    CONNECTION_OPEN: function () {
        L();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null != t) return !1;
        let i = v;
        return L(), (v = i), (R = n), P();
    },
    MODAL_PUSH: k,
    SHOW_ACTION_SHEET: k,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
        (v = !0), O(), (i = U()), (R = e.channelId), j('');
    },
    MODAL_POP: w,
    HIDE_ACTION_SHEET: w,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
        (R = e.channelId), j(e.query);
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
        A = e.row;
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
        let { userId: t } = e;
        b.add(t), (b = new Set(b));
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
        let { userId: t } = e;
        b.delete(t), (b = new Set(b));
    }
});
t.Z = G;
