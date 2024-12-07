import React from "react";
import { motion, useInView } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useRef } from "react";

function Bullet({ bullet }: { bullet: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        duration: 1,
        stiffness: 130,
      }}
    >
      <li className="relative mb-4 pl-6">
        <FaCheck className={"absolute left-0 top-1.5"} />
        <span dangerouslySetInnerHTML={{ __html: bullet }} />
      </li>
    </motion.div>
  );
}

export default Bullet;
