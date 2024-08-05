n.r(t), n.d(t, {
  navigateToQuestHome: function() {
return E;
  },
  openDisclosureModal: function() {
return _;
  },
  openQuestInGameRewardModal: function() {
return d;
  },
  openQuestsRewardCodeModal: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(230711),
  s = n(703656),
  o = n(617136),
  l = n(282421),
  u = n(981631);

function c(e) {
  let {
questId: t,
location: a,
questContentPosition: s
  } = e;
  (0, i.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('26138'),
  n.e('54535'),
  n.e('87353')
]).then(n.bind(n, 985866));
return n => (0, r.jsx)(e, {
  ...n,
  questId: t,
  questContentPosition: s,
  location: a
});
  });
}

function d(e, t) {
  (0, i.openModalLazy)(async () => {
let {
  default: i
} = await n.e('88938').then(n.bind(n, 390238));
return n => (0, r.jsx)(i, {
  ...n,
  quest: e,
  location: t
});
  });
}

function _(e, t) {
  (0, o._3)({
questId: e.id,
questContent: t.content,
questContentPosition: t.position,
questContentCTA: t.ctaContent
  }), (0, i.openModalLazy)(async () => {
let {
  default: i
} = await n.e('4266').then(n.bind(n, 316210));
return n => (0, r.jsx)(i, {
  ...n,
  questContent: t.content,
  quest: e
});
  });
}

function E(e, t) {
  l.B.getCurrentConfig({
location: e
  }).enabled ? (0, s.uL)(u.Z5c.QUEST_HOME + (null != t ? '#'.concat(t) : '')) : a.Z.open(u.oAB.INVENTORY);
}