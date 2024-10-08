var a = n(799761),
    r = {
        ordinalNumber: function (e, t) {
            var n = Number(e),
                a = n % 100;
            if (a > 20 || a < 10)
                switch (a % 10) {
                    case 1:
                    case 2:
                        return n + ':a';
                }
            return n + ':e';
        },
        era: (0, a.Z)({
            values: {
                narrow: ['f.Kr.', 'e.Kr.'],
                abbreviated: ['f.Kr.', 'e.Kr.'],
                wide: ['före Kristus', 'efter Kristus']
            },
            defaultWidth: 'wide'
        }),
        quarter: (0, a.Z)({
            values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: ['1:a kvartalet', '2:a kvartalet', '3:e kvartalet', '4:e kvartalet']
            },
            defaultWidth: 'wide',
            argumentCallback: function (e) {
                return e - 1;
            }
        }),
        month: (0, a.Z)({
            values: {
                narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                abbreviated: ['jan.', 'feb.', 'mars', 'apr.', 'maj', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
                wide: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december']
            },
            defaultWidth: 'wide'
        }),
        day: (0, a.Z)({
            values: {
                narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
                short: ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'],
                abbreviated: ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'],
                wide: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag']
            },
            defaultWidth: 'wide'
        }),
        dayPeriod: (0, a.Z)({
            values: {
                narrow: {
                    am: 'fm',
                    pm: 'em',
                    midnight: 'midnatt',
                    noon: 'middag',
                    morning: 'morg.',
                    afternoon: 'efterm.',
                    evening: 'kväll',
                    night: 'natt'
                },
                abbreviated: {
                    am: 'f.m.',
                    pm: 'e.m.',
                    midnight: 'midnatt',
                    noon: 'middag',
                    morning: 'morgon',
                    afternoon: 'efterm.',
                    evening: 'kväll',
                    night: 'natt'
                },
                wide: {
                    am: 'förmiddag',
                    pm: 'eftermiddag',
                    midnight: 'midnatt',
                    noon: 'middag',
                    morning: 'morgon',
                    afternoon: 'eftermiddag',
                    evening: 'kväll',
                    night: 'natt'
                }
            },
            defaultWidth: 'wide',
            formattingValues: {
                narrow: {
                    am: 'fm',
                    pm: 'em',
                    midnight: 'midnatt',
                    noon: 'middag',
                    morning: 'på morg.',
                    afternoon: 'på efterm.',
                    evening: 'på kvällen',
                    night: 'på natten'
                },
                abbreviated: {
                    am: 'fm',
                    pm: 'em',
                    midnight: 'midnatt',
                    noon: 'middag',
                    morning: 'på morg.',
                    afternoon: 'på efterm.',
                    evening: 'på kvällen',
                    night: 'på natten'
                },
                wide: {
                    am: 'fm',
                    pm: 'em',
                    midnight: 'midnatt',
                    noon: 'middag',
                    morning: 'på morgonen',
                    afternoon: 'på eftermiddagen',
                    evening: 'på kvällen',
                    night: 'på natten'
                }
            },
            defaultFormattingWidth: 'wide'
        })
    };
t.Z = r;
