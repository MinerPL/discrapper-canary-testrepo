"use strict";
n.r(t), n.d(t, {
  DiscoverSearchResultPlaceholder: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("239091"),
  u = n("906732"),
  d = n("134432"),
  c = n("451603"),
  f = n("885714"),
  E = n("940627"),
  h = n("806519"),
  _ = n("768581"),
  C = n("900849"),
  m = n("556017"),
  S = n("879484"),
  p = n("26580"),
  g = n("206887"),
  I = n("981631"),
  T = n("689938"),
  A = n("283434"),
  N = n("129512"),
  v = n("330065");
let R = () => (0, a.jsx)("div", {
  className: A.placeholder
});
t.default = e => {
  var t;
  let {
    guild: l,
    theme: R,
    onView: O,
    onTagClick: L
  } = e, {
    id: M,
    discoverySplash: y,
    icon: P,
    name: x,
    description: D,
    presenceCount: b,
    memberCount: U,
    keywords: j
  } = l, [G, k] = s.useState(!1), [w, B] = s.useState(!1), {
    analyticsLocations: F
  } = (0, u.default)(), H = _.default.getGuildDiscoverySplashURL({
    id: M,
    splash: y,
    size: 240 * (0, d.getDevicePixelRatio)()
  }), V = null != H ? H : function(e) {
    switch (e) {
      case I.ThemeTypes.DARK:
        return N;
      case I.ThemeTypes.LIGHT:
        return v
    }
  }(R), Y = null !== (t = _.default.getGuildIconURL({
    id: M,
    icon: P,
    size: 32
  })) && void 0 !== t ? t : void 0, W = async e => {
    let {
      className: t
    } = e.target;
    if (!t.includes("Menu")) {
      if ((0, c.isAtGuildCapAndNonPremium)()) {
        (0, f.default)({
          analyticsSource: {
            page: I.AnalyticsPages.GUILD_DISCOVERY
          },
          analyticsLocation: {
            page: I.AnalyticsPages.GUILD_DISCOVERY,
            section: I.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
          },
          analyticsLocations: F
        });
        return
      }
      B(!0);
      try {
        null != O && await O(l.id)
      } finally {
        B(!1)
      }
    }
  };
  s.useEffect(() => S.DiscoveryTagsExperiment.trackExposure({
    location: "4302e4_1"
  }));
  let {
    shouldDisplayTags: K
  } = S.DiscoveryTagsExperiment.useExperiment({
    location: "4302e4_2"
  }, {
    autoTrackExposure: !1
  }), z = (0, m.useCanSeeDiscoveryContextMenu)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: A.card,
      children: [w ? (0, a.jsx)(r.Spinner, {
        type: r.Spinner.Type.PULSING_ELLIPSIS,
        className: A.spinner
      }) : null, (0, a.jsxs)(r.Clickable, {
        className: i()(A.container, {
          [A.hover]: G,
          [A.submitting]: w
        }),
        onClick: W,
        onContextMenu: e => {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, "455839"));
            return t => (0, a.jsx)(e, {
              ...t,
              guild: l
            })
          })
        },
        onMouseEnter: () => k(!0),
        onMouseLeave: () => k(!1),
        children: [(0, a.jsx)("div", {
          className: i()(A.splashContainer, {
            [A.splashContainerWithTags]: K
          }),
          children: (0, a.jsx)("img", {
            src: V,
            alt: "",
            className: A.splashImage,
            width: 240
          })
        }), (0, a.jsxs)("div", {
          className: i()(A.content, {
            [A.contentWithTags]: K
          }),
          children: [(0, a.jsxs)("div", {
            className: A.header,
            children: [(0, a.jsx)(h.default, {
              mask: h.default.Masks.SQUIRCLE,
              width: 32,
              height: 32,
              children: (0, a.jsx)("img", {
                src: Y,
                alt: "",
                className: A.avatar
              })
            }), (0, a.jsxs)("div", {
              className: A.headerName,
              children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(E.default, {
                  guild: l,
                  className: A.guildBadge,
                  size: 16
                })
              }), (0, a.jsx)(r.Heading, {
                variant: "heading-md/semibold",
                className: A.headerTitle,
                children: x
              })]
            })]
          }), (0, a.jsx)(r.Text, {
            className: A.description,
            variant: "text-sm/normal",
            children: D
          }), K && null != j && null != L && (0, a.jsx)(p.DiscoveryTags, {
            guildId: l.id,
            discoveryTagStyle: p.DiscoveryTagStyle.ALT,
            onTagClick: e => L(e, l.id),
            tags: j,
            section: C.AnalyticsContexts.SEARCH
          }), (0, a.jsxs)("div", {
            className: A.memberInfo,
            children: [null != b && (0, a.jsx)("div", {
              className: A.memberCount,
              children: (0, a.jsx)(r.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                  membersOnline: b
                })
              })
            }), null != U && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", {
                className: A.dotSeparator
              }), (0, a.jsx)("div", {
                className: A.memberCount,
                children: (0, a.jsx)(r.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: T.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                    count: U
                  })
                })
              })]
            })]
          })]
        }), z ? (0, a.jsx)("div", {
          className: A.actionButtons,
          children: (0, a.jsx)(g.default, {
            guild: l
          })
        }) : null]
      })]
    }), (0, a.jsx)("hr", {
      className: A.separator
    })]
  })
}