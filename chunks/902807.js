var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(338545),
  o = n(481060),
  c = n(716163);
class d extends a.Component {
  render() {
let {
  icon: e,
  ...t
} = this.props;
return (0, s.jsx)(e, {
  size: 'md',
  ...t,
  color: 'currentColor'
});
  }
}
let u = (0, l.animated)(d);
t.Z = function(e) {
  let {
className: t,
name: n,
icon: a,
iconClassName: i
  } = e, l = (0, o.useTransition)({
name: n,
icon: a,
iconClassName: i
  }, {
key: e => e.name,
initial: null,
from: {
  opacity: 0
},
enter: {
  opacity: 1
},
leave: {
  opacity: 0
}
  }, 'animate-always');
  return (0, s.jsx)('div', {
className: r()(c.crossfade, t),
children: l((e, t) => {
  let {
    icon: n,
    iconClassName: a
  } = t;
  return (0, s.jsx)(u, {
    icon: n,
    className: r()(c.icon, a),
    style: e
  });
})
  });
};