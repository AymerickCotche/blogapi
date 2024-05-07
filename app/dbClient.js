
const { createClient } = require('@supabase/supabase-js')

// eslint-disable-next-line no-undef
const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_API_KEY)

module.exports = supabase
