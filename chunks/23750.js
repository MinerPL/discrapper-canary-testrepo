n.d(t, {
    Hx: function () {
        return f;
    },
    pi: function () {
        return E;
    }
}),
    n(789020),
    n(653041),
    n(724458);
var r = n(373793),
    i = n(81825),
    a = n(712057),
    s = n(978003),
    o = n(566006),
    l = n(995774),
    u = n(630388),
    c = n(358085),
    d = n(981631);
function _(e, t, n) {
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
class E extends i.Z {
    hasFlag(e) {
        return (0, u.yE)(this.flags, e);
    }
    constructor(e) {
        var t, n, r, i, a, s, o, l, u, c, E, f;
        super(), _(this, 'type', void 0), _(this, 'content', void 0), _(this, 'attachments', void 0), _(this, 'embeds', void 0), _(this, 'timestamp', void 0), _(this, 'editedTimestamp', void 0), _(this, 'flags', void 0), _(this, 'components', void 0), _(this, 'codedLinks', void 0), _(this, 'stickers', void 0), _(this, 'stickerItems', void 0), (this.type = null !== (t = e.type) && void 0 !== t ? t : d.uaV.DEFAULT), (this.content = null !== (n = e.content) && void 0 !== n ? n : ''), (this.attachments = null !== (r = e.attachments) && void 0 !== r ? r : []), (this.embeds = null !== (i = e.embeds) && void 0 !== i ? i : []), (this.timestamp = null !== (a = e.timestamp) && void 0 !== a ? a : new Date()), (this.editedTimestamp = null !== (s = e.editedTimestamp) && void 0 !== s ? s : null), (this.flags = null !== (o = e.flags) && void 0 !== o ? o : 0), (this.components = null !== (l = e.components) && void 0 !== l ? l : []), (this.codedLinks = null !== (u = e.codedLinks) && void 0 !== u ? u : []), (this.stickers = null !== (c = e.stickers) && void 0 !== c ? c : []), (this.stickerItems = null !== (f = null !== (E = e.sticker_items) && void 0 !== E ? E : e.stickerItems) && void 0 !== f ? f : []);
    }
}
class f extends i.Z {
    constructor(e) {
        super(), _(this, 'message', void 0), (this.message = new E(e.message));
    }
}
t.ZP = class e extends E {
    isEdited() {
        return null != this.editedTimestamp;
    }
    getChannelId() {
        return this.channel_id;
    }
    getReaction(e) {
        return this.reactions.find((t) => (0, l.ir)(t.emoji, e));
    }
    getContentMessage() {
        if ((0, s.Z)(this)) {
            var e;
            return null === (e = this.messageSnapshots[0]) || void 0 === e ? void 0 : e.message;
        }
        return this;
    }
    userHasReactedWithEmoji(e, t) {
        return this.reactions.some((n) => {
            if ((0, l.ir)(n.emoji, e)) return (t && n.me) || (!t && n.me_burst);
        });
    }
    addReaction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.O.NORMAL,
            i = -1,
            s = this.reactions.map((s, u) => {
                if ((0, l.ir)(s.emoji, e)) {
                    if (((i = u), r === o.O.BURST)) {
                        if (t && s.me) return s;
                        let e = t && s.me_burst ? s.burst_count : s.burst_count + 1,
                            r = null != s.burst_colors && s.burst_colors.length > 0 ? s.burst_colors : n;
                        s = {
                            ...s,
                            me_burst: !!t || s.me_burst,
                            burst_count: e,
                            count_details: {
                                ...s.count_details,
                                burst: e
                            },
                            burst_colors: r,
                            themedBurstColors: (0, a.u)({
                                colors: r,
                                shouldProcessMobileColors: (0, c.isIOS)()
                            })
                        };
                    } else if (r === o.O.VOTE) {
                        var d, _;
                        let e = null !== (_ = null === (d = s.count_details) || void 0 === d ? void 0 : d.vote) && void 0 !== _ ? _ : 0,
                            n = t && s.me_vote ? e : e + 1;
                        s = {
                            ...s,
                            count_details: {
                                ...s.count_details,
                                vote: n
                            },
                            me_vote: !!t || s.me_vote
                        };
                    } else {
                        if (t && s.me_burst) return s;
                        let e = t && s.me ? s.count : s.count + 1;
                        s = {
                            ...s,
                            count: e,
                            count_details: {
                                ...s.count_details,
                                normal: e
                            },
                            me: !!t || s.me
                        };
                    }
                }
                return s;
            });
        return (
            -1 === i &&
                (r === o.O.BURST
                    ? s.push({
                          emoji: e,
                          me: !1,
                          me_burst: t,
                          count: 0,
                          count_details: {
                              burst: 1,
                              normal: 0
                          },
                          burst_count: 1,
                          burst_colors: n,
                          themedBurstColors: (0, a.u)({
                              colors: null != n ? n : [],
                              shouldProcessMobileColors: (0, c.isIOS)()
                          })
                      })
                    : r === o.O.VOTE
                      ? s.push({
                            emoji: e,
                            me: !1,
                            me_burst: !1,
                            me_vote: t,
                            count: 0,
                            count_details: {
                                burst: 0,
                                normal: 0,
                                vote: 1
                            },
                            burst_count: 0,
                            burst_colors: []
                        })
                      : s.push({
                            emoji: e,
                            me: t,
                            me_burst: !1,
                            count: 1,
                            count_details: {
                                burst: 0,
                                normal: 1
                            },
                            burst_count: 0,
                            burst_colors: []
                        })),
            this.set('reactions', s)
        );
    }
    addReactionBatch(e, t) {
        return e.reduce((e, n) => {
            let { users: r, emoji: i } = n;
            return r.reduce((e, n) => e.addReaction(i, n === t), e);
        }, this);
    }
    removeReaction(e) {
        var t, n, r, i;
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.O.NORMAL,
            u = -1,
            c = this.reactions.map((t, n) => {
                if ((0, l.ir)(t.emoji, e)) {
                    if (s === o.O.BURST) {
                        let e = a && !t.me_burst ? t.burst_count : t.burst_count - 1;
                        t = {
                            ...t,
                            burst_count: e,
                            me_burst: !a && t.me_burst,
                            count_details: {
                                ...t.count_details,
                                burst: e
                            }
                        };
                    } else if (s === o.O.VOTE) {
                        var r, i;
                        let e = null !== (i = null === (r = t.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== i ? i : 0,
                            n = a && !t.me_vote ? e : e - 1;
                        t = {
                            ...t,
                            count_details: {
                                ...t.count_details,
                                vote: n
                            },
                            me_vote: !a && t.me_vote
                        };
                    } else {
                        let e = a && !t.me ? t.count : t.count - 1;
                        t = {
                            ...t,
                            count: e,
                            me: !a && t.me,
                            count_details: {
                                ...t.count_details,
                                normal: e
                            }
                        };
                    }
                    u = n;
                }
                return t;
            }),
            { count: d, burst_count: _, count_details: E } = null !== (t = c[u]) && void 0 !== t ? t : {},
            f = null !== (n = null == E ? void 0 : E.normal) && void 0 !== n ? n : 0,
            h = null !== (r = null == E ? void 0 : E.burst) && void 0 !== r ? r : 0,
            p = null !== (i = null == E ? void 0 : E.vote) && void 0 !== i ? i : 0;
        return -1 !== u && d <= 0 && _ <= 0 && f <= 0 && h <= 0 && p <= 0 && c.splice(u, 1), this.set('reactions', c);
    }
    removeReactionsForEmoji(e) {
        return this.set(
            'reactions',
            this.reactions.filter((t) => !(0, l.ir)(t.emoji, e))
        );
    }
    isSystemDM() {
        return this.author.isSystemUser();
    }
    isCommandType() {
        return this.type === d.uaV.CHAT_INPUT_COMMAND || this.type === d.uaV.CONTEXT_MENU_COMMAND;
    }
    isPoll() {
        return null != this.poll;
    }
    isUIKitComponents() {
        return (0, u.yE)(this.flags, d.iLy.IS_UIKIT_COMPONENTS);
    }
    isInteractionPlaceholder() {
        return null != this.interaction && this.author.isNonUserBot();
    }
    canDeleteOwnMessage(e) {
        var t, n, i;
        if (this.author.id === e) return !0;
        let a = null !== (i = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== i ? i : {};
        return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user.id) === e && 1 === Object.keys(a).length && r.Y.USER_INSTALL in a;
    }
    toJS() {
        return {
            ...this,
            webkhook_id: this.webhookId,
            edited_timestamp: this.editedTimestamp,
            mention_everyone: this.mentionEveryone
        };
    }
    isFirstMessageInForumPost(e) {
        return this.id === this.channel_id && e.isForumPost();
    }
    constructor(e) {
        var t, n;
        super(e), _(this, 'id', void 0), _(this, 'channel_id', void 0), _(this, 'author', void 0), _(this, 'bot', void 0), _(this, 'customRenderedContent', void 0), _(this, 'pinned', void 0), _(this, 'mentions', void 0), _(this, 'mentionRoles', void 0), _(this, 'mentionChannels', void 0), _(this, 'mentionEveryone', void 0), _(this, 'mentioned', void 0), _(this, 'tts', void 0), _(this, 'giftCodes', void 0), _(this, 'state', void 0), _(this, 'nonce', void 0), _(this, 'blocked', void 0), _(this, 'call', void 0), _(this, 'webhookId', void 0), _(this, 'reactions', void 0), _(this, 'applicationId', void 0), _(this, 'application', void 0), _(this, 'activity', void 0), _(this, 'activityInstance', void 0), _(this, 'interaction', void 0), _(this, 'interactionData', void 0), _(this, 'interactionMetadata', void 0), _(this, 'interactionError', void 0), _(this, 'messageReference', void 0), _(this, 'isSearchHit', void 0), _(this, 'roleSubscriptionData', void 0), _(this, 'purchaseNotification', void 0), _(this, 'poll', void 0), _(this, 'loggingName', void 0), _(this, 'referralTrialOfferId', void 0), _(this, 'giftInfo', void 0), _(this, 'giftingPrompt', void 0), _(this, 'messageSnapshots', void 0), _(this, 'isUnsupported', void 0), _(this, 'changelogId', void 0), _(this, 'colorString', void 0), _(this, 'nick', void 0), (this.id = e.id), (this.channel_id = e.channel_id), (this.author = e.author), (this.customRenderedContent = e.customRenderedContent), (this.mentions = e.mentions || []), (this.mentionRoles = e.mentionRoles || []), (this.mentionChannels = e.mentionChannels || []), (this.mentioned = e.mentioned || !1), (this.pinned = e.pinned || !1), (this.mentionEveryone = e.mentionEveryone || !1), (this.tts = e.tts || !1), (this.giftCodes = e.giftCodes || []), (this.state = e.state || d.yb.SENT), (this.nonce = e.nonce || null), (this.blocked = e.blocked || !1), (this.call = e.call || null), (this.bot = e.bot || !1), (this.webhookId = e.webhookId || null), (this.reactions = e.reactions || []), (this.applicationId = e.application_id || e.applicationId || null), (this.application = e.application || null), (this.activity = e.activity || null), (this.activityInstance = e.activity_instance || e.activityInstance || null), (this.messageReference = e.messageReference || null), (this.isSearchHit = e.hit || e.isSearchHit || !1), (this.loggingName = e.loggingName || null), (this.colorString = e.colorString), (this.nick = e.nick), (this.interaction = e.interaction || null), (this.interactionData = e.interactionData || null), (this.interactionMetadata = e.interactionMetadata || null), (this.interactionError = e.interactionError || null), (this.roleSubscriptionData = e.roleSubscriptionData), (this.purchaseNotification = e.purchaseNotification), (this.poll = e.poll), (this.referralTrialOfferId = e.referralTrialOfferId || null), (this.giftInfo = null !== (t = e.gift_info) && void 0 !== t ? t : e.giftInfo), (this.giftingPrompt = e.giftingPrompt || null), (this.messageSnapshots = e.messageSnapshots || []), (this.isUnsupported = e.isUnsupported || !1), (this.changelogId = null !== (n = e.changelog_id) && void 0 !== n ? n : e.changelogId || null);
    }
};
