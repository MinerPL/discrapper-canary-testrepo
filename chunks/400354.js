n.d(t, {
  l: function() {
return l;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(709014);
let r = {
deafen: {
  name: 'deafen',
  start: 0,
  duration: 70
},
undeafen: {
  name: 'undeafen',
  start: 110,
  duration: 70
},
hover_undeafened: {
  name: 'hover_undeafened',
  start: 200,
  duration: 70
},
hover_deafened: {
  name: 'hover_deafened',
  start: 300,
  duration: 70
}
  },
  l = e => {
let t = s.useRef(null),
  l = s.useRef(e),
  o = s.useMemo(() => () => {
    null != t.current && t.current.play(e);
  }, [e]),
  c = s.useCallback(() => {
    if (null == t.current)
      return;
    let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
    t.current.play(n);
  }, [e]),
  d = s.useCallback(() => {
    if (null == t.current)
      return;
    let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
    t.current.stopIfPlaying(n);
  }, [e]);
return {
  events: {
    onClick: o,
    onMouseEnter: c,
    onMouseLeave: d
  },
  play: o,
  Component: s.useCallback(e => (0, i.jsx)(a.L, {
    ...e,
    src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
    ref: t,
    initialAnimation: l.current,
    markers: r
  }), [])
};
  };