n.d(t, {
    $: function () {
        return _;
    },
    h: function () {
        return E;
    }
}),
    n(47120);
var i = n(512722),
    a = n.n(i),
    s = n(46973),
    r = n(304809),
    l = n(131951),
    o = n(747071);
let c = null;
try {
    c = (0, r.N)();
} catch {}
let d = new Map();
async function u(e) {
    let t = d.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = await (null == c ? void 0 : c.decodeAudioData(n));
    return null != i && d.set(e, i), i;
}
function _(e) {
    let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: r } = e;
    return new Promise(async (e) => {
        let o = await u(n);
        null == o && e(),
            l.Z.getMediaEngine().eachConnection((n) => {
                n.context === s.Yn.DEFAULT &&
                    (r(),
                    a()(null != o, 'audioBuffer cannot be null here'),
                    n.startSamplesLocalPlayback(t, o, i, () => {
                        e();
                    }));
            });
    });
}
function E(e, t) {
    let { soundKey: n, soundURL: i, soundVolume: a, reportSoundStartedPlaying: s } = e,
        r = t.get(n);
    if (null != r) {
        r.currentTime = 0;
        return;
    }
    return new Promise((e) => {
        let r = new Audio(i);
        (r.volume = (0, o.Z)(a)),
            r.addEventListener('canplaythrough', () => {
                s(), t.set(n, r), r.play();
            }),
            r.addEventListener('ended', () => {
                t.delete(n), (r.src = ''), e();
            });
    });
}
