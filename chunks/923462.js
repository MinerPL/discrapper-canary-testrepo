n.d(t, {
  j: function() {
return l;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(709014);
let r = {
all: {
  name: 'all',
  start: 0,
  duration: 66
}
  },
  l = () => {
let e = s.useRef(null),
  t = s.useCallback(() => {
    null != e.current && e.current.play('all');
  }, []),
  l = s.useCallback(() => {
    null != e.current && e.current.play('all');
  }, []),
  o = s.useCallback(() => {
    null != e.current && e.current.stopIfPlaying('all');
  }, []);
return {
  events: {
    onClick: t,
    onMouseEnter: l,
    onMouseLeave: o
  },
  play: t,
  Component: s.useCallback(t => (0, i.jsx)(a.L, {
    ...t,
    src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
    ref: e,
    markers: r
  }), [])
};
  };