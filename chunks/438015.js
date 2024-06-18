"use strict";
n(47120);
var i = n(735250),
  s = n(470079),
  l = n(748780),
  a = n(13245),
  o = n(454902),
  r = n(692546),
  d = n(981631),
  c = n(196689);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends s.Component {
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
    let n, i, s, l;
    let {
      opacity: a,
      scale: o,
      translateX: r,
      translateY: d
    } = this;
    switch (e) {
      case 0:
        i = 0, s = 1, l = 1;
        break;
      case 1:
        i = .3, s = .6, l = .98;
        break;
      case 2:
        i = .6, s = .3, l = .95;
        break;
      default:
        i = .6, s = 0, l = .93
    }
    null != t ? (0 === e ? l = 1.1 : i = 1.3, s = 0, n = t) : n = this.handleAnimationEnd, r.setValue(1), d.setValue(i), o.setValue(l), a.setValue(s), n()
  }
  getStyle() {
    let e, t, n, i, s;
    let {
      opacity: l,
      scale: a,
      translateX: o,
      translateY: r,
      props: {
        position: c,
        zIndex: u
      }
    } = this;
    switch (c) {
      case d._vf.TOP_LEFT:
      case d._vf.BOTTOM_LEFT:
        e = "-100%", t = 0;
        break;
      default:
        n = 0, e = "100%"
    }
    switch (c) {
      case d._vf.BOTTOM_LEFT:
      case d._vf.BOTTOM_RIGHT:
        i = 0;
        break;
      default:
        s = 0
    }
    return {
      left: t,
      right: n,
      bottom: i,
      top: s,
      zIndex: u,
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
        scale: a
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
            onDismissClick: s,
            onNotificationClick: a,
            onConfirmClick: d,
            onCancelClick: u,
            ...h
          }
        }
      },
      state: {
        animatedIn: p
      }
    } = this, f = (0, i.jsx)(l.Z.div, {
      className: c.animationContainer,
      style: this.getStyle(),
      children: (0, i.jsx)(o.ZP, {
        ...h,
        onNotificationShow: p && 0 === t ? this.handleNotificationShow : null,
        onDismissClick: this.handleDismissClick,
        onNotificationClick: null != a ? this.handleNotificationClick : null,
        onConfirmClick: null != d ? this.handleConfirmClick : null,
        onCancelClick: null != u ? this.handleCancelClick : null,
        expand: !e && 0 === t,
        disabled: 0 !== t
      })
    });
    return 0 === t ? (0, i.jsx)(r.Z, {
      observeInterval: 200,
      children: f
    }) : f
  }
  constructor(...e) {
    super(...e), u(this, "translateX", new l.Z.Value(0)), u(this, "translateY", new l.Z.Value(0)), u(this, "scale", new l.Z.Value(1)), u(this, "opacity", new l.Z.Value(1)), u(this, "state", {
      animatedIn: !1
    }), u(this, "handleNotificationShow", () => {
      let {
        id: e,
        props: {
          onNotificationShow: t
        }
      } = this.props.notification;
      t(e)
    }), u(this, "handleDismissClick", e => {
      let {
        id: t,
        props: {
          onDismissClick: n
        }
      } = this.props.notification;
      a.Z.updateNotificationStatus(t), null != n && n(e, t)
    }), u(this, "handleNotificationClick", e => {
      let {
        id: t,
        props: {
          onNotificationClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), u(this, "handleConfirmClick", e => {
      let {
        id: t,
        props: {
          onConfirmClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), u(this, "handleCancelClick", e => {
      let {
        id: t,
        props: {
          onCancelClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), u(this, "handleAnimationEnd", () => {
      let {
        animatedIn: e
      } = this.state;
      !e && this.setState({
        animatedIn: !0
      })
    })
  }
}
t.Z = h