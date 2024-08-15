n(47120);
var r = n(846519),
	i = n(570140),
	a = n(872810),
	s = n(199902),
	o = n(314897),
	l = n(592125),
	u = n(936349),
	c = n(944486),
	d = n(959457),
	_ = n(70956),
	E = n(569545),
	f = n(981631);
let h = new r.V7(),
	p = new r.V7(),
	m = 5 * _.Z.Millis.SECOND,
	I = 12 * _.Z.Millis.SECOND,
	T = null;
function g(e, t) {
	if (c.Z.getVoiceChannelId() !== e) return !1;
	let n = l.Z.getChannel(e);
	if (null == n || (!n.isDM() && !n.isGuildStageVoice()) || null != s.Z.getActiveStreamForUser(t, n.getGuildId())) return !1;
	let r = s.Z.getStreamForUser(t, n.getGuildId());
	if (null == r) return !1;
	let i = (0, E.V9)(r);
	return i !== T && ((T = i), (0, a.rn)(r, { noFocus: !0 }), !0);
}
function S(e, t) {
	let n = null != t ? t : u.Z.getPreferredRegion();
	null != n && n !== u.Z.getRegion(d.Z.getHostname(d.Z.getActiveStreamKey())) && (0, a.dV)(e, n);
}
t.Z = {
	init() {
		let e = (e, t) => {
			!d.Z.getAllActiveStreamKeys().includes(e) &&
				p.start(t ? I : m, () => {
					i.Z.dispatch({
						type: 'STREAM_TIMED_OUT',
						streamKey: e
					});
				});
		};
		i.Z.subscribe('STREAM_WATCH', (t) => {
			let { streamKey: n } = t,
				{ channelId: r } = (0, E.my)(n),
				i = l.Z.getChannel(r);
			e(n, null == i ? void 0 : i.isGuildStageVoice());
		}),
			i.Z.subscribe('STREAM_START', (t) => {
				let { streamType: n, guildId: r, channelId: i } = t,
					a = l.Z.getChannel(i);
				e(
					(0, E.V9)({
						streamType: n,
						guildId: r,
						channelId: i,
						ownerId: o.default.getId()
					}),
					null == a ? void 0 : a.isGuildStageVoice()
				);
			}),
			i.Z.subscribe('STREAM_CREATE', () => {
				p.stop();
			}),
			i.Z.subscribe('STREAM_UPDATE', () => {
				p.stop();
			}),
			i.Z.subscribe('STREAM_DELETE', () => {
				p.stop();
			}),
			i.Z.subscribe('STREAM_CLOSE', () => {
				h.stop(), p.stop();
			}),
			i.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => {
				let { channelId: t } = e;
				if (null == t) return;
				T = null;
				let n = s.Z.getAllApplicationStreamsForChannel(t).filter((e) => {
					let { ownerId: t } = e;
					return t !== o.default.getId();
				})[0];
				null != n && g(t, n.ownerId);
			}),
			i.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
				let { voiceStates: t } = e;
				t.forEach((e) => {
					let { userId: t, channelId: n, guildId: r, selfStream: i } = e;
					if (t !== o.default.getId() && null != n) {
						if (i && g(n, t)) return;
						let e = s.Z.getActiveStreamForUser(t, r);
						if (null != e && e.channelId === n && (!i && e.state !== f.jm8.ENDED && h.start(180000, () => (0, a.aP)((0, E.V9)(e), !1)), i && e.state === f.jm8.ENDED)) {
							h.stop();
							let e = s.Z.getStreamForUser(t, r);
							if (null == e) return;
							(0, a.rn)(e);
						}
					}
				});
			}),
			i.Z.subscribe('CALL_UPDATE', (e) => {
				let { channelId: t, region: n } = e,
					r = s.Z.getCurrentUserActiveStream();
				(null == r ? void 0 : r.channelId) === t && S((0, E.V9)(r), n);
			}),
			i.Z.subscribe('CHANNEL_UPDATES', (e) => {
				let { channels: t } = e,
					n = s.Z.getCurrentUserActiveStream();
				if (null != n) for (let e of t) n.channelId === e.id && S((0, E.V9)(n), e.rtcRegion);
			});
	}
};
