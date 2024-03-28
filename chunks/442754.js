"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  u = n("481060"),
  s = n("362658"),
  i = n("152376"),
  r = n("398758"),
  d = n("9156"),
  o = n("981631"),
  c = n("689938");

function f(e) {
  let {
    isFavoritesPerk: t
  } = (0, s.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), f = (0, l.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, l.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, l.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)), p = () => {
    (0, i.setOptInChannel)(e.guild_id, e.id, !f, {
      section: o.AnalyticsSections.CONTEXT_MENU
    })
  }, N = () => {
    null != e.parent_id && (0, i.setOptInChannel)(e.guild_id, e.parent_id, !1, {
      section: o.AnalyticsSections.CONTEXT_MENU
    })
  };
  if (!n || e.isThread()) return null;
  if (e.isCategory()) return (0, a.jsx)(u.MenuItem, {
    id: "opt-into-category",
    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
    action: () => p()
  });
  let I = E ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
    C = E ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.MenuItem, {
      id: "opt-in-favorite-channel",
      label: t ? C : I,
      action: () => {
        (0, i.setIsFavorite)(e.guild_id, e.id, !E, {
          section: o.AnalyticsSections.CONTEXT_MENU
        })
      }
    }), _ ? (0, a.jsx)(u.MenuItem, {
      id: "opt-out-category",
      label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
      action: () => N()
    }) : (0, a.jsx)(u.MenuItem, {
      id: "opt-into-channel",
      label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
      action: () => p()
    })]
  })
}