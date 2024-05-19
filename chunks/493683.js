"use strict";
n.r(t), n("47120");
var i = n("544891"),
  r = n("780384"),
  a = n("570140"),
  s = n("802098"),
  o = n("702321"),
  l = n("408987"),
  u = n("57132"),
  d = n("895886"),
  _ = n("703656"),
  c = n("131704"),
  E = n("592125"),
  I = n("306680"),
  T = n("626135"),
  f = n("73346"),
  S = n("26151"),
  h = n("287734"),
  A = n("981631"),
  m = n("689938");
t.default = {
  async openPrivateChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = arguments.length > 3 ? arguments[3] : void 0,
      a = arguments.length > 4 ? arguments[4] : void 0,
      s = this._getRecipients(e),
      o = e => {
        t && S.default.call(e.id, n, !0, e.isDM() ? e.getRecipientId() : null)
      };
    if (1 === s.length) {
      let [e] = s, t = this._openCachedDMChannel(e, a);
      if (null != t) return o(t), Promise.resolve(t.id)
    }
    try {
      let e = await i.HTTP.post({
        url: A.Endpoints.USER_CHANNELS,
        body: {
          recipients: s
        },
        context: {
          location: r
        },
        oldFormErrors: !0
      });
      null == a || a();
      let t = this._openPrivateChannel(e.body);
      return o(t), e.body.id
    } catch (e) {
      var l;
      throw (null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === A.AbortCodes.QUARANTINED && (0, d.default)(), e
    }
  },
  async createBroadcastPrivateChannel() {
    try {
      let e = await i.HTTP.post({
          url: A.Endpoints.BROADCAST_PRIVATE_CHANNEL
        }),
        t = (0, c.createChannelRecordFromServer)(e.body);
      return S.default.call(t.id, !1, !1, null), e.body.id
    } catch (t) {
      var e;
      throw (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.code) === A.AbortCodes.QUARANTINED && (0, d.default)(), t
    }
  },
  _openCachedDMChannel(e, t) {
    let n = E.default.getDMFromUserId(e),
      i = null != n ? E.default.getChannel(n) : null;
    return null != i ? (null == t || t(), null != (0, u.getRootNavigationRefIfInExperiment)() ? (0, _.transitionTo)(A.Routes.CHANNEL(A.ME, i.id), {
      navigationReplace: !0
    }) : h.default.selectPrivateChannel(i.id), i) : null
  },
  async ensurePrivateChannel(e) {
    let t = this._getRecipients(e),
      n = await i.HTTP.post({
        url: A.Endpoints.USER_CHANNELS,
        body: {
          recipients: t
        },
        oldFormErrors: !0
      }),
      r = (0, c.createChannelRecordFromServer)(n.body);
    return a.default.dispatch({
      type: "CHANNEL_CREATE",
      channel: r
    }), r.id
  },
  async getOrEnsurePrivateChannel(e) {
    let t = E.default.getDMFromUserId(e);
    return null != t ? t : await this.ensurePrivateChannel(e)
  },
  async getDMChannel(e) {
    let t = await i.HTTP.get(A.Endpoints.DM_CHANNEL(e)),
      n = (0, c.createChannelRecordFromServer)(t.body);
    return a.default.dispatch({
      type: "CHANNEL_CREATE",
      channel: n
    }), n.id
  },
  _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
  _openPrivateChannel(e) {
    let t = (0, c.createChannelRecordFromServer)(e);
    return a.default.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    }), null != (0, u.getRootNavigationRefIfInExperiment)() ? (0, _.transitionTo)(A.Routes.CHANNEL(A.ME, t.id), {
      navigationReplace: !0
    }) : h.default.selectPrivateChannel(t.id), t
  },
  closePrivateChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, o.default)(e) && T.default.track(A.AnalyticEvents.CHANGE_LOG_DM_REMOVED, {
      last_changelog_id: s.default.latestChangelogId(),
      unread_count: I.default.getUnreadCount(e)
    }), a.default.dispatch({
      type: "CHANNEL_DELETE",
      channel: {
        id: e,
        guild_id: void 0,
        parent_id: void 0
      },
      silent: n
    }), t && !__OVERLAY__ && (0, _.transitionTo)(A.Routes.FRIENDS), i.HTTP.del({
      url: A.Endpoints.CHANNEL(e),
      query: {
        silent: n
      },
      oldFormErrors: !0
    }).then(() => {
      r.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED)
    }).catch(() => {
      r.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_DM_CLOSED_FAILED)
    })
  },
  updatePermissionOverwrite: (e, t) => i.HTTP.put({
    url: A.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
    body: t,
    oldFormErrors: !0
  }),
  clearPermissionOverwrite: (e, t) => i.HTTP.del({
    url: A.Endpoints.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
    oldFormErrors: !0
  }),
  addRecipient(e, t, n, a) {
    return i.HTTP.put({
      url: A.Endpoints.CHANNEL_RECIPIENT(e, t),
      context: {
        location: n
      },
      oldFormErrors: !0
    }).then(t => (r.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM), null == a || a(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (r.AccessibilityAnnouncer.announce(m.default.Messages.A11Y_ANNOUNCEMENT_USER_ADDED_TO_GROUP_DM_FAILED), e))
  },
  addRecipients(e, t, n, i) {
    return this.addRecipient(e, t[0], n, i).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
  },
  removeRecipient: (e, t) => i.HTTP.del({
    url: A.Endpoints.CHANNEL_RECIPIENT(e, t),
    oldFormErrors: !0
  }),
  setDMOwner: (e, t) => i.HTTP.patch({
    url: A.Endpoints.CHANNEL(e),
    body: {
      owner: t
    },
    oldFormErrors: !0
  }),
  async setName(e, t) {
    let n = E.default.getChannel(e),
      r = await i.HTTP.patch({
        url: A.Endpoints.CHANNEL(e),
        body: {
          name: t
        },
        oldFormErrors: !0
      }),
      a = null == n ? void 0 : n.getGuildId();
    return null != a && !(null == n ? void 0 : n.isThread()) && l.default.checkGuildTemplateDirty(a), r
  },
  setIcon(e, t) {
    let n = E.default.getChannel(e);
    i.HTTP.patch({
      url: A.Endpoints.CHANNEL(e),
      body: {
        icon: t
      },
      oldFormErrors: !0
    }).then(() => {
      let e = null == n ? void 0 : n.getGuildId();
      null != e && !(null == n ? void 0 : n.isThread()) && l.default.checkGuildTemplateDirty(e)
    })
  },
  convertToGuild: e => i.HTTP.post({
    url: A.Endpoints.CHANNEL_CONVERT(e),
    oldFormErrors: !0
  }),
  preload(e, t) {
    a.default.dispatch({
      type: "CHANNEL_PRELOAD",
      guildId: e === A.ME ? null : e,
      channelId: t,
      context: A.CURRENT_APP_CONTEXT
    })
  },
  fetchChannelStoreListing(e, t) {
    let n = null != t ? A.Endpoints.CHANNEL_STORE_LISTING_SKU(e, t) : A.Endpoints.CHANNEL_STORE_LISTING(e);
    return (0, f.httpGetWithCountryCodeQuery)(n).then(t => {
      a.default.dispatch({
        type: "STORE_LISTING_FETCH_SUCCESS",
        channelId: e,
        storeListing: t.body
      })
    })
  },
  async createTextChannel(e, t, n, r) {
    let a = {
      type: A.ChannelTypes.GUILD_TEXT,
      name: t,
      permission_overwrites: []
    };
    null != n && (a.parent_id = n), null != r && (a.topic = r);
    let s = await i.HTTP.post({
      url: A.Endpoints.GUILD_CHANNELS(e),
      body: a,
      oldFormErrors: !0
    });
    return l.default.checkGuildTemplateDirty(e), s
  }
}