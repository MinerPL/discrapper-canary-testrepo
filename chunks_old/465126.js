"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("290381"),
  o = n("77078"),
  u = n("272030"),
  d = n("378662"),
  c = n("574921"),
  f = n("311092"),
  E = n("613088"),
  h = n("407063"),
  _ = n("845579"),
  C = n("315102"),
  S = n("794818"),
  I = n("580357"),
  m = n("587974"),
  p = n("49111"),
  T = n("782340"),
  g = n("196779"),
  A = n("68422"),
  N = n("578817"),
  R = n("855237");
class O extends s.PureComponent {
  getDefaultSplashURL(e, t) {
    if (t) return R;
    switch (e) {
      case p.ThemeTypes.DARK:
        return A;
      case p.ThemeTypes.LIGHT:
        return N
    }
  }
  render() {
    var e;
    let {
      guild: t,
      className: n,
      theme: s,
      onTagClick: l
    } = this.props, {
      loaded: u,
      hasBeenSeen: A,
      isVisible: N,
      submitting: R
    } = this.state, {
      name: O,
      description: v,
      presenceCount: L,
      memberCount: M,
      keywords: P
    } = t, y = null === (e = t.features) || void 0 === e ? void 0 : e.has(p.GuildFeatures.HUB), D = C.default.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, h.getDevicePixelRatio)()
    }), x = null != D ? D : this.getDefaultSplashURL(s, y), b = C.default.getGuildIconURL({
      id: t.id,
      icon: t.icon,
      size: 40
    });
    c.DiscoveryTagsExperiment.trackExposure({
      location: "de1ef6_1"
    });
    let {
      shouldDisplayTags: U
    } = c.DiscoveryTagsExperiment.getCurrentConfig({
      location: "de1ef6_2"
    }, {
      autoTrackExposure: !1
    }), {
      canSeeInAppReportingButtons: G
    } = d.DiscoveryInAppReportingExperiment.getCurrentConfig({
      location: "de1ef6_3"
    }, {
      autoTrackExposure: !1
    });
    d.DiscoveryInAppReportingExperiment.trackExposure({
      location: "de1ef6_4"
    });
    let j = _.DeveloperMode.getSetting();
    return (0, a.jsx)(r.VisibilitySensor, {
      active: !N,
      onChange: this.setIsVisible,
      threshold: .1,
      children: N ? (0, a.jsx)(r.VisibilitySensor, {
        onChange: this.handleVisibilityChange,
        active: !A,
        threshold: .55,
        children: (0, a.jsxs)("div", {
          className: i(n, {
            [g.loaded]: u,
            [g.loading]: !u
          }),
          children: [R ? (0, a.jsx)(o.Spinner, {
            type: o.Spinner.Type.PULSING_ELLIPSIS,
            className: g.spinner
          }) : null, (0, a.jsxs)(o.Clickable, {
            onClick: this.handleClickView,
            className: i(g.card, {
              [g.submitting]: R,
              [g.cardWithTags]: U
            }),
            onContextMenu: this.handleContextMenu,
            children: [(0, a.jsxs)("div", {
              className: g.cardHeader,
              children: [(0, a.jsx)("div", {
                className: g.splash,
                children: (0, a.jsx)("img", {
                  src: x,
                  alt: "",
                  className: i(g.splashImage, {
                    [g.splashImageHeight]: !y
                  }),
                  onLoad: () => this.setState({
                    loaded: !0
                  })
                })
              }), j || G ? (0, a.jsx)("div", {
                className: g.actionButtons,
                children: (0, a.jsx)(E.default, {
                  guild: t
                })
              }) : null, (0, a.jsx)("div", {
                className: g.guildIcon,
                children: (0, a.jsx)(m.default, {
                  mask: m.default.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, a.jsx)("div", {
                    className: g.iconMask,
                    children: (0, a.jsx)(m.default, {
                      mask: m.default.Masks.SQUIRCLE,
                      width: 40,
                      height: 40,
                      children: (0, a.jsx)("img", {
                        src: b,
                        alt: "",
                        className: g.avatar
                      })
                    })
                  })
                })
              })]
            }), (0, a.jsxs)("div", {
              className: g.guildInfo,
              children: [(0, a.jsxs)("div", {
                className: g.title,
                children: [(0, a.jsx)(I.default, {
                  className: g.guildBadge,
                  guild: t,
                  tooltipColor: o.Tooltip.Colors.PRIMARY
                }), (0, a.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  className: g.guildName,
                  children: O
                })]
              }), (0, a.jsx)(o.Text, {
                className: g.description,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: v
              }), U && null != P && null != l && (0, a.jsx)(f.DiscoveryTags, {
                tags: P,
                onTagClick: e => l(e, t.id),
                guildId: t.id,
                section: S.AnalyticsContexts.POPULAR
              }), (0, a.jsxs)("div", {
                className: g.memberInfo,
                children: [null != L && (0, a.jsxs)("div", {
                  className: g.memberCount,
                  children: [(0, a.jsx)("div", {
                    className: g.dotOnline
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                      membersOnline: L
                    })
                  })]
                }), null != M && (0, a.jsxs)("div", {
                  className: g.memberCount,
                  children: [(0, a.jsx)("div", {
                    className: g.dotOffline
                  }), (0, a.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                      count: M
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      }) : (0, a.jsx)("div", {
        className: i(g.card, {
          [g.cardWithTags]: U
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      loaded: !1,
      hasBeenSeen: !1,
      isVisible: !1,
      submitting: !1
    }, this.handleClickView = async e => {
      let {
        className: t
      } = e.target;
      if (t.includes("Menu")) return;
      let {
        onView: n,
        guild: a
      } = this.props;
      e.stopPropagation(), this.setState({
        submitting: !0
      });
      try {
        null != n && await n(a.id)
      } finally {
        this.setState({
          submitting: !1
        })
      }
    }, this.handleVisibilityChange = e => {
      let {
        onGuildCardSeen: t,
        guild: n
      } = this.props;
      null != n && !this.state.hasBeenSeen && e && (this.setState({
        hasBeenSeen: e
      }), null != t && t(n.id))
    }, this.handleContextMenu = e => {
      (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("392533").then(n.bind(n, "392533"));
        return t => (0, a.jsx)(e, {
          ...t,
          guild: this.props.guild
        })
      })
    }, this.setIsVisible = e => {
      this.setState({
        isVisible: e
      })
    }
  }
}
O.Placeholder = e => (0, a.jsx)("div", {
  className: i(e.className, g.cardPlaceholder)
});
var v = O