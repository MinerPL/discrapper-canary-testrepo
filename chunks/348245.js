"use strict";
let i;
n(47120);
var r = n(266067),
  s = n(259443),
  o = n(433517),
  a = n(570140),
  l = n(668781),
  u = n(904245),
  _ = n(593472),
  d = n(147913),
  c = n(89892),
  E = n(702321),
  I = n(38618),
  T = n(897473),
  h = n(131704),
  S = n(433355),
  f = n(592125),
  N = n(430824),
  A = n(306680),
  m = n(944486),
  O = n(914010),
  R = n(70956),
  C = n(796798),
  p = n(198620),
  g = n(981631),
  L = n(176505),
  v = n(689938);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let M = new s.Y("MessageManager");

function P(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: r,
    forceFetch: s,
    isPreload: a,
    jumpType: l,
    skipLocalFetch: d,
    logFailures: T
  } = e;
  if (null == n) {
    T && M.log("Skipping fetch because channelId is null");
    return
  }
  if ((0, L.AB)(n)) {
    T && M.log("Skipping fetch because channelId is a static route");
    return
  }
  let h = f.Z.getChannel(n);
  if ((null == h ? void 0 : h.type) === g.d4z.GUILD_STORE || (null == h ? void 0 : h.type) != null && g.TPd.GUILD_THREADS_ONLY.has(h.type)) {
    T && M.log("Skipping fetch because channel is a forum/store");
    return
  }
  let S = c.Z.getOrCreate(n);
  C.l.getCurrentConfig({
    location: "fetch_messages"
  }).enabled && S.some(p.k5) && (M.log("Found expired attachment link, clearing messages"), c.Z.clear(n), S = c.Z.getOrCreate(n)), null != S.jumpTargetId && null == r && (S = S.mutate({
    jumpTargetId: null,
    jumped: !1,
    jumpType: _.SR.ANIMATED
  }), c.Z.commit(S)), null != S.focusTargetId && null == r && (S = S.mutate({
    focusTargetId: null
  }), c.Z.commit(S));
  let m = s;
  if (!a || I.Z.isConnected() || S.loadingMore ? S.loadingMore || S.ready && !S.cached ? null != r ? m = !0 : T && M.log("Skipping fetch because no other conditions matched") : null == t || null != N.Z.getGuild(t) ? m = !0 : T && M.log("Skipping fetch we are connected and have loaded messages") : m = !0, (0, E.Z)(n) && A.ZP.hasUnread(n) && (m = !0), m) {
    if (c.Z.commit(S.mutate({
        loadingMore: !0
      })), null != r) u.Z.jumpToMessage({
      channelId: n,
      messageId: r,
      flash: !0,
      isPreload: a,
      skipLocalFetch: d,
      jumpType: l
    });
    else if ((null == h ? void 0 : h.isThread()) && function(e) {
        if (A.ZP.hasOpenedThread(e)) return !1;
        if (null == i) {
          var t;
          i = null !== (t = o.K.get(U, {})) && void 0 !== t ? t : {}
        }
        if (e in i) return !1;
        i[e] = Date.now();
        let n = Date.now() - y;
        for (let e in i) i[e] < n && delete i[e];
        return o.K.set(U, i), !0
      }(n)) M.log("Jumping to start of thread ".concat(h.id)), u.Z.fetchMessages({
      channelId: n,
      limit: g.AQB,
      jump: {
        messageId: n,
        flash: !1
      },
      isPreload: a,
      skipLocalFetch: d
    });
    else if ((null == h ? void 0 : h.isThread()) && A.ZP.hasTrackedUnread(h.id) && !S.ready) {
      let e = A.ZP.getTrackedAckMessageId(h.id);
      M.log("Jumping to most recent message in thread ".concat(h.id, " - ").concat(e)), u.Z.fetchMessages({
        channelId: n,
        limit: g.AQB,
        jump: {
          messageId: e,
          flash: !1,
          offset: 1
        },
        isPreload: a,
        skipLocalFetch: d
      })
    } else u.Z.fetchMessages({
      channelId: n,
      limit: g.AQB,
      isPreload: a,
      skipLocalFetch: d,
      jump: {
        jumpType: _.SR.ANIMATED
      }
    })
  }
}
let y = 90 * R.Z.Millis.DAY,
  U = "viewedThreadIds";

function b() {
  let e = m.Z.getChannelId();
  if (null != e) {
    let n = f.Z.getChannel(e);
    if (null != n) {
      var t;
      let e = (0, r.LX)(location.pathname, {
        path: g.Z5c.CHANNEL(":guild", ":channel", ":message"),
        exact: !0
      });
      P({
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
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = m.Z.getChannelId();
  if (null != i) {
    let r = f.Z.getChannel(i);
    null != r ? ((0, h.Qm)(r.type) ? P({
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
  P({
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
  P({
    guildId: t,
    channelId: n
  })
}

function B(e, t) {
  let n = S.ZP.getCurrentSidebarChannelId(t);
  if (null != n) P({
    guildId: e,
    channelId: n,
    messageId: S.ZP.getCurrentSidebarMessageId(t)
  })
}

function x() {
  let e = m.Z.getChannelId(),
    t = O.Z.getGuildId();
  if (null == t || null == e) return;
  let n = S.ZP.getSidebarState(e);
  if ((null == n ? void 0 : n.type) !== T.tI.VIEW_CHANNEL) B(t, e)
}

function V(e) {
  let {
    guildId: t,
    channelId: n,
    context: i
  } = e;
  i === g.e3s && (P({
    guildId: t,
    channelId: n
  }), B(t, n))
}

function Z(e) {
  let {
    channel: t,
    messageId: n
  } = e, i = t.guild_id;
  null != i && m.Z.getChannelId(i) === t.id && P({
    guildId: i,
    channelId: t.id,
    messageId: n
  })
}

function H(e) {
  let {
    channelId: t
  } = e;
  u.Z.fetchMessages({
    channelId: t,
    limit: g.AQB
  })
}

function F(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === g.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && l.Z.show({
      title: v.Z.Messages.RATE_LIMITED,
      body: v.Z.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let Y = {};

function j(e) {
  var t;
  let {
    channelId: n,
    jump: i,
    isStale: r,
    isPreview: s = !1
  } = e;
  if (s) return;
  let o = null !== (t = Y[n]) && void 0 !== t ? t : 0;
  if (Date.now() - o < 10 * R.Z.Millis.SECOND) return;
  Y[n] = Date.now();
  let a = m.Z.getChannelId(),
    l = S.ZP.getCurrentSidebarChannelId(a),
    _ = n === a || n === l;
  r && I.Z.isConnected() && _ && u.Z.fetchMessages({
    channelId: n,
    limit: g.AQB,
    jump: i
  })
}

function W(e) {
  let {
    channelId: t,
    messageRecord: n,
    reason: i
  } = e;
  null != n && a.Z.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: n.id,
    reason: null != i ? i : null
  })
}

function K(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) return !1;
  let n = m.Z.getChannelId();
  if (null == n) return !1;
  u.Z.fetchNewLocalMessages(n, g.AQB)
}
class z extends d.Z {
  _initialize() {
    a.Z.subscribe("CONNECTION_OPEN", b)
  }
  _terminate() {
    a.Z.unsubscribe("CONNECTION_OPEN", b)
  }
  constructor(...e) {
    super(...e), D(this, "fetchMessages", P), D(this, "loadSelectedChannelIfNecessary", G), D(this, "stores", new Map().set(S.ZP, x)), D(this, "actions", {
      APP_STATE_UPDATE: K,
      OVERLAY_INITIALIZE: b,
      CHANNEL_SELECT: w,
      VOICE_CHANNEL_SELECT: k,
      THREAD_CREATE: Z,
      THREAD_LIST_SYNC: () => G(),
      CHANNEL_CREATE: Z,
      CHANNEL_PRELOAD: V,
      THREAD_CREATE_LOCAL: H,
      GUILD_CREATE: () => G(),
      MESSAGE_END_EDIT: F,
      LOAD_MESSAGES_SUCCESS: j,
      UPLOAD_FAIL: W,
      CHANNEL_DELETE: () => G(),
      THREAD_DELETE: () => G()
    })
  }
}
t.Z = new z