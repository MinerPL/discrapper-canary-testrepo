n.d(t, {
  D: function() {
return l;
  }
});
var r = n(470079),
  i = n(721535),
  a = n(275857),
  s = n(697898);
class o {
  *[Symbol.iterator]() {
yield* this.iterable;
  }
  get size() {
return this.keyMap.size;
  }
  getKeys() {
return this.keyMap.keys();
  }
  getKeyBefore(e) {
let t = this.keyMap.get(e);
return t ? t.prevKey : null;
  }
  getKeyAfter(e) {
let t = this.keyMap.get(e);
return t ? t.nextKey : null;
  }
  getFirstKey() {
return this.firstKey;
  }
  getLastKey() {
return this.lastKey;
  }
  getItem(e) {
return this.keyMap.get(e);
  }
  at(e) {
let t = [...this.getKeys()];
return this.getItem(t[e]);
  }
  constructor(e, {
expandedKeys: t
  } = {}) {
let n;
this.keyMap = new Map(), this.iterable = e, t = t || new Set();
let r = e => {
  if (this.keyMap.set(e.key, e), e.childNodes && ('section' === e.type || t.has(e.key)))
    for (let t of e.childNodes)
      r(t);
};
for (let t of e)
  r(t);
let i = 0;
for (let [e, t] of this.keyMap)
  n ? (n.nextKey = e, t.prevKey = n.key) : (this.firstKey = e, t.prevKey = void 0), 'item' === t.type && (t.index = i++), (n = t).nextKey = void 0;
this.lastKey = null == n ? void 0 : n.key;
  }
}

function l(e) {
  let [t, n] = (0, s.zk)(e.expandedKeys ? new Set(e.expandedKeys) : void 0, e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), e.onExpandedChange), l = (0, i.q)(e), u = (0, r.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set(), [e.disabledKeys]), c = (0, a.Kx)(e, (0, r.useCallback)(e => new o(e, {
expandedKeys: t
  }), [t]), null);
  return (0, r.useEffect)(() => {
null != l.focusedKey && !c.getItem(l.focusedKey) && l.setFocusedKey(null);
  }, [
c,
l.focusedKey
  ]), {
collection: c,
expandedKeys: t,
disabledKeys: u,
toggleKey: e => {
  n(function(e, t) {
    let n = new Set(e);
    return n.has(t) ? n.delete(t) : n.add(t), n;
  }(t, e));
},
setExpandedKeys: n,
selectionManager: new i.Z(c, l)
  };
}