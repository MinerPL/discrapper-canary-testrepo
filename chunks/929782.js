n.r(t),
    n.d(t, {
        enable: function () {
            return T;
        },
        isNotSupported: function () {
            return I;
        },
        trackToggleSelfDeaf: function () {
            return y;
        },
        trackToggleSelfMute: function () {
            return b;
        }
    });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(570140),
    s = n(710845),
    o = n(592125),
    l = n(131951),
    u = n(944486),
    c = n(556296),
    d = n(451478),
    f = n(626135),
    _ = n(13140),
    h = n(554174),
    p = n(981631),
    m = n(761274),
    g = n(388032);
let E = new s.Z('AudioActionCreators');
function v() {
    (0, i.openModalLazy)(async () => {
        let { default: e } = await n.e('82935').then(n.bind(n, 431583));
        return (t) =>
            (0, r.jsx)(e, {
                source: 'Unsupported Browser',
                ...t
            });
    });
}
function I() {
    return (
        !l.Z.isSupported() &&
        ((0, i.openModal)((e) =>
            (0, r.jsx)(i.ConfirmModal, {
                header: g.intl.string(g.t.ilMTy8),
                confirmText: g.intl.string(g.t.BK8LKy),
                cancelText: g.intl.string(g.t['ETE/oK']),
                onConfirm: v,
                confirmButtonColor: i.Button.Colors.BRAND,
                ...e,
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: g.intl.string(g.t.h66vlJ)
                })
            })
        ),
        !0)
    );
}
function S(e) {
    f.default.track(p.rMx.PERMISSIONS_ACKED, {
        type: 'audio',
        action: e
    });
}
function T() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return I()
        ? Promise.resolve(!1)
        : (f.default.track(p.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
          l.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      a.Z.dispatch({
                          type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                          enabled: !0,
                          unmute: e
                      }),
                          S(m.PQ.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case p.ETv.NO_DEVICES_FOUND:
                              S(m.PQ.NO_DEVICES);
                              break;
                          case p.ETv.PERMISSION_DENIED:
                              S(m.PQ.DENIED);
                              break;
                          case p.ETv.PERMISSION_DISMISSED:
                              S(m.PQ.DISMISSED);
                              break;
                          default:
                              S(m.PQ.ERROR), E.warn('unknown getUserMedia error: '.concat(e));
                      }
                  }
              )
              .then(() => !0));
}
function b(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = c.Z.getKeybindForAction(p.kg4.TOGGLE_MUTE, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? o.Z.getChannel(i) : null;
    f.default.track(p.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !l.Z.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== c.E.id,
        used_keybind: t,
        app_in_focus: d.Z.isFocused(),
        overlay_activated: null != (0, h.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
function y(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = c.Z.getKeybindForAction(p.kg4.TOGGLE_DEAFEN, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? o.Z.getChannel(i) : null;
    f.default.track(p.rMx.SELF_DEAFEN_TOGGLED, {
        enabled: !l.Z.isSelfDeaf(),
        keybind_assigned: null != r ? (0, _.BB)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: d.Z.isFocused(),
        overlay_activated: null != (0, h.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
