n.d(t, {
  $: function() {
return g;
  },
  s: function() {
return p;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(470167),
  o = n(481060),
  c = n(572691),
  u = n(406432),
  d = n(584656),
  _ = n(153124),
  E = n(810090),
  I = n(163268),
  m = n(719548),
  T = n(689938),
  h = n(246829);
let N = e => {
let {
  attachment: t
} = e, {
  url: n,
  description: s
} = t;
return null == n ? null : (0, i.jsx)(f, {
  url: n,
  description: s
});
  },
  C = e => {
var t, n, s;
let {
  embed: a
} = e;
if (!m.n2.has(a.type))
  return null;
let r = void 0 !== a.video && a.type !== l.h.GIFV ? a.video.url : null !== (s = null === (t = a.thumbnail) || void 0 === t ? void 0 : t.url) && void 0 !== s ? s : null === (n = a.image) || void 0 === n ? void 0 : n.url;
return null == r ? null : (0, i.jsx)(f, {
  url: r
});
  },
  f = e => {
let {
  url: t,
  description: n
} = e, s = (0, u.cb)(t);
return (0, i.jsx)('div', {
  className: h.mediaContainer,
  children: s ? (0, i.jsx)(E.Z, {
    className: r()(h.video, h.media),
    controls: !0,
    src: t
  }) : (0, i.jsx)('img', {
    className: r()(h.image, h.media),
    src: t,
    alt: n
  })
});
  };

function p(e) {
  c.Z.pop(), (0, d.t)({
id: 'explicit-media-false-positive-modal',
text: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_SUCCESS
  }), e();
}

function g(e) {
  let {
channelId: t,
messageId: n,
isReportFalsePositiveLoading: a,
analyticsContext: r,
attachmentPreview: l,
embedPreview: c,
onConfirmPress: u,
transitionState: d,
onClose: E
  } = e, m = (0, _.Dt)(), f = s.useCallback(() => {
(0, I.aP)({
  action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
  channelId: t,
  messageId: n,
  context: r
}), E();
  }, [
t,
n,
r,
E
  ]), p = s.useCallback(() => {
null == u || u(), (0, I.aP)({
  action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
  channelId: t,
  messageId: n,
  context: r
});
  }, [
t,
n,
r,
u
  ]);
  return s.useEffect(() => {
(0, I.aP)({
  action: I.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
  channelId: t,
  messageId: n,
  context: r
});
  }, [
t,
n,
r
  ]), (0, i.jsxs)(o.ModalRoot, {
transitionState: d,
'aria-labelledby': m,
size: o.ModalSize.SMALL,
children: [
  (0, i.jsxs)(o.ModalContent, {
    children: [
      (0, i.jsx)(o.ModalCloseButton, {
        onClick: f,
        className: h.closeButton
      }),
      (0, i.jsx)(o.Heading, {
        id: m,
        variant: 'heading-lg/semibold',
        color: 'header-primary',
        className: h.header,
        children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_HEADER
      }),
      (0, i.jsx)(o.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        className: h.subheader,
        children: T.Z.Messages.OBSCURED_CONTENT_MARK_FALSE_POSITIVE_MODAL_DESCRIPTION
      }),
      null != l && (0, i.jsx)(N, {
        attachment: l
      }),
      null != c && (0, i.jsx)(C, {
        embed: c
      })
    ]
  }),
  (0, i.jsxs)(o.ModalFooter, {
    children: [
      (0, i.jsx)(o.Button, {
        className: h.button,
        disabled: a,
        submitting: a,
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        onClick: p,
        children: T.Z.Messages.CONFIRM
      }),
      (0, i.jsx)(o.Button, {
        className: h.button,
        disabled: a,
        color: o.Button.Colors.TRANSPARENT,
        size: o.Button.Sizes.MEDIUM,
        onClick: f,
        children: T.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}