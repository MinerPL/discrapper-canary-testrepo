"use strict";
let a;
l.r(t), l.d(t, {
  default: function() {
    return X
  }
}), l("222007");
var n = l("803182"),
  u = l("811022"),
  i = l("95410"),
  d = l("913144"),
  s = l("404118"),
  r = l("819689"),
  o = l("115718"),
  c = l("689988"),
  f = l("408062"),
  E = l("619443"),
  M = l("582713"),
  S = l("233069"),
  m = l("982108"),
  I = l("42203"),
  g = l("305961"),
  _ = l("660478"),
  h = l("18494"),
  A = l("162771"),
  C = l("718517"),
  p = l("519841"),
  N = l("787336"),
  T = l("49111"),
  R = l("724210"),
  O = l("782340");
let b = new u.Logger("MessageManager");

function L(e) {
  let {
    guildId: t,
    channelId: l,
    messageId: n,
    forceFetch: u,
    isPreload: d,
    jumpType: s,
    skipLocalFetch: c,
    logFailures: M
  } = e;
  if (null == l) {
    M && b.log("Skipping fetch because channelId is null");
    return
  }
  if ((0, R.isStaticChannelRoute)(l)) {
    M && b.log("Skipping fetch because channelId is a static route");
    return
  }
  let S = I.default.getChannel(l);
  if ((null == S ? void 0 : S.type) === T.ChannelTypes.GUILD_STORE || (null == S ? void 0 : S.type) != null && T.ChannelTypesSets.GUILD_THREADS_ONLY.has(S.type)) {
    M && b.log("Skipping fetch because channel is a forum/store");
    return
  }
  let m = f.default.getOrCreate(l);
  p.AttachmentLinkRefreshExperiment.getCurrentConfig({
    location: "fetch_messages"
  }).enabled && m.some(N.messageHasExpiredAttachmentUrl) && (b.log("Found expired attachment link, clearing messages"), f.default.clear(l), m = f.default.getOrCreate(l)), null != m.jumpTargetId && null == n && (m = m.mutate({
    jumpTargetId: null,
    jumped: !1,
    jumpType: o.JumpTypes.ANIMATED
  }), f.default.commit(m)), null != m.focusTargetId && null == n && (m = m.mutate({
    focusTargetId: null
  }), f.default.commit(m));
  let h = u;
  if (!d || E.default.isConnected() || m.loadingMore ? m.loadingMore || m.ready && !m.cached ? null != n ? h = !0 : M && b.log("Skipping fetch because no other conditions matched") : null == t || null != g.default.getGuild(t) ? h = !0 : M && b.log("Skipping fetch we are connected and have loaded messages") : h = !0, h) {
    if (f.default.commit(m.mutate({
        loadingMore: !0
      })), null != n) r.default.jumpToMessage({
      channelId: l,
      messageId: n,
      flash: !0,
      isPreload: d,
      skipLocalFetch: c,
      jumpType: s
    });
    else if ((null == S ? void 0 : S.isThread()) && function(e) {
        if (_.default.hasOpenedThread(e)) return !1;
        if (null == a) {
          var t;
          a = null !== (t = i.Storage.get(D, {})) && void 0 !== t ? t : {}
        }
        if (e in a) return !1;
        a[e] = Date.now();
        let l = Date.now() - v;
        for (let e in a) a[e] < l && delete a[e];
        return i.Storage.set(D, a), !0
      }(l)) b.log("Jumping to start of thread ".concat(S.id)), r.default.fetchMessages({
      channelId: l,
      limit: T.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: l,
        flash: !1
      },
      isPreload: d,
      skipLocalFetch: c
    });
    else if ((null == S ? void 0 : S.isThread()) && _.default.hasTrackedUnread(S.id) && !m.ready) {
      let e = _.default.getTrackedAckMessageId(S.id);
      b.log("Jumping to most recent message in thread ".concat(S.id, " - ").concat(e)), r.default.fetchMessages({
        channelId: l,
        limit: T.MAX_MESSAGES_PER_CHANNEL,
        jump: {
          messageId: e,
          flash: !1,
          offset: 1
        },
        isPreload: d,
        skipLocalFetch: c
      })
    } else r.default.fetchMessages({
      channelId: l,
      limit: T.MAX_MESSAGES_PER_CHANNEL,
      isPreload: d,
      skipLocalFetch: c,
      jump: {
        jumpType: o.JumpTypes.ANIMATED
      }
    })
  }
}
let v = 90 * C.default.Millis.DAY,
  D = "viewedThreadIds";

function y() {
  let e = h.default.getChannelId();
  if (null != e) {
    let l = I.default.getChannel(e);
    if (null != l) {
      var t;
      let e = (0, n.matchPath)(location.pathname, {
        path: T.Routes.CHANNEL(":guild", ":channel", ":message"),
        exact: !0
      });
      L({
        guildId: l.getGuildId(),
        channelId: l.id,
        messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
      }), F(l.getGuildId(), l.id)
    }
  }
}

function G() {
  let {
    isPreload: e,
    skipLocalFetch: t,
    logFailures: l
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = h.default.getChannelId();
  if (null != a) {
    let n = I.default.getChannel(a);
    null != n ? ((0, S.isTextChannel)(n.type) ? L({
      guildId: n.getGuildId(),
      channelId: n.id,
      isPreload: e,
      skipLocalFetch: t,
      logFailures: l
    }) : l && b.log("Skipping fetch because the selected channel is not a text channel"), F(n.getGuildId(), n.id)) : l && b.log("Skipping fetch because channel is null")
  } else l && b.log("Skipping fetch because there is no selected channel")
}

function P(e) {
  let {
    guildId: t,
    channelId: l,
    messageId: a,
    jumpType: n
  } = e;
  L({
    guildId: t,
    channelId: l,
    messageId: a,
    jumpType: n
  }), F(t, l)
}

function U(e) {
  let {
    guildId: t,
    channelId: l
  } = e;
  L({
    guildId: t,
    channelId: l
  })
}

function F(e, t) {
  let l = m.default.getCurrentSidebarChannelId(t);
  if (null == l) return;
  let a = m.default.getCurrentSidebarMessageId(t);
  L({
    guildId: e,
    channelId: l,
    messageId: a
  })
}

function V() {
  let e = h.default.getChannelId(),
    t = A.default.getGuildId();
  if (null == t || null == e) return;
  let l = m.default.getSidebarState(e);
  (null == l ? void 0 : l.type) !== M.SidebarType.VIEW_CHANNEL && F(t, e)
}

function x(e) {
  let {
    guildId: t,
    channelId: l,
    context: a
  } = e;
  a === T.CURRENT_APP_CONTEXT && (L({
    guildId: t,
    channelId: l
  }), F(t, l))
}

function j(e) {
  let {
    channel: t,
    messageId: l
  } = e, a = t.guild_id;
  null != a && h.default.getChannelId(a) === t.id && L({
    guildId: a,
    channelId: t.id,
    messageId: l
  })
}

function w(e) {
  let {
    channelId: t
  } = e;
  r.default.fetchMessages({
    channelId: t,
    limit: T.MAX_MESSAGES_PER_CHANNEL
  })
}

function H(e) {
  let {
    response: t
  } = e;
  if (null == t || null == t.body) return null;
  if (t.body.code === T.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
    let e = t.body.retry_after;
    null != e && s.default.show({
      title: O.default.Messages.RATE_LIMITED,
      body: O.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
        retryAfterMinutes: Math.ceil(e / 60)
      })
    })
  }
}
let k = {};

function B(e) {
  var t;
  let {
    channelId: l,
    jump: a,
    isStale: n,
    isPreview: u = !1
  } = e;
  if (u) return;
  let i = null !== (t = k[l]) && void 0 !== t ? t : 0;
  if (Date.now() - i < 10 * C.default.Millis.SECOND) return;
  k[l] = Date.now();
  let d = h.default.getChannelId(),
    s = m.default.getCurrentSidebarChannelId(d),
    o = l === d || l === s;
  n && E.default.isConnected() && o && r.default.fetchMessages({
    channelId: l,
    limit: T.MAX_MESSAGES_PER_CHANNEL,
    jump: a
  })
}

function W(e) {
  let {
    channelId: t,
    messageRecord: l,
    reason: a
  } = e;
  null != l && d.default.dispatch({
    type: "MESSAGE_SEND_FAILED",
    channelId: t,
    messageId: l.id,
    reason: null != a ? a : null
  })
}

function Y(e) {
  let {
    state: t
  } = e;
  if ("active" !== t) return !1;
  let l = h.default.getChannelId();
  if (null == l) return !1;
  r.default.fetchNewLocalMessages(l, T.MAX_MESSAGES_PER_CHANNEL)
}
class K extends c.default {
  _initialize() {
    d.default.subscribe("CONNECTION_OPEN", y)
  }
  _terminate() {
    d.default.unsubscribe("CONNECTION_OPEN", y)
  }
  constructor(...e) {
    super(...e), this.fetchMessages = L, this.loadSelectedChannelIfNecessary = G, this.stores = new Map().set(m.default, V), this.actions = {
      APP_STATE_UPDATE: Y,
      OVERLAY_INITIALIZE: y,
      CHANNEL_SELECT: P,
      VOICE_CHANNEL_SELECT: U,
      THREAD_CREATE: j,
      THREAD_LIST_SYNC: () => G(),
      CHANNEL_CREATE: j,
      CHANNEL_PRELOAD: x,
      THREAD_CREATE_LOCAL: w,
      GUILD_CREATE: () => G(),
      MESSAGE_END_EDIT: H,
      LOAD_MESSAGES_SUCCESS: B,
      UPLOAD_FAIL: W,
      CHANNEL_DELETE: () => G(),
      THREAD_DELETE: () => G()
    }
  }
}
var X = new K