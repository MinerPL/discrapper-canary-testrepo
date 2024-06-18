"use strict";
n.d(t, {
  a: function() {
    return C
  }
}), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(692547),
  d = n(984986),
  c = n(481060),
  E = n(169525),
  I = n(823379),
  T = n(794358),
  h = n(880008),
  S = n(689938),
  f = n(223697);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).TEXT = "text", s.ATTACHMENT = "attachment", s.EMBED = "embed";
let A = e => {
    let {
      className: t
    } = e;
    return (0, o.jsx)("div", {
      className: u()(f.spoilerWarning, t),
      children: S.Z.Messages.SPOILER
    })
  },
  m = e => {
    let {
      className: t,
      isSingleMosaicItem: n,
      obscureOnly: i
    } = e;
    return (0, o.jsx)("div", {
      className: u()(f.explicitContentWarning, t),
      children: i ? null : (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(d.f, {
          width: 32,
          height: 32,
          color: _.Z.colors.WHITE
        }), n && (0, o.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: f.explicitContentWarningText,
          children: S.Z.Messages.EXPLICIT_CONTENT_WARNING
        })]
      })
    })
  },
  O = e => {
    let {
      reason: t = E.wk.SPOILER,
      className: n,
      isSingleMosaicItem: i = !1
    } = e;
    switch (t) {
      case E.wk.SPOILER:
        return (0, o.jsx)(A, {
          className: n
        });
      case E.wk.EXPLICIT_CONTENT:
        return (0, o.jsx)(m, {
          isSingleMosaicItem: i,
          className: n
        });
      case E.wk.POTENTIAL_EXPLICIT_CONTENT:
        return (0, o.jsx)(m, {
          isSingleMosaicItem: i,
          className: n,
          obscureOnly: !0
        });
      default:
        return (0, I.vE)(t)
    }
  },
  R = e => {
    let {
      obscureReason: t,
      isVisible: n,
      handleToggleObscurity: i,
      obscurityControlClassName: r
    } = e;
    return t !== E.wk.EXPLICIT_CONTENT ? null : (0, o.jsx)("div", {
      className: u()(f.obscureButtonContainer, r),
      children: (0, o.jsx)(c.Clickable, {
        className: u()(f.obscureHoverButton),
        onClick: i,
        "aria-label": S.Z.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
        children: n ? (0, o.jsx)(T.Z, {
          width: 24,
          height: 24
        }) : (0, o.jsx)(h.Z, {
          width: 24,
          height: 24
        })
      })
    })
  },
  C = a.createContext(!1);
class p extends(r = a.PureComponent) {
  renderWithTooltip(e) {
    return (0, o.jsx)(c.Tooltip, {
      position: "left",
      text: this.state.visible ? null : this.tooltipText,
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: i
        } = t;
        return a.cloneElement(a.Children.only(e), {
          onMouseEnter: n,
          onMouseLeave: i
        })
      }
    })
  }
  renderObscuredAttachment() {
    let {
      children: e,
      inline: t,
      className: n,
      containerStyles: i,
      obscured: r = !0,
      reason: s = E.wk.SPOILER,
      isSingleMosaicItem: a = !1,
      obscurityControlClassName: l
    } = this.props, {
      visible: _
    } = this.state, d = (0, o.jsx)(C.Consumer, {
      children: d => {
        let I = d || _ || !r;
        return [E.wk.EXPLICIT_CONTENT, E.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t ? (0, o.jsxs)("div", {
          "aria-label": I ? void 0 : this.ariaLabel,
          "aria-expanded": I,
          style: i,
          className: u()(n, f.spoilerContent, f.spoilerContainer, {
            [f.hidden]: !I,
            [f.constrainedObscureContent]: a
          }),
          role: I ? "presentation" : "button",
          tabIndex: I ? -1 : 0,
          children: [I || t ? null : (0, o.jsx)(O, {
            reason: s,
            isSingleMosaicItem: a
          }), (0, o.jsx)("div", {
            "aria-hidden": !I,
            className: f.spoilerInnerContainer,
            children: e(!I)
          }), (0, o.jsx)(R, {
            obscureReason: s,
            isVisible: _,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: l
          })]
        }) : (0, o.jsxs)(c.Clickable, {
          onClick: I ? void 0 : this.removeObscurity,
          "aria-label": I ? void 0 : this.ariaLabel,
          "aria-expanded": I,
          style: i,
          className: u()(n, f.spoilerContent, f.spoilerContainer, {
            [f.hidden]: !I,
            [f.hiddenSpoiler]: !I
          }),
          role: I ? "presentation" : "button",
          tabIndex: I ? -1 : 0,
          children: [I || t ? null : (0, o.jsx)(O, {
            reason: s,
            isSingleMosaicItem: a
          }), (0, o.jsx)("div", {
            "aria-hidden": !I,
            className: f.spoilerInnerContainer,
            children: e(!I)
          })]
        })
      }
    });
    return t ? this.renderWithTooltip(d) : d
  }
  renderObscuredEmbed() {
    let {
      children: e,
      className: t,
      containerStyles: n,
      isSingleMosaicItem: i,
      obscurityControlClassName: r,
      reason: s = E.wk.SPOILER
    } = this.props, {
      visible: a
    } = this.state;
    return (0, o.jsx)(C.Consumer, {
      children: l => {
        let _ = l || a;
        return [E.wk.EXPLICIT_CONTENT, E.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) ? (0, o.jsxs)("div", {
          "aria-label": a ? void 0 : this.ariaLabel,
          "aria-expanded": _,
          style: n,
          className: u()(t, f.spoilerContent, f.spoilerContainer, {
            [f.hidden]: !_
          }),
          role: _ ? "presentation" : "button",
          tabIndex: _ ? -1 : 0,
          children: [_ ? null : (0, o.jsx)(O, {
            reason: s,
            isSingleMosaicItem: i
          }), (0, o.jsx)("div", {
            "aria-hidden": !_,
            className: f.spoilerInnerContainer,
            children: e(!_)
          }), (0, o.jsx)(R, {
            obscureReason: s,
            isVisible: a,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: r
          })]
        }) : (0, o.jsxs)(c.Clickable, {
          "aria-label": this.ariaLabel,
          "aria-expanded": _,
          className: u()(t, f.spoilerContent, f.spoilerContainer, {
            [f.hidden]: !_
          }),
          onClick: _ ? void 0 : this.removeObscurity,
          style: n,
          role: _ ? "presentation" : "button",
          tabIndex: _ ? -1 : 0,
          children: [_ ? null : (0, o.jsx)(O, {
            reason: s,
            className: f.embed
          }), (0, o.jsx)("div", {
            "aria-hidden": !_,
            children: e(!_)
          })]
        })
      }
    })
  }
  renderObscuredText() {
    let {
      children: e,
      renderTextElement: t,
      className: n
    } = this.props, {
      visible: i
    } = this.state, r = (0, o.jsx)(C.Consumer, {
      children: r => {
        let s = r || i,
          l = a.Children.toArray(e(s)),
          _ = a.Children.map(l, e => a.isValidElement(e) && null != t ? t(e, s) : e);
        return (0, o.jsx)(c.Clickable, {
          tag: "span",
          onClick: s ? void 0 : this.removeObscurity,
          "aria-label": s ? void 0 : this.ariaLabel,
          "aria-expanded": s,
          tabIndex: s ? -1 : 0,
          role: s ? "presentation" : "button",
          className: u()(n, f.spoilerContent, f.spoilerMarkdownContent, {
            [f.hidden]: !s
          }),
          children: (0, o.jsx)("span", {
            className: f.obscuredTextContent,
            children: (0, o.jsx)("span", {
              "aria-hidden": !s,
              className: f.obscuredTextContentInner,
              children: _
            })
          })
        })
      }
    });
    return this.renderWithTooltip(r)
  }
  render() {
    let {
      type: e = "text"
    } = this.props;
    switch (e) {
      case "text":
        return this.renderObscuredText();
      case "attachment":
        return this.renderObscuredAttachment();
      case "embed":
        return this.renderObscuredEmbed();
      default:
        return (0, I.vE)(e)
    }
  }
  get ariaLabel() {
    let {
      reason: e = E.wk.SPOILER
    } = this.props;
    switch (e) {
      case E.wk.SPOILER:
        return S.Z.Messages.SPOILER;
      case E.wk.EXPLICIT_CONTENT:
        return S.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
      case E.wk.POTENTIAL_EXPLICIT_CONTENT:
        return S.Z.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
      default:
        return (0, I.vE)(e)
    }
  }
  get tooltipText() {
    let {
      reason: e = E.wk.SPOILER
    } = this.props;
    switch (e) {
      case E.wk.SPOILER:
        return S.Z.Messages.SPOILER;
      case E.wk.EXPLICIT_CONTENT:
        return S.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
      case E.wk.POTENTIAL_EXPLICIT_CONTENT:
        return S.Z.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
      default:
        return (0, I.vE)(e)
    }
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      visible: !1
    }), N(this, "removeObscurity", e => {
      let {
        visible: t
      } = this.state;
      if (t) return;
      !t && (e.preventDefault(), e.stopPropagation()), this.setState({
        visible: !0
      });
      let {
        onReveal: n
      } = this.props;
      null != n && n()
    }), N(this, "handleToggleObscurity", e => {
      e.stopPropagation(), e.nativeEvent.stopPropagation();
      let {
        onToggleObscurity: t
      } = this.props;
      null != t && t(e), this.setState(e => ({
        visible: !e.visible
      }))
    }), N(this, "obscure", () => {
      let {
        visible: e
      } = this.state;
      e && this.setState({
        visible: !1
      })
    })
  }
}
N(p, "Types", i), N(p, "Reasons", E.wk), t.Z = p