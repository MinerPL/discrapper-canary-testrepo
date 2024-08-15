t.d(s, {
  Z: function() {
return r;
  }
}), t(47120), t(653041);
var n = t(658722),
  a = t.n(n);

function i(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
class r {
  search(e) {
return new Promise(s => {
  s(this.getMatchingSettings(e));
});
  }
  getMatchingSettings(e) {
let s = this.cache[e];
if (null != s)
  return s;
{
  let s = [];
  return this.terms.forEach(t => {
    let [n, i] = t;
    for (let t of i)
      if (a()(e.toLowerCase(), t.toLowerCase())) {
        s.push(n);
        break;
      }
  }), this.cache[e] = s, s;
}
  }
  constructor(e) {
i(this, 'terms', void 0), i(this, 'cache', void 0), this.terms = e, this.cache = {};
  }
}