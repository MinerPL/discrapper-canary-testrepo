n(47120), n(789020), n(653041), n(177593);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(911969),
    f = n(89892),
    _ = n(673750),
    h = n(710845),
    p = n(247206),
    m = n(723352),
    g = n(160404),
    E = n(786761),
    v = n(418476),
    I = n(739566),
    S = n(995774),
    T = n(706454),
    b = n(630388),
    y = n(709054),
    A = n(314897),
    N = n(592125),
    C = n(796974),
    R = n(984933),
    O = n(271383),
    D = n(430824),
    L = n(496675),
    x = n(699516),
    w = n(944486),
    M = n(914010),
    P = n(594174),
    k = n(981631);
let U = new Set(),
    G = new h.Z('MessageStore'),
    B = !1;
function Z() {
    f.Z.forEach((e) => {
        f.Z.commit(
            e.mutate({
                ready: !1,
                loadingMore: !1
            })
        );
    }),
        U.clear();
}
function F() {
    f.Z.forEach((e) => {
        let { channelId: t } = e;
        null == N.Z.getChannel(t) && f.Z.clear(t);
    });
}
function V() {
    f.Z.forEach((e) => {
        f.Z.commit(e.reset(e.map((e) => e.set('blocked', x.Z.isBlockedForMessage(e)))));
    });
}
function j(e) {
    let { type: t, channelId: n, messageId: r, userId: i, emoji: a, reactionType: s } = e,
        o = f.Z.get(n);
    if (null == o || !(0, S.sm)(e)) return !1;
    let l = A.default.getId() === i;
    (o = o.update(r, (n) => ('MESSAGE_REACTION_ADD' === t ? n.addReaction(a, l, e.colors, s) : n.removeReaction(a, l, s)))), f.Z.commit(o);
}
function H(e) {
    let { type: t, messageData: n } = e,
        { message: r } = n,
        i = (0, _.hc)(n),
        a = r.channelId,
        s = f.Z.getOrCreate(a);
    if (!s.has(i)) return !1;
    (s = s.update(i, (e) => {
        var n;
        return (null === (n = e.embeds) || void 0 === n ? void 0 : n.filter(m.K).length) > 0 && (e = e.set('embeds', [])), 'MESSAGE_SEND_FAILED_AUTOMOD' === t && (e = e.set('flags', (0, b.pj)(e.flags, k.iLy.EPHEMERAL))), e;
    })),
        f.Z.commit(s);
}
class Y extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(P.default, N.Z, C.Z, O.ZP, T.default, w.Z, M.Z, D.Z, x.Z, R.ZP), this.syncWith([g.Z], () => {});
    }
    getMessages(e) {
        if (g.Z.hasViewingRoles()) {
            let t = N.Z.getChannel(e),
                n = null == t ? void 0 : t.getGuildId();
            if (g.Z.isViewingRoles(n) && !L.Z.can(k.Plq.VIEW_CHANNEL, t)) return new f.Z(e);
        }
        return f.Z.getOrCreate(e);
    }
    getMessage(e, t) {
        return f.Z.getOrCreate(e).get(t);
    }
    getLastEditableMessage(e) {
        let t = P.default.getCurrentUser();
        return l()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => (0, v.Z)(e, null == t ? void 0 : t.id));
    }
    getLastChatCommandMessage(e) {
        let t = P.default.getCurrentUser();
        return this.getMessages(e)
            .toArray()
            .reverse()
            .find((e) => {
                var n, r;
                return (null === (n = e.interaction) || void 0 === n ? void 0 : n.type) === d.B8.APPLICATION_COMMAND && (null === (r = e.interactionData) || void 0 === r ? void 0 : r.type) === d.yU.CHAT && e.interaction.user.id === (null == t ? void 0 : t.id);
            });
    }
    getLastMessage(e) {
        return l()(this.getMessages(e).toArray()).reverse().get(0);
    }
    getLastNonCurrentUserMessage(e) {
        let t = P.default.getCurrentUser();
        return l()(this.getMessages(e).toArray())
            .reverse()
            .find((e) => e.author.id !== (null == t ? void 0 : t.id));
    }
    jumpedMessageId(e) {
        let t = f.Z.get(e);
        return null == t ? void 0 : t.jumpTargetId;
    }
    focusedMessageId(e) {
        let t = f.Z.get(e);
        return null == t ? void 0 : t.focusTargetId;
    }
    hasPresent(e) {
        let t = f.Z.get(e);
        return null != t && t.ready && t.hasPresent();
    }
    isReady(e) {
        return f.Z.getOrCreate(e).ready;
    }
    whenReady(e, t) {
        this.addConditionalChangeListener(() => {
            if (this.isReady(e)) return setImmediate(t), !1;
        });
    }
    isLoadingMessages(e) {
        return f.Z.getOrCreate(e).loadingMore;
    }
    hasCurrentUserSentMessage(e) {
        let t = P.default.getCurrentUser();
        return null != this.getMessages(e).findNewest((e) => e.author.id === (null == t ? void 0 : t.id));
    }
    hasCurrentUserSentMessageSinceAppStart() {
        return B;
    }
}
(s = 'MessageStore'),
    (a = 'displayName') in (i = Y)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new Y(c.Z, {
        BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
            let { changesByChannelId: t } = e;
            for (let e in t) {
                let n = f.Z.get(e);
                if (null != n) {
                    n.cached;
                    n.mergeDelta(t[e].new_messages, t[e].modified_messages, t[e].deleted_message_ids);
                }
            }
        },
        CONNECTION_OPEN: Z,
        OVERLAY_INITIALIZE: Z,
        CACHE_LOADED: function (e) {
            for (let [t, n] of y.default.entries(e.messages)) {
                let e = f.Z.getOrCreate(t).addCachedMessages(n, !0);
                f.Z.commit(e);
            }
        },
        LOAD_MESSAGES: function () {
            return !0;
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { channelId: t, isBefore: n, isAfter: r, jump: i, hasMoreBefore: a, hasMoreAfter: s, messages: o, isStale: l, truncate: u } = e,
                c = f.Z.getOrCreate(t);
            (c = c.loadComplete({
                newMessages: o,
                isBefore: n,
                isAfter: r,
                jump: i,
                hasMoreBefore: a,
                hasMoreAfter: s,
                cached: l,
                hasFetched: !0
            })),
                null != u && (n || r) && (!n || !r) && (c = c.truncate(n, r)),
                f.Z.commit(c);
        },
        LOAD_MESSAGES_FAILURE: function (e) {
            let { channelId: t } = e,
                n = f.Z.getOrCreate(t);
            f.Z.commit(
                n.mutate({
                    loadingMore: !1,
                    error: !0
                })
            );
        },
        LOAD_MESSAGES_SUCCESS_CACHED: function (e) {
            let { channelId: t, jump: n, focus: r, before: i, after: a, limit: s, truncate: o } = e,
                l = f.Z.getOrCreate(t);
            (null == n ? void 0 : n.present) ? (l = l.jumpToPresent(s)) : (null == r ? void 0 : r.messageId) != null ? (l = l.focusOnMessage(r.messageId)) : (null == n ? void 0 : n.messageId) != null ? (l = l.jumpToMessage(n.messageId, n.flash, n.offset, n.returnMessageId, n.jumpType)) : (null != i || null != a) && (l = l.loadFromCache(null != i, s)), null != o && (null != i || null != a) && (null == i || null == a) && (l = l.truncate(null != i, null != a)), f.Z.commit(l);
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            let t = f.Z.getOrCreate(e.channelId);
            (t.cached || !t.ready) && f.Z.commit(t.addCachedMessages(e.messages, e.stale));
        },
        LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function (e) {
            let t = e.messageId,
                n = e.channelId,
                r = f.Z.get(n);
            if (null == r || !r.has(t)) return !1;
            (r = r.update(t, (t) => t.set('interactionData', e.interactionData))), f.Z.commit(r);
        },
        TRUNCATE_MESSAGES: function (e) {
            let { channelId: t, truncateBottom: n, truncateTop: r } = e;
            G.log('Truncating messages for '.concat(t, ' bottom:').concat(n, ' top:').concat(r));
            let i = f.Z.getOrCreate(t);
            (i = i.truncate(n, r)), f.Z.commit(i);
        },
        CLEAR_MESSAGES: function (e) {
            let { channelId: t } = e;
            G.log('Clearing messages for '.concat(t)), f.Z.clear(t), U.clear();
        },
        MESSAGE_CREATE: function (e) {
            let { channelId: t, message: n, isPushNotification: r } = e,
                i = f.Z.getOrCreate(t);
            if (r) {
                G.log('Inserting message tapped on from a push notification', n.id, n.channel_id), f.Z.commit(i.receivePushNotification(n));
                return;
            }
            if (!i.ready) return !1;
            null != n.nonce && n.state !== k.yb.SENDING && U.has(n.nonce) && ((i = i.remove(n.nonce)), U.delete(n.nonce)), (i = i.receiveMessage(n, !0 === C.Z.isAtBottom(t))), f.Z.commit(i);
        },
        MESSAGE_SEND_FAILED: function (e) {
            let { channelId: t, messageId: n, reason: r } = e,
                i = f.Z.getOrCreate(t);
            if (null == i || !i.has(n)) return !1;
            let a = i.get(n, !0);
            (i = (null == a ? void 0 : a.isPoll()) === !0 ? i.remove(n) : i.update(n, (e) => ((e = e.set('state', k.yb.SEND_FAILED)).isCommandType() ? (e = (e = e.set('interactionError', null != r ? r : '')).set('flags', (0, b.pj)(e.flags, k.iLy.EPHEMERAL))) : null != r && (e = e.set('interactionError', null != r ? r : '')), e))), f.Z.commit(i);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: H,
        MESSAGE_EDIT_FAILED_AUTOMOD: H,
        MESSAGE_UPDATE: function (e) {
            let t = e.message.id,
                n = e.message.channel_id,
                r = f.Z.getOrCreate(n);
            if (null == r || !r.has(t)) return !1;
            (r = r.update(t, (t) => (0, E.wi)(t, e.message))), f.Z.commit(r);
        },
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
            let { messageId: t, channelId: n } = e,
                r = f.Z.get(n);
            if (null == r || !r.has(t)) return !1;
            (r = r.update(t, p.Cm)), f.Z.commit(r);
        },
        MESSAGE_DELETE: function (e) {
            let { id: t, channelId: n } = e,
                r = f.Z.getOrCreate(n);
            if (null == r || !r.has(t)) return !1;
            if (r.revealedMessageId === t) {
                let e = r.getAfter(t);
                r = null != e && e.blocked ? r.mutate({ revealedMessageId: e.id }) : r.mutate({ revealedMessageId: null });
            }
            (r = r.remove(t)), f.Z.commit(r), U.delete(t);
        },
        MESSAGE_DELETE_BULK: function (e) {
            let { ids: t, channelId: n } = e,
                r = f.Z.getOrCreate(n);
            if (null == r) return !1;
            let i = r.removeMany(t);
            if (r === i) return !1;
            if (null != i.revealedMessageId && l().some(t, (e) => i.revealedMessageId === e)) {
                let e = i.getAfter(i.revealedMessageId);
                i = null != e && e.blocked ? i.mutate({ revealedMessageId: e.id }) : i.mutate({ revealedMessageId: null });
            }
            f.Z.commit(i),
                t.forEach((e) => {
                    U.delete(e);
                });
        },
        MESSAGE_REVEAL: function (e) {
            let { channelId: t, messageId: n } = e,
                r = f.Z.getOrCreate(t);
            f.Z.commit(r.mutate({ revealedMessageId: n }));
        },
        THREAD_CREATE_LOCAL: function (e) {
            let { channelId: t } = e,
                n = f.Z.getOrCreate(t);
            (n = n.loadComplete({
                newMessages: [],
                hasMoreAfter: !1,
                hasMoreBefore: !1
            })),
                f.Z.commit(n);
        },
        CHANNEL_DELETE: F,
        THREAD_DELETE: F,
        GUILD_DELETE: F,
        RELATIONSHIP_ADD: V,
        RELATIONSHIP_REMOVE: V,
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {},
        THREAD_MEMBER_LIST_UPDATE: function (e) {},
        MESSAGE_REACTION_ADD: j,
        MESSAGE_REACTION_ADD_MANY: function (e) {
            let { channelId: t, messageId: n, reactions: r } = e,
                i = f.Z.get(t);
            if (null == i) return !1;
            (i = i.update(n, (e) => {
                var t;
                return e.addReactionBatch(r, null === (t = P.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
            })),
                f.Z.commit(i);
        },
        MESSAGE_REACTION_REMOVE: j,
        MESSAGE_REACTION_REMOVE_ALL: function (e) {
            let { channelId: t, messageId: n } = e,
                r = f.Z.get(t);
            if (null == r) return !1;
            (r = r.update(n, (e) => e.set('reactions', []))), f.Z.commit(r);
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
            let { channelId: t, messageId: n, emoji: r } = e,
                i = f.Z.get(t);
            if (null == i) return !1;
            (i = i.update(n, (e) => e.removeReactionsForEmoji(r))), f.Z.commit(i);
        },
        LOGOUT: function () {
            f.Z.forEach((e) => {
                f.Z.clear(e.channelId);
            }),
                U.clear();
        },
        UPLOAD_START: function (e) {
            let { message: t } = e;
            null != t.nonce && U.add(t.nonce);
        },
        UPLOAD_FAIL: function (e) {
            let { channelId: t, messageRecord: n } = e,
                r = null == n ? void 0 : n.nonce;
            if (null != r && U.has(r)) {
                let e = f.Z.getOrCreate(t),
                    n = e.get(r);
                if (null == n) return;
                (e = (e = e.remove(r)).merge([n])), U.delete(r), f.Z.commit(e);
            }
        },
        LOCAL_MESSAGE_CREATE: function (e) {
            let { message: t } = e,
                n = P.default.getCurrentUser();
            null != t && null != t.author && null != n && t.author.id === n.id && (B = !0);
        }
    }));
