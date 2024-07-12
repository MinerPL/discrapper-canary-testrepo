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
  g = s(134433),
  E = s(156699),
  T = s(693196),
  p = s(434404),
  N = s(200498),
  _ = s(146085),
  S = s(192079),
  x = s(277053),
  f = s(271383),
  C = s(430824),
  I = s(496675),
  M = s(594174),
  R = s(467679),
  Z = s(285952),
  v = s(474333),
  O = s(903386),
  A = s(700785),
  L = s(605436),
  b = s(27544),
  j = s(415236),
  D = s(182905),
  y = s(71080),
  w = s(981631),
  P = s(231338),
  F = s(689938),
  B = s(646350);

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
  let u, E, T, {
      section: p,
      row: _
    } = e,
    S = !1;
  switch (p) {
    case y.m$.ROLES:
      var x;
      T = (E = s[_]).rowType === y.aC.ROLE && (null === (x = E.tags) || void 0 === x ? void 0 : x.guild_connections) === null ? (0, n.jsx)(g.Z, {
        className: B.shield,
        color: E.colorString,
        size: 20
      }) : (0, n.jsx)(o.ShieldUserIcon, {
        size: 'custom',
        className: B.shield,
        color: E.colorString,
        height: 20
      }), u = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)('div', {
            className: B.rowHeight,
            children: T
          }),
          (0, n.jsx)(o.Text, {
            variant: 'text-sm/normal',
            className: B.rowLabel,
            color: E.disabled ? 'text-muted' : 'text-normal',
            children: E.name
          })
        ]
      }), S = E.disabled;
      break;
    case y.m$.MEMBERS:
      E = l[_], u = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(o.Avatar, {
            src: E.avatarURL,
            size: o.AvatarSizes.SIZE_24,
            'aria-hidden': !0
          }),
          (0, n.jsx)(o.Text, {
            className: B.rowLabel,
            variant: 'text-sm/normal',
            children: E.name
          }),
          E.bot && (0, n.jsx)(R.Z, {
            verified: E.verifiedBot,
            className: B.rowBotTag
          }),
          null != E.nickname && (0, n.jsx)(o.Text, {
            color: 'text-muted',
            className: B.rowLabelSubText,
            variant: 'text-sm/normal',
            children: E.username
          })
        ]
      }), S = E.disabled;
      break;
    default:
      E = null;
  }
  if (null == E)
    return null;
  let f = !S && null == a && null != E.id;
  return (0, n.jsxs)(Z.Z, {
    justify: Z.Z.Justify.BETWEEN,
    align: Z.Z.Align.CENTER,
    className: B.memberRow,
    children: [
      (0, n.jsx)(Z.Z, {
        justify: Z.Z.Justify.START,
        align: Z.Z.Align.CENTER,
        className: B.__invalid_memberRowBody,
        children: u
      }),
      (0, n.jsx)(o.Text, {
        color: 'text-muted',
        variant: 'text-xs/normal',
        children: L.zB(E.rowType)
      }),
      E.rowType !== y.aC.EMPTY_STATE && (0, n.jsx)(o.TooltipContainer, {
        className: B.removeIconContainer,
        text: null != a ? a : r(E.rowType, E.disabled),
        children: (0, n.jsx)(o.Clickable, {
          onClick: () => {
            var e, s, n;
            return f && null != E && (e = E.id, s = E.name, n = E.rowType, void d.Z.show({
              title: F.Z.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
              body: F.Z.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                name: s
              }),
              cancelText: F.Z.Messages.CANCEL,
              onConfirm: () => function(e, s) {
                if (t.isGuildStageVoice()) {
                  let n = (0, N._L)(e, s === y.aC.ROLE ? m.BN.ROLE : m.BN.MEMBER, t);
                  (0, N.Os)(n) ? c.Z.clearPermissionOverwrite(t.id, n.id): (0, h.hw)(t.id, [n]);
                } else
                  c.Z.clearPermissionOverwrite(t.id, e);
              }(e, n)
            }));
          },
          'aria-disabled': !f,
          'aria-label': F.Z.Messages.REMOVE,
          children: (0, n.jsx)(o.CircleXIcon, {
            size: 'md',
            color: 'currentColor',
            className: i()(B.removeIcon, {
              [B.disabledRemoveIcon]: S || a
            })
          })
        })
      })
    ]
  }, E.id);
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
  } = e, d = (0, r.e7)([C.Z], () => C.Z.getRoles(t.id)), c = L.RZ(t, d, l, _.yP, a), u = (0, r.e7)([f.ZP], () => L.cR(f.ZP.getMemberIds(t.id), l, t, _.yP, a)), h = (0, N.nG)(l.id);

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
  (0, n.jsx)(j.Z, {
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
      (0, n.jsxs)(Z.Z, {
        justify: Z.Z.Justify.BETWEEN,
        align: Z.Z.Align.CENTER,
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
        getRemoveTooltipHint: S.kk
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
  } = e, u = (0, r.e7)([I.Z], () => I.Z.can(P.Pl.ADMINISTRATOR, t)), h = A.Uu(P.Pl.VIEW_CHANNEL, t), m = A.Uu(P.Pl.ADMINISTRATOR, t);
  async function g() {
let e = l.accessPermissions,
  i = M.default.getCurrentUser();
if (!a && null != await (0, T.T)(t.id, l.id)) {
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
            p.Z.open(t.id, w.pNK.ONBOARDING), s.onClose();
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
  (0, n.jsx)(j.Z, {
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
        children: (0, n.jsx)(v.Z, {
          messageType: v.Q.WARNING,
          children: F.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
        })
      }),
      !h && !m && !a && (0, n.jsx)('div', {
        className: B.adminWarning,
        children: (0, n.jsx)(v.Z, {
          messageType: v.Q.WARNING,
          children: F.Z.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
        })
      }),
      a && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)(Z.Z, {
            justify: Z.Z.Justify.BETWEEN,
            align: Z.Z.Align.CENTER,
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
  x.Z,
  I.Z,
  f.ZP,
  C.Z
], () => {
  let e;
  let t = x.Z.channel,
s = x.Z.category,
n = [],
l = [],
a = {},
i = !1;
  if (null != t) {
e = C.Z.getGuild(t.getGuildId());
let s = f.ZP.getMemberIds(null == e ? void 0 : e.id);
if (null != e) {
  let r = C.Z.getRoles(e.id);
  a = x.Z.editedPermissionIds.reduce((e, t) => {
    let s = x.Z.getPermissionOverwrite(t);
    return null != s && (e[t] = s), e;
  }, {}), n = L.kA(e, r, t, t.accessPermissions, a), l = L.cR(s, t, e, t.accessPermissions, a), i = L.Yk(t, a);
}
  }
  return {
canSyncChannel: null != s && I.Z.can(P.Pl.MANAGE_ROLES, s),
category: s,
channel: t,
filteredMembers: l,
filteredRoles: n,
guild: e,
isPrivateGuildChannel: i,
locked: x.Z.locked,
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
  } = e, [T, p] = l.useState(!A.Uu(P.Pl.SEND_MESSAGES, i));
  if (null == i || null == c)
return null;

  function N() {
L.$e(i, P.Pl.SEND_MESSAGES, T), p(!T);
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
        null != e && null == t[e] && (t[e] = A.we(e)), await (0, E.u)(i, t[e].deny, t[e].allow) && (0, u.wk)(i.id, {
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
  (0, n.jsx)(b.Z, {})
]
  });
});