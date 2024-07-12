var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(653603),
  o = n.n(r),
  c = n(442837),
  d = n(481060),
  u = n(904245),
  h = n(232961),
  p = n(223606),
  m = n(63063),
  _ = n(530472),
  f = n(453687),
  E = n(930282),
  C = n(318713),
  g = n(981631),
  I = n(689938),
  x = n(543151),
  T = n(475525),
  v = n(153521);
let N = a.memo(function(e) {
  let {
message: t,
notice: n,
compact: a = !1,
onDismiss: l
  } = e;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: s()(x.blockedNoticeContainer, {
      [x.compact]: a
    }),
    children: [
      (0, i.jsx)('div', {
        className: x.blockedNoticeIcon,
        children: (0, i.jsx)(d.ShieldIcon, {
          size: 'xs',
          color: 'currentColor',
          className: x.shieldIcon
        })
      }),
      (0, i.jsx)('div', {
        className: x.blockedNotice,
        children: (0, i.jsx)(d.Text, {
          variant: 'text-sm/normal',
          color: 'interactive-normal',
          children: n
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: s()(x.ephemeralAccessories, {
      [x.compact]: a
    }),
    children: (0, i.jsx)(_.Z, {
      message: t,
      onDeleteMessage: l,
      children: (0, i.jsx)(d.Text, {
        variant: 'text-xs/normal',
        color: 'interactive-normal',
        tag: 'span',
        className: x.learnMore,
        children: I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({
          helpUrl: m.Z.getArticleURL(g.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
        })
      })
    })
  })
]
  });
});
t.Z = a.memo(function(e) {
  var t, n;
  let {
className: l,
compact: r,
message: d,
children: m,
content: _,
onUpdate: g
  } = e, S = null === (t = d.editedTimestamp) || void 0 === t ? void 0 : t.toString(), Z = a.useRef(!1), A = (0, c.e7)([p.Z], () => p.Z.getMessage(d.id), [d.id]), M = a.useCallback(() => {
(null == A ? void 0 : A.isBlockedEdit) ? (0, h.I)(d.id) : u.Z.deleteMessage(d.channel_id, d.id, !0);
  }, [
d,
A
  ]);
  return a.useLayoutEffect(() => {
Z.current ? null != g && g() : Z.current = !0;
  }, [
g,
d.content,
_,
S,
m
  ]), (0, i.jsxs)('div', {
id: (0, f.ut)(d),
className: s()(l, v.markup, {
  [T.messageContent]: !0,
  [T.markupRtl]: 'rtl' === o()(d.content),
  [x.blockedEdit]: null == A ? void 0 : A.isBlockedEdit,
  [x.blockedSend]: !(null == A ? void 0 : A.isBlockedEdit)
}),
children: [
  null != m ? m : (0, E.L5)(d, _),
  (null == A ? void 0 : A.isBlockedEdit) && null != d.timestamp && (0, i.jsxs)(i.Fragment, {
    children: [
      ' ',
      (0, i.jsx)(C.Z, {
        timestamp: d.timestamp,
        isEdited: !0,
        isInline: !1,
        children: (0, i.jsxs)('span', {
          className: T.edited,
          children: [
            '(',
            I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX,
            ')'
          ]
        })
      })
    ]
  }),
  (0, i.jsx)(N, {
    notice: null !== (n = null == A ? void 0 : A.errorMessage) && void 0 !== n ? n : I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
    message: d,
    compact: r,
    onDismiss: M
  })
]
  });
}, E.HR);