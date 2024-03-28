"use strict";
l.r(t), l.d(t, {
  default: function() {
    return V
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("442837"),
  o = l("481060"),
  c = l("239091"),
  d = l("434650"),
  u = l("607070"),
  v = l("594174"),
  f = l("158010"),
  h = l("692437"),
  m = l("602623"),
  I = l("810090"),
  E = l("585483"),
  x = l("823379"),
  T = l("5192"),
  C = l("624138"),
  S = l("317381"),
  p = l("10086"),
  A = l("542094"),
  g = l("665811"),
  _ = l("182906"),
  N = l("556505"),
  D = l("513202"),
  j = l("226799"),
  y = l("981631"),
  M = l("689938"),
  L = l("694374"),
  b = l("969728");

function V(e) {
  let {
    activityItem: t,
    channel: n,
    guildId: V,
    locationObject: R,
    onActivityItemVisible: O,
    onActivityItemSelected: H
  } = e, {
    imageBackground: B,
    videoUrl: F,
    activityAction: P,
    staffReleasePhase: w,
    onActivityItemSelected: Y,
    labelType: k
  } = (0, A.default)({
    activityItem: t,
    channel: n,
    guildId: V,
    locationObject: R,
    onActivityItemVisible: O,
    onActivityItemSelected: H,
    embeddedActivitiesManager: D.default
  }), {
    enableShelfToDetailPage: U,
    enableMinimalActivityDetails: G
  } = p.ExperimentShelfToDetailPage.useExperiment({
    location: "05846b_1"
  }), W = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), z = (0, r.useStateFromStoresArray)([S.default, v.default], () => S.default.getUsersHavePlayedByApp(t.application.id).filter(e => {
    var t;
    return (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) !== e
  }).map(e => v.default.getUser(e)).filter(x.isNotNullish), [t.application.id]), Z = null != z[0] ? (0, C.truncateText)(T.default.getName(null, null, z[0]), 25) : null, K = null;
  null != Z && z.length > 1 ? K = M.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN_AND_MORE.format({
    username1: Z,
    extras: z.length - 1
  }) : null != Z && (K = M.default.Messages.EMBEDDED_ACTIVITIES_HAVE_PLAYED_ONE_KNOWN.format({
    username1: Z
  }));
  let X = a.useCallback(e => e && (null == O ? void 0 : O({
      applicationId: t.application.id
    })), [t.application.id, O]),
    q = (0, d.useIsVisible)(X, .8, !0),
    [J, Q] = a.useState(!1),
    [$, ee] = a.useState(J);
  a.useEffect(() => {
    J && ee(!0)
  }, [J]);
  let et = () => Q(!0),
    el = () => Q(!1),
    ei = null == t.application.maxParticipants || -1 === t.application.maxParticipants ? M.default.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : M.default.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({
      count: t.application.maxParticipants
    }),
    ea = a.useCallback(() => {
      U ? E.ComponentDispatch.dispatch(y.ComponentActions.SHOW_ACTIVITY_DETAILS, {
        applicationId: t.application.id
      }) : P === A.ActivityAction.START && Y()
    }, [P, t, U, Y]),
    en = j.ACTIVITIES_EXTRA_DETAILS[t.application.id],
    es = (null == en ? void 0 : en.playersSuggestionMin) != null && (null == en ? void 0 : en.playersSuggestionMax) != null ? "".concat(en.playersSuggestionMin, " - ").concat(en.playersSuggestionMax) : void 0;
  return (0, i.jsxs)(o.Clickable, {
    className: s()(L.activityCard, {
      [L.activityCardReducedMotion]: W,
      [L.activityCardWithoutDetailPageRoute]: !U
    }),
    onClick: ea,
    onContextMenu: e => {
      (0, c.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.resolve().then(l.bind(l, "823531"));
        return l => (0, i.jsx)(e, {
          application: t.application,
          ...l
        })
      })
    },
    onMouseEnter: et,
    onFocus: et,
    onMouseLeave: el,
    onBlur: el,
    children: [(0, i.jsxs)("div", {
      ref: q,
      className: L.activityCardImageContainer,
      children: [(0, i.jsx)(_.default, {
        imageBackground: B,
        applicationName: t.application.name,
        imageClassName: L.activityImage,
        imageNotFoundClassName: L.brokenImageIconWrapper
      }), !W && null != F && $ ? (0, i.jsx)("div", {
        className: s()(L.video, {
          [L.videoFadeOut]: !J
        }),
        onAnimationEnd: () => J ? null : ee(!1),
        children: (0, i.jsx)(I.default, {
          className: L.video,
          src: F,
          loop: !0,
          autoPlay: !0,
          muted: !0
        })
      }) : null, P !== A.ActivityAction.START ? (0, i.jsx)(g.ActivityActionOverlayButton, {
        action: P,
        onClick: Y
      }) : null, G && null != es ? (0, i.jsx)("div", {
        className: L.minimalDetailsContainer,
        children: (0, i.jsxs)("div", {
          className: L.minimalDetails,
          children: [(0, i.jsx)(f.default, {
            width: 16,
            height: 16
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            children: es
          })]
        })
      }) : null, (0, i.jsx)("div", {
        className: L.overlayBadge,
        children: (0, i.jsxs)("div", {
          className: L.badgeContainer,
          children: [(0, i.jsx)(N.default, {
            name: t.application.name,
            labelType: k
          }), null != w ? (0, i.jsx)(o.Tooltip, {
            text: w,
            children: e => (0, i.jsx)("img", {
              className: L.staffBadge,
              alt: w,
              src: b,
              ...e
            })
          }) : null]
        })
      })]
    }), G ? null : (0, i.jsxs)("div", {
      className: L.activityCardDetails,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-xl/extrabold",
          children: t.application.name
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/semibold",
          className: L.activityCardParticipants,
          children: ei
        })]
      }), z.length > 0 ? (0, i.jsx)("div", {
        className: L.activityCardSocialProofContainer,
        children: (0, i.jsxs)("div", {
          className: L.activityCardUsersHavePlayedContainer,
          children: [(0, i.jsx)(m.default, {
            users: z,
            guildId: void 0,
            max: 4
          }), null != K ? (0, i.jsx)(o.Text, {
            variant: "text-sm/medium",
            className: L.activityCardUsersHavePlayedText,
            children: K
          }) : null]
        })
      }) : (0, i.jsx)(i.Fragment, {
        children: t.application.tags.length > 0 ? (0, i.jsx)("div", {
          className: L.activityCardTagContainer,
          children: t.application.tags.slice(0, 3).map(e => (0, i.jsx)("div", {
            className: L.activityCardTag,
            children: (0, i.jsx)(o.Text, {
              variant: "text-xs/semibold",
              children: e
            })
          }, e))
        }) : null
      }), U ? (0, i.jsxs)("div", {
        className: s()(L.activityCardHoverHint, {
          [L.activityCardHoverHintReducedMotion]: W
        }),
        children: [(0, i.jsx)(o.Text, {
          variant: "text-sm/semibold",
          children: M.default.Messages.LEARN_MORE
        }), (0, i.jsx)(h.default, {
          width: 16,
          height: 16
        })]
      }) : null]
    })]
  })
}