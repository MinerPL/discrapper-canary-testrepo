"use strict";
n.d(t, {
  Ct: function() {
    return _
  },
  UP: function() {
    return l
  },
  ZP: function() {
    return d
  },
  rj: function() {
    return u
  }
}), n(653041), n(47120);
var i = n(929991),
  r = n(480739),
  s = n(228392),
  o = n(6496);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
  return "".concat(r.AT.FORUM_CHANNEL, "_").concat(e)
}

function u(e, t, n) {
  (0, i.a8)(l(e), t, n)
}

function _(e, t, n) {
  (0, i.FL)(l(e), t, n)
}
class d extends r.zQ {
  constructor({
    guildId: e,
    channelId: t,
    windowId: n,
    isPaused: i
  }) {
    super({
      windowId: n,
      isPaused: i,
      id: l(t)
    }), a(this, "guildId", void 0), a(this, "channelId", void 0), a(this, "sessionId", void 0), a(this, "createFlushSeenItemsFunction", e => {
      let t = this.trackedFeedItems,
        n = this.channelId,
        i = this.guildId,
        r = {
          guildId: i,
          channelId: n,
          sessionId: this.sessionId,
          trackedFeedItems: t,
          isForcedFlush: null != e
        };
      return () => (function(e) {
        let {
          guildId: t,
          channelId: n,
          sessionId: i,
          trackedFeedItems: r,
          isForcedFlush: o
        } = e, a = [], l = [];
        for (let e of Object.keys(r)) {
          let t = r[e].computeSeenTimeDestructive(o);
          t > 0 && (a.push(e), l.push(t))
        }
        0 !== a.length && (0, s.qs)({
          guildId: t,
          channelId: n,
          sessionId: i,
          postIds: a,
          additionalTimes: l
        })
      })(r)
    }), this.guildId = e, this.channelId = t, this.sessionId = (0, o.WW)(t)
  }
}