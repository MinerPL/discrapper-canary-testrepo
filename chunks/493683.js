n(47120);
var r = n(544891),
  i = n(780384),
  a = n(570140),
  o = n(802098),
  s = n(702321),
  l = n(408987),
  u = n(57132),
  c = n(895886),
  d = n(703656),
  _ = n(131704),
  E = n(592125),
  f = n(306680),
  h = n(626135),
  p = n(73346),
  m = n(26151),
  I = n(287734),
  T = n(981631),
  g = n(689938);
t.Z = {
  async openPrivateChannel(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
  i = arguments.length > 3 ? arguments[3] : void 0,
  a = arguments.length > 4 ? arguments[4] : void 0,
  o = this._getRecipients(e),
  s = e => {
    t && m.Z.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null);
  };
if (1 === o.length) {
  let [e] = o, t = this._openCachedDMChannel(e, a);
  if (null != t)
    return s(t), Promise.resolve(t.id);
}
try {
  let e = await r.tn.post({
    url: T.ANM.USER_CHANNELS,
    body: {
      recipients: o
    },
    context: {
      location: i
    },
    oldFormErrors: !0
  });
  null == a || a();
  let t = this._openPrivateChannel(e.body);
  return s(t), e.body.id;
} catch (e) {
  var l;
  throw (null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === T.evJ.QUARANTINED && (0, c.default)(), e;
}
  },
  async createBroadcastPrivateChannel() {
try {
  let e = await r.tn.post({
      url: T.ANM.BROADCAST_PRIVATE_CHANNEL
    }),
    t = (0, _.q_)(e.body);
  return m.Z.call(t.id, !1, !1, null), e.body.id;
} catch (t) {
  var e;
  throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === T.evJ.QUARANTINED && (0, c.default)(), t;
}
  },
  _openCachedDMChannel(e, t) {
let n = E.Z.getDMFromUserId(e),
  r = null != n ? E.Z.getChannel(n) : null;
return null != r ? (null == t || t(), null != (0, u.PP)() ? (0, d.uL)(T.Z5c.CHANNEL(T.ME, r.id), {
  navigationReplace: !0
}) : I.default.selectPrivateChannel(r.id), r) : null;
  },
  async ensurePrivateChannel(e) {
let t = this._getRecipients(e),
  n = await r.tn.post({
    url: T.ANM.USER_CHANNELS,
    body: {
      recipients: t
    },
    oldFormErrors: !0
  }),
  i = (0, _.q_)(n.body);
return a.Z.dispatch({
  type: 'CHANNEL_CREATE',
  channel: i
}), i.id;
  },
  async getOrEnsurePrivateChannel(e) {
let t = E.Z.getDMFromUserId(e);
return null != t ? t : await this.ensurePrivateChannel(e);
  },
  async getDMChannel(e) {
let t = await r.tn.get(T.ANM.DM_CHANNEL(e)),
  n = (0, _.q_)(t.body);
return a.Z.dispatch({
  type: 'CHANNEL_CREATE',
  channel: n
}), n.id;
  },
  _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
  _openPrivateChannel(e) {
let t = (0, _.q_)(e);
return a.Z.dispatch({
  type: 'CHANNEL_CREATE',
  channel: t
}), null != (0, u.PP)() ? (0, d.uL)(T.Z5c.CHANNEL(T.ME, t.id), {
  navigationReplace: !0
}) : I.default.selectPrivateChannel(t.id), t;
  },
  closePrivateChannel(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
return (0, s.Z)(e) && h.default.track(T.rMx.CHANGE_LOG_DM_REMOVED, {
  last_changelog_id: o.Z.latestChangelogId(),
  unread_count: f.ZP.getUnreadCount(e)
}), a.Z.dispatch({
  type: 'CHANNEL_DELETE',
  channel: {
    id: e,
    guild_id: void 0,
    parent_id: void 0
  },
  silent: n
}), t && !__OVERLAY__ && (0, d.uL)(T.Z5c.FRIENDS), r.tn.del({
  url: T.ANM.CHANNEL(e),
  query: {
    silent: n
  },
  oldFormErrors: !0
}).then(() => {
  i.uv.announce(g.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED);
}).catch(() => {
  i.uv.announce(g.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED);
});
  },
  updatePermissionOverwrite: (e, t) => r.tn.put({
url: T.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
body: t,
oldFormErrors: !0
  }),
  clearPermissionOverwrite: (e, t) => r.tn.del({
url: T.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
oldFormErrors: !0
  }),
  addRecipient(e, t, n, a) {
return r.tn.put({
  url: T.ANM.CHANNEL_RECIPIENT(e, t),
  context: {
    location: n
  },
  oldFormErrors: !0
}).then(t => (i.uv.announce(g.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == a || a(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (i.uv.announce(g.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e));
  },
  addRecipients(e, t, n, r) {
return this.addRecipient(e, t[0], n, r).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e));
  },
  removeRecipient: (e, t) => r.tn.del({
url: T.ANM.CHANNEL_RECIPIENT(e, t),
oldFormErrors: !0
  }),
  setDMOwner: (e, t) => r.tn.patch({
url: T.ANM.CHANNEL(e),
body: {
  owner: t
},
oldFormErrors: !0
  }),
  async setName(e, t) {
let n = E.Z.getChannel(e),
  i = await r.tn.patch({
    url: T.ANM.CHANNEL(e),
    body: {
      name: t
    },
    oldFormErrors: !0
  }),
  a = null == n ? void 0 : n.getGuildId();
return null != a && !(null == n ? void 0 : n.isThread()) && l.Z.checkGuildTemplateDirty(a), i;
  },
  setIcon(e, t) {
let n = E.Z.getChannel(e);
r.tn.patch({
  url: T.ANM.CHANNEL(e),
  body: {
    icon: t
  },
  oldFormErrors: !0
}).then(() => {
  let e = null == n ? void 0 : n.getGuildId();
  null != e && !(null == n ? void 0 : n.isThread()) && l.Z.checkGuildTemplateDirty(e);
});
  },
  convertToGuild: e => r.tn.post({
url: T.ANM.CHANNEL_CONVERT(e),
oldFormErrors: !0
  }),
  preload(e, t) {
a.Z.dispatch({
  type: 'CHANNEL_PRELOAD',
  guildId: e === T.ME ? null : e,
  channelId: t,
  context: T.e3s
});
  },
  fetchChannelStoreListing(e, t) {
let n = null != t ? T.ANM.CHANNEL_STORE_LISTING_SKU(e, t) : T.ANM.CHANNEL_STORE_LISTING(e);
return (0, p.Kb)(n).then(t => {
  a.Z.dispatch({
    type: 'STORE_LISTING_FETCH_SUCCESS',
    channelId: e,
    storeListing: t.body
  });
});
  },
  async createTextChannel(e, t, n, i) {
let a = {
  type: T.d4z.GUILD_TEXT,
  name: t,
  permission_overwrites: []
};
null != n && (a.parent_id = n), null != i && (a.topic = i);
let o = await r.tn.post({
  url: T.ANM.GUILD_CHANNELS(e),
  body: a,
  oldFormErrors: !0
});
return l.Z.checkGuildTemplateDirty(e), o;
  }
};