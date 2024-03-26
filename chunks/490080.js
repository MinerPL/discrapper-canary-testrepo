"use strict";
l.r(t), l.d(t, {
  default: function() {
    return V
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("446674"),
  o = l("77078"),
  c = l("272030"),
  d = l("811425"),
  u = l("845579"),
  v = l("697218"),
  f = l("167726"),
  h = l("604525"),
  m = l("811305"),
  I = l("58608"),
  E = l("449008"),
  x = l("387111"),
  T = l("159885"),
  C = l("84460"),
  S = l("549548"),
  p = l("607573"),
  A = l("555584"),
  g = l("817039"),
  _ = l("687292"),
  N = l("141962"),
  D = l("639028"),
  j = l("782340"),
  y = l("453193"),
  M = l("728791");

function L(e) {
  let {
    value: t,
    icon: l
  } = e;
  return (0, i.jsxs)(o.Text, {
    className: y.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, E.isNotNullish)(l) ? (0, i.jsx)(l, {
      className: y.icon,
      backgroundColor: "interactive-normal"
    }) : null, t]
  })
}

function b(e) {
  let {
    activity: t,
    application: l,
    channel: a,
    guildId: n,
    large: s = !1
  } = e, c = (0, r.useStateFromStoresArray)([v.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return v.default.getUser(t)
    }).filter(E.isNotNullish)
  }), d = x.default.getName(n, null == a ? void 0 : a.id, null == c ? void 0 : c[0]);
  if (d = (0, T.truncateText)(d, 15), null == t || 0 === c.length) {
    var u, f;
    let e = "".concat((0, S.default)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (f = l.description) && void 0 !== f ? f : ""), (0, i.jsx)(o.Text, {
      className: y.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: y.activitySubtitleText,
    children: [(0, i.jsx)(o.Text, {
      className: y.usersArePlayingText,
      variant: "text-xs/normal",
      children: c.length > 1 ? j.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: d,
        count: c.length - 1
      }) : j.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: d
      })
    }), (0, i.jsx)(m.default, {
      size: s ? m.Sizes.SIZE_24 : m.Sizes.SIZE_16,
      guildId: n,
      users: c,
      max: 6
    })]
  })
}

function V(e) {
  var t;
  let {
    activityItem: l,
    channel: n,
    guildId: v,
    locationObject: m,
    onActivityItemVisible: E,
    onActivityItemSelected: x,
    large: T = !1
  } = e, {
    imageBackground: V,
    videoUrl: R,
    activityAction: O,
    joinableEmbeddedApp: H,
    onActivityItemSelected: B,
    labelType: F,
    staffReleasePhase: P
  } = (0, p.default)({
    activityItem: l,
    channel: n,
    guildId: v,
    locationObject: m,
    onActivityItemVisible: E,
    onActivityItemSelected: x,
    embeddedActivitiesManager: N.default
  }), w = (0, r.useStateFromStores)([C.default, f.default], () => C.default.inDevModeForApplication(l.application.id) || f.default.inTestModeForApplication(l.application.id), [l.application.id]), {
    application: Y
  } = l, k = a.useCallback(e => e && (null == E ? void 0 : E({
    applicationId: l.application.id
  })), [l.application.id, E]), U = (0, d.useIsVisible)(k, .8, !0), [G, W] = a.useState(!1), [z, Z] = a.useState(G);
  a.useEffect(() => {
    G && Z(!0)
  }, [G]);
  let K = () => W(!0),
    X = () => W(!1),
    q = u.DeveloperMode.useSetting();
  return (0, i.jsxs)(o.Clickable, {
    onClick: O === p.ActivityAction.START ? B : void 0,
    onContextMenu: q ? e => {
      (0, c.openContextMenu)(e, e => (0, i.jsx)(D.default, {
        application: Y,
        ...e
      }))
    } : void 0,
    className: s(y.activityItem, {
      [y.large]: !0 === T,
      [y.disabled]: O !== p.ActivityAction.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: U,
      className: s(y.activityImageContainer, {
        [y.large]: !0 === T
      }),
      onMouseEnter: K,
      onFocus: K,
      onMouseLeave: X,
      onBlur: X,
      children: [(0, i.jsx)(g.default, {
        imageBackground: V,
        applicationName: Y.name,
        imageClassName: s(y.activityImage, {
          [y.large]: !0 === T
        }),
        imageNotFoundClassName: y.brokenImageIconWrapper
      }), null != R && z && O === p.ActivityAction.START ? (0, i.jsx)("div", {
        className: s(y.activityVideo, {
          [y.videoFadeOut]: !G
        }),
        onAnimationEnd: () => G ? null : Z(!1),
        children: (0, i.jsx)(I.default, {
          className: y.activityVideo,
          src: R,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, O !== p.ActivityAction.START ? (0, i.jsx)(A.ActivityActionOverlayButton, {
        action: O,
        onClick: B
      }) : null, (0, i.jsx)("div", {
        className: y.overlayBadge,
        children: (0, i.jsx)("div", {
          className: y.badgeContainer,
          children: (0, i.jsx)(_.default, {
            name: Y.name,
            labelType: F
          })
        })
      }), w ? (0, i.jsx)(o.Tooltip, {
        text: j.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: y.devShelfBadge,
          ...e,
          children: (0, i.jsx)(h.default, {
            className: y.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s(y.activityTextContainer, {
        [y.large]: T
      }),
      children: [T ? (0, i.jsx)(o.Text, {
        className: y.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, S.default)(null !== (t = Y.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: y.activityName,
        children: [(0, i.jsx)(o.Heading, {
          className: y.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: Y.name
        }), null != P ? (0, i.jsx)(o.Tooltip, {
          text: P,
          children: e => (0, i.jsx)("img", {
            className: y.staffBadge,
            alt: P,
            src: M,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(b, {
        activity: null == H ? void 0 : H.embeddedActivity,
        application: Y,
        channel: n,
        guildId: v,
        large: T
      }), (0, i.jsx)("div", {
        className: y.activityTagsContainer,
        children: Y.tags.slice(0, 3).map(e => (0, i.jsx)(L, {
          value: e
        }, "activity-tag-".concat(Y.id, "-").concat(e)))
      })]
    })]
  })
}