import main from './main'
import {settings} from 'server_settings.js'
main(settings.port, {
  http: true,
  websocket: true,

  webrtc: true,
  osc: true,
  
  ssr:true,
  database: true,
  sessions: true,
  unsafe: true,
})