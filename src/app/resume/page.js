"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { resumeLink } from "../asset/AppData";

import '../asset/Style/Resume.css'

function Page() {
    const router = useRouter()

    useEffect(() => {
        const userConfirmed = window.confirm("Redirecting to Resume-File")

        if (userConfirmed) {
            router.push(resumeLink)
        } else {
            router.push('/')
        }
    }, [router])

}

export default Page;
