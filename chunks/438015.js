"use strict";
n.r(t), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("748780"),
  s = n("13245"),
  o = n("454902"),
  r = n("692546"),
  d = n("981631"),
  u = n("925779");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends a.Component {
  componentWillAppear(e) {
    let {
      index: t
    } = this.props;
    e(), this.animateTo(t)
  }
  componentWillEnter(e) {
    let {
      index: t
    } = this.props;
    e(), this.animateTo(t)
  }
  componentWillLeave(e) {
    let {
      index: t
    } = this.props;
    this.animateTo(t, e)
  }
  componentDidUpdate(e) {
    let {
      index: t
    } = this.props;
    e.index !== t && this.animateTo(t)
  }
  animateTo(e, t) {
    let n, i, a, l;
    let {
      opacity: s,
      scale: o,
      translateX: r,
      translateY: d
    } = this;
    switch (e) {
      case 0:
        i = 0, a = 1, l = 1;
        break;
      case 1:
        i = .3, a = .6, l = .98;
        break;
      case 2:
        i = .6, a = .3, l = .95;
        break;
      default:
        i = .6, a = 0, l = .93
    }
    null != t ? (0 === e ? l = 1.1 : i = 1.3, a = 0, n = t) : n = this.handleAnimationEnd, r.setValue(1), d.setValue(i), o.setValue(l), s.setValue(a), n()
  }
  getStyle() {
    let e, t, n, i, a;
    let {
      opacity: l,
      scale: s,
      translateX: o,
      translateY: r,
      props: {
        position: u,
        zIndex: c
      }
    } = this;
    switch (u) {
      case d.OverlayNotificationPositions.TOP_LEFT:
      case d.OverlayNotificationPositions.BOTTOM_LEFT:
        e = "-100%", t = 0;
        break;
      default:
        n = 0, e = "100%"
    }
    switch (u) {
      case d.OverlayNotificationPositions.BOTTOM_LEFT:
      case d.OverlayNotificationPositions.BOTTOM_RIGHT:
        i = 0;
        break;
      default:
        a = 0
    }
    return {
      left: t,
      right: n,
      bottom: i,
      top: a,
      zIndex: c,
      opacity: l,
      transform: [{
        translateX: o.interpolate({
          inputRange: [0, 1],
          outputRange: [e, "0%"]
        })
      }, {
        translateY: r.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "20px"]
        })
      }, {
        scale: s
      }]
    }
  }
  render() {
    let {
      props: {
        locked: e,
        index: t,
        notification: {
          props: {
            onNotificationShow: n,
            onDismissClick: a,
            onNotificationClick: s,
            onConfirmClick: d,
            onCancelClick: c,
            ...f
          }
        }
      },
      state: {
        animatedIn: h
      }
    } = this, p = (0, i.jsx)(l.default.div, {
      className: u.animationContainer,
      style: this.getStyle(),
      children: (0, i.jsx)(o.default, {
        ...f,
        onNotificationShow: h && 0 === t ? this.handleNotificationShow : null,
        onDismissClick: this.handleDismissClick,
        onNotificationClick: null != s ? this.handleNotificationClick : null,
        onConfirmClick: null != d ? this.handleConfirmClick : null,
        onCancelClick: null != c ? this.handleCancelClick : null,
        expand: !e && 0 === t,
        disabled: 0 !== t
      })
    });
    return 0 === t ? (0, i.jsx)(r.default, {
      observeInterval: 200,
      children: p
    }) : p
  }
  constructor(...e) {
    super(...e), c(this, "translateX", new l.default.Value(0)), c(this, "translateY", new l.default.Value(0)), c(this, "scale", new l.default.Value(1)), c(this, "opacity", new l.default.Value(1)), c(this, "state", {
      animatedIn: !1
    }), c(this, "handleNotificationShow", () => {
      let {
        id: e,
        props: {
          onNotificationShow: t
        }
      } = this.props.notification;
      t(e)
    }), c(this, "handleDismissClick", e => {
      let {
        id: t,
        props: {
          onDismissClick: n
        }
      } = this.props.notification;
      s.default.updateNotificationStatus(t), null != n && n(e, t)
    }), c(this, "handleNotificationClick", e => {
      let {
        id: t,
        props: {
          onNotificationClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), c(this, "handleConfirmClick", e => {
      let {
        id: t,
        props: {
          onConfirmClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), c(this, "handleCancelClick", e => {
      let {
        id: t,
        props: {
          onCancelClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), c(this, "handleAnimationEnd", () => {
      let {
        animatedIn: e
      } = this.state;
      !e && this.setState({
        animatedIn: !0
      })
    })
  }
}
t.default = f