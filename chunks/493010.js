var i = n(735250),
  a = n(470079),
  l = n(704215),
  s = n(481060),
  r = n(475179),
  o = n(561472),
  c = n(287746),
  d = n(325708),
  u = n(541716),
  h = n(605236),
  p = n(665149),
  m = n(703558),
  _ = n(585483),
  f = n(909820),
  E = n(981631),
  C = n(921944),
  g = n(689938),
  I = n(822006);
t.Z = function(e) {
  let {
channel: t,
guild: n,
maxWidth: x
  } = e;
  a.useEffect(() => {
(0, h.EW)(l.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
  dismissAction: C.L.AUTO
});
  }, []);
  let T = a.useCallback(() => {
  r.Z.updateChatOpen(t.id, !1), _.S.safeDispatch(E.CkL.FOCUS_CHAT_BUTTON);
}, [t.id]),
v = (0, i.jsx)(p.ZP.Icon, {
  icon: s.CloseSmallIcon,
  tooltip: g.Z.Messages.CLOSE,
  onClick: T
});
  return (0, i.jsxs)(d.Z, {
sidebarType: d.y.CallChatSidebar,
maxWidth: x,
floatingLayer: f.ZP,
children: [
  (0, i.jsx)(o.Z, {
    channel: t,
    draftType: m.d.ChannelMessage
  }),
  (0, i.jsxs)(p.ZP, {
    toolbar: v,
    'aria-label': g.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
    children: [
      (0, i.jsx)(p.ZP.Icon, {
        icon: s.ChatIcon,
        disabled: !0,
        'aria-label': g.Z.Messages.VOICE_CHAT_TEXT_CHANNEL
      }),
      (0, i.jsx)(p.ZP.Title, {
        children: t.name
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: I.chat,
    children: (0, i.jsx)(c.Z, {
      channel: t,
      guild: n,
      chatInputType: u.I.SIDEBAR
    }, t.id)
  })
]
  });
};