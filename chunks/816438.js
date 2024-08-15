n.d(t, {
  kZ: function() {
return E;
  }
});
var r = n(4313),
  i = n(493623),
  a = n(620720),
  s = n(343713),
  o = n(540321),
  l = n(609027),
  u = n(375317),
  c = n(882159),
  d = {
placement: 'bottom',
modifiers: [],
strategy: 'absolute'
  };

function _() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
t[n] = arguments[n];
  return !t.some(function(e) {
return !(e && 'function' == typeof e.getBoundingClientRect);
  });
}

function E(e) {
  void 0 === e && (e = {});
  var t = e,
n = t.defaultModifiers,
E = void 0 === n ? [] : n,
f = t.defaultOptions,
h = void 0 === f ? d : f;
  return function(e, t, n) {
void 0 === n && (n = h);
var f = {
    placement: 'bottom',
    orderedModifiers: [],
    options: Object.assign({}, d, h),
    modifiersData: {},
    elements: {
      reference: e,
      popper: t
    },
    attributes: {},
    styles: {}
  },
  p = [],
  m = !1,
  I = {
    state: f,
    setOptions: function(n) {
      var r = 'function' == typeof n ? n(f.options) : n;
      T(), f.options = Object.assign({}, h, f.options, r), f.scrollParents = {
        reference: (0, c.kK)(e) ? (0, a.Z)(e) : e.contextElement ? (0, a.Z)(e.contextElement) : [],
        popper: (0, a.Z)(t)
      };
      var i = (0, o.Z)((0, u.Z)([].concat(E, f.options.modifiers)));
      return f.orderedModifiers = i.filter(function(e) {
          return e.enabled;
        }),
        function() {
          f.orderedModifiers.forEach(function(e) {
            var t = e.name,
              n = e.options,
              r = e.effect;
            if ('function' == typeof r) {
              var i = r({
                state: f,
                name: t,
                instance: I,
                options: void 0 === n ? {} : n
              });
              p.push(i || function() {});
            }
          });
        }(), I.update();
    },
    forceUpdate: function() {
      if (m)
        return;
      var e = f.elements,
        t = e.reference,
        n = e.popper;
      if (!!_(t, n)) {
        f.rects = {
          reference: (0, r.Z)(t, (0, s.Z)(n), 'fixed' === f.options.strategy),
          popper: (0, i.Z)(n)
        }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(e) {
          return f.modifiersData[e.name] = Object.assign({}, e.data);
        });
        for (var a = 0; a < f.orderedModifiers.length; a++) {
          if (!0 === f.reset) {
            f.reset = !1, a = -1;
            continue;
          }
          var o = f.orderedModifiers[a],
            l = o.fn,
            u = o.options,
            c = void 0 === u ? {} : u,
            d = o.name;
          'function' == typeof l && (f = l({
            state: f,
            options: c,
            name: d,
            instance: I
          }) || f);
        }
      }
    },
    update: (0, l.Z)(function() {
      return new Promise(function(e) {
        I.forceUpdate(), e(f);
      });
    }),
    destroy: function() {
      T(), m = !0;
    }
  };
if (!_(e, t))
  return I;
I.setOptions(n).then(function(e) {
  !m && n.onFirstUpdate && n.onFirstUpdate(e);
});

function T() {
  p.forEach(function(e) {
    return e();
  }), p = [];
}
return I;
  };
}