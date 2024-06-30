n.d(t, {
    HS: function () {
        return d;
    },
    Hg: function () {
        return c;
    },
    PW: function () {
        return E;
    },
    S5: function () {
        return i;
    },
    ZA: function () {
        return a;
    },
    l0: function () {
        return _;
    }
}), n(177593), n(653041);
var r = n(65154);
let i = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices, a = i && 'setSinkId' in HTMLAudioElement.prototype;
function o(e) {
    return {
        id: r.w5,
        type: e,
        index: 0,
        name: 'Default'
    };
}
function s() {
    return [
        o(r.h7.AUDIO_INPUT),
        o(r.h7.AUDIO_OUTPUT),
        o(r.h7.VIDEO_INPUT)
    ];
}
function l(e, t) {
    return e.filter(e => e.type === t);
}
function u() {
    return i ? navigator.mediaDevices.enumerateDevices().then(e => {
        let t = 0, n = 0, i = 0;
        return e.filter(e => {
            switch (e.kind) {
            case r.h7.AUDIO_INPUT:
            case r.h7.AUDIO_OUTPUT:
            case r.h7.VIDEO_INPUT:
                return !0;
            default:
                return !1;
            }
        }).map(e => {
            let a;
            switch (e.kind) {
            case r.h7.AUDIO_INPUT:
                a = t++;
                break;
            case r.h7.AUDIO_OUTPUT:
                a = n++;
                break;
            case r.h7.VIDEO_INPUT:
            default:
                a = i++;
            }
            return {
                id: e.deviceId,
                type: e.kind,
                index: a,
                name: null != e.label && '' !== e.label ? e.label : 0 === a ? 'Default' : 'Device '.concat(a)
            };
        });
    }).then(e => (!a && (e = e.filter(e => e.type !== r.h7.AUDIO_OUTPUT)).push(o(r.h7.AUDIO_OUTPUT)), e)).catch(s) : new Promise(e => {
        setImmediate(() => e(s()));
    });
}
async function c() {
    return l(await u(), r.h7.AUDIO_INPUT);
}
async function d() {
    return l(await u(), r.h7.AUDIO_OUTPUT);
}
async function _() {
    return l(await u(), r.h7.VIDEO_INPUT);
}
async function E() {
    let e = await u();
    return [
        l(e, r.h7.AUDIO_INPUT),
        l(e, r.h7.AUDIO_OUTPUT),
        l(e, r.h7.VIDEO_INPUT)
    ];
}
