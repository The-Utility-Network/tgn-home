'use client';

import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
    name: string;
}

/**
 * Dynamically renders a Lucide icon by name.
 * Falls back to a circle if icon not found.
 */
export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<LucideProps>>)[name];

    if (!IconComponent) {
        // Fallback to Circle if icon name not found
        return <LucideIcons.Circle {...props} />;
    }

    return <IconComponent {...props} />;
}
