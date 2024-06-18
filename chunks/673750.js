"use strict";
n.d(t, {
  $V: function() {
    return r
  },
  Bz: function() {
    return L
  },
  hc: function() {
    return v
  }
}), n(653041), n(47120);
var i, r, s, o, a = n(512722),
  l = n.n(a),
  u = n(261470),
  _ = n(544891),
  d = n(911969),
  c = n(367907),
  E = n(710845),
  I = n(432877);
n(893233);
var T = n(873741),
  h = n(314897),
  S = n(866960),
  f = n(70956),
  N = n(403182),
  A = n(651655),
  m = n(861990),
  O = n(141795),
  R = n(981631);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = null;
__OVERLAY__ && (p = n(237997).Z), (s = i || (i = {})).OVERLAY_UNLOCKED = "overlay_unlocked", s.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned", s.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated", (o = r || (r = {}))[o.SEND = 0] = "SEND", o[o.EDIT = 1] = "EDIT", o[o.COMMAND = 2] = "COMMAND";
let g = e => 0 === e.type,
  L = e => 1 === e.type,
  v = e => g(e) ? e.message.nonce : L(e) ? e.message.messageId : e.message.data.id,
  D = [1 * f.Z.Millis.MINUTE, 5 * f.Z.Millis.MINUTE];
class M extends A.Z {
  isFull() {
    return this.queue.length >= this.maxSize
  }
  drain(e, t) {
    switch (this.logger.log("Draining Message Queue with: ", e.type), e.type) {
      case 0:
        this.handleSend(e.message, t);
        break;
      case 1:
        this.handleEdit(e.message, t);
        break;
      case 2:
        this.handleCommand(e.message, t)
    }
  }
  cancelRequest(e) {
    var t;
    this.logger.log("Cancel message send: ", e), null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e)
  }
  cancelPendingSendRequests(e) {
    let t = [],
      n = [];
    for (; this.queue.length > 0;) {
      let i = this.queue.shift(),
        {
          message: r
        } = i;
      0 === r.type && r.message.channelId === e ? t.push(r.message) : n.push(i)
    }
    return this.queue.push(...n), this.logger.log("Cancel pending send requests", t.length), t
  }
  startQueueMetricTimers(e) {
    let t = D.map(e => setTimeout(() => {
      (0, c.yw)(R.rMx.SEND_MESSAGE_QUEUED, {
        queued_duration_ms: e
      })
    }, e));
    this.analyticsTimeouts.set(e, t)
  }
  cancelQueueMetricTimers(e) {
    var t;
    null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e)
  }
  createResponseHandler(e, t) {
    return n => {
      if (null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr) return t(null, n);
      null != n.body && (n.body.code === R.evJ.SLOWMODE_RATE_LIMITED || n.body.code === R.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, n) : 429 === n.status ? t({
        retryAfter: n.body.retry_after * f.Z.Millis.SECOND
      }) : t(null, n)
    }
  }
  handleSend(e, t) {
    let n;
    let {
      channelId: i,
      file: r,
      filename: s,
      ...o
    } = e, a = (0, T.d)(), l = {
      mobile_network_type: S.Z.getType(),
      ...o,
      ...null != a && {
        signal_strength: a
      }
    };
    if (I.ZP.get("send_fail_100")) {
      this.logger.log("Skipping message sened because send_fail_100 is enabled"), t(null, {
        ok: !1,
        hasErr: !1,
        status: 500,
        headers: {},
        body: "{}",
        text: "Simulated failure"
      });
      return
    }
    null != p && (p.isInstanceUILocked() ? n = {
      location: "overlay_locked_activated"
    } : !p.isInstanceUILocked() && (n = p.isPinned(R.Odu.TEXT) ? {
      location: "overlay_unlocked_pinned"
    } : {
      location: "overlay_unlocked"
    }));
    let d = this.createResponseHandler(e.nonce, t),
      c = new AbortController;
    if (this.startQueueMetricTimers(e.nonce), null != r && null != s && "" !== s) _.tn.post({
      url: R.ANM.MESSAGES(i),
      fields: Object.entries(l).map(e => {
        let [t, n] = e;
        return {
          name: t,
          value: n
        }
      }),
      attachments: [{
        name: "file",
        file: r,
        filename: s
      }],
      context: n,
      oldFormErrors: !0,
      signal: c.signal,
      onRequestCreated: () => {
        null != e.nonce && this.requests.set(e.nonce, c)
      }
    }, d);
    else {
      let t;
      t = {
        timeout: 60 * f.Z.Millis.SECOND,
        retries: 3,
        backoff: new u.Z
      }, _.tn.post({
        url: R.ANM.MESSAGES(i),
        body: l,
        context: n,
        oldFormErrors: !0,
        ...t,
        signal: c.signal,
        onRequestCreated: () => {
          null != e.nonce && this.requests.set(e.nonce, c)
        }
      }, d)
    }
  }
  handleEdit(e, t) {
    let {
      channelId: n,
      messageId: i,
      ...r
    } = e, s = new AbortController;
    _.tn.patch({
      url: R.ANM.MESSAGE(n, i),
      body: r,
      retries: 1,
      oldFormErrors: !0,
      signal: s.signal,
      onRequestCreated: () => {
        this.requests.set(i, s)
      }
    }, this.createResponseHandler(i, t))
  }
  handleCommand(e, t) {
    let n, {
        applicationId: i,
        guildId: r,
        channelId: s,
        data: o,
        nonce: a,
        attachments: u,
        maxSizeCallback: c,
        analytics_location: E,
        sectionName: I
      } = e,
      T = {
        type: d.B8.APPLICATION_COMMAND,
        application_id: i,
        guild_id: r,
        channel_id: s,
        session_id: h.default.getSessionId(),
        data: o,
        nonce: a,
        analytics_location: E,
        section_name: I
      };
    if (null != u) {
      T.data.attachments = [], n = [];
      T.data.attachments = u.map((e, t) => (l()(e.status === O.m.COMPLETED, "Uploads must be staged before trying to send a message"), (0, m.B)(e, t)))
    }
    let S = new AbortController;
    _.tn.post({
      url: R.ANM.INTERACTIONS,
      fields: [{
        name: "payload_json",
        value: JSON.stringify(T)
      }],
      attachments: n,
      signal: S.signal,
      onRequestCreated: e => {
        this.requests.set(a, S), e.on("progress", e => {
          let {
            total: t
          } = e, n = (0, N.dg)(r);
          null != t && t > n && (this.cancelRequest(a), null == c || c(n))
        })
      }
    }, this.createResponseHandler(a, t))
  }
  constructor(e = 5) {
    super(new E.Z("MessageQueue")), C(this, "maxSize", void 0), C(this, "requests", void 0), C(this, "analyticsTimeouts", void 0), this.maxSize = e, this.requests = new Map, this.analyticsTimeouts = new Map
  }
}
t.ZP = new M