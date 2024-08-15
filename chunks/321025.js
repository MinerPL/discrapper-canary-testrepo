n.d(t, {
  Z: function() {
return l;
  }
});
var s = n(735250),
  o = n(470079),
  a = n(338545),
  r = n(613087);

function l(e) {
  let {
expansionSpring: t,
isExpanded: n
  } = e, {
animatedComponentProps: l,
recalculateAnimationPositions: i,
mountPoints: c
  } = o.useContext(r.B$);
  return o.useEffect(() => {
i();
  }, [
i,
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
children: l.map(e => {
  let {
    id: n,
    collapsedLeft: o,
    expandedLeft: r,
    collapsedTop: l,
    expandedTop: i,
    width: d
  } = e, u = c.get(n);
  return (0, s.jsx)(a.animated.div, {
    ref: u,
    style: {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      width: d,
      transform: (0, a.to)([
        t.to({
          range: [
            0,
            1
          ],
          output: [
            o,
            r
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