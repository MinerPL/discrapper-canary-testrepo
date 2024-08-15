n.d(t, {
  P: function() {
return l;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(709014);
let r = {
disable: {
  name: 'disable',
  start: 0,
  duration: 70
},
enable: {
  name: 'enable',
  start: 100,
  duration: 70
},
hover_enabled: {
  name: 'hover_enabled',
  start: 200,
  duration: 70
},
hover_disabled: {
  name: 'hover_disabled',
  start: 300,
  duration: 70
}
  },
  l = e => {
let t = a.useRef(null),
  l = a.useRef(e),
  o = a.useMemo(() => () => {
    null != t.current && t.current.play(e);
  }, [e]),
  c = a.useCallback(() => {
    if (null == t.current)
      return;
    let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
    t.current.play(n);
  }, [e]),
  d = a.useCallback(() => {
    if (null == t.current)
      return;
    let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
    t.current.stopIfPlaying(n);
  }, [e]);
return {
  events: {
    onClick: o,
    onMouseEnter: c,
    onMouseLeave: d
  },
  play: o,
  Component: a.useCallback(e => (0, i.jsx)(s.L, {
    ...e,
    src: () => n.e('7584').then(n.t.bind(n, 883488, 19)),
    ref: t,
    initialAnimation: l.current,
    markers: r
  }), [])
};
  };