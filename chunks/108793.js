s.d(t, {
  Z: function() {
return S;
  }
}), s(47120);
var n = s(735250),
  i = s(470079),
  a = s(338545),
  r = s(481060),
  l = s(230711),
  o = s(318661),
  u = s(63063),
  d = s(51144),
  c = s(544508),
  E = s(801461),
  _ = s(981631),
  m = s(689938),
  g = s(740080);

function S(e) {
  let {
userRef: t,
usernameSuggestionLoading: s = !1,
oneClickFlow: S = !1,
...I
  } = e, {
user: T,
editState: O,
onClose: N
  } = I, h = (0, o.ZP)(T.id), f = function(e, t, s) {
switch (e) {
  case E.Wq.EDIT_USERNAME:
    return {
      header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
    };
  case E.Wq.EDIT_DISPLAY_NAME:
    return {
      header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE,
        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
    };
  case E.Wq.PREVIEW:
    return {
      header: m.Z.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
          displayName: t
        }),
        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
          onClick: () => {
            s(), l.Z.open(_.oAB.ACCOUNT);
          }
        })
    };
  case E.Wq.SUGGESTION:
    return {
      header: m.Z.Messages.POMELO_ACTION_LABEL_OCF,
        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_OCF.format(),
        link: m.Z.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
          helpdeskArticle: u.Z.getArticleURL(_.BhN.POMELO_FAQ)
        })
    };
  default:
    return {
      header: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE,
        subtitle: m.Z.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
    };
}
  }(O, d.ZP.getName(T), N), [M, L] = (0, r.useSpring)(() => ({
opacity: 0,
y: 10
  }));
  return i.useEffect(() => {
L({
  y: 0,
  opacity: 1,
  from: {
    y: 10,
    opacity: 0
  }
});
  }, [
L,
O
  ]), (0, n.jsxs)('div', {
className: g.displayNameContainer,
children: [
  (0, n.jsxs)(a.animated.div, {
    style: {
      opacity: M.opacity,
      y: M.y
    },
    children: [
      (0, n.jsx)(r.Heading, {
        className: g.title,
        color: 'header-primary',
        variant: 'heading-xl/extrabold',
        children: f.header
      }),
      (0, n.jsxs)('div', {
        className: g.subtitle,
        children: [
          (0, n.jsx)(r.Heading, {
            color: 'header-secondary',
            variant: 'heading-sm/medium',
            children: f.subtitle
          }),
          null != f.link && (0, n.jsx)(r.Text, {
            className: g.link,
            color: 'header-secondary',
            variant: 'text-sm/medium',
            children: f.link
          })
        ]
      })
    ]
  }),
  (0, n.jsx)(c.Z, {
    ...I,
    displayProfile: h,
    ref: t,
    usernameSuggestionLoading: s,
    oneClickFlow: S
  })
]
  });
}