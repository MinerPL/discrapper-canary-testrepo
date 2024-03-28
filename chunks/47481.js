"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("653041"), n("47120");
var a = n("275726"),
  l = n("135938"),
  s = n("55935"),
  i = n("709054"),
  r = n("554838"),
  o = n("493892"),
  u = n("981631");

function d(e) {
  let t, n, d, {
      channel: c,
      messages: f,
      oldestUnreadMessageId: h,
      treatSpam: m,
      summaries: p,
      selectedSummary: E
    } = e,
    C = [],
    g = !1,
    S = null != h ? i.default.extractTimestamp(h) : null,
    _ = null;
  return f.forEach(e => {
    var l, T, I, A, v, N, x, M;
    if (null != p && p.length > 0) {
      ;
      let t = i.default.extractTimestamp(e.id);
      for (let e = 0; l = e < (null == p ? void 0 : p.length), l; e++) {
        if (null == p[e]) continue;
        let n = i.default.extractTimestamp(p[e].startId),
          a = i.default.extractTimestamp(p[e].endId);
        if (t >= n && t <= a) {
          if (_ === p[e].id) break;
          C.push({
            type: u.ChannelStreamTypes.DIVIDER,
            content: p[e].topic,
            contentKey: p[e].id
          }), _ = p[e].id;
          break
        }
      }
    }
    let R = (0, s.dateFormat)(e.timestamp, "LL");
    R !== t && null == _ && (C.push({
      type: u.ChannelStreamTypes.DIVIDER,
      content: R,
      contentKey: R
    }), t = R);
    let L = C[C.length - 1],
      y = null,
      O = (0, o.isSpam)(e);
    g = g || O;
    let j = function(e, t, n) {
      if (a.MessageTypesSets.NON_COLLAPSIBLE.has(t.type));
      else if (t.blocked) return u.ChannelStreamTypes.MESSAGE_GROUP_BLOCKED;
      else if ((0, o.isSpamSupported)(e) && n) return u.ChannelStreamTypes.MESSAGE_GROUP_SPAMMER;
      return null
    }(c, e, O && m);
    if (null !== j) {
      ;
      let t, n;
      [y, L] = (T = C, I = e, A = j, n = v = L, null == v || v.type !== A ? (t = {
        type: A,
        content: [],
        key: I.id
      }, T.push(t)) : n = (t = v).content[t.content.length - 1], [t, n])
    }
    if (h === e.id && null != S) {
      if (null != L && L.type === u.ChannelStreamTypes.DIVIDER) L.unreadId = e.id, S = null;
      else if (null !== y) {
        ;
        N = y, x = c, (M = e).isFirstMessageInForumPost(x) || N.content.push({
          type: u.ChannelStreamTypes.DIVIDER,
          unreadId: M.id
        }), N.hasUnread = !0, S = null
      } else !e.isFirstMessageInForumPost(c) && C.push({
        type: u.ChannelStreamTypes.DIVIDER,
        unreadId: e.id
      }), S = null
    } else null != S && i.default.extractTimestamp(e.id) > S && (!e.isFirstMessageInForumPost(c) && C.push({
      type: u.ChannelStreamTypes.DIVIDER,
      unreadId: e.id
    }), S = null);
    let P = (null == L ? void 0 : L.type) === u.ChannelStreamTypes.MESSAGE ? d : L;
    (0, r.isNewGroupItem)(c, P, e) && (n = e.id);
    let D = {
      type: e.type === u.MessageTypes.THREAD_STARTER_MESSAGE ? u.ChannelStreamTypes.THREAD_STARTER_MESSAGE : u.ChannelStreamTypes.MESSAGE,
      content: e,
      groupId: n
    };
    n === e.id && (d = D);
    let {
      jumpSequenceId: b,
      jumpFlash: U,
      jumpTargetId: F
    } = f;
    U && e.id === F && null != b && (D.flashKey = b), f.jumpTargetId === e.id && (D.jumpTarget = !0), null != E && e.id === E.startId && E.count > 1 && C.push({
      type: u.ChannelStreamTypes.DIVIDER,
      content: E.topic,
      contentKey: E.startId,
      isSummaryDivider: !0
    }), null !== y ? (y.content.push(D), D.jumpTarget && (y.hasJumpTarget = !0)) : C.push(D), e.isFirstMessageInForumPost(c) && C.push({
      type: u.ChannelStreamTypes.FORUM_POST_ACTION_BAR
    }), null != E && e.id === E.endId && E.count > 1 && C.push({
      type: u.ChannelStreamTypes.DIVIDER,
      contentKey: E.endId,
      isSummaryDivider: !0
    })
  }), g && (0, o.isSpamSupported)(c) && l.default.trackExposure({
    location: "416cc9_1"
  }), C
}