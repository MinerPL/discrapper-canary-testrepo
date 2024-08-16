function r(e, t, n) {
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
n.d(t, {
    k2: function () {
        return a;
    }
}),
    n(47120);
let i = new (n(259443).Y)('AssetMap');
async function a(e) {
    let t = new s(),
        n = Object.entries(e).map((e) => {
            let [n, r] = e;
            return t.loadRemoteImage(n, r).catch((e) => i.warn('Failed to load canvas asset', e, n, r));
        });
    return await Promise.all(n), t;
}
class s {
    loadFonts() {
        return Promise.resolve();
    }
    async loadRemoteImage(e, t) {
        let n = new Image();
        return (n.src = t), (n.crossOrigin = 'anonymous'), await n.decode(), (this.assets[e] = n), Promise.resolve();
    }
    get(e) {
        return this.assets[e];
    }
    has(e) {
        return null != this.assets[e];
    }
    constructor() {
        r(this, 'assets', {}), r(this, 'fontManager', void 0);
    }
}
