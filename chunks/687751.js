"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("592125"),
  o = n("944486"),
  u = n("914010"),
  d = n("594174"),
  c = n("758119"),
  f = n("920644"),
  E = n("208381"),
  h = n("723359"),
  _ = n("981631");

function C(e, t) {
  var n;
  if (null == e) return;
  let a = d.default.getCurrentUser();
  (null === (n = r.default.getChannel(t)) || void 0 === n ? void 0 : n.isNSFW()) && null != a && null == a.nsfwAllowed && (0, c.openAgeGateModal)(h.AgeGateSource.NSFW_CHANNEL)
}
class m extends i.default {
  _initialize() {
    l.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.subscribe("CHANNEL_SELECT", this.handleChannelSelect), l.default.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.default.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.default.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.default.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  _terminate() {
    l.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), l.default.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect), l.default.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen), l.default.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose), l.default.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess), l.default.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure)
  }
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    C(t, n)
  }
  handleConnectionOpen() {
    let e = u.default.getGuildId();
    C(e, o.default.getChannelId())
  }
  handleAgeGateModalOpen(e) {
    let {
      source: t
    } = e;
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("1716")]).then(n.bind(n, "746882"));
      return n => (0, a.jsx)(e, {
        source: t,
        ...n
      })
    }, {
      modalKey: h.EXISTING_USER_AGE_GATE_MODAL_KEY,
      onCloseRequest: _.NOOP
    })
  }
  handleAgeGateSuccess() {
    (0, s.updateModal)(h.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, a.jsx)(E.default, {
      ...e
    }))
  }
  handleAgeGateFailure(e) {
    let {
      underageMessage: t
    } = e;
    (0, s.updateModal)(h.EXISTING_USER_AGE_GATE_MODAL_KEY, e => (0, a.jsx)(f.default, {
      underageMessage: t,
      ...e
    }))
  }
  handleAgeGateModalClose() {
    (0, s.closeModal)(h.EXISTING_USER_AGE_GATE_MODAL_KEY)
  }
}
t.default = new m