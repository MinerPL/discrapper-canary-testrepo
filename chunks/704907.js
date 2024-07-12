n(653041), n(47120);
var r = n(392711),
  i = n.n(r),
  a = n(913527),
  o = n.n(a);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
t.Z = class e {
  overwriteHistory(e, t) {
this.usageHistory = i().mapValues(null != e ? e : {}, e => ({
  ...e,
  frecency: -1
})), null == t || t.forEach(e => {
  let {
    key: t,
    timestamp: n
  } = e;
  return this.track(t, n);
}), this.markDirty();
  }
  markDirty() {
this.dirty = !0;
  }
  isDirty() {
return this.dirty;
  }
  track(e, t) {
if (null == e)
  return;
let n = Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0;
if (null == n)
  n = {
    totalUses: 1,
    recentUses: [null != t ? t : Date.now()],
    frecency: -1,
    score: 0
  };
else
  for (n.frecency = -1, n.totalUses += 1, null == t ? n.recentUses.push(Date.now()) : (n.recentUses.push(t), n.recentUses.sort()); n.recentUses.length > this.maxSamples;)
    n.recentUses.shift();
this.usageHistory[e] = n, this.markDirty();
  }
  getEntry(e) {
return null == e ? null : (this.dirty && this.compute(), Object.prototype.hasOwnProperty.call(this.usageHistory, e) ? this.usageHistory[e] : void 0);
  }
  getScore(e) {
let t = this.getEntry(e);
return null != t ? t.score : null;
  }
  getFrecency(e) {
let t = this.getEntry(e);
return null != t ? t.frecency : null;
  }
  compute() {
let e = o()();
i().forEach(this.usageHistory, (t, n) => {
  let {
    totalUses: r,
    recentUses: a,
    frecency: s
  } = t;
  if (-1 !== s)
    return;
  let l = this.computeBonus(n) / 100;
  t.score = 0, i().forEach(a, (n, r) => {
    if (r >= this.maxSamples)
      return !1;
    let i = this.computeWeight(e.diff(o()(n), 'days'));
    t.score += l * i;
  }), t.score > 0 ? (t.recentUses.length > 0 && (t.frecency = Math.ceil(r * (t.score / a.length))), this.usageHistory[n] = t) : delete this.usageHistory[n];
}), this.frequently = i()(this.usageHistory).map((e, t) => {
  let n = this.lookupKey(t);
  return null == n ? null : [
    n,
    e.frecency
  ];
}).filter(e => null !== e).sortBy(e => {
  let [t, n] = e;
  return -n;
}).map(e => {
  let [t] = e;
  return t;
}).take(this.numFrequentlyItems).value(), this.dirty = !1, this.afterCompute(this.usageHistory, this._frequently);
  }
  get frequently() {
return this.dirty && this.compute(), this._frequently;
  }
  set frequently(e) {
this._frequently = e;
  }
  constructor({
computeBonus: e,
computeWeight: t,
lookupKey: n,
afterCompute: r,
numFrequentlyItems: i = 32,
maxSamples: a = 10
  }) {
s(this, 'dirty', void 0), s(this, '_frequently', void 0), s(this, 'numFrequentlyItems', void 0), s(this, 'maxSamples', void 0), s(this, 'computeBonus', void 0), s(this, 'computeWeight', void 0), s(this, 'lookupKey', void 0), s(this, 'usageHistory', void 0), s(this, 'afterCompute', void 0), this.computeBonus = e, this.computeWeight = t, this.afterCompute = r, this.lookupKey = n, this.usageHistory = {}, this.frequently = [], this.maxSamples = a, this.numFrequentlyItems = i, this.dirty = !1;
  }
};