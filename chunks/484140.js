"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("669491"),
  r = n("77078"),
  o = n("987317"),
  u = n("990766"),
  d = n("716241"),
  c = n("442939"),
  f = n("673527"),
  E = n("410348"),
  h = n("271938"),
  _ = n("18494"),
  C = n("697218"),
  S = n("953109"),
  I = n("277174"),
  m = n("368121"),
  p = n("811305"),
  T = n("158998"),
  g = n("882278"),
  A = n("754493"),
  N = n("813531"),
  R = n("49111"),
  O = n("706530"),
  v = n("782340"),
  L = n("770970");

function M(e) {
  let {
    users: t
  } = e;
  return (0, a.jsxs)("div", {
    className: L.viewers,
    children: [(0, a.jsx)(m.default, {
      width: 16,
      height: 16,
      color: i.default.colors.HEADER_PRIMARY.css
    }), (0, a.jsx)(p.default, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: p.Sizes.SIZE_24
    })]
  })
}

function P(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: i,
    applicationId: m,
    channelId: p,
    streamKey: P
  } = n, [y, D] = s.useState(!1), x = (0, l.useStateFromStores)([C.default], () => C.default.getUser(i)), [b] = (0, c.default)([m]), U = null !== (t = T.default.getGlobalName(x)) && void 0 !== t ? t : T.default.getUserTag(x), G = (0, N.default)(), j = (0, l.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, p, i)), w = (0, l.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()), k = (0, A.default)(), F = (0, g.default)(p);
  if (s.useEffect(() => {
      y && w === p && D(!1)
    }, [w, y, p]), null == x || null == U) return null;
  let {
    buttonColor: B,
    buttonCTA: H,
    disabled: V
  } = function(e, t) {
    let n = h.default.getId(),
      a = t.some(e => e.id === n) || e === n,
      s = t.length >= R.MAX_GROUP_DM_BROADCAST_PARTICIPANTS;
    return {
      buttonColor: s ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: s ? v.default.Messages.BROADCAST_FULL : a ? v.default.Messages.VIEW_BROADCAST : v.default.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(i, F);
  return (0, a.jsxs)("div", {
    className: L.container,
    children: [(0, a.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: x.getAvatarURL(null, 32),
      "aria-label": U
    }), (0, a.jsxs)("div", {
      className: L.details,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: U
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != b ? v.default.Messages.STREAMING.format({
          name: b.name
        }) : v.default.Messages.STREAMING_A_GAME
      }), (0, a.jsxs)("div", {
        className: L.activity,
        children: [F.length > 0 && (0, a.jsx)(M, {
          users: F
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (w === p) {
              o.default.selectPrivateChannel(p);
              return
            }
            D(!0), (0, u.joinPrivateChannelAndWatchStream)(p, P), d.default.trackWithMetadata(R.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: G.length,
              broadcast_position: G.findIndex(e => e.userId === i) + 1,
              is_broadcasting: k,
              broadcast_channel_id: p
            })
          },
          color: B,
          size: r.ButtonSizes.SMALL,
          className: L.button,
          disabled: V,
          innerClassName: L.innerButton,
          children: [(0, a.jsx)(I.default, {
            width: 16,
            height: 16
          }), H]
        })]
      })]
    }), null != j ? (0, a.jsx)(f.default, {
      className: L.stream,
      stream: {
        streamType: O.StreamTypes.CALL,
        ownerId: i,
        channelId: p
      }
    }) : (0, a.jsx)(S.default, {
      game: b,
      size: S.default.Sizes.LARGE,
      className: L.gameIcon
    })]
  })
}