"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("70102");
var i = n("759843"),
  r = n("627929"),
  l = n("913144"),
  u = n("81732"),
  o = n("282109"),
  s = n("34676"),
  a = n("840707"),
  d = n("519705"),
  c = n("49111"),
  f = n("397336"),
  S = {
    createChannel(e) {
      let {
        guildId: t,
        type: n,
        name: S,
        permissionOverwrites: E = [],
        bitrate: h,
        userLimit: g,
        parentId: p,
        skuId: _,
        branchId: C
      } = e;
      l.default.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT"
      });
      let m = {
        type: n,
        name: S,
        permission_overwrites: E
      };
      if (null != h && h !== c.BITRATE_DEFAULT && (m.bitrate = h), null != g && g > 0 && (m.user_limit = g), null != p && (m.parent_id = p), n === c.ChannelTypes.GUILD_STORE) {
        if (null == _) throw Error("Unexpected missing SKU");
        m.sku_id = _, m.branch_id = C
      }
      return a.default.post({
        url: c.Endpoints.GUILD_CHANNELS(t),
        body: m,
        oldFormErrors: !0,
        trackedActionData: {
          event: i.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, n;
            return (0, r.exact)({
              is_private: E.length > 0,
              channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
              channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
            })
          }
        }
      }).then(e => (o.default.isOptInEnabled(t) && d.default.updateChannelOverrideSettings(t, e.body.id, {
        flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
      }, s.NotificationLabels.OptedIn), u.default.checkGuildTemplateDirty(t), e), e => {
        throw l.default.dispatch({
          type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
          errors: e.body
        }), e
      })
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, l) => a.default.post({
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
          return (0, r.exact)({
            is_private: !0,
            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
          })
        }
      }
    })
  }