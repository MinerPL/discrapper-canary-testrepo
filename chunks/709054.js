"use strict";
n.r(t), n.d(t, {
  DISCORD_EPOCH: function() {
    return s.cj
  },
  SnowflakeSequence: function() {
    return s.Tk
  }
});
var i = n(392711),
  r = n.n(i),
  s = n(67423);

function o(e) {
  return e
}
t.default = {
  age: function(e) {
    return s.B_(e)
  },
  extractTimestamp: function(e) {
    return s.Lm(e)
  },
  compare: function(e, t) {
    return s.qu(e, t)
  },
  atPreviousMillisecond: function(e) {
    return s.cO(e)
  },
  fromTimestamp: function(e) {
    return s.Ol(e)
  },
  fromTimestampWithSequence: function(e, t) {
    return s.P4(e, t)
  },
  keys: function(e) {
    return Object.keys(e)
  },
  forEach: function(e, t) {
    r().forEach(e, (e, n) => t(e, n))
  },
  forEachKey: function(e, t) {
    for (let n in e) t(n)
  },
  entries: function(e) {
    return Object.entries(e)
  },
  castChannelIdAsMessageId: function(e) {
    return e
  },
  castMessageIdAsChannelId: function(e) {
    return e
  },
  castGuildIdAsEveryoneGuildRoleId: function(e) {
    return e
  },
  cast: o
}