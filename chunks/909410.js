"use strict";
t(627494), t(757143);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(913527),
  o = t.n(r),
  c = t(91192),
  d = t(481060),
  u = t(100527),
  E = t(933557),
  _ = t(484459),
  I = t(103575),
  T = t(387667),
  N = t(699516),
  m = t(594174),
  S = t(259580),
  h = t(154921),
  g = t(934415),
  x = t(51144),
  C = t(884737),
  R = t(981631),
  L = t(848051);

function O(e, s) {
  let t = C.vc[e.targetType];
  return null != t && !0 === t[s.key]
}
class A extends i.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: s,
      onContextMenu: t,
      guildId: i
    } = this.props;
    return (0, n.jsx)(d.Popout, {
      preload: () => (0, _.W)(e.id, e.getAvatarURL(i, 80), {
        guildId: i
      }),
      renderPopout: s => (0, n.jsx)(I.Z, {
        ...s,
        location: "GuildSettingsAuditLogEntry",
        userId: e.id,
        guildId: i,
        newAnalyticsLocations: [u.Z.USERNAME]
      }),
      children: i => (0, n.jsx)(d.Clickable, {
        ...i,
        onClick: e => {
          e.stopPropagation(), i.onClick(e)
        },
        onContextMenu: t,
        className: L.userHook,
        children: (0, n.jsxs)("div", {
          className: L.username,
          children: [(0, n.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: x.ZP.getUserTag(e, {
              mode: "username",
              identifiable: s ? "never" : "always"
            })
          }), !s && !e.isPomelo() && (0, n.jsxs)(d.Text, {
            variant: "text-sm/normal",
            children: ["#", e.discriminator]
          })]
        })
      })
    })
  }
}
class p extends i.PureComponent {
  hasChangesToRender() {
    let {
      log: e
    } = this.props, {
      changes: s
    } = e;
    return (e.actionType !== R.vB8.DELETE || e.action === R.rsA.MEMBER_BAN_ADD || e.action === R.rsA.MEMBER_KICK || e.action === R.rsA.MEMBER_PRUNE) && null != s && s.some(s => !O(e, s))
  }
  getActionTypeColor(e) {
    switch (e) {
      case R.vB8.CREATE:
        return h.Z.Colors.STATUS_GREEN;
      case R.vB8.DELETE:
        return h.Z.Colors.STATUS_RED;
      default:
        return h.Z.Colors.STATUS_YELLOW
    }
  }
  getRowAccentColor() {
    let {
      log: e
    } = this.props;
    if (e.action === R.rsA.MEMBER_BAN_ADD) return L.accentRed
  }
  renderTitle() {
    let {
      log: e,
      guildId: s,
      onUserContextMenu: t,
      onTargetContextMenu: i,
      onChannelContextMenu: l
    } = this.props, {
      user: a,
      target: r,
      options: o
    } = e, c = C.N5(e), u = C.of(e);
    return null != c ? (0, n.jsx)(d.Text, {
      className: L.overflowEllipsis,
      variant: "text-sm/normal",
      children: c.format({
        user: a,
        target: r,
        reason: u,
        userHook: (i, l) => (0, n.jsx)(A, {
          guildId: s,
          user: e.user,
          onContextMenu: t,
          hideDiscriminator: !0
        }, l),
        targetHook: (t, l) => e.targetType === R.KFR.USER ? (0, n.jsx)(A, {
          guildId: s,
          user: e.target,
          onContextMenu: i,
          hideDiscriminator: !1
        }, l) : (0, n.jsx)("span", {
          onContextMenu: i,
          children: t
        }, l),
        count: o.count,
        channel: o.channel ? "string" == typeof o.channel ? o.channel : (0, E.F6)(o.channel, m.default, N.Z, !0) : null,
        channelHook: (e, s) => (0, n.jsx)("span", {
          onContextMenu: l,
          children: e
        }, s)
      })
    }) : null
  }
  renderRoleUpdate(e) {
    let {
      newValue: s
    } = e;
    return Array.isArray(s) ? s.map(e => (0, n.jsxs)("div", {
      className: L.subListItem,
      children: [(0, n.jsx)(d.Text, {
        className: L.bullet,
        color: "text-muted",
        variant: "text-sm/normal",
        children: "•"
      }), (0, n.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "text-normal",
        children: e.name
      })]
    }, e.id)) : null
  }
  renderPermissionUpdate(e) {
    let {
      newValue: s
    } = e;
    return Array.isArray(s) ? s.map(e => {
      if (null != C.hQ(e, this.props.log)) return (0, n.jsxs)("div", {
        className: L.subListItem,
        children: [(0, n.jsx)(d.Text, {
          className: L.bullet,
          color: "text-muted",
          variant: "text-sm/normal",
          children: "•"
        }), (0, n.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-normal",
          children: C.hQ(e, this.props.log)
        })]
      }, e)
    }) : null
  }
  renderChangeDetails(e) {
    let {
      log: s,
      onContentClick: t
    } = this.props;
    if (null == s.changes) return null;
    let i = 0,
      l = s.changes.map((t, l) => {
        let {
          oldValue: a,
          newValue: r
        } = t, c = null;
        if (s.action === R.rsA.MEMBER_ROLE_UPDATE ? c = this.renderRoleUpdate(t) : (s.targetType === R.KFR.ROLE || s.action === R.rsA.CHANNEL_OVERWRITE_CREATE || s.action === R.rsA.CHANNEL_OVERWRITE_UPDATE) && (c = this.renderPermissionUpdate(t)), (s.action === R.rsA.CHANNEL_UPDATE || s.action === R.rsA.CHANNEL_CREATE) && t.key === R.zUn.TYPE && (null != a && (a = (0, g.a5)({
            type: a
          })), null != r && (r = (0, g.a5)({
            type: r
          }))), s.action === R.rsA.MEMBER_UPDATE && t.key === R.zUn.COMMUNICATION_DISABLED_UNTIL) {
          if (null == (r = o()(r)) || !r.isValid()) return null;
          r = r.calendar()
        }
        let u = e[t.key];
        if (O(s, t)) return null;
        if ("function" == typeof u && (u = u(t)), null != u && "object" == typeof u) {
          if (null == u.format) {
            let e = u[t.newValue];
            null == e && null != u[C.Et] ? u = u[C.Et] : null != e && (u = e)
          }
          if (null != u && null != u.format) {
            var E, _;
            u = u.format({
              user: s.user,
              target: s.target,
              oldValue: a,
              newValue: r,
              count: Array.isArray(r) ? r.length : null,
              subtarget: null !== (_ = null !== (E = s.options.subtarget) && void 0 !== E ? E : t.subtarget) && void 0 !== _ ? _ : null,
              newColorHook: (e, s) => (0, n.jsx)("div", {
                className: L.colorHook,
                style: {
                  backgroundColor: t.newValue
                }
              }, s),
              oldColorHook: (e, s) => (0, n.jsx)("div", {
                className: L.colorHook,
                style: {
                  backgroundColor: t.oldValue
                }
              }, s)
            })
          }
        }
        return null == u ? (console.warn("No change string for", t), null) : "" === u ? null : (i++, (0, n.jsxs)("div", {
          className: L.detail,
          children: [(0, n.jsxs)("div", {
            className: L.prefix,
            children: [(0, n.jsx)(d.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              children: i < 10 ? "0".concat(i) : i
            }), (0, n.jsx)(d.Text, {
              variant: "text-xs/semibold",
              color: "text-muted",
              className: L.dash,
              children: "—"
            })]
          }), (0, n.jsxs)("div", {
            className: L.change,
            children: [null != c ? (0, n.jsx)(d.Text, {
              className: L.changeStr,
              variant: "text-xs/normal",
              children: u.concat(":")
            }) : (0, n.jsx)(d.Text, {
              className: L.changeStr,
              variant: "text-xs/normal",
              children: u
            }), null != c ? (0, n.jsx)(d.Text, {
              variant: "text-xs/normal",
              children: c
            }) : null]
          })]
        }, l))
      });
    return (0, n.jsx)(d.Clickable, {
      onClick: t,
      className: L.changeDetails,
      children: l
    })
  }
  renderChangeSummary() {
    let {
      expanded: e,
      log: s
    } = this.props;
    if (e) switch (s.targetType) {
      case R.KFR.GUILD:
        return this.renderChangeDetails(C.pY());
      case R.KFR.CHANNEL:
      case R.KFR.CHANNEL_OVERWRITE:
        return this.renderChangeDetails(C.ML());
      case R.KFR.USER:
        return this.renderChangeDetails(C.lU());
      case R.KFR.ROLE:
        return this.renderChangeDetails(C.HE());
      case R.KFR.INVITE:
        return this.renderChangeDetails(C.HN());
      case R.KFR.WEBHOOK:
        return this.renderChangeDetails(C.lR());
      case R.KFR.EMOJI:
        return this.renderChangeDetails(C.N$());
      case R.KFR.STICKER:
        return this.renderChangeDetails(C.Bq());
      case R.KFR.INTEGRATION:
        return this.renderChangeDetails(C.K());
      case R.KFR.STAGE_INSTANCE:
        return this.renderChangeDetails(C.C2());
      case R.KFR.GUILD_SCHEDULED_EVENT:
        return this.renderChangeDetails(C.uB());
      case R.KFR.THREAD:
        return this.renderChangeDetails(C.pA());
      case R.KFR.APPLICATION_COMMAND:
        return this.renderChangeDetails(C.vm(s.changes))
    }
    return null
  }
  formatActionTagName(e) {
    return e.replaceAll("_", " ").toLocaleLowerCase()
  }
  renderActionTag() {
    let {
      log: e
    } = this.props, s = (0, T.p5)(e.action);
    if (null != s) return (0, n.jsx)("div", {
      className: L.tag,
      children: (0, n.jsx)(d.Text, {
        variant: "text-xs/normal",
        className: L.tagString,
        children: this.formatActionTagName(s)
      })
    })
  }
  render() {
    let e;
    let {
      log: s,
      className: t,
      expanded: i,
      onHeaderClick: l,
      guildId: r
    } = this.props, o = s.user;
    if (null == o) return null;
    let E = this.hasChangesToRender(),
      T = L.headerDefault;
    i ? T = L.headerExpanded : E && (T = L.headerClickable);
    let N = s.timestampStart.calendar(),
      m = s.timestampEnd.calendar();
    e = N === m ? (0, n.jsx)(d.Text, {
      className: L.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(N)
    }) : (0, n.jsx)(d.Text, {
      className: L.timestamp,
      variant: "text-xs/normal",
      children: "• ".concat(N, "—").concat(m)
    });
    let h = E ? l : R.dG4;
    return (0, n.jsx)(c.mh, {
      id: s.id,
      children: l => (0, n.jsxs)("div", {
        className: a()(this.getRowAccentColor(), L.auditLog, t),
        children: [(0, n.jsxs)(d.Clickable, {
          className: T,
          "aria-expanded": i,
          onClick: h,
          ...l,
          children: [(0, n.jsx)(d.Popout, {
            preload: () => (0, _.W)(s.userId, o.getAvatarURL(r, 80), {
              guildId: r
            }),
            renderPopout: e => (0, n.jsx)(I.Z, {
              ...e,
              location: "GuildSettingsAuditLogEntry",
              userId: s.userId,
              guildId: r,
              newAnalyticsLocations: [u.Z.AVATAR]
            }),
            children: e => (0, n.jsx)(d.Avatar, {
              ...e,
              onClick: s => {
                s.stopPropagation(), e.onClick(s)
              },
              src: o.getAvatarURL(r, 40),
              "aria-hidden": !0,
              size: d.AvatarSizes.SIZE_40
            })
          }), (0, n.jsxs)("div", {
            className: L.timeWrap,
            children: [(0, n.jsx)("div", {
              className: L.title,
              children: this.renderTitle()
            }), (0, n.jsxs)("div", {
              className: L.meta,
              children: [this.renderActionTag(), e]
            })]
          }), E ? (0, n.jsx)(S.Z, {
            className: L.expand,
            foreground: L.expandForeground,
            expanded: i,
            "aria-hidden": !0
          }) : null]
        }), this.renderChangeSummary()]
      })
    })
  }
}
s.Z = p