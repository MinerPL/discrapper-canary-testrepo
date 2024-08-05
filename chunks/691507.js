var r = n(470079),
  i = n(476400),
  a = n.n(i),
  s = n(844303),
  o = n(464854),
  l = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
  var n = arguments[t];
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
}
return e;
  },
  u = function(e) {
var t = e.colors,
  n = e.onClick,
  i = void 0 === n ? function() {} : n,
  a = e.onSwatchHover,
  u = (0, s.default)({
    default: {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !t || !t.length
  }),
  c = function(e, t) {
    i({
      hex: e,
      source: 'hex'
    }, t);
  };
return r.createElement('div', {
  style: u.colors,
  className: 'flexbox-fix'
}, t.map(function(e) {
  var t = 'string' == typeof e ? {
      color: e
    } : e,
    n = '' + t.color + (t.title || '');
  return r.createElement('div', {
    key: n,
    style: u.swatchWrap
  }, r.createElement(o.m4, l({}, t, {
    style: u.swatch,
    onClick: c,
    onHover: a,
    focusStyle: {
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + t.color
    }
  })));
}));
  };
u.propTypes = {
  colors: a().arrayOf(a().oneOfType([
a().string,
a().shape({
  color: a().string,
  title: a().string
})
  ])).isRequired
}, t.Z = u;