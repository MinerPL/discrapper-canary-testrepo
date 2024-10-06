n.r(t),
    n.d(t, {
        enable: function () {
            return g;
        },
        isNotSupported: function () {
            return T;
        },
        trackToggleSelfMute: function () {
            return A;
        }
    });
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(570140),
    s = n(710845),
    o = n(592125),
    l = n(131951),
    u = n(944486),
    c = n(556296),
    d = n(451478),
    _ = n(626135),
    E = n(554174),
    f = n(981631),
    h = n(761274),
    p = n(689938);
let I = new s.Z('AudioActionCreators');
function m() {
    (0, i.openModalLazy)(async () => {
        let { default: e } = await n.e('82935').then(n.bind(n, 431583));
        return (t) =>
            (0, r.jsx)(e, {
                source: 'Unsupported Browser',
                ...t
            });
    });
}
function T() {
    return (
        !l.Z.isSupported() &&
        ((0, i.openModal)((e) =>
            (0, r.jsx)(i.ConfirmModal, {
                header: p.Z.Messages.UNSUPPORTED_BROWSER,
                confirmText: p.Z.Messages.DOWNLOAD_APP,
                cancelText: p.Z.Messages.CANCEL,
                onConfirm: m,
                confirmButtonColor: i.Button.Colors.BRAND,
                ...e,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: p.Z.Messages.UNSUPPORTED_BROWSER_DETAILS
                })
            })
        ),
        !0)
    );
}
function S(e) {
    _.default.track(f.rMx.PERMISSIONS_ACKED, {
        type: 'audio',
        action: e
    });
}
function g() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return T()
        ? Promise.resolve(!1)
        : (_.default.track(f.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
          l.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      a.Z.dispatch({
                          type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                          enabled: !0,
                          unmute: e
                      }),
                          S(h.PQ.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case f.ETv.NO_DEVICES_FOUND:
                              S(h.PQ.NO_DEVICES);
                              break;
                          case f.ETv.PERMISSION_DENIED:
                              S(h.PQ.DENIED);
                              break;
                          case f.ETv.PERMISSION_DISMISSED:
                              S(h.PQ.DISMISSED);
                              break;
                          default:
                              S(h.PQ.ERROR), I.warn('unknown getUserMedia error: '.concat(e));
                      }
                  }
              )
              .then(() => !0));
}
function A(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = c.Z.getKeybindForAction(f.kg4.TOGGLE_MUTE, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? o.Z.getChannel(i) : null;
    _.default.track(f.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !l.Z.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== c.E.id,
        used_keybind: t,
        app_in_focus: d.Z.isFocused(),
        overlay_activated: null != (0, E.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
