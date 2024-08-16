n(627494), n(757143);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(913527),
    o = n.n(l),
    c = n(91192),
    d = n(481060),
    u = n(100527),
    _ = n(933557),
    I = n(112831),
    E = n(184301),
    T = n(103575),
    m = n(387667),
    N = n(699516),
    S = n(594174),
    h = n(259580),
    g = n(934415),
    C = n(51144),
    x = n(884737),
    p = n(981631),
    R = n(263989);
function f(e, t) {
    let n = x.vc[e.targetType];
    return null != n && !0 === n[t.key];
}
class L extends a.PureComponent {
    render() {
        let { user: e, hideDiscriminator: t, onContextMenu: n, guildId: a } = this.props;
        return (0, s.jsx)(d.Popout, {
            preload: () => (0, E.Z)(e.id, e.getAvatarURL(a, 80), { guildId: a }),
            renderPopout: (t) =>
                (0, s.jsx)(T.Z, {
                    ...t,
                    location: 'GuildSettingsAuditLogEntry',
                    userId: e.id,
                    guildId: a,
                    newAnalyticsLocations: [u.Z.USERNAME]
                }),
            children: (a) =>
                (0, s.jsx)(d.Clickable, {
                    ...a,
                    onClick: (e) => {
                        e.stopPropagation(), a.onClick(e);
                    },
                    onContextMenu: n,
                    className: R.userHook,
                    children: (0, s.jsxs)('div', {
                        className: R.username,
                        children: [
                            (0, s.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: C.ZP.getUserTag(e, {
                                    mode: 'username',
                                    identifiable: t ? 'never' : 'always'
                                })
                            }),
                            !t &&
                                !e.isPomelo() &&
                                (0, s.jsxs)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: ['#', e.discriminator]
                                })
                        ]
                    })
                })
        });
    }
}
class O extends a.PureComponent {
    hasChangesToRender() {
        let { log: e } = this.props,
            { changes: t } = e;
        return (e.actionType !== p.vB8.DELETE || e.action === p.rsA.MEMBER_BAN_ADD || e.action === p.rsA.MEMBER_KICK || e.action === p.rsA.MEMBER_PRUNE) && null != t && t.some((t) => !f(e, t));
    }
    getActionTypeColor(e) {
        switch (e) {
            case p.vB8.CREATE:
                return I.Z.Colors.STATUS_GREEN;
            case p.vB8.DELETE:
                return I.Z.Colors.STATUS_RED;
            default:
                return I.Z.Colors.STATUS_YELLOW;
        }
    }
    getRowAccentColor() {
        let { log: e } = this.props;
        if (e.action === p.rsA.MEMBER_BAN_ADD) return R.accentRed;
    }
    renderTitle() {
        let { log: e, guildId: t, onUserContextMenu: n, onTargetContextMenu: a, onChannelContextMenu: i } = this.props,
            { user: r, target: l, options: o } = e,
            c = x.N5(e),
            u = x.of(e);
        return null != c
            ? (0, s.jsx)(d.Text, {
                  className: R.overflowEllipsis,
                  variant: 'text-sm/normal',
                  children: c.format({
                      user: r,
                      target: l,
                      reason: u,
                      userHook: (a, i) =>
                          (0, s.jsx)(
                              L,
                              {
                                  guildId: t,
                                  user: e.user,
                                  onContextMenu: n,
                                  hideDiscriminator: !0
                              },
                              i
                          ),
                      targetHook: (n, i) =>
                          e.targetType === p.KFR.USER
                              ? (0, s.jsx)(
                                    L,
                                    {
                                        guildId: t,
                                        user: e.target,
                                        onContextMenu: a,
                                        hideDiscriminator: !1
                                    },
                                    i
                                )
                              : (0, s.jsx)(
                                    'span',
                                    {
                                        onContextMenu: a,
                                        children: n
                                    },
                                    i
                                ),
                      count: o.count,
                      channel: o.channel ? ('string' == typeof o.channel ? o.channel : (0, _.F6)(o.channel, S.default, N.Z, !0)) : null,
                      channelHook: (e, t) =>
                          (0, s.jsx)(
                              'span',
                              {
                                  onContextMenu: i,
                                  children: e
                              },
                              t
                          )
                  })
              })
            : null;
    }
    renderRoleUpdate(e) {
        let { newValue: t } = e;
        return Array.isArray(t)
            ? t.map((e) =>
                  (0, s.jsxs)(
                      'div',
                      {
                          className: R.subListItem,
                          children: [
                              (0, s.jsx)(d.Text, {
                                  className: R.bullet,
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: '\u2022'
                              }),
                              (0, s.jsx)(d.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-normal',
                                  children: e.name
                              })
                          ]
                      },
                      e.id
                  )
              )
            : null;
    }
    renderPermissionUpdate(e) {
        let { newValue: t } = e;
        return Array.isArray(t)
            ? t.map((e) => {
                  if (null != x.hQ(e, this.props.log))
                      return (0, s.jsxs)(
                          'div',
                          {
                              className: R.subListItem,
                              children: [
                                  (0, s.jsx)(d.Text, {
                                      className: R.bullet,
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: '\u2022'
                                  }),
                                  (0, s.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-normal',
                                      children: x.hQ(e, this.props.log)
                                  })
                              ]
                          },
                          e
                      );
              })
            : null;
    }
    renderChangeDetails(e) {
        let { log: t, onContentClick: n } = this.props;
        if (null == t.changes) return null;
        let a = 0,
            i = t.changes.map((n, i) => {
                let { oldValue: r, newValue: l } = n,
                    c = null;
                if ((t.action === p.rsA.MEMBER_ROLE_UPDATE ? (c = this.renderRoleUpdate(n)) : (t.targetType === p.KFR.ROLE || t.action === p.rsA.CHANNEL_OVERWRITE_CREATE || t.action === p.rsA.CHANNEL_OVERWRITE_UPDATE) && (c = this.renderPermissionUpdate(n)), (t.action === p.rsA.CHANNEL_UPDATE || t.action === p.rsA.CHANNEL_CREATE) && n.key === p.zUn.TYPE && (null != r && (r = (0, g.a5)({ type: r })), null != l && (l = (0, g.a5)({ type: l }))), t.action === p.rsA.MEMBER_UPDATE && n.key === p.zUn.COMMUNICATION_DISABLED_UNTIL)) {
                    if (null == (l = o()(l)) || !l.isValid()) return null;
                    l = l.calendar();
                }
                let u = e[n.key];
                if (f(t, n)) return null;
                if (('function' == typeof u && (u = u(n)), null != u && 'object' == typeof u)) {
                    if (null == u.format) {
                        let e = u[n.newValue];
                        null == e && null != u[x.Et] ? (u = u[x.Et]) : null != e && (u = e);
                    }
                    if (null != u && null != u.format) {
                        var _, I;
                        u = u.format({
                            user: t.user,
                            target: t.target,
                            oldValue: r,
                            newValue: l,
                            count: Array.isArray(l) ? l.length : null,
                            subtarget: null !== (I = null !== (_ = t.options.subtarget) && void 0 !== _ ? _ : n.subtarget) && void 0 !== I ? I : null,
                            newColorHook: (e, t) =>
                                (0, s.jsx)(
                                    'div',
                                    {
                                        className: R.colorHook,
                                        style: { backgroundColor: n.newValue }
                                    },
                                    t
                                ),
                            oldColorHook: (e, t) =>
                                (0, s.jsx)(
                                    'div',
                                    {
                                        className: R.colorHook,
                                        style: { backgroundColor: n.oldValue }
                                    },
                                    t
                                )
                        });
                    }
                }
                return null == u
                    ? (console.warn('No change string for', n), null)
                    : '' === u
                      ? null
                      : (a++,
                        (0, s.jsxs)(
                            'div',
                            {
                                className: R.detail,
                                children: [
                                    (0, s.jsxs)('div', {
                                        className: R.prefix,
                                        children: [
                                            (0, s.jsx)(d.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                children: a < 10 ? '0'.concat(a) : a
                                            }),
                                            (0, s.jsx)(d.Text, {
                                                variant: 'text-xs/semibold',
                                                color: 'text-muted',
                                                className: R.dash,
                                                children: '\u2014'
                                            })
                                        ]
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: R.change,
                                        children: [
                                            null != c
                                                ? (0, s.jsx)(d.Text, {
                                                      className: R.changeStr,
                                                      variant: 'text-xs/normal',
                                                      children: u.concat(':')
                                                  })
                                                : (0, s.jsx)(d.Text, {
                                                      className: R.changeStr,
                                                      variant: 'text-xs/normal',
                                                      children: u
                                                  }),
                                            null != c
                                                ? (0, s.jsx)(d.Text, {
                                                      variant: 'text-xs/normal',
                                                      children: c
                                                  })
                                                : null
                                        ]
                                    })
                                ]
                            },
                            i
                        ));
            });
        return (0, s.jsx)(d.Clickable, {
            onClick: n,
            className: R.changeDetails,
            children: i
        });
    }
    renderChangeSummary() {
        let { expanded: e, log: t } = this.props;
        if (e)
            switch (t.targetType) {
                case p.KFR.GUILD:
                    return this.renderChangeDetails(x.pY());
                case p.KFR.CHANNEL:
                case p.KFR.CHANNEL_OVERWRITE:
                    return this.renderChangeDetails(x.ML());
                case p.KFR.USER:
                    return this.renderChangeDetails(x.lU());
                case p.KFR.ROLE:
                    return this.renderChangeDetails(x.HE());
                case p.KFR.INVITE:
                    return this.renderChangeDetails(x.HN());
                case p.KFR.WEBHOOK:
                    return this.renderChangeDetails(x.lR());
                case p.KFR.EMOJI:
                    return this.renderChangeDetails(x.N$());
                case p.KFR.STICKER:
                    return this.renderChangeDetails(x.Bq());
                case p.KFR.INTEGRATION:
                    return this.renderChangeDetails(x.K());
                case p.KFR.STAGE_INSTANCE:
                    return this.renderChangeDetails(x.C2());
                case p.KFR.GUILD_SCHEDULED_EVENT:
                    return this.renderChangeDetails(x.uB());
                case p.KFR.THREAD:
                    return this.renderChangeDetails(x.pA());
                case p.KFR.APPLICATION_COMMAND:
                    return this.renderChangeDetails(x.vm(t.changes));
            }
        return null;
    }
    formatActionTagName(e) {
        return e.replaceAll('_', ' ').toLocaleLowerCase();
    }
    renderActionTag() {
        let { log: e } = this.props,
            t = (0, m.p5)(e.action);
        if (null != t)
            return (0, s.jsx)('div', {
                className: R.tag,
                children: (0, s.jsx)(d.Text, {
                    variant: 'text-xs/normal',
                    className: R.tagString,
                    children: this.formatActionTagName(t)
                })
            });
    }
    render() {
        let e;
        let { log: t, className: n, expanded: a, onHeaderClick: i, guildId: l } = this.props,
            o = t.user;
        if (null == o) return null;
        let _ = this.hasChangesToRender(),
            I = R.headerDefault;
        a ? (I = R.headerExpanded) : _ && (I = R.headerClickable);
        let m = t.timestampStart.calendar(),
            N = t.timestampEnd.calendar();
        e =
            m === N
                ? (0, s.jsx)(d.Text, {
                      className: R.timestamp,
                      variant: 'text-xs/normal',
                      children: '\u2022 '.concat(m)
                  })
                : (0, s.jsx)(d.Text, {
                      className: R.timestamp,
                      variant: 'text-xs/normal',
                      children: '\u2022 '.concat(m, '\u2014').concat(N)
                  });
        let S = _ ? i : p.dG4;
        return (0, s.jsx)(c.mh, {
            id: t.id,
            children: (i) =>
                (0, s.jsxs)('div', {
                    className: r()(this.getRowAccentColor(), R.auditLog, n),
                    children: [
                        (0, s.jsxs)(d.Clickable, {
                            className: I,
                            'aria-expanded': a,
                            onClick: S,
                            ...i,
                            children: [
                                (0, s.jsx)(d.Popout, {
                                    preload: () => (0, E.Z)(t.userId, o.getAvatarURL(l, 80), { guildId: l }),
                                    renderPopout: (e) =>
                                        (0, s.jsx)(T.Z, {
                                            ...e,
                                            location: 'GuildSettingsAuditLogEntry',
                                            userId: t.userId,
                                            guildId: l,
                                            newAnalyticsLocations: [u.Z.AVATAR]
                                        }),
                                    children: (e) =>
                                        (0, s.jsx)(d.Avatar, {
                                            ...e,
                                            onClick: (t) => {
                                                t.stopPropagation(), e.onClick(t);
                                            },
                                            src: o.getAvatarURL(l, 40),
                                            'aria-hidden': !0,
                                            size: d.AvatarSizes.SIZE_40
                                        })
                                }),
                                (0, s.jsxs)('div', {
                                    className: R.timeWrap,
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: R.title,
                                            children: this.renderTitle()
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: R.meta,
                                            children: [this.renderActionTag(), e]
                                        })
                                    ]
                                }),
                                _
                                    ? (0, s.jsx)(h.Z, {
                                          className: R.expand,
                                          foreground: R.expandForeground,
                                          expanded: a,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        this.renderChangeSummary()
                    ]
                })
        });
    }
}
t.Z = O;
