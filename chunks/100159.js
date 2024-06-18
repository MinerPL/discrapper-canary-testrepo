"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(812206),
  r = n(981631);

function s(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    s = i.Z.getApplication(e.applicationId),
    o = e.getPrice(),
    a = e.getPrice(null, !1),
    l = {
      sku_id: e.id,
      sku_type: e.type,
      application_id: e.applicationId,
      application_name: null != s ? s.name : null,
      store_title: e.name,
      distribution_type: e.premium ? "premium" : "distribution"
    },
    u = null;
  n && (u = {
    price: null != o ? o.amount : null,
    regular_price: null != a ? a.amount : null,
    currency: null != o ? o.currency : null
  });
  let _ = null;
  return t && (_ = {
    has_single_player: e.hasFeature(r.Qa3.SINGLE_PLAYER),
    has_online_multiplayer: e.hasFeature(r.Qa3.ONLINE_MULTIPLAYER),
    has_local_multiplayer: e.hasFeature(r.Qa3.LOCAL_MULTIPLAYER),
    has_pvp_features: e.hasFeature(r.Qa3.PVP),
    has_local_coop: e.hasFeature(r.Qa3.LOCAL_COOP),
    has_online_coop: e.hasFeature(r.Qa3.ONLINE_COOP),
    has_cross_platform: e.hasFeature(r.Qa3.CROSS_PLATFORM),
    has_rich_presence: e.hasFeature(r.Qa3.RICH_PRESENCE),
    has_game_invites: e.hasFeature(r.Qa3.DISCORD_GAME_INVITES),
    has_spectator_mode: e.hasFeature(r.Qa3.SPECTATOR_MODE),
    has_controller_support: e.hasFeature(r.Qa3.CONTROLLER_SUPPORT),
    has_cloud_saves: e.hasFeature(r.Qa3.CLOUD_SAVES),
    has_secure_networking: e.hasFeature(r.Qa3.SECURE_NETWORKING)
  }), {
    ...l,
    ...u,
    ..._
  }
}