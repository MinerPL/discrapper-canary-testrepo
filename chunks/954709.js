var i = n(664081),
    r = n(570140),
    a = n(317770),
    l = n(863750),
    s = n(335131);
class o extends a.Z {
    _initialize() {
        r.Z.subscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = l.Z.get('shop_include_unpublished');
        (0, s.R2)({ release: e ? i.P.BETA : i.P.PROD });
    }
}
t.Z = new o();
