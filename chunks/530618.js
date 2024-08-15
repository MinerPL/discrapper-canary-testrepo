n(47120);
var r = n(735250),
  i = n(470079),
  a = n(887024),
  s = n(675654);
t.Z = function(e) {
  let {
confettiTarget: t,
confettiCanvas: n,
confettiVelocityMultiplier: o,
sprites: l,
colors: u
  } = e, [c, d] = i.useState(null), _ = (0, a.uR)(n, c), [E, f] = i.useState(!1);
  return i.useEffect(() => {
let e = Array(10).fill(0);
return null != t && _.isReady && !E && (e = e.map((n, r) => setTimeout(() => {
  var n, i;
  r === e.length - 1 && f(!0), _.createMultipleConfetti((n = t.getBoundingClientRect(), i = null != (i = o) ? i : 1, {
    ...s.We,
    position: {
      type: 'static-random',
      minValue: {
        x: n.x,
        y: n.y
      },
      maxValue: {
        x: n.x + n.width,
        y: n.y + n.height / 2
      }
    },
    velocity: {
      type: 'static-random',
      minValue: {
        x: -100 * i,
        y: -50 * i
      },
      maxValue: {
        x: 100 * i,
        y: -300 * i
      }
    },
    dragCoefficient: {
      type: 'static',
      value: 0.0001
    }
  }), 50);
}, 100 * r))), () => {
  for (let t of e)
    clearTimeout(t);
};
  }, [
_,
t,
E,
o
  ]), (0, r.jsx)(a.Ji, {
ref: d,
sprites: null != l ? l : s.CA,
colors: null != u ? u : s.Br,
spriteWidth: s.Ko,
spriteHeight: s.Ko
  });
};