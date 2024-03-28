"use strict";
s.r(t), s.d(t, {
  ImageUploaderIcon: function() {
    return S
  }
}), s("47120");
var l, a = s("735250"),
  n = s("470079"),
  i = s("803997"),
  r = s.n(i),
  o = s("512722"),
  d = s.n(o),
  u = s("481060"),
  c = s("624138"),
  h = s("813197"),
  m = s("981631"),
  E = s("689938"),
  f = s("139850");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function S(e) {
  let {
    className: t,
    icon: s = null
  } = e;
  return (0, a.jsx)("div", {
    className: r()(f.imageUploaderIcon, t),
    children: s
  })
}
class T extends(l = n.PureComponent) {
  handleExternalFileChange(e) {
    d()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, s, l, n;
    let {
      image: i,
      hint: o,
      name: d,
      makeURL: g,
      disabled: T,
      onChange: N,
      showIcon: _,
      showIconDisabled: p,
      className: C,
      imageClassName: x,
      iconClassName: M,
      iconWrapperClassName: I,
      icon: R,
      hideSize: A,
      imageStyle: O,
      showRemoveButton: L,
      maxFileSizeBytes: v,
      onFileSizeError: j,
      onOpenImageSelectModal: D,
      "aria-label": y
    } = this.props;
    if (null != (t = null != i && /^data:/.test(i) ? i : g(i)) ? s = 'url("'.concat(t, '")') : null != d && (l = (0, a.jsx)("div", {
        className: f.imageUploaderAcronym,
        children: (0, c.getAcronym)(d)
      })), T) return (0, a.jsx)("div", {
      className: r()(f.imageUploader, f.disabled, C),
      children: (0, a.jsxs)("div", {
        className: r()(f.imageUploaderInner, x),
        style: {
          ...O,
          backgroundImage: s
        },
        children: [l, p && (0, a.jsx)("div", {
          className: r()(f.imageUploaderIcon, f.imageUploaderIconDisabled, M),
          children: R
        })]
      })
    });
    null != i ? n = (0, a.jsx)(u.Anchor, {
      className: f.removeButton,
      onClick: this.handleRemove,
      children: E.default.Messages.REMOVE
    }) : !A && (n = (0, a.jsx)("small", {
      className: f.sizeInfo,
      children: E.default.Messages.MINIMUM_SIZE.format({
        size: m.AVATAR_SIZE
      })
    }));
    let F = null !== (e = null != y ? y : o) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
    return (0, a.jsxs)("div", {
      className: r()(f.imageUploader, C),
      children: [(0, a.jsx)(u.FocusRing, {
        within: !0,
        children: (0, a.jsxs)("div", {
          className: _ ? r()(f.imageUploaderIconWrapper, I) : void 0,
          children: [(0, a.jsxs)("div", {
            className: r()(f.imageUploaderInner, x),
            style: {
              ...O,
              backgroundImage: s
            },
            children: [(0, a.jsx)("span", {
              "aria-hidden": !0,
              children: l
            }), null != D ? (0, a.jsx)(u.Clickable, {
              className: f.imageUploaderFileInput,
              "aria-label": F,
              onClick: D
            }) : (0, a.jsx)(h.default, {
              ref: this.inputRef,
              onChange: N,
              className: f.imageUploaderFileInput,
              "aria-label": F,
              tabIndex: 0,
              maxFileSizeBytes: v,
              onFileSizeError: j
            })]
          }), null != o && (0, a.jsx)("div", {
            className: f.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), _ && (0, a.jsx)(S, {
            className: M,
            icon: R
          })]
        })
      }), L ? n : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "inputRef", n.createRef()), g(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
g(T, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), t.default = T