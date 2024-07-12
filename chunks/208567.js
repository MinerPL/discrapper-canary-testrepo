t.d(n, {
  S: function() {
return T;
  }
}), t(47120);
var i, a = t(735250),
  s = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(512722),
  c = t.n(r),
  d = t(481060),
  u = t(624138),
  I = t(813197),
  m = t(981631),
  _ = t(689938),
  N = t(130207);

function E(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}

function T(e) {
  let {
className: n,
icon: t = null
  } = e;
  return (0, a.jsx)('div', {
className: o()(N.imageUploaderIcon, n),
children: t
  });
}
class h extends(i = s.PureComponent) {
  handleExternalFileChange(e) {
c()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
  }
  render() {
var e;
let n, t, i, s;
let {
  image: l,
  hint: r,
  name: c,
  makeURL: E,
  disabled: h,
  onChange: p,
  showIcon: g,
  showIconDisabled: C,
  className: f,
  imageClassName: x,
  iconClassName: O,
  iconWrapperClassName: S,
  icon: A,
  hideSize: R,
  imageStyle: b,
  showRemoveButton: Z,
  maxFileSizeBytes: v,
  onFileSizeError: M,
  onOpenImageSelectModal: L,
  'aria-label': j
} = this.props;
if (null != (n = null != l && /^data:/.test(l) ? l : E(l)) ? t = 'url("'.concat(n, '")') : null != c && (i = (0, a.jsx)('div', {
    className: N.imageUploaderAcronym,
    children: (0, u.Zg)(c)
  })), h)
  return (0, a.jsx)('div', {
    className: o()(N.imageUploader, N.disabled, f),
    children: (0, a.jsxs)('div', {
      className: o()(N.imageUploaderInner, x),
      style: {
        ...b,
        backgroundImage: t
      },
      children: [
        i,
        C && (0, a.jsx)('div', {
          className: o()(N.imageUploaderIcon, N.imageUploaderIconDisabled, O),
          children: A
        })
      ]
    })
  });
null != l ? s = (0, a.jsx)(d.Anchor, {
  className: N.removeButton,
  onClick: this.handleRemove,
  children: _.Z.Messages.REMOVE
}) : !R && (s = (0, a.jsx)('small', {
  className: N.sizeInfo,
  children: _.Z.Messages.MINIMUM_SIZE.format({
    size: m.IXf
  })
}));
let D = null !== (e = null != j ? j : r) && void 0 !== e ? e : _.Z.Messages.CHANGE_AVATAR;
return (0, a.jsxs)('div', {
  className: o()(N.imageUploader, f),
  children: [
    (0, a.jsx)(d.FocusRing, {
      within: !0,
      children: (0, a.jsxs)('div', {
        className: g ? o()(N.imageUploaderIconWrapper, S) : void 0,
        children: [
          (0, a.jsxs)('div', {
            className: o()(N.imageUploaderInner, x),
            style: {
              ...b,
              backgroundImage: t
            },
            children: [
              (0, a.jsx)('span', {
                'aria-hidden': !0,
                children: i
              }),
              null != L ? (0, a.jsx)(d.Clickable, {
                className: N.imageUploaderFileInput,
                'aria-label': D,
                onClick: L
              }) : (0, a.jsx)(I.ZP, {
                ref: this.inputRef,
                onChange: p,
                className: N.imageUploaderFileInput,
                'aria-label': D,
                tabIndex: 0,
                maxFileSizeBytes: v,
                onFileSizeError: M
              })
            ]
          }),
          null != r && (0, a.jsx)('div', {
            className: N.imageUploaderHint,
            'aria-hidden': 'true',
            children: r
          }),
          g && (0, a.jsx)(T, {
            className: O,
            icon: A
          })
        ]
      })
    }),
    Z ? s : null
  ]
});
  }
  constructor(...e) {
super(...e), E(this, 'inputRef', s.createRef()), E(this, 'handleRemove', () => {
  this.props.onChange(null);
});
  }
}
E(h, 'defaultProps', {
  name: '',
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), n.Z = h;