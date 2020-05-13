# Basic NextJS POC
This is a quick overview and POC for myself as i am a SPA person and my thoughts are:

## pros
- easy to obtain
- code splitting-ish- (it splits code just because serves them kinda static page)

## cons
- static generated pages are staticly generated on buildtime (hence the name) and served as is, can't get updates from dynamic endpoints
- SSR pages incredibly slow, it takes forever to load
- it's hard to say Nextjs app is a React app, you are developing React app but its not working as SPA. every request is handling on server

It is seems promising at first but my experince with NextJS is not ideal. I don't know what i am doing wrong but /post/:id page is loading forever.

## ................................................................

### install all depedencies
`npm i`

### start development
`npm run dev`