n.d(t, {
    M9: function () {
        return l;
    },
    Zh: function () {
        return a;
    },
    e6: function () {
        return r;
    },
    iq: function () {
        return i;
    }
}), n(757143);
var s = n(441729);
let a = null != window.speechSynthesis;
function r(e, t) {
    let n = e.replace(/(https?:\/\/[^\s]+)/g, e => {
        let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
        return null != t ? t[1] : '';
    });
    null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(' '))));
    let a = new SpeechSynthesisUtterance(n);
    return a.rate = s.Z.speechRate, a;
}
function i(e, t) {
    a && (e.voice = t, speechSynthesis.speak(e));
}
function l() {
    a && speechSynthesis.cancel();
}
