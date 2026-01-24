import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Chrome } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/toaster";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Documentation", href: "#docs" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleAddToChrome = () => {
    if (!user) {
      toast.error("Please login to add the extension!");
      navigate("/login");
      return;
    }
    window.open("https://chrome.google.com/webstore/detail/your-extension-id", "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PhishGuard</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA + Auth */}
          <div className="hidden md:flex items-center gap-4">
            {/* Add to Chrome (orange now) */}
            {user && (
              <motion.button
                onClick={handleAddToChrome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-300/40 transition-all duration-300 flex items-center gap-2"
              >
                <Chrome className="w-4 h-4" />
                Add to Chrome
              </motion.button>
            )}

            {/* Auth Section */}
            {user ? (
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
                <span className="font-medium text-foreground">{user.displayName}</span>
                <motion.button
                  onClick={async () => await signOut(auth)}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 font-semibold rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-300/40 transition-all duration-300"
                >
                  Logout
                </motion.button>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-300/40 hover:from-orange-500 hover:to-orange-700 transition-all duration-300"
                >
                  Login
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden border-t border-border"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium hover:text-foreground"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Add to Chrome (orange) */}
                {user && (
                  <motion.button
                    onClick={handleAddToChrome}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-300/40 w-full flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Chrome className="w-4 h-4" />
                    Add to Chrome
                  </motion.button>
                )}

                {/* Auth Section */}
                {user ? (
                  <div className="flex items-center gap-3 mt-4 justify-center">
                    <span className="font-medium text-foreground">{user.displayName}</span>
                    <motion.button
                      onClick={async () => {
                        await signOut(auth);
                        setIsOpen(false);
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 font-semibold rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-300/40 w-full text-center transition-all duration-300"
                    >
                      Logout
                    </motion.button>
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/login"
                      className="px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-300/40 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 text-center w-full block"
                    >
                      Login
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
