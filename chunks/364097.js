n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(955415),
  l = n(846587),
  o = n(409059),
  c = n(58346),
  u = n(689938),
  d = n(240289),
  _ = n(29062);

function E(e) {
  var t;
  let {
code: E
  } = e, I = (0, a.e7)([o.Z], () => o.Z.getGuildTemplate(E));
  if (null == I || I.state === c.Rj.RESOLVING)
return (0, i.jsxs)(r.Z, {
  children: [
    (0, i.jsx)(r.Z.Header, {
      text: u.Z.Messages.GUILD_TEMPLATE_RESOLVING_TITLE
    }),
    (0, i.jsx)(r.Z.Body, {
      resolving: !0
    })
  ]
});
  if (I.state === c.Rj.EXPIRED)
return (0, i.jsxs)(r.Z, {
  children: [
    (0, i.jsx)(r.Z.Header, {
      text: u.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE
    }),
    (0, i.jsxs)(r.Z.Body, {
      children: [
        (0, i.jsx)(r.Z.Icon, {
          expired: !0
        }),
        (0, i.jsx)(r.Z.Info, {
          expired: !0,
          title: u.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
        })
      ]
    })
  ]
});
  let m = __OVERLAY__ ? (0, i.jsx)(r.Z.Button, {
isDisabled: !0,
color: r.Z.Button.Colors.PRIMARY,
children: u.Z.Messages.GUILD_TEMPLATE_EMBED_VIEW_IN_APP
  }) : (0, i.jsx)(r.Z.Button, {
onClick: () => {
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      n.e('10778'),
      n.e('50389')
    ]).then(n.bind(n, 766775));
    return t => (0, i.jsx)(e, {
      ...t,
      guildTemplate: I
    });
  });
},
submitting: I.state === c.Rj.ACCEPTING,
color: r.Z.Button.Colors.GREEN,
children: u.Z.Messages.GUILD_TEMPLATE_OPEN
  });
  return (0, i.jsxs)(r.Z, {
children: [
  (0, i.jsx)(r.Z.Header, {
    text: u.Z.Messages.GUILD_TEMPLATE_RESOLVED_EMBED_TITLE
  }),
  (0, i.jsxs)(r.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: _.headerLine,
        children: [
          (0, i.jsx)(l.Z, {
            className: d.icon
          }),
          (0, i.jsx)(r.Z.Info, {
            title: I.name,
            children: u.Z.Messages.GUILD_TEMPLATE_USAGES.format({
              usageCount: String(null !== (t = I.usageCount) && void 0 !== t ? t : 0)
            })
          })
        ]
      }),
      m
    ]
  })
]
  });
}