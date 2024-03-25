"use strict";
n.r(t), n.d(t, {
  ImageUploaderIcon: function() {
    return v
  },
  default: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  u = n.n(r),
  o = n("77078"),
  d = n("159885"),
  c = n("694187"),
  E = n("49111"),
  f = n("782340"),
  h = n("574448");

function v(e) {
  let {
    className: t,
    icon: n = null
  } = e;
  return (0, l.jsx)("div", {
    className: i(h.imageUploaderIcon, t),
    children: n
  })
}
class m extends a.PureComponent {
  handleExternalFileChange(e) {
    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, a, s;
    let {
      image: r,
      hint: u,
      name: m,
      makeURL: N,
      disabled: _,
      onChange: I,
      showIcon: T,
      showIconDisabled: x,
      className: C,
      imageClassName: g,
      iconClassName: S,
      iconWrapperClassName: p,
      icon: A,
      hideSize: L,
      imageStyle: y,
      showRemoveButton: M,
      maxFileSizeBytes: j,
      onFileSizeError: R,
      onOpenImageSelectModal: D,
      "aria-label": G
    } = this.props;
    if (null != (t = null != r && /^data:/.test(r) ? r : N(r)) ? n = 'url("'.concat(t, '")') : null != m && (a = (0, l.jsx)("div", {
        className: h.imageUploaderAcronym,
        children: (0, d.getAcronym)(m)
      })), _) return (0, l.jsx)("div", {
      className: i(h.imageUploader, h.disabled, C),
      children: (0, l.jsxs)("div", {
        className: i(h.imageUploaderInner, g),
        style: {
          ...y,
          backgroundImage: n
        },
        children: [a, x && (0, l.jsx)("div", {
          className: i(h.imageUploaderIcon, h.imageUploaderIconDisabled, S),
          children: A
        })]
      })
    });
    null != r ? s = (0, l.jsx)(o.Anchor, {
      className: h.removeButton,
      onClick: this.handleRemove,
      children: f.default.Messages.REMOVE
    }) : !L && (s = (0, l.jsx)("small", {
      className: h.sizeInfo,
      children: f.default.Messages.MINIMUM_SIZE.format({
        size: E.AVATAR_SIZE
      })
    }));
    let V = null !== (e = null != G ? G : u) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
    return (0, l.jsxs)("div", {
      className: i(h.imageUploader, C),
      children: [(0, l.jsx)(o.FocusRing, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: T ? i(h.imageUploaderIconWrapper, p) : void 0,
          children: [(0, l.jsxs)("div", {
            className: i(h.imageUploaderInner, g),
            style: {
              ...y,
              backgroundImage: n
            },
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: a
            }), null != D ? (0, l.jsx)(o.Clickable, {
              className: h.imageUploaderFileInput,
              "aria-label": V,
              onClick: D
            }) : (0, l.jsx)(c.default, {
              ref: this.inputRef,
              onChange: I,
              className: h.imageUploaderFileInput,
              "aria-label": V,
              tabIndex: 0,
              maxFileSizeBytes: j,
              onFileSizeError: R
            })]
          }), null != u && (0, l.jsx)("div", {
            className: h.imageUploaderHint,
            "aria-hidden": "true",
            children: u
          }), T && (0, l.jsx)(v, {
            className: S,
            icon: A
          })]
        })
      }), M ? s : null]
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
      this.props.onChange(null)
    }
  }
}
m.defaultProps = {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
};
var N = m