n.d(t, {
  B: function() {
return r;
  },
  Z: function() {
return d;
  }
}), n(653041), n(47120), n(411104);
var r, i, a = n(536895);

function o(e, t) {
  return e.findIndex(e => t === e.key);
}

function s(e) {
  return e.focusPath[e.focusPath.length - 1];
}

function l(e) {
  let t = e.items;
  for (let n = 0; n < e.focusPath.length - 1; n++) {
if (null == t)
  return;
let r = o(t, e.focusPath[n]);
t = t[r].children;
  }
  return t;
}

function u(e, t) {
  let n = e,
r = [];
  for (let e = 0; e < t.length && null != n; e++) {
let i = t[e],
  a = o(n, i);
if (a < 0 || a >= n.length) {
  let e = n[0];
  null != e && r.push(e.key);
  break;
}
r.push(i), n = n[a].children;
  }
  return r;
}
(i = r || (r = {})).UPDATE_ITEMS = 'UPDATE_ITEMS', i.SET_FOCUS_PATH = 'SET_FOCUS_PATH';

function c(e) {
  let t = s(e),
n = l(e);
  return null == n ? -1 : o(n, t);
}

function d(e, t) {
  switch (t.type) {
case a.Us.NAVIGATE_UP:
  return function(e, t) {
    let n = s(e),
      r = l(e);
    if (null == r)
      return e;
    let i = (o(r, n) - 1) % r.length;
    if (i < 0 && (i = r.length - 1), null == r[i])
      return e;
    let a = {
      ...e,
      focusPath: [
        ...e.focusPath.slice(0, -1),
        r[i].key
      ]
    };
    return {
      ...a,
      focusIndex: c(a)
    };
  }(e, 0);
case a.Us.NAVIGATE_DOWN:
  return function(e, t) {
    let n = s(e),
      r = l(e);
    if (null == r)
      return e;
    let i = (o(r, n) + 1) % r.length;
    if (null == r[i])
      return e;
    let a = {
      ...e,
      focusPath: [
        ...e.focusPath.slice(0, -1),
        r[i].key
      ]
    };
    return {
      ...a,
      focusIndex: c(a)
    };
  }(e, 0);
case a.Us.NAVIGATE_IN:
  return function(e, t) {
    var n;
    let r = s(e),
      i = l(e);
    if (null == i)
      return e;
    let a = i[o(i, r)],
      u = null == a ? void 0 : null === (n = a.children) || void 0 === n ? void 0 : n[0];
    if (null == u)
      return e;
    let d = {
      ...e,
      focusPath: [
        ...e.focusPath,
        u.key
      ]
    };
    return {
      ...d,
      focusIndex: c(d)
    };
  }(e, 0);
case a.Us.NAVIGATE_OUT:
  return function(e, t) {
    if (e.focusPath.length <= 1)
      return e;
    let n = {
      ...e,
      focusPath: e.focusPath.slice(0, -1)
    };
    return {
      ...n,
      focusIndex: c(n)
    };
  }(e, 0);
case 'UPDATE_ITEMS':
  return function(e, t) {
    let {
      items: n
    } = t, r = {
      ...e,
      items: n,
      focusPath: u(n, e.focusPath)
    };
    return {
      ...r,
      focusIndex: c(r)
    };
  }(e, t);
case 'SET_FOCUS_PATH':
  return function(e, t) {
    let {
      path: n
    } = t, r = {
      ...e,
      focusPath: u(e.items, n)
    };
    return {
      ...r,
      focusIndex: c(r)
    };
  }(e, t);
case a.Us.SELECT_FOCUSED_ITEM:
  break;
default:
  throw Error('Menu navigator was given an unhandled action '.concat(t.type));
  }
  return e;
}