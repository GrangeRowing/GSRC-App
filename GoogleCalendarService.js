import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { useAuthRequest } from 'expo-auth-session';
import { GOOGLE_CLIENT_ID } from '@env';

const REDIRECT_URI = AuthSession.makeRedirectUri({ useProxy: true });

const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  return { request, response, promptAsync };
};

const getGoogleCalendarEvents = async (accessToken) => {
  const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.items;
};

export { useGoogleAuth, getGoogleCalendarEvents };
