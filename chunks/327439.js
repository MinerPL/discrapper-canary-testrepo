n.d(t, {
  T: function() {
return g;
  }
});
var r = n(313694);

function i(e, t, n) {
  (function(e, t) {
if (t.has(e))
  throw TypeError('Cannot initialize the same private elements twice on an object');
  }(e, t), t.set(e, n));
}

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function o(e, t) {
  var n = l(e, t, 'get');
  return function(e, t) {
return t.get ? t.get.call(e) : t.value;
  }(e, n);
}

function s(e, t, n) {
  var r = l(e, t, 'set');
  return function(e, t, n) {
if (t.set)
  t.set.call(e, n);
else {
  if (!t.writable)
    throw TypeError('attempted to set read only private field');
  t.value = n;
}
  }(e, r, n), n;
}

function l(e, t, n) {
  if (!t.has(e))
throw TypeError('attempted to ' + n + ' private field on non-instance');
  return t.get(e);
}
var u = new WeakMap(),
  c = new WeakMap(),
  d = new WeakMap(),
  _ = new WeakMap(),
  E = new WeakMap(),
  f = new WeakMap(),
  h = new WeakMap(),
  p = new WeakMap(),
  m = new WeakMap(),
  I = new WeakMap(),
  T = new WeakMap();
class g {
  constructor(e, t, n) {
if (i(this, u, {
    writable: !0,
    value: void 0
  }), i(this, c, {
    writable: !0,
    value: void 0
  }), i(this, d, {
    writable: !0,
    value: void 0
  }), i(this, _, {
    writable: !0,
    value: void 0
  }), i(this, E, {
    writable: !0,
    value: void 0
  }), i(this, f, {
    writable: !0,
    value: (e, t, n) => {
      var r, i;
      if (!n.backend)
        throw Error('You must specify a \'backend\' property in your Backend entry: '.concat(JSON.stringify(n)));
      let a = n.backend(e, t, n.options),
        s = n.id,
        l = !n.id && a && a.constructor;
      if (l && (s = a.constructor.name), s)
        l && console.warn('Deprecation notice: You are using a pipeline which doesn\'t include backends\' \'id\'.\n        This might be unsupported in the future, please specify \'id\' explicitely for every backend.');
      else
        throw Error('You must specify an \'id\' property in your Backend entry: '.concat(JSON.stringify(n), '\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-5xx'));
      if (o(this, d)[s])
        throw Error('You must specify a unique \'id\' property in your Backend entry:\n        '.concat(JSON.stringify(n), ' (conflicts with: ').concat(JSON.stringify(o(this, d)[s]), ')'));
      return {
        id: s,
        instance: a,
        preview: null !== (r = n.preview) && void 0 !== r && r,
        transition: n.transition,
        skipDispatchOnTransition: null !== (i = n.skipDispatchOnTransition) && void 0 !== i && i
      };
    }
  }), a(this, 'setup', () => {
    if ('undefined' != typeof window) {
      if (g.isSetUp)
        throw Error('Cannot have two MultiBackends at the same time.');
      g.isSetUp = !0, o(this, h).call(this, window), o(this, d)[o(this, u)].instance.setup();
    }
  }), a(this, 'teardown', () => {
    if ('undefined' != typeof window)
      g.isSetUp = !1, o(this, p).call(this, window), o(this, d)[o(this, u)].instance.teardown();
  }), a(this, 'connectDragSource', (e, t, n) => o(this, T).call(this, 'connectDragSource', e, t, n)), a(this, 'connectDragPreview', (e, t, n) => o(this, T).call(this, 'connectDragPreview', e, t, n)), a(this, 'connectDropTarget', (e, t, n) => o(this, T).call(this, 'connectDropTarget', e, t, n)), a(this, 'profile', () => o(this, d)[o(this, u)].instance.profile()), a(this, 'previewEnabled', () => o(this, d)[o(this, u)].preview), a(this, 'previewsList', () => o(this, c)), a(this, 'backendsList', () => o(this, _)), i(this, h, {
    writable: !0,
    value: e => {
      o(this, _).forEach(t => {
        t.transition && e.addEventListener(t.transition.event, o(this, m));
      });
    }
  }), i(this, p, {
    writable: !0,
    value: e => {
      o(this, _).forEach(t => {
        t.transition && e.removeEventListener(t.transition.event, o(this, m));
      });
    }
  }), i(this, m, {
    writable: !0,
    value: e => {
      let t = o(this, u);
      if (o(this, _).some(t => !!(t.id !== o(this, u) && t.transition && t.transition.check(e)) && (s(this, u, t.id), !0)), o(this, u) !== t) {
        var n;
        o(this, d)[t].instance.teardown(), Object.keys(o(this, E)).forEach(e => {
          let t = o(this, E)[e];
          t.unsubscribe(), t.unsubscribe = o(this, I).call(this, t.func, ...t.args);
        }), o(this, c).backendChanged(this);
        let r = o(this, d)[o(this, u)];
        if (r.instance.setup(), r.skipDispatchOnTransition)
          return;
        let i = new e.constructor(e.type, e);
        null === (n = e.target) || void 0 === n || n.dispatchEvent(i);
      }
    }
  }), i(this, I, {
    writable: !0,
    value: (e, t, n, r) => o(this, d)[o(this, u)].instance[e](t, n, r)
  }), i(this, T, {
    writable: !0,
    value: (e, t, n, r) => {
      let i = ''.concat(e, '_').concat(t),
        a = o(this, I).call(this, e, t, n, r);
      return o(this, E)[i] = {
        func: e,
        args: [
          t,
          n,
          r
        ],
        unsubscribe: a
      }, () => {
        o(this, E)[i].unsubscribe(), delete o(this, E)[i];
      };
    }
  }), !n || !n.backends || n.backends.length < 1)
  throw Error('You must specify at least one Backend, if you are coming from 2.x.x (or don\'t understand this error)\n        see this guide: https://github.com/louisbrunner/dnd-multi-backend/tree/master/packages/react-dnd-multi-backend#migrating-from-2xx');
s(this, c, new r.J()), s(this, d, {}), s(this, _, []), n.backends.forEach(n => {
  let r = o(this, f).call(this, e, t, n);
  o(this, d)[r.id] = r, o(this, _).push(r);
}), s(this, u, o(this, _)[0].id), s(this, E, {});
  }
}
a(g, 'isSetUp', !1);