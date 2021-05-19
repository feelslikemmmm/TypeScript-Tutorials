{
  /**
   * Enum
   */
  // JavaScript 
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, })
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'TuesDay' | 'Wednesday';
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }

  let day: Days = Days.Tuesday;
  day = Days.Tuesday;
  day = 10;

  let dayOfWeek: DaysOfWeek = 'Monday';

}