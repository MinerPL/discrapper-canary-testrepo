var n = {
    lastWeek: "'letzten' eeee 'um' p",
    yesterday: "'gestern um' p",
    today: "'heute um' p",
    tomorrow: "'morgen um' p",
    nextWeek: "eeee 'um' p",
    other: 'P'
};
t.Z = function (e, t, a, i) {
    return n[e];
};
