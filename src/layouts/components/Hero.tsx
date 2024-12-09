import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type BannerProps = {
  title: string | Promise<string>;
  content: string | Promise<string>;
};

function Hero({ banner }: { banner: BannerProps }) {
  const [ip, setIp] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Failed to fetch IP"));
  }, []);

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
      <h1 className=" mb-10 lg:text-5xl text-h1">Hello, {ip}</h1>
      <h2
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
