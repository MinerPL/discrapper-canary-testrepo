t.d(n, {
    $Z: function () {
        return p;
    },
    B8: function () {
        return x;
    },
    F4: function () {
        return h;
    },
    HH: function () {
        return P;
    },
    Hd: function () {
        return N;
    },
    W1: function () {
        return U;
    },
    Xl: function () {
        return C;
    },
    dF: function () {
        return G;
    },
    eM: function () {
        return y;
    },
    fB: function () {
        return R;
    },
    gK: function () {
        return L;
    },
    l9: function () {
        return w;
    },
    mG: function () {
        return j;
    },
    qe: function () {
        return D;
    },
    rY: function () {
        return b;
    },
    ts: function () {
        return k;
    },
    zW: function () {
        return T;
    }
}), t(735250), t(470079), t(481060);
var i = t(332148), a = t(904245), r = t(257559), l = t(143740), o = t(912332), s = t(434404);
t(726521);
var u = t(623292), c = t(43690), d = t(962796), E = t(488131), f = t(314897), M = t(592125), I = t(626135), g = t(934415), m = t(572004), _ = t(585483), Z = t(709054), S = t(111618), v = t(50284), A = t(730954), O = t(981631);
function T(e) {
    let n = e.getGuildId();
    null != n && s.Z.open(n, O.pNK.OVERVIEW);
}
function h(e, n, t) {
    (0, m.JG)(t.shiftKey ? ''.concat(n.channel_id, '-').concat(n.id) : n.id);
}
function R(e, n) {
    I.default.track(O.rMx.MESSAGE_LINK_COPIED, {
        message_id: n.id,
        channel: n.channel_id
    }), (0, m.JG)((0, g.wR)(e.guild_id, e.id, n.id));
}
function p(e, n, t) {
    n.state === O.yb.SEND_FAILED || t.shiftKey ? a.Z.deleteMessage(e.id, n.id, n.state === O.yb.SEND_FAILED) : r.Z.confirmDelete(e, n);
}
function N(e, n) {
    a.Z.startEditMessage(e.id, n.id, n.content);
}
function x(e, n) {
    (0, v.Z)(e.id, n.id);
}
function b(e, n, t) {
    if (!1 === n.pinned) {
        t.shiftKey ? i.Z.pinMessage(e, n.id) : r.Z.confirmPin(e, n);
        return;
    }
    t.shiftKey ? i.Z.unpinMessage(e, n.id) : r.Z.confirmUnpin(e, n);
}
function C(e, n) {
    (0, l.Z)(e.id, n.id);
}
function j(e, n) {
    (0, A.Z)(e, n, void 0, S.Z.getOptions(n.id));
}
function P(e, n, t) {
    let i = e.isPrivate(), a = n.author.id === f.default.getId();
    (0, u.fE)({
        channel: e,
        message: n,
        shouldMention: !t.shiftKey && !a,
        showMentionToggle: !i && !a
    }), _.S.dispatchToLastSubscribed(O.CkL.TEXTAREA_FOCUS);
}
function L(e, n) {
    (0, E.R6)(e, n, 'Message');
}
function D(e, n) {
    let t = M.Z.getChannel(Z.default.castMessageIdAsChannelId(n.id));
    null != t && (0, E.ok)(t);
}
function G(e, n) {
    (0, c.D)(n);
}
function y(e, n) {
    (0, c.h)(n.id);
}
function U(e, n) {
    (0, d.BW)(n);
}
function w(e, n) {
    (0, d.Kp)(n.id);
}
function k(e, n) {
    (0, o.l8)({
        channelId: e.id,
        messageId: n.id,
        source: 'message-actions'
    });
}
