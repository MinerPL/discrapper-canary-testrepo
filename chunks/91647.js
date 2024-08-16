r.d(t, {
    P: function () {
        return s;
    }
});
var n = r(101284),
    a = r(696486),
    o = r(147498),
    i = r(218234),
    _ = r(823878),
    E = r(939747);
class s {
    constructor(e) {
        (this._client = e), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), o.RF));
    }
    add(e, t, r, i = 'none', s = {}, c = (0, n.ph)()) {
        let I = Math.floor(c),
            u = (0, E.s3)(t),
            l = (0, E.Bg)(s),
            R = (0, E.OC)(i),
            A = (0, E.Ic)(e, u, R, l),
            T = this._buckets.get(A),
            d = T && e === o.is ? T.metric.weight : 0;
        T
            ? (T.metric.add(r), T.timestamp < I && (T.timestamp = I))
            : ((T = {
                  metric: new _.ZN[e](r),
                  timestamp: I,
                  metricType: e,
                  name: u,
                  unit: R,
                  tags: l
              }),
              this._buckets.set(A, T));
        let N = 'string' == typeof r ? T.metric.weight - d : r;
        (0, a.yc)(e, u, N, R, s, A);
    }
    flush() {
        if (0 === this._buckets.size) return;
        let e = Array.from(this._buckets.values());
        (0, i.o)(this._client, e), this._buckets.clear();
    }
    close() {
        clearInterval(this._interval), this.flush();
    }
}
