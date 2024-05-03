"use strict";
n.r(t), n.d(t, {
  default: function() {
    return $
  }
}), n("653041"), n("47120"), n("733860");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("904245"),
  r = n("966390"),
  o = n("902840"),
  u = n("607070"),
  d = n("367907"),
  c = n("600084"),
  f = n("62764"),
  h = n("79712"),
  m = n("736052"),
  p = n("359110"),
  E = n("359119"),
  C = n("13279"),
  g = n("248789"),
  S = n("88101"),
  _ = n("576954"),
  T = n("765104"),
  I = n("122707"),
  A = n("779836"),
  N = n("23750"),
  v = n("496675"),
  x = n("306680"),
  M = n("944486"),
  R = n("594174"),
  L = n("130208"),
  y = n("55935"),
  O = n("70956"),
  j = n("709054"),
  P = n("534091"),
  D = n("900164"),
  b = n("554838"),
  U = n("481369"),
  F = n("186877"),
  w = n("294218"),
  k = n("534469"),
  H = n("993397"),
  B = n("511010"),
  G = n("524444"),
  V = n("977391"),
  W = n("921235"),
  Y = n("97352"),
  z = n("226027"),
  K = n("959517"),
  Z = n("981631"),
  q = n("134612"),
  X = n("689938");

function Q(e) {
  return null != e && e.type === Z.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
}
let J = l.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: l,
    isGroupStart: s
  } = e;
  return (0, a.jsx)(w.default, {
    isGroupStart: s,
    channel: n,
    message: new N.default({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: Z.MessageTypes.DEFAULT,
      author: l,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: !1,
        content: (0, a.jsx)(L.AttachmentUpload, {
          filename: t.name,
          progress: null != t.progress ? t.progress : 0,
          size: t.currentSize,
          onCancelUpload: () => {
            r.default.cancel(t)
          }
        })
      }
    })
  })
});

function $(e) {
  var t;
  let n, l, r, {
      channel: L,
      messages: w,
      unreadCount: $,
      showNewMessagesBar: ee,
      messageDisplayCompact: et,
      channelStream: en,
      uploads: ea,
      scrollManager: el,
      specs: es,
      filterAfterTimestamp: ei,
      showingQuarantineBanner: er,
      hideSummaries: eo
    } = e,
    eu = R.default.getCurrentUser(),
    ed = () => el.isInitialized() || w.ready,
    ec = (0, F.useShowConvoStarterInDM)(L),
    ef = w.length > 0 && (null === (t = w.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(L)),
    eh = (0, o.useChannelSummariesExperiment)(L),
    em = (0, s.useStateFromStores)([T.default], () => T.default.shouldShowTopicsBar() && !eo),
    ep = (0, S.useStrangerDangerWarning)(L.id, q.LOCATION_CONTEXT_WEB),
    eE = (0, C.useInappropriateConversationBannerForChannel)(L.id, q.LOCATION_CONTEXT_WEB),
    eC = (0, U.default)(),
    eg = null != ep ? ep : eE;
  L.isDM() && null != eg && (n = eg.type === E.SafetyWarningTypes.STRANGER_DANGER ? (0, a.jsx)(_.StrangerDangerWarningBanner, {
    channelId: L.id,
    warningId: eg.id,
    senderId: L.getRecipientId()
  }) : (0, a.jsx)(g.InappropriateConversationWarningBanner, {
    channelId: L.id,
    warningId: eg.id,
    senderId: L.getRecipientId()
  }));
  let eS = L.isForumPost() && !ef ? (0, a.jsx)(f.default, {
      postId: L.id
    }) : null,
    e_ = (0, m.default)(L.id);
  (0, Y.default)();
  let eT = null,
    eI = [],
    eA = en.map((e, t) => {
      if (e.type === Z.ChannelStreamTypes.DIVIDER) {
        var n, l;
        let s = null != e.unreadId;
        return null != ei ? null : e.isSummaryDivider ? (0, a.jsx)(A.default, {
          index: t,
          item: e,
          channel: L,
          isBeforeGroup: null == e.content && Q(en[t + 1])
        }) : (0, a.jsx)(B.default, {
          isUnread: s,
          isBeforeGroup: null == e.content && Q(en[t + 1]),
          id: s ? K.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (l = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== l ? l : t))
      }
      if (e.type === Z.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, a.jsx)(f.default, {
        parentChannelId: L.parent_id,
        postId: L.id,
        isLastItem: t + 1 === en.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(L.id));
      if (e.type === Z.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === Z.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === Z.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? X.default.Messages.BLOCKED_MESSAGE_COUNT : X.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, a.jsx)(H.default, {
          unreadId: K.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: L,
          compact: et,
          collapsedReason: t
        }, e.key)
      }
      if (null != ei && ei > e.content.timestamp.getTime() * O.default.Millis.SECOND) return;
      let s = v.default.can(Z.Permissions.CREATE_INSTANT_INVITE, L);
      if ((0, D.default)(e.content, s)) return;
      e.type === Z.ChannelStreamTypes.MESSAGE && null == eT && (eT = e);
      let i = e.groupId === (null == eT ? void 0 : eT.groupId) ? eT.content.id : e.groupId,
        r = e.type === Z.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? k.ThreadStarterChatMessage : k.default;
      return (0, a.jsx)(r, {
        compact: et,
        channel: L,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, P.getMessageDOMId)(L.id, e.content.id),
        isLastItem: t >= en.length - 1,
        renderContentOnly: e_
      }, e.content.id)
    });
  eI.push(...eA);
  let eN = en[en.length - 1];
  if (null != eu && ea.forEach((e, t) => {
      let n = 0 === t && (0, b.isNewGroupItem)(L, eN, new N.default({
        type: Z.MessageTypes.DEFAULT,
        author: eu
      }));
      eI.push((0, a.jsx)(J, {
        file: e,
        channel: L,
        user: eu,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), w.hasMoreBefore && null == ei) {
    w.length > 0 && eI.unshift((0, a.jsx)("div", {
      style: {
        height: K.PLACEHOLDER_BUFFER,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = u.default;
    (e && ed() || !e) && eI.unshift((0, a.jsx)(V.default, {
      compact: et,
      ...es
    }, "has-more"))
  }
  if ((!w.hasMoreBefore || null != ei) && eI.unshift((0, a.jsx)(c.default, {
      channel: L,
      showingBanner: er
    }, "empty-message")), w.hasMoreAfter && eI.push((0, a.jsx)(V.default, {
      compact: et,
      ...es
    }, "has-more-after")), !er && ec && ed() && eI.push((0, a.jsx)(W.default, {
      channel: L
    })), $ > 0 && ee && ed()) {
    let e, t;
    let n = x.default.getOldestUnreadTimestamp(L.id),
      s = 0 !== n ? n : j.default.extractTimestamp(L.id),
      i = (0, y.isSameDay)(new Date, new Date(s));
    if (x.default.isEstimated(L.id) ? (e = i ? X.default.Messages.NEW_MESSAGES_ESTIMATED : X.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = X.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = i ? X.default.Messages.NEW_MESSAGES : X.default.Messages.NEW_MESSAGES_WITH_DATE, t = X.default.Messages.NEW_MESSAGES_SUMMARIES), eh && (0, o.channelEligibleForSummaries)(L) && eC.includes(z.ChatOverlays.SUMMARIES)) {
      let n = x.default.ackMessageId(L.id),
        i = (0, I.getUnreadTopicsCount)(L.id, x.default.getOldestUnreadMessageId(L.id));
      if ((0, d.trackWithMetadata)(Z.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: $,
          last_ack_message_id: n,
          summaries_enabled_by_user: em,
          summaries_enabled_for_channel: (0, o.canSeeChannelSummaries)(L)
        }), (0, o.canSeeChannelSummaries)(L)) {
        let n = em ? t.format({
          count: $
        }) : e.format({
          count: $,
          timestamp: s
        });
        if (em) {
          let e = i > 0 ? (0, a.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: $
            }), (0, a.jsx)(h.default, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), X.default.Messages.NEW_SUMMARIES.format({
              count: i
            })]
          }) : (0, a.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "45%"
            },
            children: n
          });
          l = (0, a.jsx)(G.NewTopicsBar, {
            scrollManager: el,
            content: e,
            channel: L
          })
        } else {
          let e = (0, a.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: i > 0 ? (0, a.jsxs)(a.Fragment, {
              children: [t.format({
                count: $
              }), (0, a.jsx)(h.default, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), X.default.Messages.NEW_SUMMARIES.format({
                count: i
              })]
            }) : (0, a.jsx)(a.Fragment, {
              children: n
            })
          });
          l = (0, a.jsx)(G.NewMessagesBar, {
            content: e,
            channelId: L.id
          })
        }
      }
    } else eC.includes(z.ChatOverlays.NEW_MESSAGES) && (l = (0, a.jsx)(G.NewMessagesBar, {
      content: e.format({
        count: $,
        timestamp: s
      }),
      channelId: L.id
    }))
  }
  if (null == l && (0, o.canSeeChannelSummaries)(L) && em && eC.includes(z.ChatOverlays.SUMMARIES) && (l = (0, a.jsx)(G.TopicsPill, {
      channel: L,
      scrollManager: el
    })), w.error) r = (0, a.jsx)(G.ErrorLoadingBar, {
    loading: w.loadingMore,
    onClick: () => {
      var e;
      return e = L.id, void i.default.fetchMessages({
        channelId: e,
        limit: Z.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (w.hasMoreAfter && ed()) {
    let {
      jumpReturnTargetId: e
    } = w;
    r = w.loadingMore && w.jumpedToPresent ? (0, a.jsx)(G.JumpToPresentBar, {}) : null != e ? (0, a.jsx)(G.JumpToPresentBar, {
      type: G.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = L, n = e, void i.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, a.jsx)(G.JumpToPresentBar, {
      onClick: () => (function(e) {
        i.default.jumpToPresent(e.id, Z.MAX_MESSAGES_PER_CHANNEL);
        let t = M.default.getChannelId();
        e.id === t && (0, p.transitionToChannel)(e.id)
      })(L)
    })
  }
  return {
    channelStreamMarkup: eI,
    newMessagesBar: l,
    jumpToPresentBar: r,
    forumPostActionBar: eS,
    safetyWarningBanner: n
  }
}