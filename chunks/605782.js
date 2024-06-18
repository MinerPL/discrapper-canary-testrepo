"use strict";
var s = n(735250),
  r = n(470079),
  i = n(266067),
  a = n(215569);
class l extends r.Component {
  render() {
    let {
      children: e,
      location: t,
      history: n,
      staticContext: l,
      match: o,
      ...u
    } = this.props, c = null, d = null;
    return r.Children.forEach(e, e => {
      if (null == c && r.isValidElement(e)) {
        let {
          component: s,
          render: a,
          ...o
        } = e.props, u = o.path || o.from;
        if (null != (c = null != u ? (0, i.LX)(t.pathname, {
            ...o,
            path: u
          }) : null)) o = {
          ...o,
          key: u,
          location: t,
          match: c,
          history: n,
          staticContext: l
        }, null != s ? d = r.createElement(s, o) : null != a && (d = a(o))
      }
    }), (0, s.jsx)(a.W, {
      ...u,
      children: d
    })
  }
}
t.Z = (0, i.EN)(l)