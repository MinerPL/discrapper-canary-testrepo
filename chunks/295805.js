var r = {
'background-size': !0,
'background-position': !0,
border: !0,
'border-bottom': !0,
'border-left': !0,
'border-top': !0,
'border-right': !0,
'border-radius': !0,
'border-image': !0,
'border-width': !0,
'border-style': !0,
'border-color': !0,
'box-shadow': !0,
flex: !0,
margin: !0,
padding: !0,
outline: !0,
'transform-origin': !0,
transform: !0,
transition: !0
  },
  n = {
position: !0,
size: !0
  },
  i = {
padding: {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
},
margin: {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
},
background: {
  attachment: null,
  color: null,
  image: null,
  position: null,
  repeat: null
},
border: {
  width: null,
  style: null,
  color: null
},
'border-top': {
  width: null,
  style: null,
  color: null
},
'border-right': {
  width: null,
  style: null,
  color: null
},
'border-bottom': {
  width: null,
  style: null,
  color: null
},
'border-left': {
  width: null,
  style: null,
  color: null
},
outline: {
  width: null,
  style: null,
  color: null
},
'list-style': {
  type: null,
  position: null,
  image: null
},
transition: {
  property: null,
  duration: null,
  'timing-function': null,
  timingFunction: null,
  delay: null
},
animation: {
  name: null,
  duration: null,
  'timing-function': null,
  timingFunction: null,
  delay: null,
  'iteration-count': null,
  iterationCount: null,
  direction: null,
  'fill-mode': null,
  fillMode: null,
  'play-state': null,
  playState: null
},
'box-shadow': {
  x: 0,
  y: 0,
  blur: 0,
  spread: 0,
  color: null,
  inset: null
},
'text-shadow': {
  x: 0,
  y: 0,
  blur: null,
  color: null
}
  },
  o = {
border: {
  radius: 'border-radius',
  image: 'border-image',
  width: 'border-width',
  style: 'border-style',
  color: 'border-color'
},
'border-bottom': {
  width: 'border-bottom-width',
  style: 'border-bottom-style',
  color: 'border-bottom-color'
},
'border-top': {
  width: 'border-top-width',
  style: 'border-top-style',
  color: 'border-top-color'
},
'border-left': {
  width: 'border-left-width',
  style: 'border-left-style',
  color: 'border-left-color'
},
'border-right': {
  width: 'border-right-width',
  style: 'border-right-style',
  color: 'border-right-color'
},
background: {
  size: 'background-size',
  image: 'background-image'
},
font: {
  style: 'font-style',
  variant: 'font-variant',
  weight: 'font-weight',
  stretch: 'font-stretch',
  size: 'font-size',
  family: 'font-family',
  lineHeight: 'line-height',
  'line-height': 'line-height'
},
flex: {
  grow: 'flex-grow',
  basis: 'flex-basis',
  direction: 'flex-direction',
  wrap: 'flex-wrap',
  flow: 'flex-flow',
  shrink: 'flex-shrink'
},
align: {
  self: 'align-self',
  items: 'align-items',
  content: 'align-content'
},
grid: {
  'template-columns': 'grid-template-columns',
  templateColumns: 'grid-template-columns',
  'template-rows': 'grid-template-rows',
  templateRows: 'grid-template-rows',
  'template-areas': 'grid-template-areas',
  templateAreas: 'grid-template-areas',
  template: 'grid-template',
  'auto-columns': 'grid-auto-columns',
  autoColumns: 'grid-auto-columns',
  'auto-rows': 'grid-auto-rows',
  autoRows: 'grid-auto-rows',
  'auto-flow': 'grid-auto-flow',
  autoFlow: 'grid-auto-flow',
  row: 'grid-row',
  column: 'grid-column',
  'row-start': 'grid-row-start',
  rowStart: 'grid-row-start',
  'row-end': 'grid-row-end',
  rowEnd: 'grid-row-end',
  'column-start': 'grid-column-start',
  columnStart: 'grid-column-start',
  'column-end': 'grid-column-end',
  columnEnd: 'grid-column-end',
  area: 'grid-area',
  gap: 'grid-gap',
  'row-gap': 'grid-row-gap',
  rowGap: 'grid-row-gap',
  'column-gap': 'grid-column-gap',
  columnGap: 'grid-column-gap'
}
  };

function s(e, t, r, s, u) {
  if (!(i[t] || o[t]))
return [];
  var l = [];
  if (o[t] && (e = function(e, t, r, n) {
  for (var i in r) {
    var o = r[i];
    if (void 0 !== e[i] && (n || !t.prop(o))) {
      var s, u = a(((s = {})[o] = e[i], s), t)[o];
      n ? t.style.fallbacks[o] = u : t.style[o] = u;
    }
    delete e[i];
  }
  return e;
}(e, r, o[t], s)), Object.keys(e).length)
for (var c in i[t]) {
  if (e[c]) {
    Array.isArray(e[c]) ? l.push(null === n[c] ? e[c] : e[c].join(' ')) : l.push(e[c]);
    continue;
  }
  null != i[t][c] && l.push(i[t][c]);
}
  return !l.length || u ? l : [l];
}

function a(e, t, n) {
  for (var i in e) {
var o = e[i];
if (Array.isArray(o)) {
  if (!Array.isArray(o[0])) {
    if ('fallbacks' === i) {
      for (var u = 0; u < e.fallbacks.length; u++)
        e.fallbacks[u] = a(e.fallbacks[u], t, !0);
      continue;
    }
    e[i] = function e(t, r, n, i) {
      if (null == n[r])
        return t;
      if (0 === t.length)
        return [];
      if (Array.isArray(t[0]))
        return e(t[0], r, n, i);
      if ('object' == typeof t[0]) {
        var o, a, u;
        return o = t, a = r, u = i, o.map(function(e) {
          return s(e, a, u, !1, !0);
        });
      }
      return [t];
    }(o, i, r, t), !e[i].length && delete e[i];
  }
} else if ('object' == typeof o) {
  if ('fallbacks' === i) {
    e.fallbacks = a(e.fallbacks, t, !0);
    continue;
  }
  e[i] = s(o, i, t, n), !e[i].length && delete e[i];
} else
  '' === e[i] && delete e[i];
  }
  return e;
}
t.Z = function() {
  return {
onProcessStyle: function(e, t) {
  if (!e || 'style' !== t.type)
    return e;
  if (Array.isArray(e)) {
    for (var r = 0; r < e.length; r++)
      e[r] = a(e[r], t);
    return e;
  }
  return a(e, t);
}
  };
};