var t = ['neděli', 'pondělí', 'úterý', 'středu', 'čtvrtek', 'pátek', 'sobotu'],
    o = {
        lastWeek: "'poslední' eeee 've' p",
        yesterday: "'včera v' p",
        today: "'dnes v' p",
        tomorrow: "'zítra v' p",
        nextWeek: function (e) {
            return "'v " + t[e.getUTCDay()] + " o' p";
        },
        other: 'P'
    };
n.Z = function (e, n) {
    var t = o[e];
    return 'function' == typeof t ? t(n) : t;
};
