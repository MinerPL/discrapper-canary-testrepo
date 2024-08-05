n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(846519),
  u = n(285952),
  c = n(278456);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function _(e) {
  let {
percentage: t,
isSingleLine: n
  } = e;
  return (0, i.jsx)('div', {
className: o()({
  [c.bar]: n,
  [c.barInMultiLine]: !n
}),
children: (0, i.jsx)('div', {
  className: c.barInner,
  style: {
    width: ''.concat(100 * Math.max(Math.min(t, 1), 0), '%')
  }
})
  });
}

function E(e) {
  return String(e).padStart(2, '0');
}

function f(e) {
  let {
time: t,
padLargestUnit: n
  } = e, r = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, a = Math.floor(t / 3600);
  return 0 === a ? n ? ''.concat(E(i), ':').concat(E(r)) : ''.concat(i, ':').concat(E(r)) : n ? ''.concat(E(a), ':').concat(E(i), ':').concat(E(r)) : ''.concat(a, ':').concat(E(i), ':').concat(E(r));
}
class h extends(r = a.PureComponent) {
  componentDidMount() {
this.timer.start(500, () => {
  this.setState({
    now: Date.now()
  });
});
  }
  componentWillUnmount() {
this.timer.stop();
  }
  render() {
let {
  start: e,
  end: t,
  className: n,
  themed: r,
  singleLine: a = !1
} = this.props, {
  now: s
} = this.state, l = (t - e) / 1000, d = Math.max(Math.min((s - e) / 1000, l), 0);
return a ? (0, i.jsxs)('div', {
  className: o()(n, {
    [c.themed]: r
  }, c.singleLineContainer),
  children: [
    (0, i.jsx)('div', {
      className: c.textLeftInSingleLine,
      children: f({
        time: d,
        padLargestUnit: !0
      })
    }),
    (0, i.jsx)('div', {
      className: c.barInSingleLine,
      children: (0, i.jsx)(_, {
        percentage: d / l,
        isSingleLine: !0
      })
    }),
    (0, i.jsx)('div', {
      className: c.textRight,
      children: f({
        time: l,
        padLargestUnit: !0
      })
    })
  ]
}) : (0, i.jsxs)('div', {
  className: o()(n, {
    [c.themed]: r
  }),
  children: [
    (0, i.jsx)(_, {
      percentage: d / l,
      isSingleLine: !1
    }),
    (0, i.jsxs)(u.Z, {
      children: [
        (0, i.jsx)(u.Z.Child, {
          grow: 1,
          className: c.textLeft,
          children: f({
            time: d,
            padLargestUnit: !1
          })
        }),
        (0, i.jsx)(u.Z.Child, {
          grow: 0,
          className: c.textRight,
          children: f({
            time: l,
            padLargestUnit: !1
          })
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), d(this, 'timer', new l.Xp()), d(this, 'state', {
  now: Date.now()
});
  }
}
d(h, 'defaultProps', {
  themed: !1
}), t.Z = h;