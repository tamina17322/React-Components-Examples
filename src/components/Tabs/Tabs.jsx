import { useState, useRef } from 'react';
import styles from './tabs.module.css';

export default function Tabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef([]);


    const handleKeyDown = (event, index) => {
        if (items.length === 0) return;

        let nextIndex;

        switch (event.key) {
            case 'ArrowRight':
                nextIndex = (index + 1) % items.length;
                break;

            case 'ArrowLeft':
                nextIndex = (index - 1 + items.length) % items.length;
                break;

            case 'Home':
                nextIndex = 0;
                break;

            case 'End':
                nextIndex = items.length - 1;
                break;

            default:
                return;
        }

        event.preventDefault();
        setActiveIndex(nextIndex);
        tabRefs.current[nextIndex]?.focus();
    };


    return (
        <div className={styles.tabs}>
            <div className={styles.tabList} role="tablist">
                {items.map((item, index) => (
                    <button
                        key={item.id}
                        ref={(element) => {
                            tabRefs.current[index] = element;
                        }}
                        id={`tab-${item.id}`}
                        type="button"
                        role="tab"
                        aria-selected={activeIndex === index}
                        aria-controls={`panel-${item.id}`}
                        tabIndex={activeIndex === index ? 0 : -1}
                        className={`${styles.tab} ${activeIndex === index ? styles.active : ''
                            }`}
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {items.map((item, index) => (
                <div
                    key={item.id}
                    id={`panel-${item.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${item.id}`}
                    tabIndex={0}
                    hidden={activeIndex !== index}
                    className={styles.panel}
                >
                    {item.content}
                </div>
            ))}
        </div>
    );
}
