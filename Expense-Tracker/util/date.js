export const getFormattedDate = (date) => {
  return `${date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate()}/${
    date.getUTCMonth() + 1 < 10 ? "0" + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1
  }/${date.getUTCFullYear()}`;
};

export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

// converte string de data dd/mm/yyyy no formato yyyy-mm-dd
export const convertDate = (date) => {
  const pattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (pattern.test(date)) {
    const [, day, month, year] = pattern.exec(date);
    
    const convertedDateString = `${year}-${month}-${day}`;
    
    return convertedDateString;
  }
};