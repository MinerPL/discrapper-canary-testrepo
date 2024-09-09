var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(353926),
    d = n(160462);
function u() {
    d.W.trigger();
}
class _ extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    constructor() {
        super(o.Z, { CONNECTION_OPEN: u }, o.c.Early);
    }
}
(s = 'ExperimentTriggerPointStore'),
    (a = 'displayName') in (i = _)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    new _();
