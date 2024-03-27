"use strict";
n.r(t), n.d(t, {
  default: function() {
    return $
  }
}), n("424973"), n("222007"), n("843762");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("819689"),
  r = n("783480"),
  o = n("734575"),
  u = n("206230"),
  d = n("716241"),
  c = n("34695"),
  f = n("554393"),
  h = n("120027"),
  C = n("934288"),
  p = n("144491"),
  m = n("764828"),
  E = n("898436"),
  g = n("894295"),
  S = n("933152"),
  T = n("820899"),
  A = n("347738"),
  _ = n("339670"),
  M = n("21763"),
  I = n("719926"),
  N = n("957255"),
  v = n("660478"),
  x = n("18494"),
  L = n("697218"),
  y = n("410889"),
  R = n("888400"),
  O = n("718517"),
  D = n("299039"),
  P = n("154864"),
  b = n("383667"),
  j = n("459776"),
  k = n("921450"),
  F = n("366757"),
  H = n("699473"),
  U = n("556118"),
  G = n("342009"),
  B = n("97810"),
  V = n("933629"),
  w = n("88243"),
  W = n("753089"),
  Z = n("210062"),
  z = n("321933"),
  K = n("894488"),
  Y = n("49111"),
  X = n("324252"),
  q = n("782340");

function J(e) {
  return null != e && e.type === Y.ChannelStreamTypes.MESSAGE && e.content.id === e.groupId
}
let Q = a.memo(function(e) {
  let {
    file: t,
    channel: n,
    user: a,
    isGroupStart: l
  } = e;
  return (0, s.jsx)(H.default, {
    isGroupStart: l,
    channel: n,
    message: new I.default({
      id: t.id,
      key: "pending-upload-".concat(t.id),
      type: Y.MessageTypes.DEFAULT,
      author: a,
      channel_id: n.id,
      customRenderedContent: {
        hasSpoilerEmbeds: !1,
        content: (0, s.jsx)(y.AttachmentUpload, {
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
  let n, a, r, {
      channel: y,
      messages: H,
      unreadCount: $,
      showNewMessagesBar: ee,
      messageDisplayCompact: et,
      channelStream: en,
      uploads: es,
      scrollManager: ea,
      specs: el,
      filterAfterTimestamp: ei,
      showingQuarantineBanner: er
    } = e,
    eo = L.default.getCurrentUser(),
    eu = () => ea.isInitialized() || H.ready,
    ed = (0, F.useShowConvoStarterInDM)(y),
    ec = H.length > 0 && (null === (t = H.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(y)),
    ef = (0, o.useChannelSummariesExperiment)(y),
    eh = (0, l.useStateFromStores)([A.default], () => A.default.shouldShowTopicsBar()),
    eC = (0, S.useStrangerDangerWarning)(y.id, X.LOCATION_CONTEXT_WEB),
    ep = (0, E.useInappropriateConversationBannerForChannel)(y.id, X.LOCATION_CONTEXT_WEB),
    em = (0, k.default)(),
    eE = null != eC ? eC : ep;
  y.isDM() && null != eE && (n = eE.type === m.SafetyWarningTypes.STRANGER_DANGER ? (0, s.jsx)(T.StrangerDangerWarningBanner, {
    channelId: y.id,
    warningId: eE.id,
    senderId: y.getRecipientId()
  }) : (0, s.jsx)(g.InappropriateConversationWarningBanner, {
    channelId: y.id,
    warningId: eE.id,
    senderId: y.getRecipientId()
  }));
  let eg = y.isForumPost() && !ec ? (0, s.jsx)(f.default, {
      postId: y.id
    }) : null,
    eS = (0, C.default)(y.id);
  (0, Z.default)();
  let eT = null,
    eA = [],
    e_ = en.map((e, t) => {
      if (e.type === Y.ChannelStreamTypes.DIVIDER) {
        var n, a;
        let l = null != e.unreadId;
        return null != ei ? null : e.isSummaryDivider ? (0, s.jsx)(M.default, {
          index: t,
          item: e,
          channel: y,
          isBeforeGroup: null == e.content && J(en[t + 1])
        }) : (0, s.jsx)(B.default, {
          isUnread: l,
          isBeforeGroup: null == e.content && J(en[t + 1]),
          id: l ? K.NEW_MESSAGE_BAR_ID : void 0,
          children: e.content
        }, "divider-".concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t))
      }
      if (e.type === Y.ChannelStreamTypes.FORUM_POST_ACTION_BAR) return (0, s.jsx)(f.default, {
        parentChannelId: y.parent_id,
        postId: y.id,
        isLastItem: t + 1 === en.length,
        isFirstMessage: !0
      }, "forum-post-action-bar-".concat(y.id));
      if (e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED || e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER) {
        let t;
        return t = e.type === Y.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED ? q.default.Messages.BLOCKED_MESSAGE_COUNT : q.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, s.jsx)(G.default, {
          unreadId: K.NEW_MESSAGE_BAR_ID,
          messages: e,
          channel: y,
          compact: et,
          collapsedReason: t
        }, e.key)
      }
      if (null != ei && ei > e.content.timestamp.getTime() * O.default.Millis.SECOND) return;
      let l = N.default.can(Y.Permissions.CREATE_INSTANT_INVITE, y);
      if ((0, b.default)(e.content, l)) return;
      e.type === Y.ChannelStreamTypes.MESSAGE && null == eT && (eT = e);
      let i = e.groupId === (null == eT ? void 0 : eT.groupId) ? eT.content.id : e.groupId,
        r = e.type === Y.ChannelStreamTypes.THREAD_STARTER_MESSAGE ? U.ThreadStarterChatMessage : U.default;
      return (0, s.jsx)(r, {
        compact: et,
        channel: y,
        message: e.content,
        groupId: i,
        flashKey: e.flashKey,
        id: (0, P.getMessageDOMId)(y.id, e.content.id),
        isLastItem: t >= en.length - 1,
        renderContentOnly: eS
      }, e.content.id)
    });
  eA.push(...e_);
  let eM = en[en.length - 1];
  if (null != eo && es.forEach((e, t) => {
      let n = 0 === t && (0, j.isNewGroupItem)(y, eM, new I.default({
        type: Y.MessageTypes.DEFAULT,
        author: eo
      }));
      eA.push((0, s.jsx)(Q, {
        file: e,
        channel: y,
        user: eo,
        isGroupStart: n
      }, "upload-".concat(e.id)))
    }), H.hasMoreBefore && null == ei) {
    H.length > 0 && eA.unshift((0, s.jsx)("div", {
      style: {
        height: K.PLACEHOLDER_BUFFER,
        flex: "0 0 auto"
      }
    }, "buffer"));
    let {
      useReducedMotion: e
    } = u.default;
    (e && eu() || !e) && eA.unshift((0, s.jsx)(w.default, {
      compact: et,
      ...el
    }, "has-more"))
  }
  if ((!H.hasMoreBefore || null != ei) && eA.unshift((0, s.jsx)(c.default, {
      channel: y,
      showingBanner: er
    }, "empty-message")), H.hasMoreAfter && eA.push((0, s.jsx)(w.default, {
      compact: et,
      ...el
    }, "has-more-after")), !er && ed && eu() && eA.push((0, s.jsx)(W.default, {
      channel: y
    })), $ > 0 && ee && eu()) {
    let e, t;
    let n = v.default.getOldestUnreadTimestamp(y.id),
      l = 0 !== n ? n : D.default.extractTimestamp(y.id),
      i = (0, R.isSameDay)(new Date, new Date(l));
    if (v.default.isEstimated(y.id) ? (e = i ? q.default.Messages.NEW_MESSAGES_ESTIMATED : q.default.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = q.default.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = i ? q.default.Messages.NEW_MESSAGES : q.default.Messages.NEW_MESSAGES_WITH_DATE, t = q.default.Messages.NEW_MESSAGES_SUMMARIES), ef && (0, o.channelEligibleForSummaries)(y) && em.includes(z.ChatOverlays.SUMMARIES)) {
      let n = v.default.ackMessageId(y.id),
        i = (0, _.getUnreadTopicsCount)(y.id, v.default.getOldestUnreadMessageId(y.id));
      if ((0, d.trackWithMetadata)(Y.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
          num_unread_summaries: i,
          num_unread_messages: $,
          last_ack_message_id: n,
          summaries_enabled_by_user: eh,
          summaries_enabled_for_channel: (0, o.canSeeChannelSummaries)(y)
        }), (0, o.canSeeChannelSummaries)(y)) {
        let n = eh ? t.format({
          count: $
        }) : e.format({
          count: $,
          timestamp: l
        });
        if (eh) {
          let e = i > 0 ? (0, s.jsxs)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "40%"
            },
            children: [t.format({
              count: $
            }), (0, s.jsx)(h.default, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }), q.default.Messages.NEW_SUMMARIES.format({
              count: i
            })]
          }) : (0, s.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center",
              position: "absolute",
              left: "45%"
            },
            children: n
          });
          a = (0, s.jsx)(V.NewTopicsBar, {
            scrollManager: ea,
            content: e,
            channel: y
          })
        } else {
          let e = (0, s.jsx)("div", {
            style: {
              display: "flex",
              textTransform: "none",
              alignItems: "center"
            },
            children: i > 0 ? (0, s.jsxs)(s.Fragment, {
              children: [t.format({
                count: $
              }), (0, s.jsx)(h.default, {
                style: {
                  paddingLeft: 8,
                  paddingRight: 8
                },
                height: 4,
                width: 4
              }), q.default.Messages.NEW_SUMMARIES.format({
                count: i
              })]
            }) : (0, s.jsx)(s.Fragment, {
              children: n
            })
          });
          a = (0, s.jsx)(V.NewMessagesBar, {
            content: e,
            channelId: y.id
          })
        }
      }
    } else em.includes(z.ChatOverlays.NEW_MESSAGES) && (a = (0, s.jsx)(V.NewMessagesBar, {
      content: e.format({
        count: $,
        timestamp: l
      }),
      channelId: y.id
    }))
  }
  if (null == a && (0, o.canSeeChannelSummaries)(y) && eh && em.includes(z.ChatOverlays.SUMMARIES) && (a = (0, s.jsx)(V.TopicsPill, {
      channel: y,
      scrollManager: ea
    })), H.error) r = (0, s.jsx)(V.ErrorLoadingBar, {
    loading: H.loadingMore,
    onClick: () => {
      var e;
      return e = y.id, void i.default.fetchMessages({
        channelId: e,
        limit: Y.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }
  });
  else if (H.hasMoreAfter && eu()) {
    let {
      jumpReturnTargetId: e
    } = H;
    r = H.loadingMore && H.jumpedToPresent ? (0, s.jsx)(V.JumpToPresentBar, {}) : null != e ? (0, s.jsx)(V.JumpToPresentBar, {
      type: V.JumpBarType.REPLY,
      onClick: () => {
        var t, n;
        return t = y, n = e, void i.default.jumpToMessage({
          channelId: t.id,
          messageId: n,
          flash: !0
        })
      }
    }) : (0, s.jsx)(V.JumpToPresentBar, {
      onClick: () => (function(e) {
        i.default.jumpToPresent(e.id, Y.MAX_MESSAGES_PER_CHANNEL);
        let t = x.default.getChannelId();
        e.id === t && (0, p.transitionToChannel)(e.id)
      })(y)
    })
  }
  return {
    channelStreamMarkup: eA,
    newMessagesBar: a,
    jumpToPresentBar: r,
    forumPostActionBar: eg,
    safetyWarningBanner: n
  }
}