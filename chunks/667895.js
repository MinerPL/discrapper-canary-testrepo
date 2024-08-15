var r = n(261168),
  i = {
date: (0, r.Z)({
  formats: {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
  },
  defaultWidth: 'full'
}),
time: (0, r.Z)({
  formats: {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
  },
  defaultWidth: 'full'
}),
dateTime: (0, r.Z)({
  formats: {
    full: '{{date}} \'at\' {{time}}',
    long: '{{date}} \'at\' {{time}}',
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  },
  defaultWidth: 'full'
})
  };
t.Z = i;