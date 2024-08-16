n.d(t, {
    E: function () {
        return a;
    }
});
var r = n(264181);
function i(e, t, n) {
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
class a {
    static fromServer(e) {
        return new a({
            ...e,
            dismissibleContent: e.dismissible_content
        });
    }
    constructor(e) {
        i(this, 'dismissibleContent', void 0), i(this, 'version', void 0), (this.type = r.Z.BADGE), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version);
    }
}
