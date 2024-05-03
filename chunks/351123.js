"use strict";
s.r(t), s("47120"), s("724458");
var l = s("735250"),
  a = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("442837"),
  o = s("481060"),
  d = s("668781"),
  u = s("493683"),
  c = s("787014"),
  h = s("741361"),
  m = s("911969"),
  E = s("134433"),
  f = s("156699"),
  g = s("200498"),
  S = s("146085"),
  T = s("192079"),
  N = s("277053"),
  _ = s("271383"),
  p = s("430824"),
  C = s("496675"),
  x = s("594174"),
  M = s("467679"),
  I = s("285952"),
  R = s("474333"),
  A = s("696202"),
  O = s("630641"),
  L = s("241820"),
  v = s("170039"),
  j = s("417622"),
  D = s("903386"),
  y = s("700785"),
  F = s("605436"),
  b = s("27544"),
  P = s("415236"),
  w = s("182905"),
  U = s("71080"),
  H = s("981631"),
  B = s("231338"),
  G = s("689938"),
  V = s("391897");

function k(e) {
  let {
    channel: t,
    roles: s,
    members: a,
    disabledReason: n,
    getRemoveTooltipHint: r
  } = e;
  return (0, l.jsx)(o.List, {
    className: V.roleMemberList,
    sections: [s.length, a.length],
    renderRow: function(e) {
      let c, f, S, {
          section: T,
          row: N
        } = e,
        _ = !1;
      switch (T) {
        case U.AudienceSelectorSections.ROLES:
          var p;
          S = (f = s[N]).rowType === U.RowType.ROLE && (null === (p = f.tags) || void 0 === p ? void 0 : p.guild_connections) === null ? (0, l.jsx)(E.default, {
            className: V.shield,
            color: f.colorString,
            size: 20
          }) : (0, l.jsx)(L.default, {
            className: V.shield,
            color: f.colorString,
            height: 20
          }), c = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: V.rowHeight,
              children: S
            }), (0, l.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: V.rowLabel,
              color: f.disabled ? "text-muted" : "text-normal",
              children: f.name
            })]
          }), _ = f.disabled;
          break;
        case U.AudienceSelectorSections.MEMBERS:
          f = a[N], c = (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Avatar, {
              src: f.avatarURL,
              size: o.AvatarSizes.SIZE_24,
              "aria-hidden": !0
            }), (0, l.jsx)(o.Text, {
              className: V.rowLabel,
              variant: "text-sm/normal",
              children: f.name
            }), f.bot && (0, l.jsx)(M.default, {
              verified: f.verifiedBot,
              className: V.rowBotTag
            }), null != f.nickname && (0, l.jsx)(o.Text, {
              color: "text-muted",
              className: V.rowLabelSubText,
              variant: "text-sm/normal",
              children: f.username
            })]
          }), _ = f.disabled;
          break;
        default:
          f = null
      }
      if (null == f) return null;
      let C = !_ && null == n && null != f.id;
      return (0, l.jsxs)(I.default, {
        justify: I.default.Justify.BETWEEN,
        align: I.default.Align.CENTER,
        className: V.memberRow,
        children: [(0, l.jsx)(I.default, {
          justify: I.default.Justify.START,
          align: I.default.Align.CENTER,
          className: V.__invalid_memberRowBody,
          children: c
        }), (0, l.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          children: F.getRowTypeLabel(f.rowType)
        }), f.rowType !== U.RowType.EMPTY_STATE && (0, l.jsx)(o.TooltipContainer, {
          className: V.removeIconContainer,
          text: null != n ? n : r(f.rowType, f.disabled),
          children: (0, l.jsx)(o.Clickable, {
            onClick: () => {
              var e, s, l;
              return C && null != f && (e = f.id, s = f.name, l = f.rowType, void d.default.show({
                title: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_TITLE,
                body: G.default.Messages.SETTINGS_PERMISSIONS_DELETE_BODY.format({
                  name: s
                }),
                cancelText: G.default.Messages.CANCEL,
                onConfirm: () => (function(e, s) {
                  if (t.isGuildStageVoice()) {
                    let l = (0, g.removeModeratorOverwrite)(e, s === U.RowType.ROLE ? m.PermissionOverwriteType.ROLE : m.PermissionOverwriteType.MEMBER, t);
                    (0, g.isEmptyOverwrite)(l) ? u.default.clearPermissionOverwrite(t.id, l.id): (0, h.savePermissionUpdates)(t.id, [l])
                  } else u.default.clearPermissionOverwrite(t.id, e)
                })(e, l)
              }))
            },
            "aria-disabled": !C,
            "aria-label": G.default.Messages.REMOVE,
            children: (0, l.jsx)(A.default, {
              className: i()(V.removeIcon, {
                [V.disabledRemoveIcon]: _ || n
              })
            })
          })
        })]
      }, f.id)
    },
    rowHeight: 40,
    renderSection: function(e) {
      let {
        section: t
      } = e;
      switch (t) {
        case U.AudienceSelectorSections.ROLES:
          return (0, l.jsx)(z, {
            title: G.default.Messages.ROLES
          }, "roles-title");
        case U.AudienceSelectorSections.MEMBERS:
          return (0, l.jsx)(z, {
            title: G.default.Messages.MEMBERS
          }, "members-title")
      }
    },
    sectionHeight: 49
  })
}

function W(e) {
  let {
    guild: t,
    channel: a,
    permissionUpdates: n
  } = e, d = (0, r.useStateFromStores)([p.default], () => p.default.getRoles(t.id)), u = F.getExistingRolesRowWithPermissionDisabled(t, d, a, S.MODERATE_STAGE_CHANNEL_PERMISSIONS, n), c = (0, r.useStateFromStores)([_.default], () => F.getExistingMembersRows(_.default.getMemberIds(t.id), a, t, S.MODERATE_STAGE_CHANNEL_PERMISSIONS, n)), h = (0, g.useCanUpdateStageChannelModerators)(a.id);

  function m() {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("82961")]).then(s.bind(s, "388131"));
      return t => (0, l.jsx)(e, {
        ...t,
        channelId: a.id
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: i()(V.settingCard, V.active),
    children: [(0, l.jsx)(P.default, {
      label: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_TITLE,
      description: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_DESCRIPTION,
      icon: (0, l.jsx)(v.default, {
        className: V.cardIcon,
        height: 20,
        width: 20
      }),
      id: "StageModeratorSettingCard"
    }), (0, l.jsxs)("div", {
      className: V.cardFolder,
      children: [(0, l.jsxs)(I.default, {
        justify: I.default.Justify.BETWEEN,
        align: I.default.Align.CENTER,
        className: V.folderHeader,
        children: [(0, l.jsx)(o.FormTitle, {
          tag: "h5",
          className: V.folderTitle,
          children: G.default.Messages.CHANNEL_PERMISSIONS_MODERATOR_LABEL
        }), (0, l.jsx)(o.Tooltip, {
          text: G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
          shouldShow: !h,
          children: e => (0, l.jsx)(o.Button, {
            ...e,
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: m,
            disabled: !h,
            children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })
        })]
      }), (0, l.jsx)(k, {
        channel: a,
        roles: u,
        members: c,
        disabledReason: h ? null : G.default.Messages.CHANNEL_PERMISSIONS_NOT_MODERATOR,
        getRemoveTooltipHint: T.getRemoveModeratorTooltipHint
      })]
    })]
  })
}

function Y(e) {
  let {
    guild: t,
    channel: a,
    isPrivateGuildChannel: n,
    roles: d,
    members: u
  } = e, c = (0, r.useStateFromStores)([C.default], () => C.default.can(B.Permissions.ADMINISTRATOR, t)), h = y.canEveryoneRole(B.Permissions.VIEW_CHANNEL, t), m = y.canEveryoneRole(B.Permissions.ADMINISTRATOR, t), E = {
    title: G.default.Messages.PRIVATE_CHANNEL,
    subtitle: G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION,
    formLabel: G.default.Messages.FORM_LABEL_CHANNEL_PERMISSIONS
  };
  return a.isCategory() ? (E.title = G.default.Messages.PRIVATE_CATEGORY, E.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CATEGORY_DESCRIPTION, E.formLabel = G.default.Messages.FORM_LABEL_CATEGORY_PERMISSIONS) : a.type === H.ChannelTypes.GUILD_VOICE && (E.subtitle = G.default.Messages.CHANNEL_PERMISSIONS_PRIVATE_CHANNEL_DESCRIPTION_VOICE), (0, l.jsxs)("div", {
    className: i()(V.settingCard, {
      [V.active]: n
    }),
    children: [(0, l.jsx)(P.default, {
      description: E.subtitle,
      icon: (0, l.jsx)(O.default, {
        className: V.cardIcon,
        height: 20,
        width: 20
      }),
      id: "PrivateChannelSettingCard",
      label: E.title,
      onChange: function() {
        let e = a.accessPermissions,
          t = x.default.getCurrentUser();
        F.toggleChannelEveryonePermission(a, e, n), !n && null != t && !c && F.grantUserChannelAccess(a, e)
      },
      value: n
    }), (0, l.jsxs)("div", {
      className: V.cardFolder,
      children: [m && (0, l.jsx)("div", {
        className: V.adminWarning,
        children: (0, l.jsx)(R.default, {
          messageType: R.HelpMessageTypes.WARNING,
          children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_IS_ADMIN_WARNING
        })
      }), !h && !m && !n && (0, l.jsx)("div", {
        className: V.adminWarning,
        children: (0, l.jsx)(R.default, {
          messageType: R.HelpMessageTypes.WARNING,
          children: G.default.Messages.CHANNEL_PERMISSIONS_EVERYONE_CAN_NOT_VIEW_WARNING
        })
      }), n && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(I.default, {
          justify: I.default.Justify.BETWEEN,
          align: I.default.Align.CENTER,
          className: V.folderHeader,
          children: [(0, l.jsx)(o.FormTitle, {
            tag: "h5",
            className: V.folderTitle,
            children: E.formLabel
          }), (0, l.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            color: o.Button.Colors.BRAND,
            onClick: function() {
              (0, o.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.resolve().then(s.bind(s, "185413"));
                return t => (0, l.jsx)(e, {
                  ...t,
                  channelId: a.id,
                  inSettings: !0
                })
              })
            },
            children: G.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TITLE
          })]
        }), (0, l.jsx)(k, {
          channel: a,
          roles: d,
          members: u,
          getRemoveTooltipHint: F.getRemoveTooltipHint
        })]
      })]
    })]
  })
}

function z(e) {
  let {
    title: t
  } = e;
  return (0, l.jsxs)("div", {
    children: [(0, l.jsx)(o.FormDivider, {
      className: V.divider
    }), (0, l.jsx)(o.FormTitle, {
      className: i()(V.folderTitle, V.sectionTitle),
      tag: "h5",
      children: t
    })]
  })
}
t.default = r.default.connectStores([N.default, C.default, _.default, p.default], () => {
  let e;
  let t = N.default.channel,
    s = N.default.category,
    l = [],
    a = [],
    n = {},
    i = !1;
  if (null != t) {
    e = p.default.getGuild(t.getGuildId());
    let s = _.default.getMemberIds(null == e ? void 0 : e.id);
    if (null != e) {
      let r = p.default.getRoles(e.id);
      n = N.default.editedPermissionIds.reduce((e, t) => {
        let s = N.default.getPermissionOverwrite(t);
        return null != s && (e[t] = s), e
      }, {}), l = F.getExistingRolesRows(e, r, t, t.accessPermissions, n), a = F.getExistingMembersRows(s, t, e, t.accessPermissions, n), i = F.isPrivateGuildChannel(t, n)
    }
  }
  return {
    canSyncChannel: null != s && C.default.can(B.Permissions.MANAGE_ROLES, s),
    category: s,
    channel: t,
    filteredMembers: a,
    filteredRoles: l,
    guild: e,
    isPrivateGuildChannel: i,
    locked: N.default.locked,
    permissionUpdates: n
  }
})(function(e) {
  let {
    canSyncChannel: t,
    category: n,
    channel: i,
    filteredMembers: r,
    filteredRoles: d,
    guild: u,
    isPrivateGuildChannel: h,
    locked: m,
    permissionUpdates: E
  } = e, [g, S] = a.useState(!y.canEveryoneRole(B.Permissions.SEND_MESSAGES, i));
  if (null == i || null == u) return null;

  function T() {
    F.toggleChannelEveryonePermission(i, B.Permissions.SEND_MESSAGES, g), S(!g)
  }

  function N() {
    null != n && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(s.bind(s, "170509"));
      return t => (0, l.jsx)(e, {
        ...t,
        channel: i,
        category: n,
        onConfirm: async () => {
          let {
            guild_id: e
          } = n, t = {
            ...n.permissionOverwrites
          };
          null != e && null == t[e] && (t[e] = y.makeEveryoneOverwrite(e)), await (0, f.checkDefaultChannelThresholdMetAfterChannelPermissionDeny)(i, t[e].deny, t[e].allow) && (0, c.saveChannel)(i.id, {
            permissionOverwrites: Object.values(t)
          })
        }
      })
    })
  }
  let _ = {
    title: G.default.Messages.CHANNEL_PERMISSIONS,
    subtitle: G.default.Messages.CHANNEL_PERMISSIONS_SUBTITLE
  };
  return i.isCategory() && (_.title = G.default.Messages.CATEGORY_SETTINGS, _.subtitle = G.default.Messages.CATEGORY_PERMISSIONS_SUBTITLE), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.FormTitle, {
      tag: "h1",
      children: _.title
    }), (0, l.jsx)(o.FormText, {
      children: _.subtitle
    }), null != n && t ? m ? (0, l.jsx)(w.default, {
      canSync: !1,
      icon: j.default,
      noticeText: G.default.Messages.CHANNEL_LOCKED_TO_CATEGORY.format({
        categoryName: n.name
      })
    }) : (0, l.jsx)(w.default, {
      buttonText: G.default.Messages.SYNC_NOW,
      canSync: !0,
      icon: D.default,
      noticeText: G.default.Messages.PERMISSIONS_UNSYNCED.format({
        categoryName: n.name
      }),
      onClick: N
    }) : null, i.isGuildStageVoice() ? (0, l.jsx)(W, {
      guild: u,
      channel: i,
      permissionUpdates: E
    }) : null, (0, l.jsx)(Y, {
      channel: i,
      guild: u,
      isPrivateGuildChannel: h,
      roles: d,
      members: r
    }), !1, (0, l.jsx)(b.default, {})]
  })
})