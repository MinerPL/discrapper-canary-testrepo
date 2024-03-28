"use strict";
n.r(t), n("47120"), n("653041");
var a = n("846519"),
  s = n("570140"),
  l = n("317770"),
  i = n("220082"),
  r = n("594174"),
  o = n("125268"),
  u = n("813900");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends l.default {
  _initialize() {
    !__OVERLAY__ && (s.default.subscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), s.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived))
  }
  _terminate() {
    !__OVERLAY__ && (s.default.unsubscribe("SHARED_CANVAS_DRAW_LINE_POINT", this._handleDrawLinePoint), s.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleVoiceChannelEffectReceived), this.lineBatchTimer.stop())
  }
  _handleVoiceChannelEffectReceived(e) {
    var t;
    let {
      lineId: n,
      points: a,
      userId: s,
      streamerId: l,
      emojiHose: d
    } = e;
    if (null != l && s !== (null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
      if (null != a && null != n) {
        let e = r.default.getUser(s);
        null != e && (0, i.maybeFetchColors)(e.getAvatarURL(null, u.AVATAR_COLOR_AVATAR_SIZE)), (0, o.updateLinePoints)(n, s, l, a)
      } else null != d && (d.lastUpdatedAt = Date.now(), (0, o.updateEmojiHose)(d, s, l))
    }
  }
  constructor(...e) {
    super(...e), d(this, "linesToUpdate", {}), d(this, "lineBatchTimer", new a.Interval), d(this, "_handleDrawLinePoint", e => {
      let {
        channelId: t,
        lineId: n,
        streamerId: a,
        point: s
      } = e;
      null == this.linesToUpdate[n] ? this.linesToUpdate[n] = {
        channelId: t,
        streamerId: a,
        points: [s]
      } : this.linesToUpdate[n].points.push(s), null == this.lineBatchTimer._ref && this.lineBatchTimer.start(u.EVENT_TICK_RATE, this.sendLineBatch)
    }), d(this, "sendLineBatch", () => {
      for (let e in this.linesToUpdate) {
        let {
          channelId: t,
          points: n,
          streamerId: a
        } = this.linesToUpdate[e];
        (0, o.addLinePoints)(t, e, a, n)
      }
      this.linesToUpdate = {}, this.lineBatchTimer.stop()
    })
  }
}
t.default = new c