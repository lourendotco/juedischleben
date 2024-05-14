"use client"
import { useEffect } from "react"

export function useLockedBody(
    locked
    ) {
   useEffect(() => {
        if (!locked) {
            return
        }

        const originalOverflow = document.body.style.overflow
        
        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = originalOverflow
        }
   }, [locked])
}