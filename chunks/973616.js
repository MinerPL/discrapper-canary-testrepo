n.d(t, {
    B: function () {
        return d;
    },
    Z: function () {
        return f;
    }
}),
    n(789020),
    n(47120);
var r = n(480189),
    i = n(81825),
    a = n(768581),
    s = n(584597),
    o = n(598077),
    l = n(701488);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = {
    [l.Zc]: 7,
    [l.qm]: 12
};
function d(e) {
    let t = {
        os: e.os,
        name: e.name
    };
    return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t;
}
class f extends i.Z {
    static createFromServer(e) {
        var t, n;
        return new f({
            ...e,
            thirdPartySkus: e.third_party_skus,
            overlayWarn: e.overlay_warn,
            overlayCompatibilityHook: e.overlay_compatibility_hook,
            overlayMethods: null !== (t = e.overlay_methods) && void 0 !== t ? t : r.e.DEFAULT,
            hook: e.hook,
            primarySkuId: e.primary_sku_id,
            storeListingSkuId: e.store_listing_sku_id,
            guildId: e.guild_id,
            guild: e.guild,
            publishers: null != e.publishers ? e.publishers.map(s.Z.createFromServer) : [],
            developers: null != e.developers ? e.developers.map(s.Z.createFromServer) : [],
            eulaId: e.eula_id,
            slug: e.slug,
            coverImage: e.cover_image,
            bot: null != e.bot ? new o.Z(e.bot) : null,
            flags: null !== (n = e.flags) && void 0 !== n ? n : 0,
            maxParticipants: e.max_participants,
            tags: e.tags,
            embeddedActivityConfig: e.embedded_activity_config,
            roleConnectionsVerificationUrl: e.role_connections_verification_url,
            integrationTypesConfig:
                null != e.integration_types_config
                    ? Object.fromEntries(
                          Object.entries(e.integration_types_config).map((e) => {
                              let [t, n] = e;
                              return [t, { oauth2InstallParams: (null != n ? n : {}).oauth2_install_params }];
                          })
                      )
                    : void 0,
            termsOfServiceUrl: e.terms_of_service_url,
            privacyPolicyUrl: e.privacy_policy_url
        });
    }
    mergeFromApplicationUpdate(e) {
        var t, n, r, i, a, s, o, l, u, c, d, _, h, p, m, g, E, v, I, S, T, b, y, A, N, C, R, O, D, L, x, w, M, P, k, U, G, B, Z;
        return new f({
            id: null !== (t = e.id) && void 0 !== t ? t : this.id,
            name: null !== (n = e.name) && void 0 !== n ? n : this.name,
            icon: null !== (r = e.icon) && void 0 !== r ? r : this.icon,
            splash: null !== (i = e.splash) && void 0 !== i ? i : this.splash,
            overlay: null !== (a = e.overlay) && void 0 !== a ? a : this.overlay,
            overlayWarn: null !== (s = e.overlayWarn) && void 0 !== s ? s : this.overlayWarn,
            overlayCompatibilityHook: null !== (o = e.overlayCompatibilityHook) && void 0 !== o ? o : this.overlayCompatibilityHook,
            overlayMethods: null !== (l = e.overlayMethods) && void 0 !== l ? l : this.overlayMethods,
            hook: null !== (u = e.hook) && void 0 !== u ? u : this.hook,
            aliases: null !== (c = e.aliases) && void 0 !== c ? c : this.aliases,
            publishers: null !== (d = e.publishers) && void 0 !== d ? d : this.publishers,
            developers: null !== (_ = e.developers) && void 0 !== _ ? _ : this.developers,
            primarySkuId: null !== (h = e.primarySkuId) && void 0 !== h ? h : this.primarySkuId,
            storeListingSkuId: null !== (p = e.storeListingSkuId) && void 0 !== p ? p : this.storeListingSkuId,
            thirdPartySkus: null !== (m = e.thirdPartySkus) && void 0 !== m ? m : this.thirdPartySkus,
            guildId: null !== (g = e.guildId) && void 0 !== g ? g : this.guildId,
            guild: null !== (E = e.guild) && void 0 !== E ? E : this.guild,
            executables: null !== (v = e.executables) && void 0 !== v ? v : this.executables,
            hashes: null !== (I = e.hashes) && void 0 !== I ? I : this.hashes,
            description: null !== (S = e.description) && void 0 !== S ? S : this.description,
            eulaId: null !== (T = e.eulaId) && void 0 !== T ? T : this.eulaId,
            slug: null !== (b = e.slug) && void 0 !== b ? b : this.slug,
            coverImage: null !== (y = e.coverImage) && void 0 !== y ? y : this.coverImage,
            bot: null !== (A = e.bot) && void 0 !== A ? A : this.bot,
            flags: null !== (N = e.flags) && void 0 !== N ? N : this.flags,
            maxParticipants: null !== (C = e.maxParticipants) && void 0 !== C ? C : this.maxParticipants,
            tags: null !== (R = e.tags) && void 0 !== R ? R : this.tags,
            embeddedActivityConfig: null !== (O = e.embeddedActivityConfig) && void 0 !== O ? O : null != this.embeddedActivityConfig ? { ...this.embeddedActivityConfig } : void 0,
            type: null !== (D = e.type) && void 0 !== D ? D : this.type,
            team: null !== (L = e.team) && void 0 !== L ? L : this.team,
            roleConnectionsVerificationUrl: null !== (x = e.roleConnectionsVerificationUrl) && void 0 !== x ? x : this.roleConnectionsVerificationUrl,
            integrationTypesConfig: null !== (w = e.integrationTypesConfig) && void 0 !== w ? w : this.integrationTypesConfig,
            isMonetized: null !== (M = e.isMonetized) && void 0 !== M ? M : this.isMonetized,
            storefront_available: null !== (P = e.storefront_available) && void 0 !== P ? P : this.storefront_available,
            termsOfServiceUrl: null !== (k = e.termsOfServiceUrl) && void 0 !== k ? k : this.termsOfServiceUrl,
            privacyPolicyUrl: null !== (U = e.privacyPolicyUrl) && void 0 !== U ? U : this.privacyPolicyUrl,
            isVerified: null !== (G = e.isVerified) && void 0 !== G ? G : this.isVerified,
            customInstallUrl: null !== (B = e.customInstallUrl) && void 0 !== B ? B : this.customInstallUrl,
            installParams: null !== (Z = e.installParams) && void 0 !== Z ? Z : this.installParams
        });
    }
    getIconURL(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getIconSource(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getSplashURL(e, t) {
        return null != this.splash
            ? a.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.splash,
                  size: e,
                  keepAspectRatio: !0,
                  format: t
              })
            : null;
    }
    getCoverImageURL(e) {
        return null != this.coverImage
            ? a.ZP.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e
              })
            : null;
    }
    getMaxParticipants() {
        var e, t;
        return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : c[this.id]) && void 0 !== t ? t : 0;
    }
    supportsIntegrationTypes() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = this.integrationTypesConfig;
        return null != r && t.every((e) => e in r);
    }
    get destinationSkuId() {
        return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId;
    }
    get supportsOutOfProcessOverlay() {
        return f.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = r.e.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
    constructor(e) {
        var t, n, i, a, s, o, l, c, f, _, h, p, m, g, E, v, I;
        super(), u(this, 'id', void 0), u(this, 'name', void 0), u(this, 'icon', void 0), u(this, 'splash', void 0), u(this, 'overlay', void 0), u(this, 'overlayWarn', void 0), u(this, 'overlayCompatibilityHook', void 0), u(this, 'overlayMethods', void 0), u(this, 'hook', void 0), u(this, 'aliases', void 0), u(this, 'publishers', void 0), u(this, 'developers', void 0), u(this, 'primarySkuId', void 0), u(this, 'storeListingSkuId', void 0), u(this, 'thirdPartySkus', void 0), u(this, 'guildId', void 0), u(this, 'guild', void 0), u(this, 'executables', void 0), u(this, 'hashes', void 0), u(this, 'description', void 0), u(this, 'eulaId', void 0), u(this, 'slug', void 0), u(this, 'coverImage', void 0), u(this, 'bot', void 0), u(this, 'flags', void 0), u(this, 'maxParticipants', void 0), u(this, 'tags', void 0), u(this, 'embeddedActivityConfig', void 0), u(this, 'type', void 0), u(this, 'team', void 0), u(this, 'roleConnectionsVerificationUrl', void 0), u(this, 'integrationTypesConfig', void 0), u(this, 'isMonetized', void 0), u(this, 'storefront_available', void 0), u(this, 'termsOfServiceUrl', void 0), u(this, 'privacyPolicyUrl', void 0), u(this, 'isVerified', void 0), u(this, 'customInstallUrl', void 0), u(this, 'installParams', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.splash = e.splash), (this.overlay = null !== (t = e.overlay) && void 0 !== t && t), (this.overlayWarn = null !== (n = e.overlayWarn) && void 0 !== n && n), (this.overlayCompatibilityHook = null !== (i = e.overlayCompatibilityHook) && void 0 !== i && i), (this.overlayMethods = null !== (a = e.overlayMethods) && void 0 !== a ? a : r.e.DEFAULT), (this.hook = null === (s = e.hook) || void 0 === s || s), (this.aliases = null !== (o = e.aliases) && void 0 !== o ? o : []), (this.publishers = null !== (l = e.publishers) && void 0 !== l ? l : []), (this.developers = null !== (c = e.developers) && void 0 !== c ? c : []), (this.primarySkuId = e.primarySkuId), (this.storeListingSkuId = e.storeListingSkuId), (this.guildId = e.guildId), (this.guild = e.guild), (this.thirdPartySkus = null !== (f = e.thirdPartySkus) && void 0 !== f ? f : []), (this.executables = (null !== (_ = e.executables) && void 0 !== _ ? _ : []).map(d)), (this.hashes = null !== (h = e.hashes) && void 0 !== h ? h : []), (this.description = e.description), (this.eulaId = e.eulaId), (this.slug = e.slug), (this.bot = e.bot), (this.coverImage = e.coverImage), (this.flags = null !== (p = e.flags) && void 0 !== p ? p : 0), (this.tags = null !== (m = e.tags) && void 0 !== m ? m : []), (this.maxParticipants = e.maxParticipants), (this.embeddedActivityConfig = null !== (g = e.embedded_activity_config) && void 0 !== g ? g : e.embeddedActivityConfig), (this.type = e.type), (this.team = e.team), (this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl), (this.integrationTypesConfig = e.integrationTypesConfig), (this.isMonetized = e.is_monetized), (this.storefront_available = e.storefront_available), (this.termsOfServiceUrl = e.termsOfServiceUrl), (this.privacyPolicyUrl = e.privacyPolicyUrl), (this.isVerified = null !== (E = e.is_verified) && void 0 !== E ? E : e.isVerified), (this.customInstallUrl = null !== (v = e.custom_install_url) && void 0 !== v ? v : e.customInstallUrl), (this.installParams = null !== (I = e.install_params) && void 0 !== I ? I : e.installParams);
    }
}
