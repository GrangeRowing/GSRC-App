import { router } from "expo-router";
import { Text } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from '../lib/supabase';

export default function IndexPage() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session && session.user) {
        router.replace("/(tabs)/home");
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session && session.user) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/(auth)/login");
      }
    });

    // Cleanup the listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return null;  // No UI needed since this is a redirect logic component
}
