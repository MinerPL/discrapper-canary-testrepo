n.d(t, {
    e: function () {
        return i;
    },
    w: function () {
        return p;
    }
});
var r,
    i,
    a = n(47770),
    s = n(846519),
    o = n(570140),
    l = n(710845),
    u = n(646047),
    c = n(425497),
    d = n(70956),
    f = n(27414);
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
((r = i || (i = {})).WindowVisibilityChanged = 'window-visibility-changed'), (r.IncomingVideoEnabledChanged = 'incoming-video-enabled-changed');
class h extends a.Z {
    isIncomingVideoEnabled() {
        return this.incomingVideoEnabled;
    }
    update() {
        if (this.discordVisible !== (0, f.Z)())
            (this.discordVisible = (0, f.Z)()),
                this.emit('window-visibility-changed', this.discordVisible),
                this.discordVisible
                    ? (this.disableVideoTimer.stop(), this.setIncomingVideoEnabled(!0))
                    : this.disableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
                          this.setIncomingVideoEnabled(!1);
                      });
    }
    setIncomingVideoEnabled(e) {
        let t = this.incomingVideoEnabled !== e;
        (this.incomingVideoEnabled = e), t && (this.logger.info('Incoming video enabled changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
    }
    constructor() {
        super(),
            _(this, 'disableVideoTimer', new s.V7()),
            _(this, 'discordVisible', !0),
            _(this, 'incomingVideoEnabled', !0),
            _(this, 'logger', new l.Z('WindowVisibilityVideoManager')),
            _(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * d.Z.Millis.SECOND),
            _(this, 'handleWindowVisibilityChange', () => {
                this.update();
            }),
            _(this, 'handleAppStateUpdate', () => {
                c.Z.stopVideoWhenHidden() && this.update();
            }),
            _(this, 'handlePipModeChanged', () => {
                c.Z.stopVideoWhenHidden() && this.update();
            }),
            o.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange),
            o.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate),
            u.Z.addOnPipModeChangedListener(this.handlePipModeChanged);
    }
}
let p = new h();
