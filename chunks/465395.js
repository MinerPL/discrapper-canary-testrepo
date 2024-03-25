"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007"), s("808653"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("448105"),
  i = s.n(n),
  r = s("77078"),
  o = s("6466");
class d extends l.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      popoutProps: s,
      renderValue: l,
      className: n
    } = this.props;
    return (0, a.jsx)(r.Popout, {
      ...s,
      renderPopout: this.renderPopout,
      children: s => (0, a.jsx)(r.Clickable, {
        ...s,
        className: n,
        children: (0, a.jsx)(o.default, {
          label: e,
          value: t,
          renderValue: l
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.renderItems = e => {
      let {
        items: t,
        renderItem: s
      } = this.props;
      return t.reduce((t, a, l) => (i(e.toLowerCase(), a.label.toLowerCase()) && t.push(s(a, l)), t), [])
    }, this.renderPopout = e => {
      let {
        closePopout: t
      } = e, {
        placeholder: s,
        popoutClassName: l,
        onChange: n,
        value: i
      } = this.props;
      return (0, a.jsx)(r.ComboboxPopout, {
        className: l,
        placeholder: s,
        value: new Set([i.value]),
        onChange: n,
        onClose: t,
        children: e => this.renderItems(e)
      })
    }
  }
}
var u = d