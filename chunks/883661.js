var r = n(735250),
    i = n(470079),
    a = n(481060),
    s = n(149203);
let o = (e) => {
        switch (e) {
            case s.UX.RECENT:
                return a.ClockIcon;
            case s.UX.FAVORITES:
                return a.StarIcon;
            case s.UX.TOP_GUILD_EMOJI:
                return a.TrophyIcon;
            case s.UX.PEOPLE:
                return a.ReactionIcon;
            case s.UX.NATURE:
                return a.NatureIcon;
            case s.UX.FOOD:
                return a.FoodIcon;
            case s.UX.ACTIVITY:
                return a.GameControllerIcon;
            case s.UX.TRAVEL:
                return a.BicycleIcon;
            case s.UX.OBJECTS:
                return a.ObjectIcon;
            case s.UX.SYMBOLS:
                return a.HeartIcon;
            case s.UX.FLAGS:
                return a.FlagIcon;
            case s.UX.PREMIUM_UPSELL:
                return a.NitroWheelIcon;
            default:
                return;
        }
    },
    l = i.memo(function (e) {
        let { categoryId: t, ...n } = e,
            i = o(t);
        return null == i
            ? null
            : (0, r.jsx)(i, {
                  color: 'currentColor',
                  ...n
              });
    });
t.Z = l;
