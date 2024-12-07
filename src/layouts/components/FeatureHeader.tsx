import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FeatureHeaderProps = {
  title: string | Promise<string>;
  content: string | Promise<string>;
};

function FeatureHeader({
  feature,
  index,
}: {
  feature: FeatureHeaderProps;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        type: "spring",
        duration: 1,
        stiffness: 130,
      }}
    >
      <h2
        dangerouslySetInnerHTML={{
          __html: typeof feature.title === "string" ? feature.title : "",
        }}
        className="mb-4"
      />
      <p
        dangerouslySetInnerHTML={{
          __html: typeof feature.content === "string" ? feature.content : "",
        }}
        className="mb-8 text-lg"
      />
    </motion.div>
  );
}

export default FeatureHeader;
