n(47120);
var r = n(735250),
  o = n(470079),
  i = n(120356),
  a = n.n(i),
  c = n(481060),
  l = n(393238),
  s = n(605236),
  u = n(279745),
  d = n(921944),
  f = n(689938),
  _ = n(878474);
t.Z = o.forwardRef(function(e, t) {
  let {
body: n,
header: i,
artClassName: p,
headerClassName: m,
contentClassName: h,
tryItText: g,
dismissText: b,
onTryFeature: C,
onClose: I,
className: v,
inlineArt: S = !1,
isPremiumFeature: x = !1,
shouldUseHorizontalButtons: E = !1,
showGIFTag: N = !1,
dismissibleContent: T,
position: A = 'top',
align: P = 'center',
art: w,
isPremiumEarlyAccess: k = !1,
maxWidth: Z = 280
  } = e, R = E ? c.Button.Sizes.LARGE : c.Button.Sizes.MAX, [y, B] = o.useState(!1), {
ref: W,
width: L
  } = (0, l.Z)();

  function O(e) {
(0, s.EW)(T, {
  dismissAction: e
});
  }
  return o.useEffect(() => {
var e, t;
let n = (null !== (t = null === (e = W.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
!y && n > Z && B(!0);
  }, [
y,
L,
W,
Z
  ]), o.useEffect(() => {
(0, s.kk)(T);
  }, [T]), (0, r.jsx)('div', {
className: v,
ref: t,
children: (0, r.jsxs)('div', {
  className: a()(_.content, h, {
    [_.contentNoArt]: null == p || S,
    [_.contentPremium]: x || k
  }),
  children: [
    (0, r.jsxs)('div', {
      className: a()(p, S ? _.artInline : _.artAbsolute),
      children: [
        N && (0, r.jsx)(u.Z, {
          className: _.gifTag
        }),
        w
      ]
    }),
    (0, r.jsxs)('div', {
      className: _.body,
      children: [
        (0, r.jsxs)(c.Heading, {
          className: a()(x ? _.headerWithPremiumIcon : _.header, m),
          variant: 'heading-md/bold',
          color: 'always-white',
          children: [
            x && !k ? (0, r.jsx)(c.NitroWheelIcon, {
              size: 'md',
              color: 'currentColor',
              className: _.premiumIcon
            }) : null,
            k ? (0, r.jsxs)(c.Text, {
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
            i
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
      ref: W,
      className: y || !E ? _.buttonContainerVertical : _.buttonContainerHorizontal,
      children: null != C ? (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(c.Button, {
            className: _.button,
            size: R,
            onClick: e => {
              null == I || I(e), C(e), O(d.L.PRIMARY);
            },
            color: x || k ? c.Button.Colors.BRAND_INVERTED : c.Button.Colors.WHITE,
            children: null != g ? g : f.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }),
          (0, r.jsx)(c.Button, {
            className: _.button,
            size: R,
            onClick: e => {
              null == I || I(e), O(d.L.DISMISS);
            },
            color: x || k ? c.Button.Colors.WHITE : c.Button.Colors.BRAND,
            look: x || k ? c.Button.Looks.LINK : c.Button.Looks.FILLED,
            children: null != b ? b : f.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })
        ]
      }) : (0, r.jsx)(c.Button, {
        className: _.button,
        size: c.Button.Sizes.MAX,
        onClick: e => {
          null == I || I(e), O(d.L.PRIMARY);
        },
        color: c.Button.Colors.WHITE,
        children: f.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
      })
    }),
    (0, r.jsx)('div', {
      className: a()(_.pointer, {
        [_.bottomPointer]: 'top' === A,
        [_.centerLeftPointer]: 'right' === A && 'center' === P,
        [_.topLeftPointer]: 'right' === A && 'top' === P
      })
    })
  ]
})
  });
});