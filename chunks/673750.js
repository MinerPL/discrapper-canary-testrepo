n.d(t, {
    $V: function () {
        return i;
    },
    Bz: function () {
        return C;
    },
    hc: function () {
        return y;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(512722),
    l = n.n(o),
    u = n(544891),
    c = n(911969),
    d = n(367907),
    _ = n(710845),
    E = n(432877),
    f = n(873741),
    h = n(314897),
    p = n(866960),
    I = n(70956),
    m = n(403182),
    T = n(651655),
    S = n(861990),
    g = n(141795),
    A = n(981631),
    N = n(959517);
function O(e, t, n) {
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
let R = null;
__OVERLAY__ && (R = n(237997).Z), ((a = r || (r = {})).OVERLAY_UNLOCKED = 'overlay_unlocked'), (a.OVERLAY_UNLOCKED_PINNED = 'overlay_unlocked_pinned'), (a.OVERLAY_LOCKED_ACTIVATED = 'overlay_locked_activated'), ((s = i || (i = {}))[(s.SEND = 0)] = 'SEND'), (s[(s.EDIT = 1)] = 'EDIT'), (s[(s.COMMAND = 2)] = 'COMMAND');
let v = (e) => 0 === e.type,
    C = (e) => 1 === e.type,
    y = (e) => (v(e) ? e.message.nonce : C(e) ? e.message.messageId : e.message.data.id),
    L = [1 * I.Z.Millis.MINUTE, 5 * I.Z.Millis.MINUTE];
class D extends T.Z {
    isFull() {
        return this.queue.length >= this.maxSize;
    }
    drain(e, t) {
        switch ((this.logger.log('Draining Message Queue with: ', e.type), e.type)) {
            case 0:
                this.handleSend(e.message, t);
                break;
            case 1:
                this.handleEdit(e.message, t);
                break;
            case 2:
                this.handleCommand(e.message, t);
        }
    }
    cancelRequest(e) {
        var t;
        this.logger.log('Cancel message send: ', e), null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e);
    }
    cancelPendingSendRequests(e) {
        let t = [],
            n = [];
        for (; this.queue.length > 0; ) {
            let r = this.queue.shift(),
                { message: i } = r;
            0 === i.type && i.message.channelId === e ? t.push(i.message) : n.push(r);
        }
        return this.queue.push(...n), this.logger.log('Cancel pending send requests', t.length), t;
    }
    startQueueMetricTimers(e) {
        let t = L.map((e) =>
            setTimeout(() => {
                (0, d.yw)(A.rMx.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e)
        );
        this.analyticsTimeouts.set(e, t);
    }
    cancelQueueMetricTimers(e) {
        var t;
        null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, t) {
        return (n) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr)) return t(null, n);
            if (null != n.body && (n.body.code === A.evJ.SLOWMODE_RATE_LIMITED || n.body.code === A.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)) t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers['retry-after']);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * I.Z.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let n;
        let { channelId: r, ...i } = e,
            a = (0, f.d)(),
            s = {
                mobile_network_type: p.Z.getType(),
                ...i,
                ...(null != a && { signal_strength: a })
            };
        if (E.ZP.get('send_fail_100')) {
            this.logger.log('Skipping message send because send_fail_100 is enabled'),
                t(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: '{}',
                    text: 'Simulated failure'
                });
            return;
        }
        null != R && (R.isInstanceUILocked() ? (n = { location: 'overlay_locked_activated' }) : !R.isInstanceUILocked() && (n = R.isPinned(A.Odu.TEXT) ? { location: 'overlay_unlocked_pinned' } : { location: 'overlay_unlocked' }));
        let o = this.createResponseHandler(e.nonce, t),
            l = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            u.tn.post(
                {
                    url: A.ANM.MESSAGES(r),
                    body: s,
                    context: n,
                    oldFormErrors: !0,
                    ...N.hs,
                    signal: l.signal,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, l);
                    }
                },
                o
            );
    }
    handleEdit(e, t) {
        let { channelId: n, messageId: r, ...i } = e,
            a = new AbortController();
        u.tn.patch(
            {
                url: A.ANM.MESSAGE(n, r),
                body: i,
                retries: 1,
                oldFormErrors: !0,
                signal: a.signal,
                onRequestCreated: () => {
                    this.requests.set(r, a);
                }
            },
            this.createResponseHandler(r, t)
        );
    }
    handleCommand(e, t) {
        let n,
            { applicationId: r, guildId: i, channelId: a, data: s, nonce: o, attachments: d, maxSizeCallback: _, analytics_location: E, sectionName: f, source: p } = e,
            I = {
                type: c.B8.APPLICATION_COMMAND,
                application_id: r,
                guild_id: i,
                channel_id: a,
                session_id: h.default.getSessionId(),
                data: s,
                nonce: o,
                analytics_location: E,
                section_name: f,
                source: p
            };
        if (null != d) {
            (I.data.attachments = []), (n = []);
            I.data.attachments = d.map((e, t) => (l()(e.status === g.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, S.B)(e, t)));
        }
        let T = new AbortController();
        u.tn.post(
            {
                url: A.ANM.INTERACTIONS,
                fields: [
                    {
                        name: 'payload_json',
                        value: JSON.stringify(I)
                    }
                ],
                attachments: n,
                signal: T.signal,
                onRequestCreated: (e) => {
                    this.requests.set(o, T),
                        e.on('progress', (e) => {
                            let { total: t } = e,
                                n = (0, m.dg)(i);
                            null != t && t > n && (this.cancelRequest(o), null == _ || _(n));
                        });
                }
            },
            this.createResponseHandler(o, t)
        );
    }
    constructor(e = 5) {
        super(new _.Z('MessageQueue')), O(this, 'maxSize', void 0), O(this, 'requests', void 0), O(this, 'analyticsTimeouts', void 0), (this.maxSize = e), (this.requests = new Map()), (this.analyticsTimeouts = new Map());
    }
}
t.ZP = new D();
