t.d(n, {
    Q2: function () {
        return i;
    },
    Rv: function () {
        return X;
    },
    U6: function () {
        return Y;
    },
    UD: function () {
        return w;
    },
    oT: function () {
        return x;
    }
}),
    t(411104),
    t(653041);
var i,
    l,
    o = t(346610),
    r = t(121254),
    E = t(186070),
    a = t(185514),
    u = t(395878),
    s = t(321697),
    d = t(775774),
    _ = t(570408),
    c = t(438846),
    C = t(360038),
    I = t(175724),
    A = t(705371),
    S = t(138976),
    T = t(296805),
    L = t(561716),
    N = t(239748),
    O = t(337482),
    g = t(679080),
    h = t(777019),
    D = t(523147),
    R = t(400332),
    f = t(510761),
    p = t(189509),
    P = t(673553),
    Z = t(280492),
    G = t(746887),
    M = t(861007),
    b = t(89028),
    U = t(300644),
    H = t(721383),
    m = t(207234),
    k = t(997292),
    v = t(743810),
    K = t(620212),
    B = t(188051),
    y = t(547420),
    V = t(981631),
    F = t(689938);
function w(e) {
    switch (e) {
        case 'NAVIGATION':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
        case 'VOICE_AND_VIDEO':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
        case 'CHAT':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
        case 'MISCELLANEOUS':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
        case 'MESSAGE':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
        case 'DND':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE;
    }
}
function Y(e) {
    switch (e) {
        case 'MESSAGE':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
        case 'DND':
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
        default:
            return null;
    }
}
function W() {
    for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
    return n.map((e) => {
        let n = x[e];
        if (null == n) throw Error('getBindsFor(...): No bind for '.concat(n));
        return n.binds[0];
    });
}
((l = i || (i = {})).NAVIGATION = 'NAVIGATION'), (l.CHAT = 'CHAT'), (l.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'), (l.MISCELLANEOUS = 'MISCELLANEOUS'), (l.MESSAGE = 'MESSAGE'), (l.DND = 'DND');
let x = {
    [V.EkH.SERVER_NEXT]: f.nq,
    [V.EkH.SERVER_PREV]: f.X3,
    [V.EkH.CHANNEL_NEXT]: a.tQ,
    [V.EkH.CHANNEL_PREV]: a.x5,
    [V.EkH.NAVIGATE_BACK]: a.Nx,
    [V.EkH.NAVIGATE_FORWARD]: a.On,
    [V.EkH.UNREAD_NEXT]: v.pd,
    [V.EkH.UNREAD_PREV]: v.wk,
    [V.EkH.MENTION_CHANNEL_NEXT]: v.Nv,
    [V.EkH.MENTION_CHANNEL_PREV]: v.uX,
    [V.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
    [V.EkH.JUMP_TO_GUILD]: C.u,
    [V.EkH.SUBMIT]: p.z,
    [V.EkH.TEXTAREA_FOCUS]: P.U,
    [V.EkH.MARK_CHANNEL_READ]: I.f,
    [V.EkH.MARK_SERVER_READ]: A.l,
    [V.EkH.TOGGLE_CHANNEL_PINS]: M.u,
    [V.EkH.TOGGLE_FOR_LATER]: b.f,
    [V.EkH.TOGGLE_INBOX_UNREADS_TAB]: m.P,
    [V.EkH.MARK_TOP_INBOX_CHANNEL_READ]: m.M,
    [V.EkH.TOGGLE_USERS]: k.r,
    [V.EkH.TOGGLE_HELP]: U.O,
    [V.EkH.VIBE_WITH_WUMPUS]: B.w,
    [V.EkH.TOGGLE_MUTE]: Z.iN,
    [V.EkH.TOGGLE_DEAFEN]: Z.oV,
    [V.EkH.TOGGLE_CATEGORY_COLLAPSED]: G.u,
    [V.EkH.SEARCH_SOUNDBOARD]: D.Z,
    [V.EkH.SCROLL_UP]: O.B2,
    [V.EkH.SCROLL_DOWN]: O.gN,
    [V.EkH.QUICKSWITCHER_SHOW]: L.$,
    [V.EkH.CREATE_DM_GROUP]: u.K,
    [V.EkH.SEARCH_EMOJIS]: g.S,
    [V.EkH.SEARCH_GIFS]: h.O,
    [V.EkH.SEARCH_STICKERS]: R.U,
    [V.EkH.TOGGLE_HOTKEYS]: H._,
    [V.EkH.JUMP_TO_FIRST_UNREAD]: S.O,
    [V.EkH.CREATE_GUILD]: s.r,
    [V.EkH.UPLOAD_FILE]: K.U,
    [V.EkH.RETURN_TO_AUDIO_CHANNEL]: N.F,
    [V.EkH.CALL_ACCEPT]: E.IL,
    [V.EkH.CALL_START]: E.FI,
    [V.EkH.FOCUS_SEARCH]: _.I,
    [V.EkH.JUMP_TO_CURRENT_CALL]: c.K,
    [V.EkH.ZOOM_IN]: y.UF,
    [V.EkH.ZOOM_OUT]: y.RC,
    [V.EkH.ZOOM_RESET]: y.MY,
    [V.EkH.OPEN_APP_DIRECTORY]: T.T,
    [V.EkH.BROWSER_DEVTOOLS]: d.p
};
function X() {
    let e = [
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: W(V.EkH.SERVER_PREV, V.EkH.SERVER_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: W(V.EkH.CHANNEL_PREV, V.EkH.CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: W(V.EkH.NAVIGATE_BACK, V.EkH.NAVIGATE_FORWARD),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: W(V.EkH.UNREAD_PREV, V.EkH.UNREAD_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: W(V.EkH.MENTION_CHANNEL_PREV, V.EkH.MENTION_CHANNEL_NEXT),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
            binds: W(V.EkH.JUMP_TO_CURRENT_CALL),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: W(V.EkH.TOGGLE_PREVIOUS_GUILD),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: W(V.EkH.QUICKSWITCHER_SHOW),
            group: 'NAVIGATION'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
            binds: W(V.EkH.CREATE_GUILD),
            group: 'NAVIGATION',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_START,
            binds: ['mod+d'],
            group: 'DND'
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_MOVE,
            binds: ['up', 'down'],
            group: 'DND'
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_DROP,
            binds: ['spacebar', 'enter'],
            group: 'DND'
        },
        {
            description: F.Z.Messages.DND_OPERATION_LABEL_CANCEL,
            binds: ['esc'],
            group: 'DND',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: W(V.EkH.MARK_SERVER_READ),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: W(V.EkH.MARK_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
            binds: W(V.EkH.CREATE_DM_GROUP),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
            binds: W(V.EkH.TOGGLE_CHANNEL_PINS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
            binds: W(V.EkH.TOGGLE_INBOX_UNREADS_TAB),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
            binds: W(V.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
            binds: W(V.EkH.TOGGLE_USERS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: W(V.EkH.SEARCH_EMOJIS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
            binds: W(V.EkH.SEARCH_GIFS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
            binds: W(V.EkH.SEARCH_STICKERS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: W(V.EkH.SCROLL_UP, V.EkH.SCROLL_DOWN),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: W(V.EkH.JUMP_TO_FIRST_UNREAD),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: W(V.EkH.TEXTAREA_FOCUS),
            group: 'CHAT'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
            binds: W(V.EkH.UPLOAD_FILE),
            group: 'CHAT',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: W(V.EkH.TOGGLE_MUTE),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: W(V.EkH.TOGGLE_DEAFEN),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: W(V.EkH.CALL_ACCEPT),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: W(V.EkH.MARK_CHANNEL_READ),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: W(V.EkH.CALL_START),
            group: 'VOICE_AND_VIDEO',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
            binds: W(V.EkH.SEARCH_SOUNDBOARD),
            group: 'VOICE_AND_VIDEO'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
            binds: W(V.EkH.TOGGLE_HELP),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
            binds: W(V.EkH.FOCUS_SEARCH),
            group: 'MISCELLANEOUS'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
            binds: ['h+h+right+n+k'],
            group: 'MISCELLANEOUS',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.EDIT_MESSAGE,
            binds: ['e'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.DELETE_MESSAGE,
            binds: ['backspace'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.PIN_MESSAGE,
            binds: ['p'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.ADD_REACTION,
            binds: ['plus'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.MESSAGE_ACTION_REPLY,
            binds: ['r'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.COPY_TEXT,
            binds: ['mod+c'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.MARK_UNREAD,
            binds: ['alt+enter'],
            group: 'MESSAGE'
        },
        {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: ['escape'],
            group: 'MESSAGE',
            groupEnd: !0
        },
        {
            description: F.Z.Messages.USER_SETTINGS_KEYBIND_VIBE_WITH_WUMPUS_DESCRIPTION,
            binds: W(V.EkH.VIBE_WITH_WUMPUS),
            group: 'MISCELLANEOUS'
        }
    ];
    return (
        (0, o.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
            e.push({
                description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FORWARD_MESSAGE,
                binds: ['f'],
                group: 'MESSAGE'
            }),
        r.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 }).enabled &&
            e.push({
                description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_FOR_LATER,
                binds: W(V.EkH.TOGGLE_FOR_LATER),
                group: 'CHAT'
            }),
        e
    );
}
n.ZP = 12633 == t.j ? x : null;
