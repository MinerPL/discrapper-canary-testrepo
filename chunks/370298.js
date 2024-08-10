n.d(t, {
  Z: function() {
return T;
  }
}), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(442837),
  c = n(481060),
  d = n(166459),
  s = n(476326),
  u = n(827498),
  m = n(213459),
  p = n(895924),
  _ = n(581364),
  E = n(667204),
  g = n(147391),
  x = n(978983),
  h = n(592125),
  f = n(703558),
  M = n(430824),
  C = n(626135),
  A = n(619895),
  I = n(844439),
  N = n(957552),
  v = n(981631),
  O = n(689938),
  P = n(89311),
  y = n(206227);

function T(e) {
  let {
toggleShowMenu: t,
showMenu: n,
className: o,
channelId: a,
imageUrl: l,
mimeType: d
  } = e, s = (0, r.e7)([h.Z], () => h.Z.getChannel(a));
  return null == s ? null : (0, i.jsx)(c.Popout, {
renderPopout: e => {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(b, {
    onClose: t,
    channel: s,
    imageUrl: l,
    mimeType: d
  });
},
position: 'right',
align: 'top',
animation: c.Popout.Animation.NONE,
onRequestClose: t,
shouldShow: n,
children: e => {
  let {
    onClick: n
  } = e;
  return (0, i.jsx)(c.Tooltip, {
    text: O.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
    children: e => (0, i.jsx)(c.Clickable, {
      ...e,
      className: o,
      focusProps: {
        offset: 2
      },
      onClick: t,
      'aria-label': O.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
      children: (0, i.jsx)(c.AppsIcon, {
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

function b(e) {
  let {
onSelect: t,
onClose: n,
channel: a,
imageUrl: l,
mimeType: h
  } = e, N = (0, r.e7)([M.Z], () => M.Z.getGuild(a.guild_id)), {
fetchState: y,
imageRecCommandContexts: T
  } = (0, A.hR)({
channelId: a.id
  }), b = (0, m.PL)(!0, !0), S = (0, m.LD)(a.guild_id, !0), F = y === I.M.FETCHING;
  o.useEffect(() => {
(y === I.M.ERROR || y === I.M.FETCHED && 0 === T.length) && n();
  }, [
y,
T.length,
n
  ]), o.useEffect(() => {
var e, t;
if (!F && 0 !== T.length)
  C.default.track(v.rMx.APP_IMAGE_RECS_MENU_VIEWED, {
    guild_id: null !== (e = null == a ? void 0 : a.guild_id) && void 0 !== e ? e : '',
    channel_id: null !== (t = null == a ? void 0 : a.id) && void 0 !== t ? t : '',
    application_ids: [...T.map(e => Number(e.application.id))],
    command_ids: [...T.map(e => Number(e.command.id))]
  });
  }, [
T,
a,
F
  ]);
  let Z = o.useCallback(async e => {
  let t = await fetch(l),
    n = await t.arrayBuffer(),
    i = h.join('/'),
    o = new File([n], 'ContextualImageRecsUpload'.concat((0, A.Qm)({
      contentType: i
    })), {
      type: i
    });
  d.Z.setFile({
    channelId: a.id,
    id: e,
    file: {
      id: e,
      file: o,
      platform: s.ow.WEB
    },
    draftType: f.d.SlashCommand
  });
}, [
  l,
  a.id,
  h
]),
j = o.useCallback(async e => {
  var t, n;
  let i = e.applicationId,
    o = (null === (t = b.result) || void 0 === t ? void 0 : t.sections[i]) != null,
    l = (null === (n = S.result) || void 0 === n ? void 0 : n.sections[i]) != null;
  o || l || m.ZP.queryInstallOnDemandApp(e.applicationId, a.id);
  let r = await (0, g.L)({
    applicationId: i,
    userIndexState: b,
    guildIndexState: S,
    location: p.Vh.IMAGE_RECS_MENU,
    source: u._b.TEXT
  });
  if ((0, _.qJ)({
      command: e,
      location: p.Vh.IMAGE_RECS_MENU,
      source: u._b.TEXT
    }), r) {
    let t = A.Id[e.id],
      n = t.additionalOptions;
    await Z(t.imageOption), await (0, E.Z)({
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
        guild: N
      },
      commandOrigin: p.bB.IMAGE_RECS_MENU
    });
  }
}, [
  a,
  N,
  b,
  S,
  Z
]);
  return (0, i.jsxs)(c.Menu, {
onSelect: t,
navId: 'image-context-commands-popout',
onClose: n,
'aria-label': O.Z.Messages.APP_IMAGE_REC_MENU_ARIA_LABEL,
children: [
  (0, i.jsx)(c.MenuItem, {
    id: 'menu-image-rec-header',
    render: () => (0, i.jsx)(c.Text, {
      className: P.title,
      variant: 'text-md/bold',
      color: 'header-primary',
      children: O.Z.Messages.APP_IMAGE_REC_MENU_HEADER
    }),
    navigable: !1,
    disabled: !0
  }, 'menu-image-rec-header'),
  (0, i.jsx)(c.MenuSeparator, {}),
  F ? (0, i.jsx)(c.MenuItem, {
    id: 'menu-image-recs-placeholder',
    render: () => (0, i.jsx)(x.Z, {}),
    navigable: !1,
    disabled: !0
  }, 'menu-image-recs-placeholder') : (0, i.jsx)(i.Fragment, {
    children: T.map(e => (0, i.jsx)(c.MenuItem, {
      id: e.command.id,
      action: () => j(e.command),
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
className: l()(y.item, y.labelContainer, y.colorDefault, {
  [y.focused]: a
}),
children: [
  (0, i.jsx)('div', {
    className: l()(y.iconContainerLeft, P.appIcon),
    children: (0, i.jsx)(N.Z, {
      application: o,
      className: P.appIcon
    })
  }),
  (0, i.jsxs)('div', {
    className: y.label,
    children: [
      (0, i.jsx)('div', {
        className: l()(P.name, {
          [P.focused]: a
        }),
        children: null !== (t = A.Id[n.id].overrideCommandName) && void 0 !== t ? t : n.name
      }),
      (0, i.jsx)('div', {
        className: l()(P.description, y.subtext),
        children: n.description
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: l()(y.iconContainer, P.icon),
    children: (0, i.jsx)(c.SendMessageIcon, {})
  })
]
  }, n.id);
}