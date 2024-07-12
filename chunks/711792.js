n.d(t, {
  hp: function() {
return d;
  },
  xD: function() {
return u;
  }
});
var r = n(182823),
  i = n(148836),
  a = n(470079),
  o = n(616073);
let s = new WeakMap();

function l(e, t, n) {
  'string' == typeof t && (t = t.replace(/\s+/g, ''));
  let r = s.get(e);
  return `${ r }-${ n }-${ t }`;
}

function u(e, t, n) {
  var a;
  let {
key: o,
isDisabled: s,
shouldSelectOnPressUp: u
  } = e, {
selectionManager: c,
selectedKey: d
  } = t, _ = o === d, E = s || t.isDisabled || t.disabledKeys.has(o), {
itemProps: f,
isPressed: h
  } = (0, i.Cs)({
selectionManager: c,
key: o,
ref: n,
isDisabled: E,
shouldSelectOnPressUp: u,
linkBehavior: 'selection'
  }), p = l(t, o, 'tab'), m = l(t, o, 'tabpanel'), {
tabIndex: I
  } = f, T = t.collection.getItem(o), g = (0, r.zL)(null == T ? void 0 : T.props, {
isLink: !!(null == T ? void 0 : null === (a = T.props) || void 0 === a ? void 0 : a.href),
labelable: !0
  });
  return delete g.id, {
tabProps: (0, r.dG)(g, f, {
  id: p,
  'aria-selected': _,
  'aria-disabled': E || void 0,
  'aria-controls': _ ? m : void 0,
  tabIndex: E ? void 0 : I,
  role: 'tab'
}),
isSelected: _,
isDisabled: E,
isPressed: h
  };
}
class c {
  getKeyLeftOf(e) {
return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
  }
  getKeyRightOf(e) {
return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
  }
  getKeyAbove(e) {
return this.getPreviousKey(e);
  }
  getKeyBelow(e) {
return this.getNextKey(e);
  }
  getFirstKey() {
let e = this.collection.getFirstKey();
return null != e && this.disabledKeys.has(e) && (e = this.getNextKey(e)), e;
  }
  getLastKey() {
let e = this.collection.getLastKey();
return null != e && this.disabledKeys.has(e) && (e = this.getPreviousKey(e)), e;
  }
  getNextKey(e) {
do
  null == (e = this.collection.getKeyAfter(e)) && (e = this.collection.getFirstKey());
while (this.disabledKeys.has(e));
return e;
  }
  getPreviousKey(e) {
do
  null == (e = this.collection.getKeyBefore(e)) && (e = this.collection.getLastKey());
while (this.disabledKeys.has(e));
return e;
  }
  constructor(e, t, n, r = new Set()) {
this.collection = e, this.flipDirection = 'rtl' === t && 'horizontal' === n, this.disabledKeys = r;
  }
}

function d(e, t, n) {
  let {
orientation: l = 'horizontal',
keyboardActivation: u = 'automatic'
  } = e, {
collection: d,
selectionManager: _,
disabledKeys: E
  } = t, {
direction: f
  } = (0, o.bU)(), h = (0, a.useMemo)(() => new c(d, f, l, E), [
d,
E,
l,
f
  ]), {
collectionProps: p
  } = (0, i.gq)({
ref: n,
selectionManager: _,
keyboardDelegate: h,
selectOnFocus: 'automatic' === u,
disallowEmptySelection: !0,
scrollRef: n,
linkBehavior: 'selection'
  }), m = (0, r.Me)();
  s.set(t, m);
  let I = (0, r.bE)({
...e,
id: m
  });
  return {
tabListProps: {
  ...(0, r.dG)(p, I),
  role: 'tablist',
  'aria-orientation': l,
  tabIndex: void 0
}
  };
}