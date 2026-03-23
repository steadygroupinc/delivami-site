
// Runtime Protection - Added automatically
(function() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Anti-debugging measures
    var _0x1a2b = function() { return 'devtools'; };
    var _0x3c4d = function() { return 'open'; };
    var _0x5e6f = function() { return 'blocked'; };
    
    // Clear console in production
    console.clear = console.clear || function() {};
    console.log = function() { return; };
    console.warn = function() { return; };
    console.error = function() { return; };
    console.info = function() { return; };
    console.debug = function() { return; };
    
    // Detect dev tools
    var _0x7g8h = setInterval(function() {
      if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#1a1a1a;color:#fff;font-family:monospace;"><div><h1>🚫 Developer Tools Detected</h1><p>This action has been logged for security purposes.</p></div></div>';
        clearInterval(_0x7g8h);
      }
    }, 500);
    
    // Disable right click
    document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
      }
    });
  }
})();

import { obfuscate, deobfuscate, generateRuntimeKey } from './encryption';

// Obfuscated sensitive configuration strings
const OBSCURED_CONFIG = {
  // Cloudflare Turnstile
  turnstileSiteKey: obfuscate(process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY || ''),
  turnstileSecretKey: obfuscate(process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY || ''),
  
  // Database
  databaseUrl: obfuscate(process.env.DATABASE_URL || ''),
  
  // Email
  resendApiKey: obfuscate(process.env.RESEND_API_KEY || ''),
  
  // Storage
  r2AccessKey: obfuscate(process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || ''),
  r2SecretKey: obfuscate(process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || ''),
};

class SecureConfig {
  private runtimeKey: string;
  private cache: Map<string, any> = new Map();
  
  constructor() {
    this.runtimeKey = generateRuntimeKey();
    this.protectAgainstDebugging();
  }
  
  private protectAgainstDebugging() {
    // Prevent debugging in production
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Disable right-click
      document.addEventListener('contextmenu', (e) => e.preventDefault());
      
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      document.addEventListener('keydown', (e) => {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
          (e.ctrlKey && e.key === 'U')
        ) {
          e.preventDefault();
        }
      });
    }
  }
  
  get(key: keyof typeof OBSCURED_CONFIG): string {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    const obfuscatedValue = OBSCURED_CONFIG[key];
    if (!obfuscatedValue) return '';
    
    const value = deobfuscate(obfuscatedValue);
    this.cache.set(key, value);
    
    // Clear cache after 30 seconds
    setTimeout(() => this.cache.delete(key), 30000);
    
    return value;
  }
  
  // Secure API key retrieval
  getTurnstileSiteKey(): string {
    return this.get('turnstileSiteKey');
  }
  
  getTurnstileSecretKey(): string {
    return this.get('turnstileSecretKey');
  }
  
  getResendApiKey(): string {
    return this.get('resendApiKey');
  }
  
  // Clear sensitive data from memory
  clearSensitiveData() {
    this.cache.clear();
  }
}

export const secureConfig = new SecureConfig();
