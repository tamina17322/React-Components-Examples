import { useEffect } from 'react';

export default function ThemeWrapper({ theme, children }) {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        document.body.style.backgroundColor = 'var(--background)';
    }, [theme]);
    return (
        <div
            data-theme={theme}
            style={{
                minHeight: '100vh',
                backgroundColor: 'var(--background)',
                color: 'var(--text-primary)',
                padding: '16px',
            }}
        >
            {children}
        </div>
    );
}