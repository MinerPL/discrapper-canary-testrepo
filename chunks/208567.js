t.d(n, {
  S: function() {
return h;
  }
}), t(47120);
var i, a = t(735250),
  s = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(512722),
  d = t.n(r),
  c = t(481060),
  u = t(624138),
  I = t(792125),
  m = t(813197),
  _ = t(981631),
  N = t(689938),
  E = t(130207);

function T(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}

function h(e) {
  let {
className: n,
icon: t = null
  } = e;
  return (0, a.jsx)('div', {
className: o()(E.imageUploaderIcon, n, (0, I.Q)(_.BRd.LIGHT)),
children: t
  });
}
class g extends(i = s.PureComponent) {
  handleExternalFileChange(e) {
d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
  }
  render() {
var e;
let n, t, i, s;
let {
  image: l,
  hint: r,
  name: d,
  makeURL: I,
  disabled: T,
  onChange: g,
  showIcon: p,
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
if (null != (n = null != l && /^data:/.test(l) ? l : I(l)) ? t = 'url("'.concat(n, '")') : null != d && (i = (0, a.jsx)(c.Heading, {
    variant: 'heading-xxl/normal',
    color: 'always-white',
    className: E.imageUploaderAcronym,
    children: (0, u.Zg)(d)
  })), T)
  return (0, a.jsx)('div', {
    className: o()(E.imageUploader, E.disabled, f),
    children: (0, a.jsxs)('div', {
      className: o()(E.imageUploaderInner, x),
      style: {
        ...b,
        backgroundImage: t
      },
      children: [
        i,
        C && (0, a.jsx)('div', {
          className: o()(E.imageUploaderIcon, E.imageUploaderIconDisabled, O),
          children: A
        })
      ]
    })
  });
null != l ? s = (0, a.jsx)(c.Anchor, {
  className: E.removeButton,
  onClick: this.handleRemove,
  children: N.Z.Messages.REMOVE
}) : !R && (s = (0, a.jsx)('small', {
  className: E.sizeInfo,
  children: N.Z.Messages.MINIMUM_SIZE.format({
    size: _.IXf
  })
}));
let D = null !== (e = null != j ? j : r) && void 0 !== e ? e : N.Z.Messages.CHANGE_AVATAR;
return (0, a.jsxs)('div', {
  className: o()(E.imageUploader, f),
  children: [
    (0, a.jsx)(c.FocusRing, {
      within: !0,
      children: (0, a.jsxs)('div', {
        className: p ? o()(E.imageUploaderIconWrapper, S) : void 0,
        children: [
          (0, a.jsxs)('div', {
            className: o()(E.imageUploaderInner, x),
            style: {
              ...b,
              backgroundImage: t
            },
            children: [
              (0, a.jsx)('span', {
                'aria-hidden': !0,
                children: i
              }),
              null != L ? (0, a.jsx)(c.Clickable, {
                className: E.imageUploaderFileInput,
                'aria-label': D,
                onClick: L
              }) : (0, a.jsx)(m.ZP, {
                ref: this.inputRef,
                onChange: g,
                className: E.imageUploaderFileInput,
                'aria-label': D,
                tabIndex: 0,
                maxFileSizeBytes: v,
                onFileSizeError: M
              })
            ]
          }),
          null != r && (0, a.jsx)('div', {
            className: E.imageUploaderHint,
            'aria-hidden': 'true',
            children: r
          }),
          p && (0, a.jsx)(h, {
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
super(...e), T(this, 'inputRef', s.createRef()), T(this, 'handleRemove', () => {
  this.props.onChange(null);
});
  }
}
T(g, 'defaultProps', {
  name: '',
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), n.Z = g;