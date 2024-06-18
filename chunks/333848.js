"use strict";
n(411104);
var i = n(990547),
  r = n(283693),
  s = n(570140),
  o = n(408987),
  a = n(9156),
  l = n(621600),
  u = n(573261),
  _ = n(92114),
  d = n(981631),
  c = n(526761);
t.Z = {
  createChannel(e) {
    let {
      guildId: t,
      type: n,
      name: E,
      permissionOverwrites: I = [],
      bitrate: T,
      userLimit: h,
      parentId: S,
      skuId: f,
      branchId: N
    } = e;
    s.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT"
    });
    let A = {
      type: n,
      name: E,
      permission_overwrites: I
    };
    if (null != T && T !== d.epw && (A.bitrate = T), null != h && h > 0 && (A.user_limit = h), null != S && (A.parent_id = S), n === d.d4z.GUILD_STORE) {
      if (null == f) throw Error("Unexpected missing SKU");
      A.sku_id = f, A.branch_id = N
    }
    return u.Z.post({
      url: d.ANM.GUILD_CHANNELS(t),
      body: A,
      oldFormErrors: !0,
      trackedActionData: {
        event: i.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, n;
          return (0, r.iG)({
            is_private: I.length > 0,
            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
            channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
          })
        }
      }
    }).then(e => (a.ZP.isOptInEnabled(t) && _.Z.updateChannelOverrideSettings(t, e.body.id, {
      flags: c.ic.OPT_IN_ENABLED
    }, l.ZB.OptedIn), o.Z.checkGuildTemplateDirty(t), e), e => {
      throw s.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, n, s) => u.Z.post({
    url: d.ANM.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: n,
      topic: s
    },
    oldFormErrors: !0,
    trackedActionData: {
      event: i.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var t, n;
        return (0, r.iG)({
          is_private: !0,
          channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
          channel_type: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.type
        })
      }
    }
  })
}