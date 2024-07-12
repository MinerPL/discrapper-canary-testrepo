t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  s = t.n(r),
  o = t(481060),
  l = t(310752),
  i = t(531643),
  d = t(689938),
  c = t(950419),
  u = t(66487);

function C(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[A] = t, e;
}

function g() {
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsx)('div', {
    className: s()(u.sparkleWhite, c.sparkleOne)
  }),
  (0, n.jsx)('div', {
    className: s()(u.sparkleWhite, c.sparkleTwo)
  }),
  (0, n.jsx)('div', {
    className: s()(u.lightWhite, c.lightOne)
  }),
  (0, n.jsx)('div', {
    className: s()(u.lightWhite, c.lightTwo)
  }),
  (0, n.jsx)('div', {
    className: s()(u.crossWhite, c.crossOne)
  }),
  (0, n.jsx)('div', {
    className: s()(u.crossWhite, c.crossTwo)
  }),
  (0, n.jsx)('div', {
    className: s()(u.popWhite, c.popOne)
  })
]
  });
}
class T extends a.Component {
  componentDidMount() {
let e = this.elementDOMRef.current;
null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
  }
  componentWillUnmount() {
let e = this.elementDOMRef.current;
null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
  }
  render() {
let {
  title: e,
  description: A,
  icons: t,
  style: a,
  className: r
} = this.props;
return (0, n.jsx)('div', {
  ref: this.elementDOMRef,
  className: s()(r, c.uploadArea, {
    [c.droppable]: this.state.isDragging,
    [c.uploadModalIn]: this.state.isOverZone
  }),
  style: a,
  children: (0, n.jsxs)('div', {
    className: c.uploadDropModal,
    children: [
      this.state.isDragging && (0, n.jsx)(g, {}),
      (0, n.jsx)('div', {
        className: c.bgScale
      }),
      (0, n.jsxs)('div', {
        className: c.inner,
        children: [
          (0, n.jsx)(l.Z, {
            icons: t
          }),
          (0, n.jsx)('div', {
            className: c.title,
            children: e
          }),
          (0, n.jsx)('div', {
            className: c.instructions,
            children: (0, n.jsx)('pre', {
              children: A
            })
          })
        ]
      })
    ]
  })
});
  }
  constructor(...e) {
var A;
super(...e), A = this, C(this, 'state', {
  isDragging: !1,
  isOverZone: !1
}), C(this, 'dragOverTimeout', null), C(this, 'elementDOMRef', a.createRef()), C(this, 'isAllDropFiles', e => {
  for (let t = 0; t < e.length; t++)
    try {
      var A;
      let n = null !== (A = e[t].webkitGetAsEntry()) && void 0 !== A ? A : e[t].getAsEntry();
      if (n && !n.isFile)
        return !1;
    } catch (e) {
      continue;
    }
  return !0;
}), C(this, 'preventUnwantedDrop', function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = e.dataTransfer;
  if (null == n)
    return !0;
  let a = Array.isArray(n.types) && -1 !== n.types.indexOf('text/uri-list') && -1 === n.types.indexOf('application/json'),
    r = null != n.items && !A.isAllDropFiles(n.items);
  return !a && !r || (e.stopPropagation(), e.preventDefault(), n.effectAllowed = 'none', n.dropEffect = 'none', t && (A.setState({
    isDragging: !1
  }), (0, i.openUploadError)({
    title: d.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
    help: d.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
    icons: A.props.icons
  })), !1);
}), C(this, 'handleDragOver', e => {
  var A, t, n;
  if (!this.preventUnwantedDrop(e))
    return !1;
  let a = e.dataTransfer;
  if (null != a) {
    if (a.dropEffect = 'copy', (0, o.hasModalOpen)(i.UPLOAD_ERROR_MODAL_KEY) && (0, o.closeModal)(i.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (A = (t = this.props).onDragOver) || void 0 === A || A.call(t, e), !this.state.isDragging) {
      let e = null === (n = this.elementDOMRef.current) || void 0 === n ? void 0 : n.ownerDocument.defaultView;
      (null != e && a.types instanceof e.DOMStringList && a.types.contains('application/x-moz-file') || -1 !== a.types.indexOf('Files')) && this.setState(e => e.isDragging ? {} : {
        isDragging: !0
      });
    }
    clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
      var e, A;
      this.setState({
        isDragging: !1
      }), null === (e = (A = this.props).onDragClear) || void 0 === e || e.call(A);
    }, 1000);
  }
}), C(this, 'handleDragOverZone', () => {
  this.setState({
    isOverZone: !0
  });
}), C(this, 'handleDragLeaveZone', () => {
  this.setState({
    isOverZone: !1
  });
}), C(this, 'handleDragLeave', e => {
  this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
}), C(this, 'clearDragging', () => {
  var e, A;
  this.setState({
    isDragging: !1,
    isOverZone: !1
  }), null === (e = (A = this.props).onDragClear) || void 0 === e || e.call(A);
}), C(this, 'handleDrop', e => {
  if (!this.preventUnwantedDrop(e, !0))
    return !1;
  let A = e.dataTransfer;
  if (null == A)
    return !0;
  this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(A.files), this.clearDragging());
});
  }
}
A.Z = T;