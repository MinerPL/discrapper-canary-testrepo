"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007"), n("808653");
var i = n("446674"),
  s = n("913144"),
  r = n("353927");
let a = null,
  o = null,
  l = {};

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
    i = l[e];
  if (null == i) return;
  let s = i[null != t ? t : "null"];
  if (null != s) {
    for (let e of Object.values(r.MediaEngineContextTypes))(n === e || null == n) && delete s[e];
    l[e][null != t ? t : "null"] = s
  }
}
class d extends i.default.Store {
  getStreamId(e, t) {
    var n, i, s;
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.MediaEngineContextTypes.DEFAULT;
    return null === (s = l[e]) || void 0 === s ? void 0 : null === (i = s[null != t ? t : "null"]) || void 0 === i ? void 0 : null === (n = i[a]) || void 0 === n ? void 0 : n.streamId
  }
  getUserStreamData(e, t) {
    var n, i;
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.MediaEngineContextTypes.DEFAULT;
    return null === (i = l[e]) || void 0 === i ? void 0 : null === (n = i[null != t ? t : "null"]) || void 0 === n ? void 0 : n[s]
  }
}
d.displayName = "VideoStreamStore";
var c = new d(s.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      sessionId: n
    } = e;
    a = t.id, o = n
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      user: t,
      sessionId: n
    } = e;
    a = t.id, o = n
  },
  RTC_CONNECTION_VIDEO: function(e) {
    let {
      userId: t,
      guildId: n,
      streamId: i,
      context: s
    } = e;
    null != i ? ! function(e, t, n, i) {
      var s;
      !(e in l) && (l[e] = {});
      let r = null !== (s = l[e][null != t ? t : "null"]) && void 0 !== s ? s : {};
      l[e][null != t ? t : "null"] = {
        ...r,
        [i]: {
          streamId: n
        }
      }
    }(t, n, i, s) : u(t, n, s)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      var n;
      let {
        userId: i,
        sessionId: s,
        channelId: r,
        guildId: d
      } = t;
      if (null == r && i === a) {
        if (s !== o) return e;
        l = {}
      } else {
        if (null != r || (null === (n = l[i]) || void 0 === n ? void 0 : n[null != d ? d : "null"]) == null) return e;
        u(i, d)
      }
      return !0
    }, !1)
  }
})