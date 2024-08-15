let r, i, a;
n(47120);
var s = n(493683),
	o = n(45114),
	l = n(872810),
	u = n(147913),
	c = n(594190),
	d = n(569545),
	_ = n(695346),
	E = n(314897),
	f = n(592125),
	h = n(77498),
	p = n(944486),
	I = n(885110),
	m = n(67212),
	T = n(770471),
	g = n(757454),
	S = n(158631),
	A = n(981631);
let N = [];
class v extends u.Z {
	handleRunningGamesChange() {
		let e = c.ZP.getVisibleGame();
		if (null == e) return;
		let { canBroadcast: t } = T.Z.getCurrentConfig(
				{ location: 'handle_running_games_change' },
				{ autoTrackExposure: !1 }
			),
			n = I.Z.getBroadcast(),
			r = (0, m.Ds)(e),
			i = null != h.Z.getGameByName(r),
			a = (0, S.dD)();
		if (!t || null != n || !_.xd.getSetting() || !i || !a || null != N.find((t) => t.pid === e.pid)) return;
		if (((N = c.ZP.getRunningGames()), !(0, g.Q)())) return;
		let s = p.Z.getVoiceChannelId();
		(0, l.tE)({
			pid: e.pid,
			channelId: s
		});
	}
	handleStreamCreate(e) {
		let { streamKey: t } = e;
		(0, m.v$)(t, r);
	}
	handleStreamStop(e) {
		let { streamKey: t } = e;
		if (null == r) return;
		let { ownerId: n, channelId: s } = (0, d.my)(t);
		if (null == n || null == s || n !== E.default.getId()) return;
		let o = f.Z.getChannel(s),
			l = null != o && o.isBroadcastChannel();
		null != o && n === o.ownerId && l && ((r = null), (i = null), (a = null), (0, m.b_)());
	}
	handleStartBroadcastStream(e) {
		let { options: t } = e;
		(r = t.pid), (i = t.sourceId), (a = t.sourceName);
	}
	handleCallCreate(e) {
		let { channelId: t } = e;
		if (null == t || (null == r && null == i && null == a)) return;
		let n = E.default.getId(),
			s = f.Z.getChannel(t);
		null != s &&
			n === s.ownerId &&
			s.isBroadcastChannel() &&
			(0, l.WH)(null, t, {
				pid: r,
				sourceId: i,
				sourceName: a
			});
	}
	handleRTCConnectionState(e) {
		let { channelId: t, state: n } = e;
		if (n !== A.hes.DISCONNECTED) return;
		let r = p.Z.getChannelId(),
			i = f.Z.getChannel(t);
		if (null == i || !i.isBroadcastChannel()) return;
		s.Z.closePrivateChannel(t, r === t, !0);
		let a = I.Z.getBroadcast();
		null != a && i.id === a.channelId && (0, m.b_)();
	}
	handleChannelDelete(e) {
		let { channel: t } = e,
			n = I.Z.getBroadcast();
		null != n && t.id === n.channelId && (0, m.b_)();
	}
	handleMessageCreate(e) {
		let { channelId: t, guildId: n } = e;
		if (null != n) return;
		let r = f.Z.getChannel(t);
		if (null != r && !!r.isBroadcastChannel()) p.Z.getVoiceChannelId() !== r.id && (0, o.iV)(t);
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
				STREAM_CREATE: this.handleStreamCreate,
				STREAM_STOP: this.handleStreamStop,
				START_BROADCAST_STREAM: this.handleStartBroadcastStream,
				CALL_CREATE: this.handleCallCreate,
				RTC_CONNECTION_STATE: this.handleRTCConnectionState,
				CHANNEL_DELETE: this.handleChannelDelete,
				MESSAGE_CREATE: this.handleMessageCreate
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
t.Z = new v();
