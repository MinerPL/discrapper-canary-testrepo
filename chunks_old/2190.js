"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("77078"),
  i = n("878550"),
  r = n("921917"),
  o = n("393027"),
  u = n("845579"),
  d = n("271938"),
  c = n("305961"),
  f = n("49111"),
  E = n("507626");

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