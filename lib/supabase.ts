import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://guvxrryswudpkkpwkryp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dnhycnlzd3VkcGtrcHdrcnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNTMwOTUsImV4cCI6MjAzMjgyOTA5NX0.4bYiLSgPYpFgwNnceSDsgSYyBN3jSvn7Tj1SGXYP-D0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})