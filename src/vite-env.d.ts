/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ApiKey {
  readonly VITE_API_KEY: string;
}
