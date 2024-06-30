n(47120);
var i = n(570140), s = n(846027), a = n(317770), r = n(594190), l = n(928518), o = n(131951), c = n(451478), d = n(981631), u = n(65154);
function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let E = new Set(), h = new Set(), I = null;
function m() {
    for (let e of E)
        s.Z.setDisableLocalVideo(e, d.ZUi.MANUAL_ENABLED, u.Yn.DEFAULT, !1);
    h.clear(), E.clear();
}
class p extends a.Z {
    _initialize() {
        i.Z.subscribe('RTC_CONNECTION_VIDEO', this.handleIncomingVideo), i.Z.subscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleManualLocalVideoToggle), i.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange), i.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), l.Z.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        i.Z.unsubscribe('RTC_CONNECTION_VIDEO', this.handleIncomingVideo), i.Z.unsubscribe('AUDIO_SET_LOCAL_VIDEO_DISABLED', this.handleManualLocalVideoToggle), i.Z.unsubscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange), i.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), l.Z.removeChangeListener(this.handlePopoutChange), m(), I = null;
    }
    handleIncomingVideo(e) {
        let {
            userId: t,
            context: n,
            streamId: i
        } = e;
        if (n !== u.Yn.DEFAULT || null == i)
            return;
        let a = null != r.ZP.getVisibleGame(), _ = c.Z.isVisible(), I = l.Z.getWindowVisible(d.KJ3.CHANNEL_CALL_POPOUT), m = o.Z.isLocalVideoDisabled(t, n), p = h.has(t);
        a && !_ && !I && !m && !p && (E.add(t), s.Z.setDisableLocalVideo(t, d.ZUi.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let {
            userId: t,
            persist: n
        } = e;
        n && (h.add(t), E.delete(t));
    }
    constructor(...e) {
        super(...e), _(this, 'handleWindowVisibilityChange', e => {
            let {visible: t} = e;
            t && m();
        }), _(this, 'handleVoiceChannelSelect', e => {
            let {channelId: t} = e;
            t !== I && (m(), I = t);
        }), _(this, 'handlePopoutChange', () => {
            l.Z.getWindowVisible(d.KJ3.CHANNEL_CALL_POPOUT) && m();
        });
    }
}
t.Z = new p();
