n.d(t, {
  W3: function() {
return u;
  },
  pJ: function() {
return r;
  }
}), n(47120), n(653041);
var r, i, a = n(735250),
  o = n(470079);
(i = r || (r = {}))[i.MOUNTED = 0] = 'MOUNTED', i[i.ENTERED = 1] = 'ENTERED', i[i.YEETED = 2] = 'YEETED';
let s = {};

function l(e) {
  return e;
}

function u(e) {
  let {
items: t,
renderItem: n,
getItemKey: r,
wrapChildren: i = l,
lazyCleanUpDelay: u
  } = e, c = o.useRef(-1);
  o.useLayoutEffect(() => () => clearTimeout(c.current));
  let [, d] = o.useState(s), _ = o.useRef(null), E = o.useMemo(() => {
var e;
let i = new Set(null === (e = _.current) || void 0 === e ? void 0 : e.keys()),
  a = new Map(_.current);
for (let e of t) {
  let t = r(e),
    o = a.get(t);
  if (null == o) {
    let r = null != _.current ? 1 : 0,
      i = () => {
        var e, n;
        let r = null === (e = _.current) || void 0 === e ? void 0 : e.get(t);
        null == r || (2 === r.state ? (null === (n = _.current) || void 0 === n || n.delete(t), null != u ? (clearTimeout(c.current), c.current = setTimeout(() => d({}), u)) : d({})) : __DEV__ && console.warn('SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn\'t yeetable: '.concat(t)));
      },
      a = n(t, e, r, i);
    o = {
      item: e,
      children: a,
      state: r,
      cleanUp: i,
      renderItem: n
    };
  } else if (o.item !== e || o.renderItem !== n || 2 === o.state) {
    let {
      cleanUp: r
    } = o, i = 2 === o.state ? 1 : o.state, a = n(t, e, i, o.cleanUp);
    o = {
      item: e,
      children: a,
      state: i,
      cleanUp: r,
      renderItem: n
    };
  }
  a.set(t, o), i.delete(t);
}
for (let e of i) {
  let t = a.get(e);
  if (null != t) {
    if (2 !== t.state || t.renderItem !== n) {
      let {
        item: r,
        cleanUp: i
      } = t, o = n(e, t.item, 2, t.cleanUp);
      null != (t = {
        item: r,
        children: o,
        state: 2,
        cleanUp: i,
        renderItem: n
      }).children ? a.set(e, t) : a.delete(e);
    } else
      a.set(e, t);
  }
}
return a;
  }, [
t,
r,
n,
u
  ]);
  o.useInsertionEffect(() => (_.current = E, () => {
var e;
return null === (e = _.current) || void 0 === e ? void 0 : e.clear();
  }), [E]);
  let f = [];
  for (let [, e] of E)
f.push(e.children);
  return (0, a.jsx)(a.Fragment, {
children: f.length > 0 ? i(f) : null
  });
}