i.d(n, {
    Z: function () {
        return I;
    }
}), i(653041), i(627341);
var t = i(278074), o = i(442837), s = i(199902), l = i(158776), a = i(726059), r = i(162267), c = i(228168), d = i(981631), u = i(689938);
function I(e) {
    var n, i;
    let {
            user: I,
            currentUser: E
        } = e, _ = (0, o.e7)([s.Z], () => s.Z.getAnyStreamForUser(I.id)), f = (0, o.e7)([l.Z], () => l.Z.findActivity(I.id, e => {
            let {type: n} = e;
            return n !== d.IIU.CUSTOM_STATUS;
        })), Z = null === (n = (0, a.Z)(I.id, I.id !== (null == E ? void 0 : E.id)).mutualFriends) || void 0 === n ? void 0 : n.length, m = null === (i = (0, r.Z)(I.id, I.id !== (null == E ? void 0 : E.id)).mutualGuilds) || void 0 === i ? void 0 : i.length, S = [{
                section: c.oh.USER_INFO,
                text: u.Z.Messages.USER_PROFILE_ABOUT_ME
            }];
    return (null != _ || null != f) && S.push({
        section: c.oh.ACTIVITY,
        text: u.Z.Messages.USER_PROFILE_ACTIVITY
    }), I.id !== (null == E ? void 0 : E.id) && (S.push({
        section: c.oh.MUTUAL_FRIENDS,
        text: (0, t.EQ)(Z).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_FRIENDS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS.format({ count: e }))
    }), S.push({
        section: c.oh.MUTUAL_GUILDS,
        text: (0, t.EQ)(m).with(void 0, () => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => u.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => u.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
    })), S;
}
