"use strict";
s.d(t, {
  Z: function() {
    return p
  }
}), s(47120);
var n = s(735250),
  r = s(470079),
  i = s(404759),
  o = s.n(i),
  a = s(423650),
  l = s.n(a),
  u = s(481060),
  c = s(689938),
  d = s(596934);

function h(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class p extends r.Component {
  render() {
    let {
      selectedValue: e
    } = this.state;
    return (0, n.jsxs)(r.Fragment, {
      children: [(0, n.jsx)(u.Heading, {
        className: d.prompt,
        variant: "heading-md/semibold",
        children: this.props.prompt
      }), (0, n.jsx)("hr", {
        className: d.separator
      }), (0, n.jsx)(u.Text, {
        className: d.selectYourAnswer,
        variant: "text-xs/normal",
        children: c.Z.Messages.HYPESQUAD_QUIZ_SELECT_ANSWER
      }), (0, n.jsx)(u.RadioGroup, {
        options: this.getQuestionOptions(),
        onChange: this.handleOptionChange,
        value: e
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      selectedValue: null
    }), h(this, "getQuestionOptions", o()(() => l()(this.props.options.map(e => ({
      name: e.copy,
      value: e.house
    }))))), h(this, "handleOptionChange", e => {
      let {
        onSelect: t
      } = this.props;
      this.setState({
        selectedValue: e.value
      }), t(e.value)
    })
  }
}