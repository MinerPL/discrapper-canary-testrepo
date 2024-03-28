"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("481060"),
  r = n("454585"),
  o = n("529815"),
  u = n("702346"),
  d = n("553385"),
  c = n("981631"),
  f = n("689938"),
  E = n("558607");

function _(e) {
  let {
    message: t,
    channel: a,
    compact: r
  } = e, o = null != t.embeds && t.embeds.length > 0;
  return (0, s.jsxs)("div", {
    children: [(0, s.jsx)(u.default, {
      className: l()(E.mainContainer, {
        [E.compact]: r
      }),
      icon: n("570111"),
      compact: r,
      children: (0, s.jsx)("div", {
        className: l()(E.__invalid_content, {
          [E.compact]: r
        }),
        children: (0, s.jsx)("div", {
          className: l()(E.__invalid_messageContent, {
            [E.compact]: r
          }),
          children: t.content
        })
      })
    }), (0, s.jsx)("div", {
      className: l()(E.__invalid_embedContent, {
        [E.compact]: r
      }),
      children: (0, s.jsx)(T, {
        message: t
      })
    }), (0, s.jsx)("div", {
      className: E.actions,
      children: (0, s.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          o ? (0, d.updateGamingStats)(t) : (0, d.sendGamingStatsMessage)(a.guild_id, a.id, t.id)
        },
        children: f.default.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
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
    className: E.embed,
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