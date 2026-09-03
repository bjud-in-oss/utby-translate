export interface SundayInfo {
  date: Date;
  isToday: boolean;
  weekIndex: 1 | 2 | 3 | 4 | 5; // 1st, 2nd, 3rd, 4th, or 5th Sunday
  formattedDate: string;
}

export const getNextSundayInfo = (): SundayInfo => {
  const now = new Date();
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const currentDay = today.getDay(); // 0 = Sunday
  
  let targetDate = new Date(today);
  
  // If it's Sunday, we show today's info. If not, find next Sunday.
  if (currentDay !== 0) {
    const daysUntilSunday = 7 - currentDay;
    targetDate.setDate(today.getDate() + daysUntilSunday);
  }

  // Determine which occurrence of the day in the month it is (1st, 2nd, etc.)
  // Formula: ceil(dayOfMonth / 7)
  const dayOfMonth = targetDate.getDate();
  const weekIndex = Math.ceil(dayOfMonth / 7) as 1 | 2 | 3 | 4 | 5;

  const formattedDate = targetDate.toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  // Capitalize first letter of formatted date
  const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return {
    date: targetDate,
    isToday: currentDay === 0,
    weekIndex,
    formattedDate: capitalizedDate
  };
};