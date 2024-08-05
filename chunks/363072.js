n.d(t, {
  B: function() {
return o;
  }
});
var r = n(141106);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let a = e => '*' === e.charAt(e.length - 1) ? r.dQ.PrefixMatch : r.dQ.ExactMatch;
class s {
  _internalAdd(e, t, n) {
let r = e.charAt(0),
  i = this.suffix[r];
null == i && (i = new s(), this.suffix[r] = i, null != n ? i.value = n.slice(0, n.length - e.length + 1) : i.value = r), e.length > 1 && '*' !== e.charAt(1) ? i._internalAdd(e.substring(1), t, null != n ? n : e) : (i.strategy = a(t), i.isWord = !0);
  }
  add(e) {
this._internalAdd(e, e);
  }
  constructor() {
i(this, 'isWord', void 0), i(this, 'value', void 0), i(this, 'suffix', {}), i(this, 'strategy', void 0), this.isWord = null, this.value = null, this.suffix = {}, this.strategy = r.dQ.ExactMatch;
  }
}
class o {
  static fromSnapshot(e) {
let t = new o();
return t.trie = e.trie, t;
  }
  search(e) {
let t = this.trie,
  n = null,
  i = null,
  a = {};
for (let l = 0; l <= e.length; l++)
  if (n = e.charAt(l), (t = null != (i = t.suffix[n]) ? i : null != this.trie.suffix[n] ? this.trie.suffix[n] : this.trie).isWord) {
    var s, o;
    let n = t.strategy,
      i = l + 1 - (null !== (o = null === (s = t.value) || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0),
      u = l;
    if ((0, r.BD)(e, i, u, n)) {
      let t = (0, r.jO)(e, i, u, n);
      (null == a[t.start] || a[t.start].end < t.end) && (a[t.start] = t);
    }
  }
return a;
  }
  addWord(e) {
null == this.trie && (this.trie = new s()), this.trie.add(e);
  }
  addWords(e) {
e.forEach(e => this.addWord(e));
  }
  clear() {
this.trie = new s();
  }
  constructor() {
i(this, 'trie', void 0), this.trie = new s();
  }
}