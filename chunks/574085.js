n.d(t, {
  Z: function() {
return _;
  }
}), n(47120), n(653041);
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(723047),
  r = n(727843),
  l = n(290348),
  o = n(764163),
  c = n(155758),
  d = n(293810),
  u = n(689938);

function _() {
  let {
editStateId: e,
guildId: t
  } = (0, r.N)(), [n, _] = l.R7(e);

  function I(e, t) {
let {
  name: s,
  description: a,
  emojiId: i,
  emojiName: r
} = e, l = [...n], o = {
  name: s,
  description: a,
  emoji_id: i,
  emoji_name: r,
  ref_type: d.Qs.INTANGIBLE,
  ref_id: void 0
};
null != t ? l[t] = o : l.push(o), _(l);
  }
  let E = (0, i.mY)();
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(c.p, {
    benefits: n,
    onEdit: function(e) {
      (0, a.openModal)(a => (0, s.jsx)(o.DI, {
        ...a,
        guildId: t,
        initialData: n[e],
        onSave: t => I(t, e),
        onDelete: () => function(e) {
          let t = [...n];
          t.splice(e, 1), _(t);
        }(e)
      }));
    },
    onMove: function(e, t) {
      let s = [...n],
        [a] = s.splice(e, 1);
      s.splice(t, 0, a), _(s);
    },
    guildId: t
  }),
  n.length > 0 ? (0, s.jsx)(a.Spacer, {
    size: 8
  }) : null,
  (0, s.jsx)(c.s, {
    onClick: function() {
      (0, a.openModal)(e => (0, s.jsx)(o.DI, {
        ...e,
        guildId: t,
        onSave: e => I(e)
      }));
    },
    disabled: E,
    children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_ADD_BUTTON_TEXT
  })
]
  });
}