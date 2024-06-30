n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(812206), i = n(981631);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], a = r.Z.getApplication(e.applicationId), o = e.getPrice(), s = e.getPrice(null, !1), l = {
            sku_id: e.id,
            sku_type: e.type,
            application_id: e.applicationId,
            application_name: null != a ? a.name : null,
            store_title: e.name,
            distribution_type: e.premium ? 'premium' : 'distribution'
        }, u = null;
    n && (u = {
        price: null != o ? o.amount : null,
        regular_price: null != s ? s.amount : null,
        currency: null != o ? o.currency : null
    });
    let c = null;
    return t && (c = {
        has_single_player: e.hasFeature(i.Qa3.SINGLE_PLAYER),
        has_online_multiplayer: e.hasFeature(i.Qa3.ONLINE_MULTIPLAYER),
        has_local_multiplayer: e.hasFeature(i.Qa3.LOCAL_MULTIPLAYER),
        has_pvp_features: e.hasFeature(i.Qa3.PVP),
        has_local_coop: e.hasFeature(i.Qa3.LOCAL_COOP),
        has_online_coop: e.hasFeature(i.Qa3.ONLINE_COOP),
        has_cross_platform: e.hasFeature(i.Qa3.CROSS_PLATFORM),
        has_rich_presence: e.hasFeature(i.Qa3.RICH_PRESENCE),
        has_game_invites: e.hasFeature(i.Qa3.DISCORD_GAME_INVITES),
        has_spectator_mode: e.hasFeature(i.Qa3.SPECTATOR_MODE),
        has_controller_support: e.hasFeature(i.Qa3.CONTROLLER_SUPPORT),
        has_cloud_saves: e.hasFeature(i.Qa3.CLOUD_SAVES),
        has_secure_networking: e.hasFeature(i.Qa3.SECURE_NETWORKING)
    }), {
        ...l,
        ...u,
        ...c
    };
}
