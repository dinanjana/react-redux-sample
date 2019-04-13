/**
 * Created by dinanjanag on 4/12/19.
 */

const WEEKLY = 'weekly';
const FORTNIGHTLY = 'fortnightly';
const MONTHLY = 'monthly';

const FREQUENCIES = {
  WEEKLY,
  FORTNIGHTLY,
  MONTHLY,
};

const MONDAY = 'monday';
const TUESDAY = 'tuesday';
const WEDNESDAY = 'wednesday';
const THURSDAY = 'thursday';
const FRIDAY = 'friday';
const SUNDAY = 'sunday';
const SATURDAY = 'saturday';

const WEEK_DAYS = {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
};

const BASE_URL = 'https://hiring-task-api.herokuapp.com/v1/leases';

const DATE_FORMAT = 'MMMM, Do, YYYY';
const UNIT_OF_TIME = {
  DAYS: 'days',
};

const WEEK = [SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY];
export { FREQUENCIES, WEEK_DAYS, WEEK, BASE_URL, DATE_FORMAT, UNIT_OF_TIME };