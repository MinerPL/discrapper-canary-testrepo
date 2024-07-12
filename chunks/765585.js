n(47120);
var r = n(735250),
  o = n(470079),
  a = n(120356),
  i = n.n(a),
  c = n(481060),
  l = n(393238),
  s = n(605236),
  u = n(311715),
  d = n(921944),
  f = n(689938),
  _ = n(878474);
t.Z = o.forwardRef(function(e, t) {
  let {
body: n,
header: a,
artClassName: p,
headerClassName: m,
contentClassName: h,
tryItText: g,
dismissText: b,
onTryFeature: x,
onClose: I,
className: T,
inlineArt: C = !1,
isPremiumFeature: v = !1,
shouldUseHorizontalButtons: N = !1,
showGIFTag: S = !1,
dismissibleContent: A,
position: w = 'top',
align: E = 'center',
art: y,
isPremiumEarlyAccess: B = !1,
maxWidth: P = 280
  } = e, W = N ? c.Button.Sizes.LARGE : c.Button.Sizes.MAX, [R, k] = o.useState(!1), {
ref: O,
width: L
  } = (0, l.Z)();

  function D(e) {
(0, s.EW)(A, {
  dismissAction: e
});
  }
  return o.useEffect(() => {
var e, t;
let n = (null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
!R && n > P && k(!0);
  }, [
R,
L,
O,
P
  ]), o.useEffect(() => {
(0, s.kk)(A);
  }, [A]), (0, r.jsx)('div', {
className: T,
ref: t,
children: (0, r.jsxs)('div', {
  className: i()(_.content, h, {
    [_.contentNoArt]: null == p || C,
    [_.contentPremium]: v || B
  }),
  children: [
    (0, r.jsxs)('div', {
      className: i()(p, C ? _.artInline : _.artAbsolute),
      children: [
        S && (0, r.jsx)(u.Z, {
          className: _.gifTag
        }),
        y
      ]
    }),
    (0, r.jsxs)('div', {
      className: _.body,
      children: [
        (0, r.jsxs)(c.Heading, {
          className: i()(v ? _.headerWithPremiumIcon : _.header, m),
          variant: 'heading-md/bold',
          color: 'always-white',
          children: [
            v && !B ? (0, r.jsx)(c.NitroWheelIcon, {
              size: 'md',
              color: 'currentColor',
              className: _.premiumIcon
            }) : null,
            B ? (0, r.jsxs)(c.Text, {
              color: 'always-white',
              variant: 'eyebrow',
              className: _.earlyAccessBadgeContainer,
              children: [
                (0, r.jsx)(c.NitroWheelIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: _.earlyAccessIcon
                }),
                (0, r.jsx)('span', {
                  className: _.earlyAccessText,
                  children: f.Z.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                })
              ]
            }) : null,
            a
          ]
        }),
        null == n ? null : 'string' == typeof n ? (0, r.jsx)(c.Text, {
          variant: 'text-sm/normal',
          color: 'always-white',
          children: n
        }) : n
      ]
    }),
    (0, r.jsx)('div', {
      ref: O,
      className: R || !N ? _.buttonContainerVertical : _.buttonContainerHorizontal,
      children: null != x ? (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(c.Button, {
            className: _.button,
            size: W,
            onClick: e => {
              null == I || I(e), x(e), D(d.L.PRIMARY);
            },
            color: v || B ? c.Button.Colors.BRAND_INVERTED : c.Button.Colors.WHITE,
            children: null != g ? g : f.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }),
          (0, r.jsx)(c.Button, {
            className: _.button,
            size: W,
            onClick: e => {
              null == I || I(e), D(d.L.DISMISS);
            },
            color: v || B ? c.Button.Colors.WHITE : c.Button.Colors.BRAND,
            look: v || B ? c.Button.Looks.LINK : c.Button.Looks.FILLED,
            children: null != b ? b : f.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })
        ]
      }) : (0, r.jsx)(c.Button, {
        className: _.button,
        size: c.Button.Sizes.MAX,
        onClick: e => {
          null == I || I(e), D(d.L.PRIMARY);
        },
        color: c.Button.Colors.WHITE,
        children: f.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
      })
    }),
    (0, r.jsx)('div', {
      className: i()(_.pointer, {
        [_.bottomPointer]: 'top' === w,
        [_.centerLeftPointer]: 'right' === w && 'center' === E,
        [_.topLeftPointer]: 'right' === w && 'top' === E
      })
    })
  ]
})
  });
});