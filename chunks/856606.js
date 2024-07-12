s.d(t, {
  Z: function() {
return Q;
  },
  n: function() {
return G;
  }
}), s(724458), s(653041), s(411104);
var n = s(735250),
  l = s(470079),
  a = s(392711),
  i = s.n(a),
  r = s(149765),
  o = s(442837),
  d = s(780384),
  c = s(481060),
  u = s(668781),
  h = s(493683),
  m = s(741361),
  g = s(668390),
  E = s(144991),
  T = s(852860),
  p = s(911969),
  N = s(410030),
  _ = s(607070),
  S = s(146085),
  x = s(598077),
  f = s(277053),
  C = s(388610),
  I = s(271383),
  M = s(430824),
  R = s(496675),
  Z = s(594174),
  v = s(568987),
  O = s(442313),
  A = s(823379),
  L = s(892880),
  b = s(63063),
  j = s(5192),
  D = s(233608),
  y = s(700785),
  w = s(51144),
  P = s(257017),
  F = s(188857),
  B = s(981631),
  U = s(689938),
  H = s(77398);
let G = o.ZP.connectStores([
  f.Z,
  C.Z
], () => {
  let e = C.Z.getChannel();
  return {
submitting: f.Z.formState === B.QZA.SUBMITTING,
onReset() {
  (0, m.S1)();
},
onSave() {
  if (null == e)
    return;
  let t = f.Z.editedPermissionIds.reduce((e, t) => {
    let s = f.Z.getPermissionOverwrite(t);
    return null != s && e.push(s), e;
  }, []);
  (0, m.hw)(e.id, t);
}
  };
})(T.Z);

function k(e) {
  let {
overwrite: t
  } = e, s = (0, o.e7)([f.Z], () => f.Z.channel), l = (0, o.e7)([M.Z], () => null != s ? M.Z.getGuild(s.getGuildId()) : null), a = (0, o.e7)([M.Z], () => null != l ? M.Z.getRoles(l.id) : void 0);
  if (null == s || null == l || null == t)
return null;
  let {
guild_id: i,
id: d
  } = s, {
id: g
  } = t, T = () => {
var e;
if (null == M.Z.getGuild(i) || null == a)
  return '';
let t = a[g],
  s = Z.default.getUser(g),
  n = null !== (e = null == s ? void 0 : s.username) && void 0 !== e ? e : '';
return null != t ? t.name : n;
  }, N = (e, n) => {
if ('boolean' == typeof n)
  throw Error('Unexpected boolean action');
let {
  allow: l,
  deny: a
} = t;
switch (a = r.Od(a, e), l = r.Od(l, e), n) {
  case 'ALLOW':
    l = r.IH(l, e);
    break;
  case 'DENY':
    a = r.IH(a, e);
}
if (R.Z.can(e, s, {
    [g]: {
      ...t,
      allow: l,
      deny: a
    }
  }))
  (0, m.kY)(s, g, l, a);
else {
  let e;
  if (t.type === p.BN.MEMBER) {
    let s = Z.default.getUser(t.id);
    null != s && (e = w.ZP.getName(s));
  } else if (t.type === p.BN.ROLE) {
    let n = M.Z.getGuild(s.getGuildId());
    if (null != n) {
      let s = M.Z.getRole(n.id, t.id);
      null != s && (e = s.name);
    }
  }
  P.X(e);
}
  }, _ = () => {
let e = T();
u.Z.show({
  title: U.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
  body: U.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
    name: e
  }),
  cancelText: U.Z.Messages.CANCEL,
  onConfirm: () => h.Z.clearPermissionOverwrite(d, g)
});
  }, x = e => {
let t = R.Z.can(B.Plq.ADMINISTRATOR, l) || R.Z.can(B.Plq.MANAGE_ROLES, s, void 0, void 0, !0);
return s.isGuildStageVoice() && S.xS.has(e) ? U.Z.Messages.STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION : !((!r.fS(e, B.Plq.MANAGE_ROLES) || t) && (null == e || R.Z.can(e, l) || t)) && U.Z.Messages.HELP_MISSING_PERMISSION;
  }, C = g === i, I = s.isForumLikeChannel() && r.e$(t.deny, B.Plq.SEND_MESSAGES), v = r.e$(t.deny, B.Plq.SEND_MESSAGES), A = r.e$(t.deny, B.Plq.READ_MESSAGE_HISTORY), L = D.Z.generateChannelPermissionSpec(i, s, C, {
createPostsDisabled: I,
sendMessagesDisabled: v,
readMessageHistoryDisabled: A
  });
  return (0, n.jsxs)(O.ZP.Content, {
className: H.layoutStyle,
children: [
  L.map((e, s) => (0, n.jsx)(E.Z, {
    spec: e,
    allow: t.allow,
    deny: t.deny,
    onChange: N,
    permissionRender: x,
    className: H.permissionsForm
  }, s)),
  i === g ? null : (0, n.jsx)(c.Button, {
    look: c.Button.Looks.OUTLINED,
    color: c.Button.Colors.RED,
    onClick: _,
    children: U.Z.Messages.REMOVE_ROLE_OR_USER.format({
      name: T()
    })
  })
]
  });
}

function V(e) {
  let {
guildId: t,
channelId: s,
user: l
  } = e, a = l.getAvatarURL(t, 32), i = j.ZP.getNickname(t, s, l), r = w.ZP.useUserTag(l), o = null, d = null;
  return o = null != i ? i : l.hasAvatarForGuild(t) ? l.username : r, (null != i || l.hasAvatarForGuild(t)) && (d = (0, n.jsxs)('div', {
className: H.userRowSubText,
children: [
  l.hasAvatarForGuild(t) ? (0, n.jsx)(c.Avatar, {
    className: H.userRowSubAvatar,
    size: c.AvatarSizes.SIZE_16,
    src: l.getAvatarURL(void 0, 16),
    'aria-label': l.username
  }) : null,
  (0, n.jsx)(c.Text, {
    variant: 'text-xs/normal',
    color: 'text-muted',
    children: r
  })
]
  })), (0, n.jsxs)('div', {
className: H.inline,
children: [
  (0, n.jsx)(c.Avatar, {
    size: c.AvatarSizes.SIZE_32,
    src: a,
    'aria-label': l.username,
    className: H.userRowAvatar
  }),
  (0, n.jsxs)('div', {
    className: H.userRowText,
    children: [
      (0, n.jsx)(c.Text, {
        className: H.userRowText,
        variant: 'text-md/normal',
        children: o
      }),
      d
    ]
  })
]
  });
}

function W(e) {
  return 'object' == typeof e && null != e && 'colorString' in e && 'name' in e;
}

function z(e) {
  let {
guild: t,
channel: s,
permissionOverwrites: l,
onClose: a,
onSelect: r,
position: d
  } = e, c = (0, o.e7)([M.Z], () => M.Z.getRoles(t.id)), u = (0, o.Wu)([I.ZP], () => I.ZP.getMemberIds(t.id));
  return (0, n.jsx)(v.Z, {
label: U.Z.Messages.OVERWRITE_AUTOCOMPLETE_LABEL,
placeholder: U.Z.Messages.OVERWRITE_AUTOCOMPLETE_PLACEHOLDER,
'aria-label': U.Z.Messages.OVERWRITE_AUTOCOMPLETE_A11Y_LABEL,
sections: [
  U.Z.Messages.ROLES,
  U.Z.Messages.MEMBERS
],
onRenderResult: e => {
  if (W(e)) {
    let t;
    return null != e.colorString && (t = {
      color: e.colorString
    }), (0, n.jsx)('span', {
      style: t,
      children: e.name
    });
  }
  if (e instanceof x.Z)
    return (0, n.jsx)(V, {
      guildId: t.id,
      channelId: s.id,
      user: e
    });
},
onFilterResults: (e, t) => 0 === t ? i()(c).filter(t => null == l[t.id] && e(t.name)).sortBy(e => -e.position).value() : i()(u).map(Z.default.getUser).filter(A.lm).filter(e => !e.isClyde()).filter(t => null == l[t.id] && e(t.username.toLowerCase())).sortBy(e => e.username.toLowerCase()).value(),
onQueryChange: e => {
  L.Z.requestMembers(t.id, e, 20);
},
onSelect: e => {
  if (null != e)
    W(e) ? r(e.id, p.BN.ROLE) : e instanceof x.Z && r(e.id, p.BN.MEMBER);
},
onClose: a,
position: d
  });
}

function Y() {
  let {
channel: e,
permissionOverwrites: t,
selectedOverwriteId: a
  } = (0, o.cj)([f.Z], () => f.Z), r = null == e ? void 0 : e.getGuildId(), {
guild: u,
guildRoles: E
  } = (0, o.cj)([M.Z], () => {
let e = null != r ? M.Z.getGuild(r) : void 0,
  t = null != e ? M.Z.getRoles(e.id) : void 0;
return {
  guild: e,
  guildRoles: t
};
  }, [r]), T = (0, F.Z)(r, t), S = (0, N.ZP)(), x = (0, o.e7)([_.Z], () => _.Z.roleStyle);
  if (null == u || null == E || null == e || null == t)
return null;
  let C = s => {
  let {
    position: l,
    closePopout: a
  } = s;
  return (0, n.jsx)(z, {
    guild: u,
    channel: e,
    permissionOverwrites: t,
    position: null != l ? l : 'bottom',
    onSelect: I,
    onClose: a
  });
},
I = (t, s) => {
  h.Z.updatePermissionOverwrite(e.id, {
    id: t,
    type: s,
    allow: y.Hn,
    deny: y.Hn
  }).then(() => (0, m.Aj)(t));
};
  null != t && null == t[u.id] && (t[u.id] = y.we(u.id));
  let R = i()(t).filter(e => e.type === p.BN.ROLE).map(e => E[e.id]).filter(A.lm).sortBy(e => -e.position).map(e => (0, n.jsx)(g.Z, {
  theme: S,
  roleStyle: x,
  id: e.id,
  role: e,
  guild: u,
  color: e.colorString,
  'aria-label': e.name,
  children: e.name
}, ''.concat(a, '-').concat(e.id))).value(),
Z = i()(T).sortBy(e => e.username.toLowerCase()).map(e => {
  let t = e.getAvatarURL(u.id, 24);
  return (0, n.jsx)(g.Z, {
    id: e.id,
    guild: u,
    theme: S,
    roleStyle: x,
    'aria-label': w.ZP.getUserTag(e, {
      decoration: 'never'
    }),
    children: (0, n.jsxs)('div', {
      className: H.inline,
      children: [
        (0, n.jsx)(c.Avatar, {
          size: c.AvatarSizes.SIZE_20,
          src: t,
          'aria-label': e.username,
          className: H.xsmallAvatar
        }),
        (0, n.jsx)('span', {
          className: H.username,
          children: w.ZP.getUserTag(e)
        })
      ]
    })
  }, ''.concat(a, '-').concat(e.id));
}).value();
  return (0, n.jsx)(O.ZP.Sidebar, {
className: H.layoutStyle,
scrollable: !0,
children: (0, n.jsxs)(c.TabBar, {
  onItemSelect: m.Aj,
  selectedItem: a,
  orientation: 'vertical',
  children: [
    (() => {
      let e = (0, d.wj)(S) ? s(521715) : s(299603);
      return (0, n.jsx)(c.Popout, {
        renderPopout: C,
        position: 'bottom',
        autoInvert: !1,
        children: t => (0, n.jsx)(c.TabBar.Header, {
          ...t,
          children: (0, n.jsxs)('div', {
            className: H.sidebarHeaderDefault,
            children: [
              (0, n.jsxs)('span', {
                children: [
                  U.Z.Messages.ROLES,
                  '/',
                  U.Z.Messages.MEMBERS
                ]
              }),
              (0, n.jsx)('img', {
                alt: '',
                className: H.sidebarHeader,
                src: e
              })
            ]
          })
        })
      });
    })(),
    R,
    Z,
    (0, n.jsxs)(l.Fragment, {
      children: [
        (0, n.jsx)(c.TabBar.Separator, {
          style: {
            marginTop: 20,
            marginBottom: 14
          }
        }),
        (0, n.jsx)(c.FormText, {
          type: c.FormTextTypes.DESCRIPTION,
          children: (0, n.jsx)(c.Anchor, {
            href: b.Z.getArticleURL(B.BhN.PERMISSIONS_TUTORIAL),
            target: '_blank',
            children: U.Z.Messages.PERMISSION_HELPDESK
          })
        })
      ]
    })
  ]
})
  });
}

function Q() {
  let {
channel: e,
permissionOverwrites: t,
selectedOverwriteId: s
  } = (0, o.cj)([f.Z], () => f.Z);
  if (null == (0, o.e7)([M.Z], () => null != e ? M.Z.getGuild(e.getGuildId()) : null) || null == e || null == t || null == s)
return null;
  let l = t[s];
  return (0, n.jsxs)(O.ZP, {
className: H.container,
children: [
  (0, n.jsx)(Y, {}),
  (0, n.jsx)(k, {
    overwrite: l
  })
]
  });
}