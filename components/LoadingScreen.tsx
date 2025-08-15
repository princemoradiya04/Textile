import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center z-50"
    >
      {/* Loading Animation Container */}
      <div className="flex flex-col items-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary via-primary-700 to-primary-800 rounded-2xl flex items-center justify-center shadow-xl"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 10px 25px -3px rgba(30, 42, 56, 0.1)",
                "0 20px 40px -3px rgba(30, 42, 56, 0.2)",
                "0 10px 25px -3px rgba(30, 42, 56, 0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Enhanced textile weave icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <g strokeLinecap="round" strokeLinejoin="round">
                {/* Horizontal threads */}
                <motion.path 
                  d="M2 6h20M2 12h20M2 18h20" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  opacity="0.9"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Vertical threads */}
                <motion.path 
                  d="M6 2v20M12 2v20M18 2v20" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  opacity="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
                {/* Weave intersections */}
                <motion.circle 
                  cx="6" cy="6" r="1" fill="currentColor" opacity="0.8"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
                />
                <motion.circle 
                  cx="12" cy="12" r="1" fill="currentColor" opacity="0.8"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1.0 }}
                />
                <motion.circle 
                  cx="18" cy="18" r="1" fill="currentColor" opacity="0.8"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1.2 }}
                />
              </g>
            </svg>
          </motion.div>
          
          {/* Accent dot */}
          <motion.div 
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent to-accent-700 rounded-full flex items-center justify-center shadow-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl font-bold text-foreground mb-2" 
            style={{ fontFamily: 'Playfair Display, serif' }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Global
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground" 
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium Textile Manufacturing
          </motion.p>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center space-y-4"
        >
          {/* Progress Bar */}
          <div className="w-48 sm:w-64 h-1 bg-muted-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-500 to-accent-700 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
          
          {/* Loading Text */}
          <motion.p 
            className="text-xs sm:text-sm text-muted-foreground font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Crafting Excellence...
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}