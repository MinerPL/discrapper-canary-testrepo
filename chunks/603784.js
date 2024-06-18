"use strict";
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(91192),
  o = t(442837),
  c = t(780384),
  d = t(481060),
  u = t(726542),
  E = t(100527),
  _ = t(933557),
  I = t(484459),
  T = t(103575),
  N = t(210887),
  m = t(699516),
  S = t(594174),
  h = t(259580),
  g = t(274730),
  x = t(51144),
  C = t(426563),
  R = t(501801),
  L = t(981631),
  O = t(689938),
  A = t(466568);
class p extends i.PureComponent {
  render() {
    let {
      user: e,
      onContextMenu: s
    } = this.props;
    return (0, n.jsxs)("span", {
      onContextMenu: s,
      className: A.userHook,
      children: [(0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        children: x.ZP.getUserTag(e, {
          mode: "username"
        })
      }), "0" !== e.discriminator && (0, n.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: A.discrim,
        children: ["#", e.discriminator]
      })]
    })
  }
}
class M extends i.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: s
    } = e;
    return (e.actionType !== L.vB8.DELETE || e.action === L.rsA.MEMBER_BAN_ADD || e.action === L.rsA.MEMBER_KICK || e.action === L.rsA.MEMBER_PRUNE) && null != s && s.some(s => !(0, R.xO)(e, s))
  }
  renderTitle() {
    let {
      log: e,
      onUserContextMenu: s,
      onTargetContextMenu: t,
      onChannelContextMenu: i
    } = this.props, {
      user: l,
      target: a,
      options: r
    } = e, o = g.N5(e);
    return null != o ? (0, n.jsx)("div", {
      className: A.overflowEllipsis,
      children: o.format({
        user: l,
        target: a,
        userHook: (t, i) => {
          if (null != e.user) return (0, n.jsx)(p, {
            user: e.user,
            onContextMenu: s
          }, i);
          if (null != e.options.integration_type) {
            var l;
            let s = u.Z.get(e.options.integration_type);
            return null !== (l = null == s ? void 0 : s.name) && void 0 !== l ? l : O.Z.Messages.UNKNOWN_INTEGRATION
          }
          return O.Z.Messages.UNKNOWN_USER
        },
        targetHook: (s, i) => e.targetType === L.KFR.USER ? (0, n.jsx)(p, {
          user: e.target,
          onContextMenu: t
        }, i) : (0, n.jsx)("span", {
          onContextMenu: t,
          children: s
        }, i),
        count: r.count,
        channel: r.channel ? "string" == typeof r.channel ? r.channel : (0, _.F6)(r.channel, S.default, m.Z, !0) : null,
        channelHook: (e, s) => (0, n.jsx)("span", {
          onContextMenu: i,
          children: e
        }, s),
        subtarget: r.subtarget
      })
    }) : null
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: s,
      guild: t,
      onContentClick: i
    } = this.props;
    return e && null != t ? (0, n.jsx)(R.tP, {
      log: s,
      guild: t,
      onContentClick: i
    }) : null
  }
  renderEntryAvatar() {
    let {
      props: {
        log: e,
        guildId: s,
        theme: t
      }
    } = this, {
      user: i,
      userId: l,
      options: {
        integration_type: a
      }
    } = e;
    if (null != i && null != l) return (0, n.jsx)(d.Popout, {
      preload: () => (0, I.W)(l, i.getAvatarURL(s, 80), {
        guildId: s
      }),
      renderPopout: e => (0, n.jsx)(T.Z, {
        ...e,
        location: "GuildSettingsAuditLogEntry",
        userId: l,
        guildId: s,
        newAnalyticsLocations: [E.Z.AVATAR]
      }),
      children: t => {
        var i, l, a;
        return (0, n.jsx)(d.Avatar, {
          ...t,
          onClick: e => {
            e.stopPropagation(), t.onClick(e)
          },
          className: A.avatar,
          src: (i = e, l = s, i.action === L.rsA.AUTO_MODERATION_BLOCK_MESSAGE || i.action === L.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || i.action === L.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || i.action === L.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, C.j)() : null === (a = i.user) || void 0 === a ? void 0 : a.getAvatarURL(l, 40)),
          "aria-hidden": !0,
          size: d.AvatarSizes.SIZE_40
        })
      }
    });
    if (null != a) {
      let e = u.Z.get(a);
      if (null != e) {
        let s = (0, c.wj)(t) ? e.icon.darkSVG : e.icon.lightSVG;
        return (0, n.jsx)(d.Avatar, {
          className: A.avatar,
          src: s,
          "aria-hidden": !0,
          size: d.AvatarSizes.SIZE_40
        })
      }
    }
    return null
  }
  render() {
    let e;
    let {
      log: s,
      className: t,
      expanded: i,
      onHeaderClick: l
    } = this.props, o = this.hasChangesToRender(), c = A.headerDefault;
    i ? c = A.headerExpanded : o && (c = A.headerClickable);
    let u = s.timestampStart.calendar(),
      E = s.timestampEnd.calendar();
    e = u === E ? (0, n.jsx)(d.Text, {
      className: A.timestamp,
      variant: "text-sm/normal",
      children: u
    }) : (0, n.jsxs)(d.Text, {
      className: A.timestamp,
      variant: "text-sm/normal",
      children: [u, "—", E]
    });
    let _ = o ? l : L.dG4;
    return (0, n.jsx)(r.mh, {
      id: s.id,
      children: l => (0, n.jsxs)("div", {
        className: a()(A.auditLog, t),
        children: [(0, n.jsxs)(d.Clickable, {
          className: c,
          "aria-expanded": i,
          onClick: _,
          ...l,
          children: [(0, n.jsx)(R.mp, {
            action: s.action,
            actionType: s.actionType,
            targetType: s.targetType
          }), this.renderEntryAvatar(), (0, n.jsxs)("div", {
            className: A.timeWrap,
            children: [(0, n.jsx)("div", {
              className: A.title,
              children: this.renderTitle()
            }), e]
          }), o ? (0, n.jsx)(h.Z, {
            className: A.expand,
            foreground: A.expandForeground,
            expanded: i,
            "aria-hidden": !0
          }) : null]
        }), i ? (0, n.jsx)("div", {
          className: A.divider
        }) : null, this.renderChangeSummary()]
      })
    })
  }
}
s.Z = o.ZP.connectStores([N.Z], () => ({
  theme: N.Z.theme
}))(M)