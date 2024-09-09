t.d(s, {
    Z: function () {
        return C;
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
    u = t(838436),
    E = t(51331),
    T = t(922628),
    S = t(726985),
    I = t(736530),
    N = t(981631),
    m = t(689938);
function C(e) {
    let { guildId: s, isHubGuild: t } = e,
        C = _.iG.useSetting(),
        A = _.h2.useSetting().includes(s),
        g = _.mX.useSetting(),
        h = _.zA.useSetting().includes(s),
        O = a.useCallback(
            (e) => {
                let t = new Set((0, d.gl)());
                e ? t.delete(s) : t.add(s), _.zA.updateSetting(Array.from(t));
            },
            [s]
        );
    function p(e, s) {
        o.default.track(N.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: s
        });
    }
    return (0, n.jsx)(u.U, {
        setting: S.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2,
        children:
            s === I.T
                ? (0, n.jsx)(E.Z, {
                      title: m.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE,
                      value: !C && !g,
                      onChange: () => {
                          var e;
                          return (
                              (e = !g),
                              void (0, T.V)({
                                  header: m.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
                                  body: m.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
                                  confirmText: m.Z.Messages.NO_TEXT,
                                  cancelText: m.Z.Messages.YES_TEXT,
                                  confirmButtonColor: i.Button.Colors.BRAND,
                                  onConfirm: () => {
                                      _.mX.updateSetting(e), p(e, !1);
                                  },
                                  onCancel: () => {
                                      _.mX.updateSetting(e), _.zA.updateSetting(e ? c.default.keys(r.Z.getGuilds()) : []), p(e, !0);
                                  }
                              })
                          );
                      },
                      disabled: C,
                      note: m.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({ helpdeskArticle: l.Z.getArticleURL(N.BhN.MESSAGE_REQUESTS) })
                  })
                : (0, n.jsx)(E.Z, {
                      title: m.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE,
                      value: !h,
                      onChange: O,
                      disabled: A,
                      note: t ? m.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({ helpdeskArticle: l.Z.getArticleURL(N.BhN.MESSAGE_REQUESTS) }) : m.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({ helpdeskArticle: l.Z.getArticleURL(N.BhN.MESSAGE_REQUESTS) })
                  })
    });
}
