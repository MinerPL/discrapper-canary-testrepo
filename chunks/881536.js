"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("77078"),
  r = n("367376"),
  o = n("560176"),
  u = n("304198"),
  d = n("388142"),
  c = n("49111"),
  E = n("782340"),
  f = n("962960");

function _(e) {
  let {
    message: t,
    channel: a,
    compact: r
  } = e, o = null != t.embeds && t.embeds.length > 0;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)(u.default, {
      className: l(f.mainContainer, {
        [f.compact]: r
      }),
      icon: n("127067"),
      compact: r,
      children: (0, s.jsx)("div", {
        className: l(f.content, {
          [f.compact]: r
        }),
        children: (0, s.jsx)("div", {
          className: l(f.messageContent, {
            [f.compact]: r
          }),
          children: t.content
        })
      })
    }), (0, s.jsx)("div", {
      className: l(f.embedContent, {
        [f.compact]: r
      }),
      children: (0, s.jsx)(T, {
        message: t
      })
    }), (0, s.jsx)("div", {
      className: f.actions,
      children: (0, s.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          o ? (0, d.updateGamingStats)(t) : (0, d.sendGamingStatsMessage)(a.guild_id, a.id, t.id)
        },
        children: E.default.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
      })
    })]
  })
}

function T(e) {
  var t;
  let {
    message: n
  } = e, [a] = null !== (t = n.embeds) && void 0 !== t ? t : [];
  return null == a ? null : (0, s.jsx)(o.default, {
    className: f.embed,
    embed: a,
    renderTitle: (e, t) => r.default.parseEmbedTitle(t, !0, {
      channelId: n.channel_id
    }),
    renderDescription: (e, t, s) => r.default.parse(t, !0, {
      channelId: n.channel_id
    }),
    autoPlayGif: !1,
    renderImageComponent: e => (0, c.NOOP_NULL)(),
    renderVideoComponent: e => (0, c.NOOP_NULL)(),
    renderLinkComponent: e => (0, c.NOOP_NULL)()
  })
}