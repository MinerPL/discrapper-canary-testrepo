"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
}), l("390547");
var a = l("735250");
l("470079");
var s = l("803997"),
  n = l.n(s),
  i = l("392711"),
  r = l.n(i),
  u = l("442837"),
  o = l("481060"),
  d = l("984933"),
  c = l("430824"),
  f = l("496675"),
  m = l("771845"),
  S = l("346656"),
  E = l("259580"),
  C = l("102172"),
  _ = l("148381"),
  g = l("689938"),
  N = l("223318"),
  h = l("578606");

function x(e) {
  let {
    guildId: t,
    onClick: l
  } = e, s = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), n = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
    let {
      channel: t
    } = e;
    return (0, C.canStreamInChannel)(t, c.default, f.default)
  }));
  return null != s && n ? (0, a.jsxs)(o.Clickable, {
    onClick: () => l(t),
    className: h.guildRow,
    children: [(0, a.jsx)(S.default, {
      guild: s,
      size: S.default.Sizes.SMALL,
      className: h.guildIcon
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      className: h.guildName,
      children: s.toString()
    }), (0, a.jsx)(E.default, {
      direction: E.default.Directions.RIGHT,
      className: h.guildArrow
    })]
  }) : null
}

function I(e) {
  let {
    onSelectGuild: t
  } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
  return (0, a.jsx)(_.default, {
    title: g.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
    scrollerClassName: n()(h.guildScroller, N.marginBottom),
    children: r().flatMap(l, e => {
      let {
        guildIds: l
      } = e;
      return l.map(e => (0, a.jsx)(x, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}