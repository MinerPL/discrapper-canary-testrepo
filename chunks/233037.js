"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
});
var a = l("735250");
l("470079");
var s = l("442837"),
  n = l("481060"),
  i = l("984933"),
  r = l("430824"),
  u = l("496675"),
  o = l("594174"),
  d = l("938475"),
  c = l("102172"),
  f = l("499596"),
  m = l("148381"),
  S = l("689938"),
  E = l("769138");

function C(e) {
  let {
    selectedChannelId: t,
    guildId: l,
    onChangeSelectedChannelId: C
  } = e, _ = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser()), g = (0, s.useStateFromStores)([r.default, i.default, u.default], () => (0, c.getStreamEligibleChannels)(i.default.getChannels(l), r.default, u.default)), N = (0, s.useStateFromStores)([d.default], () => d.default.getVoiceStates(l)), h = g.map(e => {
    var l;
    return {
      name: (0, a.jsx)(f.default, {
        channel: e,
        users: null === (l = N[e.id]) || void 0 === l ? void 0 : l.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== (null == _ ? void 0 : _.id)
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
  return (0, a.jsx)(m.default, {
    title: S.default.Messages.GO_LIVE_MODAL_SELECT_CHANNEL_FORM_TITLE,
    scrollerInnerClassName: E.channelSelectScrollerInner,
    children: (0, a.jsx)(n.RadioGroup, {
      options: h,
      value: t,
      itemInfoClassName: E.channelInfoWrapper,
      itemTitleClassName: E.channelTitleWrapper,
      onChange: e => {
        let {
          value: t
        } = e;
        return C(t)
      }
    })
  })
}