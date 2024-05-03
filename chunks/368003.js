"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("47120");
var n = s("735250"),
  r = s("470079"),
  a = s("404759"),
  o = s.n(a),
  i = s("423650"),
  u = s.n(i),
  l = s("481060"),
  d = s("689938"),
  c = s("312472");

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
      children: [(0, n.jsx)(l.Heading, {
        className: c.prompt,
        variant: "heading-md/semibold",
        children: this.props.prompt
      }), (0, n.jsx)("hr", {
        className: c.separator
      }), (0, n.jsx)(l.Text, {
        className: c.selectYourAnswer,
        variant: "text-xs/normal",
        children: d.default.Messages.HYPESQUAD_QUIZ_SELECT_ANSWER
      }), (0, n.jsx)(l.RadioGroup, {
        options: this.getQuestionOptions(),
        onChange: this.handleOptionChange,
        value: e
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      selectedValue: null
    }), h(this, "getQuestionOptions", o()(() => u()(this.props.options.map(e => ({
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