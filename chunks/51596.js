n.d(t, {
    $Z: function () {
        return x;
    },
    Cp: function () {
        return Z;
    },
    F_: function () {
        return N;
    },
    Se: function () {
        return y;
    },
    tF: function () {
        return H;
    },
    yC: function () {
        return U;
    }
}), n(757143), n(47120);
var c = n(570140), l = n(493683), i = n(475179), a = n(925549), o = n(287734), r = n(212819), s = n(336197), u = n(359110), _ = n(769654), d = n(131704), h = n(592125), f = n(283595), E = n(944486), C = n(914010), T = n(626135), p = n(777754), I = n(823385), R = n(981631), S = n(176505);
let A = () => Promise.resolve();
A = n(346329).playApplication;
let g = Object.freeze({
        [r.xQ.USER]: r.h8.USER,
        [r.xQ.TEXT_CHANNEL]: r.h8.TEXT_CHANNEL,
        [r.xQ.VOICE_CHANNEL]: r.h8.VOICE_CHANNEL,
        [r.xQ.GUILD]: r.h8.GUILD,
        [r.xQ.APPLICATION]: r.h8.APPLICATION
    }), L = new RegExp('^'.concat(r.xQ.USER, '|').concat(r.xQ.TEXT_CHANNEL, '|').concat(r.xQ.VOICE_CHANNEL, '|\\').concat(r.xQ.GUILD, '|\\').concat(r.xQ.APPLICATION));
function N(e) {
    var t, n;
    let c;
    let [l, i] = (c = null !== (n = g[(t = e).charAt(0)]) && void 0 !== n ? n : null, [
        t.replace(L, ''),
        c
    ]);
    return {
        query: l,
        queryMode: i
    };
}
function O(e, t) {
    let {
            results: n,
            queryMode: c,
            query: l,
            maxQueryLength: i
        } = I.Z.getProps(), a = C.Z.getGuildId(), o = E.Z.getChannelId(a), s = n[(0, r.gJ)(r.a8.DOWN, -1, n)], u = p.Z.isEmail(l), _ = p.Z.isPhoneNumber(l), f = p.Z.isUserTagLike(l), R = null != o && (0, S.AB)(o), A = {
            current_channel_id: R ? void 0 : o,
            current_channel_static_route: R ? o : void 0,
            current_guild_id: a,
            query_mode: null != c ? c : 'GENERAL',
            query_length: l.length,
            max_query_length: i,
            is_email_like: u,
            is_phone_like: _,
            is_username_like: f,
            query: u || _ || f ? null : l,
            top_result_type: null != s ? s.type : null,
            top_result_score: null != s ? s.score : null,
            num_results_total: I.Z.getResultTotals(),
            num_results_users: I.Z.getResultTotals(r.h8.USER),
            num_results_text_channels: I.Z.getResultTotals(r.h8.TEXT_CHANNEL),
            num_results_voice_channels: I.Z.getResultTotals(r.h8.VOICE_CHANNEL),
            num_results_guilds: I.Z.getResultTotals(r.h8.GUILD),
            num_results_group_dms: I.Z.getResultTotals(r.h8.GROUP_DM)
        };
    if (null != o) {
        let e = h.Z.getChannel(o);
        A.current_channel_type = null != e ? e.type : null;
    }
    if (null != t) {
        let {
            type: e,
            score: c,
            record: l
        } = t;
        switch (A.selected_type = e, A.selected_score = c, A.selected_index = n.indexOf(t), e) {
        case r.h8.GUILD:
            A.selected_guild_id = l.id;
            break;
        case r.h8.TEXT_CHANNEL:
        case r.h8.VOICE_CHANNEL:
            l instanceof d.Sf && (A.selected_guild_id = null != l.guild_id ? l.guild_id : null), A.selected_channel_id = l.id;
            break;
        case r.h8.GROUP_DM:
            A.selected_channel_id = l.id;
            break;
        case r.h8.USER:
            A.selected_user_id = l.id;
        }
    }
    T.default.track(e, A);
}
function m() {
    c.Z.dispatch({ type: 'QUICKSWITCHER_HIDE' });
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND', t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
    !function (e) {
        let t;
        if (I.Z.isOpen())
            return;
        let n = C.Z.getGuildId(), c = E.Z.getChannelId(n);
        if (null != c) {
            let e = h.Z.getChannel(c);
            t = null != e ? e.type : null;
        }
        T.default.track(R.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: n,
            current_channel_id: c,
            current_channel_type: t
        });
    }(e), c.Z.dispatch({
        type: 'QUICKSWITCHER_SHOW',
        ...N(t)
    });
}
function Z() {
    O(R.rMx.QUICKSWITCHER_CLOSED), m();
}
function U(e) {
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SEARCH',
        ...N(e)
    });
}
function H(e) {
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SELECT',
        selectedIndex: e
    });
}
function y(e) {
    let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    m(), O(R.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
    let {
            type: d,
            record: E
        } = e, C = { page: R.ZY5.QUICK_SWITCHER };
    switch (d) {
    case r.h8.GUILD:
        (0, _.X)(E.id, { navigationReplace: !0 });
        break;
    case r.h8.TEXT_CHANNEL:
        null != (t = h.Z.getChannel(E.id)) && (0, u.Kh)(t.id, {
            state: { analyticsSource: C },
            navigationReplace: !0
        });
        break;
    case r.h8.VOICE_CHANNEL:
        null != (t = h.Z.getChannel(E.id)) && (n ? i.Z.updateChatOpen(E.id, !0) : o.default.selectVoiceChannel(E.id), (0, u.Kh)(t.id, {
            state: { analyticsSource: C },
            navigationReplace: !0
        }));
        break;
    case r.h8.USER:
        l.Z.openPrivateChannel([E.id], !1, !1, 'Quickswitcher'), a.Z.channelListScrollTo(R.ME, h.Z.getDMFromUserId(E.id));
        break;
    case r.h8.GROUP_DM:
        (0, u.Kh)(E.id, { navigationReplace: !0 }), a.Z.channelListScrollTo(R.ME, E.id);
        break;
    case r.h8.APPLICATION:
        let T = f.Z.getActiveLibraryApplication(E.id);
        A(E.id, T, {
            analyticsParams: {
                source: R.Sbl.QUICK_SWITCHER,
                location: R.Sbl.QUICK_SWITCHER
            }
        });
        break;
    case r.h8.LINK:
        (0, s.Z)(E.path, { navigationReplace: !0 });
    }
    c.Z.dispatch({
        type: 'QUICKSWITCHER_SWITCH_TO',
        result: e
    });
}
