"use strict";
n.r(t), n("411104");
var i = n("990547"),
  a = n("283693"),
  l = n("570140"),
  r = n("408987"),
  s = n("9156"),
  o = n("621600"),
  u = n("573261"),
  d = n("92114"),
  c = n("981631"),
  _ = n("526761");
t.default = {
  createChannel(e) {
    let {
      guildId: t,
      type: n,
      name: E,
      permissionOverwrites: T = [],
      bitrate: p,
      userLimit: f,
      parentId: S,
      skuId: h,
      branchId: C
    } = e;
    l.default.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT"
    });
    let g = {
      type: n,
      name: E,
      permission_overwrites: T
    };
    if (null != p && p !== c.BITRATE_DEFAULT && (g.bitrate = p), null != f && f > 0 && (g.user_limit = f), null != S && (g.parent_id = S), n === c.ChannelTypes.GUILD_STORE) {
      if (null == h) throw Error("Unexpected missing SKU");
      g.sku_id = h, g.branch_id = C
    }
    return u.default.post({
      url: c.Endpoints.GUILD_CHANNELS(t),
      body: g,
      oldFormErrors: !0,
      trackedActionData: {
        event: i.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, n;
          return (0, a.exact)({
            is_private: T.length > 0,
            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
          })
        }
      }
    }).then(e => (s.default.isOptInEnabled(t) && d.default.updateChannelOverrideSettings(t, e.body.id, {
      flags: _.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
    }, o.NotificationLabels.OptedIn), r.default.checkGuildTemplateDirty(t), e), e => {
      throw l.default.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, n, l) => u.default.post({
    url: c.Endpoints.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: n,
      topic: l
    },
    oldFormErrors: !0,
    trackedActionData: {
      event: i.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var t, n;
        return (0, a.exact)({
          is_private: !0,
          channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
          channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
        })
      }
    }
  })
}