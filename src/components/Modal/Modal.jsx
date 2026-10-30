import { useEffect, useRef, useId } from 'react';
import styles from './modal.module.css';

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
}) {
    const dialogRef = useRef(null);
    const titleId = useId();

    useEffect(() => {
        if (!isOpen) return;

        const previouslyFocused = document.activeElement;
        const dialog = dialogRef.current;

        const focusableElements = () => {
            return dialog.querySelectorAll(
                'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
            );
        };

        const elements = focusableElements();
        const firstElement = elements[0];
        firstElement?.focus();


        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
                return;
            }

            if (event.key !== 'Tab') return;

            const currentElements = Array.from(focusableElements());

            if (currentElements.length === 0) {
                event.preventDefault();
                dialog.focus();
                return;
            }

            const first = currentElements[0];
            const last = currentElements[currentElements.length - 1];

            const currentIndex = currentElements.indexOf(
                document.activeElement
            );

            if (currentIndex === -1) {
                event.preventDefault();
                first.focus();
                return;
            }

            if (event.shiftKey && currentIndex === 0) {
                event.preventDefault();
                last.focus();
            }

            else if (!event.shiftKey && currentIndex === currentElements.length - 1) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown, true);

        return () => {
            document.removeEventListener('keydown', handleKeyDown, true);
            previouslyFocused?.focus();
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={styles.overlay}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                ref={dialogRef}
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
            >
                <div className={styles.header}>
                    <h2 id={titleId} className={styles.title}>
                        {title}
                    </h2>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Close dialog"
                    >
                        ×
                    </button>
                </div>

                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    );
}
