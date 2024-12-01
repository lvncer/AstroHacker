import React from "react";
import { motion } from "framer-motion";

type BannerProps = {
  title: string | Promise<string>;
  content: string | Promise<string>;
};

function Hero({ banner }: { banner: BannerProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.5,
        stiffness: 130,
      }}
    >
      <h1
        dangerouslySetInnerHTML={{ __html: banner.title }}
        className="mb-6 text-h3 lg:text-7xl"
      />
      <p
        dangerouslySetInnerHTML={{ __html: banner.content }}
        className="my-14"
      />
    </motion.div>
  );
}

export default Hero;
