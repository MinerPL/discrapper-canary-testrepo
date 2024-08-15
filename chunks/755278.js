n.d(t, {
	Z: function () {
		return I;
	}
}),
	n(789020);
var r = n(928801),
	i = n(924557),
	a = n(435064),
	s = n(779618),
	o = n(594190),
	l = n(836157),
	u = n(441167),
	c = n(695346),
	d = n(199902),
	_ = n(592125),
	E = n(131951),
	f = n(936349),
	h = n(630388),
	p = n(981631);
class I extends r.Z {
	get guildId() {
		return this.getState().guildId;
	}
	get channelId() {
		return this.getState().channelId;
	}
	computeVoiceFlags() {
		var e, t, n;
		let r = 0,
			_ = c.tU.getSetting();
		r = (0, h.mB)(r, p.BVn.ALLOW_VOICE_RECORDING, _);
		let f = (0, s.Z)(E.Z),
			I =
				(0, i.ln)() &&
				a.Z.getSettings().clipsEnabled &&
				((null === (e = d.Z.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === p.jm8.ACTIVE ||
					(null === (t = d.Z.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === p.jm8.PAUSED),
			{ enableDecoupledGameClipping: m } = l.Z.getCurrentConfig({ location: 'computeVoiceFlags' }),
			T =
				f &&
				a.Z.getSettings().decoupledClipsEnabled &&
				(null === (n = o.ZP.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null &&
				m;
		r = (0, h.mB)(r, p.BVn.CLIPS_ENABLED, I || T);
		let { enableViewerClipping: g } = u.Z.getCurrentConfig(
				{ location: 'computeVoiceFlags' },
				{ autoTrackExposure: !1 }
			),
			S = g && f && a.Z.getSettings().viewerClipsEnabled;
		return (r = (0, h.mB)(r, p.BVn.ALLOW_ANY_VIEWER_CLIPS, S));
	}
	getInitialState() {
		return {
			guildId: null,
			channelId: null,
			selfMute: E.Z.isSelfMute(),
			selfDeaf: E.Z.isSelfDeaf(),
			selfVideo: E.Z.isVideoEnabled(),
			preferredRegion: null,
			preferredRegions: null,
			videoStreamParameters: null,
			flags: 0
		};
	}
	getNextState(e) {
		let { guildId: t, channelId: n } = e;
		return {
			guildId: t,
			channelId: n,
			selfMute: E.Z.isSelfMute(),
			selfDeaf: E.Z.isSelfDeaf(),
			selfVideo: E.Z.isVideoEnabled(),
			preferredRegion: f.Z.getPreferredRegion(),
			preferredRegions: f.Z.getPreferredRegions(),
			videoStreamParameters: E.Z.getVideoStreamParameters(),
			flags: this.computeVoiceFlags()
		};
	}
	shouldCommit() {
		return this.socket.isSessionEstablished();
	}
	didCommit(e) {
		var t;
		let {
			guildId: n,
			channelId: r,
			selfMute: i,
			selfDeaf: a,
			selfVideo: s,
			preferredRegion: o,
			preferredRegions: l,
			videoStreamParameters: u,
			flags: c = 0
		} = e;
		s && (null === (t = _.Z.getChannel(r)) || void 0 === t ? void 0 : t.type) === p.d4z.GUILD_STAGE_VOICE
			? this.socket.voiceStateUpdate({
					guildId: n,
					channelId: r,
					selfMute: i,
					selfDeaf: a,
					selfVideo: s,
					preferredRegion: o,
					preferredRegions: l,
					videoStreamParameters: u,
					flags: c
				})
			: this.socket.voiceStateUpdate({
					guildId: n,
					channelId: r,
					selfMute: i,
					selfDeaf: a,
					selfVideo: s,
					preferredRegion: o,
					preferredRegions: l,
					flags: c
				});
	}
	constructor(e) {
		var t, n, r;
		super(),
			(t = this),
			(r = void 0),
			(n = 'socket') in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r),
			(this.socket = e);
	}
}
