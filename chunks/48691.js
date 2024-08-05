t.d(n, {
  b: function() {
return _;
  },
  t: function() {
return d;
  }
});
var r = t(735250);
t(470079);
var i = t(481060),
  o = t(44315),
  l = t(377171),
  u = t(981631),
  a = t(689938),
  s = t(402462);

function c(e) {
  let {
label: n,
backgroundColor: t = l.Z.BUTTON_SECONDARY_BACKGROUND,
icon: o,
iconColor: u
  } = e;
  return (0, r.jsxs)('div', {
className: s.badge,
style: {
  backgroundColor: t
},
children: [
  (0, r.jsx)(i.Text, {
    variant: 'text-sm/normal',
    color: 'always-white',
    className: s.__invalid_badgeText,
    children: n
  }),
  (0, r.jsx)(o, {
    className: s.badgeIcon,
    color: null != u ? u : 'currentColor',
    'aria-hidden': !0
  })
]
  });
}

function d() {
  return (0, r.jsx)(c, {
label: a.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
backgroundColor: '#207B8D',
icon: i.SparklesIcon
  });
}

function _() {
  return (0, r.jsx)(c, {
label: a.Z.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
icon: i.PencilIcon,
iconColor: (0, o.Lq)(u.Ilk.PRIMARY_330)
  });
}