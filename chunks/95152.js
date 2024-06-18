"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(166459),
  u = n(476326),
  _ = n(752305),
  d = n(849522),
  c = n(703558),
  E = n(626135),
  I = n(358085),
  T = n(998502),
  h = n(981631),
  S = n(689938),
  f = n(239792),
  N = n(611273);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
  var t, n, s, a;
  let {
    file: l
  } = e, [u, _] = r.useState(), [d, c] = r.useState(!1), [E, I] = r.useState({}), T = r.useRef(null);
  r.useEffect(() => {
    if (null != T.current && c(!1), null == l) return;
    let e = URL.createObjectURL(l);
    return _(e), () => {
      _(void 0), URL.revokeObjectURL(e)
    }
  }, [l]), r.useLayoutEffect(() => {
    let e = T.current;
    null != e && (e.onload = () => {
      let t = Math.max(.66, Math.min(e.naturalWidth / e.naturalHeight, 4));
      1 === t ? I({
        width: 104,
        height: 104
      }) : t > 1 ? I({
        width: 104 * t,
        height: void 0
      }) : I({
        width: void 0,
        height: 104 / t
      }), c(!0)
    })
  }, []);
  let h = Math.max(16, (120 - (null !== (n = null === (t = T.current) || void 0 === t ? void 0 : t.width) && void 0 !== n ? n : 0)) / 2);
  return (0, i.jsx)("img", {
    ref: T,
    src: u,
    className: o()(f.icon, {
      [f.image]: !d
    }),
    "aria-hidden": !0,
    alt: "",
    style: {
      width: null !== (s = E.width) && void 0 !== s ? s : "initial",
      height: null !== (a = E.height) && void 0 !== a ? a : 104,
      marginLeft: h,
      marginRight: h,
      marginTop: null != E.height ? 104 - E.height - 33 : -33
    }
  })
}
class O extends r.Component {
  render() {
    var e;
    if (this.props.upload.item.platform !== u.ow.WEB) return null;
    if (this.props.upload.isImage) return (0, i.jsx)(m, {
      file: this.props.upload.item.file
    });
    return (0, i.jsx)("div", {
      className: o()(f.icon, {
        [f[null !== (e = this.props.upload.classification) && void 0 !== e ? e : ""]]: !0
      })
    })
  }
}
class R extends r.Component {
  componentDidMount() {
    var e;
    (null === (e = this.props.upload) || void 0 === e ? void 0 : e.showLargeMessageDialog) && this.props.upload.item.platform === u.ow.WEB && E.default.track(h.rMx.OPEN_MODAL, {
      type: "Upload Large Message",
      message_content_length: this.props.upload.item.file.size
    }), I.isPlatformEmbedded && T.ZP.focus()
  }
  shouldComponentUpdate(e) {
    return null != e.upload
  }
  componentDidUpdate(e) {
    var t, n, i, r;
    (null === (t = e.upload) || void 0 === t ? void 0 : t.filename) !== (null === (n = this.props.upload) || void 0 === n ? void 0 : n.filename) && this.setState({
      filename: null !== (r = null === (i = this.props.upload) || void 0 === i ? void 0 : i.filename) && void 0 !== r ? r : ""
    })
  }
  render() {
    let {
      upload: e,
      transitionState: t,
      messageMaxLength: n,
      disableSpoiler: s
    } = this.props, {
      hasSpoiler: l
    } = this.state;
    return (0, i.jsxs)(a.ModalRoot, {
      "aria-label": S.Z.Messages.ATTACH_FILES,
      size: a.ModalSize.DYNAMIC,
      transitionState: t,
      className: o()(f.uploadModal),
      children: [(0, i.jsxs)("div", {
        className: f.inner,
        children: [(0, i.jsxs)("div", {
          className: o()(f.file, {
            [f.expandable]: e.isImage
          }),
          children: [(0, i.jsx)(O, {
            upload: e
          }), (0, i.jsxs)("div", {
            className: f.description,
            children: [(0, i.jsx)("div", {
              className: f.filename,
              children: e.showLargeMessageDialog ? S.Z.Messages.LARGE_MESSAGE_UPLOAD_TITLE_MAX_LENGTH.format({
                maxLength: n
              }) : e.filename
            }), e.showLargeMessageDialog ? (0, i.jsx)("div", {
              className: f.subtitle,
              children: S.Z.Messages.LARGE_MESSAGE_UPLOAD_SUBTITLE
            }) : null]
          })]
        }), (0, i.jsx)("div", {
          className: f.comment,
          children: (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsx)("div", {
              className: f.label,
              children: (0, i.jsx)("span", {
                children: S.Z.Messages.UPLOAD_AREA_FILENAME
              })
            }), (0, i.jsx)(a.TextInput, {
              className: o()(f.channelTextAreaUpload, N.marginTop8),
              value: this.state.filename,
              onChange: e => this.setState({
                filename: e
              }),
              onKeyDown: e => {
                if (e.which === h.yXg.ENTER) return this.handleSubmit()
              }
            }), e.isImage ? (0, i.jsxs)(r.Fragment, {
              children: [(0, i.jsx)("div", {
                className: f.label,
                children: (0, i.jsx)("span", {
                  children: S.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_LABEL
                })
              }), (0, i.jsx)(a.TextInput, {
                className: o()(f.channelTextAreaUpload, N.marginTop8),
                placeholder: S.Z.Messages.ATTACHMENT_MODAL_IMAGE_DESCRIPTION_PLACEHOLDER,
                value: this.state.description,
                onChange: e => this.setState({
                  description: e
                }),
                onKeyDown: e => {
                  if (e.which === h.yXg.ENTER) return this.handleSubmit()
                }
              })]
            }) : null, !0 !== s && (0, i.jsx)(a.Checkbox, {
              className: N.marginBottom20,
              value: l,
              onChange: (e, t) => this.setState({
                hasSpoiler: t
              }),
              children: (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                children: S.Z.Messages.SPOILER_MARK_SELECTED
              })
            })]
          })
        })]
      }), (0, i.jsx)("div", {
        className: f.footer,
        children: (0, i.jsxs)("div", {
          className: o()(f.hasSpoilers, f.footerRightAlign),
          children: [(0, i.jsx)(a.Button, {
            type: "button",
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.PRIMARY,
            onClick: this.cancel,
            children: (0, i.jsx)("span", {
              children: S.Z.Messages.CANCEL
            })
          }), (0, i.jsx)(a.Button, {
            type: "submit",
            onClick: this.handleSubmit,
            children: (0, i.jsx)("span", {
              children: S.Z.Messages.ATTACHMENT_MODAL_SAVE
            })
          })]
        })
      })]
    })
  }
  constructor(e) {
    var t, n, i, r, s, o;
    super(e), A(this, "cancelAll", () => {
      l.Z.clearAll(this.props.channelId, this.props.draftType), this.props.onClose()
    }), A(this, "cancel", () => {
      this.props.onClose()
    }), A(this, "handleTextChange", (e, t, n) => {
      this.setState({
        textValue: t,
        richValue: n
      })
    }), A(this, "handleSubmit", () => {
      let {
        upload: e,
        onClose: t,
        onSubmit: n
      } = this.props, {
        filename: i,
        description: r,
        hasSpoiler: s
      } = this.state;
      n({
        upload: e,
        name: i,
        description: r,
        spoiler: s
      }), t()
    });
    let a = e.ignoreDraft ? "" : c.Z.getDraft(this.props.channelId, e.draftType);
    this.state = {
      ...(0, _.eK)(a),
      textFocused: !0,
      hasSpoiler: null !== (r = null === (t = e.upload) || void 0 === t ? void 0 : t.spoiler) && void 0 !== r && r,
      filename: null !== (s = null === (n = e.upload) || void 0 === n ? void 0 : n.filename) && void 0 !== s ? s : "",
      contentWarningProps: null,
      description: null !== (o = null === (i = e.upload) || void 0 === i ? void 0 : i.description) && void 0 !== o ? o : ""
    }
  }
}

function C(e) {
  let t = (0, d.Z)();
  return e.upload.item.platform !== u.ow.WEB ? null : (0, i.jsx)(R, {
    ...e,
    file: e.upload.item.file,
    messageMaxLength: t
  })
}