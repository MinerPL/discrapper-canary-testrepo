a.d(t, {
  Z: function() {
return j;
  }
}), a(47120);
var n = a(735250),
  r = a(470079),
  s = a(442837),
  i = a(481060),
  o = a(430824),
  l = a(259580),
  c = a(598952),
  d = a(392739),
  u = a(916001),
  m = a(981631),
  x = a(689938),
  _ = a(532236);
let h = 'expanded-area';

function f(e) {
  let {
attachments: t,
role: a,
roleLocked: s
  } = e, [o, m] = r.useState(!1);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(i.Clickable, {
    className: _.viewContents,
    onClick: () => {
      m(e => !e);
    },
    'aria-expanded': o,
    'aria-controls': h,
    children: [
      (0, n.jsx)(i.Text, {
        variant: 'text-sm/medium',
        color: 'text-normal',
        children: o ? x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_COLLAPSE_CONTENTS : x.Z.Messages.GUILD_PRODUCT_INFO_MODAL_VIEW_CONTENTS
      }),
      (0, n.jsx)(l.Z, {
        className: _.caretIcon,
        direction: o ? l.Z.Directions.UP : l.Z.Directions.DOWN
      })
    ]
  }),
  (0, n.jsx)(i.Spacer, {
    size: 12
  }),
  o && (0, n.jsxs)('ul', {
    className: _.contentsContainer,
    id: h,
    children: [
      (0, n.jsx)(d.Z, {
        label: x.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE,
        children: (0, n.jsx)('ul', {
          className: _.attachmentGrid,
          children: t.map(e => (0, n.jsx)(c.Z, {
            attachment: e
          }, e.id))
        })
      }),
      null != a && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)('div', {
            className: _.separator
          }),
          (0, n.jsx)(d.Z, {
            label: x.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE,
            children: (0, n.jsx)(u.Z, {
              role: a,
              textVariant: 'text-md/medium',
              locked: s
            })
          })
        ]
      })
    ]
  })
]
  });
}

function j(e) {
  var t;
  let {
listing: a
  } = e, r = null !== (t = a.attachments) && void 0 !== t ? t : [], i = (0, s.e7)([o.Z], () => {
var e;
return o.Z.getRole(a.guild_id, null !== (e = a.role_id) && void 0 !== e ? e : m.lds);
  }), l = !a.has_entitlement;
  return 0 === r.length && null == i ? null : 0 === r.length && null != i ? (0, n.jsx)(u.Z, {
role: i,
textVariant: 'text-md/medium',
locked: l
  }) : (0, n.jsx)(f, {
attachments: r,
role: i,
roleLocked: l
  });
}