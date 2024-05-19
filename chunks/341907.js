"use strict";
n.r(t), n.d(t, {
  copyShareLink: function() {
    return E
  },
  openDisclosureModal: function() {
    return c
  },
  openGameLink: function() {
    return _
  },
  openQuestsRewardCodeModal: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("782568"),
  s = n("572004"),
  o = n("49012"),
  l = n("617136"),
  u = n("918701");

function d(e) {
  let {
    questId: t,
    location: a,
    questContentPosition: s
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
    return n => (0, i.jsx)(e, {
      ...n,
      questId: t,
      questContentPosition: s,
      location: a
    })
  })
}

function _(e, t) {
  (0, o.handleClick)({
    href: e.config.getGameLink,
    onConfirm: () => {
      (0, l.trackQuestContentClicked)({
        questId: e.id,
        questContent: t.content,
        questContentCTA: t.ctaContent,
        questContentPosition: t.position
      }), (0, a.default)(e.config.getGameLink)
    }
  })
}

function c(e, t) {
  (0, l.trackQuestContentClicked)({
    questId: e.id,
    questContent: t.content,
    questContentPosition: t.position,
    questContentCTA: t.ctaContent
  }), (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, "316210"));
    return n => (0, i.jsx)(r, {
      ...n,
      questContent: t.content,
      questConfig: e.config
    })
  })
}
let E = (e, t) => {
  (0, l.trackQuestContentClicked)({
    questId: e,
    questContent: t.content,
    questContentCTA: t.ctaContent,
    questContentPosition: t.position
  }), (0, s.copy)((0, u.getQuestUrl)(e))
}