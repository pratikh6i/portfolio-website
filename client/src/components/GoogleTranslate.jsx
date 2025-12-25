import { useEffect } from 'react';

function GoogleTranslate() {
    useEffect(() => {
        // Add Google Translate script
        const addScript = () => {
            const script = document.createElement('script');
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        };

        // Initialize Google Translate
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: 'en,mr,hi,es,fr,de,ja,zh-CN,ar,pt,ru,ko',
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                },
                'google_translate_element'
            );
        };

        // Check if script already exists
        if (!document.querySelector('script[src*="translate.google.com"]')) {
            addScript();
        }

        return () => {
            // Cleanup
            delete window.googleTranslateElementInit;
        };
    }, []);

    return (
        <div className="google-translate-wrapper">
            <div id="google_translate_element"></div>
            <style>{`
        .google-translate-wrapper {
          display: inline-block;
        }
        
        /* Hide Google branding and improve appearance */
        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 0 !important;
        }
        
        .goog-te-gadget .goog-te-combo {
          font-family: 'Inter', system-ui, sans-serif !important;
          font-size: 14px !important;
          padding: 8px 12px !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 9999px !important;
          background: white !important;
          color: #374151 !important;
          cursor: pointer !important;
          outline: none !important;
        }
        
        .goog-te-gadget .goog-te-combo:hover {
          border-color: #4285f4 !important;
        }
        
        .goog-te-gadget .goog-te-combo:focus {
          border-color: #4285f4 !important;
          box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2) !important;
        }
        
        /* Hide Google logo and powered by */
        .goog-logo-link,
        .goog-te-gadget span {
          display: none !important;
        }
        
        /* Hide the banner that appears at top */
        .goog-te-banner-frame {
          display: none !important;
        }
        
        body {
          top: 0 !important;
        }
        
        /* Hide "Powered by Google" text */
        #goog-gt-tt, .goog-te-balloon-frame {
          display: none !important;
        }
        
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
      `}</style>
        </div>
    );
}

export default GoogleTranslate;
