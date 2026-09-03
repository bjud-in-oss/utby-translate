export const HEADER_INFO = {
  title: "Öppnar Zoom",
  subtitle: "",
  intro: "",
  footer: "kyrkahemma.netlify.app"
};

export const MAIN_MEETING = {
  url: "https://zoom.us/j/97153558402?pwd=SOYF7abJpu2EbhdPe4PJLxYaw5Tq5G.1",
  meetingId: "97153558402",
  passcode: "0", 
  location: "Zoom"
};

export const MEETING_CONFIG = {
  ...MAIN_MEETING,
  title: "Öppnar Zoom-mötet...", // Den korta texten
  organizer: "Utby Församling"
};

export const APP_CONFIG = {
  redirectDelaySeconds: 3 // Lite snabbare än förut (var 5)
};

// Behåller strukturerna för typer men tömmer innehållet då det inte används i redirect-vyn
export const UI_TEXTS = {
  joinButton: "Anslut",
  copy: "Kopiera",
  copied: "Kopierad!",
  idLabel: "Mötes-ID",
  passcodeLabel: "Kod",
  nextSunday: "",
  today: "",
  breakoutTitle: "",
  closed: ""
};

export const BREAKOUT_INFO = {
  title: "",
  description: "",
};

export interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
}

export interface RoomConfig {
  id: string;
  name: string;
  description: string;
  getSchedule: (weekIndex: number) => ScheduleItem[];
}

export const ROOMS: RoomConfig[] = [];

export const TEXTS = {
  helpTitle: "Har du problem att ansluta till kyrkans zoom?",
  helpInstruction: "Du kan ansluta antingen genom att klistra in länken i en webbläsare eller starta Zoom-appen och ange mötes-id och lösenordet.",
  toggleHelp: "Visa manuell anslutning",
  copy: "Kopiera",
  zoomLinkLabel: "Länk",
  meetingIdLabel: "Mötes-ID",
  passcodeLabel: "Lösenkod",
  paused: "Pausad",
  connecting: "Du slussas vidare...",
  seconds: "sekunder",
  resume: "Återuppta",
  cancel: "Pausa",
  manualLink: "Klicka här om inget händer"
};