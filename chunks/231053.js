n.d(t, {
	Fi: function () {
		return _;
	},
	JO: function () {
		return E;
	},
	w6: function () {
		return r;
	}
}),
	n(47120);
var r,
	i,
	a = n(544891),
	s = n(81825),
	o = n(601964),
	l = n(768581),
	u = n(624138),
	c = n(981631);
function d(e, t, n) {
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
((i = r || (r = {})).GUILD = 'GUILD'), (i.APPLICATION = 'APPLICATION');
let _ = async (e) => {
	let t = null;
	try {
		let n = (
			await a.tn.get({
				url: c.ANM.EMOJI_SOURCE_DATA(e),
				oldFormErrors: !0,
				timeout: 5000
			})
		).body;
		(null == n ? void 0 : n.type) === 'GUILD'
			? (t = {
					guild: E.createFromServer(n.guild),
					type: n.type
				})
			: (null == n ? void 0 : n.type) === 'APPLICATION' &&
				(t = {
					application: f.createFromServer(n.application),
					type: n.type
				});
	} catch {}
	return t;
};
class E extends s.Z {
	getIconURL(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return l.ZP.getGuildIconURL({
			id: this.id,
			size: e,
			icon: this.icon,
			canAnimate: t
		});
	}
	getIconSource(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return l.ZP.getAnimatableSourceWithFallback(t, (t) =>
			l.ZP.getGuildIconSource({
				id: this.id,
				size: e,
				icon: this.icon,
				canAnimate: t
			})
		);
	}
	hasFeature(e) {
		return this.features.has(e);
	}
	isDiscoverable() {
		return this.hasFeature(c.oNc.DISCOVERABLE);
	}
	get acronym() {
		return (0, u.Zg)(this.name);
	}
	static async getGuildFromEmojiId(e) {
		let t = await _(e);
		return null != t && (null == t ? void 0 : t.type) === 'GUILD' ? t.guild : null;
	}
	static _mapCommon(e) {
		var t;
		return {
			id: e.id,
			name: e.name,
			icon: e.icon,
			description: e.description,
			features: new Set(null !== (t = e.features) && void 0 !== t ? t : new Set())
		};
	}
	static createFromGuildRecord(e) {
		return new E({
			...E._mapCommon(e),
			premiumTier: e.premiumTier,
			premiumSubscriberCount: e.premiumSubscriberCount,
			presenceCount: null,
			memberCount: null,
			emojis: null
		});
	}
	static createFromDiscoverableGuild(e) {
		return new E({
			...E._mapCommon(e),
			premiumTier: null,
			premiumSubscriberCount: e.premiumSubscriptionCount,
			presenceCount: e.presenceCount,
			memberCount: e.memberCount,
			emojis: e.emojis
		});
	}
	static createFromServer(e) {
		return new E({
			...E._mapCommon(e),
			premiumTier: e.premium_tier,
			premiumSubscriberCount: e.premium_subscription_count,
			presenceCount: e.approximate_presence_count,
			memberCount: e.approximate_member_count,
			emojis: e.emojis
		});
	}
	static createFromGuildType(e) {
		return e instanceof E ? e : e instanceof o.ZP ? E.createFromGuildRecord(e) : E.createFromDiscoverableGuild(e);
	}
	constructor(e) {
		super(), d(this, 'id', void 0), d(this, 'name', void 0), d(this, 'icon', void 0), d(this, 'description', void 0), d(this, 'features', void 0), d(this, 'premiumTier', void 0), d(this, 'premiumSubscriberCount', void 0), d(this, 'presenceCount', void 0), d(this, 'memberCount', void 0), d(this, 'emojis', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.description = e.description), (this.features = e.features), (this.premiumTier = e.premiumTier), (this.premiumSubscriberCount = e.premiumSubscriberCount), (this.presenceCount = e.presenceCount), (this.memberCount = e.memberCount), (this.emojis = e.emojis);
	}
}
class f extends s.Z {
	static createFromServer(e) {
		return new f({
			id: e.id,
			name: e.name
		});
	}
	constructor(e) {
		super(), d(this, 'id', void 0), d(this, 'name', void 0), (this.id = e.id), (this.name = e.name);
	}
}
