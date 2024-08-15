var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(375954);
let c = {},
  d = {},
  _ = {};

function E(e) {
  if (null == e)
return !1;
  let t = d[e];
  if (null == t)
return !1;
  let n = u.Z.getMessage(e, t.messageId);
  if (null == n)
return !1;
  c[e] = {
channel: t.channel,
message: n,
shouldMention: t.shouldMention,
showMentionToggle: t.showMentionToggle
  }, delete d[e];
}

function f() {
  c = {}, d = {}, _ = {};
}
class h extends(s = o.ZP.Store) {
  initialize() {
this.waitFor(u.Z);
  }
  getPendingReply(e) {
return c[e];
  }
  getPendingReplyActionSource(e) {
return _[e];
  }
}
a = 'PendingReplyStore', (i = 'displayName') in(r = h) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new h(l.Z, {
  CREATE_PENDING_REPLY: function(e) {
let {
  channel: t,
  message: n,
  shouldMention: r = !0,
  showMentionToggle: i = !0,
  source: a
} = e;
c[t.id] = {
  channel: t,
  message: n,
  shouldMention: r,
  showMentionToggle: i
}, _[t.id] = a;
  },
  CREATE_SHALLOW_PENDING_REPLY: function(e) {
let {
  channel: t,
  messageId: n,
  shouldMention: r = !0,
  showMentionToggle: i = !0
} = e;
d[t.id] = {
  channel: t,
  messageId: n,
  shouldMention: r,
  showMentionToggle: i
};
  },
  SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
let {
  channelId: t,
  shouldMention: n
} = e;
t in c && (c[t] = {
  ...c[t],
  shouldMention: n
}), t in d && (d[t] = {
  ...d[t],
  shouldMention: n
});
  },
  DELETE_PENDING_REPLY: function(e) {
let {
  channelId: t
} = e;
delete c[t], delete d[t];
  },
  CONNECTION_OPEN: f,
  LOGOUT: f,
  MESSAGE_DELETE: function(e) {
var t, n, r;
let {
  id: i,
  channelId: a
} = e;
if ((null === (n = c[a]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === i)
  delete c[a], delete _[a];
else {
  if ((null === (r = d[a]) || void 0 === r ? void 0 : r.messageId) !== i)
    return !1;
  delete d[a], delete _[a];
}
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
E(t);
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
let {
  channelId: t
} = e;
E(t);
  }
});