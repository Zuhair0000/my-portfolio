import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <div className="mb-4">
            <p className="text-gray-300 mb-2">
              &copy; {new Date().getFullYear()} ZUHAIR AHMED. All Rights
              Reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              Designed with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-current" /> by ZUHAIR
              AHMED
            </p>
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>
      </div>
    </footer>
  );
}
