t.d(s, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(430824),
    o = t(626135),
    l = t(63063),
    c = t(709054),
    d = t(88658),
    _ = t(695346),
    u = t(639814),
    E = t(838436),
    T = t(51331),
    S = t(922628),
    I = t(526761),
    N = t(726985),
    A = t(736530),
    C = t(981631),
    m = t(689938);
function g() {
    let e = (0, u.is)(),
        s = (0, u.c_)(),
        t = _.iG.useSetting(),
        g = _.h2.useSetting().includes(e),
        h = _.mX.useSetting(),
        O = _.zA.useSetting().includes(e),
        p = a.useCallback(
            (s) => {
                let t = new Set((0, d.gl)());
                s ? t.delete(e) : t.add(e), _.zA.updateSetting(Array.from(t));
            },
            [e]
        );
    function R(e, s) {
        o.default.track(C.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: s
        });
    }
    return (0, n.jsx)(E.U, {
        setting: N.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        scrollPosition: I.to.MESSAGE_REQUESTS_V2,
        children:
            e === A.T
                ? (0, n.jsx)(T.Z, {
                      title: m.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE,
                      value: !t && !h,
                      onChange: () => {
                          var e;
                          return (
                              (e = !h),
                              void (0, S.V)({
                                  header: m.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
                                  body: m.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
                                  confirmText: m.Z.Messages.NO_TEXT,
                                  cancelText: m.Z.Messages.YES_TEXT,
                                  confirmButtonColor: i.Button.Colors.BRAND,
                                  onConfirm: () => {
                                      _.mX.updateSetting(e), R(e, !1);
                                  },
                                  onCancel: () => {
                                      _.mX.updateSetting(e), _.zA.updateSetting(e ? c.default.keys(r.Z.getGuilds()) : []), R(e, !0);
                                  }
                              })
                          );
                      },
                      disabled: t,
                      note: m.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({ helpdeskArticle: l.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, n.jsx)(T.Z, {
                      title: m.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE,
                      value: !O,
                      onChange: p,
                      disabled: g,
                      note: s ? m.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({ helpdeskArticle: l.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) }) : m.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({ helpdeskArticle: l.Z.getArticleURL(C.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
