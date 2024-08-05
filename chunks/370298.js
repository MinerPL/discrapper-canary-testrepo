n.d(t, {
  Z: function() {
return P;
  }
}), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(442837),
  s = n(481060),
  u = n(166459),
  d = n(476326),
  c = n(827498),
  m = n(213459),
  p = n(895924),
  h = n(581364),
  _ = n(667204),
  E = n(147391),
  I = n(688465),
  x = n(978983),
  g = n(592125),
  C = n(703558),
  M = n(430824),
  f = n(626135),
  N = n(619895),
  T = n(844439),
  O = n(957552),
  A = n(981631),
  v = n(689938),
  y = n(89311),
  j = n(206227);

function P(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: o,
channelId: a,
imageUrl: l,
mimeType: u
  } = e, d = (0, r.e7)([g.Z], () => g.Z.getChannel(a));
  return null == d ? null : (0, i.jsx)(s.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(S, {
    onClose: t,
    channel: d,
    imageUrl: l,
    mimeType: u
  });
},
position: 'right',
align: 'top',
animation: s.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(s.Tooltip, {
    text: v.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(s.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': v.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(s.AppsIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20,
        height: 20
      })
    })
  });
}
  });
}

function S(e) {
  let {
onSelect: t,
onClose: n,
channel: a,
imageUrl: l,
mimeType: g
  } = e, O = (0, r.e7)([M.Z], () => M.Z.getGuild(a.guild_id)), {
fetchState: j,
imageRecCommandContexts: P
  } = (0, N.hR)({
channelId: a.id
  }), S = (0, m.PL)(!0, !0), b = (0, m.LD)(a.guild_id, !0), w = j === T.M.FETCHING;
  o.useEffect(() => {
var e, t;
if (!w && 0 !== P.length)
  f.default.track(A.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '',
    application_ids: [...P.map(e => Number(e.application.id))],
    command_ids: [...P.map(e => Number(e.command.id))]
  });
  }, [
P,
a,
w
  ]);
  let F = o.useCallback(async e => {
  let t = await fetch(l),
    n = await t.arrayBuffer(),
    i = g.join('/'),
    o = new File([n], 'ContextualImageRecsUpload'.concat((0, N.Qm)({
      contentType: i
    })), {
      type: i
    });
  u.Z.setFile({
    channelId: a.id,
    id: e,
    file: {
      id: e,
      file: o,
      platform: d.ow.WEB
    },
    draftType: C.d.SlashCommand
  });
}, [
  l,
  a.id,
  g
]),
D = o.useCallback(async e => {
  var t, n;
  let i = e.applicationId,
    o = (null === (t = S.result) || void 0 === t ? void 0 : t.sections[i]) != null,
    l = (null === (n = b.result) || void 0 === n ? void 0 : n.sections[i]) != null;
  if (o || l || m.ZP.queryInstallOnDemandApp(e.applicationId, a.id), await (0, E.L)({
      applicationId: i,
      userIndexState: S,
      guildIndexState: b,
      location: p.Vh.IMAGE_RECS_MENU,
      source: c._b.TEXT
    })) {
    let t = N.Id[e.id],
      n = t.additionalOptions;
    await F(t.imageOption), (0, h.qJ)({
      command: e,
      location: p.Vh.IMAGE_RECS_MENU,
      source: c._b.TEXT
    }), await (0, _.Z)({
      command: {
        ...e
      },
      optionValues: {
        [t.imageOption]: [{
          text: 'image',
          type: 'text'
        }],
        ...null == n ? {} : n[Math.floor(Math.random() * n.length)]
      },
      context: {
        channel: a,
        guild: O
      },
      commandOrigin: p.bB.IMAGE_RECS_MENU
    });
  }
}, [
  a,
  O,
  S,
  b,
  F
]);
  return (0, i.jsxs)(s.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': v.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(s.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsxs)('div', {
      className: y.flexRow,
      children: [
        (0, i.jsx)(s.Text, {
          className: y.title,
          variant: 'text-md/bold',
          color: 'header-primary',
          children: v.Z.Messages.APP_IMAGE_REC_MENU_HEADER
        }),
        (0, i.jsx)(I.Z, {})
      ]
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(s.MenuSeparator, {}),
  w ? (0, i.jsx)(s.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(x.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: P.map(e => (0, i.jsx)(s.MenuItem, {
      id: e.command.id,
      action: () => D(e.command),
      render: t => (0, i.jsx)(R, {
        ...e,
        isFocused: t.isFocused
      })
    }, e.command.id))
  })
]
  });
}

function R(e) {
  var t;
  let {
command: n,
application: o,
isFocused: a
  } = e;
  return (0, i.jsxs)('div', {
className: l()(j.item, j.labelContainer, j.colorDefault, {
  [j.focused]: a
}),
children: [
  (0, i.jsx)('div', {
    className: l()(j.iconContainerLeft, y.appIcon),
    children: (0, i.jsx)(O.Z, {
      application: o,
      className: y.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: j.label,
    children: [
      (0, i.jsx)('div', {
        className: l()(y.name, {
          [y.focused]: a
        }),
        children: null !== (t = N.Id[n.id].overrideCommandName) && void 0 !== t ? t : n.name
      }),
      (0, i.jsx)('div', {
        className: l()(y.description, j.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: l()(j.iconContainer, y.icon),
    children: (0, i.jsx)(s.SendMessageIcon, {})
  })
]
  }, n.id);
}