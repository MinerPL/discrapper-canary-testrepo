var i = n(570140), s = n(846027), a = n(13245), r = n(287734), l = n(872810), o = n(223245), c = n(317770), d = n(924557), u = n(39604), _ = n(569545), E = n(722835), h = n(703656), I = n(641015), m = n(183584), p = n(199902), g = n(131951), T = n(246946), S = n(808506), C = n(237997), N = n(626135), f = n(554174), A = n(981631), Z = n(65154);
let L = {
    [A.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {
        },
        keyEvents: {}
    },
    [A.kg4.UNASSIGNED]: {
        onTrigger() {
        },
        keyEvents: {}
    },
    [A.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            g.Z.getMode(t.context) === A.pM4.PUSH_TO_TALK && (L[A.kg4.PUSH_TO_TALK].isPressed = e, g.Z.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !1), t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [A.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            g.Z.getMode() === A.pM4.PUSH_TO_TALK && (L[A.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e, g.Z.getMediaEngine().eachConnection(t => t.setForceAudioInput(e, !0), Z.Yn.DEFAULT));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [A.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            if (!(g.Z.getMode() !== A.pM4.VOICE_ACTIVITY || g.Z.isSelfDeaf()))
                L[A.kg4.PUSH_TO_MUTE].isPressed = e, s.Z.setTemporarySelfMute(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [A.kg4.TOGGLE_MUTE]: {
        onTrigger: () => s.Z.toggleSelfMute({ usedKeybind: !0 }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.TOGGLE_DEAFEN]: {
        onTrigger() {
            s.Z.toggleSelfDeaf();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = g.Z.getMode() === A.pM4.PUSH_TO_TALK ? A.pM4.VOICE_ACTIVITY : A.pM4.PUSH_TO_TALK;
            s.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {
            let e = S.Z.enabled;
            a.Z.setEnabled(!e, S.Z.legacyEnabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e) {
            let t = (0, f.Z)();
            if (null != t)
                e ? a.Z.setUILocked(!C.Z.isUILocked(t), t) : a.Z.setInputLocked(!S.Z.isInputLocked(t), t);
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [A.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = S.Z.getFocusedPID(), t = null != e;
            null != e && t && C.Z.isPinned(A.Odu.TEXT) && S.Z.isReady(e) && S.Z.isInputLocked(e) && a.Z.activateRegion(A.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = p.Z.getCurrentUserActiveStream();
            if (null != e)
                return (0, l.g)((0, _.V9)(e));
            (0, E.Z)();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.Z.setEnabled(!T.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, h.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [A.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, h.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [A.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            if (!(0, I.D)())
                return;
            let e = (0, f.Z)();
            null != e && (C.Z.isUILocked(e) ? (0, m.IN)(!0, e) : (0, m.oZ)(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [A.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: e => {
            if (!(0, I.D)())
                return;
            let t = (0, f.Z)();
            if (null != t) {
                e ? (0, m.IN)(!1, t) : (0, m.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [A.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, d.ln)() && (N.default.track(A.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, u.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [A.kg4.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: {channelId: n}
            } = t;
            null != n && r.default.selectVoiceChannel(n);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    },
    [A.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            r.default.selectVoiceChannel(null);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    }
};
class v extends c.Z {
    _initialize() {
        i.Z.wait(() => i.Z.dispatch({
            type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
            keybinds: L
        }));
    }
    _terminate() {
    }
}
t.Z = new v();
