n(47120);
var i = n(445346),
  a = n(570140),
  s = n(513418),
  r = n(710845),
  l = n(57132),
  o = n(592125),
  c = n(375954),
  d = n(625236);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = -1 / 0,
  E = new r.Z('MessagePreviewStore');
class h extends i.y {
  isLatest(e, t) {
var n;
let i = this.guilds.get(null != e ? e : null);
return null !== (n = null == i ? void 0 : i.isLatest(t, this.generation)) && void 0 !== n && n;
  }
  isLocalFetchNeeded(e) {
var t, n;
return null === (n = null === (t = this.guilds.get(e)) || void 0 === t ? void 0 : t.localNeeded) || void 0 === n || n;
  }
  message(e, t) {
var n, i;
return null !== (i = null === (n = this.guilds.get(e)) || void 0 === n ? void 0 : n.messageRecord(t)) && void 0 !== i ? i : null;
  }
  data(e) {
return !this.guilds.has(e) && this.guilds.set(e, new d.B()), this.guilds.get(e);
  }
  handleOneGuildCreate(e) {
var t, n;
let i = this.data(e.id);
i.putMany(null !== (t = e.lastMessages) && void 0 !== t ? t : [], this.generation), i.putMany(null !== (n = e.threadMessages) && void 0 !== n ? n : [], this.generation), null != e.lastMessages && (i.localNeeded = !1);
  }
  handleConnectionOpen(e) {
if (!(0, l.cn)())
  return !1;
for (let t of (this.generation += 1, e.guilds))
  this.handleOneGuildCreate(t);
  }
  handleGuildCreate(e) {
if (!(0, l.cn)())
  return !1;
this.handleOneGuildCreate(e.guild);
  }
  handleGuildDelete(e) {
if (!(0, l.cn)())
  return !1;
this.guilds.delete(e.guild.id);
  }
  handleMessageCreate(e) {
var t;
if (!(0, l.cn)() || e.optimistic || e.isPushNotification)
  return !1;
this.data(null !== (t = e.guildId) && void 0 !== t ? t : null).put(e.message.channel_id, e.message, this.generation);
  }
  handleMessageDelete(e) {
var t, n;
if (!(0, l.cn)())
  return !1;
let i = null !== (n = e.guildId) && void 0 !== n ? n : null;
if ((null === (t = this.data(i)) || void 0 === t ? void 0 : t.messageId(e.channelId)) === e.id) {
  let t = c.Z.getMessages(e.channelId),
    n = t.hasMoreAfter ? null : t.last();
  null != n ? this.data(i).put(e.channelId, n, this.generation) : this.data(i).delete(e.channelId);
}
  }
  handleMessageUpdate(e) {
var t;
if (!(0, l.cn)())
  return;
let n = null !== (t = e.guildId) && void 0 !== t ? t : null,
  i = e.message.channel_id,
  a = e.message.id;
if (null == i || null == a)
  return !1;
let s = this.data(n);
if ((null == s ? void 0 : s.messageId(i)) !== a)
  return !1;
null == s || s.update(e.message);
  }
  handleThreadListSync(e) {
var t;
if (!(0, l.cn)())
  return !1;
this.data(e.guildId).putMany(null !== (t = e.mostRecentMessages) && void 0 !== t ? t : [], this.generation);
  }
  handleLoadMessagesSuccess(e) {
if (!(0, l.cn)())
  return;
let t = o.Z.getBasicChannel(e.channelId);
if (null != t) {
  var n;
  (0, s.Z)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (n = e.messages[0]) && void 0 !== n ? n : null, this.generation);
}
  }
  handleLocalMessagesLoaded(e) {
if (!(0, l.cn)())
  return;
let t = o.Z.getBasicChannel(e.channelId);
if (null != t) {
  var n;
  (0, s.Z)(e.messages), this.data(t.guild_id).putNew(e.channelId, null !== (n = e.messages[0]) && void 0 !== n ? n : null, _);
}
  }
  handleMessagePreviewsLoaded(e) {
if (!(0, l.cn)())
  return;
E.verbose('adding remote previews (guildId: '.concat(e.guildId, ', messages: ').concat(e.messages.length, ')'));
let t = this.data(e.guildId);
for (let n of e.messages)
  !t.isLatest(n.channel_id, this.generation) && t.put(n.channel_id, n, this.generation);
  }
  handleMessagePreviewsLocallyLoaded(e) {
if (!(0, l.cn)())
  return;
E.verbose('adding local previews (guildId: '.concat(e.guildId, ', messages: ').concat(e.messages.length, ')'));
let t = this.data(e.guildId);
for (let [n, i] of e.messages)
  !t.has(n) && t.put(n, i, _);
t.localNeeded = !1;
  }
  handleLogout(e) {
this.guilds.clear();
  }
  constructor() {
super(a.Z, {
  CONNECTION_OPEN: e => this.handleConnectionOpen(e),
  GUILD_CREATE: e => this.handleGuildCreate(e),
  GUILD_DELETE: e => this.handleGuildDelete(e),
  LOAD_MESSAGES_SUCCESS: e => this.handleLoadMessagesSuccess(e),
  LOCAL_MESSAGES_LOADED: e => this.handleLocalMessagesLoaded(e),
  LOGOUT: e => this.handleLogout(e),
  MESSAGE_CREATE: e => this.handleMessageCreate(e),
  MESSAGE_DELETE: e => this.handleMessageDelete(e),
  MESSAGE_PREVIEWS_LOADED: e => this.handleMessagePreviewsLoaded(e),
  MESSAGE_PREVIEWS_LOCALLY_LOADED: e => this.handleMessagePreviewsLocallyLoaded(e),
  MESSAGE_UPDATE: e => this.handleMessageUpdate(e),
  THREAD_LIST_SYNC: e => this.handleThreadListSync(e)
}), u(this, 'guilds', new Map()), u(this, 'generation', 0);
  }
}
new h();