// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://guvxrryswudpkkpwkryp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dnhycnlzd3VkcGtrcHdrcnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNTMwOTUsImV4cCI6MjAzMjgyOTA5NX0.4bYiLSgPYpFgwNnceSDsgSYyBN3jSvn7Tj1SGXYP-D0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
