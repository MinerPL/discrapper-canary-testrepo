n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(81825), i = n(689938);
function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class o extends r.Z {
    static createFromServer(e) {
        return new o({
            id: e.id,
            liveBuildId: e.live_build_id,
            name: e.name
        });
    }
    getName(e) {
        return null != this.name ? this.name : this.id === e ? i.Z.Messages.APPLICATION_BRANCH_NAME_MASTER : i.Z.Messages.APPLICATION_BRANCH_NAME_UNKNOWN;
    }
    constructor(e) {
        super(), a(this, 'id', void 0), a(this, 'liveBuildId', void 0), a(this, 'name', void 0), this.id = e.id, this.liveBuildId = e.liveBuildId, this.name = e.name;
    }
}
