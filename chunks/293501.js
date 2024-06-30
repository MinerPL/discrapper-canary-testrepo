t.d(n, {
    NN: function () {
        return m;
    },
    b1: function () {
        return d;
    }
}), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var l = t(470079), a = t(772848), i = t(304809), s = t(586826), r = t(943351);
let u = new Worker(new URL(t.p + t.u('14315'), t.b)), o = (0, i.N)();
async function c(e) {
    let n = await e.arrayBuffer();
    return (await o.decodeAudioData(n)).getChannelData(0);
}
function d(e) {
    let [n, t] = l.useState(null), [a, i] = l.useState(null);
    return l.useEffect(() => {
        if (null == e)
            return;
        let n = (0, r.hp)(e);
        n !== a && (i(n), t(null), c(e).then(t));
    }, [
        a,
        e
    ]), n;
}
let f = { ...r.nl };
function m(e, n, t) {
    let [i, o] = l.useState(null), [c, d] = l.useState(null), [m, h] = l.useState(1), {setMaxVolume: g} = (0, s.p)(), p = l.useCallback((e, n) => {
            var l, i, s, r, o;
            d(null), (l = e, i = n.offsetWidth, s = t, r = f, o = h, new Promise(e => {
                let n = (0, a.Z)(), t = l => {
                        let {
                            data: {
                                waveform: a,
                                id: i,
                                normalizedVolumeMultipler: s
                            }
                        } = l;
                        n === i && (e(a), o(s)), null == u || u.removeEventListener('message', t);
                    };
                null == u || u.addEventListener('message', t), null == u || u.postMessage({
                    id: n,
                    options: s,
                    config: r,
                    width: i,
                    rawBufferData: l
                });
            })).then(d);
        }, [t]);
    return l.useEffect(() => {
        if (null == e || null == n)
            return;
        let l = (0, r.V3)(e, t);
        i !== l && (o(l), p(e, n));
    }, [
        e,
        p,
        n,
        t,
        i
    ]), l.useEffect(() => {
        g(m);
    }, [
        m,
        g
    ]), c;
}
