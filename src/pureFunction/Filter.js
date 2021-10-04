export const filter = (value, format = 'datetime') => {
    const options = {}

    if(format.includes('datetime')) {
        options.day = '2-digit'
        options.month = 'long'
        options.year = 'numeric'
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.second = '2-digit'
    }

    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value));
}