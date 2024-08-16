let r, i;
n(47120);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(904245),
    _ = n(911969),
    E = n(314897),
    f = n(592125),
    h = n(70956),
    p = n(622449);
let m = 5 * h.Z.Millis.MINUTE,
    I = 10 * h.Z.Millis.SECOND,
    T = {},
    g = {},
    S = {};
let A = {};
function N(e) {
    var t;
    if (null == e) return !1;
    let n = T[e];
    if (null == n) return !1;
    null === (t = n.onSuccess) || void 0 === t || t.call(n), v(e);
}
function v(e) {
    if (null != A[e]) {
        delete A[e];
        return;
    }
    let t = T[e];
    delete T[e];
    let n = S[e];
    null != n && delete g[n],
        delete S[e],
        (A[e] = {
            insertedAt: Date.now(),
            nonce: e,
            messageId: n,
            interaction: t
        });
}
class O extends (a = u.ZP.Store) {
    getInteraction(e) {
        let t = g[e.id];
        return null != t ? T[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(T)) {
            let r = S[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = g[e];
        return (null == n || null == T[n] || T[n].state === p.F.FAILED) && (null == T[t] || T[t].state === p.F.FAILED) && !0;
    }
    getIFrameModalApplicationId() {
        return i;
    }
    getIFrameModalKey() {
        return r;
    }
}
(l = 'InteractionStore'),
    (o = 'displayName') in (s = O)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.ZP = new O(c.Z, {
        LOGOUT: function () {
            (T = {}),
                (g = {}),
                (S = {}),
                (A = {}),
                setInterval(() => {
                    let e = Date.now();
                    for (let [t, n] of Object.entries(A)) e - n.insertedAt > I && delete A[t];
                }, m);
        },
        INTERACTION_QUEUE: function (e) {
            let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: a, onSuccess: s, onFailure: o } = e;
            null != n && ((g[n] = t), (S[t] = n)),
                (T[t] = {
                    state: p.F.QUEUED,
                    data: r,
                    onCreate: i,
                    onCancel: a,
                    onSuccess: s,
                    onFailure: o
                });
        },
        INTERACTION_CREATE: function (e) {
            var t;
            let { nonce: n, interactionId: r } = e;
            if (null == n) return !1;
            let i = T[n];
            if (null == i || i.state !== p.F.QUEUED) return !1;
            (i.state = p.F.CREATED), null === (t = i.onCreate) || void 0 === t || t.call(i, r);
        },
        INTERACTION_SUCCESS: function (e) {
            let { nonce: t } = e;
            N(t);
        },
        INTERACTION_FAILURE: function (e) {
            var t;
            let { nonce: n, errorCode: r, errorMessage: i } = e;
            if (null == n) return !1;
            let a = T[n];
            if (null == a) return !1;
            null === (t = a.onFailure) || void 0 === t || t.call(a, r, i),
                a.data.interactionType === _.B8.APPLICATION_COMMAND
                    ? v(n)
                    : (T[n] = {
                          ...a,
                          state: p.F.FAILED,
                          errorCode: r,
                          errorMessage: i
                      });
        },
        MESSAGE_CREATE: function (e) {
            let { message: t } = e;
            if (null == t.nonce) return !1;
            {
                var n;
                let e = T[t.nonce];
                if (null == e) return !1;
                null === (n = e.onSuccess) || void 0 === n || n.call(e), v(t.nonce);
            }
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (null == f.Z.getChannel(t)) return !1;
            for (let [e, t] of Object.entries(T)) t.state === p.F.FAILED && v(e);
        },
        INTERACTION_IFRAME_MODAL_CREATE: function (e) {
            let { application: t, nonce: n } = e;
            (i = t.id), N(n);
        },
        INTERACTION_IFRAME_MODAL_CLOSE: function () {
            (r = void 0), (i = void 0);
        },
        INTERACTION_IFRAME_MODAL_KEY_CREATE: function (e) {
            let { modalKey: t } = e;
            r = t;
        },
        INTERACTION_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            N(t);
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let t,
                n,
                { participants: r } = e,
                i = E.default.getSessionId(),
                a = E.default.getId(),
                s = r.find((e) => e.user_id === a && e.session_id === i);
            if (null == s || null == s.nonce) return;
            let o = A[s.nonce];
            if ((null == o ? ((t = S[s.nonce]), (n = T[s.nonce])) : ((t = o.messageId), (n = o.interaction)), null != n && null != t)) v(s.nonce), null != t && 'channelId' in n.data && d.Z.deleteMessage(n.data.channelId, t, !0);
        }
    }));
