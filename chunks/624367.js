"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("47120"), n("789020");
var s = n("735250");
n("470079");
var a = n("613828"),
  l = n("442837"),
  i = n("477690"),
  r = n("481060"),
  o = n("668781"),
  u = n("2052"),
  d = n("100527"),
  c = n("906732"),
  f = n("835473"),
  E = n("522474"),
  _ = n("523746"),
  m = n("592125"),
  T = n("594174"),
  I = n("158010"),
  p = n("602623"),
  h = n("630388"),
  N = n("823379"),
  S = n("624138"),
  C = n("317381"),
  A = n("638880"),
  g = n("266820"),
  M = n("147865"),
  R = n("778569"),
  v = n("513202"),
  O = n("403404"),
  x = n("701488"),
  L = n("981631"),
  D = n("689938"),
  P = n("50875");
let y = (0, S.cssValueToNumber)(i.default.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);

function U(e) {
  var t, n, i, S;
  let {
    applicationId: U,
    message: j
  } = e, {
    analyticsLocations: b
  } = (0, c.default)(d.default.ACTIVITY_BOOKMARK), B = (0, u.useAnalyticsContext)(), G = j.channel_id, F = (0, l.useStateFromStores)([m.default], () => m.default.getChannel(G), [G]), k = null == F ? void 0 : F.guild_id, w = null != F && (F.isGuildVoice() || F.isPrivate()), H = (0, l.useStateFromStores)([C.default], () => C.default.getSelfEmbeddedActivityForChannel(G)), V = (null == H ? void 0 : H.applicationId) === U, [Y, K] = (0, f.default)([U, null !== (n = null == H ? void 0 : H.applicationId) && void 0 !== n ? n : ""]), W = (0, M.default)(null !== (i = null == Y ? void 0 : Y.maxParticipants) && void 0 !== i ? i : 0), [z] = (0, l.useStateFromStoresArray)([C.default], () => w ? C.default.getEmbeddedActivitiesForChannel(G).filter(e => e.applicationId === U) : [], [U, G, w]), Q = Array.from(null !== (S = null == z ? void 0 : z.userIds) && void 0 !== S ? S : []), q = (0, l.useStateFromStoresArray)([T.default], () => Q.map(e => T.default.getUser(e)).filter(N.isNotNullish), [Q]), X = (0, R.default)({
    applicationId: U,
    size: y
  }), Z = E.default.getWindowOpen(L.PopoutWindowKeys.CHANNEL_CALL_POPOUT), J = q.length > 0 ? D.default.Messages.JOIN : D.default.Messages.START, $ = async () => {
    if (w) {
      if (null != z && q.length > 0) await (0, A.default)({
        applicationId: z.applicationId,
        currentEmbeddedApplication: K,
        activityChannelId: G,
        embeddedActivitiesManager: v.default,
        locationObject: B.location,
        analyticsLocations: b
      });
      else {
        let e = F.isPrivate() && !_.default.isCallActive(G),
          t = () => (0, g.default)({
            targetApplicationId: U,
            currentEmbeddedApplication: K,
            channelId: G,
            guildId: k,
            embeddedActivitiesManager: v.default,
            analyticsLocations: b
          });
        e ? o.default.show({
          title: D.default.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
          cancelText: D.default.Messages.CANCEL,
          confirmText: D.default.Messages.CONFIRM,
          onConfirm: () => t(),
          body: D.default.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
        }) : t()
      }
    } else(0, O.default)({
      guildId: k,
      locationObject: B.location,
      openInPopout: Z,
      initialSelectedApplicationId: U,
      initialSlide: x.ActivityShelfSlides.SELECT_CHANNEL,
      analyticsLocations: b
    })
  };
  return null != Y && (0, h.hasFlag)(Y.flags, L.ApplicationFlags.EMBEDDED) ? (0, s.jsx)(c.AnalyticsLocationProvider, {
    value: b,
    children: (0, s.jsxs)("div", {
      className: P.container,
      children: [(0, s.jsx)("div", {
        className: P.imgContainer,
        children: (0, s.jsx)("img", {
          className: P.img,
          alt: Y.name,
          src: X.url
        })
      }), (0, s.jsxs)("div", {
        className: P.content,
        children: [(0, s.jsx)(r.Heading, {
          className: P.heading,
          variant: "heading-xl/semibold",
          children: Y.name
        }), (0, s.jsx)(r.Heading, {
          className: P.description,
          variant: "heading-sm/medium",
          children: null === (t = Y.description) || void 0 === t ? void 0 : t.trim()
        }), (0, s.jsx)(r.Heading, {
          className: P.learnMore,
          variant: "heading-sm/medium",
          children: (0, s.jsx)(a.Link, {
            to: L.Routes.ACTIVITY_DETAILS(U),
            children: D.default.Messages.LEARN_MORE
          })
        }), (0, s.jsxs)("div", {
          className: P.cta,
          children: [q.length > 0 ? (0, s.jsx)("div", {
            className: P.avatars,
            children: (0, s.jsx)(p.default, {
              guildId: k,
              users: q,
              max: 4
            })
          }) : (0, s.jsxs)("div", {
            className: P.maxParticipants,
            children: [(0, s.jsx)(I.default, {
              className: P.peopleIcon
            }), (0, s.jsx)(r.Text, {
              variant: "text-xs/semibold",
              children: W
            })]
          }), (0, s.jsx)("div", {
            className: P.buttonWrapper,
            children: (0, s.jsx)(r.Button, {
              onClick: $,
              className: P.button,
              color: r.ButtonColors.GREEN,
              disabled: V,
              children: J
            })
          })]
        })]
      })]
    })
  }) : null
}