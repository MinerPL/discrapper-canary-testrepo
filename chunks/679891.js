n(47120);
var i = n(570140),
	a = n(846027),
	s = n(317770),
	r = n(594190),
	l = n(928518),
	o = n(131951),
	c = n(451478),
	d = n(981631),
	u = n(65154);
function _(e, t, n) {
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
let E = new Set(),
	h = new Set(),
	m = null;
function I() {
	for (let e of E) a.Z.setDisableLocalVideo(e, d.ZUi.MANUAL_ENABLED, u.Yn.DEFAULT, !1);
	h.clear(), E.clear();
}
class g extends s.Z {
	_initialize() {
		i.Z.subscribe('RTC_CONNECTION_VIDEO', this.handleIncomingVideo),
			i.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleManualLocalVideoToggle),
			i.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange),
			i.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect),
			l.Z.addChangeListener(this.handlePopoutChange);
	}
	_terminate() {
		i.Z.unsubscribe('RTC_CONNECTION_VIDEO', this.handleIncomingVideo),
			i.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleManualLocalVideoToggle),
			i.Z.unsubscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange),
			i.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect),
			l.Z.removeChangeListener(this.handlePopoutChange),
			I(),
			(m = null);
	}
	handleIncomingVideo(e) {
		let { userId: t, context: n, streamId: i } = e;
		if (n !== u.Yn.DEFAULT || null == i) return;
		let s = null != r.ZP.getVisibleGame(),
			_ = c.Z.isVisible(),
			m = l.Z.getWindowVisible(d.KJ3.CHANNEL_CALL_POPOUT),
			I = o.Z.isLocalVideoDisabled(t, n),
			g = h.has(t);
		s && !_ && !m && !I && !g && (E.add(t), a.Z.setDisableLocalVideo(t, d.ZUi.DISABLED, n, !1));
	}
	handleManualLocalVideoToggle(e) {
		let { userId: t, persist: n } = e;
		n && (h.add(t), E.delete(t));
	}
	constructor(...e) {
		super(...e),
			_(this, 'handleWindowVisibilityChange', (e) => {
				let { visible: t } = e;
				t && I();
			}),
			_(this, 'handleVoiceChannelSelect', (e) => {
				let { channelId: t } = e;
				t !== m && (I(), (m = t));
			}),
			_(this, 'handlePopoutChange', () => {
				l.Z.getWindowVisible(d.KJ3.CHANNEL_CALL_POPOUT) && I();
			});
	}
}
t.Z = new g();
