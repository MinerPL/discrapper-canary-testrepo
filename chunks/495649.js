n(47120), n(789020);
var r = n(147913),
	i = n(703656),
	a = n(271383),
	s = n(430824),
	o = n(914010),
	l = n(70956),
	u = n(630388),
	c = n(745752),
	d = n(45966),
	_ = n(17181),
	E = n(981631),
	f = n(176505),
	h = n(372897);
function p(e, t, n) {
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
let I = null,
	m = null;
class T extends r.Z {
	constructor(...e) {
		super(...e),
			p(this, 'actions', {
				GUILD_DELETE: (e) => this.handleGuildDelete(e),
				CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
				POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e)
			}),
			p(this, 'handleConnectionOpen', (e) => {
				var t;
				null != (I = null !== (t = null != I ? I : o.Z.getGuildId()) && void 0 !== t ? t : null) &&
					this._openOnboardingIfIncomplete(I);
			}),
			p(this, 'handleChannelSelect', (e) => {
				let { guildId: t, channelId: n } = e;
				if (I === t && m === n) return;
				if (((I = null != t ? t : null), (m = null != n ? n : null), null == I || null == m)) return;
				let r = s.Z.getGuild(t);
				null != r && r.hasFeature(E.oNc.COMMUNITY) && d.Z.shouldFetchPrompts(I, 8 * l.Z.Millis.HOUR) && (0, c.rj)(I),
					this._openOnboardingIfIncomplete(I, n);
			}),
			p(this, 'handleGuildDelete', (e) => {
				let { guild: t } = e;
				(0, _.discardOnboardingPromise)(t.id);
			}),
			p(this, '_openOnboardingIfIncomplete', async (e, t) => {
				var n, r;
				if ((0, _.isOnboardingActiveForGuild)(e)) {
					(0, i.uL)(E.Z5c.CHANNEL(e, f.oC.GUILD_ONBOARDING));
					return;
				}
				let o = s.Z.getGuild(e);
				if (null == o || !o.hasFeature(E.oNc.GUILD_ONBOARDING)) return;
				let l = a.ZP.getSelfMember(e);
				if (
					!(null == l || (0, u.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, h.q.COMPLETED_ONBOARDING)) &&
					!!(0, u.yE)(null !== (r = l.flags) && void 0 !== r ? r : 0, h.q.STARTED_ONBOARDING)
				)
					await (0, _.default)({ guildId: e }), (0, i.uL)(E.Z5c.CHANNEL(e, t));
			});
	}
}
t.Z = new T();
