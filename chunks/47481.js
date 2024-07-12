n.d(t, {
  Z: function() {
return d;
  }
}), n(653041), n(47120);
var i = n(275726),
  a = n(135938),
  l = n(55935),
  s = n(709054),
  r = n(554838),
  o = n(493892),
  c = n(981631);

function d(e) {
  let t, n, d, {
  channel: u,
  messages: h,
  oldestUnreadMessageId: p,
  treatSpam: m,
  summaries: _,
  selectedSummary: f
} = e,
E = [],
C = !1,
g = null != p ? s.default.extractTimestamp(p) : null,
I = null;
  return h.forEach(e => {
var a, x, T, v, N, S, Z, A;
if (null != _ && _.length > 0) {
  ;
  let t = s.default.extractTimestamp(e.id);
  for (let e = 0; a = e < (null == _ ? void 0 : _.length), a; e++) {
    if (null == _[e])
      continue;
    let n = s.default.extractTimestamp(_[e].startId),
      i = s.default.extractTimestamp(_[e].endId);
    if (t >= n && t <= i) {
      if (I === _[e].id)
        break;
      E.push({
        type: c.ys_.DIVIDER,
        content: _[e].topic,
        contentKey: _[e].id
      }), I = _[e].id;
      break;
    }
  }
}
let M = (0, l.vc)(e.timestamp, 'LL');
M !== t && null == I && (E.push({
  type: c.ys_.DIVIDER,
  content: M,
  contentKey: M
}), t = M);
let b = E[E.length - 1],
  R = null,
  j = (0, o.DQ)(e);
C = C || j;
let L = function(e, t, n) {
  if (i.V.NON_COLLAPSIBLE.has(t.type));
  else if (t.blocked)
    return c.ys_.MESSAGE_GROUP_BLOCKED;
  else if ((0, o.P1)(e) && n)
    return c.ys_.MESSAGE_GROUP_SPAMMER;
  return null;
}(u, e, j && m);
if (null !== L) {
  ;
  let t, n;
  [R, b] = (x = E, T = e, v = L, n = N = b, null == N || N.type !== v ? (t = {
    type: v,
    content: [],
    key: T.id
  }, x.push(t)) : n = (t = N).content[t.content.length - 1], [
    t,
    n
  ]);
}
if (p === e.id && null != g) {
  if (null != b && b.type === c.ys_.DIVIDER)
    b.unreadId = e.id, g = null;
  else if (null !== R) {
    ;
    S = R, Z = u, (A = e).isFirstMessageInForumPost(Z) || S.content.push({
      type: c.ys_.DIVIDER,
      unreadId: A.id
    }), S.hasUnread = !0, g = null;
  } else
    !e.isFirstMessageInForumPost(u) && E.push({
      type: c.ys_.DIVIDER,
      unreadId: e.id
    }), g = null;
} else
  null != g && s.default.extractTimestamp(e.id) > g && (!e.isFirstMessageInForumPost(u) && E.push({
    type: c.ys_.DIVIDER,
    unreadId: e.id
  }), g = null);
let P = (null == b ? void 0 : b.type) === c.ys_.MESSAGE ? d : b;
(0, r.J)(u, P, e) && (n = e.id);
let O = {
  type: e.type === c.uaV.THREAD_STARTER_MESSAGE ? c.ys_.THREAD_STARTER_MESSAGE : c.ys_.MESSAGE,
  content: e,
  groupId: n
};
n === e.id && (d = O);
let {
  jumpSequenceId: y,
  jumpFlash: D,
  jumpTargetId: k
} = h;
D && e.id === k && null != y && (O.flashKey = y), h.jumpTargetId === e.id && (O.jumpTarget = !0), null != f && e.id === f.startId && f.count > 1 && E.push({
  type: c.ys_.DIVIDER,
  content: f.topic,
  contentKey: f.startId,
  isSummaryDivider: !0
}), null !== R ? (R.content.push(O), O.jumpTarget && (R.hasJumpTarget = !0)) : E.push(O), e.isFirstMessageInForumPost(u) && E.push({
  type: c.ys_.FORUM_POST_ACTION_BAR
}), null != f && e.id === f.endId && f.count > 1 && E.push({
  type: c.ys_.DIVIDER,
  contentKey: f.endId,
  isSummaryDivider: !0
});
  }), C && (0, o.P1)(u) && a.Z.trackExposure({
location: '416cc9_1'
  }), E;
}