n.r(t),
    n.d(t, {
        WebAudioAPISound: function () {
            return S;
        },
        WebAudioSound: function () {
            return g;
        },
        playGiftSound: function () {
            return I;
        }
    }),
    n(47120),
    n(411104);
var r,
    i,
    a = n(392711),
    s = n.n(a),
    o = n(304809),
    l = n(22382),
    u = n(747071),
    c = n(131951),
    d = n(358085);
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
let E = 'default',
    f = E;
((i = r || (r = {})).Stopped = 'stopped'), (i.Playing = 'playing'), (i.Looping = 'looping'), (i.Paused = 'paused');
let h = new Map();
async function p(e) {
    let t = await fetch(n(451343)('./'.concat(e, '.mp3'))).then((e) => e.arrayBuffer());
    return (0, o.N)().decodeAudioData(t);
}
async function m(e) {
    let t = h.get(e);
    return null == t && ((t = p(e)), h.set(e, t)), await t;
}
function I(e, t) {
    let n = new Audio((0, l.Z)(e));
    (n.volume = (0, u.Z)(t)), n.play();
}
function T() {
    if (null != window.navigator.mediaDevices)
        window.navigator.mediaDevices
            .enumerateDevices()
            .then((e) => {
                let t = c.Z.getOutputDevices(),
                    n = s()(t)
                        .sortBy((e) => e.index)
                        .findIndex((e) => e.id === c.Z.getOutputDeviceId()),
                    r = t[c.Z.getOutputDeviceId()],
                    i = e.filter((e) => 'audiooutput' === e.kind && 'communications' !== e.deviceId),
                    a = i[n];
                null != r && (null == a || a.label !== r.name) && (a = i.find((e) => e.label === r.name)), (f = null != a ? a.deviceId : E);
            })
            .catch(() => {
                f = E;
            });
}
d.isPlatformEmbedded && (c.Z.addChangeListener(T), T());
class g {
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = e), this._ensureAudio().then((t) => (t.volume = e));
    }
    loop() {
        this._ensureAudio().then((e) => {
            (e.loop = !0), e.play();
        });
    }
    play() {
        this._ensureAudio().then((e) => {
            (e.loop = !1), e.play();
        });
    }
    pause() {
        null != this._audio && this._audio.then((e) => e.pause());
    }
    stop() {
        this._destroyAudio();
    }
    playWithListener() {
        return new Promise((e, t) => {
            this._ensureAudio().then((n) => {
                (null == n.duration || 0 === n.duration) && t('sound has no duration'),
                    n.play(),
                    setTimeout(() => {
                        e(!0);
                    }, n.duration);
            });
        });
    }
    _destroyAudio() {
        null != this._audio &&
            (this._audio.then((e) => {
                e.pause(), (e.src = '');
            }),
            (this._audio = null));
    }
    _ensureAudio() {
        var e;
        return (
            (this._audio =
                null !== (e = this._audio) && void 0 !== e
                    ? e
                    : new Promise((e, t) => {
                          let r = new Audio();
                          (r.src = n(451343)('./'.concat(this.name, '.mp3'))),
                              (r.onloadeddata = () => {
                                  (r.volume = Math.min((c.Z.getOutputVolume() / 100) * this._volume, 1)), d.isPlatformEmbedded && r.setSinkId(f), e(r);
                              }),
                              (r.onerror = () => t(Error('could not play audio'))),
                              (r.onended = () => this._destroyAudio()),
                              r.load();
                      })),
            this._audio
        );
    }
    constructor(e, t, n) {
        _(this, 'name', void 0), _(this, '_volume', void 0), _(this, '_audio', void 0), (this.name = e), (this._volume = n);
    }
}
class S {
    get volume() {
        return this._volume;
    }
    set volume(e) {
        this._ensureAudio().then((t) => {
            let { gainNode: n, context: r } = t;
            (this._volume = e), n.gain.setValueAtTime(e, r.currentTime);
        });
    }
    loop() {
        if ('looping' !== this._state)
            (this._state = 'looping'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'looping' === this._state && ((t.loop = !0), t.start());
                });
    }
    play() {
        if ('playing' !== this._state)
            (this._state = 'playing'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'playing' === this._state && ((t.loop = !1), t.start());
                });
    }
    pause() {
        if ('paused' !== this._state)
            (this._state = 'paused'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'paused' === this._state && (t.stop(), (this._state = 'paused'));
                });
    }
    stop() {
        this._destroyAudio();
    }
    _destroyAudio() {
        if ('stopped' !== this._state)
            (this._state = 'stopped'),
                this._ensureAudio().then((e) => {
                    let { source: t } = e;
                    'stopped' === this._state && (t.disconnect(), t.stop(), (this._source = null), (this._buffer = null), (this._state = 'stopped'), (this._ensureAudioPromise = null));
                });
    }
    async _ensureAudio() {
        if (null == this._ensureAudioPromise) {
            let e = Math.min((c.Z.getOutputVolume() / 100) * this._volume, 1);
            this._ensureAudioPromise = m(this.name)
                .then((t) =>
                    null == t
                        ? Promise.reject(Error('Failed to load audio: '.concat(this.name)))
                        : ((this._audioContext = (0, o.N)()),
                          (this._gain = new GainNode(this._audioContext)),
                          (this._gain.gain.value = e),
                          d.isPlatformEmbedded && this._audioContext.setSinkId(f),
                          (this._buffer = t),
                          (this._source = this._audioContext.createBufferSource()),
                          (this._source.buffer = t),
                          this._source.connect(this._gain).connect(this._audioContext.destination),
                          (this._source.loop = !1),
                          (this._source.onended = () => this._destroyAudio()),
                          Promise.resolve({
                              context: this._audioContext,
                              gainNode: this._gain,
                              source: this._source
                          }))
                )
                .catch(() => Promise.reject(Error('Failed to load audio: '.concat(this.name))));
        }
        return await this._ensureAudioPromise;
    }
    constructor(e, t, n) {
        _(this, 'name', void 0), _(this, '_volume', void 0), _(this, '_audioContext', void 0), _(this, '_buffer', void 0), _(this, '_source', void 0), _(this, '_gain', void 0), _(this, '_state', void 0), _(this, '_ensureAudioPromise', void 0), (this.name = e), (this._volume = n), (this._audioContext = null), (this._buffer = null), (this._source = null), (this._state = 'stopped'), (this._ensureAudioPromise = null);
    }
}
