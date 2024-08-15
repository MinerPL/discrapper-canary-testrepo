E(47120);
var s = E(735250),
  T = E(470079),
  I = E(120356),
  n = E.n(I),
  A = E(481060),
  t = E(310752),
  a = E(531643),
  r = E(689938),
  N = E(981429),
  L = E(658371);

function S(e, _, E) {
  return _ in e ? Object.defineProperty(e, _, {
value: E,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[_] = E, e;
}

function D() {
  return (0, s.jsxs)('div', {
children: [
  (0, s.jsx)('div', {
    className: n()(L.sparkleWhite, N.sparkleOne)
  }),
  (0, s.jsx)('div', {
    className: n()(L.sparkleWhite, N.sparkleTwo)
  }),
  (0, s.jsx)('div', {
    className: n()(L.lightWhite, N.lightOne)
  }),
  (0, s.jsx)('div', {
    className: n()(L.lightWhite, N.lightTwo)
  }),
  (0, s.jsx)('div', {
    className: n()(L.crossWhite, N.crossOne)
  }),
  (0, s.jsx)('div', {
    className: n()(L.crossWhite, N.crossTwo)
  }),
  (0, s.jsx)('div', {
    className: n()(L.popWhite, N.popOne)
  })
]
  });
}
class l extends T.Component {
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
  description: _,
  icons: E,
  style: T,
  className: I
} = this.props;
return (0, s.jsx)('div', {
  ref: this.elementDOMRef,
  className: n()(I, N.uploadArea, {
    [N.droppable]: this.state.isDragging,
    [N.uploadModalIn]: this.state.isOverZone
  }),
  style: T,
  children: (0, s.jsxs)('div', {
    className: N.uploadDropModal,
    children: [
      this.state.isDragging && (0, s.jsx)(D, {}),
      (0, s.jsx)('div', {
        className: N.bgScale
      }),
      (0, s.jsxs)('div', {
        className: N.inner,
        children: [
          (0, s.jsx)(t.Z, {
            icons: E
          }),
          (0, s.jsx)('div', {
            className: N.title,
            children: e
          }),
          (0, s.jsx)('div', {
            className: N.instructions,
            children: (0, s.jsx)('pre', {
              children: _
            })
          })
        ]
      })
    ]
  })
});
  }
  constructor(...e) {
var _;
super(...e), _ = this, S(this, 'state', {
  isDragging: !1,
  isOverZone: !1
}), S(this, 'dragOverTimeout', null), S(this, 'elementDOMRef', T.createRef()), S(this, 'isAllDropFiles', e => {
  for (let E = 0; E < e.length; E++)
    try {
      var _;
      let s = null !== (_ = e[E].webkitGetAsEntry()) && void 0 !== _ ? _ : e[E].getAsEntry();
      if (s && !s.isFile)
        return !1;
    } catch (e) {
      continue;
    }
  return !0;
}), S(this, 'preventUnwantedDrop', function(e) {
  let E = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    s = e.dataTransfer;
  if (null == s)
    return !0;
  let T = Array.isArray(s.types) && -1 !== s.types.indexOf('text/uri-list') && -1 === s.types.indexOf('application/json'),
    I = null != s.items && !_.isAllDropFiles(s.items);
  return !T && !I || (e.stopPropagation(), e.preventDefault(), s.effectAllowed = 'none', s.dropEffect = 'none', E && (_.setState({
    isDragging: !1
  }), (0, a.openUploadError)({
    title: r.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
    help: r.Z.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
    icons: _.props.icons
  })), !1);
}), S(this, 'handleDragOver', e => {
  var _, E, s;
  if (!this.preventUnwantedDrop(e))
    return !1;
  let T = e.dataTransfer;
  if (null != T) {
    if (T.dropEffect = 'copy', (0, A.hasModalOpen)(a.UPLOAD_ERROR_MODAL_KEY) && (0, A.closeModal)(a.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (_ = (E = this.props).onDragOver) || void 0 === _ || _.call(E, e), !this.state.isDragging) {
      let e = null === (s = this.elementDOMRef.current) || void 0 === s ? void 0 : s.ownerDocument.defaultView;
      (null != e && T.types instanceof e.DOMStringList && T.types.contains('application/x-moz-file') || -1 !== T.types.indexOf('Files')) && this.setState(e => e.isDragging ? {} : {
        isDragging: !0
      });
    }
    clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
      var e, _;
      this.setState({
        isDragging: !1
      }), null === (e = (_ = this.props).onDragClear) || void 0 === e || e.call(_);
    }, 1000);
  }
}), S(this, 'handleDragOverZone', () => {
  this.setState({
    isOverZone: !0
  });
}), S(this, 'handleDragLeaveZone', () => {
  this.setState({
    isOverZone: !1
  });
}), S(this, 'handleDragLeave', e => {
  this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
}), S(this, 'clearDragging', () => {
  var e, _;
  this.setState({
    isDragging: !1,
    isOverZone: !1
  }), null === (e = (_ = this.props).onDragClear) || void 0 === e || e.call(_);
}), S(this, 'handleDrop', e => {
  if (!this.preventUnwantedDrop(e, !0))
    return !1;
  let _ = e.dataTransfer;
  if (null == _)
    return !0;
  this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(_.files), this.clearDragging());
});
  }
}
_.Z = l;