"use strict";
A.r(t), A.d(t, {
  default: function() {
    return m
  }
}), A("222007");
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("77078"),
  i = A("716849"),
  o = A("552917"),
  d = A("109036"),
  u = A("336522"),
  c = A("782340"),
  f = A("1065"),
  g = A("403693");

function C() {
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: r(g.sparkleWhite, f.sparkleOne)
    }), (0, a.jsx)("div", {
      className: r(g.sparkleWhite, f.sparkleTwo)
    }), (0, a.jsx)("div", {
      className: r(g.lightWhite, f.lightOne)
    }), (0, a.jsx)("div", {
      className: r(g.lightWhite, f.lightTwo)
    }), (0, a.jsx)("div", {
      className: r(g.crossWhite, f.crossOne)
    }), (0, a.jsx)("div", {
      className: r(g.crossWhite, f.crossTwo)
    }), (0, a.jsx)("div", {
      className: r(g.popWhite, f.popOne)
    })]
  })
}
class h extends l.Component {
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
      className: n
    } = this.props;
    return (0, a.jsx)("div", {
      ref: this.elementDOMRef,
      className: r(n, f.uploadArea, {
        [f.droppable]: this.state.isDragging,
        [f.uploadModalIn]: this.state.isOverZone
      }),
      style: l,
      children: (0, a.jsxs)("div", {
        className: f.uploadDropModal,
        children: [this.state.isDragging && (0, a.jsx)(C, {}), (0, a.jsx)("div", {
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
    super(...e), t = this, this.state = {
      isDragging: !1,
      isOverZone: !1
    }, this.dragOverTimeout = null, this.elementDOMRef = l.createRef(), this.isAllDropFiles = e => {
      for (let A = 0; A < e.length; A++) try {
        var t;
        let a = null !== (t = e[A].webkitGetAsEntry()) && void 0 !== t ? t : e[A].getAsEntry();
        if (a && !a.isFile) return !1
      } catch (e) {
        continue
      }
      return !0
    }, this.preventUnwantedDrop = function(e) {
      let A = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = e.dataTransfer;
      if (null == a) return !0;
      let l = Array.isArray(a.types) && -1 !== a.types.indexOf("text/uri-list") && -1 === a.types.indexOf("application/json"),
        n = null != a.items && !t.isAllDropFiles(a.items);
      return !l && !n || (e.stopPropagation(), e.preventDefault(), a.effectAllowed = "none", a.dropEffect = "none", A && (t.setState({
        isDragging: !1
      }), (0, u.openUploadError)({
        title: c.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
        help: c.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
        icons: t.props.icons
      })), !1)
    }, this.handleDragOver = e => {
      var t, A, a;
      if (!this.preventUnwantedDrop(e)) return !1;
      let l = e.dataTransfer;
      if (null == l) return;
      l.dropEffect = "copy";
      let n = (0, s.hasModalOpen)(u.UPLOAD_ERROR_MODAL_KEY);
      if (n && (0, s.closeModal)(u.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (A = this.props).onDragOver) || void 0 === t || t.call(A, e), !this.state.isDragging) {
        (0, i.maybeFetchPremiumLikelihood)(o.default);
        let e = null === (a = this.elementDOMRef.current) || void 0 === a ? void 0 : a.ownerDocument.defaultView,
          t = null != e && l.types instanceof e.DOMStringList && l.types.contains("application/x-moz-file");
        (t || -1 !== l.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
          isDragging: !0
        })
      }
      clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
        var e, t;
        this.setState({
          isDragging: !1
        }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
      }, 1e3)
    }, this.handleDragOverZone = () => {
      this.setState({
        isOverZone: !0
      })
    }, this.handleDragLeaveZone = () => {
      this.setState({
        isOverZone: !1
      })
    }, this.handleDragLeave = e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }, this.clearDragging = () => {
      var e, t;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
    }, this.handleDrop = e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let t = e.dataTransfer;
      if (null == t) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    }
  }
}
var m = h