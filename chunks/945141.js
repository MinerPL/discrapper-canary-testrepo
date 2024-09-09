n(47120);
var r = n(433517),
    i = n(147913);
let a = 'formGuidelinesStorageKey';
class s extends i.Z {
    _initialize() {
        let e = r.K.get(a);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        r.K.set(a, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), r.K.set(a, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'seenForumGuidelines'),
            (r = new Set()),
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
t.Z = new s();
