"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("702976");
var s = n("37983");
n("884691");
var a = n("90915"),
  l = n("446674"),
  i = n("769846"),
  r = n("77078"),
  o = n("404118"),
  u = n("997289"),
  d = n("812204"),
  c = n("685665"),
  E = n("442939"),
  f = n("870346"),
  _ = n("950104"),
  T = n("42203"),
  I = n("697218"),
  m = n("155207"),
  N = n("811305"),
  p = n("568734"),
  S = n("449008"),
  A = n("159885"),
  C = n("550766"),
  h = n("191225"),
  g = n("602718"),
  M = n("706508"),
  O = n("986214"),
  R = n("549548"),
  v = n("969380"),
  L = n("141962"),
  P = n("478272"),
  D = n("954016"),
  x = n("49111"),
  y = n("782340"),
  U = n("462813");
let j = (0, A.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function b(e) {
  var t, n, i, A;
  let {
    applicationId: b,
    message: G
  } = e, {
    analyticsLocations: B
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), F = (0, u.useAnalyticsContext)(), k = G.channel_id, w = (0, l.useStateFromStores)([T.default], () => T.default.getChannel(k), [k]), H = null == w ? void 0 : w.guild_id, V = null != w && (w.isGuildVoice() || w.isPrivate()), Y = (0, l.useStateFromStores)([h.default], () => h.default.getSelfEmbeddedActivityForChannel(k)), W = (null == Y ? void 0 : Y.applicationId) === b, [K, z] = (0, E.default)([b, null !== (n = null == Y ? void 0 : Y.applicationId) && void 0 !== n ? n : ""]), Q = (0, R.default)(null !== (i = null == K ? void 0 : K.maxParticipants) && void 0 !== i ? i : 0), [Z] = (0, l.useStateFromStoresArray)([h.default], () => V ? h.default.getEmbeddedActivitiesForChannel(k).filter(e => e.applicationId === b) : [], [b, k, V]), J = Array.from(null !== (A = null == Z ? void 0 : Z.userIds) && void 0 !== A ? A : []), X = (0, l.useStateFromStoresArray)([I.default], () => J.map(e => I.default.getUser(e)).filter(S.isNotNullish), [J]), q = (0, v.default)({
    applicationId: b,
    size: j
  }), $ = f.default.getWindowOpen(x.PopoutWindowKeys.CHANNEL_CALL_POPOUT), ee = X.length > 0 ? y.default.Messages.JOIN : y.default.Messages.START, et = async () => {
    if (V) {
      let {
        activityConfigs: e,
        applications: t
      } = await (0, C.fetchShelf)({
        guildId: H
      }), n = (0, g.default)({
        applicationId: b,
        activityConfigs: e,
        applications: t
      });
      if (null != Z && X.length > 0) await (0, M.default)({
        applicationId: Z.applicationId,
        currentEmbeddedApplication: z,
        activityChannelId: k,
        embeddedActivitiesManager: L.default,
        locationObject: F.location,
        analyticsLocations: B
      });
      else {
        let e = w.isPrivate() && !_.default.isCallActive(k),
          t = () => (0, O.default)({
            activityItem: n,
            currentEmbeddedApplication: z,
            channelId: k,
            guildId: H,
            embeddedActivitiesManager: L.default,
            analyticsLocations: B
          });
        e ? o.default.show({
          title: y.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: y.default.Messages.CANCEL,
          confirmText: y.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: y.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, P.default)({
      guildId: H,
      locationObject: F.location,
      openInPopout: $,
      initialSelectedApplicationId: b,
      initialSlide: D.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: B
    })
  };
  return null != K && (0, p.hasFlag)(K.flags, x.ApplicationFlags.EMBEDDED) ? (0, s.jsx)(c.AnalyticsLocationProvider, {
    value: B,
    children: (0, s.jsxs)("div", {
      className: U.container,
      children: [(0, s.jsx)("div", {
        className: U.imgContainer,
        children: (0, s.jsx)("img", {
          className: U.img,
          alt: K.name,
          src: q.url
        })
      }), (0, s.jsxs)("div", {
        className: U.content,
        children: [(0, s.jsx)(r.Heading, {
          className: U.heading,
          variant: "heading-xl/semibold",
          children: K.name
        }), (0, s.jsx)(r.Heading, {
          className: U.description,
          variant: "heading-sm/medium",
          children: null === (t = K.description) || void 0 === t ? void 0 : t.trim()
        }), (0, s.jsx)(r.Heading, {
          className: U.learnMore,
          variant: "heading-sm/medium",
          children: (0, s.jsx)(a.Link, {
            to: x.Routes.ACTIVITY_DETAILS(b),
            children: y.default.Messages.LEARN_MORE
          })
        }), (0, s.jsxs)("div", {
          className: U.cta,
          children: [X.length > 0 ? (0, s.jsx)("div", {
            className: U.avatars,
            children: (0, s.jsx)(N.default, {
              guildId: H,
              users: X,
              max: 4
            })
          }) : (0, s.jsxs)("div", {
            className: U.maxParticipants,
            children: [(0, s.jsx)(m.default, {
              className: U.peopleIcon
            }), (0, s.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: Q
            })]
          }), (0, s.jsx)("div", {
            className: U.buttonWrapper,
            children: (0, s.jsx)(r.Button, {
              onClick: et,
              className: U.button,
              color: r.ButtonColors.GREEN,
              disabled: W,
              children: ee
            })
          })]
        })]
      })]
    })
  }) : null
}