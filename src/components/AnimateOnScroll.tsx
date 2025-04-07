import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    className?: string;
}

const AnimateOnScroll = ({ children, className }: AnimateOnScrollProps) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimateOnScroll;
