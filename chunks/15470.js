"use strict";
n.r(t), n.d(t, {
  Rules: function() {
    return C
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  i = n("803997"),
  r = n.n(i),
  l = n("302454"),
  o = n.n(l),
  d = n("481060"),
  u = n("378720"),
  h = n("729035"),
  c = n("73346"),
  p = n("689938"),
  m = n("246031");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
  C = {
    ...h.default.rules,
    heading: {
      ...h.default.rules.heading,
      react(e, t, n) {
        let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
        return (0, s.jsx)(u.default, {
          tag: a,
          children: t(e.content, n)
        }, n.key)
      }
    },
    assetImage: {
      order: 5,
      match(e, t) {
        let n = e.match(f);
        if (null != n) {
          let e = n[2],
            s = t.assets.find(t => t.id === e);
          return null != s && [...n, s, t.applicationId]
        }
        return !1
      },
      parse: e => ({
        asset: e[3],
        alt: e[1],
        applicationId: e[4]
      }),
      react: (e, t, n) => (0, s.jsx)("div", {
        className: m.assetWrapper,
        children: (0, s.jsx)("img", {
          alt: e.alt,
          src: (0, c.getAssetURL)(e.applicationId, e.asset, 800),
          className: m.asset
        })
      }, n.key)
    }
  },
  I = o().parserFor(C),
  x = o().reactFor(o().ruleOutput(C, "react"));
class E extends a.PureComponent {
  componentDidMount() {
    if (null != this._container) {
      let {
        height: e
      } = this._container.getBoundingClientRect();
      this.setState({
        collapsable: e > 400
      })
    }
  }
  render() {
    let {
      applicationId: e,
      description: t,
      blurb: n,
      className: a,
      assets: i
    } = this.props, {
      collapsed: l,
      collapsable: o
    } = this.state;
    return (0, s.jsxs)("div", {
      className: a,
      children: [(0, s.jsx)("div", {
        className: r()({
          [m.collapsed]: o && l
        }),
        children: (0, s.jsxs)("div", {
          ref: this.setContentContainerRef,
          children: [(0, s.jsx)("div", {
            className: m.blurb,
            children: n
          }), (0, s.jsx)(h.default, {
            className: m.description,
            parser: I,
            output: x,
            state: {
              assets: i,
              applicationId: e
            },
            children: t
          })]
        })
      }), o ? (0, s.jsx)(d.Button, {
        className: m.toggleCollapseButton,
        onClick: this.handleToggleCollapse,
        color: d.Button.Colors.PRIMARY,
        children: l ? p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_MORE : p.default.Messages.APPLICATION_STORE_DESCRIPTION_READ_LESS
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      collapsed: !0,
      collapsable: !0
    }), g(this, "_container", void 0), g(this, "handleToggleCollapse", () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }), g(this, "setContentContainerRef", e => {
      this._container = e
    })
  }
}
t.default = E