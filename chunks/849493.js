d.r(o), d.d(o, {
  default: function() {
return r;
  }
});
var e = d(735250);
d(470079);
var l = d(481060),
  n = d(915312);

function r() {
  return (0, n.bN)(document.body), (0, e.jsx)(l.HiddenVisually, {
children: (0, e.jsx)('svg', {
  'aria-hidden': !0,
  children: (0, e.jsxs)('filter', {
    id: 'violation-overlay',
    x: '0',
    y: '0',
    width: '100%',
    height: '100%',
    children: [
      (0, e.jsx)('feFlood', {
        floodColor: '#ff0000',
        floodOpacity: '0.3',
        result: 'floodFill'
      }),
      (0, e.jsx)('feBlend', {
        in: 'SourceGraphic',
        in2: 'floodFill',
        mode: 'overlay'
      })
    ]
  })
})
  });
}
d(77662);