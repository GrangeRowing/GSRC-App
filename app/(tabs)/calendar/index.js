import React, { useEffect, useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { useGoogleAuth, getGoogleCalendarEvents } from '../../../GoogleCalendarService';
import { CalendarList } from 'react-native-calendars';



const CalendarPage = () => {
  const { request, response, promptAsync } = useGoogleAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (response?.type === 'success' && response.authentication) {
      const { authentication } = response;
      fetchEvents(authentication.accessToken);
    }
  }, [response]);

  const fetchEvents = async () => {
    try {
      const events = await getGoogleCalendarEvents(accessToken);
      setEvents(events);
    } catch (error) {
      console.error(error);
    }
  };

  const formatEventsForCalendar = () => {
    const formattedEvents = {};
    events.forEach((event) => {
      const date = event.start.date || event.start.dateTime.split('T')[0];
      if (!formattedEvents[date]) {
        formattedEvents[date] = { marked: true, dots: [{ color: 'blue' }] };
      }
    });
    return formattedEvents;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Connect to Google Calendar" disabled={!request} onPress={() => promptAsync()} />
      {events.length > 0 && (
        <CalendarList
          markingType={'multi-dot'}
          markedDates={formatEventsForCalendar()}
          onDayPress={(day) => {
            const dayEvents = events.filter(event => event.start.date === day.dateString || event.start.dateTime.startsWith(day.dateString));
            Alert.alert('Events', dayEvents.map(event => event.summary).join('\n'));
          }}
        />
      )}
    </View>
  );
};

export default CalendarPage;
