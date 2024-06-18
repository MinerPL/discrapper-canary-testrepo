"use strict";
n.d(t, {
  A6: function() {
    return o
  },
  fE: function() {
    return r
  },
  qx: function() {
    return s
  }
});
var i = n(570140);

function r(e) {
  let {
    message: t,
    channel: n,
    shouldMention: r,
    showMentionToggle: s,
    source: o
  } = e;
  i.Z.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: t,
    channel: n,
    shouldMention: r,
    showMentionToggle: s,
    source: o
  })
}

function s(e, t) {
  i.Z.dispatch({
    type: "SET_PENDING_REPLY_SHOULD_MENTION",
    channelId: e,
    shouldMention: t
  })
}

function o(e) {
  i.Z.dispatch({
    type: "DELETE_PENDING_REPLY",
    channelId: e
  })
}