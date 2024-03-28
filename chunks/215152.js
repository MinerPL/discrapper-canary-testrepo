"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("512259"),
  r = n("720449"),
  o = n("905423"),
  u = n("695346"),
  d = n("314897"),
  c = n("430824"),
  f = n("981631"),
  E = n("457921");

function h() {
  let {
    guildId: e
  } = (0, o.default)(), t = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(e)), n = (0, s.useStateFromStores)([d.default], () => d.default.getId()), h = (0, s.useStateFromStores)([i.default], () => i.default.getDownToPlay(n));
  return (null == t ? void 0 : t.hasFeature(f.GuildFeatures.CLAN)) ? (0, a.jsx)("div", {
    className: E.container,
    children: (0, a.jsx)(l.FormSwitch, {
      value: null != h,
      hideBorder: !0,
      className: E.formSwitch,
      onChange: e => {
        e ? (0, r.default)("Let's play together!", {
          id: void 0,
          name: "\uD83C\uDFAE"
        }, "TODAY") : u.CustomStatusSetting.updateSetting(void 0)
      },
      children: "Down to Play"
    })
  }) : null
}