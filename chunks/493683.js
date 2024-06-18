"use strict";
n(47120);
var i = n(544891),
  r = n(780384),
  s = n(570140),
  o = n(802098),
  a = n(702321),
  l = n(408987),
  u = n(57132),
  _ = n(895886),
  d = n(703656),
  c = n(131704),
  E = n(592125),
  I = n(306680),
  T = n(626135),
  h = n(73346),
  S = n(26151),
  f = n(287734),
  N = n(981631),
  A = n(689938);
t.Z = {
  async openPrivateChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = arguments.length > 3 ? arguments[3] : void 0,
      s = arguments.length > 4 ? arguments[4] : void 0,
      o = this._getRecipients(e),
      a = e => {
        t && S.Z.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null)
      };
    if (1 === o.length) {
      let [e] = o, t = this._openCachedDMChannel(e, s);
      if (null != t) return a(t), Promise.resolve(t.id)
    }
    try {
      let e = await i.tn.post({
        url: N.ANM.USER_CHANNELS,
        body: {
          recipients: o
        },
        context: {
          location: r
        },
        oldFormErrors: !0
      });
      null == s || s();
      let t = this._openPrivateChannel(e.body);
      return a(t), e.body.id
    } catch (e) {
      var l;
      throw (null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === N.evJ.QUARANTINED && (0, _.default)(), e
    }
  },
  async createBroadcastPrivateChannel() {
    try {
      let e = await i.tn.post({
          url: N.ANM.BROADCAST_PRIVATE_CHANNEL
        }),
        t = (0, c.q_)(e.body);
      return S.Z.call(t.id, !1, !1, null), e.body.id
    } catch (t) {
      var e;
      throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === N.evJ.QUARANTINED && (0, _.default)(), t
    }
  },
  _openCachedDMChannel(e, t) {
    let n = E.Z.getDMFromUserId(e),
      i = null != n ? E.Z.getChannel(n) : null;
    return null != i ? (null == t || t(), null != (0, u.PP)() ? (0, d.uL)(N.Z5c.CHANNEL(N.ME, i.id), {
      navigationReplace: !0
    }) : f.default.selectPrivateChannel(i.id), i) : null
  },
  async ensurePrivateChannel(e) {
    let t = this._getRecipients(e),
      n = await i.tn.post({
        url: N.ANM.USER_CHANNELS,
        body: {
          recipients: t
        },
        oldFormErrors: !0
      }),
      r = (0, c.q_)(n.body);
    return s.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: r
    }), r.id
  },
  async getOrEnsurePrivateChannel(e) {
    let t = E.Z.getDMFromUserId(e);
    return null != t ? t : await this.ensurePrivateChannel(e)
  },
  async getDMChannel(e) {
    let t = await i.tn.get(N.ANM.DM_CHANNEL(e)),
      n = (0, c.q_)(t.body);
    return s.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: n
    }), n.id
  },
  _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
  _openPrivateChannel(e) {
    let t = (0, c.q_)(e);
    return s.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    }), null != (0, u.PP)() ? (0, d.uL)(N.Z5c.CHANNEL(N.ME, t.id), {
      navigationReplace: !0
    }) : f.default.selectPrivateChannel(t.id), t
  },
  closePrivateChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, a.Z)(e) && T.default.track(N.rMx.CHANGE_LOG_DM_REMOVED, {
      last_changelog_id: o.Z.latestChangelogId(),
      unread_count: I.ZP.getUnreadCount(e)
    }), s.Z.dispatch({
      type: "CHANNEL_DELETE",
      channel: {
        id: e,
        guild_id: void 0,
        parent_id: void 0
      },
      silent: n
    }), t && !__OVERLAY__ && (0, d.uL)(N.Z5c.FRIENDS), i.tn.del({
      url: N.ANM.CHANNEL(e),
      query: {
        silent: n
      },
      oldFormErrors: !0
    }).then(() => {
      r.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
    }).catch(() => {
      r.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
    })
  },
  updatePermissionOverwrite: (e, t) => i.tn.put({
    url: N.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
    body: t,
    oldFormErrors: !0
  }),
  clearPermissionOverwrite: (e, t) => i.tn.del({
    url: N.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
    oldFormErrors: !0
  }),
  addRecipient(e, t, n, s) {
    return i.tn.put({
      url: N.ANM.CHANNEL_RECIPIENT(e, t),
      context: {
        location: n
      },
      oldFormErrors: !0
    }).then(t => (r.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == s || s(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (r.uv.announce(A.Z.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e))
  },
  addRecipients(e, t, n, i) {
    return this.addRecipient(e, t[0], n, i).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
  },
  removeRecipient: (e, t) => i.tn.del({
    url: N.ANM.CHANNEL_RECIPIENT(e, t),
    oldFormErrors: !0
  }),
  setDMOwner: (e, t) => i.tn.patch({
    url: N.ANM.CHANNEL(e),
    body: {
      owner: t
    },
    oldFormErrors: !0
  }),
  async setName(e, t) {
    let n = E.Z.getChannel(e),
      r = await i.tn.patch({
        url: N.ANM.CHANNEL(e),
        body: {
          name: t
        },
        oldFormErrors: !0
      }),
      s = null == n ? void 0 : n.getGuildId();
    return null != s && !(null == n ? void 0 : n.isThread()) && l.Z.checkGuildTemplateDirty(s), r
  },
  setIcon(e, t) {
    let n = E.Z.getChannel(e);
    i.tn.patch({
      url: N.ANM.CHANNEL(e),
      body: {
        icon: t
      },
      oldFormErrors: !0
    }).then(() => {
      let e = null == n ? void 0 : n.getGuildId();
      null != e && !(null == n ? void 0 : n.isThread()) && l.Z.checkGuildTemplateDirty(e)
    })
  },
  convertToGuild: e => i.tn.post({
    url: N.ANM.CHANNEL_CONVERT(e),
    oldFormErrors: !0
  }),
  preload(e, t) {
    s.Z.dispatch({
      type: "CHANNEL_PRELOAD",
      guildId: e === N.ME ? null : e,
      channelId: t,
      context: N.e3s
    })
  },
  fetchChannelStoreListing(e, t) {
    let n = null != t ? N.ANM.CHANNEL_STORE_LISTING_SKU(e, t) : N.ANM.CHANNEL_STORE_LISTING(e);
    return (0, h.Kb)(n).then(t => {
      s.Z.dispatch({
        type: "STORE_LISTING_FETCH_SUCCESS",
        channelId: e,
        storeListing: t.body
      })
    })
  },
  async createTextChannel(e, t, n, r) {
    let s = {
      type: N.d4z.GUILD_TEXT,
      name: t,
      permission_overwrites: []
    };
    null != n && (s.parent_id = n), null != r && (s.topic = r);
    let o = await i.tn.post({
      url: N.ANM.GUILD_CHANNELS(e),
      body: s,
      oldFormErrors: !0
    });
    return l.Z.checkGuildTemplateDirty(e), o
  }
}