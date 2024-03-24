"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("974667"),
  o = s("446674"),
  d = s("819855"),
  u = s("77078"),
  c = s("376556"),
  E = s("812204"),
  _ = s("679653"),
  I = s("506885"),
  T = s("981601"),
  S = s("161778"),
  f = s("27618"),
  m = s("697218"),
  N = s("461380"),
  g = s("987663"),
  h = s("158998"),
  C = s("523096"),
  R = s("817343"),
  x = s("49111"),
  L = s("782340"),
  O = s("15994");
class A extends l.PureComponent {
  render() {
    let {
      user: e,
      onContextMenu: t
    } = this.props;
    return (0, a.jsxs)("span", {
      onContextMenu: t,
      className: O.userHook,
      children: [(0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: h.default.getUserTag(e, {
          mode: "username"
        })
      }), "0" !== e.discriminator && (0, a.jsxs)(u.Text, {
        variant: "text-xs/normal",
        className: O.discrim,
        children: ["#", e.discriminator]
      })]
    })
  }
}
class p extends l.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: t
    } = e;
    return (e.actionType !== x.AuditLogActionTypes.DELETE || e.action === x.AuditLogActions.MEMBER_BAN_ADD || e.action === x.AuditLogActions.MEMBER_KICK || e.action === x.AuditLogActions.MEMBER_PRUNE) && null != t && t.some(t => !(0, R.shouldNotRenderChangeDetail)(e, t))
  }
  renderTitle() {
    let {
      log: e,
      onUserContextMenu: t,
      onTargetContextMenu: s,
      onChannelContextMenu: l
    } = this.props, {
      user: n,
      target: i,
      options: r
    } = e, o = g.getChangeTitle(e);
    return null != o ? (0, a.jsx)("div", {
      className: O.overflowEllipsis,
      children: o.format({
        user: n,
        target: i,
        userHook: (s, l) => {
          if (null != e.user) return (0, a.jsx)(A, {
            user: e.user,
            onContextMenu: t
          }, l);
          if (null != e.options.integration_type) {
            var n;
            let t = c.default.get(e.options.integration_type);
            return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : L.default.Messages.UNKNOWN_INTEGRATION
          }
          return L.default.Messages.UNKNOWN_USER
        },
        targetHook: (t, l) => e.targetType === x.AuditLogTargetTypes.USER ? (0, a.jsx)(A, {
          user: e.target,
          onContextMenu: s
        }, l) : (0, a.jsx)("span", {
          onContextMenu: s,
          children: t
        }, l),
        count: r.count,
        channel: r.channel ? "string" == typeof r.channel ? r.channel : (0, _.computeChannelName)(r.channel, m.default, f.default, !0) : null,
        channelHook: (e, t) => (0, a.jsx)("span", {
          onContextMenu: l,
          children: e
        }, t),
        subtarget: r.subtarget
      })
    }) : null
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: t,
      guild: s,
      onContentClick: l
    } = this.props;
    return e && null != s ? (0, a.jsx)(R.AuditLogExpandedChangeDetails, {
      log: t,
      guild: s,
      onContentClick: l
    }) : null
  }
  renderEntryAvatar() {
    let {
      props: {
        log: e,
        guildId: t,
        theme: s
      }
    } = this, {
      user: l,
      userId: n,
      options: {
        integration_type: i
      }
    } = e;
    if (null != l && null != n) return (0, a.jsx)(u.Popout, {
      preload: () => (0, I.default)(n, l.getAvatarURL(t, 80), {
        guildId: t
      }),
      renderPopout: e => (0, a.jsx)(T.default, {
        ...e,
        userId: n,
        guildId: t,
        newAnalyticsLocations: [E.default.AVATAR]
      }),
      children: s => {
        var l, n, i;
        return (0, a.jsx)(u.Avatar, {
          ...s,
          onClick: e => {
            e.stopPropagation(), s.onClick(e)
          },
          className: O.avatar,
          src: (l = e, n = t, l.action === x.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE || l.action === x.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === x.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === x.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER ? (0, C.getAutomodAvatarURL)() : null === (i = l.user) || void 0 === i ? void 0 : i.getAvatarURL(n, 40)),
          "aria-hidden": !0,
          size: u.AvatarSizes.SIZE_40
        })
      }
    });
    if (null != i) {
      let e = c.default.get(i);
      if (null != e) {
        let t = (0, d.isThemeDark)(s) ? e.icon.darkSVG : e.icon.lightSVG;
        return (0, a.jsx)(u.Avatar, {
          className: O.avatar,
          src: t,
          "aria-hidden": !0,
          size: u.AvatarSizes.SIZE_40
        })
      }
    }
    return null
  }
  render() {
    let e;
    let {
      log: t,
      className: s,
      expanded: l,
      onHeaderClick: n
    } = this.props, o = this.hasChangesToRender(), d = O.headerDefault;
    l ? d = O.headerExpanded : o && (d = O.headerClickable);
    let c = t.timestampStart.calendar(),
      E = t.timestampEnd.calendar();
    e = c === E ? (0, a.jsx)(u.Text, {
      className: O.timestamp,
      variant: "text-sm/normal",
      children: c
    }) : (0, a.jsxs)(u.Text, {
      className: O.timestamp,
      variant: "text-sm/normal",
      children: [c, "—", E]
    });
    let _ = o ? n : x.NOOP;
    return (0, a.jsx)(r.ListNavigatorItem, {
      id: t.id,
      children: n => (0, a.jsxs)("div", {
        className: i(O.auditLog, s),
        children: [(0, a.jsxs)(u.Clickable, {
          className: d,
          "aria-expanded": l,
          onClick: _,
          ...n,
          children: [(0, a.jsx)(R.AuditLogIcon, {
            action: t.action,
            actionType: t.actionType,
            targetType: t.targetType
          }), this.renderEntryAvatar(), (0, a.jsxs)("div", {
            className: O.timeWrap,
            children: [(0, a.jsx)("div", {
              className: O.title,
              children: this.renderTitle()
            }), e]
          }), o ? (0, a.jsx)(N.default, {
            className: O.expand,
            foreground: O.expandForeground,
            expanded: l,
            "aria-hidden": !0
          }) : null]
        }), l ? (0, a.jsx)("div", {
          className: O.divider
        }) : null, this.renderChangeSummary()]
      })
    })
  }
}
var M = o.default.connectStores([S.default], () => ({
  theme: S.default.theme
}))(p)