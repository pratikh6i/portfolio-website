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
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="relative inline-block mt-1">
      {/* Custom Icon (Visual) */}
      <div className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-600">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      </div>

      {/* Google Translate Widget (Hidden but Overlayed) */}
      <div
        id="google_translate_element"
        className="absolute top-0 left-0 w-full h-full opacity-0 overflow-hidden cursor-pointer scale-150 origin-top-left"
        style={{ zIndex: 10 }}
      >
        {/* The Google Translate dropdown will fill this invisible container, 
            so clicking the icon effectively clicks the dropdown */}
      </div>

      <style>{`
        /* Hide everything from Google except the select dropdown which is made invisible by opacity-0 on parent */
        .goog-te-gadget {
            font-size: 0 !important;
        }
        .goog-te-gadget span {
            display: none !important;
        }
        .goog-te-banner-frame {
            display: none !important;
        }
        #goog-gt-tt {
            display: none !important;
        }
        body {
            top: 0 !important;
        }
      `}</style>
    </div>
  );
}

export default GoogleTranslate;
