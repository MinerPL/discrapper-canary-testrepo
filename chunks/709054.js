n.r(t), n.d(t, {
  DISCORD_EPOCH: function() {
return a.cj;
  },
  SnowflakeSequence: function() {
return a.Tk;
  }
});
var r = n(392711),
  i = n.n(r),
  a = n(67423);

function o(e) {
  return e;
}
t.default = {
  age: function(e) {
return a.B_(e);
  },
  extractTimestamp: function(e) {
return a.Lm(e);
  },
  compare: function(e, t) {
return a.qu(e, t);
  },
  atPreviousMillisecond: function(e) {
return a.cO(e);
  },
  fromTimestamp: function(e) {
return a.Ol(e);
  },
  fromTimestampWithSequence: function(e, t) {
return a.P4(e, t);
  },
  keys: function(e) {
return Object.keys(e);
  },
  forEach: function(e, t) {
i().forEach(e, (e, n) => t(e, n));
  },
  forEachKey: function(e, t) {
for (let n in e)
  t(n);
  },
  entries: function(e) {
return Object.entries(e);
  },
  castChannelIdAsMessageId: function(e) {
return e;
  },
  castMessageIdAsChannelId: function(e) {
return e;
  },
  castGuildIdAsEveryoneGuildRoleId: function(e) {
return e;
  },
  cast: o
};