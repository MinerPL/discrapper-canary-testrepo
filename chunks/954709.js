var i = n(570140),
    a = n(317770),
    s = n(335131),
    r = n(105622);
class l extends a.Z {
    _initialize() {
        i.Z.subscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    _terminate() {
        i.Z.unsubscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, r.d)('CollectiblesMarketingManager') && (0, s.R2)();
    }
}
t.Z = new l();
