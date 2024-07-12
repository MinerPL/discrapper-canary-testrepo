n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(100527),
  r = n(44315),
  l = n(360048),
  o = n(709158),
  c = n(981631),
  d = n(689938),
  u = n(139510);

function _(e) {
  let {
isSelected: t,
onClick: n
  } = e, _ = (0, o.Z)(a.Z.QUEST_HOME_PAGE), h = (0, r.Sl)(c.Ilk.WHITE);
  return _ ? (0, i.jsx)(l.Z, {
avatar: (0, i.jsx)(s.QuestsIcon, {
  color: t ? h.hex : void 0
}),
name: d.Z.Messages.QUESTS,
focusProps: {
  offset: {
    right: 4,
    top: 1,
    bottom: 1
  }
},
onClick: n,
wrapContent: !0,
selected: t,
className: u.categoryItem,
selectedClassName: u.selectedCategoryItem,
innerClassName: u.itemInner
  }, 'quest-home') : null;
}