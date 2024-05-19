"use strict";
let i;
n.r(t), n("47120");
var r = n("266067"),
  a = n("259443"),
  s = n("433517"),
  o = n("570140"),
  l = n("668781"),
  u = n("904245"),
  d = n("593472"),
  _ = n("147913"),
  c = n("89892"),
  E = n("702321"),
  I = n("38618"),
  T = n("897473"),
  f = n("131704"),
  S = n("433355"),
  h = n("592125"),
  A = n("430824"),
  m = n("306680"),
  N = n("944486"),
  p = n("914010"),
  O = n("70956"),
  C = n("796798"),
  R = n("198620"),
  g = n("981631"),
  L = n("176505"),
  v = n("689938");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let M = new a.Logger("MessageManager");

function y(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    forceFetch: a,
    isPreload: o,
    jumpType: l,
    skipLocalFetch: _,
    logFailures: T
  } = e;
  if (null == n) {
    T && M.log("Skipping fetch because channelId is null");
    return
  }
  if ((0, L.isStaticChannelRoute)(n)) {
    T && M.log("Skipping fetch because channelId is a static route");
    return
  }
  let f = h.default.getChannel(n);
  if ((null == f ? void 0 : f.type) === g.ChannelTypes.GUILD_STORE || (null == f ? void 0 : f.type) != null && g.ChannelTypesSets.GUILD_THREADS_ONLY.has(f.type)) {
    T && M.log("Skipping fetch because channel is a forum/store");
    return
  }
  let S = c.default.getOrCreate(n);
  C.AttachmentLinkRefreshExperiment.getCurrentConfig({
    location: "fetch_messages"
  }).enabled && S.some(R.messageHasExpiredAttachmentUrl) && (M.log("Found expired attachment link, clearing messages"), c.default.clear(n), S = c.default.getOrCreate(n)), null != S.jumpTargetId && null == r && (S = S.mutate({
    jumpTargetId: null,
    jumped: !1,
    jumpType: d.JumpTypes.ANIMATED
  }), c.default.commit(S)), null != S.focusTargetId && null == r && (S = S.mutate({
    focusTargetId: null
  }), c.default.commit(S));
  let N = a;
  if (!o || I.default.isConnected() || S.loadingMore ? S.loadingMore || S.ready && !S.cached ? null != r ? N = !0 : T && M.log("Skipping fetch because no other conditions matched") : null == t || null != A.default.getGuild(t) ? N = !0 : T && M.log("Skipping fetch we are connected and have loaded messages") : N = !0, (0, E.default)(n) && m.default.hasUnread(n) && (N = !0), N) {
    if (c.default.commit(S.mutate({
        loadingMore: !0
      })), null != r) u.default.jumpToMessage({
      channelId: n,
      messageId: r,
      flash: !0,
      isPreload: o,
      skipLocalFetch: _,
      jumpType: l
    });
    else if ((null == f ? void 0 : f.isThread()) && function(e) {
        if (m.default.hasOpenedThread(e)) return !1;
        if (null == i) {
          var t;
          i = null !== (t = s.Storage.get(U, {})) && void 0 !== t ? t : {}
        }
        if (e in i) return !1;
        i[e] = Date.now();
        let n = Date.now() - P;
        for (let e in i) i[e] < n && delete i[e];
        return s.Storage.set(U, i), !0
      }(n)) M.log("Jumping to start of thread ".concat(f.id)), u.default.fetchMessages({
      channelId: n,
      limit: g.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: n,
        flash: !1
      },
      isPreload: o,
      skipLocalFetch: _
    });
    else if ((null == f ? void 0 : f.isThread()) && m.default.hasTrackedUnread(f.id) && !S.ready) {
      let e = m.default.getTrackedAckMessageId(f.id);
      M.log("Jumping to most recent message in thread ".concat(f.id, " - ").concat(e)), u.default.fetchMessages({
        channelId: n,
        limit: g.MAX_MESSAGES_PER_CHANNEL,
        jump: {
          messageId: e,
          flash: !1,
          offset: 1
        },
        isPreload: o,
        skipLocalFetch: _
      })
    } else u.default.fetchMessages({
      channelId: n,
      limit: g.MAX_MESSAGES_PER_CHANNEL,
      isPreload: o,
      skipLocalFetch: _,
      jump: {
        jumpType: d.JumpTypes.ANIMATED
      }
    })
  }
}
let P = 90 * O.default.Millis.DAY,
  U = "viewedThreadIds";

function b() {
  let e = N.default.getChannelId();
  if (null != e) {
    let n = h.default.getChannel(e);
    if (null != n) {
      var t;
      let e = (0, r.matchPath)(location.pathname, {
        path: g.Routes.CHANNEL(":guild", ":channel", ":message"),
        exact: !0
      });
      y({
        guildId: n.getGuildId(),
        channelId: n.id,
        messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
      }), B(n.getGuildId(), n.id)
    }
  }
}

function G() {
  let {
    isPreload: e,
    skipLocalFetch: t,
    logFailures: n
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = N.default.getChannelId();
  if (null != i) {
    let r = h.default.getChannel(i);
    null != r ? ((0, f.isTextChannel)(r.type) ? y({
      guildId: r.getGuildId(),
      channelId: r.id,
      isPreload: e,
      skipLocalFetch: t,
      logFailures: n
    }) : n && M.log("Skipping fetch because the selected channel is not a text channel"), B(r.getGuildId(), r.id)) : n && M.log("Skipping fetch because channel is null")
  } else n && M.log("Skipping fetch because there is no selected channel")
}

function w(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: i,
    jumpType: r
  } = e;
  y({
    guildId: t,
    channelId: n,
    messageId: i,
    jumpType: r
  }), B(t, n)
}

function k(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  y({
    guildId: t,
    channelId: n
  })
}

function B(e, t) {
  let n = S.default.getCurrentSidebarChannelId(t);
  if (null != n) y({
    guildId: e,
    channelId: n,
    messageId: S.default.getCurrentSidebarMessageId(t)
  })
}

function V() {
  let e = N.default.getChannelId(),
    t = p.default.getGuildId();
  if (null == t || null == e) return;
  let n = S.default.getSidebarState(e);
  (null == n ? void 0 : n.type) !== T.SidebarType.VIEW_CHANNEL && B(t, e)
}

function x(e) {
  let {
    guildId: t,
    channelId: n,
    context: i
  } = e;
  i === g.CURRENT_APP_CONTEXT && (y({
    guildId: t,
    channelId: n
  }), B(t, n))
}

function F(e) {
  let {
    channel: t,
    messageId: n
  } = e, i = t.guild_id;
  null != i && N.default.getChannelId(i) === t.id && y({
    guildId: i,
    channelId: t.id,
    messageId: n
  })
}

function H(e) {
  let {
    channelId: t
  } = e;
  u.default.fetchMessages({
    channelId: t,
    limit: g.MAX_MESSAGES_PER_CHANNEL
  })
}

function Y(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === g.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && l.default.show({
      title: v.default.Messages.RATE_LIMITED,
      body: v.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let j = {};

function W(e) {
  var t;
  let {
    channelId: n,
    jump: i,
    isStale: r,
    isPreview: a = !1
  } = e;
  if (a) return;
  let s = null !== (t = j[n]) && void 0 !== t ? t : 0;
  if (Date.now() - s < 10 * O.default.Millis.SECOND) return;
  j[n] = Date.now();
  let o = N.default.getChannelId(),
    l = S.default.getCurrentSidebarChannelId(o),
    d = n === o || n === l;
  r && I.default.isConnected() && d && u.default.fetchMessages({
    channelId: n,
    limit: g.MAX_MESSAGES_PER_CHANNEL,
    jump: i
  })
}

function K(e) {
  let {
    channelId: t,
    messageRecord: n,
    reason: i
  } = e;
  null != n && o.default.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n.id,
    reason: null != i ? i : null
  })
}

function z(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) return !1;
  let n = N.default.getChannelId();
  if (null == n) return !1;
  u.default.fetchNewLocalMessages(n, g.MAX_MESSAGES_PER_CHANNEL)
}
class Z extends _.default {
  _initialize() {
    o.default.subscribe("CONNECTION_OPEN", b)
  }
  _terminate() {
    o.default.unsubscribe("CONNECTION_OPEN", b)
  }
  constructor(...e) {
    super(...e), D(this, "fetchMessages", y), D(this, "loadSelectedChannelIfNecessary", G), D(this, "stores", new Map().set(S.default, V)), D(this, "actions", {
      APP_STATE_UPDATE: z,
      OVERLAY_INITIALIZE: b,
      CHANNEL_SELECT: w,
      VOICE_CHANNEL_SELECT: k,
      THREAD_CREATE: F,
      THREAD_LIST_SYNC: () => G(),
      CHANNEL_CREATE: F,
      CHANNEL_PRELOAD: x,
      THREAD_CREATE_LOCAL: H,
      GUILD_CREATE: () => G(),
      MESSAGE_END_EDIT: Y,
      LOAD_MESSAGES_SUCCESS: W,
      UPLOAD_FAIL: K,
      CHANNEL_DELETE: () => G(),
      THREAD_DELETE: () => G()
    })
  }
}
t.default = new Z