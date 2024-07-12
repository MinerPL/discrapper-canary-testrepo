var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(829307),
  l = n(464854),
  u = n(588945),
  c = n(740622),
  d = n(698842),
  _ = function(e) {
var t = e.width,
  n = e.onChange,
  i = e.disableAlpha,
  a = e.rgb,
  _ = e.hsl,
  E = e.hsv,
  f = e.hex,
  h = e.renderers,
  p = e.styles,
  m = e.className,
  I = e.defaultView,
  T = (0, o.default)((0, s.Z)({
    default: {
      picker: {
        width: t,
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + a.r + ', ' + a.g + ', ' + a.b + ', ' + a.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    disableAlpha: {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, void 0 === p ? {} : p), {
    disableAlpha: i
  });
return r.createElement('div', {
  style: T.picker,
  className: 'chrome-picker ' + (void 0 === m ? '' : m)
}, r.createElement('div', {
  style: T.saturation
}, r.createElement(l.OQ, {
  style: T.Saturation,
  hsl: _,
  hsv: E,
  pointer: d.Z,
  onChange: n
})), r.createElement('div', {
  style: T.body
}, r.createElement('div', {
  style: T.controls,
  className: 'flexbox-fix'
}, r.createElement('div', {
  style: T.color
}, r.createElement('div', {
  style: T.swatch
}, r.createElement('div', {
  style: T.active
}), r.createElement(l.QN, {
  renderers: h
}))), r.createElement('div', {
  style: T.toggles
}, r.createElement('div', {
  style: T.hue
}, r.createElement(l.PS, {
  style: T.Hue,
  hsl: _,
  pointer: c.Z,
  onChange: n
})), r.createElement('div', {
  style: T.alpha
}, r.createElement(l.xV, {
  style: T.Alpha,
  rgb: a,
  hsl: _,
  pointer: c.Z,
  renderers: h,
  onChange: n
})))), r.createElement(u.Z, {
  rgb: a,
  hsl: _,
  hex: f,
  view: I,
  onChange: n,
  disableAlpha: i
})));
  };
_.propTypes = {
  width: a().oneOfType([
a().string,
a().number
  ]),
  disableAlpha: a().bool,
  styles: a().object,
  defaultView: a().oneOf([
'hex',
'rgb',
'hsl'
  ])
}, _.defaultProps = {
  width: 225,
  disableAlpha: !1,
  styles: {}
}, (0, l.t1)(_);