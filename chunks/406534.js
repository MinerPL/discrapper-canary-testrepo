n.d(t, {
    Z: function () {
        return $;
    }
}), n(653041), n(47120), n(733860);
var i = n(735250), a = n(470079), l = n(442837), s = n(904245), r = n(966390), o = n(902840), c = n(607070), u = n(367907), d = n(600084), h = n(62764), p = n(79712), m = n(736052), _ = n(359110), f = n(359119), E = n(13279), C = n(248789), g = n(88101), I = n(576954), x = n(765104), T = n(122707), N = n(779836), v = n(23750), S = n(496675), Z = n(306680), A = n(944486), M = n(594174), b = n(130208), R = n(55935), j = n(70956), L = n(709054), P = n(534091), O = n(900164), y = n(554838), D = n(481369), k = n(186877), U = n(294218), w = n(534469), B = n(993397), H = n(511010), G = n(524444), V = n(977391), F = n(921235), W = n(97352), z = n(226027), Y = n(959517), K = n(981631), q = n(134612), X = n(689938);
function Q(e) {
    return null != e && e.type === K.ys_.MESSAGE && e.content.id === e.groupId;
}
let J = a.memo(function (e) {
    let {
        file: t,
        channel: n,
        user: a,
        isGroupStart: l
    } = e;
    return (0, i.jsx)(U.Z, {
        isGroupStart: l,
        channel: n,
        message: new v.ZP({
            id: t.id,
            key: 'pending-upload-'.concat(t.id),
            type: K.uaV.DEFAULT,
            author: a,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                content: (0, i.jsx)(b.g, {
                    filename: t.name,
                    progress: null != t.progress ? t.progress : 0,
                    size: t.currentSize,
                    onCancelUpload: () => {
                        r.Z.cancel(t);
                    }
                })
            }
        })
    });
});
function $(e) {
    var t;
    let n, a, r, {
            channel: b,
            messages: U,
            unreadCount: $,
            showNewMessagesBar: ee,
            messageDisplayCompact: et,
            channelStream: en,
            uploads: ei,
            scrollManager: ea,
            specs: el,
            filterAfterTimestamp: es,
            showingQuarantineBanner: er,
            hideSummaries: eo
        } = e, ec = M.default.getCurrentUser(), eu = () => ea.isInitialized() || U.ready, ed = (0, k.$)(b), eh = U.length > 0 && (null === (t = U.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(b)), ep = (0, o.ts)(b), em = (0, l.e7)([x.Z], () => x.Z.shouldShowTopicsBar() && !eo), e_ = (0, g.P)(b.id, q.zr), ef = (0, E.z)(b.id, q.zr), eE = (0, D.Z)(), eC = null != e_ ? e_ : ef;
    b.isDM() && null != eC && (n = eC.type === f.pj.STRANGER_DANGER ? (0, i.jsx)(I.M, {
        channelId: b.id,
        warningId: eC.id,
        senderId: b.getRecipientId()
    }) : (0, i.jsx)(C.Y, {
        channelId: b.id,
        warningId: eC.id,
        senderId: b.getRecipientId()
    }));
    let eg = b.isForumPost() && !eh ? (0, i.jsx)(h.Z, { postId: b.id }) : null, eI = (0, m.Z)(b.id);
    (0, W.Z)();
    let ex = null, eT = [], eN = en.map((e, t) => {
            if (e.type === K.ys_.DIVIDER) {
                var n, a;
                let l = null != e.unreadId;
                return null != es ? null : e.isSummaryDivider ? (0, i.jsx)(N.Z, {
                    index: t,
                    item: e,
                    channel: b,
                    isBeforeGroup: null == e.content && Q(en[t + 1])
                }) : (0, i.jsx)(H.Z, {
                    isUnread: l,
                    isBeforeGroup: null == e.content && Q(en[t + 1]),
                    id: l ? Y.j1 : void 0,
                    children: e.content
                }, 'divider-'.concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t));
            }
            if (e.type === K.ys_.FORUM_POST_ACTION_BAR)
                return (0, i.jsx)(h.Z, {
                    parentChannelId: b.parent_id,
                    postId: b.id,
                    isLastItem: t + 1 === en.length,
                    isFirstMessage: !0
                }, 'forum-post-action-bar-'.concat(b.id));
            if (e.type === K.ys_.MESSAGE_GROUP_BLOCKED || e.type === K.ys_.MESSAGE_GROUP_SPAMMER) {
                let t;
                return t = e.type === K.ys_.MESSAGE_GROUP_BLOCKED ? X.Z.Messages.BLOCKED_MESSAGE_COUNT : X.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, i.jsx)(B.Z, {
                    unreadId: Y.j1,
                    messages: e,
                    channel: b,
                    compact: et,
                    collapsedReason: t
                }, e.key);
            }
            if (null != es && es > e.content.timestamp.getTime() * j.Z.Millis.SECOND)
                return;
            let l = S.Z.can(K.Plq.CREATE_INSTANT_INVITE, b);
            if ((0, O.Z)(e.content, l))
                return;
            e.type === K.ys_.MESSAGE && null == ex && (ex = e);
            let s = e.groupId === (null == ex ? void 0 : ex.groupId) ? ex.content.id : e.groupId, r = e.type === K.ys_.THREAD_STARTER_MESSAGE ? w.Ru : w.ZP;
            return (0, i.jsx)(r, {
                compact: et,
                channel: b,
                message: e.content,
                groupId: s,
                flashKey: e.flashKey,
                id: (0, P.p)(b.id, e.content.id),
                isLastItem: t >= en.length - 1,
                renderContentOnly: eI
            }, e.content.id);
        });
    eT.push(...eN);
    let ev = en[en.length - 1];
    if (null != ec && ei.forEach((e, t) => {
            let n = 0 === t && (0, y.J)(b, ev, new v.ZP({
                type: K.uaV.DEFAULT,
                author: ec
            }));
            eT.push((0, i.jsx)(J, {
                file: e,
                channel: b,
                user: ec,
                isGroupStart: n
            }, 'upload-'.concat(e.id)));
        }), U.hasMoreBefore && null == es) {
        U.length > 0 && eT.unshift((0, i.jsx)('div', {
            style: {
                height: Y.D4,
                flex: '0 0 auto'
            }
        }, 'buffer'));
        let {useReducedMotion: e} = c.Z;
        (e && eu() || !e) && eT.unshift((0, i.jsx)(V.ZP, {
            compact: et,
            ...el
        }, 'has-more'));
    }
    if ((!U.hasMoreBefore || null != es) && eT.unshift((0, i.jsx)(d.Z, {
            channel: b,
            showingBanner: er
        }, 'empty-message')), U.hasMoreAfter && eT.push((0, i.jsx)(V.ZP, {
            compact: et,
            ...el
        }, 'has-more-after')), !er && ed && eu() && eT.push((0, i.jsx)(F.Z, { channel: b })), $ > 0 && ee && eu()) {
        let e, t;
        let n = Z.ZP.getOldestUnreadTimestamp(b.id), l = 0 !== n ? n : L.default.extractTimestamp(b.id), s = (0, R.KC)(new Date(), new Date(l));
        if (Z.ZP.isEstimated(b.id) ? (e = s ? X.Z.Messages.NEW_MESSAGES_ESTIMATED : X.Z.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = X.Z.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = s ? X.Z.Messages.NEW_MESSAGES : X.Z.Messages.NEW_MESSAGES_WITH_DATE, t = X.Z.Messages.NEW_MESSAGES_SUMMARIES), ep && (0, o.tW)(b) && eE.includes(z.E.SUMMARIES)) {
            let n = Z.ZP.ackMessageId(b.id), s = (0, T.q)(b.id, Z.ZP.getOldestUnreadMessageId(b.id));
            if ((0, u.yw)(K.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: s,
                    num_unread_messages: $,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: em,
                    summaries_enabled_for_channel: (0, o.Lp)(b)
                }), (0, o.Lp)(b)) {
                let n = em ? t.format({ count: $ }) : e.format({
                    count: $,
                    timestamp: l
                });
                if (em) {
                    let e = s > 0 ? (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center',
                            position: 'absolute',
                            left: '40%'
                        },
                        children: [
                            t.format({ count: $ }),
                            (0, i.jsx)(p.Z, {
                                style: {
                                    paddingLeft: 8,
                                    paddingRight: 8
                                },
                                height: 4,
                                width: 4
                            }),
                            X.Z.Messages.NEW_SUMMARIES.format({ count: s })
                        ]
                    }) : (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center',
                            position: 'absolute',
                            left: '45%'
                        },
                        children: n
                    });
                    a = (0, i.jsx)(G.G5, {
                        scrollManager: ea,
                        content: e,
                        channel: b
                    });
                } else {
                    let e = (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            textTransform: 'none',
                            alignItems: 'center'
                        },
                        children: s > 0 ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                t.format({ count: $ }),
                                (0, i.jsx)(p.Z, {
                                    style: {
                                        paddingLeft: 8,
                                        paddingRight: 8
                                    },
                                    height: 4,
                                    width: 4
                                }),
                                X.Z.Messages.NEW_SUMMARIES.format({ count: s })
                            ]
                        }) : (0, i.jsx)(i.Fragment, { children: n })
                    });
                    a = (0, i.jsx)(G.LE, {
                        content: e,
                        channelId: b.id
                    });
                }
            }
        } else
            eE.includes(z.E.NEW_MESSAGES) && (a = (0, i.jsx)(G.LE, {
                content: e.format({
                    count: $,
                    timestamp: l
                }),
                channelId: b.id
            }));
    }
    if (null == a && (0, o.Lp)(b) && em && eE.includes(z.E.SUMMARIES) && (a = (0, i.jsx)(G.BO, {
            channel: b,
            scrollManager: ea
        })), U.error)
        r = (0, i.jsx)(G.Rp, {
            loading: U.loadingMore,
            onClick: () => {
                var e;
                return e = b.id, void s.Z.fetchMessages({
                    channelId: e,
                    limit: K.AQB,
                    truncate: !0
                });
            }
        });
    else if (U.hasMoreAfter && eu()) {
        let {jumpReturnTargetId: e} = U;
        r = U.loadingMore && U.jumpedToPresent ? (0, i.jsx)(G.DR, {}) : null != e ? (0, i.jsx)(G.DR, {
            type: G.A7.REPLY,
            onClick: () => {
                var t, n;
                return t = b, n = e, void s.Z.jumpToMessage({
                    channelId: t.id,
                    messageId: n,
                    flash: !0
                });
            }
        }) : (0, i.jsx)(G.DR, {
            onClick: () => function (e) {
                s.Z.jumpToPresent(e.id, K.AQB);
                let t = A.Z.getChannelId();
                e.id === t && (0, _.Kh)(e.id);
            }(b)
        });
    }
    return {
        channelStreamMarkup: eT,
        newMessagesBar: a,
        jumpToPresentBar: r,
        forumPostActionBar: eg,
        safetyWarningBanner: n
    };
}
