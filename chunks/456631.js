let r;
n.d(t, {
    H: function () {
        return I;
    }
}),
    n(47120),
    n(733860);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n(442837),
    c = n(780384),
    d = n(570140),
    _ = n(70956),
    E = n(963838),
    f = n(354459);
let h = [],
    p = {},
    m = [],
    I = (e) => {
        null != e &&
            d.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    T = [],
    g = 10 * _.Z.Millis.SECOND,
    S = (0, l.debounce)(() => {
        let e = (0, E.cX)(m);
        c.uv.announce(e, 'polite'), (m = []);
    }, 500);
class A extends (i = u.ZP.Store) {
    get recentlyUsedEmojis() {
        return h;
    }
    get isOnCooldown() {
        return null != r && new Date() < r;
    }
    get effectCooldownEndTime() {
        return r;
    }
    getEffectForUserId(e) {
        return p[e];
    }
}
(o = 'VoiceChannelEffectsStore'),
    (s = 'displayName') in (a = A)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new A(d.Z, {
        VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
            let { userId: t } = e;
            null != p[t] && delete p[t];
        },
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
            let { emoji: t } = e;
            if (null != t) h.unshift(t), (h = (0, l.uniqBy)(h, 'name')).length > f.e5 + 1 && h.pop();
        },
        VOICE_CHANNEL_EFFECT_SEND: (e) => {
            let { emoji: t, userId: n, animationType: r } = e;
            null != t &&
                null != r &&
                ((p[n] = {
                    emoji: t,
                    sentAt: Date.now(),
                    animationType: r
                }),
                (m = [
                    ...m,
                    {
                        emojiName: t.name,
                        userId: n
                    }
                ]),
                S());
        },
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
            let e = new Date();
            if ((T = [e, ...T].slice(0, 20)).length >= 20) {
                let t = T[T.length - 1],
                    n = e.getTime() - t.getTime();
                n < g && (r = new Date(e.getTime() + g - n));
            }
        },
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
            let { cooldownEndsAtMs: t } = e;
            r = new Date(Date.now() + t);
        }
    }));
