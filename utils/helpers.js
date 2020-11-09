module.exports = {
  format_date: date => {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  format_plural: (word, amount) => amount !== 1 ? `${word}s` : word
};
