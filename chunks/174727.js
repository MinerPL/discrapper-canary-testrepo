t.d(n, {
    MN: function () {
        return r;
    },
    XG: function () {
        return d;
    },
    ao: function () {
        return i;
    },
    kD: function () {
        return o;
    },
    lj: function () {
        return c;
    },
    my: function () {
        return s;
    },
    pN: function () {
        return u;
    }
}), t(411104), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var l = t(943351), a = t(689938);
let i = (e, n, t) => -1 === e ? 0 : e - n * e / t;
function s(e) {
    return e / 1000;
}
let r = (e, n, t) => -1 === e ? t : e + n * (t - e) / t, u = (e, n, t, l) => {
        let a = 0;
        return (a = n >= 0 && t > 0 ? (e - (n - t * n / l)) * 100 / t : 100 * e / l).toFixed(4);
    }, o = (e, n, t, l) => {
        let a = 0;
        return (a = n >= 0 && t > 0 ? -((e - (n + t * (l - n) / l)) * 100) / t : -100 * e / l + 100).toFixed(4);
    };
async function c(e) {
    var n;
    if (!(e.type.startsWith('audio') || e.type.startsWith('video')) || !l.bp.has(e.type))
        throw Error(a.Z.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({ fileType: e.type }));
    let t = new Audio(URL.createObjectURL(e));
    return await (n = t, new Promise(e => {
        let t = () => {
            e(), n.removeEventListener('canplaythrough', t);
        };
        n.addEventListener('canplaythrough', t), n.load();
    })), t;
}
async function d(e, n) {
    let t = await fetch(e);
    return new File([await t.blob()], n, { type: 'audio/mp3' });
}
