"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("70102");
var i = n("759843"),
  r = n("627929"),
  l = n("913144"),
  s = n("81732"),
  u = n("282109"),
  o = n("34676"),
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
        userLimit: _,
        parentId: g,
        skuId: p,
        branchId: C
      } = e;
      l.default.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT"
      });
      let I = {
        type: n,
        name: S,
        permission_overwrites: E
      };
      if (null != h && h !== c.BITRATE_DEFAULT && (I.bitrate = h), null != _ && _ > 0 && (I.user_limit = _), null != g && (I.parent_id = g), n === c.ChannelTypes.GUILD_STORE) {
        if (null == p) throw Error("Unexpected missing SKU");
        I.sku_id = p, I.branch_id = C
      }
      return a.default.post({
        url: c.Endpoints.GUILD_CHANNELS(t),
        body: I,
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
      }).then(e => (u.default.isOptInEnabled(t) && d.default.updateChannelOverrideSettings(t, e.body.id, {
        flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
      }, o.NotificationLabels.OptedIn), s.default.checkGuildTemplateDirty(t), e), e => {
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