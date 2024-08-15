n(47120);
var r = n(704215),
	i = n(570140),
	a = n(147913),
	s = n(605236),
	o = n(430824),
	l = n(496675),
	u = n(619574),
	c = n(317816),
	d = n(828312),
	_ = n(994840),
	E = n(981631);
function f(e, t, n) {
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
class h extends a.Z {
	constructor(...e) {
		super(...e),
			f(this, 'actions', {
				POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
				CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
			}),
			f(this, 'handleConnectionOpen', (e) => {
				let t = (0, _.jZ)('SignUpManager'),
					n = (0, d.t)('SignUpManager', !1),
					a = (0, s.un)(r.z.GAME_ONE_USER_SIGNUPS),
					o = (0, c.v)('SignUpManager'),
					l = (0, u.e)('SignUpManager', !1),
					E = (0, s.un)(r.z.GENSHIN_USER_SIGNUPS);
				if (t && !n && !a) {
					i.Z.dispatch({
						type: 'ENABLE_USER_SIGN_UP',
						key: 'valorant-user'
					});
					return;
				}
				if (o && !l && !E) {
					i.Z.dispatch({
						type: 'ENABLE_USER_SIGN_UP',
						key: 'genshin-user'
					});
					return;
				}
			}),
			f(this, 'handleChannelSelect', (e) => {
				let { guildId: t } = e;
				if (null == t) return;
				let n = (0, s.un)(r.z.GAME_ONE_USER_SIGNUPS),
					a = (0, s.un)(r.z.GENSHIN_USER_SIGNUPS);
				if (n && a) return;
				let c = (0, d.t)('SignUpManager'),
					_ = (0, u.e)('SignUpManager');
				if (!c && !_) return;
				let f = o.Z.getGuild(t);
				if (null != f) {
					if (f.hasFeature(E.oNc.VALORANT_L30) && l.Z.can(E.Plq.MANAGE_GUILD, f) && !n) {
						i.Z.dispatch({
							type: 'ENABLE_GUILD_SIGN_UP',
							key: 'valorant-admin',
							guildId: t
						});
						return;
					}
					if (f.hasFeature(E.oNc.GENSHIN_L30) && l.Z.can(E.Plq.MANAGE_GUILD, f) && !a) {
						i.Z.dispatch({
							type: 'ENABLE_GUILD_SIGN_UP',
							key: 'genshin-admin',
							guildId: t
						});
						return;
					}
				}
			});
	}
}
t.Z = new h();
