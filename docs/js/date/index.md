---
type: "gpt-prompt"

---
The main difference between getUTCDate() and getDate() (as well as their related methods for month and year) is the
timezone context in which they return the date information:

## `getUTCDate()` Method:

- Timezone: Returns the day of the month based on the UTC (Coordinated Universal Time) timezone.
- Usage: date.getUTCDate()
- Example:
    ```js
    const date = new Date('2030-12-25T00:00:00Z');
    console.log(date.getUTCDate()); // 25
    console.log(date.getUTCHours()); // 0
    ```

## `getDate()` Method:

- Timezone: Returns the day of the month based on the local timezone of the system where the code is running.
- Usage: date.getDate()
- Example:
    ```js
    const date = new Date('2030-12-25T00:00:00Z');
    console.log(date.getDate()); // Output will depend on the local timezone
    console.log(date.getHours()); // Output will depend on the local timezone
    ```

## Similar Differences for Other Methods:

### Year:

- `getUTCFullYear()`: Returns the year in UTC.
- `getFullYear()`: Returns the year in local time.

### Month:

- `getUTCMonth()`: Returns the month (0-11) in UTC.
- `getMonth()`: Returns the month (0-11) in local time.

### Hours:

- `getUTCHours()`: Returns the hours (0-23) in UTC.
- `getHours()`: Returns the hours (0-23) in local time.