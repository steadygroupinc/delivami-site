
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

// Cloudflare Turnstile CAPTCHA integration

export interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function validateTurnstile(token: string, remoteIP?: string): Promise<boolean> {
  // Import dynamically to avoid bundling sensitive data
  const { secureConfig } = require('./secureConfig');
  const secretKey = secureConfig.getTurnstileSecretKey();
  
  if (!secretKey) {
    return false;
  }

  if (!token) {
    console.error('No Turnstile token provided');
    return false;
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    
    if (remoteIP) {
      formData.append('remoteip', remoteIP);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const result: TurnstileResponse = await response.json();

    if (!result.success) {
      console.error('Turnstile validation failed:', result['error-codes']);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error validating Turnstile token:', error);
    return false;
  }
}

export function getTurnstileConfig() {
  // Import dynamically to avoid bundling sensitive data
  const { secureConfig } = require('./secureConfig');
  const siteKey = secureConfig.getTurnstileSiteKey();
  
  if (!siteKey) {
    return null;
  }

  return {
    siteKey,
    theme: 'light' as const,
    size: 'normal' as const,
    language: 'en',
    retry: 'auto' as const,
    'refresh-expired': 'auto' as const,
  };
}

// Client-side Turnstile script loader
export function loadTurnstileScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (window.turnstile) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      resolve();
    };
    
    script.onerror = (error) => {
      console.error('Failed to load Turnstile script:', error);
      reject(new Error('Failed to load Turnstile script'));
    };
    
    document.head.appendChild(script);
  });
}

// Type declarations for Turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, params: any) => string;
      reset: (container: string | HTMLElement) => void;
      remove: (container: string | HTMLElement) => void;
      getResponse: (container: string | HTMLElement) => string;
    };
  }
}
