'use client'

import { useLayoutEffect, useState } from "react"

export const CopyrightYear = () => {
    const [time, setTime] = useState<number | null>(null);

    useLayoutEffect(() => {
        setTime(new Date().getFullYear())
    },[]);

    if (time) {
        return time;
    }

    return null;
}