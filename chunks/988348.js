n.d(t, {
    G: function () {
        return s;
    },
    N: function () {
        return a;
    }
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817);
var r = n(998502);
let i = null;
function a() {
    return (
        null == i &&
            (i = (function () {
                if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
                try {
                    return r.ZP.requireModule('discord_zstd'), !0;
                } catch (e) {
                    if (e.message.includes('Cannot find')) return r.ZP.ensureModule('discord_zstd').catch((e) => {}), !1;
                    throw e;
                }
            })()),
        i
    );
}
function s() {
    let { createContext: e } = r.ZP.requireModule('discord_zstd');
    return e();
}
