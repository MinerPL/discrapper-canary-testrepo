n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(81825),
    i = n(156570);
function a(e, t, n) {
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
class s extends r.Z {
    static createFromServer(e) {
        return new s({
            subscriptions: e.subscriptions.map((e) => i.Z.createFromServer(s.convertStoreListing(e))),
            otps: e.otps.map((e) => i.Z.createFromServer(s.convertStoreListing(e)))
        });
    }
    static convertStoreListing(e) {
        var t;
        return {
            ...e,
            summary: e.summary.default,
            description: null === (t = e.description) || void 0 === t ? void 0 : t.default
        };
    }
    constructor(e) {
        super(), a(this, 'subscriptions', void 0), a(this, 'otps', void 0), (this.subscriptions = e.subscriptions), (this.otps = e.otps);
    }
}
