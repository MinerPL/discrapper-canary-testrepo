n.d(t, {
  V: function() {
return s;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(709014);
let o = {
click: {
  name: 'click',
  start: 0,
  duration: 66
},
hover: {
  name: 'hover',
  start: 90,
  duration: 40
}
  },
  s = () => {
let e = i.useRef(null),
  t = i.useCallback(() => {
    null != e.current && e.current.play('click');
  }, []),
  s = i.useCallback(() => {
    null != e.current && e.current.play('hover');
  }, []),
  l = i.useCallback(() => {
    null != e.current && e.current.stopIfPlaying('hover');
  }, []);
return {
  events: {
    onMouseEnter: s,
    onMouseLeave: l
  },
  play: t,
  Component: i.useCallback(t => (0, r.jsx)(a.L, {
    ...t,
    src: () => n.e('37655').then(n.t.bind(n, 119493, 19)),
    ref: e,
    markers: o
  }), [])
};
  };