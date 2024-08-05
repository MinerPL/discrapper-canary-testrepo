n.d(t, {
  Z: function() {
return i;
  }
});
var s = n(735250),
  o = n(470079),
  r = n(338545),
  a = n(130653),
  l = n(613087);

function i(e) {
  let {
expansionSpring: t,
isExpanded: n
  } = e, {
animatedComponentProps: i,
recalculateAnimationPositions: c
  } = o.useContext(l.B$), d = o.useContext(a.T);
  return o.useEffect(() => {
c();
  }, [
c,
n
  ]), (0, s.jsx)('div', {
style: {
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 5
},
children: i.map(e => {
  let {
    id: n,
    collapsedLeft: o,
    expandedLeft: a,
    collapsedTop: l,
    expandedTop: i,
    width: c
  } = e;
  return (0, s.jsx)(r.animated.div, {
    id: d ? 'quest-bar-v2-preview-' + n : 'quest-bar-v2-' + n,
    style: {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      width: c,
      transform: (0, r.to)([
        t.to({
          range: [
            0,
            1
          ],
          output: [
            o,
            a
          ]
        }),
        t.to({
          range: [
            0,
            1
          ],
          output: [
            l,
            i
          ]
        })
      ], (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)'))
    }
  }, n);
})
  });
}