"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("70102");
var l = n("759843"),
  i = n("627929"),
  a = n("913144"),
  s = n("81732"),
  r = n("282109"),
  d = n("34676"),
  u = n("840707"),
  o = n("519705"),
  c = n("49111"),
  f = n("397336"),
  E = {
    createChannel(e) {
      let {
        guildId: t,
        type: n,
        name: E,
        permissionOverwrites: h = [],
        bitrate: _,
        userLimit: C,
        parentId: T,
        skuId: v,
        branchId: g
      } = e;
      a.default.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT"
      });
      let S = {
        type: n,
        name: E,
        permission_overwrites: h
      };
      if (null != _ && _ !== c.BITRATE_DEFAULT && (S.bitrate = _), null != C && C > 0 && (S.user_limit = C), null != T && (S.parent_id = T), n === c.ChannelTypes.GUILD_STORE) {
        if (null == v) throw Error("Unexpected missing SKU");
        S.sku_id = v, S.branch_id = g
      }
      return u.default.post({
        url: c.Endpoints.GUILD_CHANNELS(t),
        body: S,
        oldFormErrors: !0,
        trackedActionData: {
          event: l.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var t, n;
            return (0, i.exact)({
              is_private: h.length > 0,
              channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
              channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
            })
          }
        }
      }).then(e => (r.default.isOptInEnabled(t) && o.default.updateChannelOverrideSettings(t, e.body.id, {
        flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
      }, d.NotificationLabels.OptedIn), s.default.checkGuildTemplateDirty(t), e), e => {
        throw a.default.dispatch({
          type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
          errors: e.body
        }), e
      })
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) => u.default.post({
      url: c.Endpoints.GUILD_CHANNELS(e),
      body: {
        name: t,
        type: n,
        topic: a
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: l.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, n;
          return (0, i.exact)({
            is_private: !0,
            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
          })
        }
      }
    })
  }