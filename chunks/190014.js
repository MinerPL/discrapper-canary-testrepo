t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(63063),
    r = t(88658),
    o = t(695346),
    l = t(639814),
    c = t(838436),
    d = t(51331),
    _ = t(726985),
    u = t(736530),
    E = t(981631),
    T = t(689938);
function S() {
    let e = (0, l.is)(),
        s = o.iH.useSetting().includes(e),
        t = a.useCallback(
            (s) => {
                let t = new Set((0, r.rr)());
                s ? t.delete(e) : t.add(e), o.iH.updateSetting([...t]);
            },
            [e]
        );
    return e === u.T
        ? null
        : (0, n.jsx)(c.U, {
              setting: _.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
              children: (0, n.jsx)(d.Z, {
                  title: T.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING,
                  value: !s,
                  onChange: t,
                  note: T.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({ helpdeskArticle: i.Z.getArticleURL(E.BhN.ACTIVITY_STATUS_SETTINGS) })
              })
          });
}
