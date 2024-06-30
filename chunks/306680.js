let r;
n.d(t, {
    Ex: function () {
        return eO;
    }
}), n(47120), n(411104), n(653041), n(789020);
var i, a, o, s = n(512722), l = n.n(s), u = n(913527), c = n.n(u), d = n(442837), _ = n(544891), E = n(846519), f = n(283693), h = n(570140), p = n(317381), m = n(358221), I = n(702321), T = n(430198), g = n(710845), S = n(353926), A = n(924301), N = n(57132), v = n(355298), O = n(869404), R = n(333984), C = n(572804), y = n(140155), D = n(398758), L = n(725319), b = n(344185), M = n(569471), P = n(195663), U = n(581883), w = n(131704), x = n(386438), G = n(70956), k = n(630388), B = n(823379), F = n(931619), V = n(709054), H = n(314897), Z = n(433355), Y = n(592125), j = n(796974), W = n(486472), K = n(430824), z = n(517100), q = n(375954), Q = n(496675), X = n(699516), $ = n(944486), J = n(9156), ee = n(594174), et = n(451478), en = n(981631), er = n(918559), ei = n(176505), ea = n(765305), eo = n(490897);
function es(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let el = new g.Z('ReadStateStore');
__OVERLAY__ && (r = n(237997).Z);
let eu = en.S7T.VIEW_CHANNEL | en.S7T.READ_MESSAGE_HISTORY, ec = $.Z.getChannelId(), ed = null, e_ = null, eE = !1, ef = [], eh = !1, ep = null, em = {}, eI = 30 * G.Z.Millis.DAY;
function eT() {
    return V.default.fromTimestamp(Date.now() - eI);
}
let eg = 0, eS = 0, eA = null;
function eN() {
    eg = Date.now() - 7 * G.Z.Millis.DAY, eS = Date.now() - 3 * G.Z.Millis.DAY, clearTimeout(eA), eA = setTimeout(() => {
        h.Z.dispatch({ type: 'DECAY_READ_STATES' });
    }, 1 * G.Z.Millis.HOUR);
}
function ev(e) {
    if (null == e)
        return 0;
    let t = Date.parse(e);
    return isNaN(t) ? 0 : t;
}
function eO(e, t) {
    let n = Y.Z.getChannel(e.channel_id);
    return !(null == n || X.Z.isBlockedForMessage(e)) && (!!((0, C.ZP)({
        message: e,
        userId: t.id,
        suppressEveryone: J.ZP.isSuppressEveryoneEnabled(n.guild_id),
        suppressRoles: J.ZP.isSuppressRolesEnabled(n.guild_id)
    }) || eR(n)) || !1);
}
function eR(e) {
    return null != e && e.isPrivate() && !J.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function eC(e) {
    if (0 === ef.length) {
        eh = !1, null == e || e();
        return;
    }
    eh = !0;
    let t = ef.splice(0, 100);
    await ey(() => _.tn.post({
        url: en.ANM.BULK_ACK,
        body: { read_states: t },
        oldFormErrors: !0
    })), await (0, E.GR)(1000), eC(e);
}
async function ey(e) {
    let t = H.default.getId();
    for (let n = 0; n < 3; n++)
        try {
            return await e();
        } catch (e) {
            if (el.error('', e), n + 1 < 3 && (await (0, E.GR)((n + 1) * 2000), await F.Z.awaitOnline(), t !== H.default.getId()))
                return Promise.reject(Error('User changed.'));
        }
}
function eD(e) {
    if (e.type !== eo.W.CHANNEL)
        return !1;
    let t = Y.Z.getChannel(e.channelId), n = null != t && t.isForumPost();
    if (null != p.ZP.getConnectedActivityChannelId() && p.ZP.getActivityPanelMode() === er.Ez.PANEL && p.ZP.getFocusedLayout() === er.MI.NO_CHAT || z.Z.isIdle() || !e.canTrackUnreads())
        return !1;
    if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
        let t = em[e.channelId], n = null != t && et.Z.isFocused(t), i = null != r && r.isInstanceFocused() && r.isPinned(en.Odu.TEXT);
        if (!n && !i)
            return !1;
    }
    if (n && !e._persisted)
        return !0;
    if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !j.Z.isAtBottom(e.channelId))
        return !1;
    let i = m.Z.getLayout(e.channelId), a = m.Z.getChatOpen(e.channelId);
    if (!a && (i === en.AEg.NO_CHAT || i === en.AEg.FULL_SCREEN) || null == em[e.channelId])
        return !1;
    let o = q.Z.getMessages(e.channelId);
    return !!(null != o && o.ready && !o.loadingMore && ((0, L.Z)() || a)) || !1;
}
(o = i || (i = {}))[o.IS_GUILD_CHANNEL = 1] = 'IS_GUILD_CHANNEL', o[o.IS_THREAD = 2] = 'IS_THREAD';
class eL {
    static forEach(e) {
        for (let n of Object.keys(eL._readStates)) {
            var t;
            let r = null !== (t = eL._readStates[parseInt(n)]) && void 0 !== t ? t : {};
            for (let t of Object.keys(r))
                if (!1 === e(r[t]))
                    break;
        }
    }
    static get(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL, r = null === (t = eL._readStates[n]) || void 0 === t ? void 0 : t[e];
        return null == r && (r = new eL(e, n), null == eL._readStates[n] && (eL._readStates[n] = {}), eL._readStates[n][e] = r), r;
    }
    static getGuildSentinels(e) {
        return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = { unreadsSentinel: 0 }), this._guildReadStateSentinels[e];
    }
    static resetGuildSentinels() {
        this._guildReadStateSentinels = {};
    }
    static getIfExists(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return null === (t = eL._readStates[n]) || void 0 === t ? void 0 : t[e];
    }
    static getMentionChannelIds() {
        let e = [];
        for (let t of eL._mentionChannels) {
            let n = eL.getIfExists(t);
            null != n && n.canHaveMentions() ? e.push(t) : eL._mentionChannels.delete(t);
        }
        return e;
    }
    static getValue(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL, r = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, a = null === (t = eL._readStates[n]) || void 0 === t ? void 0 : t[e];
        return null == a ? i : r(a);
    }
    static clear(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return (null === (t = eL._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eL._readStates[n][e], eL._mentionChannels.delete(e), !0);
    }
    static clearAll() {
        eL._readStates = {}, eL._mentionChannels.clear();
    }
    serialize(e) {
        let {
            channelId: t,
            type: n,
            _guildId: r,
            _isThread: i,
            _isActiveThread: a,
            _isJoinedThread: o,
            _persisted: s,
            loadedMessages: l,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: E,
            isManualAck: f,
            lastPinTimestamp: h,
            _oldestUnreadMessageId: p,
            oldestUnreadMessageIdStale: m,
            estimated: I,
            _mentionCount: T,
            flags: g,
            lastViewed: S
        } = this;
        if (e)
            return {
                channelId: t,
                type: n,
                _guildId: r,
                _isThread: i,
                _isActiveThread: a,
                _isJoinedThread: o,
                _persisted: s,
                loadedMessages: l,
                _lastMessageId: u,
                _lastMessageTimestamp: c,
                _ackMessageId: d,
                _ackMessageTimestamp: _,
                ackPinTimestamp: E,
                isManualAck: f,
                lastPinTimestamp: h,
                _oldestUnreadMessageId: p,
                oldestUnreadMessageIdStale: m,
                estimated: I,
                _mentionCount: T,
                flags: g,
                lastViewed: S
            };
        let A = {
            channelId: t,
            type: n,
            _guildId: r,
            _persisted: s,
            _lastMessageId: u,
            _lastMessageTimestamp: c,
            _ackMessageId: d,
            _ackMessageTimestamp: _,
            ackPinTimestamp: E,
            lastPinTimestamp: h,
            _mentionCount: T,
            flags: g
        };
        return null != S && S > 0 && (A.lastViewed = S), i && (A._isThread = i, A._isActiveThread = a, A._isJoinedThread = o), A;
    }
    deserializeForOverlay(e) {
        let {
            channelId: t,
            type: n,
            _guildId: r,
            _isThread: i,
            _isActiveJoinedThread: a,
            _isActiveThread: o,
            _isJoinedThread: s,
            _persisted: l,
            loadedMessages: u,
            _lastMessageId: c,
            _lastMessageTimestamp: d,
            _ackMessageId: _,
            _ackMessageTimestamp: E,
            ackPinTimestamp: f,
            isManualAck: h,
            lastPinTimestamp: p,
            _oldestUnreadMessageId: m,
            oldestUnreadMessageIdStale: I,
            estimated: T,
            _unreadCount: g,
            _mentionCount: S,
            flags: A,
            lastViewed: N
        } = e;
        this.channelId = t, this.type = null != n ? n : eo.W.CHANNEL, this._guildId = r, this._isThread = null != i && i, null != a ? (this._isActiveThread = a, this._isJoinedThread = a) : (this._isActiveThread = null != o && o, this._isJoinedThread = null != s && s), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = c, this._lastMessageTimestamp = d, this._ackMessageId = _, this._ackMessageTimestamp = E, this.ackPinTimestamp = f, this.isManualAck = null != h && h, this.lastPinTimestamp = p, this._oldestUnreadMessageId = m, this.oldestUnreadMessageIdStale = null != I && I, this.estimated = null != T && T, this._unreadCount = null != g ? g : 0, this._mentionCount = S, this.flags = A, this.lastViewed = N, eL._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eL._mentionChannels.add(this.channelId);
    }
    incrementGuildUnreadsSentinel() {
        if (null != this._guildId)
            eL.getGuildSentinels(this._guildId).unreadsSentinel++;
    }
    get oldestUnreadMessageId() {
        return this._oldestUnreadMessageId;
    }
    set oldestUnreadMessageId(e) {
        this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1;
    }
    get lastMessageId() {
        return this._lastMessageId;
    }
    set lastMessageId(e) {
        this._lastMessageId = e, this._lastMessageTimestamp = null != e ? V.default.extractTimestamp(e) : 0;
    }
    get lastMessageTimestamp() {
        return this._lastMessageTimestamp;
    }
    get ackMessageId() {
        return this._ackMessageId;
    }
    set ackMessageId(e) {
        this._ackMessageId = e, this._ackMessageTimestamp = null != e ? V.default.extractTimestamp(e) : 0;
    }
    get unreadCount() {
        var e;
        return null !== (e = this._unreadCount) && void 0 !== e ? e : 0;
    }
    set unreadCount(e) {
        (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e;
    }
    get mentionCount() {
        return this._mentionCount;
    }
    set mentionCount(e) {
        (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eL._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eL._mentionChannels.add(this.channelId);
    }
    guessAckMessageId() {
        let e = q.Z.getMessages(this.channelId);
        if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter)
            return this.ackMessageId;
        if (!this.hasMentions())
            return this.lastMessageId;
        let t = null, n = this.mentionCount, r = ee.default.getCurrentUser();
        return e.forEach(e => {
            if (n > 0 && e.author.id !== (null == r ? void 0 : r.id))
                --n;
            else if (0 === n)
                return t = e.id, !1;
        }, this, !0), t;
    }
    get guildId() {
        if (null != this._guildId)
            return this._guildId;
        let e = Y.Z.getChannel(this.channelId);
        return this._guildId = null != e ? e.getGuildId() : null;
    }
    isPrivate() {
        if (this.type !== eo.W.CHANNEL)
            return !1;
        let e = Y.Z.getChannel(this.channelId);
        return null != e && e.isPrivate();
    }
    rebuildChannelState(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = arguments.length > 2 ? arguments[2] : void 0;
        if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, r && (this.mentionCount = 0), this.hasUnread()) {
            let e = ee.default.getCurrentUser(), t = this.getAckTimestamp(), i = !1, a = !1, o = null, s = q.Z.getMessages(this.channelId);
            s.forAll(n => {
                if (i) {
                    var s;
                    this.oldestUnreadMessageId = null !== (s = this._oldestUnreadMessageId) && void 0 !== s ? s : n.id;
                } else
                    i = n.id === this._ackMessageId;
                V.default.extractTimestamp(n.id) > t ? (this.unreadCount++, r && eO(n, e) && this.mentionCount++, o = null != o ? o : n.id) : a = !0;
            }), this.estimated = !s.hasPresent() || !(i || a) && s.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : o;
        }
        null != i && (this.mentionCount = i);
    }
    handleGuildEventRemoval(e, t) {
        var n;
        if (V.default.compare(this.ackMessageId, t) >= 0)
            return;
        let r = A.ZP.getGuildScheduledEventsForGuild(e), i = this.getAckTimestamp();
        if (isNaN(i))
            return;
        let a = null !== (n = this._ackMessageId) && void 0 !== n ? n : V.default.fromTimestamp(i), o = null, s = 0;
        r.forEach(e => {
            (0, A.Ld)(e) && (V.default.compare(e.id, o) > 0 && (o = e.id), V.default.compare(e.id, a) > 0 && s++);
        }), this.lastMessageId = o, this.mentionCount = s;
    }
    canTrackUnreads() {
        if (this.type !== eo.W.CHANNEL)
            return !0;
        if (this._isThread && !this._isActiveThread || this._isResourceChannel)
            return !1;
        let e = Y.Z.getBasicChannel(this.channelId);
        return null != e && ('basicPermissions' in e ? x.Z.has(e.basicPermissions, en.S7T.VIEW_CHANNEL) : !T.Z.isChannelGated(this.guildId, this.channelId) || Q.Z.can(en.Plq.VIEW_CHANNEL, e));
    }
    canBeUnread() {
        return !(this._isThread && !this._isJoinedThread || (0, O.h3)(this.channelId, [
            v.Z,
            R.Z
        ]) || !this._isThread && (0, D.r1)(this._guildId) && (this._lastMessageTimestamp < eg || !J.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads();
    }
    canHaveMentions() {
        return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, O.h3)(this.channelId, [
            v.Z,
            R.Z
        ]) || (0, D.r1)(this._guildId) && this._lastMessageTimestamp < eg) && this.canTrackUnreads();
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        if (t && (this._lastMessageTimestamp < eg || !J.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0))
            return {
                mentionCount: 0,
                unread: !1
            };
        if ('basicPermissions' in e) {
            if (!x.Z.has(e.basicPermissions, en.S7T.VIEW_CHANNEL))
                return {
                    mentionCount: 0,
                    unread: !1
                };
        } else if (T.Z.isChannelGated(this.guildId, this.channelId) && !Q.Z.can(en.Plq.VIEW_CHANNEL, e))
            return {
                mentionCount: 0,
                unread: !1
            };
        return r || i ? {
            mentionCount: this.mentionCount,
            unread: !1
        } : {
            mentionCount: this.mentionCount,
            unread: this.getAckTimestamp() < this._lastMessageTimestamp
        };
    }
    hasUnread() {
        return this.getAckTimestamp() < this._lastMessageTimestamp;
    }
    hasRecentlyVisitedAndRead() {
        return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eS && U.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
    }
    isForumPostUnread() {
        return !!this._isActiveThread && this.hasUnread();
    }
    hasMentions() {
        return this.getMentionCount() > 0;
    }
    getMentionCount() {
        return this.mentionCount;
    }
    hasUnreadOrMentions() {
        return this.hasMentions() || this.hasUnread();
    }
    ackPins() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.type !== eo.W.CHANNEL || !this.canTrackUnreads())
            return !1;
        if (null == e) {
            if (this.lastPinTimestamp === this.ackPinTimestamp)
                return !1;
            this._persisted = !0, ey(() => _.tn.post({
                url: en.ANM.PINS_ACK(this.channelId),
                oldFormErrors: !0
            }));
        }
        let t = ev(e);
        return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0;
    }
    ack(e) {
        let {
            messageId: t,
            local: n = !1,
            immediate: r = !1,
            force: i = !1,
            isExplicitUserAction: a = !1,
            location: o = { section: en.jXE.CHANNEL },
            trackAnalytics: s = !0
        } = e;
        if (!this._shouldAck(i, n, a) || !i && !this.canTrackUnreads())
            return !1;
        let l = this.hasMentions();
        return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, eE && (this.ackedWhileCached = !0), function (e) {
            if (null == e)
                return;
            let t = eL.get(e);
            if (t.type !== eo.W.CHANNEL)
                return;
            let n = Y.Z.getChannel(t.channelId);
            if (null == n || !n.isForumPost() || null == n.parent_id)
                return;
            let r = n.parent_id, i = eL.get(r);
            b.Z.hasLoaded(n.guild_id) && V.default.keys(b.Z.getThreadsForParent(n.guild_id, r)).every(e => e$.hasOpenedThread(e) || 0 > V.default.compare(e, i.ackMessageId)) && i.ack({});
        }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
            this.type === eo.W.CHANNEL ? this._ack(o, s) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null;
        }, l || r ? 0 : 3000)), this.outgoingAck = t), !0);
    }
    takeSnapshot() {
        let {default: e} = n(888369), t = this.guildId;
        return {
            unread: this.hasUnread(),
            mentionCount: this.mentionCount,
            guildUnread: null == t ? null : e.hasUnread(t),
            guildMentionCount: null == t ? null : e.getMentionCount(t),
            takenAt: Date.now()
        };
    }
    clearOutgoingAck() {
        this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null);
    }
    _shouldAck(e, t, n) {
        var r;
        return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== eo.W.CHANNEL || this.loadedMessages || (null === (r = Y.Z.getChannel(this.channelId)) || void 0 === r ? void 0 : r.isForumLikeChannel()))) || !1;
    }
    _ack(e, t) {
        let {outgoingAck: r} = this;
        if (null == r)
            return;
        let i = H.default.getId(), a = e_;
        this._persisted = !0;
        let o = this.recalculateFlags(), s = o === this.flags ? void 0 : o;
        ey(() => _.tn.post({
            url: en.ANM.MESSAGE_ACK(this.channelId, r),
            body: {
                token: e_,
                last_viewed: this.lastViewed,
                flags: s
            },
            oldFormErrors: !0
        })).then(e => {
            null != e && (e_ === a && i === H.default.getId() && (e_ = e.body.token), h.Z.dispatch({ type: 'MESSAGE_ACKED' }), t && n.e('54076').then(n.bind(n, 189229)).then(e => {
                let {default: t} = e;
                t(this.channelId);
            }));
        });
    }
    recalculateFlags() {
        if (this.type !== eo.W.CHANNEL)
            return;
        let e = Y.Z.getChannel(this.channelId);
        if (null != e)
            return e.isThread() ? 2 : null != e.guild_id ? 1 : 0;
    }
    _nonChannelAck() {
        let e;
        let {
            outgoingAck: t,
            channelId: n,
            type: r
        } = this;
        if (null != t) {
            switch (r) {
            case eo.W.GUILD_HOME:
            case eo.W.GUILD_EVENT:
            case eo.W.GUILD_ONBOARDING_QUESTION:
                e = en.ANM.GUILD_FEATURE_ACK(n, t, r);
                break;
            case eo.W.NOTIFICATION_CENTER:
            case eo.W.MESSAGE_REQUESTS:
                e = en.ANM.USER_NON_CHANNEL_ACK(t, r);
                break;
            default:
                return;
            }
            this._persisted = !0, ey(() => _.tn.post({
                url: e,
                body: {},
                oldFormErrors: !0
            }));
        }
    }
    delete() {
        var e;
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], n = Y.Z.getBasicChannel(this.channelId);
        el.log('Deleting ReadState', this.channelId, this.type, {
            remote: t,
            persisted: this._persisted,
            channelMissing: null == n,
            isOld: ex(this, eT()),
            validType: null != n && w.AW.has(n.type),
            readableType: null != n && (0, w.Em)(n.type),
            oldThreadCutoff: eT(),
            mentionCount: this.mentionCount,
            channelId: this.channelId,
            ackMessageId: this._ackMessageId,
            lastMessageId: this._lastMessageId
        }), t && this._persisted && _.tn.del({
            url: en.ANM.CHANNEL_ACK(this.channelId),
            body: {
                version: 2,
                read_state_type: this.type
            },
            oldFormErrors: !0
        }), null === (e = eL._readStates[this.type]) || void 0 === e || delete e[this.channelId], eL._mentionChannels.delete(this.channelId);
    }
    shouldDeleteReadState(e) {
        if (0 !== W.Z.totalUnavailableGuilds)
            return !1;
        if (null != this.type && this.type !== eo.W.CHANNEL)
            return !function (e) {
                switch (e.type) {
                case eo.W.GUILD_HOME:
                case eo.W.GUILD_EVENT:
                case eo.W.GUILD_ONBOARDING_QUESTION:
                    return null != K.Z.getGuild(e.channelId);
                case eo.W.NOTIFICATION_CENTER:
                    var t;
                    return V.default.cast(null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                default:
                    return !0;
                }
            }(this);
        let t = Y.Z.getBasicChannel(this.channelId);
        if (null == t)
            return !!ex(this, e) || !1;
        return !!w.AW.has(t.type) && (!(0, w.Em)(t.type) || !(0, w.hv)(t.type) && (!!(w.Ec.has(t.type) && function (e, t, n) {
            let r = e.guildId;
            return !(null != r && b.Z.isActive(r, t.parent_id, e.channelId)) && ex(e, n);
        }(this, t, e)) || !!(this.mentionCount > 0) && !Q.Z.canBasicChannel(eu, t) || !1));
    }
    getAckTimestamp() {
        let e, t;
        if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp))
            return this._ackMessageTimestamp;
        if (this._isThread)
            return this._ackMessageTimestamp = eU(this.guildId, this.channelId), this._ackMessageId = V.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
        if (this.type === eo.W.GUILD_EVENT || this.type === eo.W.GUILD_ONBOARDING_QUESTION)
            e = K.Z.getGuild(this.channelId);
        else if ((0, ei.AB)(this.channelId))
            e = K.Z.getGuild(this.guildId);
        else {
            let t = Y.Z.getChannel(this.channelId);
            if (null != t) {
                let n = t.getGuildId();
                e = K.Z.getGuild(n);
            }
        }
        return null != e ? isNaN(t = ew(e)) && (t = V.default.extractTimestamp(this.channelId)) : t = V.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t;
    }
    get oldestUnreadTimestamp() {
        return null != this.oldestUnreadMessageId ? V.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
    }
    syncThreadSettings() {
        this._isThread = !0;
        let e = Y.Z.getChannel(this.channelId);
        if (null == e)
            return el.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
        let t = this.guildId, n = null != t && b.Z.isActive(t, e.parent_id, this.channelId), r = M.Z.hasJoined(this.channelId);
        return (this._isActiveThread !== n || this._isJoinedThread !== r) && (this._isActiveThread = n, this._isJoinedThread = r, !0);
    }
    recordLastViewedTime() {
        let e = Math.ceil((Date.now() - V.DISCORD_EPOCH) / G.Z.Millis.DAY);
        e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
            force: !0,
            trackAnalytics: !1
        }));
    }
    constructor(e, t = eo.W.CHANNEL) {
        es(this, 'channelId', void 0), es(this, 'type', eo.W.CHANNEL), es(this, '_guildId', void 0), es(this, '_isThread', void 0), es(this, '_isActiveThread', void 0), es(this, '_isJoinedThread', void 0), es(this, '_isResourceChannel', void 0), es(this, '_persisted', void 0), es(this, 'loadedMessages', void 0), es(this, '_lastMessageId', void 0), es(this, '_lastMessageTimestamp', void 0), es(this, '_ackMessageId', void 0), es(this, '_ackMessageTimestamp', void 0), es(this, 'isManualAck', void 0), es(this, 'ackPinTimestamp', void 0), es(this, 'lastPinTimestamp', void 0), es(this, '_oldestUnreadMessageId', void 0), es(this, 'oldestUnreadMessageIdStale', void 0), es(this, 'estimated', void 0), es(this, '_unreadCount', void 0), es(this, '_mentionCount', void 0), es(this, 'flags', void 0), es(this, 'lastViewed', void 0), es(this, 'outgoingAck', void 0), es(this, 'outgoingAckTimer', null), es(this, 'ackMessageIdAtChannelSelect', null), es(this, 'ackedWhileCached', void 0), es(this, 'snapshot', void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null;
    }
}
function eb(e) {
    e.forEach(e => {
        if ((0, w.Em)(e.type)) {
            let t = eL.get(e.id);
            t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ev(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(ei.zZ.IS_GUILD_RESOURCE_CHANNEL), w.Ec.has(e.type) && t.syncThreadSettings();
        }
    });
}
function eM(e) {
    e.forEach(e => {
        if ((0, w.Em)(e.type)) {
            var t;
            let n = eL.get(e.id);
            n.lastMessageId = e.last_message_id, n.lastPinTimestamp = ev(e.last_pin_timestamp), n._isResourceChannel = (0, k.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, ei.zZ.IS_GUILD_RESOURCE_CHANNEL), w.Ec.has(e.type) && n.syncThreadSettings();
        }
    });
}
function eP(e) {
    (function (e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(t => {
            if (!w.AW.has(t.type))
                return;
            let n = eL.get(t.id);
            n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = ev(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = V.default.fromTimestamp(eU(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eU(e.id, t.id));
        });
    }(e), function (e) {
        var t, n;
        if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eL.getIfExists(e.id, eo.W.GUILD_EVENT))
            return;
        let r = eL.get(e.id, eo.W.GUILD_EVENT);
        r._guildId = e.id;
        let i = 0, a = null, o = null !== (n = r._ackMessageId) && void 0 !== n ? n : V.default.fromTimestamp(r.getAckTimestamp());
        e.guild_scheduled_events.forEach(e => {
            V.default.compare(e.id, a) > 0 && (a = e.id), V.default.compare(e.id, o) > 0 && i++;
        }), r.lastMessageId = a, r.mentionCount = i;
    }(e), function (e) {
        eL.get(e.id, eo.W.GUILD_HOME).lastMessageId = V.default.fromTimestamp(c()(Date.now()).subtract(24, 'h').valueOf());
    }(e), function (e) {
        let t = K.Z.getGuild(e.id);
        if (null == t)
            return;
        let n = null == t ? void 0 : t.latestOnboardingQuestionId;
        if (null == n)
            return;
        let r = eL.get(t.id, eo.W.GUILD_ONBOARDING_QUESTION);
        r._guildId = t.id, r.lastMessageId = n;
    }(e));
}
es(eL, '_guildReadStateSentinels', {}), es(eL, '_readStates', {}), es(eL, '_mentionChannels', new Set());
function eU(e, t) {
    var n, r, i;
    let a = Y.Z.getChannel(t), o = K.Z.getGuild(null != e ? e : null == a ? void 0 : a.guild_id), s = (null == a ? void 0 : a.isForumPost()) ? 0 : ew(o), l = (null !== (i = null === (n = M.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 0) - 5000;
    isNaN(l) && (l = -5000);
    let u = null == a ? void 0 : null === (r = a.threadMetadata) || void 0 === r ? void 0 : r.archiveTimestamp, c = null != u ? new Date(u).getTime() - 1 : 0;
    isNaN(c) && (c = 0);
    let d = Math.max(l, c);
    return d <= 0 && (d = V.default.extractTimestamp(t) - 1), (isNaN(d) || d <= 0) && (d = 0), isNaN(s) ? d : Math.max(s, d);
}
function ew(e) {
    if (null != e && null != e.joinedAt) {
        if (e.joinedAt instanceof Date) {
            let t = e.joinedAt.getTime();
            if (!isNaN(t))
                return t;
        } else if ('string' == typeof e.joinedAt) {
            let t = new Date(e.joinedAt).getTime();
            if (!isNaN(t))
                return t;
        } else if ('number' == typeof e.joinedAt && !isNaN(e.joinedAt))
            return e.joinedAt;
    }
    return Date.now();
}
function ex(e, t) {
    return !!(e.mentionCount > 0) || !(V.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && V.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && V.default.compare(e._lastMessageId, t) > 0) && !0;
}
function eG(e) {
    if (null != e) {
        let t = eL.get(e);
        if (eD(t))
            return t.ack({});
    }
    return !1;
}
function ek() {
    null != ep && clearTimeout(ep);
}
function eB(e) {
    if (null != e.channelUpdates) {
        var t;
        eb(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes);
    }
    if (null != e.channelTimestampUpdates)
        for (let t of e.channelTimestampUpdates) {
            let e = eL.get(t.id);
            null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = ev(t.last_pin_timestamp));
        }
}
function eF(e) {
    let {channelId: t} = e;
    eL.get(t).rebuildChannelState();
}
function eV(e) {
    let {threads: t} = e;
    eM(t);
}
function eH(e) {
    let {
        messages: t,
        threads: n
    } = e;
    for (let e of t)
        eM(e.map(e => {
            let {thread: t} = e;
            return t;
        }).filter(B.lm));
    eM(n);
}
function eZ(e) {
    let t = ee.default.getCurrentUser();
    return null != e.creator_id && null != t && e.creator_id === t.id;
}
function eY(e) {
    let {channel: t} = e;
    return eL.clear(t.id);
}
function ej() {
    let e = Z.ZP.getCurrentSidebarChannelId(ec), t = !1;
    return ed !== e ? (t = eK(ed), ed = e) : t = eG(e) || t, t;
}
function eW(e) {
    if (null != e)
        eL.get(e).isManualAck = !1;
}
function eK(e) {
    if (null == e)
        return !1;
    let t = eL.get(e);
    return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0);
}
function ez(e) {
    let {
            channelId: t,
            messageId: n,
            manual: r,
            newMentionCount: i
        } = e, a = eL.get(t);
    return r ? (a.rebuildChannelState(n, !0, i), !0) : n !== a._ackMessageId && a.ack({
        messageId: n,
        local: !0
    });
}
function eq(e) {
    let {
        id: t,
        ackType: n,
        ackedId: r,
        local: i
    } = e;
    return eQ(t, n, r, i);
}
function eQ(e, t, n, r) {
    var i;
    let a = eL.get(e, t);
    return n !== a.ackMessageId && a.lastMessageId !== a.ackMessageId && (null != a.lastMessageId || 0 !== a.mentionCount) && (n = null !== (i = null != n ? n : a.lastMessageId) && void 0 !== i ? i : V.default.fromTimestamp(a.getAckTimestamp()), a.ack({
        messageId: n,
        local: null == r || r
    }));
}
class eX extends (a = d.ZP.Store) {
    initialize() {
        let e = [
            j.Z,
            ee.default,
            K.Z,
            W.Z,
            Y.Z,
            $.Z,
            q.Z,
            Q.Z,
            m.Z,
            b.Z,
            M.Z,
            Z.ZP,
            A.ZP,
            S.Z,
            T.Z,
            J.ZP,
            et.Z,
            y.Z,
            v.Z,
            U.Z,
            R.Z
        ];
        this.waitFor(...e), this.syncWith([Z.ZP], ej);
    }
    getReadStatesByChannel() {
        var e;
        return null !== (e = eL._readStates[eo.W.CHANNEL]) && void 0 !== e ? e : {};
    }
    getForDebugging(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getIfExists(e, t);
    }
    getNotifCenterReadState(e) {
        var t;
        return null === (t = eL._readStates[eo.W.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e];
    }
    hasUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1);
    }
    hasUnreadOrMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
    }
    hasTrackedUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1);
    }
    isForumPostUnread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.isForumPostUnread(), !1);
    }
    getUnreadCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0);
    }
    getMentionCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL, n = eL.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0);
        if ((0, I.Z)(e)) {
            if (n > 0)
                return 1;
        }
        return n;
    }
    getGuildChannelUnreadState(e, t, n, r, i) {
        return eL.getValue(e.id, eo.W.CHANNEL, a => a.getGuildChannelUnreadState(e, t, n, r, i), {
            mentionCount: 0,
            unread: !1
        });
    }
    hasRecentlyVisitedAndRead(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1);
    }
    ackMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null);
    }
    getTrackedAckMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null);
    }
    lastMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.lastMessageId, null);
    }
    lastMessageTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.lastMessageTimestamp, 0);
    }
    lastPinTimestamp(e) {
        return eL.getValue(e, eo.W.CHANNEL, e => e.lastPinTimestamp, null);
    }
    getOldestUnreadMessageId(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null);
    }
    getOldestUnreadTimestamp(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0);
    }
    isEstimated(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e.estimated, !1);
    }
    hasOpenedThread(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
        return eL.getValue(e, t, e => e._persisted, !1);
    }
    hasUnreadPins(e) {
        return eL.getValue(e, eo.W.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
    }
    isNewForumThread(e, t, n) {
        let r = eL.get(t);
        if (!0 === eL.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || 0 >= V.default.compare(e, r.ackMessageIdAtChannelSelect))
            return !1;
        let i = ew(n);
        return V.default.extractTimestamp(e) > i;
    }
    getAllReadStates(e) {
        let t = [];
        return eL.forEach(n => {
            switch (n.type) {
            case eo.W.GUILD_HOME:
            case eo.W.GUILD_EVENT:
            case eo.W.GUILD_ONBOARDING_QUESTION:
                null != K.Z.getGuild(n.channelId) && t.push(n.serialize(e));
                break;
            case eo.W.NOTIFICATION_CENTER:
            case eo.W.MESSAGE_REQUESTS:
                var r;
                V.default.cast(null === (r = ee.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) === n.channelId && t.push(n.serialize(e));
                break;
            default:
                t.push(n.serialize(e));
            }
        }), t;
    }
    getGuildUnreadsSentinel(e) {
        return eL.getGuildSentinels(e).unreadsSentinel;
    }
    getMentionChannelIds() {
        return eL.getMentionChannelIds();
    }
    getNonChannelAckId(e) {
        var t;
        let n = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        return null == n ? null : eL.get(n, e).ackMessageId;
    }
    getSnapshot(e, t) {
        let n = eL.get(e);
        return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
    }
}
es(eX, 'displayName', 'ReadStateStore');
let e$ = new eX(h.Z, {
    BACKGROUND_SYNC_CHANNEL_MESSAGES: function (e) {
        let {changesByChannelId: t} = e;
        for (let e in t) {
            var n, r;
            let i = t[e], a = eL.getIfExists(e);
            if (null != a)
                for (let e of [null === (n = i.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (r = i.modified_messages) && void 0 !== r ? r : []).filter(B.lm))
                    1 === V.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id);
        }
    },
    CONNECTION_OPEN: function (e) {
        var t, n;
        let {
            guilds: r,
            relationships: i,
            initialPrivateChannels: a,
            readState: o
        } = e;
        eN(), e_ = null, !eE && !o.partial && eL.clearAll(), eE = !1, o.entries.forEach(e => {
            var t, n, r;
            let i = null !== (t = e.read_state_type) && void 0 !== t ? t : eo.W.CHANNEL;
            if (i !== eo.W.CHANNEL) {
                ;
                e = {
                    id: (r = e).id,
                    read_state_type: r.read_state_type,
                    mention_count: r.badge_count,
                    last_message_id: r.last_acked_id
                };
            }
            let a = eL.get(e.id, i);
            a._persisted = !0, a._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, a.flags = e.flags, a.lastViewed = e.last_viewed;
            let o = Y.Z.getBasicChannel(e.id);
            null != o && (0, w.Q5)(o.type) && (null == e.last_message_id || 0 === e.last_message_id) ? a.ackMessageId = V.default.fromTimestamp(eU(o.guild_id, o.id)) : a.ackedWhileCached ? -1 === V.default.compare(a.ackMessageId, e.last_message_id) && (a.ackMessageId = e.last_message_id) : a.ackMessageId = e.last_message_id, a.ackedWhileCached = void 0, a.ackPinTimestamp = ev(e.last_pin_timestamp), eL._mentionChannels.delete(a.channelId), a._mentionCount > 0 && a.canHaveMentions() && eL._mentionChannels.add(a.channelId);
        }), eL.resetGuildSentinels();
        let s = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        for (let e of (null != s && (eL.get(s, eo.W.NOTIFICATION_CENTER).lastMessageId = V.default.fromTimestamp(Date.now())), function (e) {
                let t = ee.default.getCurrentUser();
                if (null == t)
                    return 0;
                let n = eL.get(t.id, eo.W.NOTIFICATION_CENTER);
                e.forEach(e => {
                    if (null == e.since || e.type !== en.OGo.PENDING_INCOMING)
                        return;
                    let t = new Date(e.since).getTime();
                    (null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = V.default.fromTimestamp(t));
                });
            }(i), eb(a), r))
            eb(null !== (n = e.channels) && void 0 !== n ? n : []), eB(e), eP(e);
        ek(), ep = setTimeout(() => function (e) {
            let t = eT();
            for (let r of e) {
                var n;
                let e = null !== (n = r.read_state_type) && void 0 !== n ? n : eo.W.CHANNEL, i = eL.get(r.id, e);
                i.shouldDeleteReadState(t) && i.delete();
            }
        }(o.entries), 10 * G.Z.Millis.SECOND);
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let {lazyPrivateChannels: t} = e;
        eb(t);
    },
    LOGOUT: ek,
    OVERLAY_INITIALIZE: function (e) {
        let {
            readStates: t,
            selectedChannelId: n
        } = e;
        eN(), e_ = null, ec = n, ed = Z.ZP.getCurrentSidebarChannelId(ec), eL.clearAll(), t.forEach(e => {
            let t = eL.get(e.channelId);
            t.deserializeForOverlay(e), t.type === eo.W.CHANNEL && t.rebuildChannelState();
        });
    },
    CACHE_LOADED: function (e) {
        let {readStates: t} = e;
        eE = !0, eN(), t.forEach(e => {
            var t;
            let n = null !== (t = e.type) && void 0 !== t ? t : eo.W.CHANNEL;
            e.type = n, null == eL._readStates[n] && (eL._readStates[n] = {}), eL._readStates[n][e.channelId] = (0, f.gh)(e, eL);
        });
    },
    GUILD_CREATE: function (e) {
        var t;
        let {guild: n} = e, r = eT();
        eL.forEach(e => {
            e.guildId === n.id && e.shouldDeleteReadState(r) && e.delete(!1);
        }), eb(null !== (t = n.channels) && void 0 !== t ? t : []), eB(n), eP(n);
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let {
                channelId: t,
                isAfter: n,
                messages: r
            } = e, i = eL.get(t);
        i.loadedMessages = !0;
        let a = q.Z.getMessages(t);
        null != a && (r.length > 0 && 1 === V.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount ? i.rebuildChannelState() : a.hasPresent() || a.jumpTargetId === i.ackMessageId ? i.rebuildChannelState() : n && null != i.ackMessageId && a.has(i.ackMessageId, !0) && (i.unreadCount += r.length, null == i.oldestUnreadMessageId && i.rebuildChannelState())), eM(r.map(e => e.thread).filter(B.lm));
    },
    MESSAGE_CREATE: function (e) {
        let t, n, {
                channelId: i,
                message: a,
                isPushNotification: o
            } = e, s = eL.get(i);
        s.lastMessageId = a.id;
        let l = ee.default.getCurrentUser(), u = Y.Z.getBasicChannel(i);
        if (null != a.author && null != l && a.author.id === l.id && !en.V$x.SELF_MENTIONABLE_SYSTEM.has(a.type))
            return null != s.outgoingAck && s.clearOutgoingAck(), ez({
                channelId: i,
                messageId: a.id,
                manual: !1
            });
        let c = (0, N.PP)();
        if ((null == c ? void 0 : c.isReady()) === !0) {
            let e = c.getCurrentRoute();
            if (m.Z.getChatOpen(s.channelId))
                t = s.channelId;
            else if ((null == e ? void 0 : e.name) === 'channel')
                t = e.params.channelId;
            else if ((null == e ? void 0 : e.name) === 'guilds') {
                var d;
                t = null === (d = e.params) || void 0 === d ? void 0 : d.channelId;
            }
        } else
            null == c && (t = $.Z.getChannelId(), n = Z.ZP.getCurrentSidebarChannelId(t));
        let _ = t === i || n === i;
        if (_ && eD(s) && !o || null != r && r.isInstanceFocused() && _ && r.isInstanceUILocked() && r.isPinned(en.Odu.TEXT))
            return s.ack({ messageId: a.id });
        (null == s.oldestUnreadMessageId || s.oldestUnreadMessageIdStale) && (s.oldestUnreadMessageId = a.id), s.unreadCount++, !(X.Z.isBlockedForMessage(a) || a.type === en.uaV.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === en.d4z.GROUP_DM) && function (e, t, n) {
            if (null != t && (0, C.Hl)({
                    rawMessage: e,
                    userId: t.id,
                    suppressEveryone: J.ZP.isSuppressEveryoneEnabled(n.guildId),
                    suppressRoles: J.ZP.isSuppressRolesEnabled(n.guildId)
                }))
                return !0;
            let r = Y.Z.getChannel(e.channel_id);
            return !!eR(r) || !!J.ZP.mentionOnAllMessages && null != r && !r.isVocal() && !J.ZP.isChannelMuted(r.guild_id, r.id) && J.ZP.resolvedMessageNotifications(r) === en.bL.ALL_MESSAGES || !1;
        }(a, l, s) && s.mentionCount++;
    },
    MESSAGE_DELETE: eF,
    MESSAGE_DELETE_BULK: eF,
    MESSAGE_ACK: ez,
    CHANNEL_ACK: function (e) {
        let {
                channelId: t,
                messageId: n,
                immediate: r = !1,
                force: i = !1,
                context: a,
                location: o
            } = e, s = eL.get(t), l = s.ack({
                messageId: n,
                local: a !== en.e3s,
                immediate: r,
                force: i,
                isExplicitUserAction: !0,
                location: o
            });
        return null != n ? (s.rebuildChannelState(), !0) : l;
    },
    CHANNEL_LOCAL_ACK: function (e) {
        let {channelId: t} = e;
        return eL.get(t).ack({
            messageId: void 0,
            local: !0,
            immediate: void 0,
            force: void 0,
            isExplicitUserAction: !0
        });
    },
    CHANNEL_PINS_ACK: function (e) {
        let {
            channelId: t,
            timestamp: n
        } = e;
        return eL.get(t).ackPins(n);
    },
    CHANNEL_PINS_UPDATE: function (e) {
        let {
                channelId: t,
                lastPinTimestamp: n
            } = e, r = eL.get(t), i = ev(n);
        return r.lastPinTimestamp !== i && (r.lastPinTimestamp = i, !0);
    },
    CHANNEL_SELECT: function (e) {
        let {channelId: t} = e, n = Z.ZP.getCurrentSidebarChannelId(t), r = Y.Z.getChannel(t);
        if (null != r) {
            var i;
            let e = eL.get(r.id);
            e.ackMessageIdAtChannelSelect = null !== (i = e.ackMessageId) && void 0 !== i ? i : V.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime();
        }
        eW(ec), eW(ed);
        let a = !1;
        return ec !== t && (a = eK(ec) || a, a = eK(ed) || a), (ec === t || (null == r ? void 0 : r.type) != null && en.TPd.GUILD_THREADS_ONLY.has(r.type)) && (a = eG(t) || a), ec === t && (a = eG(n) || a), ec = t, ed = n, a;
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let {channelId: t} = e;
        if (null == t)
            return;
        let n = eL.get(t);
        if (!n.hasMentions())
            return n.oldestUnreadMessageId = null, n.ack({ isExplicitUserAction: !0 });
    },
    CHANNEL_CREATE: function (e) {
        let {channel: t} = e;
        if (!(0, w.Em)(t.type))
            return !1;
        let n = eL.get(t.id);
        n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = ev(t.lastPinTimestamp);
    },
    THREAD_CREATE: function (e) {
        let {channel: t} = e;
        (function (e) {
            if (!w.AW.has(e.type))
                return 0;
            let t = eL.get(e.id);
            t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ev(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === H.default.getId() && (t.loadedMessages = !0);
        }(t), function (e) {
            let t = e.parent_id;
            eL.get(t).lastMessageId = e.id;
            let n = ee.default.getCurrentUser();
            if (e.ownerId === (null == n ? void 0 : n.id))
                eL.get(e.id)._persisted = !0, ez({
                    channelId: t,
                    messageId: e.id,
                    manual: !1
                });
        }(t));
    },
    THREAD_UPDATE: function (e) {
        let {channel: t} = e;
        return !!w.AW.has(t.type) && eL.get(t.id).syncThreadSettings();
    },
    THREAD_LIST_SYNC: function (e) {
        let {threads: t} = e;
        t.forEach(e => {
            if (!w.AW.has(e.type))
                return;
            let t = eL.get(e.id);
            if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ev(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = M.Z.hasJoined(e.id), e.isForumPost()) {
                let t = eL.get(e.parent_id);
                0 > V.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
            }
        });
    },
    LOAD_THREADS_SUCCESS: eV,
    LOAD_ARCHIVED_THREADS_SUCCESS: eV,
    SEARCH_FINISH: eH,
    MOD_VIEW_SEARCH_FINISH: eH,
    THREAD_MEMBER_UPDATE: function (e) {
        let {id: t} = e;
        return eL.get(t).syncThreadSettings();
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        return (0, P.s)(e) && eL.get(e.id).syncThreadSettings();
    },
    CHANNEL_DELETE: eY,
    THREAD_DELETE: eY,
    WINDOW_FOCUS: function (e) {
        let t = !1;
        for (let [n, r] of V.default.entries(em))
            r === e.windowId && (t = function (e, t) {
                if (null == e)
                    return !1;
                let n = eL.get(e);
                return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eG(e);
            }(n, e.focused) || t);
        return t;
    },
    UPDATE_CHANNEL_DIMENSIONS: function (e) {
        let {channelId: t} = e;
        return eG(t);
    },
    CURRENT_USER_UPDATE: function () {
        e_ = null;
    },
    DRAWER_OPEN: function () {
        if (null != ec) {
            let e = eL.get(ec);
            !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0);
        }
        return !1;
    },
    DRAWER_CLOSE: function () {
        return eG(ec);
    },
    BULK_ACK: function (e) {
        var t, n, r;
        let {
            channels: i,
            context: a,
            onFinished: o
        } = e;
        t = i.filter(e => null != e.messageId && e$.hasUnreadOrMentions(e.channelId, e.readStateType)), n = a, r = o, t.forEach(e => {
            let {
                channelId: t,
                messageId: n,
                readStateType: r
            } = e;
            eL.get(t, r).ack({
                messageId: n,
                local: !0,
                immediate: void 0,
                force: void 0,
                isExplicitUserAction: !0
            });
        }), n !== en.e3s || (ef.push(...t.map(e => ({
            channel_id: e.channelId,
            message_id: e.messageId,
            read_state_type: e.readStateType
        }))), eh || eC(r));
    },
    ENABLE_AUTOMATIC_ACK: function (e) {
        let {
            channelId: t,
            windowId: n
        } = e;
        return em[t] !== n && (l()(void 0 === em[t], 'handleEnableAutomaticAck: channel already visible in another window'), em[t] = n, eG(t));
    },
    DISABLE_AUTOMATIC_ACK: function (e) {
        let {channelId: t} = e;
        return em[t] = void 0, !1;
    },
    GUILD_FEATURE_ACK: eq,
    GUILD_SCHEDULED_EVENT_CREATE: function (e) {
        let {guildScheduledEvent: t} = e, n = t.guild_id, r = eL.get(t.guild_id, eo.W.GUILD_EVENT);
        if (r.lastMessageId = t.id, eZ(t)) {
            eq({
                type: 'GUILD_FEATURE_ACK',
                id: n,
                ackType: eo.W.GUILD_EVENT,
                ackedId: t.id,
                local: !1
            });
            return;
        }
        !J.ZP.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let {guildScheduledEvent: t} = e, n = t.guild_id;
        if (eZ(t) || ![
                ea.p1.CANCELED,
                ea.p1.COMPLETED
            ].includes(t.status))
            return !1;
        eL.get(n, eo.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
        let {guildScheduledEvent: t} = e, n = t.guild_id;
        if (eZ(t))
            return !1;
        eL.get(t.guild_id, eo.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
    },
    GUILD_DELETE: function (e) {
        let {guild: t} = e;
        return eL.clear(t.id, eo.W.GUILD_EVENT);
    },
    GUILD_UPDATE: function (e) {
        let {guild: t} = e, n = t.latest_onboarding_question_id;
        if (null == n)
            return;
        let r = eL.get(t.id, eo.W.GUILD_ONBOARDING_QUESTION);
        r._guildId = t.id, r.lastMessageId = n;
    },
    RESORT_THREADS: function (e) {
        let {channelId: t} = e;
        return eG(t);
    },
    CHANNEL_RTC_UPDATE_CHAT_OPEN: function (e) {
        let {
            channelId: t,
            chatOpen: n
        } = e;
    },
    DECAY_READ_STATES: eN,
    NOTIFICATION_CENTER_ITEM_CREATE: function (e) {
        var t;
        let {item: n} = e, r = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        if (null == r)
            return !1;
        let i = eL.get(r, eo.W.NOTIFICATION_CENTER);
        i.lastMessageId = n.id;
        if (0, y.Z.active) {
            eQ(r, eo.W.NOTIFICATION_CENTER, n.id, !1);
            return;
        }
        i.mentionCount++;
    },
    RELATIONSHIP_ADD: function (e) {
        let t = ee.default.getCurrentUser();
        if (null == t || null == e.relationship.since || e.relationship.type !== en.OGo.PENDING_INCOMING && e.relationship.type !== en.OGo.FRIEND)
            return !1;
        let n = eL.get(t.id, eo.W.NOTIFICATION_CENTER), r = e.relationship.type === en.OGo.FRIEND, i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(), a = null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0;
        a < i && (n.lastMessageId = V.default.fromTimestamp(i), (0, y.Z.active) ? eQ(t.id, eo.W.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
    },
    RELATIONSHIP_REMOVE: function (e) {
        let t = ee.default.getCurrentUser();
        if (null == t || null == e.relationship.since || e.relationship.type !== en.OGo.PENDING_INCOMING)
            return !1;
        let n = eL.get(t.id, eo.W.NOTIFICATION_CENTER), r = new Date(e.relationship.since).getTime();
        (null != n.ackMessageId ? V.default.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1));
    },
    NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
        var t;
        let {
            ids: n,
            optimistic: r
        } = e;
        if (r || y.Z.active)
            return !1;
        let i = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        if (null == i)
            return !1;
        let a = eL.get(i, eo.W.NOTIFICATION_CENTER);
        n.forEach(e => {
            0 > V.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0));
        });
    },
    USER_NON_CHANNEL_ACK: function (e) {
        var t;
        let {
                ackType: n,
                ackedId: r,
                local: i
            } = e, a = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        return null != a && eQ(a, n, r, i);
    },
    PASSIVE_UPDATE_V2: function (e) {
        let t = !1;
        for (let n of e.channels) {
            let e = eL.get(n.id), r = ev(n.lastPinTimestamp);
            (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) && (t = !0, e.lastMessageId = n.lastMessageId, e.lastPinTimestamp = r);
        }
        return t;
    },
    CLEAR_OLDEST_UNREAD_MESSAGE: function (e) {
        let {channelId: t} = e;
        return eK(t);
    },
    TRY_ACK: function (e) {
        let {channelId: t} = e;
        return eG(t);
    },
    MESSAGE_REQUEST_ACK: function (e) {
        var t;
        let {ackedId: n} = e, r = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        if (null == r)
            return !1;
        let i = eL.get(r, eo.W.MESSAGE_REQUESTS);
        if (n === i.ackMessageId)
            return !1;
        i.ackMessageId = n, i.ack({
            messageId: n,
            isExplicitUserAction: !0
        });
    },
    MESSAGE_REQUEST_CLEAR_ACK: function (e) {
        var t;
        let n = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
        if (null == n)
            return !1;
        let r = eL.get(n, eo.W.MESSAGE_REQUESTS);
        if (null == r.ackMessageId)
            return !1;
        r.ackMessageId = void 0;
    }
});
t.ZP = e$;
