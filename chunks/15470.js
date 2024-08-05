s.d(t, {
  i: function() {
return C;
  }
}), s(47120);
var n = s(735250),
  i = s(470079),
  a = s(120356),
  r = s.n(a),
  l = s(302454),
  o = s.n(l),
  h = s(481060),
  d = s(241209),
  u = s(378720),
  c = s(73346),
  p = s(689938),
  m = s(568657);

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let I = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
  C = {
...d.Z.rules,
heading: {
  ...d.Z.rules.heading,
  react(e, t, s) {
    let i = 'h'.concat(Math.min(Math.max(2, e.level + 1), 4));
    return (0, n.jsx)(u.Z, {
      tag: i,
      children: t(e.content, s)
    }, s.key);
  }
},
assetImage: {
  order: 5,
  match(e, t) {
    let s = e.match(I);
    if (null != s) {
      let e = s[2],
        n = t.assets.find(t => t.id === e);
      return null != n && [
        ...s,
        n,
        t.applicationId
      ];
    }
    return !1;
  },
  parse: e => ({
    asset: e[3],
    alt: e[1],
    applicationId: e[4]
  }),
  react: (e, t, s) => (0, n.jsx)('div', {
    className: m.assetWrapper,
    children: (0, n.jsx)('img', {
      alt: e.alt,
      src: (0, c._W)(e.applicationId, e.asset, 800),
      className: m.asset
    })
  }, s.key)
}
  },
  x = o().parserFor(C),
  f = o().reactFor(o().ruleOutput(C, 'react'));
class N extends i.PureComponent {
  componentDidMount() {
if (null != this._container) {
  let {
    height: e
  } = this._container.getBoundingClientRect();
  this.setState({
    collapsable: e > 400
  });
}
  }
  render() {
let {
  applicationId: e,
  description: t,
  blurb: s,
  className: i,
  assets: a
} = this.props, {
  collapsed: l,
  collapsable: o
} = this.state;
return (0, n.jsxs)('div', {
  className: i,
  children: [
    (0, n.jsx)('div', {
      className: r()({
        [m.collapsed]: o && l
      }),
      children: (0, n.jsxs)('div', {
        ref: this.setContentContainerRef,
        children: [
          (0, n.jsx)('div', {
            className: m.blurb,
            children: s
          }),
          (0, n.jsx)(d.Z, {
            className: m.description,
            parser: x,
            output: f,
            state: {
              assets: a,
              applicationId: e
            },
            children: t
          })
        ]
      })
    }),
    o ? (0, n.jsx)(h.Button, {
      className: m.toggleCollapseButton,
      onClick: this.handleToggleCollapse,
      color: h.Button.Colors.PRIMARY,
      children: l ? p.Z.Messages.APPLICATION_STORE_DESCRIPTION_READ_MORE : p.Z.Messages.APPLICATION_STORE_DESCRIPTION_READ_LESS
    }) : null
  ]
});
  }
  constructor(...e) {
super(...e), g(this, 'state', {
  collapsed: !0,
  collapsable: !0
}), g(this, '_container', void 0), g(this, 'handleToggleCollapse', () => {
  this.setState({
    collapsed: !this.state.collapsed
  });
}), g(this, 'setContentContainerRef', e => {
  this._container = e;
});
  }
}
t.Z = N;