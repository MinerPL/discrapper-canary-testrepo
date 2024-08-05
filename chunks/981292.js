n.d(t, {
  W3: function() {
return u;
  },
  pJ: function() {
return r;
  }
}), n(47120), n(653041);
var r, i, a = n(735250),
  s = n(470079);
(i = r || (r = {}))[i.MOUNTED = 0] = 'MOUNTED', i[i.ENTERED = 1] = 'ENTERED', i[i.YEETED = 2] = 'YEETED';
let o = {};

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
  } = e, c = s.useRef(-1);
  s.useLayoutEffect(() => () => clearTimeout(c.current));
  let [, d] = s.useState(o), _ = s.useRef(null), E = s.useMemo(() => {
var e;
let i = new Set(null === (e = _.current) || void 0 === e ? void 0 : e.keys()),
  a = new Map(_.current);
for (let e of t) {
  let t = r(e),
    s = a.get(t);
  if (null == s) {
    let r = null != _.current ? 1 : 0,
      i = () => {
        var e, n;
        let r = null === (e = _.current) || void 0 === e ? void 0 : e.get(t);
        null == r || (2 === r.state ? (null === (n = _.current) || void 0 === n || n.delete(t), null != u ? (clearTimeout(c.current), c.current = setTimeout(() => d({}), u)) : d({})) : __DEV__ && console.warn('SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn\'t yeetable: '.concat(t)));
      },
      a = n(t, e, r, i);
    s = {
      item: e,
      children: a,
      state: r,
      cleanUp: i,
      renderItem: n
    };
  } else if (s.item !== e || s.renderItem !== n || 2 === s.state) {
    let {
      cleanUp: r
    } = s, i = 2 === s.state ? 1 : s.state, a = n(t, e, i, s.cleanUp);
    s = {
      item: e,
      children: a,
      state: i,
      cleanUp: r,
      renderItem: n
    };
  }
  a.set(t, s), i.delete(t);
}
for (let e of i) {
  let t = a.get(e);
  if (null != t) {
    if (2 !== t.state || t.renderItem !== n) {
      let {
        item: r,
        cleanUp: i
      } = t, s = n(e, t.item, 2, t.cleanUp);
      null != (t = {
        item: r,
        children: s,
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
  s.useInsertionEffect(() => (_.current = E, () => {
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