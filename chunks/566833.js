n.d(t, {
  D: function() {
return c;
  }
});
var r = n(470079),
  i = n(699581),
  a = n(978008),
  s = n(427753),
  o = n.n(s),
  l = n(705942),
  u = [],
  c = function(e, t, n) {
void 0 === n && (n = {});
var s = r.useRef(null),
  c = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || 'bottom',
    strategy: n.strategy || 'absolute',
    modifiers: n.modifiers || u
  },
  d = r.useState({
    styles: {
      popper: {
        position: c.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
  _ = d[0],
  E = d[1],
  f = r.useMemo(function() {
    return {
      name: 'updateState',
      enabled: !0,
      phase: 'write',
      fn: function(e) {
        var t = e.state,
          n = Object.keys(t.elements);
        i.flushSync(function() {
          E({
            styles: (0, l.sq)(n.map(function(e) {
              return [
                e,
                t.styles[e] || {}
              ];
            })),
            attributes: (0, l.sq)(n.map(function(e) {
              return [
                e,
                t.attributes[e]
              ];
            }))
          });
        });
      },
      requires: ['computeStyles']
    };
  }, []),
  h = r.useMemo(function() {
    var e = {
      onFirstUpdate: c.onFirstUpdate,
      placement: c.placement,
      strategy: c.strategy,
      modifiers: [].concat(c.modifiers, [
        f,
        {
          name: 'applyStyles',
          enabled: !1
        }
      ])
    };
    return o()(s.current, e) ? s.current || e : (s.current = e, e);
  }, [
    c.onFirstUpdate,
    c.placement,
    c.strategy,
    c.modifiers,
    f
  ]),
  p = r.useRef();
return (0, l.LI)(function() {
  p.current && p.current.setOptions(h);
}, [h]), (0, l.LI)(function() {
  if (null != e && null != t) {
    var r = (n.createPopper || a.fi)(e, t, h);
    return p.current = r,
      function() {
        r.destroy(), p.current = null;
      };
  }
}, [
  e,
  t,
  n.createPopper
]), {
  state: p.current ? p.current.state : null,
  styles: _.styles,
  attributes: _.attributes,
  update: p.current ? p.current.update : null,
  forceUpdate: p.current ? p.current.forceUpdate : null
};
  };