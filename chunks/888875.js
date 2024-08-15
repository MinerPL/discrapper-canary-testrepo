n(653041), n(47120);
var r = n(392711),
	i = n.n(r),
	a = n(377108),
	s = n(147913),
	o = n(654455),
	l = n(822245),
	u = n(339085),
	c = n(178106),
	d = n(822179),
	_ = n(580005),
	E = n(70956),
	f = n(675478),
	h = n(581883),
	p = n(48481),
	I = n(526761),
	m = n(674563);
let T = 10 + Math.random() * (10 * E.Z.Millis.SECOND),
	g = 2 * E.Z.Millis.HOUR + Math.floor(Math.random() * (10 * E.Z.Millis.MINUTE)),
	S = null,
	A = !1;
class N extends s.Z {
	_initialize() {
		f.DZ.beforeSendCallbacks.push({
			hasChanges: () => !1,
			processProto: () => {
				y(g);
			}
		}),
			f.DZ.beforeSendCallbacks.push({
				hasChanges: () => d.Z.hasPendingUsage() && h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
				processProto: (e) => {
					if (!!d.Z.hasPendingUsage())
						h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
							((e.stickerFrecency = a.ls.create()),
							(e.stickerFrecency.stickers = (0, p.tU)(d.Z.stickerFrecencyWithoutFetchingLatest.usageHistory, 100)));
				}
			}),
			f.DZ.beforeSendCallbacks.push({
				hasChanges: () => u.ZP.hasPendingUsage() && h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
				processProto: (e) => {
					if (!!u.ZP.hasPendingUsage())
						h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
							((e.emojiFrecency = a.PL.create()),
							(e.emojiReactionFrecency = a.PL.create()),
							(e.emojiFrecency.emojis = (0, p.tU)(u.ZP.emojiFrecencyWithoutFetchingLatest.usageHistory, 100)),
							(e.emojiReactionFrecency.emojis = (0, p.tU)(
								u.ZP.emojiReactionFrecencyWithoutFetchingLatest.usageHistory,
								100
							)));
				}
			}),
			f.DZ.beforeSendCallbacks.push({
				hasChanges: () => c.Z.hasPendingUsage() && h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
				processProto: (e) => {
					if (!!c.Z.hasPendingUsage())
						h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
							!i().isEmpty(c.Z.playedSoundHistory) &&
							((e.playedSoundFrecency = a.pL.create()),
							(e.playedSoundFrecency.playedSounds = (0, p.tU)(c.Z.playedSoundHistory, 100)));
				}
			}),
			f.DZ.beforeSendCallbacks.push({
				hasChanges: () => o.ZP.hasPendingUsage() && h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
				processProto: (e) => {
					if (!!o.ZP.hasPendingUsage())
						h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
							((e.applicationCommandFrecency = a.YI.create()),
							(e.applicationCommandFrecency.applicationCommands = (0, p.tU)(
								o.ZP.getCommandFrecencyWithoutLoadingLatest().usageHistory,
								500
							)));
				}
			}),
			f.DZ.beforeSendCallbacks.push({
				hasChanges: () => l.Z.hasPendingUsage() && h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
				processProto: (e) => {
					if (!!l.Z.hasPendingUsage())
						h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
							((e.applicationFrecency = a.UY.create()),
							(e.applicationFrecency.applications = (0, p.tU)(
								l.Z.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
								m.yP
							)));
				}
			}),
			f.DZ.beforeSendCallbacks.push({
				hasChanges: () => _.Z.hasPendingUsage() && h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS),
				processProto: (e) => {
					if (!!_.Z.hasPendingUsage())
						h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
							((e.guildAndChannelFrecency = a.lG.create()),
							(e.guildAndChannelFrecency.guildAndChannels = (0, p.tU)(
								_.Z.frecencyWithoutFetchingLatest.usageHistory,
								_.C
							)));
				}
			});
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				POST_CONNECTION_OPEN: v,
				CONNECTION_RESUMED: v,
				CONNECTION_CLOSED: R,
				APP_STATE_UPDATE: O
			}),
			n in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r);
	}
}
function v() {
	(A = !0), y(T);
}
function O(e) {
	A && 'active' !== e.state && (clearTimeout(S), (S = null), C());
}
function R() {
	A && (clearTimeout(S), (S = null), C());
}
async function C() {
	y(g),
		!h.Z.hasLoaded(I.yP.FRECENCY_AND_FAVORITES_SETTINGS) &&
			(d.Z.hasPendingUsage() ||
				u.ZP.hasPendingUsage() ||
				o.ZP.hasPendingUsage() ||
				l.Z.hasPendingUsage() ||
				_.Z.hasPendingUsage()) &&
			(await f.DZ.loadIfNecessary()),
		i().forEach(f.aj, (e) => {
			e.markDirtyIfHasPendingChange();
		});
}
function y(e) {
	null != S && clearTimeout(S), (S = setTimeout(C, e));
}
t.Z = new N();
