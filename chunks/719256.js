n(47120), n(653041);
var i = n(846519),
    a = n(570140),
    s = n(317770),
    r = n(220082),
    l = n(594174),
    o = n(125268),
    c = n(813900);
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
class u extends s.Z {
    _initialize() {
        !__OVERLAY__ && (a.Z.subscribe('SHARED_CANVAS_DRAW_LINE_POINT', this._handleDrawLinePoint), a.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleVoiceChannelEffectReceived));
    }
    _terminate() {
        !__OVERLAY__ && (a.Z.unsubscribe('SHARED_CANVAS_DRAW_LINE_POINT', this._handleDrawLinePoint), a.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop());
    }
    _handleVoiceChannelEffectReceived(e) {
        var t;
        let { lineId: n, points: i, userId: a, streamerId: s, emojiHose: d } = e;
        if (null != s && a !== (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id))
            if (null != i && null != n) {
                let e = l.default.getUser(a);
                null != e && (0, r.vM)(e.getAvatarURL(null, c.Ks)), (0, o.cV)(n, a, s, i);
            } else null != d && ((d.lastUpdatedAt = Date.now()), (0, o.gr)(d, a, s));
    }
    constructor(...e) {
        super(...e),
            d(this, 'linesToUpdate', {}),
            d(this, 'lineBatchTimer', new i.Xp()),
            d(this, '_handleDrawLinePoint', (e) => {
                let { channelId: t, lineId: n, streamerId: i, point: a } = e;
                null == this.linesToUpdate[n]
                    ? (this.linesToUpdate[n] = {
                          channelId: t,
                          streamerId: i,
                          points: [a]
                      })
                    : this.linesToUpdate[n].points.push(a),
                    null == this.lineBatchTimer._ref && this.lineBatchTimer.start(c.Fq, this.sendLineBatch);
            }),
            d(this, 'sendLineBatch', () => {
                for (let e in this.linesToUpdate) {
                    let { channelId: t, points: n, streamerId: i } = this.linesToUpdate[e];
                    (0, o.AX)(t, e, i, n);
                }
                (this.linesToUpdate = {}), this.lineBatchTimer.stop();
            });
    }
}
t.Z = new u();
