"use strict";
n.d(t, {
  IC: function() {
    return s
  },
  QR: function() {
    return I
  },
  Yj: function() {
    return S
  }
});
var i, s, l, a = n(735250),
  o = n(470079),
  r = n(120356),
  d = n.n(r),
  c = n(481060),
  u = n(376218),
  h = n(465670),
  p = n(689938),
  f = n(297505),
  E = n(611273);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = e => e.stopPropagation(),
  m = () => (0, a.jsx)("div", {
    className: f.clickBlocker,
    onClick: g,
    onMouseEnter: g,
    onMouseOver: g
  }),
  _ = () => (0, a.jsx)("div", {
    className: f.divider
  }),
  I = (e, t, n) => (0, a.jsx)("div", {
    className: f.keybindMessage,
    children: n.format({
      keybind: t,
      keybindHook: (e, n) => (0, a.jsx)(u.Z, {
        keybind: t,
        className: f.keybind
      }, n)
    })
  }),
  S = (e, t) => (0, a.jsx)("div", {
    className: f.hintSubtleText,
    children: t
  });
(i = s || (s = {})).PRIMARY = "PRIMARY", i.BRAND = "BRAND", i.DANGER = "DANGER";
class v extends(l = o.PureComponent) {
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
    return (0, a.jsx)(c.Button, {
      look: c.Button.Looks.BLANK,
      size: c.Button.Sizes.NONE,
      onClick: this.handleDismiss,
      className: f.dismissButton,
      "aria-label": p.Z.Messages.NOTIFICATION_DISMISS,
      children: (0, a.jsx)(h.Z, {
        width: 16,
        height: 16,
        className: f.dismissIcon
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
      return null != i ? (0, a.jsxs)(o.Fragment, {
        children: [(0, a.jsx)(_, {}), i]
      }, "hint-custom") : null
    }
    return (0, a.jsxs)(o.Fragment, {
      children: [(0, a.jsx)(_, {}), (0, a.jsx)("div", {
        className: "string" == typeof e ? f.hintText : void 0,
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
        onCancelClick: s,
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
      return null != t ? (0, a.jsxs)(o.Fragment, {
        children: [(0, a.jsx)(_, {}), t]
      }, "footer-custom-content") : null
    }
    if (null != i || null != s) {
      let e = c.Button.Colors.GREEN,
        l = c.Button.Colors.PRIMARY,
        d = c.Button.Looks.FILLED;
      switch (r) {
        case "DANGER":
        case "BRAND":
          e = l = c.Button.Colors.WHITE, d = c.Button.Looks.OUTLINED
      }
      return (0, a.jsxs)(o.Fragment, {
        children: [(0, a.jsx)(_, {}), (0, a.jsxs)("div", {
          className: f.buttonContainer,
          children: [null != i ? (0, a.jsx)(c.Button, {
            fullWidth: !0,
            size: c.Button.Sizes.SMALL,
            color: e,
            onClick: this.handleConfirmClick,
            className: f.button,
            innerClassName: f.innerText,
            children: null != n ? n : p.Z.Messages.OKAY
          }) : null, null != s ? (0, a.jsx)(c.Button, {
            fullWidth: !0,
            size: c.Button.Sizes.SMALL,
            look: d,
            color: l,
            onClick: this.handleCancelClick,
            className: f.button,
            children: null != t ? t : p.Z.Messages.CANCEL
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
    return null == e ? null : "string" == typeof e ? (0, a.jsx)(c.Avatar, {
      src: e,
      size: c.AvatarSizes.SIZE_40,
      className: f.avatar,
      "aria-hidden": !0
    }) : (0, a.jsx)("div", {
      className: f.avatar,
      children: e
    })
  }
  renderContent() {
    let {
      body: e,
      title: t,
      maxBodyLines: n
    } = this.props;
    return (0, a.jsxs)("div", {
      className: f.content,
      children: [this.renderIcon(), (0, a.jsxs)("div", {
        className: f.details,
        children: [(0, a.jsx)("div", {
          className: f.title,
          children: t
        }), null != e ? (0, a.jsx)("div", {
          className: d()(f.body, E.marginTop4),
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
    } = this, s = null != e ? c.Clickable : "div";
    return (0, a.jsxs)(s, {
      onMouseOver: i ? null : this.handleMouseEnter,
      onFocus: i ? null : this.handleMouseEnter,
      onClick: e,
      className: d()(f.container, {
        [f.themePrimary]: "PRIMARY" === t,
        [f.themeBrand]: "BRAND" === t,
        [f.themeDanger]: "DANGER" === t,
        [f.clickable]: null != e && !n
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), n ? (0, a.jsx)(m, {}) : null]
    })
  }
  constructor(e) {
    super(e), Z(this, "handleDismiss", e => {
      e.stopPropagation();
      let {
        onDismissClick: t
      } = this.props;
      null == t || t(e)
    }), Z(this, "handleConfirmClick", e => {
      e.stopPropagation();
      let {
        onConfirmClick: t
      } = this.props;
      null == t || t(e)
    }), Z(this, "handleCancelClick", e => {
      e.stopPropagation();
      let {
        onCancelClick: t
      } = this.props;
      null == t || t(e)
    }), Z(this, "handleMouseEnter", () => {
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
Z(v, "ColorSchemes", s), Z(v, "defaultProps", {
  maxBodyLines: void 0,
  colorScheme: "PRIMARY",
  expand: !1,
  disabled: !1
}), t.ZP = v