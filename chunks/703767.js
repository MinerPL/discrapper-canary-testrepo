n(653041), n(47120);
var r = n(147913),
    i = n(579806);
n(987170);
var a = n(998502);
let s = [0, 0],
    o = [];
function l(e) {
    for (let t of e) if (t[0] === s[0] && t[1] === s[1]) return !0;
    return !1;
}
let u = !1;
function c() {
    let e = {};
    for (let t of o)
        if (l(t.gpus)) {
            let n = t.experiment.getCurrentConfig({ location: 'updateFlags' });
            e = {
                ...e,
                ...n
            };
        }
    a.ZP.setChromiumSwitches(e);
}
class d extends r.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, t, n, r;
                        if (u || (null === (t = window.DiscordNative) || void 0 === t ? void 0 : null === (e = t.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return;
                        let a = await i.Z.processUtils.getSystemInfo();
                        for (let e of null !== (r = null === (n = a.electronGPUInfo) || void 0 === n ? void 0 : n.gpuDevice) && void 0 !== r ? r : []) !0 === e.active && (s = [e.vendorId, e.deviceId]);
                        for (let e of ((u = !0), o)) l(e.gpus) && e.experiment.subscribe({ location: 'GPU experiment subscription' }, c);
                        c();
                    } catch (e) {}
                }
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new d();
