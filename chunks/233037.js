"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  i = n(984933),
  r = n(430824),
  o = n(496675),
  u = n(594174),
  c = n(938475),
  d = n(102172),
  m = n(499596),
  E = n(148381),
  _ = n(689938),
  S = n(402806);

function h(e) {
  let {
    selectedChannelId: t,
    guildId: n,
    onChangeSelectedChannelId: h
  } = e, g = (0, s.e7)([u.default], () => u.default.getCurrentUser()), Z = (0, s.e7)([r.Z, i.ZP, o.Z], () => (0, d.h_)(i.ZP.getChannels(n), r.Z, o.Z)), C = (0, s.e7)([c.ZP], () => c.ZP.getVoiceStates(n)), f = Z.map(e => {
    var n;
    return {
      name: (0, l.jsx)(m.Z, {
        channel: e,
        users: null === (n = C[e.id]) || void 0 === n ? void 0 : n.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== (null == g ? void 0 : g.id)
        }).map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        selected: e.id === t
      }),
      value: e.id
    }
  });
  return (0, l.jsx)(E.Z, {
    title: _.Z.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
    scrollerInnerClassName: S.channelSelectScrollerInner,
    children: (0, l.jsx)(a.RadioGroup, {
      options: f,
      value: t,
      itemInfoClassName: S.channelInfoWrapper,
      itemTitleClassName: S.channelTitleWrapper,
      onChange: e => {
        let {
          value: t
        } = e;
        return h(t)
      }
    })
  })
}