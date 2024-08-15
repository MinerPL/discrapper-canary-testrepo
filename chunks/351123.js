s(47120), s(724458);
var n = s(735250),
  l = s(470079),
  a = s(120356),
  i = s.n(a),
  r = s(442837),
  o = s(481060),
  d = s(668781),
  c = s(493683),
  u = s(787014),
  h = s(741361),
  m = s(911969),
  g = s(385499),
  E = s(134433),
  T = s(600164),
  p = s(156699),
  N = s(693196),
  _ = s(434404),
  S = s(200498),
  x = s(146085),
  f = s(192079),
  C = s(777036),
  I = s(277053),
  M = s(271383),
  R = s(430824),
  Z = s(496675),
  v = s(594174),
  O = s(903386),
  A = s(700785),
  L = s(605436),
  j = s(27544),
  b = s(415236),
  D = s(182905),
  y = s(71080),
  w = s(981631),
  P = s(231338),
  F = s(689938),
  B = s(343535);

function U(e) {
  let {
channel: t,
roles: s,
members: l,
disabledReason: a,
getRemoveTooltipHint: r
  } = e;
  return (0, n.jsx)(o.List, {
className: B.roleMemberList,
sections: [
  s.length,
  l.length
],
renderRow: function(e) {
  let u, p, N, {
      section: _,
      row: x
    } = e,
    f = !1;
  switch (_) {
    case y.m$.ROLES:
      var C;
      N = (p = s[x]).rowType === y.aC.ROLE && (null === (C = p.tags) || void 0 === C ? void 0 : C.guild_connections) === null ? (0, n.jsx)(E.Z, {
        className: B.shield,
        color: p.colorString,
        size: 20
      }) : (0, n.jsx)(o.ShieldUserIcon, {
        size: 'custom',
        className: B.shield,
        color: p.colorString,
        height: 20
      }), u = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)('div', {
            className: B.rowHeight,
            children: N
          }),
          (0, n.jsx)(o.Text, {
            variant: 'text-sm/normal',
            className: B.rowLabel,
            color: p.disabled ? 'text-muted' : 'text-normal',
            children: p.name
          })
        ]
      }), f = p.disabled;
      break;
    case y.m$.MEMBERS:
      p = l[x], u = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(o.Avatar, {
            src: p.avatarURL,
            size: o.AvatarSizes.SIZE_24,
            'aria-hidden': !0
          }),
          (0, n.jsx)(o.Text, {
            className: B.rowLabel,
            variant: 'text-sm/normal',
            children: p.name
          }),
          p.bot && (0, n.jsx)(g.Z, {
            verified: p.verifiedBot,
            className: B.rowBotTag
          }),
          null != p.nickname && (0, n.jsx)(o.Text, {
            color: 'text-muted',
            className: B.rowLabelSubText,
            variant: 'text-sm/normal',
            children: p.username
          })
        ]
      }), f = p.disabled;
      break;
    default:
      p = null;
  }
  if (null == p)
    return null;
  let I = !f && null == a && null != p.id;
  return (0, n.jsxs)(T.Z, {
    justify: T.Z.Justify.BETWEEN,
    align: T.Z.Align.CENTER,
    className: B.memberRow,
    children: [
      (0, n.jsx)(T.Z, {
        justify: T.Z.Justify.START,
        align: T.Z.Align.CENTER,
        className: B.__invalid_memberRowBody,
        children: u
      }),
      (0, n.jsx)(o.Text, {
        color: 'text-muted',
        variant: 'text-xs/normal',
        children: L.zB(p.rowType)
      }),
      p.rowType !== y.aC.EMPTY_STATE && (0, n.jsx)(o.TooltipContainer, {
        className: B.removeIconContainer,
        text: null != a ? a : r(p.rowType, p.disabled),
        children: (0, n.jsx)(o.Clickable, {
          onClick: () => {
            var e, s, n;
            return I && null != p && (e = p.id, s = p.name, n = p.rowType, void d.Z.show({
              title: F.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
              body: F.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                name: s
              }),
              cancelText: F.Z.Messages.CANCEL,
              onConfirm: () => function(e, s) {
                if (t.isGuildStageVoice()) {
                  let n = (0, S._L)(e, s === y.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                  (0, S.Os)(n) ? c.Z.clearPermissionOverwrite(t.id, n.id): (0, h.hw)(t.id, [n]);
                } else
                  c.Z.clearPermissionOverwrite(t.id, e);
              }(e, n)
            }));
          },
          'aria-disabled': !I,
          'aria-label': F.Z.Messages.REMOVE,
          children: (0, n.jsx)(o.CircleXIcon, {
            size: 'md',
            color: 'currentColor',
            className: i()(B.removeIcon, {
              [B.disabledRemoveIcon]: f || a
            })
          })
        })
      })
    ]
  }, p.id);
},
rowHeight: 40,
renderSection: function(e) {
  let {
    section: t
  } = e;
  switch (t) {
    case y.m$.ROLES:
      return (0, n.jsx)(k, {
        title: F.Z.Messages.ROLES
      }, 'roles-title');
    case y.m$.MEMBERS:
      return (0, n.jsx)(k, {
        title: F.Z.Messages.MEMBERS
      }, 'members-title');
  }
},
sectionHeight: 49
  });
}

function H(e) {
  let {
guild: t,
channel: l,
permissionUpdates: a
  } = e, d = (0, r.e7)([R.Z], () => R.Z.getRoles(t.id)), c = L.RZ(t, d, l, x.yP, a), u = (0, r.e7)([M.ZP], () => L.cR(M.ZP.getMemberIds(t.id), l, t, x.yP, a)), h = (0, S.nG)(l.id);

  function m() {
(0, o.openModalLazy)(async () => {
  let {
    default: e
  } = await s.e('82961').then(s.bind(s, 388131));
  return t => (0, n.jsx)(e, {
    ...t,
    channelId: l.id
  });
});
  }
  return (0, n.jsxs)('div', {
className: i()(B.settingCard, B.active),
children: [
  (0, n.jsx)(b.Z, {
    label: F.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
    description: F.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
    icon: (0, n.jsx)(o.StageIcon, {
      size: 'custom',
      color: 'currentColor',
      className: B.cardIcon,
      height: 20,
      width: 20
    }),
    id: 'StageModeratorSettingCard'
  }),
  (0, n.jsxs)('div', {
    className: B.cardFolder,
    children: [
      (0, n.jsxs)(T.Z, {
        justify: T.Z.Justify.BETWEEN,
        align: T.Z.Align.CENTER,
        className: B.folderHeader,
        children: [
          (0, n.jsx)(o.FormTitle, {
            tag: 'h5',
            className: B.folderTitle,
            children: F.Z.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
          }),
          (0, n.jsx)(o.Tooltip, {
            text: F.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
            shouldShow: !h,
            children: e => (0, n.jsx)(o.Button, {
              ...e,
              size: o.Button.Sizes.SMALL,
              color: o.Button.Colors.BRAND,
              onClick: m,
              disabled: !h,
              children: F.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
            })
          })
        ]
      }),
      (0, n.jsx)(U, {
        channel: l,
        roles: c,
        members: u,
        disabledReason: h ? null : F.Z.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
        getRemoveTooltipHint: f.kk
      })
    ]
  })
]
  });
}

function G(e) {
  let {
guild: t,
channel: l,
isPrivateGuildChannel: a,
roles: d,
members: c
  } = e, u = (0, r.e7)([Z.Z], () => Z.Z.can(P.Pl.ADMINISTRATOR, t)), h = A.Uu(P.Pl.VIEW_CHANNEL, t), m = A.Uu(P.Pl.ADMINISTRATOR, t);
  async function g() {
let e = l.accessPermissions,
  i = v.default.getCurrentUser();
if (!a && null != await (0, N.T)(t.id, l.id)) {
  (0, o.openModalLazy)(async () => {
    let {
      ConfirmModal: e
    } = await Promise.resolve().then(s.bind(s, 878678));
    return s => (0, n.jsx)(e, {
      ...s,
      confirmButtonColor: o.ButtonColors.BRAND,
      header: F.Z.Messages.CANNOT_PRIVATIZE_CHANNEL,
      confirmText: F.Z.Messages.OKAY,
      children: (0, n.jsx)(o.Text, {
        variant: 'text-md/normal',
        children: F.Z.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING_PRIVATE.format({
          onClick: () => {
            _.Z.open(t.id, w.pNK.ONBOARDING), s.onClose();
          }
        })
      })
    });
  });
  return;
}
L.$e(l, e, a), !a && null != i && !u && L.Yh(l, e);
  }
  let E = {
title: F.Z.Messages.PRIVATE_CHANNEL,
subtitle: F.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
formLabel: F.Z.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
  };
  return l.isCategory() ? (E.title = F.Z.Messages.PRIVATE_CATEGORY, E.subtitle = F.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION, E.formLabel = F.Z.Messages.FORM_LABEL_CATEGORY_PERMISSIONS) : l.type === w.d4z.GUILD_VOICE && (E.subtitle = F.Z.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE), (0, n.jsxs)('div', {
className: i()(B.settingCard, {
  [B.active]: a
}),
children: [
  (0, n.jsx)(b.Z, {
    description: E.subtitle,
    icon: (0, n.jsx)(o.LockIcon, {
      size: 'custom',
      color: 'currentColor',
      className: B.cardIcon,
      height: 20,
      width: 20
    }),
    id: 'PrivateChannelSettingCard',
    label: E.title,
    onChange: g,
    value: a
  }),
  (0, n.jsxs)('div', {
    className: B.cardFolder,
    children: [
      m && (0, n.jsx)('div', {
        className: B.adminWarning,
        children: (0, n.jsx)(C.Z, {
          messageType: C.Q.WARNING,
          children: F.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
        })
      }),
      !h && !m && !a && (0, n.jsx)('div', {
        className: B.adminWarning,
        children: (0, n.jsx)(C.Z, {
          messageType: C.Q.WARNING,
          children: F.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
        })
      }),
      a && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)(T.Z, {
            justify: T.Z.Justify.BETWEEN,
            align: T.Z.Align.CENTER,
            className: B.folderHeader,
            children: [
              (0, n.jsx)(o.FormTitle, {
                tag: 'h5',
                className: B.folderTitle,
                children: E.formLabel
              }),
              (0, n.jsx)(o.Button, {
                size: o.Button.Sizes.SMALL,
                color: o.Button.Colors.BRAND,
                onClick: function() {
                  (0, o.openModalLazy)(async () => {
                    let {
                      default: e
                    } = await Promise.resolve().then(s.bind(s, 185413));
                    return t => (0, n.jsx)(e, {
                      ...t,
                      channelId: l.id,
                      inSettings: !0
                    });
                  });
                },
                children: F.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
              })
            ]
          }),
          (0, n.jsx)(U, {
            channel: l,
            roles: d,
            members: c,
            getRemoveTooltipHint: L.yv
          })
        ]
      })
    ]
  })
]
  });
}

function k(e) {
  let {
title: t
  } = e;
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsx)(o.FormDivider, {
    className: B.divider
  }),
  (0, n.jsx)(o.FormTitle, {
    className: i()(B.folderTitle, B.sectionTitle),
    tag: 'h5',
    children: t
  })
]
  });
}
t.Z = r.ZP.connectStores([
  I.Z,
  Z.Z,
  M.ZP,
  R.Z
], () => {
  let e;
  let t = I.Z.channel,
s = I.Z.category,
n = [],
l = [],
a = {},
i = !1;
  if (null != t) {
e = R.Z.getGuild(t.getGuildId());
let s = M.ZP.getMemberIds(null == e ? void 0 : e.id);
if (null != e) {
  let r = R.Z.getRoles(e.id);
  a = I.Z.editedPermissionIds.reduce((e, t) => {
    let s = I.Z.getPermissionOverwrite(t);
    return null != s && (e[t] = s), e;
  }, {}), n = L.kA(e, r, t, t.accessPermissions, a), l = L.cR(s, t, e, t.accessPermissions, a), i = L.Yk(t, a);
}
  }
  return {
canSyncChannel: null != s && Z.Z.can(P.Pl.MANAGE_ROLES, s),
category: s,
channel: t,
filteredMembers: l,
filteredRoles: n,
guild: e,
isPrivateGuildChannel: i,
locked: I.Z.locked,
permissionUpdates: a
  };
})(function(e) {
  let {
canSyncChannel: t,
category: a,
channel: i,
filteredMembers: r,
filteredRoles: d,
guild: c,
isPrivateGuildChannel: h,
locked: m,
permissionUpdates: g
  } = e, [E, T] = l.useState(!A.Uu(P.Pl.SEND_MESSAGES, i));
  if (null == i || null == c)
return null;

  function N() {
L.$e(i, P.Pl.SEND_MESSAGES, E), T(!E);
  }

  function _() {
if (null != a)
  (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(s.bind(s, 170509));
    return t => (0, n.jsx)(e, {
      ...t,
      channel: i,
      category: a,
      onConfirm: async () => {
        let {
          guild_id: e
        } = a, t = {
          ...a.permissionOverwrites
        };
        null != e && null == t[e] && (t[e] = A.we(e)), await (0, p.u)(i, t[e].deny, t[e].allow) && (0, u.wk)(i.id, {
          permissionOverwrites: Object.values(t)
        });
      }
    });
  });
  }
  let S = {
title: F.Z.Messages.CHANNEL_PERMISSIONS,
subtitle: F.Z.Messages.CHANNEL_PERMISSIONS_SUBTITLE
  };
  return i.isCategory() && (S.title = F.Z.Messages.CATEGORY_SETTINGS, S.subtitle = F.Z.Messages.CATEGORY_PERMISSIONS_SUBTITLE), (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(o.FormTitle, {
    tag: 'h1',
    children: S.title
  }),
  (0, n.jsx)(o.FormText, {
    children: S.subtitle
  }),
  null != a && t ? m ? (0, n.jsx)(D.Z, {
    canSync: !1,
    icon: o.RefreshIcon,
    noticeText: F.Z.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
      categoryName: a.name
    })
  }) : (0, n.jsx)(D.Z, {
    buttonText: F.Z.Messages.SYNC_NOW,
    canSync: !0,
    icon: (0, o.makeIconCompat)(O.Z),
    noticeText: F.Z.Messages.PERMISSIONS_UNSYNCED.format({
      categoryName: a.name
    }),
    onClick: _
  }) : null,
  i.isGuildStageVoice() ? (0, n.jsx)(H, {
    guild: c,
    channel: i,
    permissionUpdates: g
  }) : null,
  (0, n.jsx)(G, {
    channel: i,
    guild: c,
    isPrivateGuildChannel: h,
    roles: d,
    members: r
  }),
  !1,
  (0, n.jsx)(j.Z, {})
]
  });
});