"use strict";
A.r(t), A("47120");
var a = A("735250"),
  l = A("470079"),
  s = A("803997"),
  n = A.n(s),
  r = A("481060"),
  i = A("857185"),
  o = A("911200"),
  d = A("310752"),
  u = A("531643"),
  c = A("689938"),
  f = A("294575"),
  g = A("353790");

function C(e, t, A) {
  return t in e ? Object.defineProperty(e, t, {
    value: A,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = A, e
}

function h() {
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: n()(g.sparkleWhite, f.sparkleOne)
    }), (0, a.jsx)("div", {
      className: n()(g.sparkleWhite, f.sparkleTwo)
    }), (0, a.jsx)("div", {
      className: n()(g.lightWhite, f.lightOne)
    }), (0, a.jsx)("div", {
      className: n()(g.lightWhite, f.lightTwo)
    }), (0, a.jsx)("div", {
      className: n()(g.crossWhite, f.crossOne)
    }), (0, a.jsx)("div", {
      className: n()(g.crossWhite, f.crossTwo)
    }), (0, a.jsx)("div", {
      className: n()(g.popWhite, f.popOne)
    })]
  })
}
class m extends l.Component {
  componentDidMount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), e.addEventListener("dragover", this.handleDragOverZone, !1), e.addEventListener("dragleave", this.handleDragLeaveZone, !1), e.addEventListener("drop", this.handleDrop, !1))
  }
  componentWillUnmount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), e.removeEventListener("dragover", this.handleDragOverZone, !1), e.removeEventListener("dragleave", this.handleDragLeaveZone, !1), e.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: e,
      description: t,
      icons: A,
      style: l,
      className: s
    } = this.props;
    return (0, a.jsx)("div", {
      ref: this.elementDOMRef,
      className: n()(s, f.uploadArea, {
        [f.droppable]: this.state.isDragging,
        [f.uploadModalIn]: this.state.isOverZone
      }),
      style: l,
      children: (0, a.jsxs)("div", {
        className: f.uploadDropModal,
        children: [this.state.isDragging && (0, a.jsx)(h, {}), (0, a.jsx)("div", {
          className: f.bgScale
        }), (0, a.jsxs)("div", {
          className: f.inner,
          children: [(0, a.jsx)(d.default, {
            icons: A
          }), (0, a.jsx)("div", {
            className: f.title,
            children: e
          }), (0, a.jsx)("div", {
            className: f.instructions,
            children: (0, a.jsx)("pre", {
              children: t
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, C(this, "state", {
      isDragging: !1,
      isOverZone: !1
    }), C(this, "dragOverTimeout", null), C(this, "elementDOMRef", l.createRef()), C(this, "isAllDropFiles", e => {
      for (let A = 0; A < e.length; A++) try {
        var t;
        let a = null !== (t = e[A].webkitGetAsEntry()) && void 0 !== t ? t : e[A].getAsEntry();
        if (a && !a.isFile) return !1
      } catch (e) {
        continue
      }
      return !0
    }), C(this, "preventUnwantedDrop", function(e) {
      let A = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = e.dataTransfer;
      if (null == a) return !0;
      let l = Array.isArray(a.types) && -1 !== a.types.indexOf("text/uri-list") && -1 === a.types.indexOf("application/json"),
        s = null != a.items && !t.isAllDropFiles(a.items);
      return !l && !s || (e.stopPropagation(), e.preventDefault(), a.effectAllowed = "none", a.dropEffect = "none", A && (t.setState({
        isDragging: !1
      }), (0, u.openUploadError)({
        title: c.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: c.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: t.props.icons
      })), !1)
    }), C(this, "handleDragOver", e => {
      var t, A, a;
      if (!this.preventUnwantedDrop(e)) return !1;
      let l = e.dataTransfer;
      if (null != l) {
        if (l.dropEffect = "copy", (0, r.hasModalOpen)(u.UPLOAD_ERROR_MODAL_KEY) && (0, r.closeModal)(u.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (A = this.props).onDragOver) || void 0 === t || t.call(A, e), !this.state.isDragging) {
          (0, i.maybeFetchPremiumLikelihood)(o.default);
          let e = null === (a = this.elementDOMRef.current) || void 0 === a ? void 0 : a.ownerDocument.defaultView;
          (null != e && l.types instanceof e.DOMStringList && l.types.contains("application/x-moz-file") || -1 !== l.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
            isDragging: !0
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var e, t;
          this.setState({
            isDragging: !1
          }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
        }, 1e3)
      }
    }), C(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: !0
      })
    }), C(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: !1
      })
    }), C(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), C(this, "clearDragging", () => {
      var e, t;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
    }), C(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let t = e.dataTransfer;
      if (null == t) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    })
  }
}
t.default = m