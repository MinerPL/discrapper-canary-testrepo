n.d(t, {
	B: function () {
		return d;
	},
	Z: function () {
		return _;
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
class _ extends i.Z {
	static createFromServer(e) {
		var t, n;
		return new _({
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
					: null,
			termsOfServiceUrl: e.terms_of_service_url,
			privacyPolicyUrl: e.privacy_policy_url
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
		return _.supportsOutOfProcessOverlay(this.overlayMethods);
	}
	static supportsOutOfProcessOverlay(e) {
		let t = r.e.OUT_OF_PROCESS;
		return null != e && (e & t) === t;
	}
	constructor(e) {
		var t, n, i, a;
		super(),
			u(this, 'id', void 0),
			u(this, 'name', void 0),
			u(this, 'icon', void 0),
			u(this, 'splash', void 0),
			u(this, 'overlay', void 0),
			u(this, 'overlayWarn', void 0),
			u(this, 'overlayCompatibilityHook', void 0),
			u(this, 'overlayMethods', void 0),
			u(this, 'hook', void 0),
			u(this, 'aliases', void 0),
			u(this, 'publishers', void 0),
			u(this, 'developers', void 0),
			u(this, 'primarySkuId', void 0),
			u(this, 'storeListingSkuId', void 0),
			u(this, 'thirdPartySkus', void 0),
			u(this, 'guildId', void 0),
			u(this, 'guild', void 0),
			u(this, 'executables', void 0),
			u(this, 'hashes', void 0),
			u(this, 'description', void 0),
			u(this, 'eulaId', void 0),
			u(this, 'slug', void 0),
			u(this, 'coverImage', void 0),
			u(this, 'bot', void 0),
			u(this, 'flags', void 0),
			u(this, 'maxParticipants', void 0),
			u(this, 'tags', void 0),
			u(this, 'embeddedActivityConfig', void 0),
			u(this, 'type', void 0),
			u(this, 'team', void 0),
			u(this, 'roleConnectionsVerificationUrl', void 0),
			u(this, 'integrationTypesConfig', void 0),
			u(this, 'isMonetized', void 0),
			u(this, 'storefront_available', void 0),
			u(this, 'termsOfServiceUrl', void 0),
			u(this, 'privacyPolicyUrl', void 0),
			(this.id = e.id),
			(this.name = e.name),
			(this.icon = e.icon || null),
			(this.splash = e.splash || null),
			(this.overlay = e.overlay || !1),
			(this.overlayWarn = e.overlayWarn || !1),
			(this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1),
			(this.overlayMethods = null !== (t = e.overlayMethods) && void 0 !== t ? t : r.e.DEFAULT),
			(this.hook = null === (n = e.hook) || void 0 === n || n),
			(this.aliases = e.aliases || []),
			(this.publishers = e.publishers || []),
			(this.developers = e.developers || []),
			(this.primarySkuId = e.primarySkuId),
			(this.storeListingSkuId = e.storeListingSkuId),
			(this.guildId = e.guildId || null),
			(this.guild = e.guild || null),
			(this.thirdPartySkus = e.thirdPartySkus || []),
			(this.executables = (e.executables || []).map(d)),
			(this.hashes = e.hashes || []),
			(this.description = e.description || null),
			(this.eulaId = e.eulaId || null),
			(this.slug = e.slug || null),
			(this.bot = e.bot || null),
			(this.coverImage = e.coverImage || null),
			(this.flags = null !== (i = e.flags) && void 0 !== i ? i : 0),
			(this.tags = null !== (a = e.tags) && void 0 !== a ? a : []),
			(this.maxParticipants = e.maxParticipants),
			(this.embeddedActivityConfig = e.embedded_activity_config),
			(this.type = e.type),
			(this.team = e.team),
			(this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl),
			(this.integrationTypesConfig = e.integrationTypesConfig),
			(this.isMonetized = e.is_monetized),
			(this.storefront_available = e.storefront_available),
			(this.termsOfServiceUrl = e.termsOfServiceUrl),
			(this.privacyPolicyUrl = e.privacyPolicyUrl);
	}
}
