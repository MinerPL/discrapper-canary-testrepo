"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("446674"),
  c = l("77078"),
  d = l("272030"),
  o = l("811425"),
  u = l("845579"),
  f = l("697218"),
  v = l("167726"),
  h = l("604525"),
  m = l("811305"),
  I = l("58608"),
  E = l("449008"),
  p = l("387111"),
  x = l("159885"),
  C = l("84460"),
  T = l("549548"),
  S = l("607573"),
  g = l("555584"),
  A = l("817039"),
  _ = l("687292"),
  N = l("141962"),
  j = l("639028"),
  D = l("782340"),
  M = l("277277"),
  y = l("728791");

function L(e) {
  let {
    value: t,
    icon: l
  } = e;
  return (0, i.jsxs)(c.Text, {
    className: M.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, E.isNotNullish)(l) ? (0, i.jsx)(l, {
      className: M.icon,
      backgroundColor: "interactive-normal"
    }) : null, t]
  })
}

function V(e) {
  let {
    activity: t,
    application: l,
    channel: a,
    guildId: n,
    large: s = !1
  } = e, d = (0, r.useStateFromStoresArray)([f.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return f.default.getUser(t)
    }).filter(E.isNotNullish)
  }), o = p.default.getName(n, null == a ? void 0 : a.id, null == d ? void 0 : d[0]);
  if (o = (0, x.truncateText)(o, 15), null == t || 0 === d.length) {
    var u, v;
    let e = "".concat((0, T.default)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (v = l.description) && void 0 !== v ? v : ""), (0, i.jsx)(c.Text, {
      className: M.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: M.activitySubtitleText,
    children: [(0, i.jsx)(c.Text, {
      className: M.usersArePlayingText,
      variant: "text-xs/normal",
      children: d.length > 1 ? D.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: o,
        count: d.length - 1
      }) : D.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: o
      })
    }), (0, i.jsx)(m.default, {
      size: s ? m.Sizes.SIZE_24 : m.Sizes.SIZE_16,
      guildId: n,
      users: d,
      max: 6
    })]
  })
}

function R(e) {
  var t;
  let {
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: m,
    onActivityItemVisible: E,
    onActivityItemSelected: p,
    large: x = !1
  } = e, {
    imageBackground: R,
    videoUrl: b,
    activityAction: O,
    joinableEmbeddedApp: H,
    onActivityItemSelected: B,
    labelType: F,
    staffReleasePhase: w
  } = (0, S.default)({
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: m,
    onActivityItemVisible: E,
    onActivityItemSelected: p,
    embeddedActivitiesManager: N.default
  }), k = (0, r.useStateFromStores)([C.default, v.default], () => C.default.inDevModeForApplication(l.application.id) || v.default.inTestModeForApplication(l.application.id), [l.application.id]), {
    application: Y
  } = l, P = a.useCallback(e => e && (null == E ? void 0 : E({
    applicationId: l.application.id
  })), [l.application.id, E]), U = (0, o.useIsVisible)(P, .8, !0), [G, Z] = a.useState(!1), [W, z] = a.useState(G);
  a.useEffect(() => {
    G && z(!0)
  }, [G]);
  let K = () => Z(!0),
    X = () => Z(!1),
    q = u.DeveloperMode.useSetting();
  return (0, i.jsxs)(c.Clickable, {
    onClick: O === S.ActivityAction.START ? B : void 0,
    onContextMenu: q ? e => {
      (0, d.openContextMenu)(e, e => (0, i.jsx)(j.default, {
        application: Y,
        ...e
      }))
    } : void 0,
    className: s(M.activityItem, {
      [M.large]: !0 === x,
      [M.disabled]: O !== S.ActivityAction.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: U,
      className: s(M.activityImageContainer, {
        [M.large]: !0 === x
      }),
      onMouseEnter: K,
      onFocus: K,
      onMouseLeave: X,
      onBlur: X,
      children: [(0, i.jsx)(A.default, {
        imageBackground: R,
        applicationName: Y.name,
        imageClassName: s(M.activityImage, {
          [M.large]: !0 === x
        }),
        imageNotFoundClassName: M.brokenImageIconWrapper
      }), null != b && W && O === S.ActivityAction.START ? (0, i.jsx)("div", {
        className: s(M.activityVideo, {
          [M.videoFadeOut]: !G
        }),
        onAnimationEnd: () => G ? null : z(!1),
        children: (0, i.jsx)(I.default, {
          className: M.activityVideo,
          src: b,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, O !== S.ActivityAction.START ? (0, i.jsx)(g.ActivityActionOverlayButton, {
        action: O,
        onClick: B
      }) : null, (0, i.jsx)("div", {
        className: M.overlayBadge,
        children: (0, i.jsx)("div", {
          className: M.badgeContainer,
          children: (0, i.jsx)(_.default, {
            name: Y.name,
            labelType: F
          })
        })
      }), k ? (0, i.jsx)(c.Tooltip, {
        text: D.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: M.devShelfBadge,
          ...e,
          children: (0, i.jsx)(h.default, {
            className: M.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s(M.activityTextContainer, {
        [M.large]: x
      }),
      children: [x ? (0, i.jsx)(c.Text, {
        className: M.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, T.default)(null !== (t = Y.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: M.activityName,
        children: [(0, i.jsx)(c.Heading, {
          className: M.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: Y.name
        }), null != w ? (0, i.jsx)(c.Tooltip, {
          text: w,
          children: e => (0, i.jsx)("img", {
            className: M.staffBadge,
            alt: w,
            src: y,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(V, {
        activity: null == H ? void 0 : H.embeddedActivity,
        application: Y,
        channel: n,
        guildId: f,
        large: x
      }), (0, i.jsx)("div", {
        className: M.activityTagsContainer,
        children: Y.tags.slice(0, 3).map(e => (0, i.jsx)(L, {
          value: e
        }, "activity-tag-".concat(Y.id, "-").concat(e)))
      })]
    })]
  })
}