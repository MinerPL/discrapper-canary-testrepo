n.d(t, {
  Z: function() {
return c;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(481060),
  r = n(428760),
  l = n(689938),
  o = n(655583);

function c(e) {
  let {
onChange: t,
initialValue: n,
maxWordCount: c,
collapsed: d = !1
  } = e, [u, _] = a.useState(!d);
  return (0, s.jsx)(i.Collapsible, {
isExpanded: u,
collapsibleContent: (0, s.jsx)(r.Z, {
  onChangeText: t,
  maxWordCount: c,
  className: o.keywordTextAreaContainer,
  textAreaClassName: o.keywordTextArea,
  subtitleText: l.Z.Messages.GUILD_AUTOMOD_ALLOW_LIST_SUBTITLE,
  initialValue: n
}),
className: o.collapseable,
children: e => {
  let {
    onClick: t
  } = e;
  return (0, s.jsx)(i.Clickable, {
    onClick: e => {
      _(!u), t(e);
    },
    children: (0, s.jsxs)('div', {
      className: o.header,
      children: [
        (0, s.jsx)(i.Heading, {
          variant: 'text-sm/medium',
          children: l.Z.Messages.GUILD_AUTOMOD_ALLOW_LIST_TITLE
        }),
        u ? (0, s.jsx)(i.ChevronSmallUpIcon, {
          size: 'md',
          color: 'currentColor',
          className: o.arrow
        }) : (0, s.jsx)(i.ChevronSmallDownIcon, {
          size: 'md',
          color: 'currentColor',
          className: o.arrow
        })
      ]
    })
  });
}
  });
}