t.d(s, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(63063),
    r = t(88658),
    o = t(695346),
    l = t(838436),
    c = t(51331),
    d = t(726985),
    _ = t(736530),
    u = t(981631),
    E = t(689938);
function T(e) {
    let { guildId: s } = e,
        t = o.SE.useSetting().includes(s),
        T = a.useCallback(
            (e) => {
                let t = new Set((0, r._o)());
                e ? t.delete(s) : t.add(s), o.SE.updateSetting([...t]);
            },
            [s]
        );
    return s === _.T
        ? null
        : (0, n.jsx)(l.U, {
              setting: d.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
              children: (0, n.jsx)(c.Z, {
                  title: E.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS,
                  value: !t,
                  onChange: T,
                  note: E.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({ helpdeskArticle: i.Z.getArticleURL(u.BhN.ACTIVITY_STATUS_SETTINGS) })
              })
          });
}
