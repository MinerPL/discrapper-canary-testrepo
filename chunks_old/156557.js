"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("686130"), s("781738");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("866227"),
  o = s.n(r),
  d = s("974667"),
  u = s("77078"),
  c = s("812204"),
  E = s("679653"),
  _ = s("506885"),
  I = s("340906"),
  T = s("242020"),
  S = s("27618"),
  f = s("697218"),
  m = s("461380"),
  N = s("258078"),
  g = s("404008"),
  h = s("158998"),
  C = s("309021"),
  R = s("49111"),
  x = s("319849");

function L(e, t) {
  let s = C.NotRenderedChanges[e.targetType];
  return null != s && !0 === s[t.key]
}
class O extends l.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      onContextMenu: s,
      guildId: l
    } = this.props;
    return (0, a.jsx)(u.Popout, {
      preload: () => (0, _.default)(e.id, e.getAvatarURL(l, 80), {
        guildId: l
      }),
      renderPopout: t => (0, a.jsx)(I.default, {
        ...t,
        location: "GuildSettingsAuditLogEntry",
        userId: e.id,
        guildId: l,
        newAnalyticsLocations: [c.default.USERNAME]
      }),
      children: l => (0, a.jsx)(u.Clickable, {
        ...l,
        onClick: e => {
          e.stopPropagation(), l.onClick(e)
        },
        onContextMenu: s,
        className: x.userHook,
        children: (0, a.jsxs)("div", {
          className: x.username,
          children: [(0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: h.default.getUserTag(e, {
              mode: "username",
              identifiable: t ? "never" : "always"
            })
          }), !t && !e.isPomelo() && (0, a.jsxs)(u.Text, {
            variant: "text-sm/normal",
            children: ["#", e.discriminator]
          })]
        })
      })
    })
  }
}
class A extends l.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: t
    } = e;
    return (e.actionType !== R.AuditLogActionTypes.DELETE || e.action === R.AuditLogActions.MEMBER_BAN_ADD || e.action === R.AuditLogActions.MEMBER_KICK || e.action === R.AuditLogActions.MEMBER_PRUNE) && null != t && t.some(t => !L(e, t))
  }
  getActionTypeColor(e) {
    switch (e) {
      case R.AuditLogActionTypes.CREATE:
        return N.default.Colors.STATUS_GREEN;
      case R.AuditLogActionTypes.DELETE:
        return N.default.Colors.STATUS_RED;
      default:
        return N.default.Colors.STATUS_YELLOW
    }
  }
  getRowAccentColor() {
    let {
      log: e
    } = this.props;
    if (e.action === R.AuditLogActions.MEMBER_BAN_ADD) return x.accentRed
  }
  renderTitle() {
    let {
      log: e,
      guildId: t,
      onUserContextMenu: s,
      onTargetContextMenu: l,
      onChannelContextMenu: n
    } = this.props, {
      user: i,
      target: r,
      options: o
    } = e, d = C.getChangeTitle(e), c = C.getStringForBanReason(e);
    return null != d ? (0, a.jsx)(u.Text, {
      className: x.overflowEllipsis,
      variant: "text-sm/normal",
      children: d.format({
        user: i,
        target: r,
        reason: c,
        userHook: (l, n) => (0, a.jsx)(O, {
          guildId: t,
          user: e.user,
          onContextMenu: s,
          hideDiscriminator: !0
        }, n),
        targetHook: (s, n) => e.targetType === R.AuditLogTargetTypes.USER ? (0, a.jsx)(O, {
          guildId: t,
          user: e.target,
          onContextMenu: l,
          hideDiscriminator: !1
        }, n) : (0, a.jsx)("span", {
          onContextMenu: l,
          children: s
        }, n),
        count: o.count,
        channel: o.channel ? "string" == typeof o.channel ? o.channel : (0, E.computeChannelName)(o.channel, f.default, S.default, !0) : null,
        channelHook: (e, t) => (0, a.jsx)("span", {
          onContextMenu: n,
          children: e
        }, t)
      })
    }) : null
  }
  renderRoleUpdate(e) {
    let {
      newValue: t
    } = e;
    return Array.isArray(t) ? t.map(e => (0, a.jsxs)("div", {
      className: x.subListItem,
      children: [(0, a.jsx)(u.Text, {
        className: x.bullet,
        color: "text-muted",
        variant: "text-sm/normal",
        children: "•"
      }), (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: e.name
      })]
    }, e.id)) : null
  }
  renderPermissionUpdate(e) {
    let {
      newValue: t
    } = e;
    return Array.isArray(t) ? t.map(e => {
      if (null != C.getStringForPermission(e, this.props.log)) return (0, a.jsxs)("div", {
        className: x.subListItem,
        children: [(0, a.jsx)(u.Text, {
          className: x.bullet,
          color: "text-muted",
          variant: "text-sm/normal",
          children: "•"
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: C.getStringForPermission(e, this.props.log)
        })]
      }, e)
    }) : null
  }
  renderChangeDetails(e) {
    let {
      log: t,
      onContentClick: s
    } = this.props;
    if (null == t.changes) return null;
    let l = 0,
      n = t.changes.map((s, n) => {
        let {
          oldValue: i,
          newValue: r
        } = s, d = null;
        if (t.action === R.AuditLogActions.MEMBER_ROLE_UPDATE ? d = this.renderRoleUpdate(s) : (t.targetType === R.AuditLogTargetTypes.ROLE || t.action === R.AuditLogActions.CHANNEL_OVERWRITE_CREATE || t.action === R.AuditLogActions.CHANNEL_OVERWRITE_UPDATE) && (d = this.renderPermissionUpdate(s)), (t.action === R.AuditLogActions.CHANNEL_UPDATE || t.action === R.AuditLogActions.CHANNEL_CREATE) && s.key === R.AuditLogChangeKeys.TYPE && (null != i && (i = (0, g.channelTypeString)({
            type: i
          })), null != r && (r = (0, g.channelTypeString)({
            type: r
          }))), t.action === R.AuditLogActions.MEMBER_UPDATE && s.key === R.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (r = o(r)) || !r.isValid()) return null;
          r = r.calendar()
        }
        let c = e[s.key];
        if (L(t, s)) return null;
        if ("function" == typeof c && (c = c(s)), null != c && "object" == typeof c) {
          if (null == c.format) {
            let e = c[s.newValue];
            null == e && null != c[C.DEFAULT_FOR_STRINGS_KEY] ? c = c[C.DEFAULT_FOR_STRINGS_KEY] : null != e && (c = e)
          }
          if (null != c && null != c.format) {
            var E, _;
            c = c.format({
              user: t.user,
              target: t.target,
              oldValue: i,
              newValue: r,
              count: Array.isArray(r) ? r.length : null,
              subtarget: null !== (_ = null !== (E = t.options.subtarget) && void 0 !== E ? E : s.subtarget) && void 0 !== _ ? _ : null,
              newColorHook: (e, t) => (0, a.jsx)("div", {
                className: x.colorHook,
                style: {
                  backgroundColor: s.newValue
                }
              }, t),
              oldColorHook: (e, t) => (0, a.jsx)("div", {
                className: x.colorHook,
                style: {
                  backgroundColor: s.oldValue
                }
              }, t)
            })
          }
        }
        return null == c ? (console.warn("No change string for", s), null) : "" === c ? null : (l++, (0, a.jsxs)("div", {
          className: x.detail,
          children: [(0, a.jsxs)("div", {
            className: x.prefix,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: l < 10 ? "0".concat(l) : l
            }), (0, a.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              className: x.dash,
              children: "—"
            })]
          }), (0, a.jsxs)("div", {
            className: x.change,
            children: [null != d ? (0, a.jsx)(u.Text, {
              className: x.changeStr,
              variant: "text-xs/normal",
              children: c.concat(":")
            }) : (0, a.jsx)(u.Text, {
              className: x.changeStr,
              variant: "text-xs/normal",
              children: c
            }), null != d ? (0, a.jsx)(u.Text, {
              variant: "text-xs/normal",
              children: d
            }) : null]
          })]
        }, n))
      });
    return (0, a.jsx)(u.Clickable, {
      onClick: s,
      className: x.changeDetails,
      children: n
    })
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: t
    } = this.props;
    if (e) switch (t.targetType) {
      case R.AuditLogTargetTypes.GUILD:
        return this.renderChangeDetails(C.GuildChangeStrings());
      case R.AuditLogTargetTypes.CHANNEL:
      case R.AuditLogTargetTypes.CHANNEL_OVERWRITE:
        return this.renderChangeDetails(C.ChannelChangeStrings());
      case R.AuditLogTargetTypes.USER:
        return this.renderChangeDetails(C.UserChangeStrings());
      case R.AuditLogTargetTypes.ROLE:
        return this.renderChangeDetails(C.RoleChangeStrings());
      case R.AuditLogTargetTypes.INVITE:
        return this.renderChangeDetails(C.InviteChangeStrings());
      case R.AuditLogTargetTypes.WEBHOOK:
        return this.renderChangeDetails(C.WebhookChangeStrings());
      case R.AuditLogTargetTypes.EMOJI:
        return this.renderChangeDetails(C.EmojiChangeStrings());
      case R.AuditLogTargetTypes.STICKER:
        return this.renderChangeDetails(C.StickerChangeStrings());
      case R.AuditLogTargetTypes.INTEGRATION:
        return this.renderChangeDetails(C.IntegrationChangeStrings());
      case R.AuditLogTargetTypes.STAGE_INSTANCE:
        return this.renderChangeDetails(C.StageInstanceChangeStrings());
      case R.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
        return this.renderChangeDetails(C.GuildScheduledEventChangeStrings());
      case R.AuditLogTargetTypes.THREAD:
        return this.renderChangeDetails(C.ThreadChangeStrings());
      case R.AuditLogTargetTypes.APPLICATION_COMMAND:
        return this.renderChangeDetails(C.CommandPermissionChangeStrings(t.changes))
    }
    return null
  }
  formatActionTagName(e) {
    return e.replaceAll("_", " ").toLocaleLowerCase()
  }
  renderActionTag() {
    let {
      log: e
    } = this.props, t = (0, T.getTargetType)(e.action);
    if (null != t) return (0, a.jsx)("div", {
      className: x.tag,
      children: (0, a.jsx)(u.Text, {
        variant: "text-xs/normal",
        className: x.tagString,
        children: this.formatActionTagName(t)
      })
    })
  }
  render() {
    let e;
    let {
      log: t,
      className: s,
      expanded: l,
      onHeaderClick: n,
      guildId: r
    } = this.props, o = t.user;
    if (null == o) return null;
    let E = this.hasChangesToRender(),
      T = x.headerDefault;
    l ? T = x.headerExpanded : E && (T = x.headerClickable);
    let S = t.timestampStart.calendar(),
      f = t.timestampEnd.calendar();
    e = S === f ? (0, a.jsx)(u.Text, {
      className: x.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(S)
    }) : (0, a.jsx)(u.Text, {
      className: x.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(S, "—").concat(f)
    });
    let N = E ? n : R.NOOP;
    return (0, a.jsx)(d.ListNavigatorItem, {
      id: t.id,
      children: n => (0, a.jsxs)("div", {
        className: i(this.getRowAccentColor(), x.auditLog, s),
        children: [(0, a.jsxs)(u.Clickable, {
          className: T,
          "aria-expanded": l,
          onClick: N,
          ...n,
          children: [(0, a.jsx)(u.Popout, {
            preload: () => (0, _.default)(t.userId, o.getAvatarURL(r, 80), {
              guildId: r
            }),
            renderPopout: e => (0, a.jsx)(I.default, {
              ...e,
              location: "GuildSettingsAuditLogEntry",
              userId: t.userId,
              guildId: r,
              newAnalyticsLocations: [c.default.AVATAR]
            }),
            children: e => (0, a.jsx)(u.Avatar, {
              ...e,
              onClick: t => {
                t.stopPropagation(), e.onClick(t)
              },
              src: o.getAvatarURL(r, 40),
              "aria-hidden": !0,
              size: u.AvatarSizes.SIZE_40
            })
          }), (0, a.jsxs)("div", {
            className: x.timeWrap,
            children: [(0, a.jsx)("div", {
              className: x.title,
              children: this.renderTitle()
            }), (0, a.jsxs)("div", {
              className: x.meta,
              children: [this.renderActionTag(), e]
            })]
          }), E ? (0, a.jsx)(m.default, {
            className: x.expand,
            foreground: x.expandForeground,
            expanded: l,
            "aria-hidden": !0
          }) : null]
        }), this.renderChangeSummary()]
      })
    })
  }
}
var p = A