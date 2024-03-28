"use strict";
n.r(t), n.d(t, {
  ColorSchemes: function() {
    return a
  },
  renderKeybindHint: function() {
    return y
  },
  renderSubtleHint: function() {
    return I
  }
});
var i, a, l, s = n("735250"),
  o = n("470079"),
  r = n("803997"),
  d = n.n(r),
  u = n("481060"),
  c = n("376218"),
  f = n("465670"),
  h = n("689938"),
  p = n("276411"),
  g = n("794711");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = e => e.stopPropagation(),
  S = () => (0, s.jsx)("div", {
    className: p.clickBlocker,
    onClick: E,
    onMouseEnter: E,
    onMouseOver: E
  }),
  v = () => (0, s.jsx)("div", {
    className: p.divider
  }),
  y = (e, t, n) => (0, s.jsx)("div", {
    className: p.keybindMessage,
    children: n.format({
      keybind: t,
      keybindHook: (e, n) => (0, s.jsx)(c.default, {
        keybind: t,
        className: p.keybind
      }, n)
    })
  }),
  I = (e, t) => (0, s.jsx)("div", {
    className: p.hintSubtleText,
    children: t
  });
(i = a || (a = {})).PRIMARY = "PRIMARY", i.BRAND = "BRAND", i.DANGER = "DANGER";
class T extends(l = o.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    let {
      expand: n
    } = e, {
      expanded: i
    } = t;
    return !i && n ? {
      expanded: !0
    } : null
  }
  componentDidMount() {
    let {
      onNotificationShow: e
    } = this.props;
    null == e || e()
  }
  componentDidUpdate(e) {
    let {
      onNotificationShow: t
    } = this.props;
    null != t && null == e.onNotificationShow && t()
  }
  renderCloseButton() {
    return (0, s.jsx)(u.Button, {
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      onClick: this.handleDismiss,
      className: p.dismissButton,
      "aria-label": h.default.Messages.NOTIFICATION_DISMISS,
      children: (0, s.jsx)(f.default, {
        width: 16,
        height: 16,
        className: p.dismissIcon
      })
    })
  }
  renderHint() {
    let {
      props: {
        hint: e,
        colorScheme: t
      },
      state: {
        expanded: n
      }
    } = this;
    if (null == e) return null;
    if ("function" == typeof e) {
      let i = e(n, t);
      return null != i ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)(v, {}), i]
      }, "hint-custom") : null
    }
    return (0, s.jsxs)(o.Fragment, {
      children: [(0, s.jsx)(v, {}), (0, s.jsx)("div", {
        className: "string" == typeof e ? p.hintText : void 0,
        children: e
      }, "hint-text")]
    }, "hint-text")
  }
  renderFooter() {
    let {
      props: {
        renderFooter: e,
        cancelText: t,
        confirmText: n,
        onConfirmClick: i,
        onCancelClick: a,
        hint: l,
        colorScheme: r
      },
      state: {
        expanded: d
      }
    } = this;
    if (!d) return null != l ? this.renderHint() : null;
    if (null != e) {
      let t = e(d, r);
      return null != t ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)(v, {}), t]
      }, "footer-custom-content") : null
    }
    if (null != i || null != a) {
      let e = u.Button.Colors.GREEN,
        l = u.Button.Colors.PRIMARY,
        d = u.Button.Looks.FILLED;
      switch (r) {
        case "DANGER":
        case "BRAND":
          e = l = u.Button.Colors.WHITE, d = u.Button.Looks.OUTLINED
      }
      return (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)(v, {}), (0, s.jsxs)("div", {
          className: p.buttonContainer,
          children: [null != i ? (0, s.jsx)(u.Button, {
            fullWidth: !0,
            size: u.Button.Sizes.SMALL,
            color: e,
            onClick: this.handleConfirmClick,
            className: p.button,
            innerClassName: p.innerText,
            children: null != n ? n : h.default.Messages.OKAY
          }) : null, null != a ? (0, s.jsx)(u.Button, {
            fullWidth: !0,
            size: u.Button.Sizes.SMALL,
            look: d,
            color: l,
            onClick: this.handleCancelClick,
            className: p.button,
            children: null != t ? t : h.default.Messages.CANCEL
          }) : null]
        })]
      }, "footer-button-content")
    }
    return this.renderHint()
  }
  renderIcon() {
    let {
      icon: e
    } = this.props;
    return null == e ? null : "string" == typeof e ? (0, s.jsx)(u.Avatar, {
      src: e,
      size: u.AvatarSizes.SIZE_40,
      className: p.avatar,
      "aria-hidden": !0
    }) : (0, s.jsx)("div", {
      className: p.avatar,
      children: e
    })
  }
  renderContent() {
    let {
      body: e,
      title: t,
      maxBodyLines: n
    } = this.props;
    return (0, s.jsxs)("div", {
      className: p.content,
      children: [this.renderIcon(), (0, s.jsxs)("div", {
        className: p.details,
        children: [(0, s.jsx)("div", {
          className: p.title,
          children: t
        }), null != e ? (0, s.jsx)("div", {
          className: d()(p.body, g.marginTop4),
          style: {
            WebkitLineClamp: n,
            lineClamp: n
          },
          children: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      props: {
        onNotificationClick: e,
        colorScheme: t,
        disabled: n
      },
      state: {
        expanded: i
      }
    } = this, a = null != e ? u.Clickable : "div";
    return (0, s.jsxs)(a, {
      onMouseOver: i ? null : this.handleMouseEnter,
      onFocus: i ? null : this.handleMouseEnter,
      onClick: e,
      className: d()(p.container, {
        [p.themePrimary]: "PRIMARY" === t,
        [p.themeBrand]: "BRAND" === t,
        [p.themeDanger]: "DANGER" === t,
        [p.clickable]: null != e && !n
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), n ? (0, s.jsx)(S, {}) : null]
    })
  }
  constructor(e) {
    super(e), m(this, "handleDismiss", e => {
      e.stopPropagation();
      let {
        onDismissClick: t
      } = this.props;
      null == t || t(e)
    }), m(this, "handleConfirmClick", e => {
      e.stopPropagation();
      let {
        onConfirmClick: t
      } = this.props;
      null == t || t(e)
    }), m(this, "handleCancelClick", e => {
      e.stopPropagation();
      let {
        onCancelClick: t
      } = this.props;
      null == t || t(e)
    }), m(this, "handleMouseEnter", () => {
      !this.props.disabled && this.setState({
        expanded: !0
      })
    });
    let {
      expand: t
    } = e;
    this.state = {
      expanded: t
    }
  }
}
m(T, "ColorSchemes", a), m(T, "defaultProps", {
  maxBodyLines: void 0,
  colorScheme: "PRIMARY",
  expand: !1,
  disabled: !1
}), t.default = T