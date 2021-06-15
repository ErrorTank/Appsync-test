/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
    Dispatch,
    useEffect,
    useRef,
    useState,
} from 'react';

const useOnScreen = (
    fetchMoreData: any,
    offset: number
): Dispatch<any> => {
    const [element, setElement] = useState(null);
    const prevY = useRef(0);

    const observer = useRef(null);
    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => {
                const { y } = entry.boundingClientRect;
                if (prevY.current > y) {
                    fetchMoreData(++offset);
                }

                prevY.current = y;
            },
            { threshold: 0.5 },
        );
    }, []);

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement) {
            currentElement.POLL_INTERVAL = 100;
            currentElement.USE_MUTATION_OBSERVER = false;
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);
    return setElement;
};

export default useOnScreen;
