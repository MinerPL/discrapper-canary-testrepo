"use strict";
n.d(t, {
  Z: function() {
    return x
  }
}), n(390547);
var l = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  i = n(392711),
  r = n.n(i),
  o = n(442837),
  u = n(481060),
  c = n(984933),
  d = n(430824),
  m = n(496675),
  E = n(771845),
  _ = n(346656),
  S = n(259580),
  h = n(102172),
  g = n(148381),
  Z = n(689938),
  C = n(555066),
  f = n(386475);

function N(e) {
  let {
    guildId: t,
    onClick: n
  } = e, s = (0, o.e7)([d.Z], () => d.Z.getGuild(t)), a = (0, o.e7)([c.ZP, d.Z, m.Z], () => c.ZP.getChannels(t)[c.Zb].some(e => {
    let {
      channel: t
    } = e;
    return (0, h.JL)(t, d.Z, m.Z)
  }));
  return null != s && a ? (0, l.jsxs)(u.Clickable, {
    onClick: () => n(t),
    className: f.guildRow,
    children: [(0, l.jsx)(_.Z, {
      guild: s,
      size: _.Z.Sizes.SMALL,
      className: f.guildIcon
    }), (0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      className: f.guildName,
      children: s.toString()
    }), (0, l.jsx)(S.Z, {
      direction: S.Z.Directions.RIGHT,
      className: f.guildArrow
    })]
  }) : null
}

function x(e) {
  let {
    onSelectGuild: t
  } = e, n = (0, o.e7)([E.ZP], () => E.ZP.getGuildFolders());
  return (0, l.jsx)(g.Z, {
    title: Z.Z.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
    scrollerClassName: a()(f.guildScroller, C.marginBottom),
    children: r().flatMap(n, e => {
      let {
        guildIds: n
      } = e;
      return n.map(e => (0, l.jsx)(N, {
        guildId: e,
        onClick: t
      }, e))
    })
  })
}