//configure the client

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

//Load environmental variables
dotenv.config();

//environmental variables
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

//create client
const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;