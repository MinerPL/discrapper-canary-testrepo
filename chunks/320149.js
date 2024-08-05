n.d(t, {
  Z: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(541716),
  o = n(665149),
  c = n(910611),
  d = n(355298),
  u = n(333984),
  _ = n(26373),
  h = n(486622),
  E = n(718538),
  I = n(359110),
  m = n(6025),
  g = n(433355),
  p = n(933557),
  T = n(287746),
  S = n(689938),
  f = n(240196),
  C = n(712759);

function N(e) {
  let {
channel: t,
baseChannelId: n
  } = e, N = (0, p.ZP)(t), A = (0, _.K)(), v = (0, _.V)(), Z = (0, s.e7)([d.Z], () => d.Z.isMessageRequest(t.id)), L = (0, s.e7)([u.Z], () => u.Z.isSpam(t.id)), O = (0, E.V)(t.id, t.getRecipientId()), R = a.useCallback(() => {
m.Z.closeChannelSidebar(g.uZ), Z && A && (0, I.Kh)(t.id), L && v && (0, I.Kh)(t.id);
  }, [
t.id,
L,
v,
Z,
A
  ]), x = a.useCallback(() => {
(0, r.showToast)((0, r.createToast)(S.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, r.ToastType.FAILURE));
  }, []), {
markAsNotSpam: b
  } = (0, h.m)({
onAcceptSuccess: R,
onError: x
  });
  if (null == t || !t.isDM())
return null;
  let P = [(0, i.jsx)(o.ZP.Icon, {
icon: r.CloseSmallIcon,
tooltip: S.Z.Messages.CLOSE,
onClick: () => m.Z.closeChannelSidebar(n)
  }, 'close')];
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(o.ZP, {
    toolbar: P,
    'aria-label': S.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
    children: (0, c.ud)({
      channel: t,
      channelName: N,
      inSidebar: !0
    })
  }),
  L && (0, i.jsxs)('div', {
    className: C.hamBanner,
    children: [
      (0, i.jsx)(r.Text, {
        className: C.__invalid_hamBannerText,
        variant: 'text-sm/normal',
        children: S.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }),
      (0, i.jsx)(r.Button, {
        className: C.hamBannerButton,
        size: r.ButtonSizes.SMALL,
        onClick: () => b(t, O),
        children: S.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: f.chat,
    children: (0, i.jsx)(T.Z, {
      channel: t,
      guild: null,
      chatInputType: l.I.SIDEBAR
    }, t.id)
  })
]
  });
}