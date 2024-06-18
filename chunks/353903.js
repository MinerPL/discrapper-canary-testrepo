"use strict";
n.d(t, {
  G0: function() {
    return T
  },
  u$: function() {
    return h
  }
}), n(47120), n(724458);
var i, r = n(735250),
  s = n(470079),
  o = n(392711),
  a = n.n(o),
  l = n(748780),
  u = n(692547),
  _ = n(648983);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = [u.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, u.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class E extends s.PureComponent {
  render() {
    let {
      props: {
        height: e
      },
      state: {
        backgroundColor: t
      }
    } = this;
    return (0, r.jsx)("div", {
      style: {
        height: e,
        backgroundColor: t
      },
      className: _.gif
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      backgroundColor: a().sample(c)
    })
  }
}
class I extends(i = s.Component) {
  componentDidMount() {
    this.animateSlide()
  }
  getAnimatedStyle() {
    let {
      props: {
        columns: e
      },
      state: {
        translateY: t
      }
    } = this;
    return {
      width: "".concat(100 / e, "%"),
      transform: [{
        translateY: t.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }]
    }
  }
  render() {
    let {
      blocks: e
    } = this.state;
    return (0, r.jsxs)(l.Z.div, {
      className: _.column,
      style: this.getAnimatedStyle(),
      children: [e.map((e, t) => (0, r.jsx)(E, {
        height: e
      }, t)), e.map((e, t) => (0, r.jsx)(E, {
        height: e
      }, "alt".concat(t)))]
    })
  }
  constructor(e) {
    super(e), d(this, "animateSlide", () => {
      let {
        props: {
          direction: e
        },
        state: {
          translateY: t,
          height: n
        }
      } = this;
      t.setValue(e > 0 ? 0 : -n / 2 + 12), l.Z.timing(t, {
        toValue: e > 0 ? -n / 2 + 12 : 0,
        duration: 800,
        easing: l.Z.Easing.linear
      }).start(this.animateSlide)
    });
    let t = Array(10).fill(null).map(() => a().random(40, 150));
    this.state = {
      blocks: t,
      height: 2 * t.reduce((e, t) => e + t + 12, 12),
      translateY: new l.Z.Value(0)
    }
  }
}
d(I, "defaultProps", {
  direction: -1
});
let T = e => {
  let {
    columns: t
  } = e;
  return (0, r.jsx)("div", {
    className: _.column,
    style: {
      width: "".concat(100 / t, "%")
    },
    children: [, , , , ].fill(null).map((e, t) => (0, r.jsx)("div", {
      className: _.categoryLoader
    }, t))
  })
};
class h extends s.PureComponent {
  render() {
    let {
      columns: e,
      renderColumn: t
    } = this.props;
    return (0, r.jsx)("div", {
      className: _.container,
      children: Array(e).fill(null).map((n, i) => t(e, i))
    })
  }
}