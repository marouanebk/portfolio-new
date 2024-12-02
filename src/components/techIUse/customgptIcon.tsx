import Image from "next/image";
import { motion } from "framer-motion";


interface GptWidgetProps {
    iconPath : string,
}
export default function GptWidget({ iconPath } : GptWidgetProps) {
    return (
        <motion.div
            className="group w-20 h-20 flex items-center justify-center relative"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Base Icon */}
            <div className="absolute inset-0">
                <Image
                    src={iconPath}
                    alt="Tech Icon"
                    width={80}
                    height={80}
                    className="group-hover:hidden"
                />
            </div>

            {/* Hover Effect Icon */}
            <div className="absolute inset-0 hidden group-hover:block">
                <Image
                    src={iconPath}
                    alt="Tech Icon Hover"
                    width={80}
                    height={80}
                    className="filter hover:brightness-200"
                    style={{
                        maskImage: `url(${iconPath})`,
                        WebkitMaskImage: `url(${iconPath})`,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
                    }}
                />
            </div>
        </motion.div>
    );
}
