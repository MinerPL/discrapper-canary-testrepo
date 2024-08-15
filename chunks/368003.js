s.d(t, {
  Z: function() {
return h;
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  o = s(404759),
  i = s.n(o),
  a = s(423650),
  u = s.n(a),
  l = s(481060),
  c = s(689938),
  d = s(487943);

function p(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class h extends r.Component {
  render() {
let {
  selectedValue: e
} = this.state;
return (0, n.jsxs)(r.Fragment, {
  children: [
    (0, n.jsx)(l.Heading, {
      className: d.prompt,
      variant: 'heading-md/semibold',
      children: this.props.prompt
    }),
    (0, n.jsx)('hr', {
      className: d.separator
    }),
    (0, n.jsx)(l.Text, {
      className: d.selectYourAnswer,
      variant: 'text-xs/normal',
      children: c.Z.Messages.HYPESQUAD_QUIZ_SELECT_ANSWER
    }),
    (0, n.jsx)(l.RadioGroup, {
      options: this.getQuestionOptions(),
      onChange: this.handleOptionChange,
      value: e
    })
  ]
});
  }
  constructor(...e) {
super(...e), p(this, 'state', {
  selectedValue: null
}), p(this, 'getQuestionOptions', i()(() => u()(this.props.options.map(e => ({
  name: e.copy,
  value: e.house
}))))), p(this, 'handleOptionChange', e => {
  let {
    onSelect: t
  } = this.props;
  this.setState({
    selectedValue: e.value
  }), t(e.value);
});
  }
}