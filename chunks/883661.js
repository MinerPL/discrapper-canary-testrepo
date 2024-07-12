var r = n(735250),
  i = n(470079),
  a = n(481060),
  o = n(149203);
let s = e => {
switch (e) {
  case o.UX.RECENT:
    return a.ClockIcon;
  case o.UX.FAVORITES:
    return a.StarIcon;
  case o.UX.TOP_GUILD_EMOJI:
    return a.TrophyIcon;
  case o.UX.PEOPLE:
    return a.ReactionIcon;
  case o.UX.NATURE:
    return a.NatureIcon;
  case o.UX.FOOD:
    return a.FoodIcon;
  case o.UX.ACTIVITY:
    return a.GameControllerIcon;
  case o.UX.TRAVEL:
    return a.BicycleIcon;
  case o.UX.OBJECTS:
    return a.ObjectIcon;
  case o.UX.SYMBOLS:
    return a.HeartIcon;
  case o.UX.FLAGS:
    return a.FlagIcon;
  case o.UX.PREMIUM_UPSELL:
    return a.NitroWheelIcon;
  default:
    return;
}
  },
  l = i.memo(function(e) {
let {
  categoryId: t,
  ...n
} = e, i = s(t);
return null == i ? null : (0, r.jsx)(i, {
  color: 'currentColor',
  ...n
});
  });
t.Z = l;