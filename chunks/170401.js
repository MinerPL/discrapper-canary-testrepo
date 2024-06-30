s.d(t, {
    Z: function () {
        return r;
    }
}), s(47120), s(653041);
var n = s(658722), a = s.n(n);
function i(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e;
}
class r {
    search(e) {
        return new Promise(t => {
            t(this.getMatchingSettings(e));
        });
    }
    getMatchingSettings(e) {
        let t = this.cache[e];
        if (null != t)
            return t;
        {
            let t = [];
            return this.terms.forEach(s => {
                let [n, i] = s;
                for (let s of i)
                    if (a()(e.toLowerCase(), s.toLowerCase())) {
                        t.push(n);
                        break;
                    }
            }), this.cache[e] = t, t;
        }
    }
    constructor(e) {
        i(this, 'terms', void 0), i(this, 'cache', void 0), this.terms = e, this.cache = {};
    }
}
