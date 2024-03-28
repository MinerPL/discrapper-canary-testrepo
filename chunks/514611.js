"use strict";
n.r(t), n("47120");
var a, s = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("622535"),
  u = n("481060"),
  d = n("239091"),
  c = n("556017"),
  f = n("879484"),
  E = n("26580"),
  h = n("206887"),
  _ = n("134432"),
  C = n("695346"),
  m = n("768581"),
  S = n("900849"),
  I = n("940627"),
  p = n("806519"),
  T = n("981631"),
  g = n("689938"),
  A = n("313618"),
  N = n("129512"),
  v = n("330065"),
  O = n("755386");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class L extends(a = l.PureComponent) {
  getDefaultSplashURL(e, t) {
    if (t) return O;
    switch (e) {
      case T.ThemeTypes.DARK:
        return N;
      case T.ThemeTypes.LIGHT:
        return v
    }
  }
  render() {
    var e;
    let {
      guild: t,
      className: n,
      theme: a,
      onTagClick: l
    } = this.props, {
      loaded: i,
      hasBeenSeen: d,
      isVisible: N,
      submitting: v
    } = this.state, {
      name: O,
      description: R,
      presenceCount: L,
      memberCount: P,
      keywords: M
    } = t, y = null === (e = t.features) || void 0 === e ? void 0 : e.has(T.GuildFeatures.HUB), D = m.default.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, _.getDevicePixelRatio)()
    }), b = null != D ? D : this.getDefaultSplashURL(a, y), x = m.default.getGuildIconURL({
      id: t.id,
      icon: t.icon,
      size: 40
    });
    f.DiscoveryTagsExperiment.trackExposure({
      location: "de1ef6_1"
    });
    let {
      shouldDisplayTags: U
    } = f.DiscoveryTagsExperiment.getCurrentConfig({
      location: "de1ef6_2"
    }, {
      autoTrackExposure: !1
    }), {
      canSeeInAppReportingButtons: j
    } = c.DiscoveryInAppReportingExperiment.getCurrentConfig({
      location: "de1ef6_3"
    }, {
      autoTrackExposure: !1
    });
    c.DiscoveryInAppReportingExperiment.trackExposure({
      location: "de1ef6_4"
    });
    let G = C.DeveloperMode.getSetting();
    return (0, s.jsx)(o.VisibilitySensor, {
      active: !N,
      onChange: this.setIsVisible,
      threshold: .1,
      children: N ? (0, s.jsx)(o.VisibilitySensor, {
        onChange: this.handleVisibilityChange,
        active: !d,
        threshold: .55,
        children: (0, s.jsxs)("div", {
          className: r()(n, {
            [A.loaded]: i,
            [A.loading]: !i
          }),
          children: [v ? (0, s.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: A.spinner
          }) : null, (0, s.jsxs)(u.Clickable, {
            onClick: this.handleClickView,
            className: r()(A.card, {
              [A.submitting]: v,
              [A.cardWithTags]: U
            }),
            onContextMenu: this.handleContextMenu,
            children: [(0, s.jsxs)("div", {
              className: A.cardHeader,
              children: [(0, s.jsx)("div", {
                className: A.splash,
                children: (0, s.jsx)("img", {
                  src: b,
                  alt: "",
                  className: r()(A.splashImage, {
                    [A.splashImageHeight]: !y
                  }),
                  onLoad: () => this.setState({
                    loaded: !0
                  })
                })
              }), G || j ? (0, s.jsx)("div", {
                className: A.actionButtons,
                children: (0, s.jsx)(h.default, {
                  guild: t
                })
              }) : null, (0, s.jsx)("div", {
                className: A.guildIcon,
                children: (0, s.jsx)(p.default, {
                  mask: p.default.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, s.jsx)("div", {
                    className: A.iconMask,
                    children: (0, s.jsx)(p.default, {
                      mask: p.default.Masks.SQUIRCLE,
                      width: 40,
                      height: 40,
                      children: (0, s.jsx)("img", {
                        src: x,
                        alt: "",
                        className: A.avatar
                      })
                    })
                  })
                })
              })]
            }), (0, s.jsxs)("div", {
              className: A.guildInfo,
              children: [(0, s.jsxs)("div", {
                className: A.title,
                children: [(0, s.jsx)(I.default, {
                  className: A.guildBadge,
                  guild: t,
                  tooltipColor: u.Tooltip.Colors.PRIMARY
                }), (0, s.jsx)(u.Heading, {
                  variant: "heading-md/semibold",
                  className: A.guildName,
                  children: O
                })]
              }), (0, s.jsx)(u.Text, {
                className: A.description,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: R
              }), U && null != M && null != l && (0, s.jsx)(E.DiscoveryTags, {
                tags: M,
                onTagClick: e => l(e, t.id),
                guildId: t.id,
                section: S.AnalyticsContexts.POPULAR
              }), (0, s.jsxs)("div", {
                className: A.memberInfo,
                children: [null != L && (0, s.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: A.dotOnline
                  }), (0, s.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                      membersOnline: L
                    })
                  })]
                }), null != P && (0, s.jsxs)("div", {
                  className: A.memberCount,
                  children: [(0, s.jsx)("div", {
                    className: A.dotOffline
                  }), (0, s.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                      count: P
                    })
                  })]
                })]
              })]
            })]
          })]
        })
      }) : (0, s.jsx)("div", {
        className: r()(A.card, {
          [A.cardWithTags]: U
        })
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      loaded: !1,
      hasBeenSeen: !1,
      isVisible: !1,
      submitting: !1
    }), R(this, "handleClickView", async e => {
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
    }), R(this, "handleVisibilityChange", e => {
      let {
        onGuildCardSeen: t,
        guild: n
      } = this.props;
      null != n && !this.state.hasBeenSeen && e && (this.setState({
        hasBeenSeen: e
      }), null != t && t(n.id))
    }), R(this, "handleContextMenu", e => {
      (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "455839"));
        return t => (0, s.jsx)(e, {
          ...t,
          guild: this.props.guild
        })
      })
    }), R(this, "setIsVisible", e => {
      this.setState({
        isVisible: e
      })
    })
  }
}
R(L, "Placeholder", e => (0, s.jsx)("div", {
  className: r()(e.className, A.cardPlaceholder)
})), t.default = L