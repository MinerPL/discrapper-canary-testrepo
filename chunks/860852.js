"use strict";
var i, r;

function s(e) {
  let {
    sessionId: t,
    userId: n,
    applicationId: i,
    channelId: r,
    streamKey: s
  } = e;
  return {
    session_id: t,
    user_id: n,
    application_id: i,
    channel_id: r,
    stream_key: s
  }
}

function o(e, t, n) {
  let {
    session_id: i,
    application_id: r,
    channel_id: s,
    stream_key: o
  } = e;
  return {
    sessionId: i,
    userId: t,
    applicationId: r,
    channelId: s,
    streamKey: o,
    source: n
  }
}
n.d(t, {
  $C: function() {
    return i
  },
  HD: function() {
    return s
  },
  tI: function() {
    return o
  }
}), (r = i || (i = {}))[r.GLOBAL = 0] = "GLOBAL", r[r.GUILD = 1] = "GUILD"