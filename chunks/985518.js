n.d(t, {
  Ct: function() {
return c;
  },
  UP: function() {
return l;
  },
  ZP: function() {
return d;
  },
  rj: function() {
return u;
  }
}), n(653041), n(47120);
var r = n(929991),
  i = n(480739),
  a = n(228392),
  s = n(6496);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function l(e) {
  return ''.concat(i.AT.FORUM_CHANNEL, '_').concat(e);
}

function u(e, t, n) {
  (0, r.a8)(l(e), t, n);
}

function c(e, t, n) {
  (0, r.FL)(l(e), t, n);
}
class d extends i.zQ {
  constructor({
guildId: e,
channelId: t,
windowId: n,
isPaused: r
  }) {
super({
  windowId: n,
  isPaused: r,
  id: l(t)
}), o(this, 'guildId', void 0), o(this, 'channelId', void 0), o(this, 'sessionId', void 0), o(this, 'createFlushSeenItemsFunction', e => {
  let t = this.trackedFeedItems,
    n = this.channelId,
    r = this.guildId,
    i = {
      guildId: r,
      channelId: n,
      sessionId: this.sessionId,
      trackedFeedItems: t,
      isForcedFlush: null != e
    };
  return () => function(e) {
    let {
      guildId: t,
      channelId: n,
      sessionId: r,
      trackedFeedItems: i,
      isForcedFlush: s
    } = e, o = [], l = [];
    for (let e of Object.keys(i)) {
      let t = i[e].computeSeenTimeDestructive(s);
      t > 0 && (o.push(e), l.push(t));
    }
    0 !== o.length && (0, a.qs)({
      guildId: t,
      channelId: n,
      sessionId: r,
      postIds: o,
      additionalTimes: l
    });
  }(i);
}), this.guildId = e, this.channelId = t, this.sessionId = (0, s.WW)(t);
  }
}