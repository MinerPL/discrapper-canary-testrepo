t.d(s, {
    Q: function () {
        return i;
    }
});
var n = t(381499),
    a = t(675478);
let i = (e) =>
    a.hW.updateAsync(
        'privacy',
        (s) => {
            s.inappropriateConversationWarnings = n.D5.create({ value: e });
        },
        a.fy.INFREQUENT_USER_ACTION
    );
