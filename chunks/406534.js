n.d(t, {
  Z: function() {
return et;
  }
}), n(653041), n(47120), n(733860);
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(904245),
  r = n(966390),
  o = n(902840),
  c = n(607070),
  d = n(367907),
  u = n(600084),
  h = n(62764),
  p = n(79712),
  m = n(736052),
  _ = n(359110),
  f = n(359119),
  E = n(13279),
  C = n(248789),
  g = n(88101),
  I = n(576954),
  x = n(280006),
  T = n(347102),
  v = n(765104),
  N = n(122707),
  S = n(779836),
  Z = n(23750),
  A = n(496675),
  M = n(306680),
  b = n(944486),
  R = n(594174),
  j = n(130208),
  L = n(55935),
  P = n(70956),
  O = n(709054),
  y = n(534091),
  D = n(900164),
  k = n(554838),
  U = n(481369),
  w = n(186877),
  B = n(294218),
  H = n(534469),
  G = n(993397),
  V = n(511010),
  F = n(524444),
  W = n(977391),
  z = n(921235),
  Y = n(97352),
  K = n(226027),
  q = n(959517),
  X = n(981631),
  Q = n(134612),
  J = n(689938);

function $(e) {
  return null != e && e.type === X.ys_.MESSAGE && e.content.id === e.groupId;
}
let ee = a.memo(function(e) {
  let {
file: t,
channel: n,
user: a,
isGroupStart: l
  } = e;
  return (0, i.jsx)(B.Z, {
isGroupStart: l,
channel: n,
message: new Z.ZP({
  id: t.id,
  key: 'pending-upload-'.concat(t.id),
  type: X.uaV.DEFAULT,
  author: a,
  channel_id: n.id,
  customRenderedContent: {
    hasSpoilerEmbeds: !1,
    content: (0, i.jsx)(j.g, {
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

function et(e) {
  var t;
  let n, a, {
  channel: r,
  messages: j,
  unreadCount: B,
  showNewMessagesBar: et,
  messageDisplayCompact: en,
  channelStream: ei,
  uploads: ea,
  scrollManager: el,
  specs: es,
  filterAfterTimestamp: er,
  showingQuarantineBanner: eo,
  hideSummaries: ec
} = e,
ed = R.default.getCurrentUser(),
eu = () => el.isInitialized() || j.ready,
eh = (0, w.$)(r),
ep = j.length > 0 && (null === (t = j.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(r)),
em = (0, o.ts)(r),
e_ = (0, l.e7)([v.Z], () => v.Z.shouldShowTopicsBar() && !ec),
ef = (0, g.P)(r.id, Q.zr),
eE = (0, E.z)(r.id, Q.zr),
eC = (0, U.Z)(),
eg = function(e, t) {
  return e.isDM() && null != t ? t.type === f.pj.STRANGER_DANGER ? (0, i.jsx)(I.M, {
    channelId: e.id,
    warningId: t.id,
    senderId: e.getRecipientId()
  }) : (0, i.jsx)(C.Y, {
    channelId: e.id,
    warningId: t.id,
    senderId: e.getRecipientId()
  }) : e.isGroupDM() && (0, x.f)({
    location: 'blocked_user_banner'
  }) ? (0, i.jsx)(T.e, {
    channel: e
  }) : null;
}(r, null != ef ? ef : eE),
eI = r.isForumPost() && !ep ? (0, i.jsx)(h.Z, {
  postId: r.id
}) : null,
ex = (0, m.Z)(r.id);
  (0, Y.Z)();
  let eT = null,
ev = [],
eN = ei.map((e, t) => {
  if (e.type === X.ys_.DIVIDER) {
    var n, a;
    let l = null != e.unreadId;
    return null != er ? null : e.isSummaryDivider ? (0, i.jsx)(S.Z, {
      index: t,
      item: e,
      channel: r,
      isBeforeGroup: null == e.content && $(ei[t + 1])
    }) : (0, i.jsx)(V.Z, {
      isUnread: l,
      isBeforeGroup: null == e.content && $(ei[t + 1]),
      id: l ? q.j1 : void 0,
      children: e.content
    }, 'divider-'.concat(null !== (a = null !== (n = e.contentKey) && void 0 !== n ? n : e.unreadId) && void 0 !== a ? a : t));
  }
  if (e.type === X.ys_.FORUM_POST_ACTION_BAR)
    return (0, i.jsx)(h.Z, {
      parentChannelId: r.parent_id,
      postId: r.id,
      isLastItem: t + 1 === ei.length,
      isFirstMessage: !0
    }, 'forum-post-action-bar-'.concat(r.id));
  if (e.type === X.ys_.MESSAGE_GROUP_BLOCKED || e.type === X.ys_.MESSAGE_GROUP_SPAMMER) {
    let t;
    return t = e.type === X.ys_.MESSAGE_GROUP_BLOCKED ? J.Z.Messages.BLOCKED_MESSAGE_COUNT : J.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT, (0, i.jsx)(G.Z, {
      unreadId: q.j1,
      messages: e,
      channel: r,
      compact: en,
      collapsedReason: t
    }, e.key);
  }
  if (null != er && er > e.content.timestamp.getTime() * P.Z.Millis.SECOND)
    return;
  let l = A.Z.can(X.Plq.CREATE_INSTANT_INVITE, r);
  if ((0, D.Z)(e.content, l))
    return;
  e.type === X.ys_.MESSAGE && null == eT && (eT = e);
  let s = e.groupId === (null == eT ? void 0 : eT.groupId) ? eT.content.id : e.groupId,
    o = e.type === X.ys_.THREAD_STARTER_MESSAGE ? H.Ru : H.ZP;
  return (0, i.jsx)(o, {
    compact: en,
    channel: r,
    message: e.content,
    groupId: s,
    flashKey: e.flashKey,
    id: (0, y.p)(r.id, e.content.id),
    isLastItem: t >= ei.length - 1,
    renderContentOnly: ex
  }, e.content.id);
});
  ev.push(...eN);
  let eS = ei[ei.length - 1];
  if (null != ed && ea.forEach((e, t) => {
  let n = 0 === t && (0, k.J)(r, eS, new Z.ZP({
    type: X.uaV.DEFAULT,
    author: ed
  }));
  ev.push((0, i.jsx)(ee, {
    file: e,
    channel: r,
    user: ed,
    isGroupStart: n
  }, 'upload-'.concat(e.id)));
}), j.hasMoreBefore && null == er) {
j.length > 0 && ev.unshift((0, i.jsx)('div', {
  style: {
    height: q.D4,
    flex: '0 0 auto'
  }
}, 'buffer'));
let {
  useReducedMotion: e
} = c.Z;
(e && eu() || !e) && ev.unshift((0, i.jsx)(W.ZP, {
  compact: en,
  ...es
}, 'has-more'));
  }
  if ((!j.hasMoreBefore || null != er) && ev.unshift((0, i.jsx)(u.Z, {
  channel: r,
  showingBanner: eo
}, 'empty-message')), j.hasMoreAfter && ev.push((0, i.jsx)(W.ZP, {
  compact: en,
  ...es
}, 'has-more-after')), !eo && eh && eu() && ev.push((0, i.jsx)(z.Z, {
  channel: r
})), B > 0 && et && eu()) {
let e, t;
let a = M.ZP.getOldestUnreadTimestamp(r.id),
  l = 0 !== a ? a : O.default.extractTimestamp(r.id),
  s = (0, L.KC)(new Date(), new Date(l));
if (M.ZP.isEstimated(r.id) ? (e = s ? J.Z.Messages.NEW_MESSAGES_ESTIMATED : J.Z.Messages.NEW_MESSAGES_ESTIMATED_WITH_DATE, t = J.Z.Messages.NEW_MESSAGES_ESTIMATED_SUMMARIES) : (e = s ? J.Z.Messages.NEW_MESSAGES : J.Z.Messages.NEW_MESSAGES_WITH_DATE, t = J.Z.Messages.NEW_MESSAGES_SUMMARIES), em && (0, o.tW)(r) && eC.includes(K.E.SUMMARIES)) {
  let a = M.ZP.ackMessageId(r.id),
    s = (0, N.q)(r.id, M.ZP.getOldestUnreadMessageId(r.id));
  if ((0, d.yw)(X.rMx.SUMMARIES_UNREAD_BAR_VIEWED, {
      num_unread_summaries: s,
      num_unread_messages: B,
      last_ack_message_id: a,
      summaries_enabled_by_user: e_,
      summaries_enabled_for_channel: (0, o.Lp)(r)
    }), (0, o.Lp)(r)) {
    let a = e_ ? t.format({
      count: B
    }) : e.format({
      count: B,
      timestamp: l
    });
    if (e_) {
      let e = s > 0 ? (0, i.jsxs)('div', {
        style: {
          display: 'flex',
          textTransform: 'none',
          alignItems: 'center',
          position: 'absolute',
          left: '40%'
        },
        children: [
          t.format({
            count: B
          }),
          (0, i.jsx)(p.Z, {
            style: {
              paddingLeft: 8,
              paddingRight: 8
            },
            height: 4,
            width: 4
          }),
          J.Z.Messages.NEW_SUMMARIES.format({
            count: s
          })
        ]
      }) : (0, i.jsx)('div', {
        style: {
          display: 'flex',
          textTransform: 'none',
          alignItems: 'center',
          position: 'absolute',
          left: '45%'
        },
        children: a
      });
      n = (0, i.jsx)(F.G5, {
        scrollManager: el,
        content: e,
        channel: r
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
            t.format({
              count: B
            }),
            (0, i.jsx)(p.Z, {
              style: {
                paddingLeft: 8,
                paddingRight: 8
              },
              height: 4,
              width: 4
            }),
            J.Z.Messages.NEW_SUMMARIES.format({
              count: s
            })
          ]
        }) : (0, i.jsx)(i.Fragment, {
          children: a
        })
      });
      n = (0, i.jsx)(F.LE, {
        content: e,
        channelId: r.id
      });
    }
  }
} else
  eC.includes(K.E.NEW_MESSAGES) && (n = (0, i.jsx)(F.LE, {
    content: e.format({
      count: B,
      timestamp: l
    }),
    channelId: r.id
  }));
  }
  if (null == n && (0, o.Lp)(r) && e_ && eC.includes(K.E.SUMMARIES) && (n = (0, i.jsx)(F.BO, {
  channel: r,
  scrollManager: el
})), j.error)
a = (0, i.jsx)(F.Rp, {
  loading: j.loadingMore,
  onClick: () => {
    var e;
    return e = r.id, void s.Z.fetchMessages({
      channelId: e,
      limit: X.AQB,
      truncate: !0
    });
  }
});
  else if (j.hasMoreAfter && eu()) {
let {
  jumpReturnTargetId: e
} = j;
a = j.loadingMore && j.jumpedToPresent ? (0, i.jsx)(F.DR, {}) : null != e ? (0, i.jsx)(F.DR, {
  type: F.A7.REPLY,
  onClick: () => {
    var t, n;
    return t = r, n = e, void s.Z.jumpToMessage({
      channelId: t.id,
      messageId: n,
      flash: !0
    });
  }
}) : (0, i.jsx)(F.DR, {
  onClick: () => function(e) {
    s.Z.jumpToPresent(e.id, X.AQB);
    let t = b.Z.getChannelId();
    e.id === t && (0, _.Kh)(e.id);
  }(r)
});
  }
  return {
channelStreamMarkup: ev,
newMessagesBar: n,
jumpToPresentBar: a,
forumPostActionBar: eI,
safetyWarningBanner: eg
  };
}