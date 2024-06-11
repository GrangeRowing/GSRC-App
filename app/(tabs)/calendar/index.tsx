import React, { useEffect, useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { useGoogleAuth, getGoogleCalendarEvents } from '../../../GoogleCalendarService';
import { CalendarList } from 'react-native-calendars';

interface CalendarEvent {
  start: {
    date?: string;
    dateTime?: string;
  };
  summary: string;
}

interface DateObject {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

const CalendarPage: React.FC = () => {
  const { request, response, promptAsync } = useGoogleAuth();
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    if (response?.type === 'success' && response.authentication) {
      const { authentication } = response;
      fetchEvents(authentication.accessToken);
    }
  }, [response]);

  const fetchEvents = async (accessToken: string) => {
    try {
      const events = await getGoogleCalendarEvents(accessToken);
      setEvents(events);
    } catch (error) {
      console.error(error);
    }
  };

  const formatEventsForCalendar = () => {
    const formattedEvents: { [key: string]: { marked: boolean; dots: { color: string }[] } } = {};
    events.forEach((event) => {
      const date = event.start.date || event.start.dateTime!.split('T')[0];
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
          onDayPress={(day: DateObject) => {
            const dayEvents = events.filter(event => event.start.date === day.dateString || event.start.dateTime!.startsWith(day.dateString));
            Alert.alert('Events', dayEvents.map(event => event.summary).join('\n'));
          }}
        />
      )}
    </View>
  );
};

export default CalendarPage;
