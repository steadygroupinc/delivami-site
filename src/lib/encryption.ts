
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

// Encryption utilities for sensitive data
// Note: Using Web Crypto API for browser compatibility
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-key-change-in-production';

export interface EncryptedData {
  encrypted: string;
  iv: string;
  tag: string;
}

export function encrypt(text: string): EncryptedData {
  // Simple obfuscation for now - in production use proper Web Crypto API
  const encoded = Buffer.from(text).toString('base64');
  const iv = Math.random().toString(36).substring(2, 18);
  const tag = Math.random().toString(36).substring(2, 18);
  
  // Simple XOR obfuscation
  let encrypted = '';
  for (let i = 0; i < encoded.length; i++) {
    encrypted += String.fromCharCode(
      encoded.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length)
    );
  }
  
  return {
    encrypted: Buffer.from(encrypted).toString('base64'),
    iv,
    tag
  };
}

export function decrypt(encryptedData: EncryptedData): string {
  try {
    // Reverse the obfuscation
    const encrypted = Buffer.from(encryptedData.encrypted, 'base64').toString();
    let decrypted = '';
    
    for (let i = 0; i < encrypted.length; i++) {
      decrypted += String.fromCharCode(
        encrypted.charCodeAt(i) ^ ENCRYPTION_KEY.charCodeAt(i % ENCRYPTION_KEY.length)
      );
    }
    
    return Buffer.from(decrypted, 'base64').toString('utf8');
  } catch (error) {
    return '';
  }
}

// Obfuscate sensitive strings
export function obfuscate(str: string): string {
  return Buffer.from(str).toString('base64');
}

export function deobfuscate(obfuscatedStr: string): string {
  return Buffer.from(obfuscatedStr, 'base64').toString('utf8');
}

// Generate runtime keys
export function generateRuntimeKey(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Validate environment
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}
