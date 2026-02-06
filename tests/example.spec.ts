// Basic usage
const url = process.env.URL
const apiUrl = process.env.API_URL

// With type safety and defaults
const baseUrl = process.env.URL || 'https://localhost:3000'
const username = process.env.USER_NAME || 'defaultUser'