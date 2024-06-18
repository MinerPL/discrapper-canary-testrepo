"use strict";
n.d(t, {
  Z: function() {
    return N
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(239091),
  o = n(287734),
  a = n(364640),
  l = n(754688),
  u = n(336197),
  _ = n(131704),
  d = n(592125),
  c = n(430824),
  E = n(797053),
  I = n(442514),
  T = n(900849),
  h = n(746878),
  S = n(981631);
async function f(e, t, n) {
  if (null == t) return;
  if (a.Z.trackDiscordLinkClicked({
      guildId: e,
      channelId: t,
      messageId: n
    }), null != e) {
    let n = c.Z.getGuild(e);
    if ((null == n ? void 0 : n.joinedAt) == null) try {
      await T.Ub(e, {}, {
        channelId: t
      });
      return
    } catch {}
  }
  let i = d.Z.getChannel(t);
  if (null != i && null == n && (0, _.bw)(i.type) && (0, l.YO)(i)) {
    o.default.selectVoiceChannel(i.id);
    return
  }(0, u.Z)(S.Z5c.CHANNEL(e, t, n))
}

function N(e) {
  return {
    react(t, o, a) {
      let l = d.Z.getChannel(t.channelId),
        u = a.noStyleAndInteraction ? void 0 : n => {
          e.shouldStopPropagation && (null == n || n.stopPropagation()), f(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, r.closeAllModals)()
        },
        _ = a.noStyleAndInteraction || null == t.channelId || null == l && null == t.originalLink ? S.dG4 : e => {
          (0, s.jW)(e, async () => {
            let {
              default: e
            } = await n.e("9573").then(n.bind(n, 546649));
            return n => {
              var r;
              return (0, i.jsx)(e, {
                ...n,
                channel: l,
                channelId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : t.channelId,
                originalLink: t.originalLink,
                messageId: t.messageId
              })
            }
          })
        };
      return (0, i.jsxs)(E.Z, {
        role: "link",
        onClick: u,
        onContextMenu: _,
        className: "channelMention",
        children: [null != t.inContent ? o(t.inContent, a) : null, null != t.inContent ? (0, i.jsx)(I.Z, {}) : null, (0, h.S)(t, o, a)]
      }, a.key)
    }
  }
}