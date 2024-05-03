"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("442837"),
  d = l("481060"),
  o = l("239091"),
  c = l("434650"),
  u = l("213459"),
  v = l("695346"),
  f = l("594174"),
  h = l("695103"),
  I = l("880448"),
  m = l("602623"),
  E = l("810090"),
  C = l("823379"),
  T = l("5192"),
  x = l("624138"),
  S = l("115130"),
  p = l("147865"),
  A = l("542094"),
  _ = l("665811"),
  g = l("182906"),
  N = l("556505"),
  j = l("513202"),
  y = l("823531"),
  D = l("689938"),
  M = l("955850"),
  L = l("969728");

function V(e) {
  let {
    value: t,
    icon: l
  } = e;
  return (0, i.jsxs)(d.Text, {
    className: M.activityTag,
    color: "interactive-normal",
    variant: "text-xs/semibold",
    children: [(0, C.isNotNullish)(l) ? (0, i.jsx)(l, {
      className: M.icon,
      backgroundColor: "interactive-normal"
    }) : null, t]
  })
}

function R(e) {
  let {
    activity: t,
    application: l,
    channel: a,
    guildId: n,
    large: s = !1
  } = e, o = (0, r.useStateFromStoresArray)([f.default], () => {
    var e;
    return Array.from(null !== (e = null == t ? void 0 : t.userIds) && void 0 !== e ? e : []).map(e => {
      let [t] = e;
      return f.default.getUser(t)
    }).filter(C.isNotNullish)
  }), c = T.default.getName(n, null == a ? void 0 : a.id, null == o ? void 0 : o[0]);
  if (c = (0, x.truncateText)(c, 15), null == t || 0 === o.length) {
    var u, v;
    let e = "".concat((0, p.default)(null !== (u = l.maxParticipants) && void 0 !== u ? u : 0));
    return s && (e = null !== (v = l.description) && void 0 !== v ? v : ""), (0, i.jsx)(d.Text, {
      className: M.activitySubtitleText,
      variant: "text-xs/normal",
      color: "interactive-normal",
      children: e
    })
  }
  return (0, i.jsxs)("div", {
    className: M.activitySubtitleText,
    children: [(0, i.jsx)(d.Text, {
      className: M.usersArePlayingText,
      variant: "text-xs/normal",
      children: o.length > 1 ? D.default.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
        username: c,
        count: o.length - 1
      }) : D.default.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({
        username: c
      })
    }), (0, i.jsx)(m.default, {
      size: s ? m.Sizes.SIZE_24 : m.Sizes.SIZE_16,
      guildId: n,
      users: o,
      max: 6
    })]
  })
}

function O(e) {
  var t;
  let {
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: m,
    onActivityItemVisible: C,
    onActivityItemSelected: T,
    large: x = !1
  } = e, {
    imageBackground: O,
    videoUrl: b,
    activityAction: H,
    joinableEmbeddedApp: F,
    onActivityItemSelected: B,
    labelType: Y,
    staffReleasePhase: w
  } = (0, A.default)({
    activityItem: l,
    channel: n,
    guildId: f,
    locationObject: m,
    onActivityItemVisible: C,
    onActivityItemSelected: T,
    embeddedActivitiesManager: j.default
  }), k = (0, r.useStateFromStores)([S.default, h.default], () => S.default.inDevModeForApplication(l.application.id) || h.default.inTestModeForApplication(l.application.id), [l.application.id]), {
    application: P
  } = l, G = a.useCallback(e => e && (null == C ? void 0 : C({
    applicationId: l.application.id
  })), [l.application.id, C]), U = (0, c.useIsVisible)(G, .8, !0), [Z, W] = a.useState(!1), [z, q] = a.useState(Z);
  a.useEffect(() => {
    Z && q(!0)
  }, [Z]);
  let J = () => W(!0),
    K = () => W(!1),
    X = v.DeveloperMode.useSetting(),
    Q = a.useCallback(() => {
      null == B || B(), u.default.maybeQueryForInstallLessApps(P.id, null == n ? void 0 : n.id)
    }, [P.id, null == n ? void 0 : n.id, B]);
  return (0, i.jsxs)(d.Clickable, {
    onClick: H === A.ActivityAction.START ? Q : void 0,
    onContextMenu: X ? e => {
      (0, o.openContextMenu)(e, e => (0, i.jsx)(y.default, {
        application: P,
        ...e
      }))
    } : void 0,
    className: s()(M.activityItem, {
      [M.large]: !0 === x,
      [M.disabled]: H !== A.ActivityAction.START
    }),
    children: [(0, i.jsxs)("div", {
      ref: U,
      className: s()(M.activityImageContainer, {
        [M.large]: !0 === x
      }),
      onMouseEnter: J,
      onFocus: J,
      onMouseLeave: K,
      onBlur: K,
      children: [(0, i.jsx)(g.default, {
        imageBackground: O,
        applicationName: P.name,
        imageClassName: s()(M.activityImage, {
          [M.large]: !0 === x
        }),
        imageNotFoundClassName: M.brokenImageIconWrapper
      }), null != b && z && H === A.ActivityAction.START ? (0, i.jsx)("div", {
        className: s()(M.activityVideo, {
          [M.videoFadeOut]: !Z
        }),
        onAnimationEnd: () => Z ? null : q(!1),
        children: (0, i.jsx)(E.default, {
          className: M.activityVideo,
          src: b,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, H !== A.ActivityAction.START ? (0, i.jsx)(_.ActivityActionOverlayButton, {
        action: H,
        onClick: Q
      }) : null, (0, i.jsx)("div", {
        className: M.overlayBadge,
        children: (0, i.jsx)("div", {
          className: M.badgeContainer,
          children: (0, i.jsx)(N.default, {
            name: P.name,
            labelType: Y
          })
        })
      }), k ? (0, i.jsx)(d.Tooltip, {
        text: D.default.Messages.EMBEDDED_ACTIVITIES_DEVELOPER_ACTIVITY,
        children: e => (0, i.jsx)("div", {
          className: M.devShelfBadge,
          ...e,
          children: (0, i.jsx)(I.default, {
            className: M.devShelfIcon
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: s()(M.activityTextContainer, {
        [M.large]: x
      }),
      children: [x ? (0, i.jsx)(d.Text, {
        className: M.activityMaxParticipantsLarge,
        variant: "text-xs/normal",
        color: "interactive-normal",
        children: (0, p.default)(null !== (t = P.maxParticipants) && void 0 !== t ? t : 0)
      }) : null, (0, i.jsxs)("div", {
        className: M.activityName,
        children: [(0, i.jsx)(d.Heading, {
          className: M.activityTitleText,
          variant: "heading-md/semibold",
          color: "interactive-active",
          children: P.name
        }), null != w ? (0, i.jsx)(d.Tooltip, {
          text: w,
          children: e => (0, i.jsx)("img", {
            className: M.staffBadge,
            alt: w,
            src: L,
            ...e
          })
        }) : null]
      }), (0, i.jsx)(R, {
        activity: null == F ? void 0 : F.embeddedActivity,
        application: P,
        channel: n,
        guildId: f,
        large: x
      }), (0, i.jsx)("div", {
        className: M.activityTagsContainer,
        children: P.tags.slice(0, 3).map(e => (0, i.jsx)(V, {
          value: e
        }, "activity-tag-".concat(P.id, "-").concat(e)))
      })]
    })]
  })
}