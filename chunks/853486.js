var a = n(735250),
  t = n(470079),
  r = n(481060),
  l = n(665149),
  i = n(51144),
  o = n(246364),
  c = n(666233),
  d = n(50662),
  u = n(395716),
  I = n(673885),
  E = n(981631),
  _ = n(689938),
  T = n(839838);
s.Z = function(e) {
  let {
guild: s,
guildJoinRequest: N,
guildJoinRequestUser: C,
onClose: R
  } = e, M = t.useMemo(() => {
var e;
return null !== (e = N.formResponses) && void 0 !== e ? e : [];
  }, [N.formResponses]), m = s.hasFeature(E.oNc.CLAN) && N.applicationStatus === o.wB.SUBMITTED, A = t.useCallback(() => (0, r.openModalLazy)(async () => {
let {
  default: e
} = await n.e('17945').then(n.bind(n, 223926));
return n => (0, a.jsx)(e, {
  ...n,
  guild: s,
  guildJoinRequest: N,
  user: C
});
  }), [
s,
N,
C
  ]);
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)(l.ZP, {
    toolbar: (0, a.jsx)(l.ZP.Icon, {
      icon: r.CloseSmallIcon,
      onClick: R,
      tooltip: _.Z.Messages.CLOSE
    }),
    children: [
      (0, a.jsx)(l.ZP.Icon, {
        icon: r.UserIcon,
        disabled: !0,
        'aria-label': _.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATION
      }),
      (0, a.jsx)(r.Heading, {
        variant: 'heading-md/semibold',
        children: i.ZP.getName(C)
      })
    ]
  }),
  (0, a.jsx)(d.Z, {
    guildJoinRequest: N,
    guildJoinRequestUser: C,
    guild: s
  }),
  (0, a.jsxs)(r.Scroller, {
    children: [
      (0, a.jsxs)('div', {
        className: T.container,
        children: [
          (0, a.jsx)(I.Z, {
            user: C,
            guildId: s.id
          }),
          m && (0, a.jsxs)('div', {
            className: T.actionButtons,
            children: [
              (0, a.jsx)(u.Z, {
                joinRequest: N
              }),
              (0, a.jsx)(r.Button, {
                color: r.ButtonColors.PRIMARY,
                onClick: A,
                children: _.Z.Messages.CLAN_MEMBER_APPLICATION_REPORT_CTA
              })
            ]
          })
        ]
      }),
      (0, a.jsx)('div', {
        className: T.disabledFormRenderer,
        children: (0, a.jsx)(c.Z, {
          guildId: s.id,
          formFields: M,
          user: C
        })
      })
    ]
  })
]
  });
};