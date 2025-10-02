import { Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-gray-800 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-white font-medium">
              <span style={{ fontFamily: 'Times New Roman, serif' }}>frame</span>
              <span style={{ fontFamily: 'Europa Grotesk, Arial, sans-serif', fontWeight: 'bold' }}>Made</span>
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm">
            <a 
              href="https://x.com/markomp4__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors uppercase tracking-wide"
            >
              Twitter
            </a>
            <a 
              href="https://editedbymarko.carrd.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors uppercase tracking-wide"
            >
              Archive
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}