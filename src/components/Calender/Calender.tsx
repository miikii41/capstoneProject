import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Calender = () => {
  const [selectedMonth, setSelectedMonth] = useState('2023-12');

  // Render only the day number without any images
  const renderDay = (day) => {
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>{day.day}</Text>
      </View>
    );
  };

  // Handle month change
  const onMonthChange = (month) => {
    const newMonth = `${month.year}-${String(month.month).padStart(2, '0')}`;
    setSelectedMonth(newMonth);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{selectedMonth} Calendar</Text>

      <Calendar
        current={selectedMonth}
        onDayPress={(day) => console.log('Selected day', day)}
        onMonthChange={onMonthChange}
        dayComponent={({ date }) => renderDay(date)}
        style={styles.calendar}
        theme={{
          arrowColor: 'black',
          monthTextColor: 'black',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          todayTextColor: 'red',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 20,
  },
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  dayText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Calender;
