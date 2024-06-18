"use strict";
t.d(s, {
  S: function() {
    return g
  }
}), t(47120);
var n, a = t(735250),
  i = t(470079),
  l = t(120356),
  r = t.n(l),
  o = t(512722),
  c = t.n(o),
  u = t(481060),
  d = t(624138),
  C = t(813197),
  E = t(981631),
  f = t(689938),
  m = t(484452);

function p(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function g(e) {
  let {
    className: s,
    icon: t = null
  } = e;
  return (0, a.jsx)("div", {
    className: r()(m.imageUploaderIcon, s),
    children: t
  })
}
class h extends(n = i.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let s, t, n, i;
    let {
      image: l,
      hint: o,
      name: c,
      makeURL: p,
      disabled: h,
      onChange: x,
      showIcon: _,
      showIconDisabled: I,
      className: T,
      imageClassName: N,
      iconClassName: S,
      iconWrapperClassName: L,
      icon: b,
      hideSize: v,
      imageStyle: O,
      showRemoveButton: Z,
      maxFileSizeBytes: A,
      onFileSizeError: R,
      onOpenImageSelectModal: j,
      "aria-label": P
    } = this.props;
    if (null != (s = null != l && /^data:/.test(l) ? l : p(l)) ? t = 'url("'.concat(s, '")') : null != c && (n = (0, a.jsx)("div", {
        className: m.imageUploaderAcronym,
        children: (0, d.Zg)(c)
      })), h) return (0, a.jsx)("div", {
      className: r()(m.imageUploader, m.disabled, T),
      children: (0, a.jsxs)("div", {
        className: r()(m.imageUploaderInner, N),
        style: {
          ...O,
          backgroundImage: t
        },
        children: [n, I && (0, a.jsx)("div", {
          className: r()(m.imageUploaderIcon, m.imageUploaderIconDisabled, S),
          children: b
        })]
      })
    });
    null != l ? i = (0, a.jsx)(u.Anchor, {
      className: m.removeButton,
      onClick: this.handleRemove,
      children: f.Z.Messages.REMOVE
    }) : !v && (i = (0, a.jsx)("small", {
      className: m.sizeInfo,
      children: f.Z.Messages.MINIMUM_SIZE.format({
        size: E.IXf
      })
    }));
    let M = null !== (e = null != P ? P : o) && void 0 !== e ? e : f.Z.Messages.CHANGE_AVATAR;
    return (0, a.jsxs)("div", {
      className: r()(m.imageUploader, T),
      children: [(0, a.jsx)(u.FocusRing, {
        within: !0,
        children: (0, a.jsxs)("div", {
          className: _ ? r()(m.imageUploaderIconWrapper, L) : void 0,
          children: [(0, a.jsxs)("div", {
            className: r()(m.imageUploaderInner, N),
            style: {
              ...O,
              backgroundImage: t
            },
            children: [(0, a.jsx)("span", {
              "aria-hidden": !0,
              children: n
            }), null != j ? (0, a.jsx)(u.Clickable, {
              className: m.imageUploaderFileInput,
              "aria-label": M,
              onClick: j
            }) : (0, a.jsx)(C.ZP, {
              ref: this.inputRef,
              onChange: x,
              className: m.imageUploaderFileInput,
              "aria-label": M,
              tabIndex: 0,
              maxFileSizeBytes: A,
              onFileSizeError: R
            })]
          }), null != o && (0, a.jsx)("div", {
            className: m.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), _ && (0, a.jsx)(g, {
            className: S,
            icon: b
          })]
        })
      }), Z ? i : null]
    })
  }
  constructor(...e) {
    super(...e), p(this, "inputRef", i.createRef()), p(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
p(h, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), s.Z = h