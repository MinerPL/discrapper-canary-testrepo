n.d(t, {
  Z: function() {
return d;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(481060),
  r = n(273504),
  l = n(689938),
  o = n(370522);

function c(e) {
  let {
preset: t,
toggled: n,
onToggle: a
  } = e, {
headerText: c,
subtitleText: d
  } = function(e) {
let t = null,
  n = null;
switch (e) {
  case r.Ux.PROFANITY:
    t = l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_PROFANITY_HEADER, n = (0, s.jsx)(s.Fragment, {
      children: l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_PROFANITY_SUBTITLE
    });
    break;
  case r.Ux.SEXUAL_CONTENT:
    t = l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SEXUAL_CONTENT_HEADER, n = (0, s.jsx)(s.Fragment, {
      children: l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SEXUAL_CONTENT_SUBTITLE
    });
    break;
  case r.Ux.SLURS:
    t = l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SLURS_HEADER, n = (0, s.jsx)(s.Fragment, {
      children: l.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_SLURS_SUBTITLE
    });
    break;
  default:
    t = 'Error', n = 'Unrecognized list';
}
return {
  headerText: t,
  subtitleText: n
};
  }(t);
  return (0, s.jsxs)('div', {
className: o.keywordListContainer,
children: [
  (0, s.jsxs)('div', {
    className: o.keywordListTextContainer,
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-sm/semibold',
        children: c
      }),
      (0, s.jsx)(i.Text, {
        color: 'interactive-normal',
        variant: 'text-xs/medium',
        children: d
      })
    ]
  }),
  (0, s.jsx)(i.Checkbox, {
    className: o.toggle,
    type: i.Checkbox.Types.INVERTED,
    value: n,
    onChange: () => a(t)
  })
]
  });
}

function d(e) {
  var t;
  let {
rule: n,
onChangeRule: i
  } = e, [l, o] = a.useState(new Set(null == n ? void 0 : null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.presets)), d = a.useMemo(() => e => {
i({
  ...n,
  triggerMetadata: {
    ...n.triggerMetadata,
    presets: e
  }
});
  }, [
i,
n
  ]), u = e => {
let t = new Set(l);
t.has(e) ? t.delete(e) : t.add(e), o(t), d(Array.from(t));
  };
  return (0, s.jsxs)('div', {
children: [
  (0, s.jsx)(c, {
    preset: r.Ux.PROFANITY,
    toggled: l.has(r.Ux.PROFANITY),
    onToggle: u
  }),
  (0, s.jsx)(c, {
    preset: r.Ux.SLURS,
    toggled: l.has(r.Ux.SLURS),
    onToggle: u
  }),
  (0, s.jsx)(c, {
    preset: r.Ux.SEXUAL_CONTENT,
    toggled: l.has(r.Ux.SEXUAL_CONTENT),
    onToggle: u
  })
]
  });
}