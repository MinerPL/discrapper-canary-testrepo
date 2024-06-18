"use strict";
n.d(t, {
  b2: function() {
    return v
  }
}), n(47120), n(724458);
var i = n(952639),
  r = n.n(i),
  s = n(605906),
  o = n.n(s),
  a = n(286379),
  l = n(570140),
  u = n(147913),
  _ = n(786761),
  d = n(797614),
  c = n(869765),
  E = n(314897),
  I = n(433355),
  T = n(592125),
  h = n(375954),
  S = n(944486),
  f = n(914010),
  N = n(709054),
  A = n(93735),
  m = n(522664),
  O = n(651530),
  R = n(163268),
  C = n(735020),
  p = n(774863),
  g = n(981631),
  L = n(526761);
let v = 3e3,
  D = {};

function M(e) {
  return "".concat(e.channel_id, ":").concat(e.id)
}

function P() {
  Object.values(D).forEach(e => {
    let {
      timeout: t
    } = e;
    clearTimeout(t)
  }), D = {}
}

function y(e, t) {
  if (null == e.id || null == e.channel_id) return !1;
  let n = M(e);
  if (null != D[n]) {
    let {
      timeout: i
    } = D[n];
    return clearTimeout(i),
      function(e, t) {
        let {
          setAt: n
        } = D[M(e)];
        if (t === R.Pq.UPDATE) {
          var i, r;
          let t = null !== (i = e.attachments) && void 0 !== i ? i : [],
            n = null !== (r = e.embeds) && void 0 !== r ? r : [],
            s = t.filter(e => (0, R.KP)({
              type: R.lJ.Attachment,
              media: e
            }, !0)),
            o = n.filter(e => (0, R.KP)({
              type: R.lJ.Embed,
              media: e
            }, !0));
          (0, R.xx)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: s.length,
            numOfExplicitEmbeds: o.length
          })
        }(0, R.OP)(n, t)
      }(e, t), delete D[n], !0
  }
  return !1
}
let U = (e, t) => {
  if (0 !== e.length) {
    if (t) {
      (0, m.gx)(e);
      return
    }(0, m.qO)(e[0].channel_id, e.map(e => e.id))
  }
};

function b(e, t) {
  let {
    forceBatchScan: n = !1,
    jitter: i = !1
  } = null != t ? t : {}, r = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(A.N7) : e;
  r.forEach(e => {
    let t = M(e);
    null == D[t] && (d.Z.increment({
      name: a.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE
    }), D[t] = {
      setAt: Date.now(),
      timeout: setTimeout(() => {
        ! function(e) {
          if (y(e, R.Pq.TIMEOUT)) {
            let t = h.Z.getMessage(e.channel_id, e.id),
              {
                attachmentIds: n,
                embedIds: i
              } = (0, A.ZW)(t);
            (0, R.Hc)({
              channelId: e.channel_id,
              messageId: e.id,
              attachmentIds: n,
              embedIds: i
            }), l.Z.dispatch({
              type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
              messageId: e.id,
              channelId: e.channel_id
            })
          }
        }(e)
      }, v)
    })
  });
  let s = n || new Set(r.map(e => e.channel_id)).size > 1;
  i ? setTimeout(() => {
    U(r.filter(e => null != D[M(e)]), s)
  }, 800 * Math.random()) : U(r, s)
}

function G(e) {
  let t = p.Z.validContentScanVersion;
  return e.reduce((e, n) => {
    var i, r, s, o, a, l, u, _;
    null == e[n.channel_id] && (e[n.channel_id] = {
      numOfAttachments: 0,
      numOfAttachmentsPendingScan: 0,
      numOfEmbeds: 0,
      numOfEmbedsPendingScan: 0
    });
    let d = e[n.channel_id];
    return d.numOfAttachments += null !== (a = null === (i = n.attachments) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0, d.numOfEmbeds += null !== (l = null === (r = n.embeds) || void 0 === r ? void 0 : r.length) && void 0 !== l ? l : 0, d.numOfAttachmentsPendingScan += null !== (u = null === (s = n.attachments) || void 0 === s ? void 0 : s.filter(e => (0, A.CN)(e, t)).length) && void 0 !== u ? u : 0, d.numOfEmbedsPendingScan += null !== (_ = null == n ? void 0 : null === (o = n.embeds) || void 0 === o ? void 0 : o.filter(e => (0, A.fj)(e, t)).length) && void 0 !== _ ? _ : 0, {
      ...e,
      [n.channel_id]: d
    }
  }, {})
}

function w(e, t) {
  let {
    messagesPendingScan: n,
    attributesByChannelId: i
  } = function(e) {
    let t = e.filter(e => (0, A.qP)(e) && (0, R.HH)(e)),
      n = e.map(e => {
        if (null != e && "referenced_message" in e && null != e.referenced_message && (0, A.qP)(e.referenced_message) && (0, R.HH)(e.referenced_message)) return e.referenced_message
      }).filter(function(e) {
        return null != e
      });
    n.length > 0 && (t = [...t, ...n]);
    let i = o()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
      messagesPendingScan: i.filter(e => (0, A.xG)(e)),
      attributesByChannelId: G(i)
    }
  }(e);
  return N.default.entries(i).forEach(e => {
    let [t, n] = e;
    (0, R.IV)({
      channelId: t,
      numOfAttachments: n.numOfAttachments,
      numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
      numOfEmbeds: n.numOfEmbeds,
      numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
    })
  }), !!(n.length > 0) && (b(n, t), !0)
}

function k(e) {
  var t, n, i, r, s, o;
  let {
    message: a
  } = e;
  if (!(0, O.Kh)() || null == a.channel_id || null == a.id || (null === (t = a.author) || void 0 === t ? void 0 : t.id) === E.default.getId() || null == a.embeds && null == a.attachments || (null === (n = a.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = a.attachments) || void 0 === i ? void 0 : i.length) === 0) return !1;
  if (!(0, A.N7)(a)) {
    let e = null !== (o = null !== (s = h.Z.getMessage(a.channel_id, a.id)) && void 0 !== s ? s : C.Z.getMessage(a.id, a.channel_id)) && void 0 !== o ? o : null === (r = c.Z.getMessage(a.channel_id, a.id)) || void 0 === r ? void 0 : r.message;
    null != e && !(0, A.N7)((0, _.wi)(e, a)) && y(e, R.Pq.UPDATE)
  }
  let l = S.Z.getChannelId(),
    u = I.ZP.getCurrentSidebarChannelId(l);
  if (!(a.channel_id === l || a.channel_id === u)) return !1;
  let d = h.Z.getMessage(a.channel_id, a.id);
  return null != d && w([d], {
    isMessageUpdate: !0
  })
}

function B(e) {
  var t, n;
  let {
    channelId: i,
    message: r,
    optimistic: s,
    isPushNotification: o
  } = e;
  if (!(0, O.Kh)() || s || o || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === E.default.getId()) return !1;
  let a = S.Z.getChannelId(),
    l = I.ZP.getCurrentSidebarChannelId(a),
    u = i === a || i === l,
    _ = T.Z.getChannel(i);
  if (!u) return !1;
  let d = null === (n = null == _ ? void 0 : _.isPrivate()) || void 0 === n || n,
    c = (null == _ ? void 0 : _.memberCount) == null || (null == _ ? void 0 : _.memberCount) > 100;
  return w([r], {
    jitter: d && c
  })
}

function x(e) {
  let {
    channelId: t,
    messages: n
  } = e;
  if (!(0, O.Kh)() || null == t || null == n) return !1;
  let i = S.Z.getChannelId(),
    r = I.ZP.getCurrentSidebarChannelId(i);
  return (t === i || t === r) && w(n)
}

function V(e) {
  let {
    messages: t
  } = e;
  if (!(0, O.Kh)() || null == t) return !1;
  let n = r()(t);
  return w(o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id))
}

function Z(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  return !!(null != n && (0, O.Kh)()) && f.Z.getGuildId() === t && w(N.default.keys(n).map(e => n[e].first_message))
}

function H(e) {
  let {
    guildId: t,
    firstMessages: n
  } = e;
  return !!(null != n && (0, O.Kh)()) && f.Z.getGuildId() === t && w(n, {
    forceBatchScan: !0
  })
}

function F(e) {
  let {
    channelId: t
  } = e;
  return !!(null != t && (0, O.Kh)()) && t === S.Z.getChannelId() && W(t)
}

function Y(e) {
  let {
    settings: t,
    local: n
  } = e;
  if (!(0, O.Kh)() || !n || t.type !== L.yP.PRELOADED_USER_SETTINGS) return !1;
  let i = S.Z.getChannelId();
  return null != i && W(i)
}

function j(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  return !!(0, O.Kh)() && !!n && W(t)
}

function W(e) {
  let t = h.Z.getMessages(e);
  return 0 !== t.length && function(e) {
    let {
      messagesPendingScan: t,
      attributesByChannelId: n
    } = function(e) {
      let t = e.filter(e => (0, A.qP)(e) && (0, R.HH)(e)),
        n = e.map(e => {
          if (g.OBS.has(e.type) && null != e.messageReference) {
            let t = c.Z.getMessageByReference(e.messageReference);
            if (t.state === c.Y.LOADED && null != t.message && (0, A.qP)(t.message) && (0, R.HH)(t.message)) return t.message
          }
        }).filter(function(e) {
          return null != e
        });
      n.length > 0 && (t = [...t, ...n]);
      let i = o()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
      return {
        messagesPendingScan: i.filter(e => (0, A.xG)(e)),
        attributesByChannelId: G(i)
      }
    }(e);
    return N.default.entries(n).forEach(e => {
      let [t, n] = e;
      (0, R.IV)({
        channelId: t,
        numOfAttachments: n.numOfAttachments,
        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
        numOfEmbeds: n.numOfEmbeds,
        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
      })
    }), !!(t.length > 0) && (b(t), !0)
  }(t)
}
class K extends u.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      LOAD_MESSAGES_SUCCESS: x,
      LOAD_FORUM_POSTS: Z,
      LOAD_THREADS_SUCCESS: H,
      LOAD_ARCHIVED_THREADS_SUCCESS: H,
      MESSAGE_CREATE: B,
      MESSAGE_UPDATE: k,
      LOGOUT: P,
      SEARCH_FINISH: V,
      MOD_VIEW_SEARCH_FINISH: V,
      CHANNEL_SELECT: F,
      LOAD_PINNED_MESSAGES_SUCCESS: V,
      USER_SETTINGS_PROTO_UPDATE: Y,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: j
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.ZP = new K